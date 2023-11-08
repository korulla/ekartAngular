import { outputAst } from '@angular/compiler';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
    @Input()
    all: number = 0

    @Input()
    inStock: number = 0

    @Input()
    outOfStock: number = 0

    // @Output()
    selectedFilterRadioBtn: string = 'all'

    @Output()
    selectedFilterRadioBtnChange:EventEmitter<string> = new EventEmitter<string>()
    
    onSelectedFilterRadioBtnChange(){
      // console.log(this.selectedFilterRadioBtnChange);
      this.selectedFilterRadioBtnChange.emit(this.selectedFilterRadioBtn)
    }

    


}
