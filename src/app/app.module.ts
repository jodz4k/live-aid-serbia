import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { CampaignCardComponent } from './components/campaign-card/campaign-card.component';
import { CampaignDetailsComponent } from './pages/campaign-details/campaign-details.component';
import { DonationWidgetComponent } from './components/donation-widget/donation-widget.component';
import { DonationTemplateFormComponent } from './forms/donation-template-form/donation-template-form.component';
import { DonationReactiveFormComponent } from './forms/donation-reactive-form/donation-reactive-form.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { LoginComponent } from './components/login/login.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CampaignListComponent,
    CampaignCardComponent,
    CampaignDetailsComponent,
    DonationWidgetComponent,
    DonationTemplateFormComponent,
    DonationReactiveFormComponent,
    ArtistsComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
