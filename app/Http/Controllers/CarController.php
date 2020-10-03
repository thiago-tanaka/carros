<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Support\Color;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class CarController extends Controller
{
    public function index()
    {
        $colors = Color::TYPES;

        return Inertia::render('Cars/Index', [
            'filters' => Request::all('search', 'trashed'),
            'cars' => Car::orderByName()
                ->filter(Request::only('search', 'trashed'))
                ->paginate(7)
                ->transform(function ($car) use ($colors) {
                    return [
                        'id' => $car->id,
                        'name' => $car->name,
                        'brand' => $car->brand,
                        'year' => $car->year,
                        'color' => $car->color,
                        'color_hex' => $colors[$car->color],
                        'colors' => $colors,
                        'deleted_at' => $car->deleted_at,
                    ];
                }),
        ]);
    }

    public function create()
    {
        return Inertia::render('Cars/Create',[
            'colors' => Color::TYPES
        ]);
    }

    public function store()
    {
        Car::create(
            Request::validate([
                'name' => ['required', 'max:50'],
                'brand' => ['required', 'max:50'],
                'year' => ['required', 'digits_between:0,11'],
                'color' => ['required', 'max:50'],
            ])
        );

        return Redirect::route('cars')->with('success', 'Carro criado.');
    }

    public function edit(Car $car)
    {
        return Inertia::render('Cars/Edit', [
            'car' => [
                'id' => $car->id,
                'name' => $car->name,
                'brand' => $car->brand,
                'color' => $car->color,
                'year' => $car->year,
                'deleted_at' => $car->deleted_at,
            ],
            'colors' => Color::TYPES
        ]);
    }

    public function update(Car $car)
    {
        $car->update(
            Request::validate([
                'name' => ['required', 'max:50'],
                'brand' => ['required', 'max:50'],
                'year' => ['required', 'digits_between:0,11'],
                'color' => ['required', 'max:50'],
            ])
        );

        return Redirect::back()->with('success', 'car updated.');
    }

    public function destroy(Car $car)
    {
        $car->delete();

        return Redirect::back()->with('success', 'Car deleted.');
    }

    public function restore(Car $car)
    {
        $car->restore();

        return Redirect::back()->with('success', 'Car restored.');
    }
}
