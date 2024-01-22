<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('player_statistics', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('player_id')->constrained()->cascadeOnDelete();
            $table->foreignId('game_id')->constrained();
            $table->integer('points');
            $table->integer('rebounds');
            $table->integer('assists');
            $table->integer('fouls');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('player_statistics');
    }
};
