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

Route::get('equipes', 'EquipeController@index');
Route::post('equipe', 'EquipeController@store');
Route::get('equipe/{id}', 'EquipeController@show');
    Route::get('equipe/{id}/loc', 'EquipeController@getEquipeLoc');
    Route::get('equipe/{id}/employes', 'EquipeController@getEquipeEmplyes');
Route::put('equipe/update/{id}', 'EquipeController@update');
Route::delete('equipe/delete/{id}', 'EquipeController@destroy');

Route::get('reclamations', 'ReclamationController@index');
Route::get('reclamation/{id}', 'ReclamationController@show');
    Route::get('reclamation/{id}/equipe', 'ReclamationController@getReclamationEquipe');
    Route::get('reclamation/{id}/contrat', 'ReclamationController@getReclamationContrat');
Route::put('reclamation/affectequipe/{id}', 'ReclamationController@AffectToEquipe');
Route::delete('reclamation/delete/{id}', 'ReclamationController@destroy');

Route::get('locs', 'LocController@index');
Route::get('loc/{id}', 'LocController@show');

Route::get('secteurs', 'SecteurController@index');

Route::get('tournes', 'TourneController@index');

Route::get('employes', 'EmployeController@index');
Route::post('employe', 'EmployeController@store');
Route::get('employe/{id}', 'EmployeController@show');
    Route::get('employe/{id}/equipe', 'EmployeController@getEquipe');
Route::put('employe/update/{id}', 'EmployeController@AffectToEquipe');
Route::delete('employe/delete/{id}', 'EmployeController@destroy');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
