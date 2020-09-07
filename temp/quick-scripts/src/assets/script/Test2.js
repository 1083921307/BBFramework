"use strict";
cc._RF.push(module, 'ed616WOhoNMzLFdwOy5mM1Z', 'Test2');
// script/Test2.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Test2 = /** @class */ (function (_super) {
    __extends(Test2, _super);
    function Test2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.sprite = null;
        _this._canvas = null;
        _this.texture = null;
        return _this;
    }
    Test2.prototype.start = function () {
        var _this = this;
        // 对图片进行灰度处理
        this.sprite.setState(1);
        this.init();
        this.scheduleOnce(function () {
            _this.createSprite();
            var img = _this.initImage();
            _this.showSprite(img);
        }, 1);
    };
    Test2.prototype.init = function () {
        var texture = new cc.RenderTexture();
        var gl = cc.game["_renderContext"];
        texture.initWithSize(this.sprite.node.width, this.sprite.node.height, gl.STENCIL_INDEX8);
        this.camera.targetTexture = texture;
        this.camera.node.position = this.sprite.node.position;
        this.texture = texture;
    };
    Test2.prototype.initImage = function () {
        var dataURL = this._canvas.toDataURL('image/png');
        var img = document.createElement('img');
        img.src = dataURL;
        return img;
    };
    Test2.prototype.createSprite = function () {
        var width = this.texture.width;
        var height = this.texture.height;
        this.sprite.dstBlendFactor = cc.macro.ZERO;
        if (!this._canvas) {
            this._canvas = document.createElement('canvas');
            this._canvas.width = width;
            this._canvas.height = height;
        }
        else {
            this.clearCanvas();
        }
        var ctx = this._canvas.getContext('2d');
        this.camera.render();
        // 左上的为原点(一个像素存 4个 格子, 分别代表着 R G B A)
        var data = this.texture.readPixels();
        // write the render data
        var rowBytes = width * 4;
        for (var row = 0; row < height; row++) {
            var srow = height - 1 - row;
            // let srow =  row;
            /**
             * 1. 以指定的尺寸（以像素计）创建新的 ImageData 对象：
             * @param width ImageData 对象的宽度，以像素计。
             * @param height ImageData 对象的高度，以像素计。
             *
             * 2. 创建与指定的另一个 ImageData 对象尺寸相同的新 ImageData 对象（不会复制图像数据）：
             * @param imageData ImageData 对象
             */
            var imageData = ctx.createImageData(width, 1);
            // r  g  b a
            var start = srow * (width) * 4;
            for (var i = 0; i < rowBytes; i++) {
                imageData.data[i] = data[start + i];
            }
            for (var offset = 0; offset < imageData.width % 4; offset++) {
                var idx = offset * 4;
                if (imageData.data[idx] === 0 && imageData.data[idx + 1] === 0 && imageData.data[idx + 2] === 0 && imageData.data[idx + 3] === 255) {
                    imageData.data[idx] = 0;
                    imageData.data[idx + 1] = 0;
                    imageData.data[idx + 2] = 0;
                    imageData.data[idx + 3] = 255;
                }
                else {
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
    };
    Test2.prototype.showSprite = function (img) {
        var texture = new cc.Texture2D();
        texture.initWithElement(img);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.srcBlendFactor = cc.macro.SRC_ALPHA;
        sprite.dstBlendFactor = cc.macro.ONE_MINUS_SRC_ALPHA;
        sprite.spriteFrame = spriteFrame;
        node.zIndex = cc.macro.MAX_ZINDEX;
        node.parent = cc.director.getScene();
        // set position
        var width = cc.winSize.width;
        var height = cc.winSize.height;
        node.x = width / 2;
        node.y = height / 2;
        node.on(cc.Node.EventType.TOUCH_START, function () {
            node.parent = null;
            node.destroy();
        });
        this.captureAction(node, width, height);
    };
    Test2.prototype.captureAction = function (node, width, height) {
        var scaleAction = cc.scaleTo(1, 1);
        var targetPos = cc.v2(width - width / 6, height / 4);
        var moveAction = cc.moveTo(1, targetPos);
        var spawn = cc.spawn(scaleAction, moveAction);
        node.runAction(spawn);
    };
    Test2.prototype.clearCanvas = function () {
        var ctx = this._canvas.getContext('2d');
        ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    };
    __decorate([
        property(cc.Camera)
    ], Test2.prototype, "camera", void 0);
    __decorate([
        property(cc.Sprite)
    ], Test2.prototype, "sprite", void 0);
    Test2 = __decorate([
        ccclass
    ], Test2);
    return Test2;
}(cc.Component));
exports.default = Test2;

cc._RF.pop();