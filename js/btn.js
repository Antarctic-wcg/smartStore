var button = function(cont, car){
    var that = cont;
    console.log("show btn");
    that.btns = true;
    that.okBtn = game.add.button(car.img.x+30, car.img.y+50, "queren", function(){
        car.lastx = car.img.x;
        car.lasty = car.img.y;
        if(car.building){
            that.okBtn.destroy();
            that.qxBtn.destroy();
            that.xzBtn.destroy();
            that.btns = false;
            // car.img.inputEnabled = false;
            car.img.input.disableDrag();//禁止拖拽
            // that.guding.events.onInputDown.remove(that.showMenu, that);

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
            var min = 0;
            var s = 3;
            if(hours < 10) hours = "0" + hours;
            if(min < 10) min = "0" + min;
            if(s < 10) s = "0" + s;
            
            //建设文字与倒计时
            var text = game.add.text(building.x, building.y-90, "建设中：\n "+hours+":"+min+":"+s+"", {font: "bold 16px Arial", fill: "#000", boundsAlignH: "center"});
            text.anchor.set(0.5);

            //定时器实现建造倒计时
            var time = setInterval(function(){

                s -= 1;
                if(hours ==0 && min == 0 && s == 0){
                    clearInterval(time);
                    building.destroy();
                    tbg.destroy();
                    text.destroy();
                    car.img.visible = true;
                    car.img.events.onInputDown.add(function(){
                        console.log(that.buttons);
                        if(that.buttons){
                            buttons(that, car.img, car);
                        }
                        
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
    that.qxBtn = game.add.button(car.img.x-30, car.img.y+50, "quxiao", function(){
        // console.log("btn2");
        car.img.destroy();
        that.okBtn.destroy();
        that.qxBtn.destroy();
        that.xzBtn.destroy();
        car.Show = false;
        that.btns = false;
    }, that)
    that.xzBtn = game.add.button(car.img.x-90, car.img.y+50, "xuanzhuan", function(){
        if(car.img.scale.x < 0){
            car.img.scale.x = 0.5;
        }else{
            car.img.scale.x = -0.5;
        }
    }, that)

}