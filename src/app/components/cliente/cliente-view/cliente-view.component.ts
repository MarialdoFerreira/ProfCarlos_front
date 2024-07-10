import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { clienteInfo } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['./cliente-view.component.css']
})
export class ClienteViewComponent implements OnInit {

  id: string = ''
  clienteInfo: clienteInfo | undefined
  nome: string = ''
  dataNascimento: string = ''
  genero: string = ''
  cpf: string = ''
  rg: string = ''

  constructor(private route: ActivatedRoute, private router: Router, private clientesService: ClientesService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!

    this.clientesService.getClienteInfo(this.id).subscribe(
      (response: any) => {
        this.clienteInfo = response
      }
    )
  }


}
