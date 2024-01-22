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
        Schema::table('games', function (Blueprint $table) {
            $table->dropConstrainedForeignId('host');
            $table->dropConstrainedForeignId('guest');
            $table->text('link')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('games', function (Blueprint $table) {
            $table->dropColumn('link');
            $table->foreignId('host')->constrained('teams', 'id');
            $table->foreignId('guest')->constrained('teams', 'id');
        });
    }
};
