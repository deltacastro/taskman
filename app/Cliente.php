<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $table = 'clientes';
    protected $fillable = ['nombre', 'descripcion', 'registrado_desde'];
    protected $dates = ['created_at', 'updated_at', 'registrado_desde'];
}
