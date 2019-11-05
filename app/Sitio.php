<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sitio extends Model
{
    protected $tables = 'sitios';
    protected $fillable = [
        'cliente_id',
        'sitio_principal_id',
        'nombre',
        'url'
    ];
    protected $dates = ['created_at', 'updated_at'];



}
