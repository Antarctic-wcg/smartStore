var homeState = function(game){
    var quan = true;
    this.create = function(){
        // game.stage.backgroundColor = "#3366FF"
        game.physics.startSystem(Phaser.Physics.ARCADE);//开启ARCADE物理引擎
        game.world.setBounds(0, 0, 1700, 1105);
        game.camera.focusOnXY(game.world.width/2, game.world.height/2);

        //参数
        // this.mmove = true;
        // this.redCar = {}
        this.orangeCar = {}
        this.wulingCar = {}
        //---------------
        this.clickNum = 0;//点击生成不同名字的sprite

        //创建背景组
        this.bgGroup = game.add.group();
        //创建地板组
        this.floorGroup = game.add.group();
        //创建可建造阴影组
        this.shadowGroup = game.add.group();
        //创建建筑组
        this.buildGroup = game.add.group();
        //建筑菜单按钮组
        this.buttonsGroup = game.add.group();
        //汽车组
        this.carGroup = game.add.group();
        this.carGroup.enableBody = true;
        this.carGroup.physicsBodyType = Phaser.Physics.ARCADE;
       
        
        //地板大地图
        this.floor = game.add.sprite(game.world.width/2, game.world.height/2, "floor");
        this.floor.scale.set(0.5);
        this.floor.anchor.set(0.5);
        this.floorGroup.add(this.floor);
        this.floor.inputEnabled = true;
        this.floor.events.onInputDown.add(function(){
            if(this.dangeBtn){//移动时点击点半不缺陷移动菜单
                if(this.dangeBtn.length > 0){
                    if(this.dangeBtn.getChildAt(1).key == "moveBtn"){
                        this.buttonsGroup.destroy();
                    }
                }
            }
            
            this.oneX = game.input.activePointer.x;
            this.oney = game.input.activePointer.y;
            game.input.addMoveCallback(this.cameraMove, this);
        }, this);
        this.floor.events.onInputUp.add(function(){
            game.input.deleteMoveCallback(this.cameraMove, this);
        }, this);
        

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
        //可建地板1
        this.guding = game.add.graphics(this.floor.x, this.floor.y);//开始画
        this.guding.beginFill(0x999999);
        this.guding.drawPolygon(-8*fwx, 0, -3*fwx,-5*fwy, -6*fwx, -8*fwy, -11*fwx, -3*fwy);//3*5
        this.guding.beginFill(0xFF0000);
        this.guding.alpha = 0.5;
        this.guding.endFill();
        this.guding.inputEnabled = true;
        this.guding.events.onInputDown.add(this.showMenu, this);
        this.guding.building = true;
        this.shadowGroup.add(this.guding);
        //可建地板2
        this.guding2 = game.add.graphics(this.floor.x+fwx*10, this.floor.y+fwy*10);//开始画
        this.guding2.beginFill(0x999999);
        this.guding2.drawPolygon(-8*fwx, 0, -3*fwx,-5*fwy, -6*fwx, -8*fwy, -11*fwx, -3*fwy);//3*5
        this.guding2.beginFill(0xFF0000);
        this.guding2.alpha = 0.5;
        this.guding2.endFill();
        this.guding2.inputEnabled = true;
        this.guding2.events.onInputDown.add(this.showMenu, this);
        this.guding2.building = true;
        this.shadowGroup.add(this.guding2);

        //地板

        
    }//create end
    this.update = function(){
        game.physics.arcade.collide(this.carGroup, this.pengZ);
        this.carGroup.forEachExists(function(item){
            this.follow(item);
        }, this)
    }
    // this.render = function(){
    // }
    
    //让btns与buttons跟随图片，检测可建造区域
    this.follow = function(car){
        if(car.Show){
            var tx = car.img.x;
            var ty = car.img.y;
            this.build1 = (tx <= 760 && tx >= 700 && ty >= 468 && ty <= 531 && car.img.scale.x>0 && this.guding.building);
            this.build2 = (tx <= 936 && tx >= 872 && ty >= 580 && ty <= 644 && car.img.scale.x>0 && this.guding2.building);
            if(this.build1){car.buildx=728;car.buildy=500;}
            if(this.build2){car.buildx=904;car.buildy=612;}
            if(this.build1 || this.build2){
                car.img.x = car.buildx;//吸附作用
                car.img.y = car.buildy;
                car.img.tint = 0xFFFFFF;
                car.building = true;
            }else{
                car.img.tint = 0xFF3366;
                if(car.building){
                    car.building = false;
                }
            }
            if(car.btns){
                car.okBtn.x = car.img.x + 30;
                car.okBtn.y = car.img.y + 50;
                car.qxBtn.x = car.img.x - 30;
                car.qxBtn.y = car.img.y + 50;
                car.xzBtn.x = car.img.x - 90;
                car.xzBtn.y = car.img.y + 50;
            }
            if(car.buttonsMove){
                car.ckBtn.y = car.img.y + 30;
                car.moveBtn.y = car.img.y + 30;
                car.xuanzhuan.y = car.img.y + 30;
                car.chaichuBtn.y = car.img.y + 30;
                car.ckBtn.x = car.img.x - car.img.width*0.8;
                car.moveBtn.x = car.img.x - car.img.width*0.4;
                car.xuanzhuan.x = car.img.x - car.img.width*0;
                car.chaichuBtn.x = car.img.x + car.img.width*0.4;
            }
        }
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

    this.pengZ = function(){
        console.log("jsjj")
    }
}