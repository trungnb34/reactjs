<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert(
            [
                [
                    'role' => 'admin',
                    'status' => 1
                ],
                [
                    'role' => 'user',
                    'status' => 1
                ]
            ]
        );
    }
}
