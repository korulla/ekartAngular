import { Component, EventEmitter, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  searchText: string = ''

  searchInput(event){
    this.searchText = event

  }

  @ViewChild(ProductListComponent) ProductListComponent: ProductListComponent

}
