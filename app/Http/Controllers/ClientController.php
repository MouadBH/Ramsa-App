<?php

namespace App\Http\Controllers;

use App\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
    public function __construct()
    {
       // return $this->middleware('auth');
    }

    public function index(Request $request)
    { 
        $allClient = Client::all();

        return response()->json(['clients' => $allClient]);
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'cin' => 'required|string|max:255|unique:clients',
            'email' => 'required|email|string|min:6',
            'adress' => 'required|string|max:255',
            'tele' => 'required|string|max:255',

        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson());
        }

        $client = new Client();
        $client->nom = $request->json()->get('nom');
        $client->prenom = $request->json()->get('prenom');
        $client->cin = $request->json()->get('cin');
        $client->email = $request->json()->get('email');
        $client->adress_corp = $request->json()->get('adress');
        $client->tel = $request->json()->get('tele');
        $client->save();

        return response()->json(['client' => $client], 201);
    } 

    public function show($id)
    {
        $client = Client::findOrFail($id);
        return response()->json(['client' => $client], 200);
    }

    public function update(Request $request,$id)
    {
        $client = Client::findOrFail($id);

        $validator = Validator::make($request->json()->all(), [
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'cin' => 'required|string|max:255',
            'adress' => 'required|string|min:6',
            'tele' => 'required|string|min:6',
            'email' => 'required|string|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson());
        }

        $client->nom = $request->json()->get('nom');
        $client->prenom = $request->json()->get('prenom');
        $client->cin = $request->json()->get('cin');
        $client->adress_corp = $request->json()->get('adress');
        $client->tel = $request->json()->get('tele');
        $client->email = $request->json()->get('email');
        $client->save();

        return response()->json(['client' => $client], 201);
    }

    public function login(Request $request)
    {
        
    }
    

    public function delete($id)
    {
        $client = Client::findOrFail($id);
        $client->delete();
        return response()->json('Successfully Deleted');
    }
}
