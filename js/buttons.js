var buttons = function(cont, car){
    var that = cont;   
    console.log("buttons");
    console.log(car.width);

    var ckBtn = game.add.button(car.x -car.width*0.8, car.y +30, "ckBtn", function(){
        console.log("ckBtn");
    })
    var moveBtn = game.add.button(car.x - car.width*0.4, car.y +30, "moveBtn", function(){
        console.log("moveBtn");
    })
    var xuanzhuan = game.add.button(car.x - car.width*0, car.y +30, "xuanzhuan", function(){
        console.log("xuanzhuan");
    })
    var chaichuBtn = game.add.button(car.x + car.width*0.4, car.y +30, "chaichuBtn", function(){
        console.log("chaichuBtn");
    })
    


}