var upgrade = function(car, h, m, ss, that){
    //建设中image
    var building = game.add.image(car.img.x, car.img.y-20, "building");
    building.anchor.set(0.5);
    building.scale.set(0.5);

    //文字背景
    var tbg = game.add.graphics(building.x, building.y-90);
    tbg.beginFill(0xFFFFFF);
    tbg.drawRect(-40, -25, 80, 50);
    tbg.anchor.set(0.5);

    var hours = h;
    var min = m;
    var s = ss;

    if(hours < 10) hours = "0" + hours;
    if(min < 10) min = "0" + min;
    if(s < 10) s = "0" + s;

    //建设文字与倒计时
    var text = game.add.text(building.x, building.y-90, "建设中：\n "+hours+":"+min+":"+s+"", {font: "bold 16px Arial", fill: "#000", boundsAlignH: "center"});
    text.anchor.set(0.5);

    var countDown = setInterval(function(){
        s -= 1;
        if(s < 0){
            min -= 1;
            s = 59;
            if(min < 0){
                hours -= 1;
                min = 59;
                if(hours < 10) hours = "0" + hours;
            }
            if(min < 10) min = "0" + min;
        }
        if(hours == 0 && min == 0 && s == 0){
            console.log(that.yinxiao);
            
            if(that.yinxiao){
                try{
                    that.sound2.play("", 0, 15, false);
                } catch(e){}
            }
            
            clearInterval(countDown);
            building.destroy();
            tbg.destroy();
            text.destroy();
            car.img.visible = true;
        }
        if(s < 10) s = "0" + s;
        text.text = "建设中：\n "+hours+":"+min+":"+s+"";
    }, 1000);

    

}