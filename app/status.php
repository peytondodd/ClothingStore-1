<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class status extends Model
{
    public function status(){
        return $this->hasMany('App\Orders');
    }

}
