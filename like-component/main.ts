import { LikeButton } from './like-button';


let userLikes = new LikeButton(10, false);

userLikes.onClick();

console.log(`like: ${userLikes.like}, selected: ${userLikes.selected}`);