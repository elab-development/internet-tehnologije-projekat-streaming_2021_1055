<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PlayerStatisticsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'player' => new PlayerResource($this->player),
            'gameId' => $this->game_id,
            'points' => $this->points,
            'fouls' => $this->fouls,
            'assists' => $this->assists,
            'rebounds' => $this->rebounds
        ];
    }
}
