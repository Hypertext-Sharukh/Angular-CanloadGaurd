import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AdminComponent }  from './admin.component';
import { PersonListComponent }  from './person-list/person.list.component';
import { PersonService } from './services/person.service';
import { AdminRoutingModule }  from './admin-routing.module';

@NgModule({
  imports: [     
    CommonModule,
		AdminRoutingModule
  ], 
  declarations: [
		AdminComponent,
		PersonListComponent
  ],
  providers: [ PersonService ]
})
export class AdminModule { 
  constructor() {
    console.log('AdminModule loaded.');
  }
}
