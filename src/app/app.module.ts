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
import { StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component/student-form/student-form.component';
import { StudentListComponent } from './shared/component/student-list/student-list.component';
import { ShopDashboardComponent } from './shared/component/shop-dashboard/shop-dashboard.component';
import { ShopListComponent } from './shared/component/shop-list/shop-list.component';
import { ShopFormComponent } from './shared/component/shop-form/shop-form.component';
import { Student1DashboardComponent } from './shared/component/student1-dashboard/student1-dashboard.component';
import { Student1ListComponent } from './shared/component/student1-list/student1-list.component';
import { Student1FormComponent } from './shared/component/student1-form/student1-form.component';
import { FairDashboardComponent } from './shared/component/fair-dashboard/fair-dashboard.component';
import { FairListComponent } from './shared/component/fair-list/fair-list.component';
import { FairFormComponent } from './shared/component/fair-form/fair-form.component';
import { Todo1DashboardComponent } from './shared/component/todo1-dashboard/todo1-dashboard.component';
import { Todo1ListComponent } from './shared/component/todo1-list/todo1-list.component';
import { Todo1FormComponent } from './shared/component/todo1-form/todo1-form.component';
import { CardDashboardComponent } from './shared/component/card-dashboard/card-dashboard.component';
import { CardListComponent } from './shared/component/card-list/card-list.component';
import { CardFormComponent } from './shared/component/card-form/card-form.component';

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
    BikeFormComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentListComponent,
    ShopDashboardComponent,
    ShopListComponent,
    ShopFormComponent,
    Student1DashboardComponent,
    Student1ListComponent,
    Student1FormComponent,
    FairDashboardComponent,
    FairListComponent,
    FairFormComponent,
    Todo1DashboardComponent,
    Todo1ListComponent,
    Todo1FormComponent,
    CardDashboardComponent,
    CardListComponent,
    CardFormComponent,
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
