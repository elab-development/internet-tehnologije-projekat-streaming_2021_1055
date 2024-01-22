<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;

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
        return response()->redirectTo($game->link);
    }
}
