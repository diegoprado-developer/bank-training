import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators'; 
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.scss']
})
export class CadastroClientesComponent implements OnInit {

  formCadastro;
  conversao;
  valoresForm: Object;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    localStorage.clear();
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      endereco: [''],
    })

    this.formCadastro.valueChanges.pipe(
      debounceTime(1000)
    )
      .subscribe(res => {
        console.log(res)
        this.valoresForm = res;
      })
    
  }

  cadastro(){
    console.log(this.formCadastro.controls);

    this.conversao = JSON.stringify(this.valoresForm);
    localStorage.setItem('cadastro', this.conversao)

    this.verificaCadastro();
  }

  verificaCadastro(){
    setTimeout(() => {
      if(localStorage.getItem('cadastro')){
        this.router.navigate(['cadastro-concluido'])
      } else {
        return false;
      }
    }, 200)
  }
}
