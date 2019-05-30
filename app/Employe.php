<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Employe extends Authenticatable implements JWTSubject
{
  public function getJWTIdentifier()
  {
      return $this->getKey();
  }

  public function getJWTCustomClaims()
  {
      return [];
  }

  public function equipe()
  {
      return $this->belongsTo('App\Equipe', 'id_equipe', 'id');
  }
}
