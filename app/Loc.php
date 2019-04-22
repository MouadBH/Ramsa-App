<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Loc extends Model
{
    public function contrats()
    {
        return $this->hasMany('App\Contrat');
    }
}
