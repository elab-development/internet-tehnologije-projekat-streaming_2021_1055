<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GameItemResource extends JsonResource
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
            'startTime' => $this->start_time,
            'private' => $this->private,
            'finished' => $this->finished,
            "hasLink" => $this->link != null,
            'teams' => TeamStatisticsResource::collection($this->teamStatistics)
        ];
    }
}
