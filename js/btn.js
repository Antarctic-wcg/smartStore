var button = function(cont, car){
    var that = cont;
    console.log("btn");
    that.okBtn = game.add.button(car.img.x+20, car.img.y+50, "queren", function(){
        console.log(1);
        if(car.building){
            that.okBtn.kill();
            that.qxBtn.kill();
            that.xzBtn.kill();
            // car.img.inputEnabled = false;
            car.img.input.disableDrag();
            that.guding.events.onInputDown.remove(that.showMenu, that);

            car.img.visible = false;
            //建设中image
            var building = game.add.image(car.img.x, car.img.y-20, "building");
            building.anchor.set(0.5);
            building.scale.set(0.5);

            //文字背景
            var tbg = game.add.graphics(building.x, building.y-90);
            tbg.beginFill(0xFFFFFF);
            tbg.drawRect(-40, -25, 80, 50);
            tbg.anchor.set(0.5);

            var hours = 0;
            var min = 1;
            var s = 3;
            if(hours < 10) hours = "0" + hours;
            if(min < 10) min = "0" + min;
            if(s < 10) s = "0" + s;
            
            //建设文字与倒计时
            var text = game.add.text(building.x, building.y-90, "建设中：\n "+hours+":"+min+":"+s+"", {font: "bold 16px Arial", fill: "#000", boundsAlignH: "center"});
            text.anchor.set(0.5);

            //定时器实现建造倒计时
            var time = setInterval(function(that){
                s -= 1;
                if(hours ==0 && min == 0 && s == 0){
                    clearInterval(time);
                    building.kill();
                    tbg.kill();
                    text.kill();
                    car.img.visible = true;
                    // car.img.inputEnabled = true;//不知道为啥，需要再次开启输入事件，已经知道了
                    car.img.events.onInputDown.add(function(){
                        console.log(6666);
                    }, that)
                }
                if(s < 0){
                    s = 2;
                    min -= 1;
                    if(min < 0){
                        hours -= 1;
                        min = 1;
                        if(hours < 10){
                            hours = "0" + hours;
                        }
                    }
                    if(min < 10){
                        min = "0" + min;
                    }
                    
                }
                if(s <10){s = "0" + s;}
                text.text = "建设中：\n "+hours+":"+min+":"+s+"";
            }, 1000)
        }
    }, that)
    that.qxBtn = game.add.button(car.img.x-40, car.img.y+50, "quxiao", function(){
        console.log(2);
        car.img.kill();
        that.okBtn.kill();
        that.qxBtn.kill();
        that.xzBtn.kill();
        car.Show = false;
    }, that)
    that.xzBtn = game.add.button(car.img.x-100, car.img.y+50, "xuanzhuan", function(){
        console.log(3);
    }, that)
}