<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'fullname' => 'required',
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'retypePass' => 'required|same:password',
            'agreeTerms' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'fullname.required' => 'Full name is required',
            'name.required' => 'A name is required',
            'email.required' => 'A email is required',
            'email.unique' => 'A email is already exits',
            'password.required'  => 'A password is required',
            'password.min'  => 'A password toi thieu 8 ky tu',
            'retypePass.same'  => 'A retype password khong trung',
            'agreeTerms.required' => 'item need to check'
        ];
    }
}
