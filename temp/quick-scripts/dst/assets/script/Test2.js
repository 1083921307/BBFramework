
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Test2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXN0Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQTJKQztRQXpKRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFRLElBQUksQ0FBQztRQUNwQixhQUFPLEdBQVMsSUFBSSxDQUFDOztJQW1KekIsQ0FBQztJQWxKRyxxQkFBSyxHQUFMO1FBQUEsaUJBU0M7UUFSRyxZQUFZO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDM0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsb0JBQUksR0FBSjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVuQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pGLElBQUks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RSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDekMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkJBQVcsR0FBWDtRQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUF4SkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNLO0lBTFIsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTJKekI7SUFBRCxZQUFDO0NBM0pELEFBMkpDLENBM0prQyxFQUFFLENBQUMsU0FBUyxHQTJKOUM7a0JBM0pvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBfY2FudmFzOiBhbnkgPSBudWxsO1xyXG4gICAgdGV4dHVyZTogYW55ICA9IG51bGw7XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8g5a+55Zu+54mH6L+b6KGM54Gw5bqm5aSE55CGXHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0U3RhdGUoMSk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNwcml0ZSgpO1xyXG4gICAgICAgICAgICB2YXIgaW1nID0gdGhpcy5pbml0SW1hZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U3ByaXRlKGltZyk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XHJcblxyXG4gICAgICAgIGxldCBnbCA9IGNjLmdhbWVbXCJfcmVuZGVyQ29udGV4dFwiXTtcclxuICAgICAgIFxyXG4gICAgICAgIHRleHR1cmUuaW5pdFdpdGhTaXplKHRoaXMuc3ByaXRlLm5vZGUud2lkdGgsIHRoaXMuc3ByaXRlLm5vZGUuaGVpZ2h0LCBnbC5TVEVOQ0lMX0lOREVYOCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IHRoaXMuc3ByaXRlLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlICA9IHRleHR1cmU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEltYWdlKCkge1xyXG4gICAgICAgIHZhciBkYXRhVVJMID0gdGhpcy5fY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltZy5zcmMgPSBkYXRhVVJMO1xyXG4gICAgICAgIHJldHVybiBpbWc7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjcmVhdGVTcHJpdGUoKSB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy50ZXh0dXJlLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLnRleHR1cmUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLmRzdEJsZW5kRmFjdG9yID0gY2MubWFjcm8uWkVSTztcclxuICAgICAgICBpZiAoIXRoaXMuX2NhbnZhcykge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckNhbnZhcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucmVuZGVyKCk7XHJcbiAgICAgIFxyXG4gICAgICAgIC8vIOW3puS4iueahOS4uuWOn+eCuSjkuIDkuKrlg4/ntKDlrZggNOS4qiDmoLzlrZAsIOWIhuWIq+S7o+ihqOedgCBSIEcgQiBBKVxyXG4gICAgICAgIGxldCBkYXRhOiBVaW50OEFycmF5ID0gdGhpcy50ZXh0dXJlLnJlYWRQaXhlbHMoKTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIHdyaXRlIHRoZSByZW5kZXIgZGF0YVxyXG4gICAgICAgIGxldCByb3dCeXRlcyA9IHdpZHRoICogNDsgXHJcblxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGhlaWdodDsgcm93KyspIHtcclxuICAgICAgICAgICAgbGV0IHNyb3cgPSBoZWlnaHQgLSAxIC0gcm93O1xyXG4gICAgICAgICAgICAvLyBsZXQgc3JvdyA9ICByb3c7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiAxLiDku6XmjIflrprnmoTlsLrlr7jvvIjku6Xlg4/ntKDorqHvvInliJvlu7rmlrDnmoQgSW1hZ2VEYXRhIOWvueixoe+8mlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gd2lkdGggSW1hZ2VEYXRhIOWvueixoeeahOWuveW6pu+8jOS7peWDj+e0oOiuoeOAglxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gaGVpZ2h0IEltYWdlRGF0YSDlr7nosaHnmoTpq5jluqbvvIzku6Xlg4/ntKDorqHjgIJcclxuICAgICAgICAgICAgICogXHJcbiAgICAgICAgICAgICAqIDIuIOWIm+W7uuS4juaMh+WumueahOWPpuS4gOS4qiBJbWFnZURhdGEg5a+56LGh5bC65a+455u45ZCM55qE5pawIEltYWdlRGF0YSDlr7nosaHvvIjkuI3kvJrlpI3liLblm77lg4/mlbDmja7vvInvvJpcclxuICAgICAgICAgICAgICogQHBhcmFtIGltYWdlRGF0YSBJbWFnZURhdGEg5a+56LGhXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgMSk7XHJcblxyXG4gICAgICAgICAgICAvLyByICBnICBiIGFcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gc3JvdyAqICh3aWR0aCkgKiA0O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0J5dGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2ldID0gZGF0YVtzdGFydCArIGldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQ8IGltYWdlRGF0YS53aWR0aCAlIDQ7IG9mZnNldCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gb2Zmc2V0ICogNDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlRGF0YS5kYXRhW2lkeF0gPT09IDAgJiYgIGltYWdlRGF0YS5kYXRhW2lkeCArIDFdID09PSAwICYmICAgaW1hZ2VEYXRhLmRhdGFbaWR4ICsgMl0gPT09IDAgJiYgIGltYWdlRGF0YS5kYXRhW2lkeCArIDNdID09PSAyNTUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpZHhdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpZHggKyAxXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaWR4ICsgMl0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2lkeCArIDNdID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpZHhdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpZHggKyAxXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaWR4ICsgMl0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2lkeCArIDNdID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5bCG5Zu+5YOP5pWw5o2u77yI5LuO5oyH5a6a55qEIEltYWdlRGF0YSDlr7nosaHvvInmlL7lm57nlLvluIPkuIpcclxuICAgICAgICAgICAgICogQHBhcmFtIGltYWdlRGF0YSDop4TlrpropoHmlL7lm57nlLvluIPnmoQgSW1hZ2VEYXRhIOWvueixoVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geFx0SW1hZ2VEYXRhIOWvueixoeW3puS4iuinkueahCB4IOWdkOagh++8jOS7peWDj+e0oOiuoeOAglxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geVx0SW1hZ2VEYXRhIOWvueixoeW3puS4iuinkueahCB5IOWdkOagh++8jOS7peWDj+e0oOiuoeOAglxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gZGlydHlYXHTlj6/pgInjgILmsLTlubPlgLzvvIh477yJ77yM5Lul5YOP57Sg6K6h77yM5Zyo55S75biD5LiK5pS+572u5Zu+5YOP55qE5L2N572u44CCXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBkaXJ0eVlcdOWPr+mAieOAguawtOW5s+WAvO+8iHnvvInvvIzku6Xlg4/ntKDorqHvvIzlnKjnlLvluIPkuIrmlL7nva7lm77lg4/nmoTkvY3nva7jgIJcclxuICAgICAgICAgICAgICogQHBhcmFtIGRpcnR5V2lkdGhcdOWPr+mAieOAguWcqOeUu+W4g+S4iue7mOWItuWbvuWDj+aJgOS9v+eUqOeahOWuveW6puOAglxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gZGlydHlIZWlnaHRcdOWPr+mAieOAguWcqOeUu+W4g+S4iue7mOWItuWbvuWDj+aJgOS9v+eUqOeahOmrmOW6puOAglxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIHJvdyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmRzdEJsZW5kRmFjdG9yID0gY2MubWFjcm8uT05FX01JTlVTX1NSQ19BTFBIQTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBzaG93U3ByaXRlKGltZykge1xyXG4gICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xyXG4gICAgICAgIHRleHR1cmUuaW5pdFdpdGhFbGVtZW50KGltZyk7XHJcblxyXG4gICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSgpO1xyXG4gICAgICAgIHNwcml0ZUZyYW1lLnNldFRleHR1cmUodGV4dHVyZSk7XHJcblxyXG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBsZXQgc3ByaXRlID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgICBcclxuICAgICAgICBzcHJpdGUuc3JjQmxlbmRGYWN0b3IgPSBjYy5tYWNyby5TUkNfQUxQSEE7XHJcbiAgICAgICAgc3ByaXRlLmRzdEJsZW5kRmFjdG9yID0gY2MubWFjcm8uT05FX01JTlVTX1NSQ19BTFBIQTtcclxuICAgICBcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHJcbiAgICAgICAgbm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICAvLyBzZXQgcG9zaXRpb25cclxuICAgICAgICBsZXQgd2lkdGggPSBjYy53aW5TaXplLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcclxuICAgICAgICBub2RlLnggPSB3aWR0aCAvIDI7XHJcbiAgICAgICAgbm9kZS55ID0gaGVpZ2h0IC8gMjtcclxuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FwdHVyZUFjdGlvbihub2RlLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgY2FwdHVyZUFjdGlvbihub2RlLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgbGV0IHNjYWxlQWN0aW9uID0gY2Muc2NhbGVUbygxLDEpO1xyXG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSBjYy52Mih3aWR0aCAtIHdpZHRoIC8gNiwgIGhlaWdodCAvIDQpO1xyXG4gICAgICAgIGxldCBtb3ZlQWN0aW9uID0gY2MubW92ZVRvKDEsIHRhcmdldFBvcyk7IFxyXG4gICAgICAgIGxldCBzcGF3biA9IGNjLnNwYXduKHNjYWxlQWN0aW9uLCBtb3ZlQWN0aW9uKTtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihzcGF3bik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJDYW52YXMoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5fY2FudmFzLndpZHRoLCB0aGlzLl9jYW52YXMuaGVpZ2h0KTtcclxuICAgIH1cclxufVxyXG4iXX0=