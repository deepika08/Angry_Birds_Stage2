class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        var pt1 = this.chain.bodyA.position;
        var pt2 = this.chain.bodyB.position;
        strokeWeight(3);
        line(pt1.x, pt1.y, pt2.x, pt2.y);
    }
}