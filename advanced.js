
//object literals
const circle = {
    radius : 1,
    location: {
        x :1,
        y :1,
    },
    draw : function(){
        console.log('drawing function');
    }
}

//factory function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('factory circle draw');
        }
    }
}

const cir = createCircle(1);
cir.draw();

//constructor function
function Circle(radius){
    // console.log('this', this);
    this.radius = radius;
    this.draw = function(){
        console.log('constructor circle draw');
    }
}

const another = new Circle(1);
another.draw();

//adding properties on the fly
cicle.location = {x : 1};
circle["location"] = {x : 1};

