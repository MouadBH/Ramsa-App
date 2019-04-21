<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContratsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contrats', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->unsignedBigInteger('id_client');
            $table->string('adress_loc');
            $table->unsignedBigInteger('id_loc');
            $table->unsignedBigInteger('id_secteur');
            $table->unsignedBigInteger('id_tournee');
            $table->integer('order');
            $table->double('lat');
            $table->double('long');
            $table->integer('compteur');
            $table->timestamps();

            $table->foreign('id_client')->references('id')->on('clients');
            $table->foreign('id_loc')->references('id')->on('locs');
            $table->foreign('id_secteur')->references('id')->on('secteurs');
            $table->foreign('id_tournee')->references('id')->on('tournes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contrats');
    }
}
