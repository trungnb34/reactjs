<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function getAllPostByCate($slug) {
        $cates = Db::table('categorys')->select('id')->where('slug', $slug)->first();
        $posts = DB::table('posts')
                        ->join('users', 'users.id', '=', 'posts.user_id')
                        ->join('category_posts', 'category_posts.post_id', '=', 'posts.id')
                        ->join('categorys', 'category_posts.category_id', '=', 'categorys.id')
                        ->select('posts.*', 'users.id as userId', 'users.name as userName')
                        ->where(['categorys.slug' => $slug, 'posts.status' => 1])
                        ->orWhere('categorys.parent_id', $cates->id)
                        ->get();
        $categoryName = DB::table('categorys')->select('name')->where('slug', $slug)->get();
        return response()->json(['posts' => $posts, 'cateName' => $categoryName], 200);
    }

    public function getDetailPost($slug) {
        $post = DB::table('posts')->where('slug', $slug)->get();
        return ['post' => $post];
    }

    public function getListPostByDate() {
        $postByDate = DB::table('posts')
                    ->orderBy('created_at', 'desc')
                    ->limit(7)
                    ->where('status', 1)->get();
        return response()->json(['posts' => $postByDate]);
    }
}
