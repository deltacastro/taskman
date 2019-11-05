<?php

namespace App\Http\Controllers\Api;

use App\Sitio;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SitiosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sitios = Sitio::All();
        return $sitios->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'cliente_id' => 'required',
            'nombre' => 'required',
            'url' => 'required'
        ]);

        $sitio = Sitio::create([
            'cliente_id' => $validatedData['required'],
            'sitio_principal_id' => $request->sitio_principal_id,
            'nombre' => $validatedData['nombre'],
            'url' => $validatedData['url'],
        ]);

        return response()->json('Sitio creado');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Sitio  $sitio
     * @return \Illuminate\Http\Response
     */
    public function show(Sitio $sitio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Sitio  $sitio
     * @return \Illuminate\Http\Response
     */
    public function edit(Sitio $sitio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sitio  $sitio
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sitio $sitio)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Sitio  $sitio
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sitio $sitio)
    {
        //
    }
}
