var buttons = function(cont, carImg, car){
    var that = cont;
    console.log("buttons")
     //创建建筑菜单按钮组
     that.buttonsGroup = game.add.group();
    if(car.buttons){
        car.buttons = false;
        //查看建筑
        car.ckBtn = game.add.button(carImg.x -carImg.width*0.8, carImg.y +30, "ckBtn", function(){
            console.log("ckBtn");
            car.buttons = true;
            that.buttonsGroup.destroy();
            var buildData = document.getElementById("build");
            buildData.setAttribute("style","display:block;");
            var btn2 = document.getElementById("btn2");
            btn2.onclick = function(){
                buildData.setAttribute("style","display:none;");
            }
        })
        that.buttonsGroup.add(car.ckBtn);
        //移动建组 + 打勾
        car.moveBtn = game.add.button(carImg.x - carImg.width*0.4, carImg.y +30, "moveBtn", function(){
            if(car.moveBtn.key == "moveBtn"){
                car.buttonsMove = true;
                // that.buttons = true;
                carImg.input.enableDrag(false);
                car.xuanzhuan.key = "chaichuBtn";
                car.ckBtn.destroy();
                car.chaichuBtn.destroy();
                car.moveBtn.loadTexture("dgou");
                car.xuanzhuan.loadTexture("dcha");
                carImg.input.bringToTop = true;
            }else if(car.moveBtn.key == "dgou"){
                console.log(car.building);
                if(car.building){//移动到能建造地方
                    car.buttons = true;
                    carImg.input.disableDrag();
                    car.moveBtn.destroy();
                    car.xuanzhuan.destroy();
                    car.img.x = car.buildx;
                    car.img.y = car.buildy;
                    car.lastx = carImg.x;
                    car.lasty = carImg.y;
                }
            }
            
            
        })
        that.buttonsGroup.add(car.moveBtn);
        //旋转建筑 + X
        car.xuanzhuan = game.add.button(carImg.x - carImg.width*0, carImg.y +30, "xuanzhuan", function(){
            if(car.xuanzhuan.key == "dcha"){
                car.buttons = true;
                carImg.input.bringToTop = false;
                console.log("x");
                that.buttonsGroup.destroy();
                carImg.x = car.lastx;
                carImg.y = car.lasty;
                carImg.input.disableDrag();
            }else{
                // if(carImg.scale.x < 0){
                //     carImg.scale.x = 0.5;
                // }else{
                //     carImg.scale.x = -0.5;
                // }
            }
        })
        that.buttonsGroup.add(car.xuanzhuan);
        //拆除建筑
        car.chaichuBtn = game.add.button(carImg.x + carImg.width*0.4, carImg.y +30, "chaichuBtn", function(){
            carImg.destroy();
            that.buttonsGroup.destroy();
            car.buttons = true;
        })
        that.buttonsGroup.add(car.chaichuBtn);
    }
    


}