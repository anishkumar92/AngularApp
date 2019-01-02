import { Injectable } from '@angular/core';
import {User} from '../Models/user';
import { Observable ,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users:User[];
  data: Observable<any>;
  constructor() {
    
    this.users =[{
      firstName:'John',
      lastName:'doe',
      email:'john@gmail.com',
      isActive:false,
      registered: new Date('11/02/2016 10:30:00'),
      hide:false
    },
    {
      firstName:'ole',
      lastName:'doe',
      email:'john@gmail.com',
      isActive:false,
      registered: new Date('11/02/2016 10:30:00'),
      hide:true
    },
    {
      firstName:'shalle',
      lastName:'doe',
      email:'john@gmail.com',
      isActive:true,
      registered: new Date('11/02/2016 10:30:00'),
      hide:false
    }
  ]
   }

   getUsers():Observable<User[]>{
   return of(this.users) ;
   }

   addUser(value:User){
     this.users.unshift(value)
   }
}
