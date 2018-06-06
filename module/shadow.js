var shadow = function(that){
    var fw = (game.cache.getImage("floor").width*0.5);//地图宽
    var fh = (game.cache.getImage("floor").height*0.5);
    var fwx = fw / 22 /2;//地板一格的一半宽
    var fwy = fh / 22 /2;
    that.fwx = fwx;    
    that.fwy = fwy;
    // var yuan = game.add.graphics(that.floor.x, that.floor.y);//开始画
    // yuan.beginFill(0xFF0000);
    // yuan.drawCircle(0, 0, 5, 5);
    // yuan.endFill();

    //一大块阴影的组
    that.firstShadow = game.add.group();
    that.shadowGroup.add(that.firstShadow);
    that.twoShadow = game.add.group();
    that.shadowGroup.add(that.twoShadow);
    that.threeShadow = game.add.group();
    that.shadowGroup.add(that.threeShadow);
    that.fourShadow = game.add.group();
    that.shadowGroup.add(that.fourShadow);
    that.fiveShadow = game.add.group();
    that.shadowGroup.add(that.fiveShadow);
    that.sixShadow = game.add.group();
    that.shadowGroup.add(that.sixShadow);
    //--
    var shadowx = -5;
    var shadowy = 1;
    
    
    //第1个
    for(var i=0; i<20; i++){
        if(i == 5 || i == 10 || i == 15){
            shadowx -= 4;
            shadowy += 6;
        }
        that["guding1_"+i] = game.add.graphics(that.floor.x - 2, that.floor.y-12*fwy);//开始画
        that["guding1_"+i].beginFill(0x666666);
        that["guding1_"+i].drawPolygon(0, 0, fwx, fwy, 2*fwx, 0, fwx, -fwy);
        that["guding1_"+i].endFill();
        that["guding1_"+i].x += fwx*(shadowx+i);
        that["guding1_"+i].y += fwy*(shadowy-i);
        that["guding1_"+i].building = true;//初始可建造
        that.firstShadow.add(that["guding1_"+i]);
        // console.log(that["guding1_"+i].x, that["guding1_"+i].y);
    }
    shadowx = -5;
    shadowy = 1;
    //第2个
    for(var j=0; j<20; j++){
        if(j == 5 || j == 10 || j == 15){
            shadowx -= 4;
            shadowy += 6;
        }
        that["guding2_"+j] = game.add.graphics(that.floor.x + 104.5, that.floor.y - 66.7);//开始画
        that["guding2_"+j].beginFill(0x666666);
        that["guding2_"+j].drawPolygon(0, 0, fwx, fwy, 2*fwx, 0, fwx, -fwy);
        that["guding2_"+j].endFill();
        that["guding2_"+j].x += fwx*(shadowx+j);
        that["guding2_"+j].y += fwy*(shadowy-j);
        that["guding2_"+j].building = true;//初始可建造
        that.twoShadow.add(that["guding2_"+j]);
    }
    shadowx = -5;
    shadowy = 1;
    //第3个
    for(var m=0; m<20; m++){
        if(m == 5 || m == 10 || m == 15){
            shadowx -= 4;
            shadowy += 6;
        }
        that["guding3_"+m] = game.add.graphics(that.floor.x + 211, that.floor.y + 1.5);//开始画
        that["guding3_"+m].beginFill(0x666666);
        that["guding3_"+m].drawPolygon(0, 0, fwx, fwy, 2*fwx, 0, fwx, -fwy);
        that["guding3_"+m].endFill();
        that["guding3_"+m].x += fwx*(shadowx+m);
        that["guding3_"+m].y += fwy*(shadowy-m);
        that["guding3_"+m].building = true;//初始可建造
        that.threeShadow.add(that["guding3_"+m]);
    }
    shadowx = -5;
    shadowy = 1;
    //第4个
    for(var n=0; n<20; n++){
        if(n == 5 || n == 10 || n == 15){
            shadowx -= 4;
            shadowy += 6;
        }
        that["guding4_"+n] = game.add.graphics(that.floor.x - 140, that.floor.y - 46);//开始画
        that["guding4_"+n].beginFill(0x666666);
        that["guding4_"+n].drawPolygon(0, 0, fwx, fwy, 2*fwx, 0, fwx, -fwy);
        that["guding4_"+n].endFill();
        that["guding4_"+n].x += fwx*(shadowx+n);
        that["guding4_"+n].y += fwy*(shadowy-n);
        that["guding4_"+n].building = true;//初始可建造
        that.fourShadow.add(that["guding4_"+n]);
    }
    shadowx = -5;
    shadowy = 1;
    //第5个
    for(var k=0; k<20; k++){
        if(k == 5 || k == 10 || k == 15){
            shadowx -= 4;
            shadowy += 6;
        }
        that["guding5_"+k] = game.add.graphics(that.floor.x - 34, that.floor.y + 22);//开始画
        that["guding5_"+k].beginFill(0x666666);
        that["guding5_"+k].drawPolygon(0, 0, fwx, fwy, 2*fwx, 0, fwx, -fwy);
        that["guding5_"+k].endFill();
        that["guding5_"+k].x += fwx*(shadowx+k);
        that["guding5_"+k].y += fwy*(shadowy-k);
        that["guding5_"+k].building = true;//初始可建造
        that.fiveShadow.add(that["guding5_"+k]);
    }
    shadowx = -5;
    shadowy = 1;
    //第6个
    for(var p=0; p<20; p++){
        if(p == 5 || p == 10 || p == 15){
            shadowx -= 4;
            shadowy += 6;
        }
        that["guding6_"+p] = game.add.graphics(that.floor.x + 72, that.floor.y + 90);//开始画
        that["guding6_"+p].beginFill(0x666666);
        that["guding6_"+p].drawPolygon(0, 0, fwx, fwy, 2*fwx, 0, fwx, -fwy);
        that["guding6_"+p].endFill();
        that["guding6_"+p].x += fwx*(shadowx+p);
        that["guding6_"+p].y += fwy*(shadowy-p);
        that["guding6_"+p].building = true;//初始可建造
        that.sixShadow.add(that["guding6_"+p]);
    }
    

    // that.guding = game.add.graphics(that.floor.x - 2, that.floor.y-12*fwy);//开始画
    // that.guding.beginFill(0x666666);
    // that.guding.drawPolygon(0, 0, fwx, fwy, 2*fwx, 0, fwx, -fwy);
    // that.guding.alpha = 0.4;
    // that.guding.endFill();
    // that.guding.x -= fwx*2;
    // that.guding.y -= fwy*2;
    // that.guding.inputEnabled = true;
    // that.guding.events.onInputDown.add(that.showMenu, that);
    // that.guding.building = true;

    

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
    

    // //可建地板1*1
    // that.guding = game.add.graphics(that.floor.x - 2, that.floor.y-12*fwy);//开始画
    // that.guding.beginFill(0x666666);
    // that.guding.drawPolygon(0, 0, fwx, fwy, 2*fwx, 0, fwx, -fwy);
    // that.guding.alpha = 0.4;
    // that.guding.endFill();
    // that.guding.x -= fwx*2;
    // that.guding.y -= fwy*2;
    // that.guding.inputEnabled = true;
    // that.guding.events.onInputDown.add(that.showMenu, that);
    // that.guding.building = true;
    // that.shadowGroup.add(that.guding);
    // //可建地板1*2
    // that.guding2 = game.add.graphics(that.floor.x - 2, that.floor.y-12*fwy);//开始画
    // that.guding2.beginFill(0x666666);
    // that.guding2.drawPolygon(fwx, -3*fwy, 3*fwx, -1*fwy, 4*fwx, -2*fwy, 2*fwx, -4*fwy);
    // that.guding2.alpha = 0.4;
    // that.guding2.endFill();
    // that.guding2.inputEnabled = true;
    // that.guding2.events.onInputDown.add(that.showMenu, that);
    // that.guding2.building = true;
    // that.shadowGroup.add(that.guding2);
    // //可建地板1*2 旋转
    // that.guding3 = game.add.graphics(that.floor.x - 2, that.floor.y-12*fwy);//开始画
    // that.guding3.beginFill(0x666666);
    // that.guding3.drawPolygon(fwx, -3*fwy, 2*fwx, -2*fwy, 4*fwx, -4*fwy, 3*fwx, -5*fwy);
    // that.guding3.alpha = 0.4;
    // that.guding3.endFill();
    // that.guding3.x += fwx*3;
    // that.guding3.y += fwy*3;
    // that.guding3.inputEnabled = true;
    // that.guding3.events.onInputDown.add(that.showMenu, that);
    // that.guding3.building = true;
    // that.shadowGroup.add(that.guding3);
    // //可建地板1*4
    // that.guding4 = game.add.graphics(that.floor.x - 2, that.floor.y-12*fwy);//开始画
    // that.guding4.beginFill(0x666666);
    // that.guding4.drawPolygon(0, 0, -fwx, fwy, 3*fwx, 5*fwy, 4*fwx, 4*fwy);
    // that.guding4.alpha = 0.4;
    // that.guding4.endFill();
    // that.guding4.inputEnabled = true;
    // that.guding4.events.onInputDown.add(that.showMenu, that);
    // that.guding4.building = true;
    // that.shadowGroup.add(that.guding4);
    // //可建地板1*4 旋转
    // that.guding5 = game.add.graphics(that.floor.x - 2, that.floor.y-12*fwy);//开始画
    // that.guding5.beginFill(0x666666);
    // that.guding5.drawPolygon(0, 0, fwx, fwy, -3*fwx, 5*fwy, -4*fwx, 4*fwy);
    // that.guding5.alpha = 0.4;
    // that.guding5.endFill();
    // that.guding5.x -= fwx*3;
    // that.guding5.y += fwy;
    // that.guding5.inputEnabled = true;
    // that.guding5.events.onInputDown.add(that.showMenu, that);
    // that.guding5.building = true;
    // that.shadowGroup.add(that.guding5);
    // //可建地板2x2
    // that.guding6 = game.add.graphics(that.floor.x+12*fwx+1, that.floor.y+2);//开始画
    // that.guding6.beginFill(0x666666);
    // that.guding6.drawPolygon(0, 0, 2*fwx, 2*fwy, 4*fwx, 0, 2*fwx, -2*fwy);
    // that.guding6.alpha = 0.4;
    // that.guding6.endFill();
    // // that.guding6.x -= fwx*3;
    // // that.guding6.y += fwy;
    // that.guding6.inputEnabled = true;
    // that.guding6.events.onInputDown.add(that.showMenu, that);
    // that.guding6.building = true;
    // that.shadowGroup.add(that.guding6);
    // //可建地板2x3
    // that.guding7 = game.add.graphics(that.floor.x+12*fwx+1, that.floor.y+1);//开始画
    // that.guding7.beginFill(0x666666);
    // that.guding7.drawPolygon(0, 0, -2*fwx, -2*fwy, -5*fwx, fwy, -3*fwx, 3*fwy);
    // that.guding7.alpha = 0.4;
    // that.guding7.endFill();
    // that.guding7.inputEnabled = true;
    // that.guding7.events.onInputDown.add(that.showMenu, that);
    // that.guding7.building = true;
    // that.shadowGroup.add(that.guding7);
    // //可建地板2x3 旋转
    // that.guding8 = game.add.graphics(that.floor.x+12*fwx+1, that.floor.y+1);//开始画
    // that.guding8.beginFill(0x666666);
    // that.guding8.drawPolygon(0, 0, -2*fwx, 2*fwy, fwx, 5*fwy, 3*fwx, 3*fwy);
    // that.guding8.alpha = 0.4;
    // that.guding8.endFill();
    // that.guding8.y += 2*fwy;
    // that.guding8.inputEnabled = true;
    // that.guding8.events.onInputDown.add(that.showMenu, that);
    // that.guding8.building = true;
    // that.shadowGroup.add(that.guding8);
    // //可建地板3x5
    // that.guding9 = game.add.graphics(that.floor.x+1, that.floor.y);//开始画
    // that.guding9.beginFill(0x666666);
    // that.guding9.drawPolygon(0, 0, -3*fwx, 3*fwy, 2*fwx, 8*fwy, 5*fwx, 5*fwy);
    // that.guding9.alpha = 0.4;
    // that.guding9.endFill();
    // that.guding9.y += 4*fwy;
    // that.guding9.inputEnabled = true;
    // that.guding9.events.onInputDown.add(that.showMenu, that);
    // that.guding9.building = true;
    // that.shadowGroup.add(that.guding9);
    // //可建地板3x5 旋转
    // that.guding10 = game.add.graphics(that.floor.x+1, that.floor.y);//开始画
    // that.guding10.beginFill(0x666666);
    // that.guding10.drawPolygon(0, 0, -3*fwx, -3*fwy, -8*fwx, 2*fwy, -5*fwx, 5*fwy);
    // that.guding10.alpha = 0.4;
    // that.guding10.endFill();
    // // that.guding10.y += 2*fwy;
    // that.guding10.inputEnabled = true;
    // that.guding10.events.onInputDown.add(that.showMenu, that);
    // that.guding10.building = true;
    // that.shadowGroup.add(that.guding10);
}