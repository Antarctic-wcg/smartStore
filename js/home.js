var homeState = function(game){
    var quan = true;
    var that = this;
    this.create = function(){
        //背景音乐
        if(!this.sound1){
            this.sound1 = game.add.audio("zhuti");
            try{
                // this.sound1.play("", 0, 1, true);
            } catch(e){}
        }
        this.sound2 = game.add.audio("crash1");
        this.yinxiao = true;//音效控制开光
        
        
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
            var aisnMain = document.getElementById("aisnMain");
            aisnMain.setAttribute("style","display: none;");
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
        shadow(this);
        //AI少女
        this.aisn();
        //背包列表
        this.pack();

        
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
            // this.build2 = (tx <= 936 && tx >= 872 && ty >= 580 && ty <= 644 && car.img.scale.x>0 && this.guding2.building);
            if(this.build1){car.buildx=728;car.buildy=500;}
            // if(this.build2){car.buildx=904;car.buildy=612;}
            if(this.build1 || this.build2){
                car.img.x = car.buildx;//吸附作用
                car.img.y = car.buildy;
                car.img.tint = 0xFFFFFF;
                car.building = true;//用来确定是否能建造
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

    this.aisn = function(){
        var that = this;
        var aisn = document.getElementById("aisnMenu");
        var aisnMain = document.getElementById("aisnMain");
        var c1 = document.getElementById("c1");
        var c2 = document.getElementById("c2");
        var c3 = document.getElementById("c3");
        var c4 = document.getElementById("c4");
        var c5 = document.getElementById("c5");
        var c6 = document.getElementById("c6");
        var set = document.getElementById("set");
        var musicBtn = document.getElementById("musicBtn");
        var music = document.getElementById("music");
        var audio = document.getElementById("audio");
        this.packDom = document.getElementById("pack");

        
        aisn.setAttribute("style","display: block;");
        aisn.onclick = function(){
            aisnMain.setAttribute("style","display: block;");
        }
        c1.onclick = function(){//邮件
        }
        c2.onclick = function(){//大地图
            aisnMain.setAttribute("style","display: none;");
            game.state.start("map");
            
        }
        //DOM0添加时间不会出现重复添加情况
        c3.onclick = function(){
            aisnMain.setAttribute("style","display: none;");
            set.setAttribute("style","display: block;");
            console.log(this);
        }
        c4.onclick = function(){//收起
            aisnMain.setAttribute("style","display: none;");
        }
        c5.onclick = function(){//建筑
            aisnMain.setAttribute("style","display: none;");
            showMenu(that);
        }
        c6.onclick = function(){//背包
            that.packDom.setAttribute("style","display: block;")
            aisnMain.setAttribute("style","display: none;");
        }
        musicBtn.addEventListener("click", function(){
            set.setAttribute("style","display: none;");
        })
        music.addEventListener("click", this.qimg1)
        audio.addEventListener("click", this.qimg2)
    }

    
    this.qimg1 = function(){
        if(this.getAttribute("src") == "./assets/on.jpg"){
            console.log(666);
            this.setAttribute("src","./assets/off.jpg");
            that.sound1.pause();
        }else if(this.getAttribute("src") == "./assets/off.jpg"){
            console.log(7777);
            this.setAttribute("src","./assets/on.jpg");
            that.sound1.resume();
        }
    }
    this.qimg2 = function(){
        if(this.getAttribute("src") == "./assets/on.jpg"){
            console.log(666);
            this.setAttribute("src","./assets/off.jpg");
            that.yinxiao = false;
        }else if(this.getAttribute("src") == "./assets/off.jpg"){
            console.log(7777);
            this.setAttribute("src","./assets/on.jpg");
            that.yinxiao = true;
        }
    }

    this.pack = function(){
        var packArray = [
            {"src":"./assets/wulh.png", "number":"10"},
            {"src":"./assets/320c.png", "number":"10"},
            {"src":"./assets/530h.png", "number":"22"},
            {"src":"./assets/building.png", "number":"50"},
            {"src":"./assets/wulh.png", "number":"99"},
            {"src":"./assets/yqzt.png", "number":"99"},
            {"src":"./assets/zs1.png", "number":"99"},
            {"src":"./assets/zs2.png", "number":"99"},
            {"src":"./assets/zs3.png", "number":"99"},
            {"src":"./assets/wulh.png", "number":"99"},
            {"src":"./assets/wulh.png", "number":"99"},
        ];
        var that = this;
        var packs = document.getElementsByClassName("res");
        var imgs = document.getElementsByClassName("img");
        var packBtn = document.getElementById("packBtn");
        var rongBtn = document.getElementById("rongBtn");
        var xqing = document.getElementById("xqing");
        var packsack = document.getElementById("packsack");
        for(var i = 0; i < packArray.length; i++){
            if(i < 9){
                packs[i].innerHTML = '<img src="'+packArray[i].src+'" width="100%" height="100%" alt=""><div class="number">'+packArray[i].number+'</div>'
            }else{
                var li = document.createElement("li");
                li.setAttribute("class","res");
                li.innerHTML = '<img src="'+packArray[i].src+'" width="100%" height="100%" alt=""><div class="number">'+packArray[i].number+'</div>';
                packsack.appendChild(li);
            }
        }
        for(let i = 0; i < packArray.length; i++){
            if(packs[i].children.length){
                packs[i].onclick = function(){
                    imgs[0].setAttribute("src", this.children[0].getAttribute("src"));
                    imgs[0].nextElementSibling.innerHTML = packs[i].children[1].innerHTML;
                    xqing.setAttribute("style","display: block;")
                }
            }
        }

        packBtn.onclick = function(){
            that.packDom.setAttribute("style","display: none;")
        }
        rongBtn.onclick = function(){
            xqing.setAttribute("style","display: none;")
        }
    }
}