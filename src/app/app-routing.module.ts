import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {TestComponenetComponent} from './test-componenet/test-componenet.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component'

const routes: Routes = [
  {
    path: 'test',
    component: TestComponenetComponent,
    data: {animation: 'TestPage'}
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
