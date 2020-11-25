import { Vector } from "./math";

export function drawChain(g: CanvasRenderingContext2D, pos: Vector, chain: Vector[], girth: number, color: string) {
    if (chain.length < 2) {
        console.error("passed in single point instead of Chain")
    }
    g.strokeStyle = color;
    g.lineWidth = girth;
    g.beginPath();
    let start = chain[0].add(pos);
    g.moveTo(start.x, start.y);
    for (let i = 1; i < chain.length; i++) {
        let current = chain[i].add(pos);
        g.lineTo(current.x, current.y);
    }
    g.stroke()
}
export function drawRect(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string = "black") {
    g.fillStyle = color;
    g.fillRect(x, y, w, h);
}