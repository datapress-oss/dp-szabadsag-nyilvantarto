import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { UserGuardGuard } from './guards/user-guard.guard';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { BossGuardGuard } from './guards/boss-guard.guard';
import { BossComponent } from './boss/boss.component';
import {SummaryViewComponent} from './summary-view/summary-view.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'boss',
    component: BossComponent,
    canActivate: [BossGuardGuard]
  },
  {
    path: 'summary',
    component: SummaryViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
