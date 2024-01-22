<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Player>
 */
class PlayerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'shirt_no' => $this->faker->numberBetween(1, 50),
            'position' => $this->faker->numberBetween(1, 5),
            'team_id' => $this->faker->numberBetween(1, 10),
        ];
    }
}
