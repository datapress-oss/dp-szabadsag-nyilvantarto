import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {TestComponenetComponent} from './test-componenet/test-componenet.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponenetComponent,
    data: {animation: 'TestPage'}
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
