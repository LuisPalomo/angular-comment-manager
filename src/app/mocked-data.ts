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
    time: new Date().toString()
  },
  {
    id: '2',
    user: users[1],
    text: 'Hi Chuck! What\'s up? ',
    time: new Date().toString()
  },
  {
    id: '3',
    user: users[0],
    text: 'I\'ve always found that anything worth achieving will always have obstacles in the way and you\'ve got to have that drive and determination to overcome those obstacles on route to whatever it is that you want to accomplish.',
    time: new Date().toString()
  },
  {
    id: '3',
    user: users[1],
    text: 'Don\'t get set into one form, adapt it and build your own, and let it grow, be like water. Empty your mind, be formless, shapeless—like water. If you put water into a cup, it becomes the cup. You put water into a bottle it becomes the bottle. You put it in a teapot it becomes the teapot. Now, water can flow or it can crash. Be water my friend.',
    time: new Date().toString()
  }
];