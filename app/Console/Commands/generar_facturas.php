<?php

namespace App\Console\Commands;

use App\Http\Controllers\admin\FacturasController;
use Illuminate\Console\Command;


class generar_facturas extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generar:facturas';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'genera todas las facturas del mes';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $generar= new FacturasController();
        $generar-> generar(); 

        
    }
}
