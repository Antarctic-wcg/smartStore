var showMenu = function(that){
    //点击呼出菜单
    var menu = document.getElementById("menu");
    menu.setAttribute("style", "display: block;");
    //点击关闭按钮关闭菜单
    var btn = document.getElementById("btn");
    btn.onclick = function(){
        menu.setAttribute("style", "display: none;")
    }
    //建筑菜单分类按钮
    var btn1 = document.getElementById("btnl1");
    var btn2 = document.getElementById("btnl2");
    var btn3 = document.getElementById("btnl3");
    //选择建筑
    //建筑一
    var build1 = document.getElementById("build1");
    build1.onclick = function(){
        that.clickNum +=1;
        var redCar = game.add.sprite(that.floor.x-that.fwx, that.floor.y-that.fwy/2, "orangeCar");
        that["redCar" + that.clickNum] = game.add.sprite();
        that["redCar" + that.clickNum].Show = true;

        redCar.anchor.set(0.5);
        redCar.scale.set(0.5);
        redCar.tint = 0xFF3366;
        redCar.inputEnabled = true;//开启输入事件
        // redCar.input.enableSnap(4, 4);//在拖动或释放时，以4*4网格，使此Sprite对齐给定的网格***
        redCar.input.enableDrag(false);//拖拽
        redCar.input.pixelPerfectClick = true;//对象使用完美检查
        
        
        
        menu.setAttribute("style", "display: none;");
        
        that["redCar" + that.clickNum].img = redCar;
        that.carGroup.add(that["redCar" + that.clickNum]);
        buts(that, that["redCar" + that.clickNum]);
    }

}