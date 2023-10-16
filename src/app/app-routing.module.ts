import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { ShowDetailsComponent } from './components/show-details/show-details/show-details.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'show-details/:id', component: ShowDetailsComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
