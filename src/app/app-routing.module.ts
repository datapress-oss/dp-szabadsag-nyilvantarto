import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponenetComponent} from './test-componenet/test-componenet.component'

const routes: Routes = [
  {
    path: 'test',
    component: TestComponenetComponent,
    data: {animation: 'TestPage'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
