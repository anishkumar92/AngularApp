import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{PostService} from '../../services/post.service';
import {Post} from '../../Models/Post';

@Component({
  selector: 'app-post-expand',
  templateUrl: './post-expand.component.html',
  styleUrls: ['./post-expand.component.css']
})
export class PostExpandComponent implements OnInit {

  post:Post;

  constructor(
    private route:ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.postService.getPostExpand(id).subscribe(post=>
      this.post=post)
  }

}
