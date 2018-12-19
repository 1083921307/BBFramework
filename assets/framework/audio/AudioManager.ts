/**
 * @class AudioManager
 * @author lxx
 * @deprecated 音乐，音效管理模块
 * 
 * TODO  暂时未实现保存
 */
export default class AudioManager {
    static singleInstance: AudioManager = null;
    static getInstance(): AudioManager {
        if (AudioManager.singleInstance == null) {
            AudioManager.singleInstance = new AudioManager();
        }
        return AudioManager.singleInstance;
    }
    effects: Array<cc.AudioClip> = null;

    _currentMusicId: number = -1;
    _currentMusicCacheUrl: string = null;


    _currentEffectId: number = -1;
    _currentEffectCacheUrl: string = null;

    constructor() {
        this.effects = [];
    }

    setEffectsVolume(volume: number) {
        cc.audioEngine.setEffectsVolume(volume);
        if (volume === 0) {
            this.stopEffect()
        }
    }

    setMusicVolume(volume: number) {
        cc.audioEngine.setMusicVolume(volume);
        if (volume === 0) {
            this.stopMusic();
        }
    }

    stopMusic() {
        cc.audioEngine.stopMusic();
    }

    stopEffect() {
        if (this._currentEffectId < 0) {
            return;
        }
        cc.audioEngine.stopEffect(this._currentEffectId);
        this._currentEffectId = -1;
    }
    
    playMusic(audioclip: cc.AudioClip, loop: boolean) {
        this._currentMusicCacheUrl = audioclip.nativeUrl;
        bb.UILoader.retatinRes(this._currentMusicCacheUrl);
        this._currentMusicId = cc.audioEngine.playMusic(audioclip, loop);
        cc.audioEngine.setFinishCallback(this._currentMusicId , () =>{
            bb.UILoader.releaseMusicRes(this._currentMusicCacheUrl);
            this._currentMusicCacheUrl = null;
            this._currentMusicId = -1;
        });
    }

    playMusicSync(path: string, loop: boolean) {
        bb.UILoader.loadAudioClip(path, function(audioclip) {
            this.playMusic(audioclip, loop, true)
        }.bind(this));
    }
    

    playEffect(audioclip: cc.AudioClip, immediately: boolean, sync: boolean) {
        if (immediately) {
            this._playEffect(audioclip, sync);
            return;
        }
        this.effects.push(audioclip);
        this._playEffect();
    }

    playEffectSync(path: string, immediately: boolean) {
        bb.UILoader.loadAudioClip(path, function(audioclip) {
            this.playEffect(audioclip, immediately, true);
        }.bind(this));
    }

    _playEffect(audioclip: cc.AudioClip = null, sync: boolean = false) {
        if (audioclip) {
            this._play(audioclip);
            return;
        }
        let audioclipObject = this.effects.shift();
        if (!audioclipObject) {
            return;
        }
        this._play(audioclipObject);
    }

    _play(audioclip: cc.AudioClip) {
        this._currentEffectCacheUrl = audioclip.nativeUrl;
        bb.UILoader.retatinRes(this._currentEffectCacheUrl);
        this._currentEffectId = cc.audioEngine.playEffect(audioclip, false);
        cc.audioEngine.setFinishCallback(this._currentEffectId, () =>{
            bb.UILoader.releaseMusicRes(this._currentEffectCacheUrl);
            this._currentEffectId = -1;
            this._currentEffectCacheUrl = null;
            this._playEffect();
        });
    }

}