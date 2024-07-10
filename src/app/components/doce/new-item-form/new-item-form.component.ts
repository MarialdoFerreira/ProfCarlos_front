import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.css']
})
export class NewItemFormComponent {

  categoria: string = ''
  descricao: string = ''
  genero: string = ''
  valor_atual: string = ''
  imagem: File | null = null;

  constructor(private _itemsService: ItemsService, private router: Router) {

  }

  onFileSelect(event: any) {
    this.imagem = event.target.files[0] as File;
  }

  criarNovoDoce() {
    const formData = new FormData()
    formData.append('categoria', this.categoria)
    formData.append('descricao', this.descricao)
    formData.append('genero', this.genero)
    formData.append('valor_atual', this.valor_atual)

    if(this.imagem){
      formData.append('imagem', this.imagem)
    }

    this._itemsService.createNewCandy(formData).subscribe(
      (response: any) => {
        if(response.id) {
          alert('criado com sucesso')
          this.router.navigate(['/']);
        }
      },
      (erro: HttpErrorResponse) => {
        if(erro.status == 409){
          alert(erro.error.mesage)
        }
      }
    )
  }

}
