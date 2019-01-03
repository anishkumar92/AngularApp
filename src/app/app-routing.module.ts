import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import{UserComponent} from './components/user/user.component';
import{PostComponent} from './components/post/post.component';
import{PostExpandComponent} from './components/post-expand/post-expand.component';
import{NotfoundComponent} from './components/notfound/notfound.component';


const routes:Routes =[
  {path:'',component:HomeComponent},
  {path:'users',component:UserComponent},
  {path:'post',component:PostComponent},
  {path:'posts/:id',component:PostExpandComponent},
  {path:'**',component:NotfoundComponent}
  ];


@NgModule({
  exports: [RouterModule],
  imports: [
  RouterModule.forRoot(routes)
  
    ]
})
export class AppRoutingModule { }
