<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'username' => $faker->name,
        'email' => $faker->safeEmail,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Apero::class, function (Faker\Generator $faker) {
    return [
        'title' => $faker->title,
        'date' => $faker->dateTimeBetween('now', '2 years'),
        'abstract' => $faker->paragraph(),
        'content' => $faker->text(),
    ];
});
