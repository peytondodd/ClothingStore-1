<?php

namespace App\Http\Controllers;

use App\Products;
use Illuminate\Http\Request;
use Spatie\JsonApiPaginate\JsonApiPaginateServiceProvider;
class AdminController extends Controller
{
    public function getProducts(){
        $product = Products::jsonPaginate();
        return response ($product);
    }
}
