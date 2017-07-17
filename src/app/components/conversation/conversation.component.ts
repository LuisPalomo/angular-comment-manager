import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment';
import { User } from '../../models/user';
import { comments } from '../../mocked-data';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  @Input()
  toUser: User;

  @Input()
  fromUser: User;

  @Input()
  userName: string;

  @Input()
  status: string;

  date: string;

  newText: string;

  private comments: Comment[];

  private idCounter: number;

  constructor() {
    this.date = this.formatDate(new Date());
    this.newText = '';
    this.comments = comments;
    this.idCounter = 4;
  }

  ngOnInit() {
  }

  sendComment(): void {
    this.comments.push({
      id: this.idCounter++ + '',
      text: this.newText,
      time: new Date().toString(),
      user: this.fromUser
    });
    this.newText = '';
  }

  // TODO: This should be in a pipe
  private formatDate(date) {
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

}
