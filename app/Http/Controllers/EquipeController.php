<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Equipe;
use Illuminate\Support\Facades\Validator;

class EquipeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allEquipes = Equipe::all();
        return response()->json(['equipes' => $allEquipes]);
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
            'libelle' => 'required|max:255',
            'id_loc' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson());
        }

        $equipe = new Equipe();
        $equipe->libelle = $request->json()->get('libelle');
        $equipe->id_loc = $request->json()->get('id_loc');
        $equipe->save();

        return response()->json(['equipe' => $equipe], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $equipe = Equipe::findOrFail($id);
        return response()->json(['equipe' => $equipe], 200);
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
        $equipe = Equipe::findOrFail($id);

        $validator = Validator::make($request->json()->all(), [
            'libelle' => 'required|max:255',
            'id_loc' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson());
        }

        $equipe->libelle = $request->json()->get('libelle');
        $equipe->id_loc = $request->json()->get('id_loc');
        $equipe->save();

        return response()->json(['equipe' => $equipe], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $equipe = Equipe::findOrFail($id);
        $equipe->delete();
        return response()->json('Successfully Deleted');
    }

    public function getEquipeLoc($id)
    {
        return response()->json(Equipe::findOrFail($id)->loc);
    }

    public function getEquipeEmplyes($id)
    {
      return response()->json(Equipe::findOrFail($id)->employes);
    }

    public function getEquipeReclamations($id)
    {
      return response()->json(Equipe::findOrFail($id)->reclamations);
    }
}
