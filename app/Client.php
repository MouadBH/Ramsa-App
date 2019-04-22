<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'clients';

    /**
     * Get the User record associated with the contrat.
     */
    public function contrats()
    {
        return $this->hasMany('App\Contrat', 'id_client', 'id');
    }
}
