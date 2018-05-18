var homeState = function(game){
    var quan = true;
    this.create = function(){
        // game.stage.backgroundColor = "#3366FF"
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0, 0, 1700, 1105);
        game.camera.focusOnXY(game.world.width/2, game.world.height/2);

        //参数
        // this.mmove = true;
        this.redCar = {}
        this.orangeCar = {}
        this.wulingCar = {}
        this.btns = false;//用来控制建造按钮是否每帧中都跟随建筑精灵
        this.buttonsMove = false;//用来控制建造菜单是否每帧中都跟随建筑精灵
        this.buttons = true;//控制建筑菜单点击只出现一次

        //创建背景组
        this.bgGroup = game.add.group();
        //创建地板组
        this.floorGroup = game.add.group();
        //创建可建造阴影组
        this.shadowGroup = game.add.group();
        //创建建筑组
        this.buildGroup = game.add.group();
       

        
        //地板
        this.floor = game.add.sprite(game.world.width/2, game.world.height/2, "floor");
        this.floor.scale.set(0.5);
        this.floor.anchor.set(0.5);
        this.floorGroup.add(this.floor);
        this.floor.inputEnabled = true;
        this.floor.events.onInputDown.add(function(){
            this.oneX = game.input.activePointer.x;
            this.oney = game.input.activePointer.y;
            game.input.addMoveCallback(this.cameraMove, this);
        }, this);
        this.floor.events.onInputUp.add(function(){
            game.input.deleteMoveCallback(this.cameraMove, this);
        }, this);
        //按下拖动地板
        

        //边缘装饰
        var dx = this.floor.x;
        var dy = this.floor.y;
        for(var i = 0; i < 5; i++){
            var decorate1 = game.add.image(dx/2+2 + 58*(i+1), (dy -18)+(i*37), "zhuangshi3");
            decorate1.scale.set(0.6);
            this.buildGroup.add(decorate1);
            // decorate1.scale.x = -0.6;//图片水平翻转设置-即可
        }

        //地板阴影
        var fw = (game.cache.getImage("floor").width*0.5);
        var fh = (game.cache.getImage("floor").height*0.5);
        var fwx = fw / 22 /2;
        var fwy = fh / 22 /2;
        this.fwx = fwx;    
        this.fwy = fwy; 

        var graphics = game.add.graphics(this.floor.x, this.floor.y);//开始画
        this.guding = graphics;//用于已经建造建筑后删除可点击事件
        graphics.beginFill(0x999999);
        graphics.drawPolygon(-8*fwx, 0, -3*fwx,-5*fwy, -6*fwx, -8*fwy, -11*fwx, -3*fwy);//3*5
        graphics.beginFill(0xFF0000);
        graphics.alpha = 0.5;
        graphics.endFill();
        graphics.inputEnabled = true;
        graphics.events.onInputDown.add(this.showMenu, this);
        this.shadowGroup.add(graphics);

        var graphics2 = game.add.graphics(this.floor.x+fwx*10, this.floor.y+fwy*10);//开始画
        this.guding2 = graphics2;//用于已经建造建筑后删除可点击事件
        graphics2.beginFill(0x999999);
        graphics2.drawPolygon(-8*fwx, 0, -3*fwx,-5*fwy, -6*fwx, -8*fwy, -11*fwx, -3*fwy);//3*5
        graphics2.beginFill(0xFF0000);
        graphics2.alpha = 0.5;
        graphics2.endFill();
        graphics2.inputEnabled = true;
        graphics2.events.onInputDown.add(this.showMenu, this);
        this.shadowGroup.add(graphics2);

        
    }//create end
    this.update = function(){
        if(this.redCar.Show){
            if((this.redCar.img.x == 728 && this.redCar.img.y==500 &&this.redCar.img.scale.x>0) || (this.redCar.img.x == 904 && this.redCar.img.y==612&&this.redCar.img.scale.x>0)){
                this.redCar.img.tint = 0xFFFFFF;
                this.redCar.building = true;
            }else{
                this.redCar.img.tint = 0xFF3366;
                if(this.redCar.building){
                    this.redCar.building = false;
                }
            }
            // console.log(this.btns);
            if(this.btns){
                this.okBtn.x = this.redCar.img.x + 30;
                this.okBtn.y = this.redCar.img.y + 50;
                this.qxBtn.x = this.redCar.img.x - 30;
                this.qxBtn.y = this.redCar.img.y + 50;
                this.xzBtn.x = this.redCar.img.x - 90;
                this.xzBtn.y = this.redCar.img.y + 50;
            }
            if(this.buttonsMove){
                this.ckBtn.y = this.redCar.img.y + 30;
                this.moveBtn.y = this.redCar.img.y + 30;
                this.xuanzhuan.y = this.redCar.img.y + 30;
                this.chaichuBtn.y = this.redCar.img.y + 30;
                this.ckBtn.x = this.redCar.img.x - this.redCar.img.width*0.8;
                this.moveBtn.x = this.redCar.img.x - this.redCar.img.width*0.4;
                this.xuanzhuan.x = this.redCar.img.x - this.redCar.img.width*0;
                this.chaichuBtn.x = this.redCar.img.x + this.redCar.img.width*0.4;
            }
        }
    }
    // this.render = function(){
    //     // game.debug.spriteBounds(redYuan);
    //     game.debug.spriteBounds(this.guding2);
    // }
    //按钮跟随精灵和精灵位置判断
    this.btnFollow = function(){

    }
    //移动摄像头函数
    this.cameraMove = function(){
        this.twoX = game.input.activePointer.x;
        if((this.twoX-this.oneX)>0){
            game.camera.x -= parseInt(this.twoX-this.oneX);
        }else if((this.twoX - this.oneX)<0){
            game.camera.x += parseInt(this.oneX - this.twoX);
        }
        this.oneX = this.twoX;

        this.twoy = game.input.activePointer.y;
        if((this.twoy-this.oney)>0){
            game.camera.y -= parseInt(this.twoy-this.oney);
        }else if((this.twoy - this.oney)<0){
            game.camera.y += parseInt(this.oney - this.twoy);
        }
        this.oney = this.twoy;
    }
    //显示菜单函数
    this.showMenu = function(){
        showMenu(this);
    }
    
}