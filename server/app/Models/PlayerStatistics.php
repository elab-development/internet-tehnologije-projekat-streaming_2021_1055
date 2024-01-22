<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlayerStatistics extends Model
{
    use HasFactory;

    protected $fillable = ['player_id', 'game_id', 'points', 'fouls', 'assists', 'rebounds'];

    protected $casts = [
        'player_id' => 'integer',
        'game_id' => 'integer',
        'points' => 'integer',
        'fouls' => 'integer',
        'assists' => 'integer',
        'rebounds' => 'integer'
    ];

    public function player()
    {
        return $this->belongsTo(Player::class);
    }

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
}
