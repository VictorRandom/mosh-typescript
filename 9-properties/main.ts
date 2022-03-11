class Point {

    // o ? serve para deixar o parametro como opcional
    constructor(private _x?:number, private _y?:number){
        //..
    }

    draw(){
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    get x(){
        return this._x;
    }

    set x(value){
        if (value < 0){
            throw new Error('value cannot be less than 0.');
        }
        this._x = value;
    }
}

let point = new Point(1, 2);
//point.x = 3; não pode chamar o elemento assim por ele ser declarado como privado
let x = point.x;
point.x = 10;
point.draw(); 