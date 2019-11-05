<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sitio_Servicio extends Model
{
    protected $table = 'sitios_has_servicios';
    protected $fillable = [
        'servicio_id',
        'proveedor_id',
        'cuenta_id',
        'sitio_id'
    ];

    protected $dates = ['created_at', 'updated_at'];
}
