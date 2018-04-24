<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Validator\UpdateProfileValidate;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    private $validateUpdateProfile;

    public function __construct(UpdateProfileValidate $profileValidate)
    {
        $this->validateUpdateProfile = $profileValidate;
    }

    public function updateProfile(Request $request) {
//        if($request->file('avatar')) {
//            dd('co file');
////            dd($request->file('avatar'));
//        } else {
//            dd('khong co file');
//        }
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
}