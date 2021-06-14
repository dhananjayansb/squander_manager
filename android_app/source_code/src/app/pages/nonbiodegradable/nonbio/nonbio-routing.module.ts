import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonbioPage } from './nonbio.page';

const routes: Routes = [
  {
    path: '',
    component: NonbioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonbioPageRoutingModule {}
