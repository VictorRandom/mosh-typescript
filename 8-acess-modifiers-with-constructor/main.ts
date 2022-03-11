class Point {

    // o ? serve para deixar o parametro como opcional
    constructor(private x?:number, private y?:number){
        //..
    }

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

}

let point = new Point(1, 2);
//point.x = 3; não pode chamar o elemento assim por ele ser declarado como privado
point.draw(); 