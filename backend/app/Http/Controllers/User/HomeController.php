<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function getAllCategory() {
        $categorys = DB::table('categorys')->get();
        $cates = $this->pushArray($categorys);
        return response()->json(['cates' => $cates], 200);
    }
    private function pushArray($cates) {
        $cateRes = array();
        foreach ($cates as $item) {
            if($item->parent_id == null) {
                $cateP = array();
                $cateA = array();
                $cateTitle = array();
                array_push($cateTitle, $item);
                foreach($cates as $cate) {
                    if($cate->parent_id == $item->id) {
                        array_push($cateA, $cate);
                    }
                }
                $cateP['title'] = $cateTitle;
                $cateP['value'] = $cateA;
                array_push($cateRes, $cateP);
            }
        }
        return $cateRes;
    }
}
