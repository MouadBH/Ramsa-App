<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/ho', function () {
    return response()->json(App\Contrat::find(1)->loc);
});
 
Route::get('/{path}', function (){
    return view('welcome');
})->where('path', '.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
