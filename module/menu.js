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
        {"src":"assets/1x1ccz.png"},
        {"src":"assets/1x1dz.png"},
        {"src":"assets/1x1fcc.png"},
        {"src":"assets/1x1fsz.png"},
        {"src":"assets/1x1ggp.png"},
        {"src":"assets/1x1ljt.png"},
        {"src":"assets/1x1ycc.png"},
        {"src":"assets/1x1ydz.png"},
        {"src":"assets/1x1ysz.png"},
        {"src":"assets/1x1ysz.png"},
        {"src":"assets/1x1ysz.png"},
        {"src":"assets/1x1ysz.png"}
    ];
    heng[2].setAttribute("style","width: "+gnengData.length*112+"px");
    for(var i = 0; i<gnengData.length; i++){
        var dom = document.createElement("div");
        dom.setAttribute("class","menu1");
        dom.setAttribute("id","gn"+i);
        dom.innerHTML = '<span class="h1"><img src="'+gnengData[i].src+'" height="100%" alt=""></span><span>功能建筑</span><span>金币：10000</span><span>能量：10</span><span>1*1</span>';
        heng[2].appendChild(dom);
    }
    

    menu.setAttribute("style", "display: block;");
    //点击关闭按钮关闭菜单
    var btn = document.getElementById("btn");
    btn.onclick = function(){
        menu.setAttribute("style", "display: none;")
    }
    
    
    //选择建筑
    //建筑一
    var build1 = document.getElementById("build1");
    build1.onclick = function(){
        that.clickNum +=1;
        var redCar = game.add.sprite(that.floor.x-that.fwx, that.floor.y-that.fwy/2, "orangeCar");
        that["redCar" + that.clickNum] = game.add.sprite();
        that["redCar" + that.clickNum].Show = true;
        // that["redCar" + that.clickNum].adsorb = true;//控制吸附

        redCar.anchor.set(0.5);
        redCar.scale.set(0.5);
        redCar.tint = 0xFF3366;
        redCar.inputEnabled = true;//开启输入事件
        // redCar.input.enableSnap(4, 4);//在拖动或释放时，以4*4网格，使此Sprite对齐给定的网格***
        redCar.input.enableDrag(false);//拖拽
        redCar.input.pixelPerfectClick = true;//对象使用完美像素检查
        
        menu.setAttribute("style", "display: none;");
        that["redCar" + that.clickNum].img = redCar;
        that.carGroup.add(that["redCar" + that.clickNum]);
        buts(that, that["redCar" + that.clickNum]);
    }
    //功能类菜单按钮
    btn1.addEventListener("click", function(){
        Gneng.setAttribute("style", "z-index: 999;")
        Zshi.setAttribute("style", "z-index: 1;")
        floor.setAttribute("style", "z-index: 1;")
    })
    //装饰类菜单按钮
    btn2.addEventListener("click", function(){
        Gneng.setAttribute("style", "z-index: 1;")
        Zshi.setAttribute("style", "z-index: 999;")
        floor.setAttribute("style", "z-index: 1;")
    })
    //地板类菜单按钮
    btn3.addEventListener("click", function(){
        Gneng.setAttribute("style", "z-index: 1;")
        Zshi.setAttribute("style", "z-index: 1;")
        floor.setAttribute("style", "z-index: 999;")
    })

}