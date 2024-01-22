<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TeamStatisticsResource extends JsonResource
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
            'teamId' => $this->team_id,
            'gameId' => $this->game_id,
            'host' =>  $this->host,
            'points' => $this->points,
            'fouls' => $this->fouls,
            'substitutionsLeft' => $this->substitutions_left
        ];
    }
}
