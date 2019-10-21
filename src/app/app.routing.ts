import { Routes,RouterModule } from "@angular/router";
import { Taskdisplay1Component } from './taskdisplay1/taskdisplay1.component';
import { HomeComponent } from './home/home.component';


const arr : Routes=[

{path:'',component:HomeComponent},
{path:'task',component:Taskdisplay1Component}

];

export const routing=RouterModule.forRoot(arr);
