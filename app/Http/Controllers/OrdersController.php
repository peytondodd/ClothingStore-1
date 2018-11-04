<?php

namespace App\Http\Controllers;

use App\OrderProduct;
use App\Orders;
use App\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $user = Auth::user();
        $products = $request->all();
        $order = new Orders;
        $order->user_id = $user['id'];
        $order->save();
        foreach ($products as $product) {
            $found = Products::find($product['id']);
            if(!$found){
                return response(['message' => 'Something went wrong!']);
            }
            if($found){
                $orderProduct = new OrderProduct;
                $orderProduct->product_id = $product['id'];
                $orderProduct->Order_id = $order->id;
                $orderProduct->Quantity = $product['count'];
                $orderProduct->save();
            }
        }
        return response(['message' => 'Ur Order has been places!']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Orders  $orders
     * @return \Illuminate\Http\Response
     */
    public function show(Orders $orders)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Orders  $orders
     * @return \Illuminate\Http\Response
     */
    public function edit(Orders $orders)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Orders  $orders
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Orders $orders)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Orders  $orders
     * @return \Illuminate\Http\Response
     */
    public function destroy(Orders $orders)
    {
        //
    }
}
