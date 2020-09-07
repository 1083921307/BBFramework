/**
 * @class AudioManager
 * @author 虣虣
 * @deprecated 音乐，音效管理模块
 * 
 */
export default class AudioManager {
    static singleInstance: AudioManager = null;
    static getInstance(): AudioManager {
        if (AudioManager.singleInstance == null) {
            AudioManager.singleInstance = new AudioManager();
        }
        return AudioManager.singleInstance;
    }

    soundMute: boolean = false;
    effctMute: boolean = false;

    _defaultBtnAudio: cc.AudioClip = null;

    effects: Array<cc.AudioClip> = null;

    _currentMusicId: number = -1;
    _currentMusicCacheUrl: string = null;


    _currentEffectId: number = -1;
    _currentEffectCacheUrl: string = null;

    constructor() {
        this.effects = [];
    }

    switchEffctMute(soundMute: boolean) {
        this.soundMute = soundMute;
    }

    switchSoundMute(effctMute: boolean) {
        this.effctMute = effctMute;
    }

    setDefaultBtnAudio(path: string) {
        cc.resources.load(path, cc.AudioClip, (err:Error, audioclip: cc.AudioClip) => {
            this._defaultBtnAudio = audioclip;
        });
    }

    playDefaultBtnAudio(volume: number = 1) {
        this.playEffect(this._defaultBtnAudio, false, false)
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
        this._currentMusicId = cc.audioEngine.playMusic(audioclip, loop);
        cc.audioEngine.setFinishCallback(this._currentMusicId , () =>{
            this._currentMusicCacheUrl = null;
            this._currentMusicId = -1;
        });
    }

    playMusicSync(path: string, loop: boolean) {
        cc.resources.load(path, cc.AudioClip, (err: Error, audioclip: cc.AudioClip) =>{
            if (err) {
                bb.logE(err.message);
                return;
            }
            this.playMusic(audioclip, loop)
        })
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
        cc.resources.load(path, cc.AudioClip, (err: Error, audioclip: cc.AudioClip) => {
            if (err) {
                bb.logE(err.message);
                return;
            }
            this.playEffect(audioclip, immediately, true);
        });
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
        this._currentEffectId = cc.audioEngine.playEffect(audioclip, false);
        cc.audioEngine.setFinishCallback(this._currentEffectId, () =>{
            this._currentEffectId = -1;
            this._currentEffectCacheUrl = null;
            this._playEffect();
        });
    }

}