<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::get('profile', 'UserController@getAuthenticatedUser');

Route::get('clients', 'ClientController@index');
Route::post('client', 'ClientController@store');
Route::get('client/{id}', 'ClientController@show');
Route::put('client/update/{id}', 'ClientController@update');
Route::delete('client/delete/{id}', 'ClientController@delete');

Route::get('contrats', 'ContratController@index');
Route::post('contrat', 'ContratController@store');
Route::get('contrat/{id}', 'ContratController@show');
    Route::get('contrat/{id}/client', 'ContratController@getContratClient');
    Route::get('contrat/{id}/loc', 'ContratController@getContratLoc');
    Route::get('contrat/{id}/secteur', 'ContratController@getContratSecteur');
    Route::get('contrat/{id}/tourne', 'ContratController@getContratTourne');
Route::put('contrat/update/{id}', 'ContratController@update');
Route::delete('contrat/delete/{id}', 'ContratController@destroy');

Route::get('locs', 'LocController@index');

Route::get('secteurs', 'SecteurController@index');

Route::get('tournes', 'TourneController@index');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
