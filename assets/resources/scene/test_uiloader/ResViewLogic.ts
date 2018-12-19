
var SpriteCount = 0;
const {ccclass, property} = cc._decorator;
@ccclass
export default class Helloworld extends bb.BaseComponent {
    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    @property(cc.SpriteFrame)
    spriteFrame: cc.SpriteFrame = null;


    @property(cc.Button)
    button: cc.Button = null;

    @property(cc.Prefab)
    pefab: cc.Prefab = null;

    @property(cc.AudioClip)
    audioClip: cc.AudioClip = null;

    start () {
       cc.log(`当前缓存资源：${ bb.UILoader.getCacheCount()}`);
    }

    _onBtnLoadPrefabTouchEnd(sender) {
        bb.ViewManager.showView(this.pefab.name, this.pefab, {"aaa": 11, ddd:"333"});
        // bb.ViewManager.showViewSync("Item",  {"aaa": 11, ddd:"333"}, this.node.parent, null);
    }

    _onBtnLoadSyncPrefabTouchEnd(sender) {
        bb.ViewManager.showViewSync("ItemSync",  {"aaa": 11, ddd:"333"});
    }

    _onBtnMusicTouchEnd(sender) {
        bb.AudioManager.playMusic(this.audioClip, true);
    }

    _onBtnMusicSyncTouchEnd(sender) {
        bb.AudioManager.playMusicSync("ball_hit_kartoon", true);
    }

    _onBtnEffectTouchEnd(sender) {
        bb.AudioManager.playEffect(this.audioClip, false);
    }

    _onBtnEffectSyncTouchEnd(sender) {
        bb.AudioManager.playEffectSync("ball_hit_kartoon", false);
    }

    _onBtnUpdateSpriteTouchEnd(sender) {
        bb.UILoader.updateSpriteTexture(this.sprite.node, this.spriteFrame);
    }

    _onBtnUpdateSpriteSyncTouchEnd(sender) {
        bb.UILoader.loadSpriteFrame("icon_ball_2_1", (spriteFrame) => {
            bb.UILoader.updateSpriteTexture(this.sprite.node, spriteFrame);
        });
    }

    _onBtnUpdateButtonSyncTouchEnd(sender) {
        let res = ["slider_level_barGreen", "slider_level_barOrange", "slider_level_barRed"];
        bb.UILoader.loadSpriteFrames(res, (spriteFrames) => {
            bb.UILoader.updateButtonTexture(this.button.node, spriteFrames[0], spriteFrames[2], spriteFrames[1]);
        })
    }

    _onBtnLoadStaticResTouchEnd(sender) {
        // TY-BGX
        bb.UILoader.loadStaticRes("TY-BGX", cc.SpriteFrame, "test1", function(spriteFrame111) {
            bb.UILoader.updateSpriteTexture(this.sprite.node, spriteFrame111);
        }.bind(this));
    }

    _onBtnFreeStaticResTouchEnd(sender) {
        bb.UILoader.releaseStaticRes("test1");
    }

}
