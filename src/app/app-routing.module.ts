import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {  path: 'start', loadChildren: () => import('./start/start.module').then(m => m.StartPageModule)
 },
  { path: 'draw', loadChildren: () => import('./draw/draw.module').then(m => m.DrawPageModule) },
  { path: 'groupcreation', loadChildren: './groupcreation/groupcreation.module#GroupcreationPageModule' },
  { path: 'groupdetail', loadChildren: './groupdetail/groupdetail.module#GroupdetailPageModule' },
  { path: 'list-groups', loadChildren: './list-groups/list-groups.module#ListGroupsPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
