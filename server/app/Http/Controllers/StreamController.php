<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class StreamController extends Controller
{
    public function stream(Request $request, $gameId)
    {
        $user = $request->user();
        $game = Game::find($gameId);
        if (!$game) {
            return response()->json(['message' => 'Missing game', 404]);
        }
        if ($game->private && !$user) {
            return  response()->json(['message' => 'Missing game', 404]);
        }
        return response()->json(["link" => $game->link]);
    }
}
