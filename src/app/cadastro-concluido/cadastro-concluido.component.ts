import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-concluido',
  templateUrl: './cadastro-concluido.component.html',
  styleUrls: ['./cadastro-concluido.component.scss']
})
export class CadastroConcluidoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.navegarParaLogin();
  }

  navegarParaLogin(){
    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 10000)
  }

}
