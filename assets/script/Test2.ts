const {ccclass, property} = cc._decorator;
@ccclass
export default class Test2 extends cc.Component {
    @property(cc.Camera)
    camera: cc.Camera = null;

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    _canvas: any = null;
    texture: any  = null;
    start () {
        // 对图片进行灰度处理
        this.sprite.setState(1);
        this.init();
        this.scheduleOnce(() => {
            this.createSprite();
            var img = this.initImage();
            this.showSprite(img);
        }, 1);
    }

    init() {
        let texture = new cc.RenderTexture();

        let gl = cc.game["_renderContext"];
       
        texture.initWithSize(this.sprite.node.width, this.sprite.node.height, gl.STENCIL_INDEX8);
        this.camera.targetTexture = texture;
        this.camera.node.position = this.sprite.node.position;
        this.texture  = texture;
        
    }

    initImage() {
        var dataURL = this._canvas.toDataURL('image/png');
        var img = document.createElement('img');
        img.src = dataURL;
        return img;
    }
  
    createSprite() {
        let width = this.texture.width;
        let height = this.texture.height;
        this.sprite.dstBlendFactor = cc.macro.ZERO;
        if (!this._canvas) {
            this._canvas = document.createElement('canvas');

            this._canvas.width = width;
            this._canvas.height = height;
        }
        else {
            this.clearCanvas();
        }
        let ctx = this._canvas.getContext('2d');
        this.camera.render();
      
        // 左上的为原点(一个像素存 4个 格子, 分别代表着 R G B A)
        let data: Uint8Array = this.texture.readPixels();

        

        // write the render data
        let rowBytes = width * 4; 

        for (let row = 0; row < height; row++) {
            let srow = height - 1 - row;
            // let srow =  row;
            /**
             * 1. 以指定的尺寸（以像素计）创建新的 ImageData 对象：
             * @param width ImageData 对象的宽度，以像素计。
             * @param height ImageData 对象的高度，以像素计。
             * 
             * 2. 创建与指定的另一个 ImageData 对象尺寸相同的新 ImageData 对象（不会复制图像数据）：
             * @param imageData ImageData 对象
             */
            let imageData = ctx.createImageData(width, 1);

            // r  g  b a
            let start = srow * (width) * 4;
            for (let i = 0; i < rowBytes; i++) {
                imageData.data[i] = data[start + i];
            }

            for (let offset = 0; offset< imageData.width % 4; offset++) {
                let idx = offset * 4;
                
                if (imageData.data[idx] === 0 &&  imageData.data[idx + 1] === 0 &&   imageData.data[idx + 2] === 0 &&  imageData.data[idx + 3] === 255) {
                    imageData.data[idx] = 0;
                    imageData.data[idx + 1] = 0;
                    imageData.data[idx + 2] = 0;
                    imageData.data[idx + 3] = 255;
                } else {
                    imageData.data[idx] = 0;
                    imageData.data[idx + 1] = 0;
                    imageData.data[idx + 2] = 0;
                    imageData.data[idx + 3] = 0;
                }
            }
            /**
             * 将图像数据（从指定的 ImageData 对象）放回画布上
             * @param imageData 规定要放回画布的 ImageData 对象
             * @param x	ImageData 对象左上角的 x 坐标，以像素计。
             * @param y	ImageData 对象左上角的 y 坐标，以像素计。
             * @param dirtyX	可选。水平值（x），以像素计，在画布上放置图像的位置。
             * @param dirtyY	可选。水平值（y），以像素计，在画布上放置图像的位置。
             * @param dirtyWidth	可选。在画布上绘制图像所使用的宽度。
             * @param dirtyHeight	可选。在画布上绘制图像所使用的高度。
             */
            ctx.putImageData(imageData, 0, row);
            this.sprite.dstBlendFactor = cc.macro.ONE_MINUS_SRC_ALPHA;
        }
        return this._canvas;
    }

    showSprite(img) {
        let texture = new cc.Texture2D();
        texture.initWithElement(img);

        let spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);

        let node = new cc.Node();
        let sprite = node.addComponent(cc.Sprite)
         
        sprite.srcBlendFactor = cc.macro.SRC_ALPHA;
        sprite.dstBlendFactor = cc.macro.ONE_MINUS_SRC_ALPHA;
     
        sprite.spriteFrame = spriteFrame;

        node.zIndex = cc.macro.MAX_ZINDEX;
        node.parent = cc.director.getScene();
        // set position
        let width = cc.winSize.width;
        let height = cc.winSize.height;
        node.x = width / 2;
        node.y = height / 2;
        node.on(cc.Node.EventType.TOUCH_START, () => {
            node.parent = null;
            node.destroy();
        });

        this.captureAction(node, width, height);
    
    }
    captureAction(node, width, height) {
        let scaleAction = cc.scaleTo(1,1);
        let targetPos = cc.v2(width - width / 6,  height / 4);
        let moveAction = cc.moveTo(1, targetPos); 
        let spawn = cc.spawn(scaleAction, moveAction);
        node.runAction(spawn);
    }

    clearCanvas() {
        let ctx = this._canvas.getContext('2d');
        ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}
