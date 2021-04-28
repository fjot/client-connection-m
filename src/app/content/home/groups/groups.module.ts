import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups.component';
import { GroupsRoutingModule } from './groups-routing.module';



@NgModule({
  declarations: [GroupsComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule
  ],
  exports: [GroupsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GroupsModule { }
