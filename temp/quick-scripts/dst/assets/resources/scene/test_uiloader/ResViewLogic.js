
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_uiloader/ResViewLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44274XXB0VGc5glMVRZ/3Ch', 'ResViewLogic');
// resources/scene/test_uiloader/ResViewLogic.ts

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
var SpriteCount = 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.spriteFrame = null;
        _this.button = null;
        _this.pefab = null;
        _this.audioClip = null;
        return _this;
    }
    Helloworld.prototype.start = function () {
        cc.log("\u5F53\u524D\u7F13\u5B58\u8D44\u6E90\uFF1A" + bb.UILoader.getCacheCount());
    };
    Helloworld.prototype._onBtnLoadPrefabTouchEnd = function (sender) {
        bb.ViewManager.showView(this.pefab.name, this.pefab, { "aaa": 11, ddd: "333" });
        // bb.ViewManager.showViewSync("Item",  {"aaa": 11, ddd:"333"}, this.node.parent, null);
    };
    Helloworld.prototype._onBtnLoadSyncPrefabTouchEnd = function (sender) {
        bb.ViewManager.showViewSync("ItemSync", { "aaa": 11, ddd: "333" });
    };
    Helloworld.prototype._onBtnMusicTouchEnd = function (sender) {
        bb.AudioManager.playMusic(this.audioClip, true);
    };
    Helloworld.prototype._onBtnMusicSyncTouchEnd = function (sender) {
        bb.AudioManager.playMusicSync("ball_hit_kartoon", true);
    };
    Helloworld.prototype._onBtnEffectTouchEnd = function (sender) {
        bb.AudioManager.playEffect(this.audioClip, false);
    };
    Helloworld.prototype._onBtnEffectSyncTouchEnd = function (sender) {
        bb.AudioManager.playEffectSync("ball_hit_kartoon", false);
    };
    Helloworld.prototype._onBtnUpdateSpriteTouchEnd = function (sender) {
        bb.UILoader.updateSpriteTexture(this.sprite.node, this.spriteFrame);
    };
    Helloworld.prototype._onBtnUpdateSpriteSyncTouchEnd = function (sender) {
        var _this = this;
        bb.UILoader.loadSpriteFrame("icon_ball_2_1", function (spriteFrame) {
            bb.UILoader.updateSpriteTexture(_this.sprite.node, spriteFrame);
        });
    };
    Helloworld.prototype._onBtnUpdateButtonSyncTouchEnd = function (sender) {
        var _this = this;
        var res = ["slider_level_barGreen", "slider_level_barOrange", "slider_level_barRed"];
        bb.UILoader.loadSpriteFrames(res, function (spriteFrames) {
            bb.UILoader.updateButtonTexture(_this.button.node, spriteFrames[0], spriteFrames[2], spriteFrames[1]);
        });
    };
    Helloworld.prototype._onBtnLoadStaticResTouchEnd = function (sender) {
        // TY-BGX
        bb.UILoader.loadStaticRes("TY-BGX", cc.SpriteFrame, "test1", function (spriteFrame111) {
            bb.UILoader.updateSpriteTexture(this.sprite.node, spriteFrame111);
        }.bind(this));
    };
    Helloworld.prototype._onBtnFreeStaticResTouchEnd = function (sender) {
        bb.UILoader.releaseStaticRes("test1");
    };
    __decorate([
        property(cc.Sprite)
    ], Helloworld.prototype, "sprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Helloworld.prototype, "spriteFrame", void 0);
    __decorate([
        property(cc.Button)
    ], Helloworld.prototype, "button", void 0);
    __decorate([
        property(cc.Prefab)
    ], Helloworld.prototype, "pefab", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Helloworld.prototype, "audioClip", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(bb.BaseComponent));
exports.default = Helloworld;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF91aWxvYWRlclxcUmVzVmlld0xvZ2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztBQUNkLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXdDLDhCQUFnQjtJQUF4RDtRQUFBLHFFQTBFQztRQXhFRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUluQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFpQixJQUFJLENBQUM7O0lBMkRuQyxDQUFDO0lBekRHLDBCQUFLLEdBQUw7UUFDRyxFQUFFLENBQUMsR0FBRyxDQUFDLCtDQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNkNBQXdCLEdBQXhCLFVBQXlCLE1BQU07UUFDM0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDN0Usd0ZBQXdGO0lBQzVGLENBQUM7SUFFRCxpREFBNEIsR0FBNUIsVUFBNkIsTUFBTTtRQUMvQixFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUcsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCx3Q0FBbUIsR0FBbkIsVUFBb0IsTUFBTTtRQUN0QixFQUFFLENB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dXJjZXNDb250ZW50IjpbIlxyXG52YXIgU3ByaXRlQ291bnQgPSAwO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG93b3JsZCBleHRlbmRzIGJiLkJhc2VDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYXVkaW9DbGlwOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgIGNjLmxvZyhg5b2T5YmN57yT5a2Y6LWE5rqQ77yaJHsgYmIuVUlMb2FkZXIuZ2V0Q2FjaGVDb3VudCgpfWApO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkJ0bkxvYWRQcmVmYWJUb3VjaEVuZChzZW5kZXIpIHtcclxuICAgICAgICBiYi5WaWV3TWFuYWdlci5zaG93Vmlldyh0aGlzLnBlZmFiLm5hbWUsIHRoaXMucGVmYWIsIHtcImFhYVwiOiAxMSwgZGRkOlwiMzMzXCJ9KTtcclxuICAgICAgICAvLyBiYi5WaWV3TWFuYWdlci5zaG93Vmlld1N5bmMoXCJJdGVtXCIsICB7XCJhYWFcIjogMTEsIGRkZDpcIjMzM1wifSwgdGhpcy5ub2RlLnBhcmVudCwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuTG9hZFN5bmNQcmVmYWJUb3VjaEVuZChzZW5kZXIpIHtcclxuICAgICAgICBiYi5WaWV3TWFuYWdlci5zaG93Vmlld1N5bmMoXCJJdGVtU3luY1wiLCAge1wiYWFhXCI6IDExLCBkZGQ6XCIzMzNcIn0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkJ0bk11c2ljVG91Y2hFbmQoc2VuZGVyKSB7XHJcbiAgICAgICAgYmIuQXVkaW9NYW5hZ2VyLnBsYXlNdXNpYyh0aGlzLmF1ZGlvQ2xpcCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuTXVzaWNTeW5jVG91Y2hFbmQoc2VuZGVyKSB7XHJcbiAgICAgICAgYmIuQXVkaW9NYW5hZ2VyLnBsYXlNdXNpY1N5bmMoXCJiYWxsX2hpdF9rYXJ0b29uXCIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkJ0bkVmZmVjdFRvdWNoRW5kKHNlbmRlcikge1xyXG4gICAgICAgIGJiLkF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KHRoaXMuYXVkaW9DbGlwLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuRWZmZWN0U3luY1RvdWNoRW5kKHNlbmRlcikge1xyXG4gICAgICAgIGJiLkF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0U3luYyhcImJhbGxfaGl0X2thcnRvb25cIiwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkJ0blVwZGF0ZVNwcml0ZVRvdWNoRW5kKHNlbmRlcikge1xyXG4gICAgICAgIGJiLlVJTG9hZGVyLnVwZGF0ZVNwcml0ZVRleHR1cmUodGhpcy5zcHJpdGUubm9kZSwgdGhpcy5zcHJpdGVGcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuVXBkYXRlU3ByaXRlU3luY1RvdWNoRW5kKHNlbmRlcikge1xyXG4gICAgICAgIGJiLlVJTG9hZGVyLmxvYWRTcHJpdGVGcmFtZShcImljb25fYmFsbF8yXzFcIiwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGJiLlVJTG9hZGVyLnVwZGF0ZVNwcml0ZVRleHR1cmUodGhpcy5zcHJpdGUubm9kZSwgc3ByaXRlRnJhbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkJ0blVwZGF0ZUJ1dHRvblN5bmNUb3VjaEVuZChzZW5kZXIpIHtcclxuICAgICAgICBsZXQgcmVzID0gW1wic2xpZGVyX2xldmVsX2JhckdyZWVuXCIsIFwic2xpZGVyX2xldmVsX2Jhck9yYW5nZVwiLCBcInNsaWRlcl9sZXZlbF9iYXJSZWRcIl07XHJcbiAgICAgICAgYmIuVUlMb2FkZXIubG9hZFNwcml0ZUZyYW1lcyhyZXMsIChzcHJpdGVGcmFtZXMpID0+IHtcclxuICAgICAgICAgICAgYmIuVUlMb2FkZXIudXBkYXRlQnV0dG9uVGV4dHVyZSh0aGlzLmJ1dHRvbi5ub2RlLCBzcHJpdGVGcmFtZXNbMF0sIHNwcml0ZUZyYW1lc1syXSwgc3ByaXRlRnJhbWVzWzFdKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIF9vbkJ0bkxvYWRTdGF0aWNSZXNUb3VjaEVuZChzZW5kZXIpIHtcclxuICAgICAgICAvLyBUWS1CR1hcclxuICAgICAgICBiYi5VSUxvYWRlci5sb2FkU3RhdGljUmVzKFwiVFktQkdYXCIsIGNjLlNwcml0ZUZyYW1lLCBcInRlc3QxXCIsIGZ1bmN0aW9uKHNwcml0ZUZyYW1lMTExKSB7XHJcbiAgICAgICAgICAgIGJiLlVJTG9hZGVyLnVwZGF0ZVNwcml0ZVRleHR1cmUodGhpcy5zcHJpdGUubm9kZSwgc3ByaXRlRnJhbWUxMTEpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuRnJlZVN0YXRpY1Jlc1RvdWNoRW5kKHNlbmRlcikge1xyXG4gICAgICAgIGJiLlVJTG9hZGVyLnJlbGVhc2VTdGF0aWNSZXMoXCJ0ZXN0MVwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19