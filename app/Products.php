<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $fillable = [
        'categories_id', 'name', 'price','stars','description','amount'
    ];
    public function categories(){
        return $this->belongsTo('App\Categories');
    }
    public function orderProducts(){
        return $this->hasMany('App\OrderProduct');
    }
    public function images(){
        return $this->hasOne('App\image','product_id');
    }
}
