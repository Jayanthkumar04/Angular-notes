import { Routes } from '@angular/router';
import { EventListComponent } from './features/events/event-list/event-list.component';

export const routes: Routes = [
  {path:'',component:EventListComponent,pathMatch:'full'},
  {path:'users',loadChildren:()=>import('./features/user/user.module').then(m=>m.UserModule)},
  {path:'events',loadChildren:()=>import('./features/events/events.module').then(m=>m.EventsModule)},
  {path:'**',redirectTo:'events'}
  
];
