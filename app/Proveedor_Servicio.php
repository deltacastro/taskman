<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Proveedor_Servicio extends Model
{
    protected $table = 'proveedores_has_servicios';
    protected $fillable = ['proveedor_id', 'servicio_id'];
    protected $dates = ['created_at', 'updated_at'];
}
