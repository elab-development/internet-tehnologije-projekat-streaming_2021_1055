<?php

namespace Database\Seeders;

use App\Models\Team;
use App\Models\TeamStatistics;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TeamStatisticsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TeamStatistics::factory(50)->create();
    }
}
