<?php

namespace Database\Seeders;

use App\Models\Game;
use App\Models\PlayerStatistics;
use App\Models\TeamStatistics;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 100; $i = $i + 1) {
            $game = Game::factory()->create();
            $host = TeamStatistics::factory()->create([
                'host' => true,
                'game_id' => $game->id
            ]);
            $guest = TeamStatistics::factory()->create([
                'host' => false,
                'game_id' => $game->id
            ]);
            foreach ($host->team->players as $player) {
                PlayerStatistics::factory()->create([
                    'player_id' => $player->id,
                    'game_id' => $game->id
                ]);
            }
            foreach ($guest->team->players as $player) {
                PlayerStatistics::factory()->create([
                    'player_id' => $player->id,
                    'game_id' => $game->id
                ]);
            }
        }
    }
}
