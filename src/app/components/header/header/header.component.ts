import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private headerService: HeaderService){}

// change value of behavior subject on click

  changeValue() {
    let val = this.headerService.showSearchBar$.value
    if(val){
      val = false
    } else {
      val = true
    }
    this.headerService.setValue(val)
    
  }
}
