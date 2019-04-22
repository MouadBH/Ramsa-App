<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contrat;
use Illuminate\Support\Facades\Validator;

class ContratController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allContrats = Contrat::all();

        return response()->json(['contrats' => $allContrats]);
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
            'date_debut' => 'required|max:255',
            'date_fin' => 'required|string|max:255',
            'id_client' => 'required|max:255',
            'adress_loc' => 'required|string|min:6',
            'id_loc' => 'required|max:255',
            'id_secteur' => 'required|max:255',
            'id_tournee' => 'required|max:255',
            'order' => 'required|max:255',
            'compteur' => 'required|max:255',
            'lat' => 'required|max:255',
            'long' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson());
        }

        $contrat = new Contrat();
        $contrat->date_debut = $request->json()->get('date_debut');
        $contrat->date_fin = $request->json()->get('date_fin');
        $contrat->id_client = $request->json()->get('id_client');
        $contrat->adress_loc = $request->json()->get('adress_loc');
        $contrat->id_loc = $request->json()->get('id_loc');
        $contrat->id_secteur = $request->json()->get('id_secteur');
        $contrat->id_tournee = $request->json()->get('id_tournee');
        $contrat->order = $request->json()->get('order');
        $contrat->compteur = $request->json()->get('compteur');
        $contrat->lat = $request->json()->get('lat');
        $contrat->long = $request->json()->get('long');
        $contrat->save();

        return response()->json(['contrat' => $contrat], 201);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $contrat = Contrat::findOrFail($id);
        return response()->json(['contrat' => $contrat], 200);
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
        $contrat = Contrat::findOrFail($id);

        $validator = Validator::make($request->json()->all(), [
            'date_debut' => 'required|max:255',
            'date_fin' => 'required|string|max:255',
            'id_client' => 'required|max:255',
            'adress_loc' => 'required|string|min:6',
            'id_loc' => 'required|max:255',
            'id_secteur' => 'required|max:255',
            'id_tournee' => 'required|max:255',
            'order' => 'required|max:255',
            'compteur' => 'required|max:255',
            'lat' => 'required|max:255',
            'long' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson());
        }

        $contrat->date_debut = $request->json()->get('date_debut');
        $contrat->date_fin = $request->json()->get('date_fin');
        $contrat->id_client = $request->json()->get('id_client');
        $contrat->adress_loc = $request->json()->get('adress_loc');
        $contrat->id_loc = $request->json()->get('id_loc');
        $contrat->id_secteur = $request->json()->get('id_secteur');
        $contrat->id_tournee = $request->json()->get('id_tournee');
        $contrat->order = $request->json()->get('order');
        $contrat->compteur = $request->json()->get('compteur');
        $contrat->lat = $request->json()->get('lat');
        $contrat->long = $request->json()->get('long');
        $contrat->save();

        return response()->json(['contrat' => $contrat], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contrat = Contrat::findOrFail($id);
        $contrat->delete();
        return response()->json('Successfully Deleted');
    }

    public function getContratClient($id)
    {
        return response()->json(Contrat::findOrFail($id)->client);
    }
    public function getContratLoc($id)
    {
        return response()->json(Contrat::findOrFail($id)->loc);
    }
    public function getContratSecteur($id)
    {
        return response()->json(Contrat::findOrFail($id)->secteur);
    }
    public function getContratTourne($id)
    {
        return response()->json(Contrat::findOrFail($id)->tourne);
    }
}
