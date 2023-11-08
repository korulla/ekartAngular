import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  searchText: string = ''

  @Output()
  onInputTextChanged:EventEmitter<string> = new EventEmitter<string>()

  // searchTextChanged(){
  //   this.onInputTextChanged.emit(this.searchText)
  // }

  @ViewChild("inputText") SearchInputElement: ElementRef

  updateSearchtext(){
    this.searchText = this.SearchInputElement.nativeElement.value
    this.onInputTextChanged.emit(this.searchText)
  }
}
