<?php

namespace App\Http\Controllers;

use App\Categories;
use App\image;
use App\Products;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function updateCategory(Request $request){
        $name = $request->input('name');
        $id = $request->input('id');
        $category = Categories::findOrFail($id);
        $category->name = $name;
        $category->save();
        return response(['message' => 'Category updated succesfully' , "category" => $category],200);
    }
    public function getCategory($id){
        $category = Categories::findOrFail($id);
        return response ($category);
    }
    public function createCategories(Request $request){

        $name = $request->input('name');
        $category = new Categories;
        $category->name = $name;
        $category->save();
        return response(['message' => 'Category succesfully created' , "category" => $category],200);
    }
    public function getCategories(){
        $product = Categories::jsonPaginate();
        return response ($product);
    }
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
    public function createProduct(Request $request){
        $validatedData = $request->validate([
            'upload' => 'required|file|max:1024',
            'categories_id' => 'sometimes|integer|max:255',
            'name' => 'sometimes|string|max:255',
            'price' => 'sometimes|integer|max:255',
            'stars' => 'sometimes|integer|max:5',
            'description' => 'sometimes|string',
            'amount' => 'sometimes|integer|max:255',
        ]);
        $product = new Products;
        $product->fill($request->input())->save();
        $fileName = "fileName".time().'.'.request()->upload->getClientOriginalExtension();
        $images = $request->file('upload')->storeAs('public/Product/Images',$fileName);
        $productImage = new image;
        $productImage->product_id = $product->id;
        $productImage->url = $fileName;
        $productImage->save();

    }
}
