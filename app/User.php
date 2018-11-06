<?php

namespace App;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Hash;
class User extends Authenticatable

{
    use HasApiTokens, Notifiable;

    public function setPasswordAttribute($pass){

        $this->attributes['password'] = Hash::make($pass);

    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','firstName','secondName','address','PostalCode','city','country'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token','admin'
    ];

    public function orders(){
        return $this->hasMany('App\Orders');
    }
}
