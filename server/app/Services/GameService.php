<?php

namespace App\Services;

use App\Models\Game;
use App\Models\Team;
use App\Models\TeamStatistics;
use Exception;
use Illuminate\Support\Facades\DB;

class GameService
{

    public function searchGames($teamId, $from, $to, $page, $size)
    {
        $query = Game::query();
        if ($from != null) {
            $query->where('start_time', '>', $from);
        }
        if ($to != null) {
            $query->where('start_time', '>', $to);
        }
        if ($teamId != null) {
            $res = DB::table('team_statistics')->select('game_id')->where('team_id', $teamId)->get();
            $ids = [];
            foreach ($res as $id) {
                $ids[] = $id['game_id'];
            }
            $query->where('id', 'in', $ids);
        }
        return $query->paginate($size, $page = $page);
    }

    public function getActiveGames($onlyPublic)
    {
        $query = Game::query()
            ->where('finished', false)
            ->where('start_time', '<=', now());
        if ($onlyPublic) {
            $query = $query->where('private', false);
        }
        return $query->get();
    }

    public function createGame($data)
    {
        try {
            DB::beginTransaction();
            $host = $this->getTeamById($data['host']);
            $guest = $this->getTeamById($data['guest']);
            $game = Game::create([
                'link' => $data['link'],
                'private' => $data['private'],
                'start_time' => $data['startTime'],
            ]);
            TeamStatistics::create([
                'team_id' => $host->id,
                'game_id' => $game->id
            ]);
            TeamStatistics::create([
                'team_id' => $guest->id,
                'game_id' => $game->id
            ]);
            DB::commit();
            return $game;
        } catch (\Exception $ex) {
            DB::rollBack();
            throw $ex;
        }
    }



    private function getTeamById($id)
    {
        $team = Team::find($id);
        if (!$team) {
            throw new Exception("Missing team with id: " . $id);
        }
        return $team;
    }
}
