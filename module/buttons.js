var buttons = function(cont, carImg, car){
    var that = cont;
    var buildData;
     //创建建筑菜单按钮组
     that.dangeBtn = game.add.group();
    if(car.buttons){
        // car.buttons = false;
        //查看建筑------------------------------------------------------------------
        car.ckBtn = game.add.button(carImg.x -94, carImg.y +car.img.height/2+10, "ckBtn", function(){
            car.buttons = true;
            that.buttonsGroup.destroy();
            buildData = document.getElementById("build");
            buildData.setAttribute("style","display:block;");
            var btn2 = document.getElementById("btn2");
            btn2.onclick = function(){
                buildData.setAttribute("style","display:none;");
                // upgrade.removeEventListener("click", upgrades);
            }
        })
        that.dangeBtn.add(car.ckBtn);
        //移动建组 + 打勾---------------------------------------------------------
        car.moveBtn = game.add.button(carImg.x - 47, carImg.y +car.img.height/2+10, "moveBtn", function(){
            if(car.moveBtn.key == "moveBtn"){
                car.Show = true;
                car.buttonsMove = true;
                // that.buttons = true;
                carImg.input.enableDrag(false);
                car.xuanzhuan.key = "chaichuBtn";
                car.ckBtn.destroy();
                car.chaichuBtn.destroy();
                car.moveBtn.loadTexture("dgou");
                car.xuanzhuan.loadTexture("dcha");
                // carImg.input.bringToTop = true;//拖动时让该精灵显示在最上面*************
                //同一块地可建造一个建筑
                that.carGroup.addChild(car);
                car.lastBlock = car.block;
                car.block.forEach(function(val){
                    val.building = true;
                });
                // car.block.building = true;
            }else if(car.moveBtn.key == "dgou"){
                if(car.building){//移动到能建造地方
                    car.Show = false;
                    car.buttons = true;
                    carImg.input.disableDrag();
                    car.moveBtn.destroy();
                    car.xuanzhuan.destroy();
                    car.img.x = car.buildx;
                    car.img.y = car.buildy;
                    car.lastx = carImg.x;
                    car.lasty = carImg.y;
                    car.buttonsMove = false;
                    //已有建筑的区域的时候不能建造
                    car.block.forEach(function(val){
                        val.building = false;
                    });
                    // car.block.building = false;
                    that.carGroup.removeChild(car);
                }
            }
            
            
        })
        that.dangeBtn.add(car.moveBtn);
        //旋转建筑 + X---------------------------------------------------------------
        car.xuanzhuan = game.add.button(carImg.x + 0, carImg.y +car.img.height/2+10, "xuanzhuan", function(){
            if(car.xuanzhuan.key == "dcha"){
                car.Show = false;
                car.buttons = true;
                carImg.input.bringToTop = false;
                that.buttonsGroup.destroy();
                carImg.x = car.lastx;
                carImg.y = car.lasty;
                carImg.input.disableDrag();
                car.buttonsMove = false;
                //-----------
                that.carGroup.removeChild(car);
                car.block = car.lastBlock;
                car.block.forEach(function(val){
                    val.building = false;
                });
                // car.block.building = false;
                car.img.tint = 0xFFFFFF;
            }else{
                if(car.size == "1x1"){
                    carImg.scale.x > 0 ? carImg.scale.x = -0.5 : carImg.scale.x = 0.5;
                }
            }
        })
        that.dangeBtn.add(car.xuanzhuan);
        //拆除建筑---------------------------------------------------
        car.chaichuBtn = game.add.button(carImg.x + 50, carImg.y +car.img.height/2+10, "chaichuBtn", function(){
            var chai = document.getElementById("chai");
            chai.setAttribute("style","display: block;");
            chai.addEventListener("click", function(){
                chai.setAttribute("style","display: none;");
            })
            var qrBtn = document.getElementById("qrBtn");
            qrBtn.addEventListener("click",function(){
                carImg.kill();
                that.buttonsGroup.destroy();
                car.buttons = true;
                car.block.forEach(function(val){
                    val.building = true;
                });
                // car.block.building = true;
                that.carGroup.removeChild(car);
                chai.setAttribute("style","display: none;");
            });
            var qxBtn = document.getElementById("qxBtn");
            qxBtn.addEventListener("click", function(){
                chai.setAttribute("style","display: none;");
            })
            var cmain = document.getElementById("cmain");
            cmain.addEventListener("click", function(){
                event.stopPropagation();
            })
        })
        that.dangeBtn.add(car.chaichuBtn);
        that.buttonsGroup.add(that.dangeBtn);
    }
    
    var upgrade = document.getElementById("upgrade");
    // upgrade.addEventListener("click", upgrades);
    upgrade.onclick = function(){
        var hours = 0;
        var min = 0;
        var s = 5;
        car.img.visible = false;
        buildData.setAttribute("style","display:none;");
        window.upgrade(car, hours, min, s, that);
        // upgrade.removeEventListener("click", upgrades);
    }
}