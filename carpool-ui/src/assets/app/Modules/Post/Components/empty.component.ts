import { Component, OnInit } from '@angular/core';
import {PostService} from '../posts.services';
import { Router } from '@angular/router';

@Component({
  templateUrl: './post.component.html'
})
export class EmptyComponent implements OnInit {

  constructor(
    private PostService: PostService,
    private router: Router
  ){}

  ngOnInit() {
  }

  
  

}
