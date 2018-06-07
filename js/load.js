var loaderState = function(game){
    var preloadSprite;
    var text;
    this.init = function(){
        preloadSprite = game.add.sprite(game.world.centerX, game.world.centerY, "loading");
        preloadSprite.anchor.set(0.5);
        var plan = 0;
        text = game.add.text(game.world.centerX, game.world.centerY - 30, plan+"%", { font: "40px Arial", fill: "#ff0044", align: "center" });
        text.anchor.set(0.5);
    }
    this.preload = function(a, b){
        game.load.setPreloadSprite(preloadSprite, 0);//第二个参数值为零意味着雪碧将水平裁剪，值1表示其垂
        game.load.image("orangeCar","assets/320c.png");
        // game.load.image("redCar","assets/530h.png");
        game.load.image("wulingCar", "assets/wulh.png");
        game.load.image("floor", "assets/1540_990.png");//地板
        game.load.image("bg1", "assets/bg1.jpg");//背景
        game.load.image("building", "assets/building.png");
        game.load.image("zhuangshi1", "assets/zs1.png");
        game.load.image("zhuangshi2", "assets/zs2.png");
        game.load.image("zhuangshi3", "assets/zs3.png");
        game.load.image("engine", "assets/yqzt.png");//引擎展台
        game.load.image("1x1ccz", "assets/1x1ccz.png");
        game.load.image("1x1dz", "assets/1x1dz.png");
        game.load.image("1x1fcc", "assets/1x1fcc.png");
        game.load.image("1x1fsz", "assets/1x1fsz.png");
        game.load.image("1x1ggp", "assets/1x1ggp.png");
        game.load.image("1x1ljt", "assets/1x1ljt.png");
        game.load.image("1x1ycc", "assets/1x1ycc.png");
        game.load.image("1x1ydz", "assets/1x1ydz.png");
        game.load.image("1x1ysz", "assets/1x1ysz.png");
        game.load.image("1x1gezi", "assets/1x1gezi.png");//格子
        game.load.image("yuan", "assets/yuan.png");//圆
        game.load.image("1x2dz", "assets/1x2dz.png");
        game.load.image("1x2fcc", "assets/1x2fcc.png");
        game.load.image("1x2ggp", "assets/1x2ggp.png");
        game.load.image("1x4ggp", "assets/1x4ggp.png");
        game.load.image("1x4hyp", "assets/1x4hyp.png");//未修改
        game.load.image("1x4hyp1", "assets/1x4hyp1.png");
        game.load.image("2x2rk", "assets/2x2rk.png");
        game.load.image("2x2znAI", "assets/2x2znAI.png");
        game.load.image("2x3czt", "assets/2x3czt.png");
        game.load.image("2x3qsj", "assets/2x3qsj.png");
        game.load.image("2x3qt", "assets/2x3qt.png");
        game.load.image("3x5Lv1zt", "assets/3x5Lv1zt.png");
        game.load.image("3x5Lv2zt", "assets/3x5Lv2zt.png");
        game.load.image("3x5Lv3zt", "assets/3x5Lv3zt.png");
        game.load.image("3x5building", "assets/3x5building.png");
        game.load.image("320h", "assets/320h.png");
        game.load.image("320l", "assets/320l.png");
        //按钮图片组
        game.load.image("queren", "assets/queren.PNG");
        game.load.image("quxiao", "assets/quxiao.PNG");
        game.load.image("xuanzhuan", "assets/xuanzhuan.PNG");
        game.load.image("ckBtn", "assets/ckBtn.PNG");
        game.load.image("moveBtn", "assets/moveBtn.PNG");
        game.load.image("chaichuBtn", "assets/chaichuBtn.PNG");
        game.load.image("dgou", "assets/dgou.PNG");
        game.load.image("dcha", "assets/dcha.PNG");
        //加载音频文件
        game.load.audio("zhuti", "assets/normalback.mp3");
        game.load.audio("crash1", "assets/crash1.mp3");

        game.load.image("ceshi", "assets/3400_2210.jpg");

        
        game.load.onFileComplete.add(function(plan){
            text.text = plan + "%";
        })
    }
    this.create = function(){
        game.state.start("style");
        // game.state.start("home");
        // game.state.start("first");
    }
}