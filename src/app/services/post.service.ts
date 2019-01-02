import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {Post} from '../Models/Post';
import { Observable,of } from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({'Content-type':'application/json'}),
}
@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { 
    
  }
getPost():Observable<Post[]>{

  return this.http.get<Post[]>(this.postUrl);
}

savePost(post:Post):Observable<Post>{
  return this.http.post<Post>(this.postUrl,post,httpOptions);
}
}
