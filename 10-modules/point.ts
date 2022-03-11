
export class Point {
    // o ? serve para deixar o parametro como opcional
    constructor(private x?:number, private y?:number){
        //..
    }

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}