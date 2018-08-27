<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach (range(2,100) as $index) {
            DB::table('products')->insert([
                'name' => $faker->name,
                'description' => $faker->name,
                'price' => $faker->numberBetween($min = 10 , $max = 100),
                'stars' => $faker->numberBetween($min = 1 , $max = 5),
                'amount' => $faker->numberBetween($min = 1 , $max = 100),
                'categories_id' => $faker->numberBetween($min = 1 , $max = 4),
            ]);
        }
    }
}
