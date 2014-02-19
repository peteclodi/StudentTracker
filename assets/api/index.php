<?php
    require 'assets/api/lib/Slim/Slim/Slim.php';
    Slim\Slim:registerAutoloader();

    $app = new \Slim\Slim();

    $app->get('grades', function (){
        return [{id: 0, name: 'pre-K'}, {id: 1, name: 'Kindergarten'}];
    });

    $app->run();