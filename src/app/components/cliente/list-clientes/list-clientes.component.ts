import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService, cliente } from 'src/app/services/clientes.service';
import { clienteInfo } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})


export class ListClientesComponent implements OnInit {

  clienteList: cliente[] | undefined
  load: boolean = false

  constructor(private route: ActivatedRoute, private router: Router, private clientesService: ClientesService) {
    //constructor(private clientesService: ClientesService) {
  }

  ngOnInit() {
    this.clientesService.getAllCliente().subscribe(
      (response: any) => {
        this.clienteList = response.clientes
      }
    )
  }

  // 
  EditCliente(cpf: any) {
    this.router.navigate(['editar', cpf], { relativeTo: this.route });
  }
  //

  deleteCliente(cpf: any) {
    let v_exc = confirm('Confirma exclusão?')
    if (v_exc) {
      this.clientesService.deleteCliente(cpf).subscribe(
        (response) => {
          if (response.id) {
            alert(response.mesage)
            this.router.navigate(['/']);
          }
        },
        (erro) => {
          alert('Não foi possível excluir o cliente')
        }
      )
    }
    else {
      alert('Cliente não excluido')
    }
  }

  editCliente(cpf: string) {
    this.clientesService.putCliente(cpf).subscribe(
      (response) => {
        if (response.id) {
          alert(response.mesage)
          this.router.navigate(['/']);
        }
      },
      (erro) => {
        alert('Não foi possível atualizar o cliente')
      }
    )
  }

  converteData(data: string): string {
    return new Date(data).toLocaleDateString("pt-BR", { timeZone: "UTC" })
  }

}
