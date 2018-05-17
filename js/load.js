var loaderState = function(game){
    this.preload = function(a, b){
        var preloadSprite = game.add.sprite(13, game.height/2, "loading");
        game.load.setPreloadSprite(preloadSprite, 0);//第二个参数值为零意味着雪碧将水平裁剪，值1表示其垂
        game.load.image("orangeCar","assets/320c.png");
        game.load.image("redCar", "assets/530h.PNG");
        game.load.image("wulingCar", "assets/wulh.PNG");
        game.load.image("floor", "assets/1540_990.PNG");
        game.load.image("building", "assets/building.PNG");
        game.load.image("zhuangshi1", "assets/zs1.PNG");
        game.load.image("zhuangshi2", "assets/zs2.PNG");
        game.load.image("zhuangshi3", "assets/zs3.PNG");
        game.load.image("engine", "assets/yqzt.png");//引擎展台
        //按钮图片组
        game.load.image("queren", "assets/queren.png");
        game.load.image("quxiao", "assets/quxiao.png");
        game.load.image("xuanzhuan", "assets/xuanzhuan.png");
        game.load.image("ckBtn", "assets/ckBtn.png");
        game.load.image("moveBtn", "assets/moveBtn.png");
        game.load.image("chaichuBtn", "assets/chaichuBtn.png");

        game.load.image("ceshi", "assets/3400_2210.JPG");
    }
    this.create = function(){
        game.state.start("home");
        // game.state.start("first");
    }
}