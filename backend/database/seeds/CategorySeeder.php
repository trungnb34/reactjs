<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        DB::table('categorys')->insert(
            [
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'parent_id' => null,
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'parent_id' => null,
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'parent_id' => null,
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'parent_id' => 1,
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'parent_id' => 1,
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'parent_id' => 1,
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'parent_id' => 2,
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'parent_id' => 2,
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'parent_id' => 2,
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'parent_id' => 3,
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'parent_id' => 3,
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'parent_id' => 3,
                ]
            ]
        );
    }
}
