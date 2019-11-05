<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSitiosServiciosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sitios_has_servicios', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('servicio_id')->unsigned();
            $table->integer('proveedor_id')->unsigned();
            $table->integer('cuenta_id')->unsigned();
            $table->integer('sitio_id')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sitios_has_servicios');
    }
}
