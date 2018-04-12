<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function getListPostByDate() {
        $postByDate = DB::table('posts')
            ->orderBy('created_at', 'desc')
            ->limit(7)
            ->where('status', 1)
            ->get();
        foreach ($postByDate as $post) {
            $post->avatar = env('APP_URL').'/ckfinder/images/'. $post->avatar;
        }
         return response()->json(['posts' => $postByDate]);
    }

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
            foreach ($posts as $post) {
//                $post->avatar = Storage::disk('public')->url($post->avatar);
                $post->avatar = env('APP_URL').'/ckfinder/images/'. $post->avatar;
            }
            return response()->json(['posts' => $posts, 'cateName' => $cates->name], 200);
        }
        return response()->json(['errors' => "khong ton tai category"], 401);
    }

    public function getDetailPost($slug) {
        $post = DB::table('posts')
            ->leftJoin('users', 'users.id', '=', 'posts.user_id')
            ->leftJoin('category_posts', 'category_posts.post_id', '=', 'posts.id')
            ->leftJoin('categorys', 'category_posts.category_id', '=', 'categorys.id')
            ->select('posts.*', 'users.id as userId', 'users.name as userName', 'categorys.name as cateName', 'categorys.id as cateId')
            ->where(['posts.slug' => $slug, 'posts.status' => 1])
            ->first();
        return response()->json(['post' => $post], 200);
    }

    public function getRelatePost($id) {
        $relatePosts = DB::table('posts')
            ->join('category_posts', 'category_posts.post_id', '=', 'posts.id')
            ->join('categorys', 'category_posts.category_id', '=', 'categorys.id')
            ->where('categorys.id', $id)
            ->orWhere('categorys.parent_id', $id)
            ->select('posts.id', 'posts.avatar', 'posts.title', 'posts.slug', 'posts.created_at')
            ->limit(3)
            ->get();
        foreach ($relatePosts as $post) {
//            $post->avatar = Storage::disk('public')->url($post->avatar);
            $post->avatar = env('APP_URL').'/ckfinder/images/'. $post->avatar;
        }
        return response()->json(['posts' => $relatePosts], 200);
    }

    public function getPostByTag($slug) {
        $tagName = DB::table('tags')->select('name')->where('slug', $slug)->first();
        $posts = DB::table('posts')
            ->join('users', 'users.id', '=', 'posts.user_id')
            ->join('tag_posts', 'tag_posts.post_id', '=', 'posts.id')
            ->join('tags', 'tag_posts.tag_id', '=', 'tags.id')
            ->select('posts.id', 'posts.created_at', 'posts.abstract', 'posts.slug', 'posts.title', 'posts.avatar', 'users.id as userId', 'users.name as userName')
            ->where(['tags.slug' => $slug, 'posts.status' => 1])
            ->get();
        foreach ($posts as $post) {
//            $post->avatar = Storage::disk('public')->url($post->avatar);
            $post->avatar = env('APP_URL').'/ckfinder/images/'. $post->avatar;
        }
//        dd($tagName);
        return response()->json(['posts' => $posts, 'tagName' => $tagName->name], 200);
    }
}
