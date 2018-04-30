import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OktaCallbackComponent, OktaAuthModule } from '@okta/okta-angular';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from './shared/car/car.service';
import { CarListComponent } from './car-list/car-list.component';
import { GiphyServiceService } from './shared/giphy/giphy-service.service';
import { CarEditComponent } from './car-edit/car-edit.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  }
];

const config = {
  issuer: 'https://dev-228294.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oaeuptkakM6WfM1v0h7'
};

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    OktaAuthModule.initAuth(config),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ CarService, GiphyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
