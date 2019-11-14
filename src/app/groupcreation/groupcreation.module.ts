import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupcreationPage } from './groupcreation.page';

const routes: Routes = [
  {
    path: '',
    component: GroupcreationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupcreationPage]
})
export class GroupcreationPageModule {}
