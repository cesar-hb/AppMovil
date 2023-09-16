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
    const usuEncontrado = usuario.buscarUsuarioPorCorreo(this.correo);
    if(!usuEncontrado){
      alert('Correo de usuario no encontrado');
    }
    else{
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: usuEncontrado
        }
      };
      this.router.navigate(['/pregunta'], navigationExtras);
    }
  }

}
