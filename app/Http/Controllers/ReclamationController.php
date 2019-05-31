<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Reclamation;

class ReclamationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allReclamations = Reclamation::all();
        return response()->json(['reclamations' => $allReclamations]);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $reclamation = Reclamation::findOrFail($id);
        return response()->json(['reclamation' => $reclamation], 200);
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
        $reclamation = Reclamation::findOrFail($id);
        $reclamation->description_equipe = $request->json()->get('description_equipe');
        $reclamation->traite = $request->json()->get('traite');
        $reclamation->save();

        return response()->json(['reclamation' => $reclamation], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $reclamation = Reclamation::findOrFail($id);
        $reclamation->delete();
        return response()->json('Successfully Deleted');
    }

    public function getReclamationEquipe($id)
    {
        return response()->json(Reclamation::findOrFail($id)->equipe);
    }

    public function getReclamationContrat($id)
    {
        return response()->json(Reclamation::findOrFail($id)->contrat);
    }

    public function AffectToEquipe(Request $request, $id)
    {
        $reclamation = Reclamation::findOrFail($id);

        $reclamation->id_equipe = $request->json()->get('id_equipe');
        $reclamation->affecte = $request->json()->get('affecte');
        $reclamation->save();

        return response()->json(['reclamation' => $reclamation], 201);

    }
}
