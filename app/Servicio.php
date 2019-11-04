<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servicio extends Model
{
    protected $table = 'servicios';
    protected $fillable = ['nombre', 'descripcion'];
    protected $dates = ['created_at', 'updated_at'];
}
