var buts = function(cont, car){
    var that = cont;
    car.buttons = true;//点击建筑只出现一次建筑菜单
    console.log("show btn");
    car.btns = true;
    car.okBtn = game.add.button(car.img.x+30, car.img.y+50, "queren", function(){
        if(car.building){
            car.img.x = car.buildx;
            car.img.y = car.buildy;
            car.lastx = car.img.x;
            car.lasty = car.img.y;
            car.okBtn.destroy();
            car.qxBtn.destroy();
            car.xzBtn.destroy();
            car.btns = false;//用来控制建造按钮是否每帧中都跟随建筑精灵
            car.img.input.disableDrag();//禁止拖拽

            //已有建筑的区域的时候不能建造
            if(car.buildx == 728){
                
            }

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
                        if(car.buttons){
                            if(that.dangeBtn){
                                if(that.dangeBtn.game){
                                    if(!that.buttonsGroup.game){
                                        that.buttonsGroup.destroy();
                                        that.buttonsGroup = game.add.group();
                                        car.buttons = true;
                                        buttons(that, car.img, car);
                                    }else{
                                        if(that.dangeBtn.length > 0){
                                            if(that.dangeBtn.getChildAt(1).key == "moveBtn"){
                                                that.buttonsGroup.destroy();
                                                that.buttonsGroup = game.add.group();
                                                car.buttons = true;
                                                buttons(that, car.img, car);
                                            }
                                        }else{
                                            that.buttonsGroup.destroy();
                                            that.buttonsGroup = game.add.group();
                                            car.buttons = true;
                                            buttons(that, car.img, car);
                                        }                          
                                    }
                                }else{
                                    if(!that.buttonsGroup.game){
                                        that.buttonsGroup.destroy();
                                        that.buttonsGroup = game.add.group();
                                        car.buttons = true;
                                    }else{
                                        that.buttonsGroup.destroy();
                                        that.buttonsGroup = game.add.group();
                                        car.buttons = true;                                
                                    }
                                    buttons(that, car.img, car);
                                }
                            }else{
                                if(!that.buttonsGroup.game){
                                    that.buttonsGroup.destroy();
                                    that.buttonsGroup = game.add.group();
                                    car.buttons = true;
                                }else{
                                    that.buttonsGroup.destroy();
                                    that.buttonsGroup = game.add.group();
                                    car.buttons = true;                                
                                }
                                buttons(that, car.img, car);
                            }
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
    car.qxBtn = game.add.button(car.img.x-30, car.img.y+50, "quxiao", function(){
        // console.log("btn2");
        car.img.destroy();
        car.okBtn.destroy();
        car.qxBtn.destroy();
        car.xzBtn.destroy();
        car.Show = false;
        car.btns = false;
    }, that)
    car.xzBtn = game.add.button(car.img.x-90, car.img.y+50, "xuanzhuan", function(){
        if(car.img.scale.x < 0){
            car.img.scale.x = 0.5;
        }else{
            car.img.scale.x = -0.5;
        }
    }, that)

}