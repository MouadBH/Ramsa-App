<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Consomation extends Model
{
  public function contrat()
  {
      return $this->belongsTo('App\Contrat', 'contrat_id', 'id');
  }
}
