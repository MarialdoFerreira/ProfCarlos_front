import { Component, OnInit } from '@angular/core';
import { ItemsService, candy } from 'src/app/services/items.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})

export class ListItemsComponent implements OnInit {

  candyList: candy[] | undefined
  load: boolean = false

  constructor(private itemsService: ItemsService) {

  }

  ngOnInit() {
    this.itemsService.getAllCandy().subscribe(
      (response: any) => {
        this.candyList = response.doces
      }
    )
  }
}
