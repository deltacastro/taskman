<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    protected $table = 'proveedores';
    protected $fillable = ['nombre'];
    protected $dates = ['created_at', 'updated_at'];

    public function servicios()
    {
        return $this->belongsToMany(Servicio::class, 'proveedores_has_servicios', 'proveedor_id', 'servicio_id')->withTimestamps();
    }

}
