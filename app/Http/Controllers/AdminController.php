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
    public function updateProduct(Request $request,$id){
        $validatedData = $request->validate([
            'id' => 'sometimes|integer|max:255',
            'categories_id' => 'sometimes|integer|max:255',
            'name' => 'sometimes|string|max:255',
            'price' => 'sometimes|integer|max:255',
            'stars' => 'sometimes|integer|max:5',
            'description' => 'sometimes|string',
            'amount' => 'sometimes|integer|max:255',
        ]);
        $product = Products::find($request->input('id'));
        $newinfo =  $product->fill($request->input())->save();
        return response(['message' => "Product succesfully updated!", "product" => $product],200);
    }
}
