<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Validator\UpdateProfileValidate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    private $validateUpdateProfile;

    public function __construct(UpdateProfileValidate $profileValidate)
    {
        $this->validateUpdateProfile = $profileValidate;
    }

    public function updateProfile(Request $request) {
        $data = json_decode($request->getContent(), true);
        $message = $this->validateUpdateProfile->validate($data);
        if($message != null) {
            return response()->json(['errors' => $message], 200);
        }
        $user = Auth()->guard('api')->user();
        $fieldUpdates = array();
        if($request->file('avatar')) {
            $filePath = $this->updateAvatar($request->file('avatar'), $user->avatar, $user->id);
            $fieldUpdates['avatar'] = $filePath;
        }
        foreach ($data as $field => $value ) {
            if($value != null && $field != 'avatar') {
                if($field != 'password') {
                    $fieldUpdates[$field] = $value;
                } else {
                    $fieldUpdates[$field] = bcrypt($value);
                }
            }
        }
        if(count($fieldUpdates) > 0) {
            DB::table('users')->where('id', $user->id)->update($fieldUpdates);
        }
        return response()->json(['action' => 'success'], 200);
    }

    private function updateAvatar($file, $oldPath, $user_id) {
        if(file_exists(public_path('ckfinder/images/').$oldPath)) {
            unlink(public_path('ckfinder/images/').$oldPath);
        }
        $filePath = $user_id . '-' . $file->getClientOriginalName();
        $file->move(public_path('ckfinder/images'), $filePath);
        return $filePath;
    }

    public function profile() {
        $user = Auth::user();
        if(file_exists(public_path('ckfinder/images/') . $user->avatar)) {
            $user->avatar = env('APP_URL').'/ckfinder/images/'.$user->avatar;
        } else {
            $user->avatar = env('APP_URL') . '/ckfinder/images/default.jpg';
        }
        return view('admin.profiles.profiles', ['user' => $user]);
    }

    public function getPostCommon($index) {
        $posts = DB::table('posts')->get();
        dd($posts);
    }

}
