<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;
use App\User;


class UserController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'cin' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }
        
        $user = new User();
        $user->nom = $request->json()->get('nom');
        $user->prenom = $request->json()->get('prenom');
        $user->cin = $request->json()->get('cin');
        $user->password = Hash::make($request->json()->get('password'));
        $user->save();

        // $user = User::create([
        //     'nom' => $request->json()->get('nom'),
        //     'cin' => $request->json()->get('cin'),
        //     'password' => Hash::make($request->json()->get('password')),
        //     'prenom' => $request->json()->get('prenom')
        // ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(['user' => $user, 'token' => $token], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->json()->all();

        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'donnes pas valid'], 400);
            }
        } catch (JWTException $ex) {
            return response()->json(['error' => 'token error'], 500);
        }

        return response()->json(compact('token'));
    }

    public function getAuthenticatedUser()
    {
        try {
            if(!$user = JWTAuth::praseToken()->authenticate()){
                return response()->json(['user not found'], 400);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $ex) {
            return response()->json(['token_expired'], $ex->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $ex) {
            return response()->json(['token_invalid'], $ex->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $ex) {
            return response()->json(['token_absent'], $ex->getStatusCode());
        }

        return response()->json(compact('user'));
    }
}
