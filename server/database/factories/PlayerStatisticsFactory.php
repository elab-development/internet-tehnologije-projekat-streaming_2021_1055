<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PlayerStatistics>
 */
class PlayerStatisticsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'player_id' => $this->faker->numberBetween(1, 100),
            'game_id' => $this->faker->numberBetween(1, 10),
            'points' => $this->faker->numberBetween(0, 17),
            'fouls' => $this->faker->numberBetween(0, 5),
            'assists' => $this->faker->numberBetween(0, 9),
            'rebounds' => $this->faker->numberBetween(0, 8),
        ];
    }
}
