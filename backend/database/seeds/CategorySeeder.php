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
                    'slug' => str_slug($faker->name),
                    'avatar' => null
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'slug' => str_slug($faker->name),
                    'parent_id' => null,
                    'avatar' => null
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'slug' => str_slug($faker->name),
                    'parent_id' => null,
                    'avatar' => null
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'slug' => str_slug($faker->name),
                    'parent_id' => 1,
                    'avatar' => 'http://a9.vietbao.vn/images/vn999/190/2017/10/20171019-clip-noi-tieng-anh-qua-te-va-ly-do-trieu-le-dinh-mai-bi-miet-thi-1.jpg'
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'slug' => str_slug($faker->name),
                    'parent_id' => 1,
                    'avatar' => 'http://a9.vietbao.vn/images/vn999/190/2017/10/20171019-clip-noi-tieng-anh-qua-te-va-ly-do-trieu-le-dinh-mai-bi-miet-thi-1.jpg'
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'slug' => str_slug($faker->name),
                    'parent_id' => 1,
                    'avatar' => 'http://a9.vietbao.vn/images/vn999/190/2017/10/20171019-clip-noi-tieng-anh-qua-te-va-ly-do-trieu-le-dinh-mai-bi-miet-thi-1.jpg'
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'slug' => str_slug($faker->name),
                    'parent_id' => 2,
                    'avatar' => 'https://znews-photo-td.zadn.vn/w1024/Uploaded/kcwvouvs/2017_10_19/20431295_1417376751648874_6988552230371036840_n.jpg'
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'slug' => str_slug($faker->name),
                    'parent_id' => 2,
                    'avatar' => 'https://znews-photo-td.zadn.vn/w1024/Uploaded/kcwvouvs/2017_10_19/20431295_1417376751648874_6988552230371036840_n.jpg'
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'slug' => str_slug($faker->name),
                    'parent_id' => 2,
                    'avatar' => 'https://znews-photo-td.zadn.vn/w1024/Uploaded/kcwvouvs/2017_10_19/20431295_1417376751648874_6988552230371036840_n.jpg'
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'slug' => str_slug($faker->name),
                    'parent_id' => 3,
                    'avatar' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOg_F_SW8di9YzxnAVfSKmGFDTTvU6udMnOebRnDEmFiJ6loq'
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'slug' => str_slug($faker->name),
                    'parent_id' => 3,
                    'avatar' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOg_F_SW8di9YzxnAVfSKmGFDTTvU6udMnOebRnDEmFiJ6loq'
                ],
                [
                    'name' => $faker->name,
                    'status' => 1,
                    'slug' => str_slug($faker->name),
                    'parent_id' => 3,
                    'avatar' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOg_F_SW8di9YzxnAVfSKmGFDTTvU6udMnOebRnDEmFiJ6loq'
                ]
            ]
        );
    }
}
