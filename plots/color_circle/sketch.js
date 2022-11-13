function setup() {
    createCanvas(1200, 1200);
    colorMode(HSB, 255);

    textSize(42);
    textFont("Arial");
}

const numberOfLines = 18000;
const markersFraction = 1.0 / 3.0;

let firstRun = true;
function draw() {
    const textSep = width * 60 / 1200;
    if (firstRun) {
        background(255);
         
        push()
        translate(width / 2, height / 2);
        rotate(PI);
        for (let t = 0; t < numberOfLines; t++) {
            stroke((1 - t / numberOfLines) * 255, 255, 255);

            line(
               1 / 8 * width * cos(t * 2 * PI / numberOfLines), 
               1 / 8 * height * sin(t * 2 * PI / numberOfLines), 
               3 / 8 * width * cos(t * 2 * PI / numberOfLines), 
               3 / 8 * height * sin(t * 2 * PI / numberOfLines), 
            );
        }
        pop()


        stroke(0);
        strokeWeight(6);
        line(0, height / 2, width, height / 2);
        line(width / 2, 0, width / 2, height);

        line(
            width / 16,  
            height / 2 - textSep * markersFraction,
            width / 16,  
            height / 2 + textSep * markersFraction
        )

        line(
            15 * width / 16,  
            height / 2 - textSep * markersFraction,
            15 * width / 16,  
            height / 2 + textSep * markersFraction
        )

        line(
            width / 2 - textSep * markersFraction,
            height / 16,  
            width / 2 + textSep * markersFraction,
            height / 16
        )

        line(
            width / 2 - textSep * markersFraction,
            15 * height / 16,  
            width / 2 + textSep * markersFraction,
            15 * height / 16
        )

        strokeWeight(1);
        textAlign(CENTER, CENTER);
        text("i", textSep + width / 2, 1 / 16 * height);
        text("-i", textSep + width / 2, 15 / 16 * height);

        textAlign(CENTER, BOTTOM);
        text("-1", width / 16, 1.5 * textSep + height / 2);
        text("1", 15 * width / 16, 1.5 * textSep + height / 2);

        firstRun = false;
    }
}
