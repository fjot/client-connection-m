import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './content/home/user/user.component';

const routes: Routes = [
//   {
//     path: 'user',
//     loadChildren: () => import('./content/user/user.module').then(m => m.UserModule)
//  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
