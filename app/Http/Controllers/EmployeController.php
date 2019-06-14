<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employe;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Config;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;

class EmployeController extends Controller
{
    function __construct()
    {
      \Config::set('jwt.user', 'App\Employe');
      \Config::set('auth.providers.users.model', \App\Employe::class);
    }
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
          'email' => 'required|max:255'
      ]);

      if ($validator->fails()) {
          return response()->json($validator->errors()->toJson());
      }

      $employe->nom = $request->json()->get('nom');
      $employe->prenom = $request->json()->get('prenom');
      $employe->id_equipe = $request->json()->get('id_equipe');
      $employe->email = $request->json()->get('email');
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

    public function login(Request $request)
    {

        $credentials = $request->json()->all();

        try {
        //  dd($credentials);
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'les donnes pas valid']);
            }
        } catch (JWTException $ex) {
            return response()->json(['error' => 'token error'], 500);
        }
        //dd($token);
        $user = Employe::where('email', '=', $credentials['email'])->firstOrFail();
        $user_id = $user->id;
        $user_nom = $user->nom;
        $user_prenom = $user->prenom;
        $user_id_equipe = $user->id_equipe;
        return response()->json(compact('token', 'user_id', 'user_nom', 'user_prenom', 'user_id_equipe'));
    }
}
