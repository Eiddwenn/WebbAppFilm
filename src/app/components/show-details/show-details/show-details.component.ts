import { Component } from '@angular/core';
import { TvApiService } from 'src/app/services/tv-api.service';
import { ShowDetails } from 'src/app/models/show-details';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent {

  result: any = {};

  constructor(private apiService: TvApiService, private route: ActivatedRoute){

    this.getDetails();
  }

  getDetails = () => {
    this.route.params.pipe(
      switchMap((params) => {
        return this.apiService.getDetailShow(params['id'])
      })
    ).subscribe({
      next: (data: ShowDetails) => {
        this.result = data
        console.log(this.result);
        
      }
    })
  }



}
