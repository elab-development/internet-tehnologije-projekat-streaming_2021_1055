<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GameResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $user = $request->user();
        return [
            'id' => $this->id,
            'startTime' => $this->start_time,
            'private' => $this->private,
            'finished' => $this->finished,
            'link' => $user && $user->admin ? $this->link : null,
            'teams' => TeamStatisticsResource::collection($this->teamStatistics),
            'players' => PlayerStatisticsResource::collection($this->playerStatistics)
        ];
    }
}
