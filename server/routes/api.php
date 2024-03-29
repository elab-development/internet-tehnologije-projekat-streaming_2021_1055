<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\StreamController;
use App\Http\Controllers\TeamController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::get('teams', [TeamController::class, 'index']);
Route::get('games/{id}/stream', [StreamController::class, 'stream']);

Route::apiResource('games', GameController::class)->only('index');
Route::get('games/active', [GameController::class, 'getActiveGames']);

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('games', GameController::class)->only('show');
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('profile', [AuthController::class, 'profile']);
});
Route::group(['middleware' => ['auth:sanctum', 'admin']], function () {
    Route::apiResource('games', GameController::class)->only('store', 'destroy', 'update');
});
