<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    use HasFactory;
    protected $fillable = ['first_name', 'last_name', 'shirt_no', 'position', 'team_id'];

    protected $casts = [
        'shirt_no' => 'integer',
        'position' => 'integer',
        'id' => 'integer',
        'team_id' => 'integer'
    ];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
