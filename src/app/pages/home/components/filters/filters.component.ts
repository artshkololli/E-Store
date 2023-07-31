import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
})
export class FiltersComponent implements OnInit{
  @Output() showCategory =new EventEmitter<string>();
  categories=['laptop','desktop'];

  constructor(){}

  ngOnInit(): void {
  }

  onShowCategory(cat:string):void{
    this.showCategory.emit(cat);
  }

}
