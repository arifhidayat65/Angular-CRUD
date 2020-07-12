import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'employe',
  },
  {
    path: 'employee',
    component: EmployeeListComponent,
  },
  {
    path: 'employee/detail/:id',
    component: EmployeeDetailComponent,
  },
];
@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeDetailComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
