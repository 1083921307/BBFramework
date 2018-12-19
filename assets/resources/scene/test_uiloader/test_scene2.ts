
var SpriteCount = 0;
const {ccclass, property} = cc._decorator;
@ccclass
export default class test_scene2 extends cc.Component {
    // @property(cc.AudioClip)
    // audioclip: cc.AudioClip = null;
    
    start () {
        this.scheduleOnce(() => {
            bb.AudioManager.playEffectSync("ball_hit_kartoon", false);
           // bb.AudioManager.playEffect(this.audioclip, false);
        }, 5); 
       

        this.scheduleOnce(() => {
             bb.AudioManager.playMusicSync("ball_hit_kartoon", false);
           // bb.AudioManager.playEffectSync("ball_hit_kartoon", false);
            // bb.AudioManager.playEffect(this.audioclip, false);
        }, 10); 
    }


}
