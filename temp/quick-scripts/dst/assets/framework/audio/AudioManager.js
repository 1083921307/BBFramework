
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/audio/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxhdWRpb1xcQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7QUFDSDtJQXVCSTtRQWRBLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixxQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBRXRDLFlBQU8sR0FBd0IsSUFBSSxDQUFDO1FBRXBDLG9CQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsMEJBQXFCLEdBQVcsSUFBSSxDQUFDO1FBR3JDLHFCQUFnQixHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzlCLDJCQUFzQixHQUFXLElBQUksQ0FBQztRQUdsQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBdkJNLHdCQUFXLEdBQWxCO1FBQ0ksSUFBSSxZQUFZLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRTtZQUNyQyxZQUFZLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDcEQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxjQUFjLENBQUM7SUFDdkMsQ0FBQztJQW9CRCxzQ0FBZSxHQUFmLFVBQWdCLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEIsVUFBbUIsSUFBWTtRQUEvQixpQkFJQztRQUhHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBUyxFQUFFLFNBQXVCO1lBQ3JFLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFD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IjpbIi8qKlxyXG4gKiBAY2xhc3MgQXVkaW9NYW5hZ2VyXHJcbiAqIEBhdXRob3Ig6Jmj6JmjXHJcbiAqIEBkZXByZWNhdGVkIOmfs+S5kO+8jOmfs+aViOeuoeeQhuaooeWdl1xyXG4gKiBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XHJcbiAgICBzdGF0aWMgc2luZ2xlSW5zdGFuY2U6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXVkaW9NYW5hZ2VyIHtcclxuICAgICAgICBpZiAoQXVkaW9NYW5hZ2VyLnNpbmdsZUluc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLnNpbmdsZUluc3RhbmNlID0gbmV3IEF1ZGlvTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQXVkaW9NYW5hZ2VyLnNpbmdsZUluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNvdW5kTXV0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZWZmY3RNdXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgX2RlZmF1bHRCdG5BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBlZmZlY3RzOiBBcnJheTxjYy5BdWRpb0NsaXA+ID0gbnVsbDtcclxuXHJcbiAgICBfY3VycmVudE11c2ljSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgX2N1cnJlbnRNdXNpY0NhY2hlVXJsOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuXHJcbiAgICBfY3VycmVudEVmZmVjdElkOiBudW1iZXIgPSAtMTtcclxuICAgIF9jdXJyZW50RWZmZWN0Q2FjaGVVcmw6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoRWZmY3RNdXRlKHNvdW5kTXV0ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc291bmRNdXRlID0gc291bmRNdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFNvdW5kTXV0ZShlZmZjdE11dGU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmVmZmN0TXV0ZSA9IGVmZmN0TXV0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZWZhdWx0QnRuQXVkaW8ocGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyOkVycm9yLCBhdWRpb2NsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWZhdWx0QnRuQXVkaW8gPSBhdWRpb2NsaXA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheURlZmF1bHRCdG5BdWRpbyh2b2x1bWU6IG51bWJlciA9IDEpIHtcclxuICAgICAgICB0aGlzLnBsYXlFZmZlY3QodGhpcy5fZGVmYXVsdEJ0bkF1ZGlvLCBmYWxzZSwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWZmZWN0c1ZvbHVtZSh2b2x1bWU6IG51bWJlcikge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodm9sdW1lKTtcclxuICAgICAgICBpZiAodm9sdW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEVmZmVjdCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldE11c2ljVm9sdW1lKHZvbHVtZTogbnVtYmVyKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodm9sdW1lKTtcclxuICAgICAgICBpZiAodm9sdW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BNdXNpYygpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wRWZmZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50RWZmZWN0SWQgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh0aGlzLl9jdXJyZW50RWZmZWN0SWQpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRFZmZlY3RJZCA9IC0xO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwbGF5TXVzaWMoYXVkaW9jbGlwOiBjYy5BdWRpb0NsaXAsIGxvb3A6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TXVzaWNDYWNoZVVybCA9IGF1ZGlvY2xpcC5uYXRpdmVVcmw7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudE11c2ljSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoYXVkaW9jbGlwLCBsb29wKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayh0aGlzLl9jdXJyZW50TXVzaWNJZCAsICgpID0+e1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50TXVzaWNDYWNoZVVybCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRNdXNpY0lkID0gLTE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheU11c2ljU3luYyhwYXRoOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4pIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBhdWRpb2NsaXA6IGNjLkF1ZGlvQ2xpcCkgPT57XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGJiLmxvZ0UoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGxheU11c2ljKGF1ZGlvY2xpcCwgbG9vcClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwbGF5RWZmZWN0KGF1ZGlvY2xpcDogY2MuQXVkaW9DbGlwLCBpbW1lZGlhdGVseTogYm9vbGVhbiwgc3luYzogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChpbW1lZGlhdGVseSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5RWZmZWN0KGF1ZGlvY2xpcCwgc3luYyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lZmZlY3RzLnB1c2goYXVkaW9jbGlwKTtcclxuICAgICAgICB0aGlzLl9wbGF5RWZmZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUVmZmVjdFN5bmMocGF0aDogc3RyaW5nLCBpbW1lZGlhdGVseTogYm9vbGVhbikge1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycjogRXJyb3IsIGF1ZGlvY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGJiLmxvZ0UoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGxheUVmZmVjdChhdWRpb2NsaXAsIGltbWVkaWF0ZWx5LCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfcGxheUVmZmVjdChhdWRpb2NsaXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGwsIHN5bmM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChhdWRpb2NsaXApIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheShhdWRpb2NsaXApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhdWRpb2NsaXBPYmplY3QgPSB0aGlzLmVmZmVjdHMuc2hpZnQoKTtcclxuICAgICAgICBpZiAoIWF1ZGlvY2xpcE9iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BsYXkoYXVkaW9jbGlwT2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBfcGxheShhdWRpb2NsaXA6IGNjLkF1ZGlvQ2xpcCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRFZmZlY3RDYWNoZVVybCA9IGF1ZGlvY2xpcC5uYXRpdmVVcmw7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEVmZmVjdElkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChhdWRpb2NsaXAsIGZhbHNlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayh0aGlzLl9jdXJyZW50RWZmZWN0SWQsICgpID0+e1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RWZmZWN0SWQgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEVmZmVjdENhY2hlVXJsID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fcGxheUVmZmVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==