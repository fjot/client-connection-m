import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServicesGuard } from 'src/app/services/services.guard';

const routes: Routes = [
    {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        canActivate: [ServicesGuard] 
    },
    {
        path: 'groups',
        loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule),
        canActivate: [ServicesGuard] 
    }
  ];
  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
