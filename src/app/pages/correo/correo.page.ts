import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; // Permite navegar y pasar parámetros extra entre páginas
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {
   
  public correo: string='';
  
  constructor(private router: Router) {}

  public ngOnInit(): void {
  }
  
  public aPaginaRespuestaSecreta():void{
    const usuario = new Usuario('', '', '', '', '', '',0,null);
    const usuarioEncontrado = usuario.buscarUsuarioPorCorreo(this.correo);
    console.log('Usuario encontrado:', usuarioEncontrado);
    if(!usuarioEncontrado){
      this.router.navigate(['/incorrecto']);
    }
    else{
      const navigationExtras:  NavigationExtras = {
        state: {
          usuario: usuarioEncontrado
        }
      };
      this.router.navigate(['/pregunta'], navigationExtras);
    }
  }

}
