<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConsomationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consomations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('prix');
            $table->unsignedBigInteger('contrat_id');
            $table->boolean('paye')->default(0);
            $table->timestamps();

            $table->foreign('contrat_id')->references('id')->on('contrats');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consomations');
    }
}
