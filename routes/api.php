<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('projects', 'ProjectController@index');
Route::post('projects', 'ProjectController@store');
Route::get('projects/{id}', 'ProjectController@show');
Route::put('projects/{project}', 'ProjectController@markAsCompleted');
Route::post('tasks', 'TaskController@store');
Route::put('tasks/{task}', 'TaskController@markAsCompleted');


Route::group(['namespace' => 'Api', 'prefix' => 'cuentas'], function () {
    Route::get('/lista', 'CuentasController@index');
    Route::post('/store', 'CuentasController@store');
});

Route::group(['namespace' => 'Api', 'prefix' => 'proveedores'], function () {
    Route::get('/lista', 'ProveedoresController@index');
    Route::post('/store', 'ProveedoresController@store');
});

Route::group(['namespace' => 'Api', 'prefix' => 'servicios'], function () {
    Route::get('/lista', 'ServiciosController@index');
    Route::post('/store', 'ServiciosController@store');
});
