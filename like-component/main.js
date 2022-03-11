"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_button_1 = require("./like-button");
var userLikes = new like_button_1.LikeButton(10, false);
userLikes.onClick();
console.log("like: " + userLikes.like + ", selected: " + userLikes.selected);
