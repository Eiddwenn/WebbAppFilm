import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { searchShow } from 'src/app/models/search-show';
import { Shows } from 'src/app/models/shows';
import { HeaderService } from 'src/app/services/header.service';
import { TvApiService } from 'src/app/services/tv-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
shows: Array<Shows> = [];
searchShow: Array<searchShow> = [];
showValue;
show = false;

constructor(private apiService: TvApiService, private headerService: HeaderService, private router: Router){
 this.getShows();
 this.showValue = this.headerService.getValue.subscribe((v) => {this.show = v})
}

// shows call

getShows = () => {
  this.apiService.getAllShows().subscribe({
    next: (data: Array<Shows>) => {
      this.shows = data;
    }
  })
}

// search bar call

onSearch = (value: string) => {
  this.apiService.searchShow(value).subscribe({
    next: (data: Array<searchShow>) => {
      if(value){
        this.shows = [];
        this.searchShow = data;
      } else {
        this.getShows()
      }
    }
  })
}

// store id for details page and navigate

goToShowDetails = (data: any) => {
  this.router.navigate(['show-details', data.id])
}

}
