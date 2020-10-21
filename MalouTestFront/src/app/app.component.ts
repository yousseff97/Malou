import { formatDate } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import Post from './_models/post';
import { PostService } from './_services/post.service';
import { Const } from './_shared/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MalouTestFront';
  posts: Post[];
  subscriptions: Subscription[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts(new Date(Const.pickerDefaultDate));
  }

  getPosts(date: Date) {
    let sub = this.postService.getPosts(date).subscribe(res => this.posts = res, err => { console.log("An error occured") });
    this.subscriptions.push(sub);
  }

  loadPosts(event) {
    this.unsubscribe();
    this.deleteAllPosts();
    this.getPosts(event.value);
  }

  unsubscribe() {
    for (let sub of this.subscriptions)
      sub.unsubscribe();
  }

  deleteAllPosts() {
    this.posts = [];
  }

}
