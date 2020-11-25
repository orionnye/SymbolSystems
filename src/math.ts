export class Vector {
    x : number;
    y : number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    subtract(that: Vector) {
        return new Vector(this.x-that.x, this.y-that.y)
    }
    add(that: Vector) {
        return new Vector(this.x+that.x, this.y+that.y);
    }
    get signs() {
        let {x, y} = this;
        return new Vector(Math.sign(x), Math.sign(y));
    }
    multiply(that: Vector) {
        return new Vector(this.x*that.x, this.y*that.y);
    }
    scale(that: number) {
        return new Vector(this.x*that, this.y*that)
    }
    get length() {
        let {x, y} = this;
        return Math.sqrt(x*x + y*y);
    }
    get normal() {
        let {x, y, length} = this;
        return new Vector(x/length, y/length);
    }
}
export let getRadianAngle = (angleCount: number) => { return Math.PI*2/angleCount; }