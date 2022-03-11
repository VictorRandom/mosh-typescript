class Point {
    private x: number;
    private y: number;

    // o ? serve para deixar o parametro como opcional
    constructor(x?:number, y?:number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

}

let point = new Point(1, 2);
//point.x = 3; não pode chamar o elemento assim por ele ser declarado como privado
point.draw(); 