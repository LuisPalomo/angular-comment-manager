import { Comment } from './models/comment';
import { User } from './models/user';

export let users: User[] = [
  {
    id: '1',
    name: 'Chuck Norris',
    avatar: 'assets/img/Chuck_Norris.jpg'
  },
  {
    id: '2',
    name: 'Bruce Lee',
    avatar: 'assets/img/Bruce_Lee.jpg'
  }
]

export let comments: Comment[] = [
  {
    id: '1',
    user: users[0],
    text: 'Hello Bruce!',
    time: (new Date() + '').substring(16, 21)
  },
  {
    id: '2',
    user: users[1],
    text: 'Hi Chuck! What\'s up? ',
    time: (new Date() + '').substring(16, 21)
  },
  {
    id: '3',
    user: users[0],
    text: 'I\'ve always found that anything worth achieving will always have obstacles in the way and you\'ve got to have that drive and determination to overcome those obstacles on route to whatever it is that you want to accomplish',
    time: (new Date() + '').substring(16, 21)
  },
  {
    id: '3',
    user: users[1],
    text: 'Empty your mind, be formless, shapeless—like water',
    time: (new Date() + '').substring(16, 21)
  }
];