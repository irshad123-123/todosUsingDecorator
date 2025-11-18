import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosDashboardComponent } from './shared/component/todos-dashboard/todos-dashboard.component';
import { TodosFormComponent } from './shared/component/todos-form/todos-form.component';
import { TodosListComponent } from './shared/component/todos-list/todos-list.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NameDashboardComponent } from './shared/component/name-dashboard/name-dashboard.component';
import { NameFormComponent } from './shared/component/name-form/name-form.component';
import { NameListComponent } from './shared/component/name-list/name-list.component';
import { LaptopDashboardComponent } from './shared/component/laptop-dashboard/laptop-dashboard.component';
import { LaptopListComponent } from './shared/component/laptop-list/laptop-list.component';
import { LaptopFormComponent } from './shared/component/laptop-form/laptop-form.component';
import { MobileDashboardComponent } from './shared/component/mobile-dashboard/mobile-dashboard.component';
import { MobileListComponent } from './shared/component/mobile-list/mobile-list.component';
import { MobileFormComponent } from './shared/component/mobile-form/mobile-form.component';
import { BikeDashboardComponent } from './shared/component/bike-dashboard/bike-dashboard.component';
import { BikeListComponent } from './shared/component/bike-list/bike-list.component';
import { BikeFormComponent } from './shared/component/bike-form/bike-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    TodosDashboardComponent,
    TodosFormComponent,
    TodosListComponent,
    NameDashboardComponent,
    NameFormComponent,
    NameListComponent,
    LaptopDashboardComponent,
    LaptopListComponent,
    LaptopFormComponent,
    MobileDashboardComponent,
    MobileListComponent,
    MobileFormComponent,
    BikeDashboardComponent,
    BikeListComponent,
    BikeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
