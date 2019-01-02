import { Component, OnInit ,ViewChild } from '@angular/core';
import {User} from '../../Models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // properties 
  user:User={
    firstName:'',
    lastName:'',
    email:''
  }  ;
  users:User[];
  showExtended:boolean=true;
  loaded:boolean=true;
  enableAdd:boolean=true;
  showUserForm:boolean=false;
  @ViewChild('userForm')form:any;
  data:any;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users =>{
      this.users= users;
      this.loaded=true;  
    });
   
}
 
toggleHide(user:User){
  user.hide=!user.hide;
}

onSubmit({value,valid} :{value:User,valid:boolean}){
 if(!valid){
   console.log("not valid form");
 }else{
  value.isActive=true;
  value.registered=new Date();
 
 this.userService.addUser(value);
 this.form.reset();
 }

}
  
}
