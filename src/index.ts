import { Vector } from "./math";
import { drawChain, drawRect } from "./render";

let canvas = <HTMLCanvasElement> document.getElementById("canvas1");
let c = <CanvasRenderingContext2D> canvas.getContext("2d");

let display = <HTMLCanvasElement> document.getElementById("canvas2");
let d = <CanvasRenderingContext2D> display.getContext("2d");
let cap = 10;
let dim = new Vector(100, 100);
display.height = dim.y;
display.width = dim.x*cap;

let runes : Vector[][] = [];
let color = "purple";
let girth = 1;
let points : Vector[] = [];
let pos = new Vector(0, 0);

function update() {
    dim = new Vector(100, 100);
    console.log("doin shit");
    // count++;
    points = [];
    for (let i = 0; i < runes.length + 1; i++) {
        let x = Math.floor(Math.random()*dim.x);
        let y = Math.floor(Math.random()*dim.y);
        points.push(new Vector(x, y));
    }
    runes.push(points);

}
function render() {
    drawRect(c, 0, 0, canvas.clientWidth, canvas.clientHeight, "beige");
    drawRect(d, 0, 0, display.clientWidth, display.clientHeight, "beige");
    
    //experimental rune generation
    drawChain(c, pos, points, girth, color);
    let count = 0;
    for (let i = 0; i < runes.length; i++) {
        let posD = new Vector(i, 0).multiply(dim);
        drawChain(d, posD, runes[i], girth, color);
        count++;
    }
    
}
function reload() {
    update();
    render();
    if (runes.length < cap) {
        window.setTimeout(reload, 500);
    }
}
reload();