<?php

namespace App\Http\Controllers;

use App\Http\Resources\GameCollection;
use App\Http\Resources\GameResource;
use App\Models\Game;
use App\Services\GameService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class GameController extends Controller
{

    private $gameService;

    public function __construct(GameService $gameService)
    {
        $this->gameService = $gameService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $teamId = $request->query('teamId', null);
        $from = $request->query('from', null);
        $to = $request->query('to', null);
        $page = $request->query('page', 0);
        $size = $request->query('size', 20);
        return response(new GameCollection($this->gameService->searchGames($teamId, $from, $to, $page, $size)));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'private' => 'required|boolean',
            'host' => 'required|integer',
            'guest' => 'required|integer',
            'startTime' => 'required|date'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        try {
            return $this->gameService->createGame($request->all());
        } catch (\Exception $ex) {
            return response()->json($ex->getMessage(), 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Game $game)
    {
        //

        return response()->json(new GameResource($game));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Game $game)
    {
        $link = $request->input('link', null);
        $private = $request->input('private', null);
        if ($link != null) {
            $game->link = $link;
        }
        if ($private != null) {
            $game->private = $private;
        }
        $game->update();
        return response()->json(new GameResource($game));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Game $game)
    {
        $game->delete();
        return response()->noContent();
    }
}
