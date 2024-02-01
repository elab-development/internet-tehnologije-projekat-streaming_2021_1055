<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TeamStatistics>
 */
class TeamStatisticsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'team_id' => $this->faker->numberBetween(1, 10),
            'game_id' => $this->faker->numberBetween(1, 10),
            'host' => $this->faker->boolean,
            'points' => $this->faker->numberBetween(40, 117),
            'fouls' => $this->faker->numberBetween(0, 5),
            'substitutions_left' => $this->faker->numberBetween(0, 6),
        ];
    }
}
