import { Component, OnInit } from '@angular/core';
// import * as Typed from 'typed.js'
import Typed from 'typed.js/src/typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
    const options = {

      stringsElements: '#typed-strings',

      strings: ['Training banking juros amigo', 'Peça a portabilidade e venha ser Training Banking hoje mesmo', 'Inovador, digital e seguro'],
      typedSpeed: 15000,
      backSpeed: 30,
      backDelay: 3000,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1200,
      loop: true
    };

    const typed = new Typed('.typing-element', options);
  }

  cadastroClientes(){
    this.router.navigate(['cadastro-clientes']);
  }

}
