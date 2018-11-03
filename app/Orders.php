<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    protected $fillable = [
        'user_id', 'paid', 'status_id'
    ];

    public function user(){
        return $this->belongsTo('App\User');

    }
    public function OrderProduct(){
        return $this->hasMany('App\OrderProduct');
    }
}
