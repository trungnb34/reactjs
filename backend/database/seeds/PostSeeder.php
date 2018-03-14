<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
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
            DB::table('posts')->insert([
                'user_id' => $faker->numberBetween(1, 10),
                'title' => $faker->firstName .' '.$faker->lastName,
                'content' => $faker->text,
                'abstract' => $faker->word,
                'isOpenComment' => 1,
                'status' => 1
            ]);
        }
    }
}
