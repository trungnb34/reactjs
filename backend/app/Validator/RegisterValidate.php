<?php
/**
 * Created by PhpStorm.
 * User: mrtrung
 * Date: 13/04/2018
 * Time: 08:37
 */

namespace App\Validator;

use Illuminate\Support\Facades\Validator;

class RegisterValidate
{
    public function validateRegister($request) {
        $roles = [
            'email' => 'required|unique:users,email',
            'name' => 'required',
            'password' => 'required|min:8',
        ];
        $messages = [
            'email.required' => 'Email is required !',
            'email.unique' => 'Email is already exits !',
            'password.required' => 'Password is required !',
            'password.min' => 'Password toi thieu 8 ky tu !',
        ];

        $validator = Validator::make($request, $roles, $messages);
        if($validator->fails()) {
            return $validator->messages();
        }
    }
}