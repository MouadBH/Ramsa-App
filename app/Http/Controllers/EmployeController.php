<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employe;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class EmployeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $allEmployes = Employe::all();
      return response()->json(['employes' => $allEmployes]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $validator = Validator::make($request->json()->all(), [
          'nom' => 'required|max:255',
          'prenom' => 'required|max:255',
          'id_equipe' => 'required|max:255',
          'email' => 'required|max:255'
      ]);

      if ($validator->fails()) {
          return response()->json($validator->errors()->toJson());
      }

      $employe = new Employe();
      $employe->nom = $request->json()->get('nom');
      $employe->prenom = $request->json()->get('prenom');
      $employe->id_equipe = $request->json()->get('id_equipe');
      $employe->email = $request->json()->get('email');
      $employe->password = Hash::make('123456');
      $employe->save();

      return response()->json(['employe' => $employe], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      $employe = Employe::findOrFail($id);
      return response()->json(['employe' => $employe], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $employe = Employe::findOrFail($id);
      $validator = Validator::make($request->json()->all(), [
          'nom' => 'required|max:255',
          'prenom' => 'required|max:255',
          'id_equipe' => 'required|max:255',
          'email' => 'required|max:255',
          'password' => 'required|max:255'
      ]);

      if ($validator->fails()) {
          return response()->json($validator->errors()->toJson());
      }

      $employe->nom = $request->json()->get('nom');
      $employe->prenom = $request->json()->get('prenom');
      $employe->id_equipe = $request->json()->get('id_equipe');
      $employe->email = $request->json()->get('email');
      $employe->password = $request->json()->get('password');
      $employe->save();

      return response()->json(['employe' => $employe], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $equipe = Employe::findOrFail($id);
      $equipe->delete();
      return response()->json('Successfully Deleted');
    }

    public function getEquipe($id)
    {
        return response()->json(Equipe::findOrFail($id)->equipe);
    }
}
