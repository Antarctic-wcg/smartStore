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

    var caidan = document.getElementById("menu");

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
        that["guding1_"+i].inputEnabled = true;
        that["guding1_"+i].events.onInputDown.add(function(){
            if(caidan.getAttribute("style") == "display: none;" || caidan.getAttribute("style") == null){
                showMenu(that);
                $("#container canvas").css("filter","blur(14px)");
                $("#nana").css("display","block");
            }
            
        }, this)
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
        that["guding2_"+j].inputEnabled = true;
        that["guding2_"+j].events.onInputDown.add(function(){
            if(caidan.getAttribute("style") == "display: none;" || caidan.getAttribute("style") == null){
                showMenu(that);
                $("#container canvas").css("filter","blur(14px)");
                $("#nana").css("display","block");
            }
            
        }, this)
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
        that["guding3_"+m].inputEnabled = true;
        that["guding3_"+m].events.onInputDown.add(function(){
            if(caidan.getAttribute("style") == "display: none;" || caidan.getAttribute("style") == null){
                showMenu(that);
                $("#container canvas").css("filter","blur(14px)");
                $("#nana").css("display","block");
            }
            
        }, this)
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
        that["guding4_"+n].inputEnabled = true;
        that["guding4_"+n].events.onInputDown.add(function(){
            if(caidan.getAttribute("style") == "display: none;" || caidan.getAttribute("style") == null){
                showMenu(that);
                $("#container canvas").css("filter","blur(14px)");
                $("#nana").css("display","block");
            }
            
        }, this)
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
        that["guding5_"+k].inputEnabled = true;
        that["guding5_"+k].events.onInputDown.add(function(){
            if(caidan.getAttribute("style") == "display: none;" || caidan.getAttribute("style") == null){
                showMenu(that);
                $("#container canvas").css("filter","blur(14px)");
                $("#nana").css("display","block");
            }
            
        }, this)
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
        that["guding6_"+p].inputEnabled = true;
        that["guding6_"+p].events.onInputDown.add(function(){
            if(caidan.getAttribute("style") == "display: none;" || caidan.getAttribute("style") == null){
                showMenu(that);
                $("#container canvas").css("filter","blur(14px)");
                $("#nana").css("display","block");
            }
            
        }, this)
    }
    
}