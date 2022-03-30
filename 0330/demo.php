<?php

    //오브젝트 x 배열에 키와 값을 등록 o

    $person = array(
        'name' => '철수',
        'height' => 77,
        'weight' => 65,
        'age' => 25,
        'city' => '김포'
    );
    var_dump($person);
    echo json_encode($person);
?>