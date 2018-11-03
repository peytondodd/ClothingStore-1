<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    protected $fillable = [
        'product_id', 'Order_id', 'Quantity'
    ];

    public function order(){
        return $this->belongsTo('App\Orders');
    }
    public function product(){
        return $this->belongsTo('App\Products');
    }
}
