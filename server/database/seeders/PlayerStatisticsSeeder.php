<?php

namespace Database\Seeders;

use App\Models\PlayerStatistics;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlayerStatisticsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PlayerStatistics::factory(250)->create();
    }
}
