<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\PostRequest;
use App\Models\Post;
use App\Models\CategoryPost;
use App\Models\TagPost;

class PostController extends Controller
{
    public function getListPost($stt) {
        if(!is_numeric($stt)) {
            return redirect()->back();
        }
        $posts = Post::with('categorys')
            ->with('tag')
            ->join('users', 'users.id', 'posts.user_id')
            ->select('posts.*', 'users.name as userName')
            ->limit(10)->offset(($stt - 1) * 10)
            ->get();
        $countPost = Post::count();
        $countPani = $countPost % 10 == 0 ? $countPost / 10 : intval($countPost / 10) + 1;
        return view('admin.list-post.list-post', ['posts' => $posts, 'count' => $countPani]);
    }

    public function create() {
        $tags = DB::table('tags')->select('id', 'name')->get();
        $categorys = DB::table('categorys')->select('id', 'name')->get();
        return view ('admin.posts.posts', ['tags' => $tags, 'categorys' => $categorys]);
    }

    public function store(PostRequest $request) {
        $file = $request->file('image');
        $folder = $file->store(
            'images', 'public'
        );
//        dd($request->status);
        $post = new Post();
        $post->user_id = Auth::user()->id;
        $post->slug = stripUnicode($request->title);
        $post->title = $request->title;
        $post->content = $request->contentText;
        $post->abstract = $request->abstract;
        $post->avatar = $folder;
        $post->isOpenComment = $request->isOpen;
        $post->status = $request->status;
        if($post->save()) {
            $post->categorys()->attach($request->category);
            $post->tag()->attach($request->tag);
        }
        return redirect()->route('post');
    }

    public function edit($slug) {
        $tags = DB::table('tags')->select('id', 'name')->get();
        $categorys = DB::table('categorys')->select('id', 'name')->get();
        $post = Post::with('categorys')
            ->with('tag')
            ->join('users', 'users.id', 'posts.user_id')
            ->select('posts.*')
            ->where('slug', $slug)
            ->first();
//        dd($post);
        return view('admin.posts.edit', ['post' => $post, 'tags' => $tags, 'categorys' => $categorys]);
    }
}
