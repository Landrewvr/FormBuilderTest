import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestFormComponent } from './components/test-form/test-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'TestForm',
    pathMatch: 'full'
  },
  {
    path: 'TestForm',
    component: TestFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
