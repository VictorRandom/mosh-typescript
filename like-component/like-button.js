"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeButton = /** @class */ (function () {
    function LikeButton(_like, _selected) {
        this._like = _like;
        this._selected = _selected;
    }
    LikeButton.prototype.onClick = function () {
        /*
        if(this.selected == false){
            this.like++;
            this.selected = true;

        }
        if(this.selected == true){
            this.like--;
            this.selected = false;
        }
        */
        this._like += (this._selected) ? -1 : 1;
        this._selected = !this._selected;
    };
    Object.defineProperty(LikeButton.prototype, "like", {
        get: function () {
            return this._like;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeButton.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeButton;
}());
exports.LikeButton = LikeButton;
