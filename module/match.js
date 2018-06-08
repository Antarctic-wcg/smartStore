var match = function(car, tx, ty, that){
    that.sta = false;
    that.x1x2t = function(x, y, buildBlock, shadow)
    {   
        var twosShadowX_5 = x;//17
        var twosShadowY_5 = y;//11.5
        var twoshang5 = 1;
        for(var pps = 1; pps < 16; pps++)
        {
            if(pps == 6 || pps == 11)
            {
                twosShadowX_5 += 17;
                twosShadowY_5 += 11.8;
                twoshang5 += 5;
            }
            that[buildBlock + pps] = ((tx>=((twosShadowX_5+17.5*(pps-twoshang5))-8)) && tx<=((twosShadowX_5+17.5*(pps-twoshang5))+8) && ty>=(twosShadowY_5-11.5*(pps-twoshang5)-8) && ty<=(twosShadowY_5-11.5*(pps-twoshang5)+8) && that[shadow+(pps-1)].building && that[shadow+(pps+4)].building);
            if(that[buildBlock + pps])
            {
                car.buildx=(twosShadowX_5+(pps-twoshang5)*17.5);
                car.buildy=(twosShadowY_5-11.5*(pps-twoshang5));
                car.block = [];
                car.block.push(that[shadow+(pps-1)]);
                car.block.push(that[shadow+(pps+4)]);
                car.ids = shadow+(pps-1);
                that.sta = true;
                break;
            }
        }
    }
    
    that.x1x2f = function(x, y, buildBlock, shadow)
    {
        var twoShadowX_1 = x;//17
        var twoShadowY_1 = y;//11.5
        var twohang1 = 1;
        var twoGe = 0;
        for(var ii = 1; ii < 17; ii++){
            if(ii == 5 || ii == 9 || ii == 13){
                twoShadowX_1 += 17;
                twoShadowY_1 += 11.8;
                twohang1 += 4;
                twoGe += 1;
            }
            that[buildBlock + ii] = ((tx>=((twoShadowX_1+17.5*(ii-twohang1))-8)) && tx<=((twoShadowX_1+17.5*(ii-twohang1))+8) && ty>=(twoShadowY_1-11.5*(ii-twohang1)-8) && ty<=(twoShadowY_1-11.5*(ii-twohang1)+8) && that[shadow+(ii-1+twoGe)].building && that[shadow+(ii+twoGe)].building);
            
            if(that[buildBlock + ii]){
                car.buildx=(twoShadowX_1+(ii-twohang1)*17.5);
                car.buildy=(twoShadowY_1-11.5*(ii-twohang1));
                car.block = [];
                car.block.push(that[shadow+(ii-1+twoGe)]);
                car.block.push(that[shadow+(ii+twoGe)]);
                
                car.ids = shadow+(ii-1+twoGe);
                that.sta = true;
                break;
            }
        }
    }

    that.x1x4t = function(x, y, buildBlock, shadow)
    {
        var twoShadowX_1 = x;//17
        var twoShadowY_1 = y;//11.5
        var twohang1 = 1;
        var twoGe = 0;
        for(var ii = 1; ii < 9; ii++){
            if(ii == 3 || ii == 5 || ii == 7)
            {
                twoShadowX_1 += 17;
                twoShadowY_1 += 11.8;
                twohang1 += 2;
                twoGe += 3;
            }
            that[buildBlock + ii] = ((tx>=((twoShadowX_1+17.5*(ii-twohang1))-8)) && tx<=((twoShadowX_1+17.5*(ii-twohang1))+8) && ty>=(twoShadowY_1-11.5*(ii-twohang1)-8) && ty<=(twoShadowY_1-11.5*(ii-twohang1)+8) && that[shadow+(ii-1+twoGe)].building && that[shadow+(ii+twoGe)].building && that[shadow+(ii+twoGe+1)].building && that[shadow+(ii+twoGe+2)].building);
            
            if(that[buildBlock + ii])
            {
                car.buildx=(twoShadowX_1+(ii-twohang1)*17.5);
                car.buildy=(twoShadowY_1-11.5*(ii-twohang1));
                car.block = [];
                car.block.push(that[shadow+(ii-1+twoGe)]);
                car.block.push(that[shadow+(ii+twoGe)]);
                car.block.push(that[shadow+(ii+twoGe+1)]);
                car.block.push(that[shadow+(ii+twoGe+2)]);
                car.ids = shadow+(ii-1+twoGe);
                that.sta = true;
                break;
            }
        }
    }
    that.x1x4f = function(x, y, buildBlock, shadow)
    {
        var twoShadowX_1 = x;//17
        var twoShadowY_1 = y;//11.5
        var twohang1 = 1;
        var twoGe = 0;
        for(var ii = 1; ii < 6; ii++){
            if(ii == 6)
            {
                twoShadowX_1 += 17;
                twoShadowY_1 += 11.8;
                twohang1 += 5;
                twoGe += 1;
            }
            that[buildBlock + ii] = ((tx>=((twoShadowX_1+17.5*(ii-twohang1))-8)) && tx<=((twoShadowX_1+17.5*(ii-twohang1))+8) && ty>=(twoShadowY_1-11.5*(ii-twohang1)-8) && ty<=(twoShadowY_1-11.5*(ii-twohang1)+8) && that[shadow+(ii-1+twoGe)].building && that[shadow+(ii+twoGe+4)].building && that[shadow+(ii+twoGe+9)].building && that[shadow+(ii+twoGe+14)].building);
            
            if(that[buildBlock + ii])
            {
                car.buildx=(twoShadowX_1+(ii-twohang1)*17.5);
                car.buildy=(twoShadowY_1-11.5*(ii-twohang1));
                car.block = [];
                car.block.push(that[shadow+(ii-1+twoGe)]);
                car.block.push(that[shadow+(ii+twoGe+4)]);
                car.block.push(that[shadow+(ii+twoGe+9)]);
                car.block.push(that[shadow+(ii+twoGe+14)]);
                car.ids = shadow+(ii-1+twoGe);
                that.sta = true;
                break;
            }
        }
    }

    that.x2x3t = function(x, y, buildBlock, shadow)
    {
        var twoShadowX_1 = x;//17
        var twoShadowY_1 = y;//11.5
        var twohang1 = 1;
        var twoGe = 0;
        for(var ii = 1; ii < 10; ii++){
            if(ii == 4 || ii == 7)
            {
                twoShadowX_1 += 17;
                twoShadowY_1 += 11.8;
                twohang1 += 3;
                twoGe += 2;
            }
            that[buildBlock + ii] = ((tx>=((twoShadowX_1+17.5*(ii-twohang1))-8)) && tx<=((twoShadowX_1+17.5*(ii-twohang1))+8) && ty>=(twoShadowY_1-11.5*(ii-twohang1)-8) && ty<=(twoShadowY_1-11.5*(ii-twohang1)+8) && that[shadow+(ii-1+twoGe)].building && that[shadow+(ii+twoGe)].building && that[shadow+(ii+twoGe+1)].building && that[shadow+(ii+twoGe+4)].building && that[shadow+(ii+twoGe+5)].building && that[shadow+(ii+twoGe+6)].building);
            
            if(that[buildBlock + ii])
            {
                car.buildx=(twoShadowX_1+(ii-twohang1)*17.5);
                car.buildy=(twoShadowY_1-11.5*(ii-twohang1));
                car.block = [];
                car.block.push(that[shadow+(ii-1+twoGe)]);
                car.block.push(that[shadow+(ii+twoGe)]);
                car.block.push(that[shadow+(ii+twoGe+1)]);
                car.block.push(that[shadow+(ii+twoGe+4)]);
                car.block.push(that[shadow+(ii+twoGe+5)]);
                car.block.push(that[shadow+(ii+twoGe+6)]);
                car.ids = shadow+(ii+twoGe+4);
                that.sta = true;
                break;
            }
        }
    }
    that.x2x3f = function(x, y, buildBlock, shadow)
    {
        var twoShadowX_1 = x;//17
        var twoShadowY_1 = y;//11.5
        var twohang1 = 1;
        var twoGe = 0;
        for(var ii = 1; ii < 9; ii++){
            if(ii == 5)
            {
                twoShadowX_1 += 17;
                twoShadowY_1 += 11.8;
                twohang1 += 4;
                twoGe += 1;
            }
            that[buildBlock + ii] = ((tx>=((twoShadowX_1+17.5*(ii-twohang1))-8)) && tx<=((twoShadowX_1+17.5*(ii-twohang1))+8) && ty>=(twoShadowY_1-11.5*(ii-twohang1)-8) && ty<=(twoShadowY_1-11.5*(ii-twohang1)+8) && that[shadow+(ii-1+twoGe)].building && that[shadow+(ii+twoGe)].building && that[shadow+(ii+twoGe+4)].building && that[shadow+(ii+twoGe+5)].building && that[shadow+(ii+twoGe+9)].building && that[shadow+(ii+twoGe+10)].building);
            
            if(that[buildBlock + ii])
            {
                car.buildx=(twoShadowX_1+(ii-twohang1)*17.5);
                car.buildy=(twoShadowY_1-11.5*(ii-twohang1));
                car.block = [];
                car.block.push(that[shadow+(ii-1+twoGe)]);
                car.block.push(that[shadow+(ii+twoGe)]);
                car.block.push(that[shadow+(ii+twoGe+4)]);
                car.block.push(that[shadow+(ii+twoGe+5)]);
                car.block.push(that[shadow+(ii+twoGe+9)]);
                car.block.push(that[shadow+(ii+twoGe+10)]);
                if((car.img.x==804 && car.img.y <= 401.5) || (car.img.x == 821.5 && car.img.y == 390) || (car.img.x==910 && car.img.y == 468.5) || (car.img.x==927.5 && car.img.y <= 457) || (car.img.x==1017 && car.img.y == 538.5) || (car.img.x==1034.5 && car.img.y == 527) || (car.img.x==878 && car.img.y == 626.5) || (car.img.x==895.5 && car.img.y == 615) || (car.img.x==773 && car.img.y == 558.5) || (car.img.x==790.5 && car.img.y == 547) || (car.img.x==666 && car.img.y == 490.5) || (car.img.x==683.5 && car.img.y == 479)){
                    car.ids = shadow+(ii+twoGe+5);
                }else{
                    car.ids = shadow+(ii+twoGe-1);
                }
                that.sta = true;
                break;
            }
        }
    }

    that.x3x5t = function(x, y, buildBlock, shadow)
    {
        var twoShadowX_1 = x;//17
        var twoShadowY_1 = y;//11.5
        var twohang1 = 1;
        var twoGe = 0;
        for(var ii = 1; ii < 3; ii++){
            if(ii == 2)
            {
                twoShadowX_1 += 17;
                twoShadowY_1 += 11.8;
                twohang1 += 1;
                twoGe += 4;
            }
            that[buildBlock + ii] = ((tx>=((twoShadowX_1+17.5*(ii-twohang1))-8)) && tx<=((twoShadowX_1+17.5*(ii-twohang1))+8) && ty>=(twoShadowY_1-11.5*(ii-twohang1)-8) && ty<=(twoShadowY_1-11.5*(ii-twohang1)+8) && that[shadow+(ii-1+twoGe)].building && that[shadow+(ii+twoGe)].building && that[shadow+(ii+twoGe+1)].building && that[shadow+(ii+twoGe+2)].building && that[shadow+(ii+twoGe+3)].building && that[shadow+(ii+twoGe+4)].building && that[shadow+(ii+twoGe+5)].building && that[shadow+(ii+twoGe+6)].building && that[shadow+(ii+twoGe+7)].building && that[shadow+(ii+twoGe+8)].building && that[shadow+(ii+twoGe+9)].building && that[shadow+(ii+twoGe+10)].building && that[shadow+(ii+twoGe+11)].building && that[shadow+(ii+twoGe+12)].building && that[shadow+(ii+twoGe+13)].building);
            
            if(that[buildBlock + ii])
            {
                car.buildx=(twoShadowX_1+(ii-twohang1)*17.5);
                car.buildy=(twoShadowY_1-11.5*(ii-twohang1));
                car.block = [];
                car.block.push(that[shadow+(ii-1+twoGe)]);
                car.block.push(that[shadow+(ii+twoGe)]);
                car.block.push(that[shadow+(ii+twoGe+1)]);
                car.block.push(that[shadow+(ii+twoGe+2)]);
                car.block.push(that[shadow+(ii+twoGe+3)]);
                car.block.push(that[shadow+(ii+twoGe+4)]);
                car.block.push(that[shadow+(ii+twoGe+5)]);
                car.block.push(that[shadow+(ii+twoGe+6)]);
                car.block.push(that[shadow+(ii+twoGe+7)]);
                car.block.push(that[shadow+(ii+twoGe+8)]);
                car.block.push(that[shadow+(ii+twoGe+9)]);
                car.block.push(that[shadow+(ii+twoGe+10)]);
                car.block.push(that[shadow+(ii+twoGe+11)]);
                car.block.push(that[shadow+(ii+twoGe+12)]);
                car.block.push(that[shadow+(ii+twoGe+13)]);
                car.ids = shadow+(ii-1+twoGe);
                that.sta = true;
                break;
            }
        }
    }

    that.x2x2t = function(x, y, buildBlock, shadow)
    {   
        var twosShadowX_5 = x;//17
        var twosShadowY_5 = y;//11.5
        var twoshang5 = 1;
        var twoGe = 0;
        for(var pps = 1; pps < 13; pps++)
        {
            if(pps == 5 || pps == 9)
            {
                twosShadowX_5 += 17;
                twosShadowY_5 += 11.8;
                twoshang5 += 4;
                twoGe += 1;
            }
            that[buildBlock + pps] = ((tx>=((twosShadowX_5+17.5*(pps-twoshang5))-7)) && tx<=((twosShadowX_5+17.5*(pps-twoshang5))+7) && ty>=(twosShadowY_5-11.5*(pps-twoshang5)-7) && ty<=(twosShadowY_5-11.5*(pps-twoshang5)+7) && that[shadow+(pps-1+twoGe)].building && that[shadow+(pps+twoGe)].building && that[shadow+(pps+4+twoGe)].building && that[shadow+(pps+5+twoGe)].building);
            if(that[buildBlock + pps])
            {
                car.buildx=(twosShadowX_5+(pps-twoshang5)*17.5);
                car.buildy=(twosShadowY_5-11.5*(pps-twoshang5));
                car.block = [];
                car.block.push(that[shadow+(pps-1+twoGe)]);
                car.block.push(that[shadow+(pps+twoGe)]);
                car.block.push(that[shadow+(pps+4+twoGe)]);
                car.block.push(that[shadow+(pps+5+twoGe)]);
                car.ids = shadow+(pps-1+twoGe);
                that.sta = true;
                break;
            }
        }
    }

    if(car.size == "1x1"){
        //第五块阴影
        var oneShadowX_5 = 746;//17
        var oneShadowY_5 = 552.5;//11.5
        var hang5 = 1;
        for(var i = 1; i < 21; i++){
            if(i == 6 || i == 11 || i == 16){
                oneShadowX_5 += 17;
                oneShadowY_5 += 11.5;
                hang5 += 5;
            }
            that["build5_" + i] = ((tx>=((oneShadowX_5+17.5*(i-hang5))-8)) && tx<=((oneShadowX_5+17.5*(i-hang5))+8) && ty>=(oneShadowY_5-11.5*(i-hang5)-8) && ty<=(oneShadowY_5-11.5*(i-hang5)+8) && that["guding5_"+(i-1)].building);
            if(that["build5_" + i]){
                car.buildx=(oneShadowX_5+(i-hang5)*17.5);
                car.buildy=(oneShadowY_5-11.5*(i-hang5));
                car.block = [];
                car.block.push(that["guding5_" + (i-1)]);
                car.ids = "guding5_" + (i-1);
                return true;
            }
        }
        //第六块阴影
        var oneShadowX_6 = 639.5;//17
        var oneShadowY_6 = 484.5;//11.5
        var hang6 = 1;
        for(var j = 1; j < 21; j++){
            if(j == 6 || j == 11 || j == 16){
                oneShadowX_6 += 17;
                oneShadowY_6 += 11.5;
                hang6 += 5;
            }
            that["build6_" + j] = ((tx>=((oneShadowX_6+17.5*(j-hang6))-8)) && tx<=((oneShadowX_6+17.5*(j-hang6))+8) && ty>=(oneShadowY_6-11.5*(j-hang6)-8) && ty<=(oneShadowY_6-11.5*(j-hang6)+8) && that["guding6_"+(j-1)].building);
            if(that["build6_" + j]){
                car.buildx=(oneShadowX_6+(j-hang6)*17.5);
                car.buildy=(oneShadowY_6-11.5*(j-hang6));
                car.block = [];
                car.block.push(that["guding6_" + (j-1)]);
                car.ids = "guding6_" + (j-1);
                return true;
            }
        }
        //第四块阴影
        var oneShadowX_4 = 851.5;//17
        var oneShadowY_4 = 620.5;//11.5
        var hang4 = 1;
        for(var m = 1; m < 21; m++){
            if(m == 6 || m == 11 || m == 16){
                oneShadowX_4 += 17;
                oneShadowY_4 += 11.5;
                hang4 += 5;
            }
            that["build4_" + m] = ((tx>=((oneShadowX_4+17.5*(m-hang4))-8)) && tx<=((oneShadowX_4+17.5*(m-hang4))+8) && ty>=(oneShadowY_4-11.5*(m-hang4)-8) && ty<=(oneShadowY_4-11.5*(m-hang4)+8) && that["guding4_"+(m-1)].building);
            if(that["build4_" + m]){
                car.buildx=(oneShadowX_4+(m-hang4)*17.5);
                car.buildy=(oneShadowY_4-11.5*(m-hang4));
                car.block = [];
                car.block.push(that["guding4_" + (m-1)]);
                car.ids = "guding4_" + (m-1);
                return true;
            }
        }
        //第三块阴影
        var oneShadowX_3 = 989.5;//17
        var oneShadowY_3 = 531.5;//11.5
        var hang3 = 1;
        for(var n = 1; n < 21; n++){
            if(n == 6 || n == 11 || n == 16){
                oneShadowX_3 += 17;
                oneShadowY_3 += 11.5;
                hang3 += 5;
            }
            that["build3_" + n] = ((tx>=((oneShadowX_3+17.5*(n-hang3))-8)) && tx<=((oneShadowX_3+17.5*(n-hang3))+8) && ty>=(oneShadowY_3-11.5*(n-hang3)-8) && ty<=(oneShadowY_3-11.5*(n-hang3)+8) && that["guding3_"+(n-1)].building);
            if(that["build3_" + n]){
                car.buildx=(oneShadowX_3+(n-hang3)*17.5);
                car.buildy=(oneShadowY_3-11.5*(n-hang3));
                car.block = [];
                car.block.push(that["guding3_" + (n-1)]);
                car.ids = "guding3_" + (n-1);
                return true;
            }
        }
        //第二块阴影
        var oneShadowX_2 = 883.5;//17
        var oneShadowY_2 = 464.5;//11.5
        var hang2 = 1;
        for(var p = 1; p < 21; p++){
            if(p == 6 || p == 11 || p == 16){
                oneShadowX_2 += 17;
                oneShadowY_2 += 11.5;
                hang2 += 5;
            }
            that["build2_" + p] = ((tx>=((oneShadowX_2+17.5*(p-hang2))-8)) && tx<=((oneShadowX_2+17.5*(p-hang2))+8) && ty>=(oneShadowY_2-11.5*(p-hang2)-8) && ty<=(oneShadowY_2-11.5*(p-hang2)+8) && that["guding2_"+(p-1)].building);
            if(that["build2_" + p]){
                car.buildx=(oneShadowX_2+(p-hang2)*17.5);
                car.buildy=(oneShadowY_2-11.5*(p-hang2));
                car.block = [];
                car.block.push(that["guding2_" + (p-1)]);
                car.ids = "guding2_" + (p-1);
                return true;
            }
        }
        //第一块阴影
        var oneShadowX_1 = 777.5;//17
        var oneShadowY_1 = 395.5;//11.5
        var hang1 = 1;
        for(var t = 1; t < 21; t++){
            if(t == 6 || t == 11 || t == 16){
                oneShadowX_1 += 17;
                oneShadowY_1 += 11.5;
                hang1 += 5;
            }
            that["build1_" + t] = ((tx>=((oneShadowX_1+17.5*(t-hang1))-8)) && tx<=((oneShadowX_1+17.5*(t-hang1))+8) && ty>=(oneShadowY_1-11.5*(t-hang1)-8) && ty<=(oneShadowY_1-11.5*(t-hang1)+8) && that["guding1_"+(t-1)].building);
            if(that["build1_" + t]){
                car.buildx=(oneShadowX_1+(t-hang1)*17.5);
                car.buildy=(oneShadowY_1-11.5*(t-hang1));
                car.block = [];
                car.block.push(that["guding1_" + (t-1)]);
                car.ids = "guding1_" + (t-1);
                return true;
            }
        }
        // for(var i = 1; i < 6; i++){
        //     that["build1_" + i] = ((tx>=((763+17.5*(i-1))-5)) && tx<=((763+17.5*(i-1))+5) && ty>=(564-11.5*(i-1)-5) && ty<=(564-11.5*(i-1)+5));
        //     if(that["build1_" + i]){car.buildx=(763+(i-1)*17.5);car.buildy=(564-11.5*(i-1));return true;}
        // }
        
        //746 552.5
        //762.5 541
        //780
        //797.5
        //815
    }else if(car.size == "1x2"){
        if(car.img.scale.x>0)
        {
            //第1块阴影
            that.x1x2f(786, 404.5, "build21_", "guding1_");
            //第2块阴影
            that.x1x2f(892, 474.5, "build22_", "guding2_");
            //第3块阴影
            that.x1x2f(997, 542.5, "build23_", "guding3_");
            //第4块阴影
            that.x1x2f(859, 630.5, "build24_", "guding4_");
            //第5块阴影
            that.x1x2f(753, 563.5, "build25_", "guding5_");
            //第6块阴影
            that.x1x2f(647.5, 495.5, "build26_", "guding6_");
        }else if(car.img.scale.x < 0){
            
            //第1块阴影
            that.x1x2t(788, 417.5, "build2s1_", "guding1_");
            //第2块阴影
            that.x1x2t(894, 484.5, "build2s2_", "guding2_");
            //第3块阴影
            that.x1x2t(1000, 552.5, "build2s3_", "guding3_");
            //第4块阴影
            that.x1x2t(861, 641.5, "build2s4_", "guding4_");
            //第5块阴影
            that.x1x2t(755, 573.5, "build2s5_", "guding5_");
            //第6块阴影
            that.x1x2t(649, 506.5, "build2s6_", "guding6_");
        }
        // that["guding1_"+(ii-1+twoGe)].building && that["guding1_"+(ii+twoGe)]
    }else if(car.size == "1x4"){
        if(car.img.scale.x>0)
        {
            //第1块阴影
            that.x1x4t(804, 388.5, "build1x4_1_", "guding1_");
            //第2块阴影
            that.x1x4t(910, 457.5, "build1x4_2_", "guding2_");
            //第3块阴影
            that.x1x4t(1016, 525.5, "build1x4_3_", "guding3_");
            //第4块阴影
            that.x1x4t(877, 613.5, "build1x4_4_", "guding4_");
            //第5块阴影
            that.x1x4t(772, 545.5, "build1x4_5_", "guding5_");
            //第6块阴影
            that.x1x4t(665, 477.5, "build1x4_6_", "guding6_");
        }else if(car.img.scale.x<0)
        {
            //第1块阴影
            that.x1x4f(805, 422.5, "build1x4f_1_", "guding1_");
            //第2块阴影
            that.x1x4f(911, 490.5, "build1x4f_2_", "guding2_");
            //第3块阴影
            that.x1x4f(1017, 558.5, "build1x4f_3_", "guding3_");
            //第4块阴影
            that.x1x4f(878, 647.5, "build1x4f_4_", "guding4_");
            //第5块阴影
            that.x1x4f(772, 579.5, "build1x4f_5_", "guding5_");
            //第6块阴影
            that.x1x4f(667, 511.5, "build1x4f_6_", "guding6_");
        }
    }else if(car.size == "2x3"){
        if(car.img.scale.x>0)
        {
            //第1块阴影
            that.x2x3t(804, 390.5, "build2x3t_1_", "guding1_");
            //第2块阴影
            that.x2x3t(910, 459.5, "build2x3t_2_", "guding2_");
            //第3块阴影
            that.x2x3t(1016, 527.5, "build2x3t_3_", "guding3_");
            //第4块阴影
            that.x2x3t(878, 615.5, "build2x3t_4_", "guding4_");
            //第5块阴影
            that.x2x3t(772, 547.5, "build2x3t_5_", "guding5_");
            //第6块阴影
            that.x2x3t(666, 479.5, "build2x3t_6_", "guding6_");
        }else if(car.img.scale.x<0){
            //第1块阴影
            that.x2x3f(804, 401.5, "build2x3f_1_", "guding1_");
            //第2块阴影
            that.x2x3f(910, 468.5, "build2x3f_2_", "guding2_");
            //第3块阴影
            that.x2x3f(1017, 538.5, "build2x3f_3_", "guding3_");
            //第4块阴影
            that.x2x3f(878, 626.5, "build2x3f_4_", "guding4_");
            //第5块阴影
            that.x2x3f(773, 558.5, "build2x3f_5_", "guding5_");
            //第6块阴影
            that.x2x3f(666, 490.5, "build2x3f_6_", "guding6_");
        }
    }else if(car.size == "3x5"){
        if(car.img.scale.x>0){
            //第1块阴影
            that.x3x5t(830, 383.3, "build3x5t_1_", "guding1_");
            //第2块阴影
            that.x3x5t(937, 453.3, "build3x5t_2_", "guding2_");
            //第3块阴影
            that.x3x5t(1044, 521.5, "build3x5t_3_", "guding3_");
            //第4块阴影
            that.x3x5t(905, 610.5, "build3x5t_4_", "guding4_");
            //第5块阴影
            that.x3x5t(798, 541.5, "build3x5t_5_", "guding5_");
            //第6块阴影
            that.x3x5t(693, 473.5, "build3x5t_6_", "guding6_");
        }
    }else if(car.size == "2x2"){
        //第1块阴影
        that.x2x2t(796, 411.5, "build2x2t_1_", "guding1_");
        //第2块阴影
        that.x2x2t(900.5, 479.8, "build2x2t_2_", "guding2_");
        //第3块阴影
        that.x2x2t(1007.5, 547.8, "build2x2t_3_", "guding3_");
        //第4块阴影
        that.x2x2t(868.5, 636.8, "build2x2t_4_", "guding4_");
        //第5块阴影
        that.x2x2t(762.5, 568.8, "build2x2t_5_", "guding5_");
        //第6块阴影
        that.x2x2t(655.5, 500.8, "build2x2t_6_", "guding6_");
    }
    
    
    return that.sta;
    
}