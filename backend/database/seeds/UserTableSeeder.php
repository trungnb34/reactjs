<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTableSeeder extends Seeder
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
            DB::table('users')->insert(
                [
                    'name' => $faker->name,
                    'email' => $faker->unique()->email,
                    'password' => bcrypt('123456'),
                    'role_id' => 2,
                    'status' => 1,
                    'full_name' => $faker->firstName . " " . $faker->lastName,
                    'phone_number' => $faker->numberBetween(1, 10000),
                    'facebook_url' => 'https://www.facebook.com/trungnb34',
                    'company' => 'beet-soft',
                    'about' => 'test',
                    'avatar' => 'https://i.pinimg.com/236x/64/6d/24/646d24a3449f7b1afe2a7ed82eb9d736.jpg'
                ]
            );
        }
    }
}
