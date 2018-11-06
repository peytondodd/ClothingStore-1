<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach (range(0,3) as $index) {
            DB::table('categories')->insert([
                'name' => $faker->name,
            ]);
        }
    }
}
