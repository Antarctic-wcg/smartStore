var buttons = function(cont, carImg, car){
    var that = cont;
    console.log("buttons")
     //创建建筑菜单按钮组
     that.buttonsGroup = game.add.group();
    if(that.buttons){
        that.buttons = false;
        //查看建筑
        that.ckBtn = game.add.button(carImg.x -carImg.width*0.8, carImg.y +30, "ckBtn", function(){
            console.log("ckBtn");
            that.buttons = true;
            that.buttonsGroup.destroy();
            var buildData = document.getElementById("build");
            buildData.setAttribute("style","display:block;");
            var btn2 = document.getElementById("btn2");
            btn2.onclick = function(){
                buildData.setAttribute("style","display:none;");
            }
        })
        that.buttonsGroup.add(that.ckBtn);
        //移动建组 + 打勾
        that.moveBtn = game.add.button(carImg.x - carImg.width*0.4, carImg.y +30, "moveBtn", function(){
            if(that.moveBtn.key == "moveBtn"){
                that.buttonsMove = true;
                // that.buttons = true;
                carImg.input.enableDrag(false);
                that.xuanzhuan.key = "chaichuBtn";
                that.ckBtn.destroy();
                that.chaichuBtn.destroy();
                that.moveBtn.loadTexture("dgou");
                that.xuanzhuan.loadTexture("dcha");
            }else if(that.moveBtn.key == "dgou"){
                console.log(car.building);
                if(car.building){//移动到能建造地方
                    that.buttons = true;
                    carImg.input.disableDrag();
                    that.moveBtn.destroy();
                    that.xuanzhuan.destroy();
                    car.lastx = carImg.x;
                    car.lasty = carImg.y;
                }
            }
            
            
        })
        that.buttonsGroup.add(that.moveBtn);
        //旋转建筑 + X
        that.xuanzhuan = game.add.button(carImg.x - carImg.width*0, carImg.y +30, "xuanzhuan", function(){
            if(that.xuanzhuan.key == "dcha"){
                that.buttons = true;
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
        that.buttonsGroup.add(that.xuanzhuan);
        //拆除建筑
        that.chaichuBtn = game.add.button(carImg.x + carImg.width*0.4, carImg.y +30, "chaichuBtn", function(){
            carImg.destroy();
            that.buttonsGroup.destroy();
            that.buttons = true;
        })
        that.buttonsGroup.add(that.chaichuBtn);
    }
    


}