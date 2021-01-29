canvasholder= document.getElementById("MyCanvas");
ctx=canvasholder.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=10;
canvas_image="racing.jpg";
function add(){
    background_image = new Image();
    background_image.onload=addBackground;
    background_image.src=canvas_image;
    car1_image = new Image();
    car1_image.onload=addCar1;
    car1_image.src=car1_image;
    car2_image = new Image();
    car2_image.onload=addCar2;
    car2_image.src=car2_image;
}
function addBackground(){
    ctx.drawImage(background_image, 0, 0, canvasholder.width, canvasholder.height);
}
function addCar1(){
    ctx.drawImage(car1_image, car1_x, car1_y, car1_width, car1_height);
};
function addCar2(){
    ctx.drawImage(car2_image, car2_x, car2_y, car2_width, car2_height);
};
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed == 38){
        up();
        console.log("up");
    };
    if (keyPressed == 40){
        down();
        console.log("down");
    };
    if (keyPressed == 37){
        left()
        console.log("left");
    };
    if (keyPressed == 39){
        right();
        console.log("right");
    }; 
    if (keyPressed == 87){
        carup();
        console.log("car up");
    };
    if (keyPressed == 83){
        cardown();
        console.log("car down");
    };
    if (keyPressed == 65){
        carleft();
        console.log("car left");
    };
    if (keyPressed == 68){
        carright();
        console.log("car right");
    };  
}
function up(){
    if (car1_y>=0){
        car1_y=car1_y-10;
        console.log("y="+car1_y+" , x="+car1_x);
        addBackground();
        addCar1();}
};
function right(){
    if (car1_x<=250){
        car1_x=car1_x+10;
        console.log("y="+car1_y+" , x="+car1_x);
        addBackground();
        addCar1();
    };
}
function left(){
    if (car1_x>=0){
        car1_x=car1_x-10;
        console.log("y="+car1_y+" , x="+car_x);
        addBackground();
        addCar1();
    };
}
function down(){
    if (car1_y<=100){
        car1_y=car1_y+10;
        console.log("y="+car1_y+" , x="+car1_x);
        addBackground();
        addCar1();
    };
}
function carup(){
    if (car2_y>=0){
        car2_y=car2_y-10;
        console.log("y="+car2_y+" , x="+car2_x);
        addBackground();
        addCar2();}
};
function carright(){
    if (car2_x<=250){
        car2_x=car2_x+10;
        console.log("y="+car2_y+" , x="+car2_x);
        addBackground();
        addCar2();
    };
}
function carleft(){
    if (car2_x>=0){
        car2_x=car2_x-10;
        console.log("y="+car2_y+" , x="+car2_x);
        addBackground();
        addCar2();
    };
}
function cardown(){
    if (car2_y<=100){
        car2_y=car2_y+10;
        console.log("y="+car2_y+" , x="+car2_x);
        addBackground();
        addCar2();
    };
}