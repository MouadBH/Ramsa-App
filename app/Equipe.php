<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipe extends Model
{
    public function loc()
    {
        return $this->belongsTo('App\Loc', 'id_loc', 'id');
    }
    public function reclamations()
    {
        return $this->hasMany('App\Reclamation');
    }
}
