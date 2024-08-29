import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileListComponent } from './mobile-list/mobile-list.component';

const routes: Routes = [
  {path:"", component:MobileListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
