import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ViaCepService } from 'src/app/services/via-cep.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-cliente-form',
  templateUrl: './new-cliente-form.component.html',
  styleUrls: ['./new-cliente-form.component.css']
})

export class NewClienteFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _clientesService: ClientesService, private _viaCepService: ViaCepService, private router: Router) {

  }

  id: string = ''
  nome: string = ''
  genero: string = ''
  dataNascimento: string = ''
  cpf: string = ''
  rg: string = ''
  enderecoEmail: string = ''
  cep: string = ''
  logradouro: string = ''
  complemento: string = ''
  bairro: string = ''
  localidade: string = ''
  uf: string = ''

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!

    this._clientesService.getClienteInfo(this.id).subscribe(
      (response: any) => {
        this.id = response.id
        this.nome = response.nome
        this.genero = response.genero
        this.dataNascimento = response.dataNascimento
        this.cpf = response.cpf
        this.rg = response.rg
        this.enderecoEmail = response.enderecoEmail
        this.cep = response.cep
        this.logradouro = response.logradouro
        this.complemento = response.complemento
        this.bairro = response.bairro
        this.localidade = response.localidade
        this.uf = response.uf
      }
    )
  }

  criarNovoCliente() {
    const formData = new FormData()
    formData.append('nome', this.nome)
    formData.append('genero', this.genero)
    formData.append('dataNascimento', this.dataNascimento)
    formData.append('cpf', this.cpf)
    formData.append('rg', this.rg)
    formData.append('enderecoEmail', this.enderecoEmail)
    formData.append('cep', this.cep)
    formData.append('logradouro', this.logradouro)
    formData.append('complemento', this.complemento)
    formData.append('bairro', this.bairro)
    formData.append('localidade', this.localidade)
    formData.append('uf', this.uf)

    if (this.id == null) {
      this._clientesService.createNewCliente(formData).subscribe(
        (response: any) => {
          if (response.id) {
            alert('Cliente adicionado com sucesso')
            this.router.navigate(['/listacliente']);
          }
          else {
            alert('Cliente atualizado com sucesso')
            this.router.navigate(['/']);
          }
        },
        (erro: HttpErrorResponse) => {
          if (erro.status == 409) {
            alert(erro.error.mesage)
          }
        }
      )
    } else {
      this._clientesService.putCliente(formData).subscribe(
        (response: any) => {
          alert('Cliente atualizado com sucesso')
          this.router.navigate(['/listacliente']);
        },
        (erro: HttpErrorResponse) => {
          if (erro.status == 409) {
            alert(erro.error.mesage)
          }
        }
      )
    }

  }


  onClickZipcode(zipcode: string) {
    zipcode = zipcode.replace('-', '');

    if (this.verifyZipcode(zipcode)) {
      this._viaCepService.getAddressByZipCode(zipcode)
        .subscribe(
          address => {
            if (address.erro === true) {
              this.cep = ''
              this.logradouro = ''
              this.complemento = ''
              this.bairro = ''
              this.localidade = ''
              this.uf = ''
            } else {
              this.cep = address.cep
              this.logradouro = address.logradouro
              this.complemento = address.complemento
              this.bairro = address.bairro
              this.localidade = address.localidade
              this.uf = address.uf
            }
          },
          error => {
            this.cep = ''
            this.logradouro = ''
            this.complemento = ''
            this.bairro = ''
            this.localidade = ''
            this.uf = ''
          }
        );
    } else {
      this.cep = ''
      this.logradouro = ''
      this.complemento = ''
      this.bairro = ''
      this.localidade = ''
      this.uf = ''
    }
  }

  verifyZipcode(zipcode: string): boolean {
    if (zipcode.length === 8) {
      return true;
    }

    return false;
  }

}
