<?php
 $_POST = json_decode(file_get_contents("php://input"), true); // конструкция для получения json данных и конвертации в формат php
//echo var_dump($_POST); //  для простого использования formData