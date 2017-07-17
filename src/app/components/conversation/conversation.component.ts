import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment';
import { comments } from '../../mocked-data';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  @Input()
  userName: string;

  @Input()
  status: string;

  date: string;

  private comments: Comment[];

  constructor() {
    this.date = this.formatDate(new Date());
    this.comments = comments;
  }

  ngOnInit() {
  }

  private formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

}
