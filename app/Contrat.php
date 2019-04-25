<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contrat extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'contrats';
    /**
     * Get the client record associated with the contrat.
     */
    public function client()
    {
        return $this->belongsTo('App\Client', 'id_client', 'id');
    }
    public function loc()
    {
        return $this->belongsTo('App\Loc', 'id_loc', 'id');
    }
    public function secteur()
    {
        return $this->belongsTo('App\Secteur', 'id_secteur', 'id');
    }
    public function tourne()
    {
        return $this->belongsTo('App\Tourne', 'id_tournee', 'id');
    }
    public function reclamations()
    {
        return $this->hasMany('App\Reclamation');
    }
}
