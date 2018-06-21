var buts = function(cont, car){
    var that = cont;
    car.buttons = true;//点击建筑只出现一次建筑菜单
    car.btns = true;
    //建造确定按钮-----------------------------------------------------------
    car.okBtn = game.add.button(car.img.x+30, car.img.y+50, "dgou", function(){
        if(car.building){
            car.Show = false;
            car.lastx = car.img.x;
            car.lasty = car.img.y;
            car.lastBlock = car.block;
            car.okBtn.destroy();
            car.qxBtn.destroy();
            car.xzBtn.destroy();
            car.btns = false;//用来控制建造按钮是否每帧中都跟随建筑精灵
            car.img.input.disableDrag();//禁止拖拽

            //已有建筑的区域的时候不能建造
            car.block.forEach(function(val){
                val.building = false;
            });
            
            
            that.carGroup.removeChild(car);

            // car.img.alpha = 0;

            var hours = 0;
            var min = 0;
            var s = 1;
            // upgrade(car, hours, min, s, this);
            
            car.img.events.onInputDown.add(function(){
                if(car.buttons){//phaser烦人的destroy导致如下重复繁琐的代码
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
                }//phaser烦人的destroy导致如上重复繁琐的代码
            }, that)
            
        }
    }, that)
    car.okBtn.scale.set(0.6);
    //取消代码-----------------------------------------------------------------
    car.qxBtn = game.add.button(car.img.x-30, car.img.y+50, "dcha", function(){
        // console.log("btn2");
        car.img.destroy();
        car.okBtn.destroy();
        car.qxBtn.destroy();
        car.xzBtn.destroy();
        car.Show = false;
        car.btns = false;
        that.carGroup.removeChild(car);
        that.Zindex1.removeChild(car);
        that.Zindex2.removeChild(car);
        that.Zindex3.removeChild(car);
        that.Zindex4.removeChild(car);
        that.Zindex5.removeChild(car);
        that.Zindex6.removeChild(car);
        that.clickNum -= 1;
    }, that)
    car.qxBtn.scale.set(0.6);
    //旋转代码-------------------------------------------------------------------
    car.xzBtn = game.add.button(car.img.x-90, car.img.y+50, "xuanzhuan", function(){
        if(car.img.scale.x < 0){
            car.img.scale.x = 0.5;
        }else{
            car.img.scale.x = -0.5;
        }
    }, that)
    car.xzBtn.scale.set(0.6);
}