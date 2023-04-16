<?php

namespace App\Console\Commands;
//use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\admin\EstadosController;
use Illuminate\Console\Command;

class suspender_clientes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'suspender:clientes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'se ejecuta para pasar el estado de los clientes con facturas vencidas a estado suspendido';

    /**
     * Execute the console command. 
     *
     * @return int
     */
    public function handle()
    {
        $nota=new Nota();
        $nota->nota='hola mundo';
        $nota->empresa_id=1;
        $nota->save();
       // $texto=date("i:s");
       //Storage::append("archivo.txt",$texto);
       // $cortar = new EstadosController();
      // $cortar->suspender();
    }
}
