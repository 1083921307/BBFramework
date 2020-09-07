"use strict";
cc._RF.push(module, 'bef487PaOVEqIsv0EBQG+fC', 'AudioManager');
// framework/audio/AudioManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class AudioManager
 * @author 虣虣
 * @deprecated 音乐，音效管理模块
 *
 */
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.soundMute = false;
        this.effctMute = false;
        this._defaultBtnAudio = null;
        this.effects = null;
        this._currentMusicId = -1;
        this._currentMusicCacheUrl = null;
        this._currentEffectId = -1;
        this._currentEffectCacheUrl = null;
        this.effects = [];
    }
    AudioManager.getInstance = function () {
        if (AudioManager.singleInstance == null) {
            AudioManager.singleInstance = new AudioManager();
        }
        return AudioManager.singleInstance;
    };
    AudioManager.prototype.switchEffctMute = function (soundMute) {
        this.soundMute = soundMute;
    };
    AudioManager.prototype.switchSoundMute = function (effctMute) {
        this.effctMute = effctMute;
    };
    AudioManager.prototype.setDefaultBtnAudio = function (path) {
        var _this = this;
        cc.resources.load(path, cc.AudioClip, function (err, audioclip) {
            _this._defaultBtnAudio = audioclip;
        });
    };
    AudioManager.prototype.playDefaultBtnAudio = function (volume) {
        if (volume === void 0) { volume = 1; }
        this.playEffect(this._defaultBtnAudio, false, false);
    };
    AudioManager.prototype.setEffectsVolume = function (volume) {
        cc.audioEngine.setEffectsVolume(volume);
        if (volume === 0) {
            this.stopEffect();
        }
    };
    AudioManager.prototype.setMusicVolume = function (volume) {
        cc.audioEngine.setMusicVolume(volume);
        if (volume === 0) {
            this.stopMusic();
        }
    };
    AudioManager.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    AudioManager.prototype.stopEffect = function () {
        if (this._currentEffectId < 0) {
            return;
        }
        cc.audioEngine.stopEffect(this._currentEffectId);
        this._currentEffectId = -1;
    };
    AudioManager.prototype.playMusic = function (audioclip, loop) {
        var _this = this;
        this._currentMusicCacheUrl = audioclip.nativeUrl;
        this._currentMusicId = cc.audioEngine.playMusic(audioclip, loop);
        cc.audioEngine.setFinishCallback(this._currentMusicId, function () {
            _this._currentMusicCacheUrl = null;
            _this._currentMusicId = -1;
        });
    };
    AudioManager.prototype.playMusicSync = function (path, loop) {
        var _this = this;
        cc.resources.load(path, cc.AudioClip, function (err, audioclip) {
            if (err) {
                bb.logE(err.message);
                return;
            }
            _this.playMusic(audioclip, loop);
        });
    };
    AudioManager.prototype.playEffect = function (audioclip, immediately, sync) {
        if (immediately) {
            this._playEffect(audioclip, sync);
            return;
        }
        this.effects.push(audioclip);
        this._playEffect();
    };
    AudioManager.prototype.playEffectSync = function (path, immediately) {
        var _this = this;
        cc.resources.load(path, cc.AudioClip, function (err, audioclip) {
            if (err) {
                bb.logE(err.message);
                return;
            }
            _this.playEffect(audioclip, immediately, true);
        });
    };
    AudioManager.prototype._playEffect = function (audioclip, sync) {
        if (audioclip === void 0) { audioclip = null; }
        if (sync === void 0) { sync = false; }
        if (audioclip) {
            this._play(audioclip);
            return;
        }
        var audioclipObject = this.effects.shift();
        if (!audioclipObject) {
            return;
        }
        this._play(audioclipObject);
    };
    AudioManager.prototype._play = function (audioclip) {
        var _this = this;
        this._currentEffectCacheUrl = audioclip.nativeUrl;
        this._currentEffectId = cc.audioEngine.playEffect(audioclip, false);
        cc.audioEngine.setFinishCallback(this._currentEffectId, function () {
            _this._currentEffectId = -1;
            _this._currentEffectCacheUrl = null;
            _this._playEffect();
        });
    };
    AudioManager.singleInstance = null;
    return AudioManager;
}());
exports.default = AudioManager;

cc._RF.pop();