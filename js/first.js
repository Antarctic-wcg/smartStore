var firstState = function(){
    this.create = function(){
        game.stage.backgroundColor = "#3366FF"
        var logo = game.add.image(game.width/2, game.height/3, "orangeCar");
        logo.scale.set(0.5);
        logo.anchor.set(0.5);
        var weChatBtn = game.add.button(100, game.height-250, "redCar");
        weChatBtn.scale.set(0.3);
        weChatBtn.anchor.set(0.5);
        var wulingBtn = game.add.button(220, game.height-250, "redCar");
        wulingBtn.scale.set(0.3);
        wulingBtn.anchor.set(0.5);
        
    }
}