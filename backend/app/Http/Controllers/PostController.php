<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function getAllPostByCate($slug) {
        $cates = Db::table('categorys')->select('id', 'name')->where('slug', $slug)->first();
        if($cates) {
            $posts = DB::table('posts')
                ->join('users', 'users.id', '=', 'posts.user_id')
                ->join('category_posts', 'category_posts.post_id', '=', 'posts.id')
                ->join('categorys', 'category_posts.category_id', '=', 'categorys.id')
                ->select('posts.id', 'posts.created_at', 'posts.abstract', 'posts.slug', 'posts.title', 'posts.avatar', 'users.id as userId', 'users.name as userName')
                ->where(['categorys.slug' => $slug, 'posts.status' => 1])
                ->orWhere('categorys.parent_id', $cates->id)
                ->get();
            return response()->json(['posts' => $posts, 'cateName' => $cates->name], 200);
        }
        return response()->json(['errors' => "khong ton tai category"], 401);
    }

    public function getDetailPost($slug) {
        $post = DB::table('posts')
                ->join('users', 'users.id', '=', 'posts.user_id')
                ->join('category_posts', 'category_posts.post_id', '=', 'posts.id')
                ->join('categorys', 'category_posts.category_id', '=', 'categorys.id')
                ->select('posts.*', 'users.id as userId', 'users.name as userName', 'categorys.name as cateName', 'categorys.id as cateId')
                ->where(['posts.slug' => $slug, 'posts.status' => 1])
                ->first();
        return response()->json(['post' => $post], 200);
    }

    public function getListPostByDate() {
        $postByDate = DB::table('posts')
                    ->orderBy('created_at', 'desc')
                    ->limit(7)
                    ->where('status', 1)->get();
        return response()->json(['posts' => $postByDate]);
    }

    public function getRelatePost($id) {
//        $cates = Db::table('categorys')->select('id', 'name')->where('slug', $slug)->first();
        $relatePosts = DB::table('posts')
                ->join('category_posts', 'category_posts.post_id', '=', 'posts.id')
                ->join('categorys', 'category_posts.category_id', '=', 'categorys.id')
                ->where('categorys.id', $id)
                ->orWhere('categorys.parent_id', $id)
                ->select('posts.id', 'posts.avatar', 'posts.abstract', 'posts.slug')
                ->limit(3)
                ->get();
        return response()->json(['relates' => $relatePosts], 200);
    }
}
