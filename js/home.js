var homeState = function (game) {
    var quan = true;
    var that = this;
    this.create = function () {
        //背景音乐
        if (!this.sound1) {
            this.sound1 = game.add.audio("zhuti");
            try {
                // this.sound1.play("", 0, 1, true);
            } catch (e) { }
        }
        this.sound2 = game.add.audio("crash1");
        this.yinxiao = true;//音效控制开光


        // game.stage.backgroundColor = "#3366FF"
        game.physics.startSystem(Phaser.Physics.ARCADE);//开启ARCADE物理引擎
        game.world.setBounds(0, 0, 1700, 1105);
        game.camera.focusOnXY(game.world.width / 2, game.world.height / 2);

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
        this.shadowGroup.alpha = 0.4;
        //创建建筑组
        this.buildGroup = game.add.group();
        //建筑菜单按钮组
        this.buttonsGroup = game.add.group();
        //汽车组
        this.carGroup = game.add.group();
        this.carGroup.enableBody = true;
        this.carGroup.physicsBodyType = Phaser.Physics.ARCADE;


        //地板大地图
        this.floor = game.add.sprite(game.world.width / 2, game.world.height / 2, "floor");
        this.floor.scale.set(0.5);
        this.floor.anchor.set(0.5);
        this.floorGroup.add(this.floor);
        this.floor.inputEnabled = true;
        this.floor.events.onInputDown.add(function () {
            if (this.dangeBtn) {//移动时点击点半不缺陷移动菜单
                if (this.dangeBtn.length > 0) {
                    if (this.dangeBtn.getChildAt(1).key == "moveBtn") {
                        this.buttonsGroup.destroy();
                    }
                }
            }
            var aisnMain = document.getElementById("aisnMain");
            aisnMain.setAttribute("style", "display: none;");
            this.oneX = game.input.activePointer.x;
            this.oney = game.input.activePointer.y;
            game.input.addMoveCallback(this.cameraMove, this);
        }, this);
        this.floor.events.onInputUp.add(function () {
            game.input.deleteMoveCallback(this.cameraMove, this);
        }, this);

        //地板阴影
        shadow(this);
        //AI少女
        this.aisn();
        //背包列表
        this.pack();
        //商店
        this.shop();
        //任务+排行榜
        this.task();
        //任务+排行榜
        this.task_btn();

    }//create end
    this.update = function () {
        game.physics.arcade.collide(this.carGroup, this.pengZ);
        this.carGroup.forEachExists(function (item) {
            this.follow(item);
        }, this)
    }
    this.render = function () {
        if (this.gn3) {
            game.debug.spriteBounds(this.gn3);
        }
    }

    //让btns与buttons跟随图片，检测可建造区域
    this.follow = function (car) {
        if (car.Show) {
            var tx = car.img.x;
            var ty = car.img.y;
            var num = this.match(car, tx, ty);
            if (num) {
                car.img.x = car.buildx;//吸附作用
                car.img.y = car.buildy;
                car.img.tint = 0xFFFFFF;
                car.building = true;//用来确定是否能建造
            } else {
                car.img.tint = 0xFF3366;
                if (car.building) {
                    car.building = false;
                }
            }
            if (car.btns) {
                car.okBtn.x = car.img.x + 30;
                car.qxBtn.x = car.img.x - 30;
                car.xzBtn.x = car.img.x - 90;
                car.qxBtn.y = car.img.y + car.img.height / 2 + 10;
                car.okBtn.y = car.img.y + car.img.height / 2 + 10;
                car.xzBtn.y = car.img.y + car.img.height / 2 + 10;
            }
            if (car.buttonsMove) {
                car.moveBtn.y = car.img.y + car.img.height / 2 + 10;
                car.xuanzhuan.y = car.img.y + car.img.height / 2 + 10;
                car.moveBtn.x = car.img.x - 60;
                car.xuanzhuan.x = car.img.x;
            }
        }
    }

    //移动摄像头函数
    this.cameraMove = function () {
        this.twoX = game.input.activePointer.x;
        if ((this.twoX - this.oneX) > 0) {
            game.camera.x -= parseInt(this.twoX - this.oneX);
        } else if ((this.twoX - this.oneX) < 0) {
            game.camera.x += parseInt(this.oneX - this.twoX);
        }
        this.oneX = this.twoX;

        this.twoy = game.input.activePointer.y;
        if ((this.twoy - this.oney) > 0) {
            game.camera.y -= parseInt(this.twoy - this.oney);
        } else if ((this.twoy - this.oney) < 0) {
            game.camera.y += parseInt(this.oney - this.twoy);
        }
        this.oney = this.twoy;
    }
    //显示菜单函数
    this.showMenu = function () {
        showMenu(this);
    }

    //AI少女页面
    this.aisn = function () {
        var that = this;
        var aisn = document.getElementById("aisnMenu");
        var aisnMain = document.getElementById("aisnMain");
        var c1 = document.getElementById("c1");
        var c2 = document.getElementById("c2");
        var c3 = document.getElementById("c3");
        var c4 = document.getElementById("c4");
        var c5 = document.getElementById("c5");
        var c6 = document.getElementById("c6");
        var c7 = document.getElementById("c7");//商店
        var shop = document.getElementById("shop");//商店div
        var shopBtn = document.getElementById("shopBtn");//商店关闭按钮
        var set = document.getElementById("set");
        var musicBtn = document.getElementById("musicBtn");
        var music = document.getElementById("music");
        var audio = document.getElementById("audio");
        this.packDom = document.getElementById("pack");


        aisn.setAttribute("style", "display: block;");
        aisn.onclick = function () {
            aisnMain.setAttribute("style", "display: block;");
        }
        c1.onclick = function () {//邮件
        }
        c2.onclick = function () {//大地图
            aisnMain.setAttribute("style", "display: none;");
            game.state.start("map");
        }
        //DOM0添加时间不会出现重复添加情况
        c3.onclick = function () {//设置
            aisnMain.setAttribute("style", "display: none;");
            set.setAttribute("style", "display: block;");
            console.log(this);
        }
        musicBtn.addEventListener("click", function () {
            set.setAttribute("style", "display: none;");
        })//设置关闭按钮
        c4.onclick = function () {//收起
            aisnMain.setAttribute("style", "display: none;");
        }
        c5.onclick = function () {//建筑
            aisnMain.setAttribute("style", "display: none;");
            showMenu(that);
        }
        c6.onclick = function () {//背包
            that.packDom.setAttribute("style", "display: block;")
            aisnMain.setAttribute("style", "display: none;");
        }
        c7.onclick = function () {//商店
            aisnMain.setAttribute("style", "display: none;");
            shop.setAttribute("style", "display: block;");
            that.shopHead = document.getElementById("shopHead");
            shopMain.setAttribute("style", "height:" + (game.height - that.shopHead.offsetHeight) + "px;");
        }
        shopBtn.onclick = function () {
            shop.setAttribute("style", "display: none;")
        }
        music.addEventListener("click", this.qimg1)
        audio.addEventListener("click", this.qimg2)
    }

    //音乐按钮开关
    this.qimg1 = function () {
        if (this.getAttribute("src") == "./assets/on.jpg") {
            console.log(666);
            this.setAttribute("src", "./assets/off.jpg");
            that.sound1.pause();
        } else if (this.getAttribute("src") == "./assets/off.jpg") {
            console.log(7777);
            this.setAttribute("src", "./assets/on.jpg");
            that.sound1.resume();
        }
    }
    this.qimg2 = function () {
        if (this.getAttribute("src") == "./assets/on.jpg") {
            console.log(666);
            this.setAttribute("src", "./assets/off.jpg");
            that.yinxiao = false;
        } else if (this.getAttribute("src") == "./assets/off.jpg") {
            console.log(7777);
            this.setAttribute("src", "./assets/on.jpg");
            that.yinxiao = true;
        }
    }
    //背包
    this.pack = function () {
        var packArray = [
            { "src": "./assets/wulh.png", "number": "10" },
            { "src": "./assets/320c.png", "number": "10" },
            { "src": "./assets/530h.png", "number": "22" },
            { "src": "./assets/building.png", "number": "50" },
            { "src": "./assets/wulh.png", "number": "99" },
            { "src": "./assets/yqzt.png", "number": "99" },
            { "src": "./assets/zs1.png", "number": "99" },
            { "src": "./assets/zs2.png", "number": "99" },
            { "src": "./assets/zs3.png", "number": "99" },
            { "src": "./assets/wulh.png", "number": "99" },
            { "src": "./assets/wulh.png", "number": "99" },
        ];
        var that = this;
        var packs = document.getElementsByClassName("res");
        var imgs = document.getElementsByClassName("img");
        var packBtn = document.getElementById("packBtn");
        var rongBtn = document.getElementById("rongBtn");
        var xqing = document.getElementById("xqing");
        var packsack = document.getElementById("packsack");
        for (var i = 0; i < packArray.length; i++) {
            if (i < 9) {
                packs[i].innerHTML = '<img src="' + packArray[i].src + '" width="100%" height="100%" alt=""><div class="number">' + packArray[i].number + '</div>'
            } else {
                var li = document.createElement("li");
                li.setAttribute("class", "res");
                li.innerHTML = '<img src="' + packArray[i].src + '" width="100%" height="100%" alt=""><div class="number">' + packArray[i].number + '</div>';
                packsack.appendChild(li);
            }
        }
        for (let i = 0; i < packArray.length; i++) {
            if (packs[i].children.length) {
                packs[i].onclick = function () {
                    imgs[0].setAttribute("src", this.children[0].getAttribute("src"));
                    imgs[0].nextElementSibling.innerHTML = packs[i].children[1].innerHTML;
                    xqing.setAttribute("style", "display: block;")
                }
            }
        }

        packBtn.onclick = function () {
            that.packDom.setAttribute("style", "display: none;")
        }
        rongBtn.onclick = function () {
            xqing.setAttribute("style", "display: none;")
        }
    }
    //商店
    this.shop = function () {
        var shopBtn = document.getElementById("shopBtn");
        var shopMain = document.getElementById("shopMain");

        for (var i = 0; i < 12; i++) {
            var sitem = document.createElement("div");
            sitem.setAttribute("class", "sitem");
            sitem.innerHTML = '<div class="bor"><div class="sleft"><div class="simg"></div><span>物品名称</span></div><div class="sright"><div class="info">物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍物品介绍</div><div class="goumai"><button>购买</button></div></div></div>';
            shopMain.appendChild(sitem);
        }
    }
    //建造匹配类型
    this.match = function (car, tx, ty) {


        // if(car.size == "1X1"){
        //     // console.log(car.size);
        //     this.build1_1 = (tx >= 820 && tx <= 840 && ty >= 360 && ty <= 380 && this.guding.building);
        //     if(this.build1_1){car.buildx=830;car.buildy=370;}
        //     return this.build1_1;
        // }else if(car.size == "1X2"){
        //     // console.log(car.size);944 408
        //     this.build2_1 = (tx >= 936 && tx <= 952 && ty >= 400 && ty <= 416 && this.guding3.building && car.img.scale.x>0);
        //     if(this.build2_1){car.buildx=944;car.buildy=408;}
        //     return this.build2_1;
        // }

    }

    //任务
    this.task = function () {
        var task = document.getElementById("task");
        var caidan_task = document.getElementById("caidan_task");
        var remove_task = document.getElementById("remove_task");
        var task_content1 = document.getElementById("task_content1");
        var task_content2 = document.getElementById("task_content2");
        var task_category = document.getElementById("task_category");
        var task_btn1 = document.getElementById("task_btn1");
        var task_btn2 = document.getElementById("task_btn2");
        var her = game.height - 200;

        task.setAttribute("style","display:block;")
        //清除数据
        task_content1.remove();
        var dom1 = document.createElement("div");
        dom1.id = 'task_content1';
        task_category.appendChild(dom1);
        var task_content1 = document.getElementById("task_content1");
        //清除成就数据
        task_content2.remove();
        var dom2 = document.createElement("div");
        dom2.id = 'task_content2';
        task_category.appendChild(dom2);
        var task_content2 = document.getElementById("task_content2");

        task_content1.setAttribute("style", "height:" + her + "px");
        task_content2.setAttribute("style", "height:" + her + "px");
        //关闭任务页面
        remove_task.addEventListener("click", function () {
            caidan_task.setAttribute("style", "display: none;");
        });
        //添加任务
        var arr = [{ a: "第一任务", b: "门店升级到2级(1)", c: true }
            , { a: "第二任务", b: "门店升级到2级(1)", c: true }
            , { a: "第二任务", b: "门店升级到2级(1)", c: false }
            , { a: "第二任务", b: "门店升级到2级(1)", c: false }
            , { a: "第二任务", b: "门店升级到2级(1)", c: false }
            , { a: "第二任务", b: "门店升级到2级(1)", c: false }
            , { a: "第二任务", b: "门店升级到2级(1)", c: false }];
        //添加任务节点
        for (var i = 0; i < arr.length; i++) {
            var domnew = document.createElement("div");
            domnew.innerHTML = '<div id="task_con1"><span class="sp1">第一任务</span><span class="sp2">门店升级到2级&nbsp;&nbsp;&nbsp;(1/1)</span><button id="' + i + '" class="reward">奖励</button><span id="a' + i + '" class="unfinished">未完成</span></div>';
            task_content1.appendChild(domnew);
            if (arr[i]["c"]) {
                document.getElementById(i).setAttribute("style", "display:block");
                document.getElementById("a" + i).setAttribute("style", "display:none");
            } else {
                document.getElementById(i).setAttribute("style", "display:none");
                document.getElementById("a" + i).setAttribute("style", "display:block");
            }
        }
        //添加成就
        var achievement_arr = [
            { id: 1, url: "./assets/achievement_img1.JPG", name: "成就名称", liqu: true },
            { id: 1, url: "./assets/achievement_img1.JPG", name: "成就名称", liqu: false },
            { id: 1, url: "./assets/achievement_img1.JPG", name: "成就名称", liqu: true },
            { id: 1, url: "./assets/achievement_img1.JPG", name: "成就名称", liqu: false },
            { id: 1, url: "./assets/achievement_img1.JPG", name: "成就名称", liqu: false },
            { id: 1, url: "./assets/achievement_img1.JPG", name: "成就名称", liqu: false },
            { id: 1, url: "./assets/achievement_img1.JPG", name: "成就名称", liqu: true },
            { id: 1, url: "./assets/achievement_img1.JPG", name: "成就名称", liqu: false },
            { id: 1, url: "./assets/achievement_img1.JPG", name: "成就名称", liqu: false },
        ];
        for (var i = 0; i < achievement_arr.length; i++) {
            var achievement_domnew = document.createElement("div");
            achievement_domnew.id = "achievement_con1";
            achievement_domnew.innerHTML = '<div id="achievement_content"><img src="' + achievement_arr[i]["url"] + '" alt=""></img><span>' + achievement_arr[i]["name"] + '</span><button id="ac' + i + '">领取</button></div></div>';
            task_content2.appendChild(achievement_domnew);
            if (achievement_arr[i]["liqu"]) {
                document.getElementById("ac" + i).setAttribute("style", "visibility:visible");
            } else {
                document.getElementById("ac" + i).setAttribute("style", "visibility:hidden");
            }
        }
    }
    //任务
    this.task_btn = function () {
        var task = document.getElementById("task");
        var task_content1 = document.getElementById("task_content1");
        var task_content2 = document.getElementById("task_content2");
        var task_btn1 = document.getElementById("task_btn1");
        var task_btn2 = document.getElementById("task_btn2");

        //打开任务页面
        task.addEventListener("click", function () {
            caidan_task.setAttribute("style", "display: block;");
            that.task();
        });
        //切换任务类型
        task_btn1.addEventListener("click", function () {
            that.task();
            var task_content1 = document.getElementById("task_content1");
            var task_content2 = document.getElementById("task_content2");
            task_content1.setAttribute("style", "display: block");
            task_content2.setAttribute("style", "display: none");
        });
        task_btn2.addEventListener("click", function () {
            that.task();
            var task_content1 = document.getElementById("task_content1");
            var task_content2 = document.getElementById("task_content2");
            task_content1.setAttribute("style", "display: none");
            task_content2.setAttribute("style", "display: block");
        });
    }
}