<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\EmailSubscriberController;

Route::group(['as' => 'admin.', 'prefix' => 'admin', 'middleware' => ['auth', 'verified']], function () {
    Route::get('dashboard', AdminDashboardController::class)->name('dashboard');

    Route::resource('users', UserController::class)->names('users');
    Route::resource('email_subscribers', EmailSubscriberController::class)->names('email_subscribers');
});
