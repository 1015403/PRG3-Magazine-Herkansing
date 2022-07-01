<?php
/**
 * @return array
 */
function getCars()
{
    return [
        [
            "id" => 1,
            "name" => "Mustang Shelby GT500",
            "type" => "Sport",
        ],
        [
            "id" => 2,
            "name" => "Mustang GT350",
            "type" => "Sport",
        ],
        [
            "id" => 3,
            "name" => "Mustang GT",
            "type" => "Sport",
        ],
        [
            "id" => 4,
            "name" => "Mustang Mach-1",
            "type" => "Sport",
        ],
        [
            "id" => 5,
            "name" => "Mustang Mach-E",
            "type" => "Elektrisch",
        ],
        [
            "id" => 6,
            "name" => "GT",
            "type" => "Sport",
        ],
        [
            "id" => 7,
            "name" => "Fiësta",
            "type" => "Hatchback",
        ],
        [
            "id" => 8,
            "name" => "Focus",
            "type" => "Station",
        ],
        [
            "id" => 9,
            "name" => "Kuga",
            "type" => "SUV",
        ],
        [
            "id" => 10,
            "name" => "Puma",
            "type" => "SUV",
        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getCarsDetails($id)
{
    $tags = [
        1 => [
            "information" => "De Ford Mustang Shelby GT500 zit binnen 3.3 seconden op de 100 kph",
            "top_speed" => "290 kph",
            "engine" => "5.2L Supercharged V8",
            "tags" => ['760HP', '7-speed Tremec dual-clutch transmission']
        ],
        2 => [
            "information" => "Helaas wordt de GT350 niet meer gemaakt...",
            "top_speed" => "276 kph",
            "engine" => "5.2L V8",
            "tags" => ['526HP', '6-speed Tremec clutch transmission', '8250rpm']
        ],
        3 => [
            "information" => "Very nice when your grandma prepares this meal",
            "top_speed" => "250 kph",
            "engine" => "5.0L V8",
            "tags" => ['449HP', '6-speed Tremec clutch transmission']
        ],
        4 => [
            "information" => "Just a basic Mustang",
            "top_speed" => "249 kph",
            "engine" => "5.0L V8 A10",
            "tags" => ['460HP', '6-speed Tremec clutch transmission']
        ],
        5 => [
            "information" => "De eerste elektrische wagen van Ford is toevallig ook een Mustang",
            "top_speed" => "184 kph",
            "engine" => "Elektrisch 115kW",
            "tags" => ['269HP']
        ],
        6 => [
            "information" => "De Ford GT is een middenmotorsuperauto. Het ontwerp is gebaseerd op de Ford GT40",
            "top_speed" => "330 kph",
            "engine" => "5.4L V8",
            "tags" => ['550HP', '7-speed dual-clutch transmission paddles']
        ],
        7 => [
            "information" => "Specialty when on holiday in Spain",
            "top_speed" => "",
            "engine" => "",
            "tags" => ['fish']
        ],
        8 => [
            "information" => "Specialty when on holiday in Spain",
            "top_speed" => "",
            "engine" => "",
            "tags" => ['fish']
        ],
        9 => [
            "information" => "Specialty when on holiday in Spain",
            "top_speed" => "",
            "engine" => "",
            "tags" => ['fish']
        ],
        10 => [
            "information" => "Specialty when on holiday in Spain",
            "top_speed" => "",
            "engine" => "",
            "tags" => ['fish']
        ],
    ];

    return $tags[$id];
}
