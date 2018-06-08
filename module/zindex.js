var zindex = function(item, that){
    // console.log(that.zindex);
    that.imgIndex = function(itemImg,gezi){
        // console.log(itemImg.zindex);
        switch (gezi) {
            case 0:
                itemImg.zindex = 4;
                break;
            case 1:
                itemImg.zindex = 3;
                break;
            case 2:
                itemImg.zindex = 2;
                break;
            case 3:
                itemImg.zindex = 1;
                break;
            case 4:
                itemImg.zindex = 0;
                break;
            case 5:
                itemImg.zindex = 9;
                break;
            case 6:
                itemImg.zindex = 8;
                break;
            case 7:
                itemImg.zindex = 7;
                break;
            case 8:
                itemImg.zindex = 6;
                break;
            case 9:
                itemImg.zindex = 5;
                break;
            case 10:
                itemImg.zindex = 14;
                break;
            case 11:
                itemImg.zindex = 13;
                break;
            case 12:
                itemImg.zindex = 12;
                break;
            case 13:
                itemImg.zindex = 11;
                break;
            case 14:
                itemImg.zindex = 10;
                break;
            case 15:
                itemImg.zindex = 19;
                break;
            case 16:
                itemImg.zindex = 18;
                break;
            case 17:
                itemImg.zindex = 17;
                break;
            case 18:
                itemImg.zindex = 16;
                break;
            case 19:
                itemImg.zindex = 15;
                break;
        }
    }
    if(item.ids){
        // console.log(item.ids.slice(0, 7));
        if(item.ids.slice(0, 7) == "guding1")
        {
            if(that.Zindex1.getChildAt(item) == undefined)
            {
                item.img.gezi = parseInt(item.ids.slice(8));
                that.imgIndex(item.img, item.img.gezi);
                that.Zindex1.addChild(item.img);
            }
        }else if(item.ids.slice(0, 7) == "guding2"){
            if(that.Zindex2.getChildAt(item) == undefined)
            {
                item.img.gezi = parseInt(item.ids.slice(8));
                that.imgIndex(item.img, item.img.gezi);
                that.Zindex1.addChild(item.img);
            }
        }else if(item.ids.slice(0, 7) == "guding3"){
            if(that.Zindex3.getChildAt(item) == undefined)
            {
                item.img.gezi = parseInt(item.ids.slice(8));
                that.imgIndex(item.img, item.img.gezi);
                that.Zindex1.addChild(item.img);
            }
        }else if(item.ids.slice(0, 7) == "guding4"){
            if(that.Zindex4.getChildAt(item) == undefined)
            {
                item.img.gezi = parseInt(item.ids.slice(8));
                that.imgIndex(item.img, item.img.gezi);
                that.Zindex1.addChild(item.img);
            }
        }else if(item.ids.slice(0, 7) == "guding5"){
            if(that.Zindex5.getChildAt(item) == undefined)
            {
                item.img.gezi = parseInt(item.ids.slice(8));
                that.imgIndex(item.img, item.img.gezi);
                that.Zindex1.addChild(item.img);
            }
        }else if(item.ids.slice(0, 7) == "guding6"){
            if(that.Zindex6.getChildAt(item) == undefined)
            {
                item.img.gezi = parseInt(item.ids.slice(8));
                that.imgIndex(item.img, item.img.gezi);
                that.Zindex1.addChild(item.img);
                
            }
        }
    }

    
}