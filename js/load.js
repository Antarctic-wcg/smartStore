var loaderState = function(game){
    this.preload = function(a, b){
        var preloadSprite = game.add.sprite(game.world.width/2, game.world.height/2, "loading");
        preloadSprite.anchor.set(0.5);
        game.load.setPreloadSprite(preloadSprite, 0);//第二个参数值为零意味着雪碧将水平裁剪，值1表示其垂
        game.load.image("orangeCar","assets/320c.png");
        game.load.image("redCar","assets/530h.png");
        game.load.image("wulingCar", "assets/wulh.png");
        game.load.image("floor", "assets/1540_990.png");
        game.load.image("building", "assets/building.png");
        game.load.image("zhuangshi1", "assets/zs1.png");
        game.load.image("zhuangshi2", "assets/zs2.png");
        game.load.image("zhuangshi3", "assets/zs3.png");
        game.load.image("engine", "assets/yqzt.png");//引擎展台
        //按钮图片组
        game.load.image("queren", "assets/queren.PNG");
        game.load.image("quxiao", "assets/quxiao.PNG");
        game.load.image("xuanzhuan", "assets/xuanzhuan.PNG");
        game.load.image("ckBtn", "assets/ckBtn.PNG");
        game.load.image("moveBtn", "assets/moveBtn.PNG");
        game.load.image("chaichuBtn", "assets/chaichuBtn.PNG");
        game.load.image("dgou", "assets/dgou.PNG");
        game.load.image("dcha", "assets/dcha.PNG");

        game.load.image("ceshi", "assets/3400_2210.jpg");
        // game.load.onFileComplete.add(function(a, b, c){
        //     console.log(a, b, c);
        // })
    }
    this.create = function(){
        game.state.start("home");
        // game.state.start("first");
    }
}