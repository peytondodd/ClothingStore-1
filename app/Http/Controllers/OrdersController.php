<?php

namespace App\Http\Controllers;

use App\OrderProduct;
use App\Orders;
use App\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Mollie\Api\Resources\Order;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();


    }

    public function find($id){
        $order = Orders::with('OrderProduct.product', "status")->findOrFail($id);
        return response($order);
    }
        public function allOrders(Request $request){
            $user = $request->user();
            $orders=  Orders::with('OrderProduct.product', "status")->where('user_id' , $user->id)->get();
            return response($orders);
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
        //$total = 0 ;
        if(array_sum($products) > 0){
            return response(['message' => 'Something went wrong!'], 406);
        }
        foreach ($products as $product) {
            $found = Products::find($product['id']);
            if(!$found){
                return response(['message' => 'Something went wrong!'], 400);
            }
            if($found){
                $orderProduct = new OrderProduct;
                $orderProduct->product_id = $product['id'];
                $orderProduct->orders_id = $order->id;
                $orderProduct->Quantity = $product['count'];
                $orderProduct->save();
            }
        }
        return response(['message' => 'Ur Order has been places!'],201);
    }

    public function latest(Request $request){
        $user = $request->user();
        $orders=  Orders::latest()->where('user_id' , $user->id)->with('OrderProduct.product', "status")->take(5)->get();
       return $orders;
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
