// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
import {TdfComponent} from './tdf/tdf.component';
import {MdfComponent} from './mdf/mdf.component';

const routes: Routes = [
  {
    path: '',
    component: TdfComponent
  },
  {
    path: 'mdf',
    component: MdfComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
