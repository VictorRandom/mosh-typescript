
export class LikeButton{

    constructor(private _like: number, private _selected: boolean){

    }

    onClick(){
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
    }

    get like(){
        return this._like;
    }

    get selected(){
        return this._selected;
    }
    

}