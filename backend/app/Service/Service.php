<?php
/**
 * Created by PhpStorm.
 * User: mrtrung
 * Date: 13/04/2018
 * Time: 08:32
 */

namespace App\Service;


class Service
{
    protected $message;
    protected $status;

    public function __construct() {
        $this->message = null;
        $this->status = 200;
    }

    public function getStatus() {

    }
}