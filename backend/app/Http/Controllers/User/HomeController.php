<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function getAllCategory() {
        // return ['res' => 'trung'];
        $categorys = DB::table('categorys')->get();
        $cates = $this->pushArray($categorys);
        // $test = ['finish doc', 'submit pr', 'nag dan to review'];
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
