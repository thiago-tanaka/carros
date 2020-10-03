<?php

use App\Support\Color;
use Faker\Generator as Faker;

$carros = [
    'toyota' => [
        'Hilux', 'Supra', 'Passo', 'Porte', 'Premio', 'Mirai', 'Crown', 'corolla', 'prius', 'aqua', 'fielder'
    ],
    'honda' => [
        'City', 'Amaze', 'Civic', 'Jazz', 'WR-V', 'CR-V', 'Avancier', 'Pilot', 'Element', 'Odyssey', 'StepWGN'
    ]
];

$factory->define(App\Models\Car::class, function (Faker $faker) use ($carros) {
    $carro_brand = rand(0, 1);
    return [
        'name' => array_values($carros)[$carro_brand][rand(0, 10)],
        'brand' => array_keys($carros)[$carro_brand],
        'year' => rand(1995, 2020),
        'color' => array_keys(Color::TYPES)[rand(0, count(Color::TYPES) -1)],
    ];
});
