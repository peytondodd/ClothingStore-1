<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'firstName' => 'required|string|max:255',
            'secondName' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed',
            'address' => 'required|string',
            'PostalCode' => 'required|string',
            'city' => 'required|string',
            'country' => 'required|string'
        ]);

        $user = new User([
            'firstName' => $request->firstName,
            'secondName' => $request->secondName,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'address' => $request->address,
            'PostalCode' => $request->PostalCode,
            'city' => $request->city,
            'country' => $request->country
        ]);
        $user->save();

        return response()->json([
            'message' => 'Successfully created user!'
        ], 201);


    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        $credentials = request(['email', 'password']);
        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Credentials do not match'
            ], 200);
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
    public function getUser(Request $request){
        return $request->user();

    }




    public function edit(Request $request)
    {
        $user = $request->user();
        $updatedUser = User::find($user->id);
        if($request->input('old_password')){
        if (Hash::check($request->input('old_password'), $user->password)) {
            $validatedData = $request->validate([
                'password' => 'required|max:255',
            ]);
            $updatedUser->fill($request->input())->save();
            return response(['message' =>"Credentials succesfully updated! " , "user" => $updatedUser]);
        }
        return response(['error' =>"Old Password is incorrect! "]);
    }
        $updatedUser->fill($request->input())->save();
        return response(['message' =>"Credentials succesfully updated! ", "user" => $updatedUser]);

    }
}
