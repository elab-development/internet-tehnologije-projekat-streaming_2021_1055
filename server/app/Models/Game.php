<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $fillable = ['start_time', 'private', 'link', 'finished'];

    protected $casts = [
        'start_time' => 'timestamp',
        'private' => 'boolean',
        'finished' => 'boolean'
    ];

    public function teamStatistics()
    {
        return $this->hasMany(TeamStatistics::class);
    }

    public function playerStatistics()
    {
        return $this->hasMany(PlayerStatistics::class);
    }
}
