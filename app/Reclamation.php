<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reclamation extends Model
{
    public function equipe()
    {
        return $this->belongsTo('App\Equipe', 'id_equipe', 'id');
    }
    public function contrat()
    {
        return $this->belongsTo('App\Contrat', 'id_contrat', 'id');
    }
}
