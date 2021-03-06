class Snake{
    constructor(){
        this.body = [];
        this.dir = 'right';
        this.zise = 0;
        this.hasEaten = false;
    }

    start(x,y, size){
        console.log('Starting the snake')
        this.body = [];
        this.body.push(new Part(x-size-size,y));
        this.body.push(new Part(x-size,y));
        this.body.push(new Part(x,y));
        this.size = size;
        this.dir = 'right';
    }

    update(cell, max){
        let head = this.body[this.body.length -1];
        if(this.dir=='right'){
            let next = head.x + cell >= max? 0: head.x + cell;
            this.body.push(new Part(next, head.y));
        }
        if(this.dir=='up'){
            let next = head.y - cell <0? max - cell: head.y - cell;
            this.body.push(new Part(head.x, next));
        }
        if(this.dir=='left'){
            let next = head.x - cell <0? max - cell: head.x - cell;
            this.body.push(new Part(next, head.y));
        }
        if(this.dir=='down'){
            let next = head.y + cell >=max? 0: head.y + cell;
            this.body.push(new Part(head.x, next));
        }

        if(!this.hasEaten){
            this.body.shift();
        }
        
        this.hasEaten = this.hasEaten? false: false;
        this.draw();
    }

    draw(){
        for(let [key, part] of this.body.entries()){
            if(key == this.body.length-1){
                fill('black');
            }
            square(part.x, part.y, this.size);
        }
    }

    collision(){
        let head = this.body[this.body.length -1];
        for(let [key, part] of this.body.entries()){
            if(key==this.body.length-1) continue;

            if(head.x == part.x && head.y == part.y){
                console.log('Collision')
                return true;
            }
        }
        return false;
    }
}


class Part{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
} 