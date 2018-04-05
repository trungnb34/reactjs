<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $limit = 20;
        for($i = 0; $i < $limit; $i++) {
            DB::table('tags')->insert(
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'slug' => str_slug($faker->name)
                ]
            );
        }
    }
}
