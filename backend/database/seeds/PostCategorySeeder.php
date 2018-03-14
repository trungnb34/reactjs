<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $limit = 10;
        for ($i = 0; $i < $limit; $i++) {
            DB::table('category_posts')->insert([
                'category_id' => $faker->numberBetween(4, 12),
                'post_id' => $faker->numberBetween(1, 30),
            ]);
        }
    }
}
