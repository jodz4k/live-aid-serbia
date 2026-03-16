import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CampaignDetailsComponent } from './pages/campaign-details/campaign-details.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'campaigns', redirectTo: '/home', pathMatch: 'full' },
  { path: 'artists', component: ArtistsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'campaign/:id', component: CampaignDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
