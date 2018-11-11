<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//open routes
Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
Route::get('/products/home','ProductsController@homepage');
Route::get('/categories','CategoriesController@nav');
Route::get('/categories/{id}',"CategoriesController@categories");
Route::get('/products/{id}',"ProductsController@find");
Route::get('/categories/{id}/products',"CategoriesController@find");

//auth routes
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/user/orders',"OrdersController@allOrders");
    Route::post('/logout', 'AuthController@logout');
    Route::get('/user', 'AuthController@getUser');
    Route::post('/order/new','OrdersController@create');
    Route::get('/user/orders/latest','OrdersController@latest');
    Route::post('/user/edit',"AuthController@edit");
    Route::get('/order/{id}','OrdersController@find');
});
//admin Routes
Route::group(['middleware' => ['auth:api','admin']], function () {
    Route::get('/admin/products','AdminController@getProducts');
    Route::get('/admin/product/{id}', "AdminController@getProduct");
    Route::post('/admin/product/{id}/edit','AdminController@updateProduct');
    Route::post('/admin/product/create','AdminController@createProduct');

});
