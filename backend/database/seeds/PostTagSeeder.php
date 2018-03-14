<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $limit = 30;
        for($i = 0; $i < $limit; $i++) {
            DB::table('tag_posts')->insert([
                'post_id' => $faker->numberBetween(1, 15),
                'tag_id' => $faker->numberBetween(1, 15)
            ]);
        }
    }
}
