import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponenetComponent} from './test-componenet/test-componenet.component'

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
