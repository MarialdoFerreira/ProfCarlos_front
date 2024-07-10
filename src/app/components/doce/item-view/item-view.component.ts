import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { candyInfo } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  id: string = ''
  candyInfo: candyInfo | undefined

  avaliacao: string = ''

  constructor(private route: ActivatedRoute, private router: Router, private itemsService: ItemsService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!

    this.itemsService.getCandyInfo(this.id).subscribe(
      (response: any) => {
        this.candyInfo = response
      }
    )
  }

  deleteCandy(descricao: any) {
    this.itemsService.deleteCandy(descricao).subscribe(
      (response) => {
        if (response.id) {
          alert(response.mesage)
          this.router.navigate(['/']);
        }
      },
      (erro) => {
        alert('Não foi possível excluir o doce')
      }
    )
  }

  criarAvaliacao() {
    const formData = new FormData()
    formData.append('desc_avaliacao', this.avaliacao)
    formData.append('doce_id', this.id)
    this.itemsService.createAssessment(formData).subscribe(
      (response) => {
        alert('Avaliação salva com sucesso')
        this.ngOnInit()
      },
      (error) => {
        alert(error.error.mesage)
      }
    )
  }
}
