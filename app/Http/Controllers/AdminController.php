<?php

namespace App\Http\Controllers;

use App\Products;
use Illuminate\Http\Request;
use Spatie\JsonApiPaginate\JsonApiPaginateServiceProvider;
class AdminController extends Controller
{
    public function getProducts(){
        $product = Products::with('categories')->jsonPaginate();
        return response ($product);
    }
    public function getProduct($id){
        $product = Products::with('categories')->findOrFail($id);
        return response($product);
    }
}
