<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $fillable = ['start_time', 'private', 'host', 'guest'];

    protected $casts = [
        'start_time' => 'timestamp',
        'private' => 'boolean',
        'host' => 'integer',
        'guest' => 'integer'
    ];

    public function hostTeam()
    {
        return $this->belongsTo(Team::class, 'host', 'id');
    }

    public function guestTeam()
    {
        return $this->belongsTo(Team::class, 'guest', 'id');
    }
}
