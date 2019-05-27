<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employe extends Model
{
  public function equipe()
  {
      return $this->belongsTo('App\Equipe', 'id_equipe', 'id');
  }
}
