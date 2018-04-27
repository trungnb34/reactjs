<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UploadImageRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Intervention\Image\ImageManagerStatic as Image;
use App\Models\Album;
use App\Models\Images;


define("MAX_WIDTH", 800);
class HandlerImageController extends Controller
{
    public function uploadFile() {
        return view('admin.upload_file.upload_file');
    }
    private function createFolderSave($file_path) {

    }
    public function store(UploadImageRequest $request) {
        $user_id = Auth::user()->id;
        $album = new Album();
        $album->name = $request->name;
        $album->slug = stripUnicode($request->name);
        $album->description = $request->description;
        $album->user_id = $user_id;

        $album->save();

        if($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $image) {
                $filename = $image->getClientOriginalName();
                list($width, $height) = getimagesize($image);

                if($width > $height) {
                    if($width > MAX_WIDTH) {
                        $height = intval($height * MAX_WIDTH / $width);
                        $width = MAX_WIDTH;
                    }
                } else {
                    if($height > MAX_WIDTH) {
                        $width = intval($width * MAX_WIDTH / $height);
                        $height = MAX_WIDTH;
                    }
                }
                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize($width, $height);
                $filePath = str_random(32) . $filename;
                if(file_exists(public_path('images/albums/') . $filePath)) {

                }
                $image_resize->save(public_path('images/albums/') . $filePath);
                $image = new Images();
                $image->file_name = $filename;
                $image->file_path = $filePath;
                $album->images()->save($image);
                return redirect()->route('album');
            }
        }
    }

    public function list() {
        $user_id = Auth::user()->id;
        $albums = Album::where('user_id', $user_id)->get();
        return view('admin.upload_file.album', ['albums' => $albums]);
    }

    public function detail($slug) {
        $pictures = DB::table('albums')
                    ->join('images', 'images.album_id', '=', 'albums.id')
                    ->select('images.*')
                    ->where('albums.slug', $slug)
                    ->get();
        foreach ($pictures as $picture) {
            $picture->file_path = env('APP_URL').'/images/albums/'.$picture->file_path;
        }
        return view('admin.upload_file.detail', ['pictures' => $pictures]);
    }
}
