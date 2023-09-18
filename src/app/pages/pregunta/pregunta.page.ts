import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {
  public usuario : Usuario | undefined;
  public respuesta: string= '';
  public laPregunta: string= '';
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router) {
  
      this.activatedRoute.queryParams.subscribe(params => {
        const extras = this.router.getCurrentNavigation()?.extras;
        if (extras && extras.state) {
          this.usuario = extras.state['usuario'];
        } else {
          this.router.navigate(['/ingreso']);
        }
      });
  }
  ngOnInit() {
  }
  public preguntarSecreto():void{
    this.laPregunta = this.usuario!.preguntaSecreta;
    //return this.laPregunta;
  }
  public aPaginaComprobacion():void{
    if(this.usuario?.respuestaSecreta === this.respuesta){
      alert('Correcto, tu clave es '+ this.usuario.password);
    }else{
      alert('Incorrecto');
    }
  }
}
