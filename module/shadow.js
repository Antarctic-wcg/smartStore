var shadow = function(that){
    var fw = (game.cache.getImage("floor").width*0.5);//地图宽
    var fh = (game.cache.getImage("floor").height*0.5);
    var fwx = fw / 22 /2;//地板一格的一半宽
    var fwy = fh / 22 /2;
    that.fwx = fwx;    
    that.fwy = fwy; 
    // //可建地板3*5
    // var yuan = game.add.graphics(that.floor.x, that.floor.y);//开始画
    // yuan.beginFill(0xFF0000);
    // yuan.drawCircle(0, 0, 5, 5);
    // yuan.endFill();
    // var yuan2 = game.add.graphics(that.floor.x, that.floor.y-12*fwy);//开始画
    // yuan2.beginFill(0xFF0000);
    // yuan2.drawCircle(0, 0, 5, 5);
    // yuan2.endFill();
    // var yuan3 = game.add.graphics(that.floor.x+12*fwx, that.floor.y);//开始画
    // yuan3.beginFill(0xFF0000);
    // yuan3.drawCircle(0, 0, 5, 5);
    // yuan3.endFill();
    // var yuan4 = game.add.graphics(that.floor.x, that.floor.y+12*fwy);//开始画
    // yuan4.beginFill(0xFF0000);
    // yuan4.drawCircle(0, 0, 5, 5);
    // yuan4.endFill();
    // var yuan5 = game.add.graphics(that.floor.x-12*fwx, that.floor.y);//开始画
    // yuan5.beginFill(0xFF0000);
    // yuan5.drawCircle(0, 0, 5, 5);
    // yuan5.endFill();
    

    //可建地板1*1
    that.guding = game.add.graphics(that.floor.x - 2, that.floor.y-12*fwy);//开始画
    that.guding.beginFill(0x999999);
    that.guding.drawPolygon(0, 0, fwx, fwy, 2*fwx, 0, fwx, -fwy);
    that.guding.alpha = 0.5;
    that.guding.endFill();
    that.guding.x -= fwx*2;
    that.guding.y -= fwy*2;
    that.guding.inputEnabled = true;
    that.guding.events.onInputDown.add(that.showMenu, that);
    that.guding.building = true;
    that.shadowGroup.add(that.guding);
    //可建地板1*2
    that.guding2 = game.add.graphics(that.floor.x - 2, that.floor.y-12*fwy);//开始画
    that.guding2.beginFill(0x999999);
    that.guding2.drawPolygon(fwx, -3*fwy, 3*fwx, -1*fwy, 4*fwx, -2*fwy, 2*fwx, -4*fwy);
    that.guding2.alpha = 0.5;
    that.guding2.endFill();
    that.guding2.inputEnabled = true;
    that.guding2.events.onInputDown.add(that.showMenu, that);
    that.guding2.building = true;
    that.shadowGroup.add(that.guding2);
    //可建地板1*2 旋转
    that.guding3 = game.add.graphics(that.floor.x - 2, that.floor.y-12*fwy);//开始画
    that.guding3.beginFill(0x999999);
    that.guding3.drawPolygon(fwx, -3*fwy, 2*fwx, -2*fwy, 4*fwx, -4*fwy, 3*fwx, -5*fwy);
    that.guding3.alpha = 0.5;
    that.guding3.endFill();
    that.guding3.x += fwx*3;
    that.guding3.y += fwy*3;
    that.guding3.inputEnabled = true;
    that.guding3.events.onInputDown.add(that.showMenu, that);
    that.guding3.building = true;
    that.shadowGroup.add(that.guding3);
    //可建地板1*4
    that.guding4 = game.add.graphics(that.floor.x - 2, that.floor.y-12*fwy);//开始画
    that.guding4.beginFill(0x999999);
    that.guding4.drawPolygon(0, 0, -fwx, fwy, 3*fwx, 5*fwy, 4*fwx, 4*fwy);
    that.guding4.alpha = 0.5;
    that.guding4.endFill();
    that.guding4.inputEnabled = true;
    that.guding4.events.onInputDown.add(that.showMenu, that);
    that.guding4.building = true;
    that.shadowGroup.add(that.guding4);
    //可建地板1*4 旋转
    that.guding5 = game.add.graphics(that.floor.x - 2, that.floor.y-12*fwy);//开始画
    that.guding5.beginFill(0x999999);
    that.guding5.drawPolygon(0, 0, fwx, fwy, -3*fwx, 5*fwy, -4*fwx, 4*fwy);
    that.guding5.alpha = 0.5;
    that.guding5.endFill();
    that.guding5.x -= fwx*3;
    that.guding5.y += fwy;
    that.guding5.inputEnabled = true;
    that.guding5.events.onInputDown.add(that.showMenu, that);
    that.guding5.building = true;
    that.shadowGroup.add(that.guding5);
    //可建地板2x2
    that.guding6 = game.add.graphics(that.floor.x+12*fwx+1, that.floor.y+2);//开始画
    that.guding6.beginFill(0x999999);
    that.guding6.drawPolygon(0, 0, 2*fwx, 2*fwy, 4*fwx, 0, 2*fwx, -2*fwy);
    that.guding6.alpha = 0.5;
    that.guding6.endFill();
    // that.guding6.x -= fwx*3;
    // that.guding6.y += fwy;
    that.guding6.inputEnabled = true;
    that.guding6.events.onInputDown.add(that.showMenu, that);
    that.guding6.building = true;
    that.shadowGroup.add(that.guding6);
    //可建地板2x3
    that.guding7 = game.add.graphics(that.floor.x+12*fwx+1, that.floor.y+1);//开始画
    that.guding7.beginFill(0x999999);
    that.guding7.drawPolygon(0, 0, -2*fwx, -2*fwy, -5*fwx, fwy, -3*fwx, 3*fwy);
    that.guding7.alpha = 0.5;
    that.guding7.endFill();
    that.guding7.inputEnabled = true;
    that.guding7.events.onInputDown.add(that.showMenu, that);
    that.guding7.building = true;
    that.shadowGroup.add(that.guding7);
    //可建地板2x3 旋转
    that.guding8 = game.add.graphics(that.floor.x+12*fwx+1, that.floor.y+1);//开始画
    that.guding8.beginFill(0x999999);
    that.guding8.drawPolygon(0, 0, -2*fwx, 2*fwy, fwx, 5*fwy, 3*fwx, 3*fwy);
    that.guding8.alpha = 0.5;
    that.guding8.endFill();
    that.guding8.y += 2*fwy;
    that.guding8.inputEnabled = true;
    that.guding8.events.onInputDown.add(that.showMenu, that);
    that.guding8.building = true;
    that.shadowGroup.add(that.guding8);
    //可建地板3x5
    that.guding9 = game.add.graphics(that.floor.x+1, that.floor.y);//开始画
    that.guding9.beginFill(0x999999);
    that.guding9.drawPolygon(0, 0, -3*fwx, 3*fwy, 2*fwx, 8*fwy, 5*fwx, 5*fwy);
    that.guding9.alpha = 0.5;
    that.guding9.endFill();
    that.guding9.y += 4*fwy;
    that.guding9.inputEnabled = true;
    that.guding9.events.onInputDown.add(that.showMenu, that);
    that.guding9.building = true;
    that.shadowGroup.add(that.guding9);
    //可建地板3x5 旋转
    that.guding10 = game.add.graphics(that.floor.x+1, that.floor.y);//开始画
    that.guding10.beginFill(0x999999);
    that.guding10.drawPolygon(0, 0, -3*fwx, -3*fwy, -8*fwx, 2*fwy, -5*fwx, 5*fwy);
    that.guding10.alpha = 0.5;
    that.guding10.endFill();
    // that.guding10.y += 2*fwy;
    that.guding10.inputEnabled = true;
    that.guding10.events.onInputDown.add(that.showMenu, that);
    that.guding10.building = true;
    that.shadowGroup.add(that.guding10);
}