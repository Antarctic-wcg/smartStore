var showMenu = function(that){
    //点击呼出菜单
    var menu = document.getElementById("menu");
    //建筑菜单分类按钮
    var btn1 = document.getElementById("btnl1");
    var btn2 = document.getElementById("btnl2");
    var btn3 = document.getElementById("btnl3");
    //分类内容
    var Gneng = document.getElementById("Gneng");
    var Zshi = document.getElementById("Zshi");
    var floor = document.getElementById("floor");
    //横向内容
    var heng = document.getElementsByClassName("heng");
    var gnengData = [
        {"src":"assets/2x2znAI.png", "sprite":"2x2znAI","specifications":"2x2"},
        {"src":"assets/3x5Lv1zt.png", "sprite":"3x5Lv1zt","specifications":"3x5"},
        {"src":"assets/2x3qt.png", "sprite":"2x3qt","specifications":"2x3"},
        {"src":"assets/2x3qsj.png", "sprite":"2x3qsj","specifications":"2x3"},
        {"src":"assets/2x3czt.png", "sprite":"2x3czt","specifications":"2x3"},
        {"src":"assets/1x4hyp1.png", "sprite":"1x4hyp1","specifications":"1x4"},
        {"src":"assets/1x4ggp.png", "sprite":"1x4ggp","specifications":"1x4"},
        {"src":"assets/1x2ggp.png", "sprite":"1x2ggp","specifications":"1x2"},
        {"src":"assets/1x2fcc.png", "sprite":"1x2fcc","specifications":"1x2"},
        {"src":"assets/1x2dz.png", "sprite":"1x2dz","specifications":"1x2"},
        {"src":"assets/1x1ccz.png", "sprite":"1x1ccz","specifications":"1x1"},
        {"src":"assets/1x1dz.png", "sprite":"1x1dz","specifications":"1x1"},
        {"src":"assets/1x1fcc.png", "sprite":"1x1fcc","specifications":"1x1"},
        {"src":"assets/1x1fsz.png", "sprite":"1x1fsz","specifications":"1x1"},
        {"src":"assets/1x1ggp.png", "sprite":"1x1ggp","specifications":"1x1"},
        {"src":"assets/1x1ljt.png", "sprite":"1x1ljt","specifications":"1x1"},
        {"src":"assets/1x1ycc.png", "sprite":"1x1ycc","specifications":"1x1"},
        {"src":"assets/1x1ydz.png", "sprite":"1x1ydz","specifications":"1x1"},
        {"src":"assets/1x1ysz.png", "sprite":"1x1ysz","specifications":"1x1"},
        {"src":"assets/1x1gezi.png", "sprite":"1x1gezi","specifications":"1x1"},
        {"src":"assets/1x2dz.png", "sprite":"1x2dz","specifications":"1x2"},
        {"src":"assets/1x4ggp.png", "sprite":"1x4ggp","specifications":"1x4"},
        {"src":"assets/2x2rk.png", "sprite":"2x2rk","specifications":"2x2"},
        {"src":"assets/2x3czt.png", "sprite":"2x3czt","specifications":"2x3"},
        {"src":"assets/3x5Lv1zt.png", "sprite":"3x5Lv1zt","specifications":"3x5"},
        {"src":"assets/2x2znAI.png", "sprite":"2x2znAI","specifications":"2x2"},
        {"src":"assets/1x1ydz.png", "sprite":"1x1ydz","specifications":"1x1"},
        {"src":"assets/1x1ysz.png", "sprite":"1x1ysz","specifications":"1x1"},
        {"src":"assets/1x1ysz.png", "sprite":"1x1ysz","specifications":"1x1"},
        {"src":"assets/1x1ysz.png", "sprite":"1x1ysz","specifications":"1x1"},
        {"src":"assets/1x1ccz.png", "sprite":"1x1ccz","specifications":"1x1"}
    ];

    if(heng[2].children.length == 0){//无后台
        for(var i = 0; i<gnengData.length; i++){
            var dom = document.createElement("div");
            dom.setAttribute("class","menu1");
            dom.setAttribute("id","gn"+i);
            dom.innerHTML = '<div class="h1"><img src="'+gnengData[i].src+'" height="100%" alt=""></div><div class="menu1_span"><span>建筑名称</span><span>金币：10000</span><span>能量：10</span></div><div><span>'+gnengData[i].specifications+'</span></div>';
            heng[2].appendChild(dom);
        }
    }
    
    // var boddy = document.getElementsByTagName("body");
    // var menu1 = document.getElementsByClassName("menu1");
    // var menuWidth = parseInt(window.getComputedStyle(menu1[0]).width) + 17;
    // var fontSize = parseInt(window.getComputedStyle(boddy[0]).fontSize);
    // heng[2].setAttribute("style","width: "+(gnengData.length*menuWidth)/fontSize+"rem");
    

    menu.setAttribute("style", "display: block;");
    //点击关闭按钮关闭菜单
    var btn = document.getElementById("btn");
    btn.onclick = function(){
        menu.setAttribute("style", "display: none;")
    }
    
    
    //选择建筑
    //建筑一
    for(let j=0; j < gnengData.length; j++){
        window["gn"+j] = document.getElementById("gn"+j);
        window["gn"+j].onclick = function(){
            that.clickNum += 1;
            that["car"+that.clickNum] = game.add.sprite(that.floor.x+50, that.floor.y, gnengData[j].sprite);
            that["car"+that.clickNum].anchor.set(0.5);
            that["car"+that.clickNum].scale.set(0.5);
            // redCar.tint = 0xFF3366;
            that["car"+that.clickNum].inputEnabled = true;//开启输入事件
            that["car"+that.clickNum].input.enableDrag(false);//拖拽
            // redCar.input.enableSnap(4, 3);
            that["gn" + that.clickNum] = game.add.sprite();
            that["gn" + that.clickNum].Show = true;
            that["gn" + that.clickNum].id = ("gn" + that.clickNum);
            that["car"+that.clickNum].inputEnabled = true;//开启输入事件
            that["gn" + that.clickNum].img = that["car"+that.clickNum];
            that["car"+that.clickNum].input.pixelPerfectClick = true;//对象使用完美像素检查
            that["car"+that.clickNum].input.pixelPerfectOver = true;//指针一上去使用完美像素检查
            menu.setAttribute("style", "display: none;");
            
            that["gn" + that.clickNum].size = gnengData[j].specifications;//物体是几X几
            that.carGroup.addChild(that["gn" + that.clickNum]);
            buts(that, that["gn" + that.clickNum]);

            // that["size" + that.clickNum] = game.add.sprite(that.floor.x, that.floor.y, "yuan");
            // that["size" + that.clickNum].scale.set(0.5);
            // that["size" + that.clickNum].anchor.set(0.5);
            
        }
    }
    // var build1 = document.getElementById("build1");
    // build1.onclick = function(){
    //     that.clickNum +=1;
    //     var redCar = game.add.sprite(that.floor.x-that.fwx, that.floor.y-that.fwy/2, "orangeCar");
    //     that["redCar" + that.clickNum] = game.add.sprite();
    //     that["redCar" + that.clickNum].Show = true;
    //     // that["redCar" + that.clickNum].adsorb = true;//控制吸附
    //     redCar.anchor.set(0.5);
    //     redCar.scale.set(0.5);
    //     redCar.tint = 0xFF3366;
    //     redCar.inputEnabled = true;//开启输入事件
    //     // redCar.input.enableSnap(4, 4);//在拖动或释放时，以4*4网格，使此Sprite对齐给定的网格***
    //     redCar.input.enableDrag(false);//拖拽
    //     redCar.input.pixelPerfectClick = true;//对象使用完美像素检查
    //     menu.setAttribute("style", "display: none;");
    //     that["redCar" + that.clickNum].img = redCar;
    //     that.carGroup.add(that["redCar" + that.clickNum]);
    //     buts(that, that["redCar" + that.clickNum]);
    // }
    //功能类菜单按钮
    btn1.addEventListener("click", function(){
        this.setAttribute("style", "background:orange;border-color:orange;");
        btn2.setAttribute("style", "background:white;border-color:none;");
        btn3.setAttribute("style", "background:white;border-color:none;");
        Gneng.setAttribute("style", "z-index: 999;")
        Zshi.setAttribute("style", "z-index: 1;")
        floor.setAttribute("style", "z-index: 1;")
    })
    //装饰类菜单按钮
    btn2.addEventListener("click", function(){
        this.setAttribute("style", "background:orange;border-color:orange;");
        btn1.setAttribute("style", "background:white;border-color:none;");
        btn3.setAttribute("style", "background:white;border-color:none;");
        Gneng.setAttribute("style", "z-index: 1;")
        Zshi.setAttribute("style", "z-index: 999;")
        floor.setAttribute("style", "z-index: 1;")
    })
    //地板类菜单按钮
    btn3.addEventListener("click", function(){
        this.setAttribute("style", "background:orange;border-color:orange;");
        btn2.setAttribute("style", "background:white;border-color:none;");
        btn1.setAttribute("style", "background:white;border-color:none;");
        Gneng.setAttribute("style", "z-index: 1;")
        Zshi.setAttribute("style", "z-index: 1;")
        floor.setAttribute("style", "z-index: 999;")
    })

}