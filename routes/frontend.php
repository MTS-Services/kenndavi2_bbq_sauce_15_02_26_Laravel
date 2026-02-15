<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Admin\EmailSubscriberController;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::group([], function () {
    Route::get('/', [HomeController::class, 'home'])->name('home');
    Route::post('/subscribe', [EmailSubscriberController::class, 'store'])->name('subscribe');
});
