import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bio',
    loadChildren: () => import('./pages/biodegradable/bio/bio.module').then( m => m.BioPageModule)
  },
  {
    path: 'nonbio',
    loadChildren: () => import('./pages/nonbiodegradable/nonbio/nonbio.module').then( m => m.NonbioPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
