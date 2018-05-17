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
        // var redCar = game.add.sprite(that.floor.x-that.fwx, that.floor.y-that.fwy/2, "orangeCar");
        var redCar = game.add.sprite(728, 500, "orangeCar");
        
        that.redCar.Show = true;
        redCar.anchor.set(0.5);
        redCar.scale.set(0.5);
        redCar.tint = 0xFF3366;
        redCar.inputEnabled = true;
        redCar.input.enableSnap(4, 4);//在拖动或释放时，使此Sprite对齐给定的网格***
        redCar.input.enableDrag(false);
        that.buildGroup.add(redCar);
        menu.setAttribute("style", "display: none;");
        that.redCar.img = redCar;
        button(that, that.redCar);
    }

    // var build2 = document.getElementById("build2");
    // build2.onclick = function(){
    //     var orangeCar = game.add.sprite(that.floor.x-that.fwx, that.floor.y-that.fwy/2, "orangeCar");
        
    //     that.orangeCar.Show = true;
    //     orangeCar.anchor.set(0.5);
    //     orangeCar.scale.set(0.5);
    //     orangeCar.tint = 0xFF3366;
    //     orangeCar.inputEnabled = true;
    //     orangeCar.input.enableSnap(4, 4);//在拖动或释放时，使此Sprite对齐给定的网格***
    //     orangeCar.input.enableDrag(false);
    //     that.buildGroup.add(orangeCar);
    //     menu.setAttribute("style", "display: none;");
    //     that.orangeCar.img = orangeCar;
    //     button(that, that.orangeCar);
    // }
}