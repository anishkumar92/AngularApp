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
  editPost(post:Post){
    this.currentPost=post;
    this.isEdit=true;
  }
}
