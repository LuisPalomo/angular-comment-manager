import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment';

/** Five minutes in milliseconds */
const FIVE_MIN_MS = 300000;

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  comments: Comment[];

  @Input()
  userId: string;

  constructor() { }

  ngOnInit() {
  }

  enableEdit(comment: Comment): void {
    // The comment only can be edited if it's from the same user and
    // it has not been 5 minutes until the creation of the comment
    if (this.userId === comment.user.id &&
      new Date().getTime() - new Date(comment.time).getTime() < FIVE_MIN_MS) {
        comment.editing = true;
    }
  }

}
