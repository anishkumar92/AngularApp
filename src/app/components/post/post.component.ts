import { Component, OnInit } from '@angular/core';
import{Post} from '../../Models/Post';
import{PostService} from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:Post[];
  currentPost:Post={
    id:0,
    title:'',
    body:''
  };
 isEdit:boolean=false;

constructor(private postService:PostService) { }

  ngOnInit() {

    this.postService.getPost().subscribe(post=>{
      this.posts=post;
    })
  }

  onNewPost(post:Post){
    this.posts.unshift(post);
  }
  onUpdatedPost(post:Post){
    this.posts.forEach((cur,index)=>{
      if(post.id===cur.id){
        this.posts.splice(index,1);
        this.posts.unshift(post);
        this.isEdit=false;
        this.currentPost={
          id:0,
          title:'',
          body:''
        };
      }
    })
  }
  editPost(post:Post){
    this.currentPost=post;
    this.isEdit=true;
  }
  removePost(post:Post){
    
    if(confirm('are u sure ?')){
      this.postService.removePost(post.id).subscribe(()=>{
        this.posts.forEach((cur,index)=>{
            if(post.id===cur.id){
            this.posts.splice(index,1);
                   }
        })
      })
    }
  }
}
