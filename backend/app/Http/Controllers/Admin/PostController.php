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
use Illuminate\Support\Facades\Storage;

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
        $fileName = date('Y-m-d-H-i-s'). '-' . $file->getClientOriginalName();
        $file->move('ckfinder/images', $fileName);
        $post = new Post();
        $post->user_id = Auth::user()->id;
        $post->slug = stripUnicode($request->title);
        $post->title = $request->title;
        $post->content = $request->contentText;
        $post->abstract = $request->abstract;
        $post->avatar = $fileName;
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
        if($post) {
            $post->avatar = '/ckfinder/images/' . $post->avatar ;
//            dd($post->avatar);
            return view('admin.posts.edit', ['post' => $post, 'tags' => $tags, 'categorys' => $categorys]);
        }
        return redirect()->back();
    }

    public function update(Request $request, $slug) {
        if(!checkEditTitlePost($slug, $request->title)) {
            return redirect()->back()->with('error', 'A title already exits');
        }
        $post = Post::where('slug', $slug)->first();
        if($request->hasFile('image')) {
            $post->avatar = $this->updateStorage($post->avatar ,$request->file('image'));
        }
        $post->tag()->detach();
        $post->categorys()->detach();
        foreach ($request->category as $cate) {
            $post->categorys()->attach($cate);
        }
        foreach ($request->tag as $tag) {
            $post->tag()->attach($tag);
        }
        $post->title = $request->title;
        $post->content = $request->contentText;
        $post->abstract = $request->abstract;
        $post->slug = stripUnicode($request->title);
        $post->isOpenComment = $request->isOpen;
        $post->save();
        return redirect()->route('list-post', 1);
    }

    private function updateStorage($path, $file) {
        if(file_exists(public_path('ckfinder/images/').$path)) {
            unlink(public_path('ckfinder/images/').$path);
        }
        $filePath = date('Y-m-d-H-i-s'). '-' . $file->getClientOriginalName();
        $file->move('ckfinder/images', $filePath);
        return $filePath;
    }

    public function delete($slug) {
        $post = Post::where('slug', $slug)->first();
        if($post) {
            $post->tag()->detach();
            $post->categorys()->detach();
            if(Storage::disk('public')->exists($post->avatar)) {
                Storage::disk('public')->delete($post->avatar);
            }
            $post->delete();
        }
        return redirect()->back();
    }

    public function detail($slug) {
        $post = Post::where('slug', $slug)->first();
        return view('admin.posts.detail', ['post' => $post]);
    }
}
