<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamStatistics extends Model
{
    use HasFactory;
    protected $fillable = ['host', 'points', 'team_id', 'game_id', 'fouls', 'substitutions_left'];

    protected $casts = [
        'host' => 'boolean',
        'points' => 'integer',
        'game_id' => 'integer',
        'team_id' => 'integer',
        'fouls' => 'integer',
        'substitutions_left' => 'integer',
    ];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
    public function game()
    {
        return $this->belongsTo(Game::class);
    }
}
