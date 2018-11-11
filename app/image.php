<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use http\Url;
class image extends Model
{
    protected $appends = ['Url'];
    public function product(){
        return $this->belongsTo('App\Products');
    }

    public function GeturlAttribute($url){

        return $url;

    }
}
