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
        dd($request->all());
        return ['action' =>  $request->get('file')];
        if($request->file('avatar')) {
            return ['action' => 'co ton tai'];
        }
        $user = Auth()->guard('api')->user();
        $data = json_decode($request->getContent(), true);
        $message = $this->validateUpdateProfile->validate($data);
        if($message != null) {
            return response()->json(['errors' => $message], 200);
        }
        $fieldUpdates = array();
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
        return response()->json(['action' => $request->getContent()], 200);
    }
}
