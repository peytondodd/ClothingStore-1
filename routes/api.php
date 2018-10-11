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

Route::post('user/register', 'APIREGISTERCONTROLLER@register');
Route::post('user/login', 'APILOGINCONTROLLER@login');
Route::get('/products/home','ProductsController@homepage');
Route::get('/categories','CategoriesController@nav');
Route::get('/categories/{id}',"CategoriesController@categories");
Route::get('/products/{id}',"ProductsController@find");
Route::post('/register','UserController@register');
Route::post('/login' , 'UserController@login');
Route::get('/categories/{id}/products',"CategoriesController@find");


