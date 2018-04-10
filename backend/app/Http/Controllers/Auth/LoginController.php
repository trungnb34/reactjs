<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
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
//        $this->middleware('guest')->except('logout');
    }

    public function getLogin()
    {
        if (Auth::check()) {
            return redirect()->route('home');
        } else {
            return view('admin.login.login');
        }
    }

    public function logout() {
        Auth::logout();
        return redirect()->route('login');
    }

    public function login(LoginRequest $request) {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            if($request->rememberMe) {
//                Cookie::make('remenber', 'value', 3660);
            }
            return redirect()->route('list-post', 1);
        }
        return redirect()->back()->with('error', 'Tài khoản hoặc mật khẩu không chính xác');
    }
}
