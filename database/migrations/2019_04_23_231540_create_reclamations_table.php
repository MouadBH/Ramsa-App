<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReclamationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reclamations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('date_debut');
            $table->text('description_client');
            $table->text('description_equipe');
            $table->unsignedBigInteger('id_contrat');
            $table->string('type');
            $table->boolean('affecte');
            $table->unsignedBigInteger('id_equipe');
            $table->date('date_affecte');
            $table->string('traite');
            $table->timestamps();

            $table->foreign('id_contrat')->references('id')->on('contrats');
            $table->foreign('id_equipe')->references('id')->on('equipes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reclamations');
    }
}
