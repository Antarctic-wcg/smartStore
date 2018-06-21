var showMenu = function(that){
    //点击呼出菜单
    var menu = document.getElementById("menu");
    var bottom = document.getElementById("bottom");
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
        {"src":"assets/2x2znAI.png", "sprite":"2x2znAI","specifications":"2x2"},
        {"src":"assets/3x5Lv1zt.png", "sprite":"3x5Lv1zt","specifications":"3x5"},
        {"src":"assets/2x3qt.png", "sprite":"2x3qt","specifications":"2x3"},
        {"src":"assets/2x3qsj.png", "sprite":"2x3qsj","specifications":"2x3"},
        {"src":"assets/2x3czt.png", "sprite":"2x3czt","specifications":"2x3"},
        {"src":"assets/1x4hyp1.png", "sprite":"1x4hyp1","specifications":"1x4"},
        {"src":"assets/1x4ggp.png", "sprite":"1x4ggp","specifications":"1x4"},
        {"src":"assets/1x2ggp.png", "sprite":"1x2ggp","specifications":"1x2"},
        {"src":"assets/1x2fcc.png", "sprite":"1x2fcc","specifications":"1x2"},
        {"src":"assets/1x2dz.png", "sprite":"1x2dz","specifications":"1x2"},
        {"src":"assets/1x1ccz.png", "sprite":"1x1ccz","specifications":"1x1"},
        {"src":"assets/1x1dz.png", "sprite":"1x1dz","specifications":"1x1"},
        {"src":"assets/1x1fcc.png", "sprite":"1x1fcc","specifications":"1x1"},
        {"src":"assets/1x1fsz.png", "sprite":"1x1fsz","specifications":"1x1"},
        {"src":"assets/1x1ggp.png", "sprite":"1x1ggp","specifications":"1x1"},
        {"src":"assets/1x1ljt.png", "sprite":"1x1ljt","specifications":"1x1"},
        {"src":"assets/1x1ycc.png", "sprite":"1x1ycc","specifications":"1x1"},
        {"src":"assets/1x1ydz.png", "sprite":"1x1ydz","specifications":"1x1"},
        {"src":"assets/1x1ysz.png", "sprite":"1x1ysz","specifications":"1x1"},
        {"src":"assets/1x1gezi.png", "sprite":"1x1gezi","specifications":"1x1"},
        {"src":"assets/1x2dz.png", "sprite":"1x2dz","specifications":"1x2"},
        {"src":"assets/1x4ggp.png", "sprite":"1x4ggp","specifications":"1x4"},
        {"src":"assets/2x2rk.png", "sprite":"2x2rk","specifications":"2x2"},
        {"src":"assets/2x3czt.png", "sprite":"2x3czt","specifications":"2x3"},
        {"src":"assets/3x5Lv1zt.png", "sprite":"3x5Lv1zt","specifications":"3x5"},
        {"src":"assets/2x2znAI.png", "sprite":"2x2znAI","specifications":"2x2"},
        {"src":"assets/1x1ydz.png", "sprite":"1x1ydz","specifications":"1x1"},
        {"src":"assets/1x1ysz.png", "sprite":"1x1ysz","specifications":"1x1"},
        {"src":"assets/1x1ysz.png", "sprite":"1x1ysz","specifications":"1x1"},
        {"src":"assets/1x1ysz.png", "sprite":"1x1ysz","specifications":"1x1"},
        {"src":"assets/1x1ccz.png", "sprite":"1x1ccz","specifications":"1x1"}
    ];

    if(heng[2].children.length == 0){//无后台
        for(var i = 0; i<gnengData.length; i++){
            var dom = document.createElement("div");
            dom.setAttribute("class","menu1");
            dom.setAttribute("id","build1");
            dom.setAttribute("id","gn"+i);
            dom.innerHTML = '<div class="h1"><img src="'+gnengData[i].src+'" height="100%" alt=""></div><div class="size">'+gnengData[i].specifications+'</div><div class="xqJbi"><em>10000</em></div><div class="xqNliang"><em>10</em></div>';
            heng[2].appendChild(dom);
        }
    }

    if(heng[1].children.length == 0){//无后台
        for(var i = 0; i<gnengData.length; i++){
            var dom = document.createElement("div");
            dom.setAttribute("class","menu1");
            dom.setAttribute("id","build1");
            dom.setAttribute("id","zshi"+i);
            dom.innerHTML = '<div class="h1"><img src="'+gnengData[i].src+'" height="100%" alt=""></div><div class="size">'+gnengData[i].specifications+'</div><div class="xqJbi"><em>10000</em></div><div class="xqNliang"><em>10</em></div>';
            heng[1].appendChild(dom);
        }
    }

    if(heng[0].children.length == 0){//无后台
        for(var i = 0; i<gnengData.length; i++){
            var dom = document.createElement("div");
            dom.setAttribute("class","menu1");
            dom.setAttribute("id","build1");
            dom.setAttribute("id","dibang"+i);
            dom.innerHTML = '<div class="h1"><img src="'+gnengData[i].src+'" height="100%" alt=""></div><div class="size">'+gnengData[i].specifications+'</div><div class="xqJbi"><em>10000</em></div><div class="xqNliang"><em>10</em></div>';
            heng[0].appendChild(dom);
        }
    }
    
    // var boddy = document.getElementsByTagName("body");
    // var menu1 = document.getElementsByClassName("menu1");
    // var menuWidth = parseInt(window.getComputedStyle(menu1[0]).width) + 17;
    // var fontSize = parseInt(window.getComputedStyle(boddy[0]).fontSize);
    
    

    menu.setAttribute("style", "display: block;");
    
    //点击关闭按钮关闭菜单
    var btn = document.getElementById("back");
    btn.onclick = function(){
        menu.setAttribute("style", "display: none;");
        $("#container canvas").css("filter","blur(0px)");
    }
    
    
    //选择建筑
    //建筑一
    for(let j=0; j < gnengData.length; j++){
        window["gn"+j] = document.getElementById("gn"+j);
        window["gn"+j].onclick = function(){
            that.clickNum += 1;
            that["car"+that.clickNum] = game.add.sprite(that.floor.x+50, that.floor.y, gnengData[j].sprite);
            that["car"+that.clickNum].anchor.set(0.5);
            that["car"+that.clickNum].scale.set(0.5);
            // redCar.tint = 0xFF3366;
            that["car"+that.clickNum].inputEnabled = true;//开启输入事件
            that["car"+that.clickNum].input.enableDrag(false);//拖拽
            // redCar.input.enableSnap(4, 3);
            that["gn" + that.clickNum] = game.add.sprite();
            that["gn" + that.clickNum].Show = true;
            that["gn" + that.clickNum].id = ("gn" + that.clickNum);
            that["car"+that.clickNum].inputEnabled = true;//开启输入事件
            that["gn" + that.clickNum].img = that["car"+that.clickNum];
            that["car"+that.clickNum].input.pixelPerfectClick = true;//对象使用完美像素检查
            that["car"+that.clickNum].input.pixelPerfectOver = true;//指针一上去使用完美像素检查

            // that["car"+that.clickNum].zindex = 0;
            menu.setAttribute("style", "display: none;");
            
            that["gn" + that.clickNum].size = gnengData[j].specifications;//物体是几X几
            that.carGroup.addChild(that["gn" + that.clickNum]);
            buts(that, that["gn" + that.clickNum]);

            // that["size" + that.clickNum] = game.add.sprite(that.floor.x, that.floor.y, "yuan");
            // that["size" + that.clickNum].scale.set(0.5);
            // that["size" + that.clickNum].anchor.set(0.5);
            
        }
    }
    //功能类菜单按钮
    btn1.addEventListener("click", function(){
        this.setAttribute("style", "background:url('./assets/tabBg.png')");
        $(".gn:eq(0)>img").attr("src","./assets/gneng2.png");
        $(".gn:eq(1)>img").attr("src","./assets/zshilei2.png");
        $(".gn:eq(2)>img").attr("src","./assets/dibang2.png");
        btn2.setAttribute("style", "background:none");
        btn3.setAttribute("style", "background:none");
        Gneng.setAttribute("style", "z-index: 999;")
        Zshi.setAttribute("style", "z-index: 1;visibility: hidden;")
        floor.setAttribute("style", "z-index: 1;visibility: hidden;")
    })
    //装饰类菜单按钮
    btn2.addEventListener("click", function(){
        this.setAttribute("style", "background:url('./assets/tabBg.png')");
        btn1.setAttribute("style", "background:none");
        btn3.setAttribute("style", "background:none");
        $(".gn:eq(0)>img").attr("src","./assets/gneng1.png");
        $(".gn:eq(1)>img").attr("src","./assets/zshilei1.png");
        $(".gn:eq(2)>img").attr("src","./assets/dibang2.png");
        Gneng.setAttribute("style", "z-index: 1;visibility: hidden;")
        Zshi.setAttribute("style", "z-index: 999;")
        floor.setAttribute("style", "z-index: 1;visibility: hidden;")
    })
    //地板类菜单按钮
    btn3.addEventListener("click", function(){
        this.setAttribute("style", "background:url('./assets/tabBg.png')");
        btn2.setAttribute("style", "background:none");
        btn1.setAttribute("style", "background:none");
        $(".gn:eq(0)>img").attr("src","./assets/gneng1.png");
        $(".gn:eq(1)>img").attr("src","./assets/zshilei2.png");
        $(".gn:eq(2)>img").attr("src","./assets/dibang1.png");
        Gneng.setAttribute("style", "z-index: 1;visibility: hidden;")
        Zshi.setAttribute("style", "z-index: 1;visibility: hidden;")
        floor.setAttribute("style", "z-index: 999;")
    })
    // heng[2].setAttribute("style","max-height: "+(Gneng.offsetHeight-96-139)+"px");
    // console.log(Gneng.offsetHeight);
    // console.log(menu.offsetTop)
    // bottom.setAttribute("style","top:"+(32)+"px;");
    var lineHeight = $(".h2").height();
    $(".h2").css("line-height",lineHeight+"px");

    // 自定义滚动条
    $("#heng3").scrollTop(200000);
    var so3 = $("#heng3").scrollTop()-1;
    $("#heng3").scrollTop(0);
    $("#heng3").scroll(function(){
        $("#gun3").css("top",($("#scroll3").height()-$("#gun3").height())*($(this).scrollTop()/so3)+"px")
    })

    $("#heng2").scrollTop(200000);
    var so2 = $("#heng2").scrollTop()-1;
    $("#heng2").scrollTop(0);
    $("#heng2").scroll(function(){
        $("#gun2").css("top",($("#scroll2").height()-$("#gun2").height())*($(this).scrollTop()/so2)+"px")
    })

    $("#heng1").scrollTop(200000);
    var so1 = $("#heng1").scrollTop()-1;
    $("#heng1").scrollTop(0);
    $("#heng1").scroll(function(){
        $("#gun1").css("top",($("#scroll1").height()-$("#gun1").height())*($(this).scrollTop()/so1)+"px")
    })
}