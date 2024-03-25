function setup() {
    createCanvas(1400, 800);
}

function draw() {
    stroke("black");
    fill("white");
    ellipse(660, 350, 1300, 600);
    ellipse(600, 350, 1100, 500);
    ellipse(610, 350, 900, 400);
    ellipse(650, 350, 700, 300);
    ellipse(650, 350, 450, 250);

    fill("green");
    circle(1200, 500, 110);
    fill("lightblue");
    circle(1140, 300, 80);
    fill("purple");
    circle(190, 280, 60);
    fill("pink");
    circle(320, 300, 40);
    fill("lightblue");
    circle(480, 270, 25);

    
    fill("yellow");
    circle(650, 350, 80);

    fill("yellow");
    for (let i = 0; i < 360; i += 45) {
        push();
        translate(650, 350);
        rotate(radians(i));
        triangle(-10, -50, 0, -90, 10, -50);
        pop();
    }

}