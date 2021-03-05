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
    path: 'writepost/:name',
    loadChildren: () => import('./writepost/writepost.module').then( m => m.WritepostPageModule)
  },
  {
    path: 'viewpost/:name',
    loadChildren: () => import('./viewpost/viewpost.module').then( m => m.ViewpostPageModule)
  },
  {
    path: 'managepost/:name',
    loadChildren: () => import('./managepost/managepost.module').then( m => m.ManagepostPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
