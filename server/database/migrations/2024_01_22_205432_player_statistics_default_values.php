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
        Schema::table('player_statistics', function (Blueprint $table) {
            $table->integer('points')->default(0)->change();
            $table->integer('rebounds')->default(0)->change();
            $table->integer('assists')->default(0)->change();
            $table->integer('fouls')->default(0)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('player_statistics', function (Blueprint $table) {
            $table->integer('points')->change();
            $table->integer('rebounds')->change();
            $table->integer('assists')->change();
            $table->integer('fouls')->change();
        });
    }
};
