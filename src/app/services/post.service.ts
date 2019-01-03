import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {Post} from '../Models/Post';
import { Observable} from 'rxjs';

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
getPostExpand(id:number):Observable<Post>{
  const url=`${this.postUrl}/${id}`;
  return this.http.get<Post>(url);
}

savePost(post:Post):Observable<Post>{
  return this.http.post<Post>(this.postUrl,post,httpOptions);
}

updatePost(post:Post):Observable<Post>{
  const url=`${this.postUrl}/${post.id}`;
  console.log(url);
  return this.http.put<Post>(url,post,httpOptions)
  
}

removePost(post:Post | number):Observable<Post>{
const id = typeof post === 'number' ? post : post.id;
console.log(id);
const url=`${this.postUrl}/${id}`;
return this.http.delete<Post>(url,httpOptions);
}
}

