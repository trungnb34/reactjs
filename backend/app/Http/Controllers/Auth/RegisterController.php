<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Http\Requests\RegisterRequest;


class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    public function getRegister() {
        return view('admin.register.register');
    }

    public function register(RegisterRequest $request) {
        $userCreate = new User();
        $userCreate->full_name = $request->fullname;
        $userCreate->name = $request->name;
        $userCreate->email = $request->email;
        $userCreate->password = bcrypt($request->password);
        $userCreate->role_id = 2;
        $userCreate->status = 1;
        $userCreate->avatar = "https://i.pinimg.com/236x/64/6d/24/646d24a3449f7b1afe2a7ed82eb9d736.jpg";
        if($userCreate->save()) {
            return redirect()->route('login')->with('log', 'Tạo tài khoản thành công xin vui lòng đăng nhập');
        }
    }
}
