<?php
/**
 * Created by PhpStorm.
 * User: mrtrung
 * Date: 20/04/2018
 * Time: 08:58
 */

namespace App\Validator;
use Illuminate\Support\Facades\Validator;

class UpdateProfileValidate
{
    public function validate($data) {
        $rules = [
            'email' => 'email',
            'phone_number' => 'numeric',
            'password' => 'min:8'
        ];
        $validator = Validator::make($data, $rules);

        if($validator->fails()) {
            return $validator->messages();
        }
    }
}