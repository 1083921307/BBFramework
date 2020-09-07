"use strict";
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