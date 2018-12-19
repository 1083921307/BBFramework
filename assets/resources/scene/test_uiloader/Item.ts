

const {ccclass, property} = cc._decorator;
@ccclass
export default class Item extends bb.BaseComponent {

    @property(cc.Label)
    label: cc.Label = null;

    @property()
    text: string = 'hello';

    @property(cc.Prefab)
    pefab: cc.Prefab = null;

    onLoad() {
     
    }

    onEnter() {
        cc.log("onEnter" +  this.viewCtrl.data)
    }

    onEnable() {
    }

    start () {
        cc.log("start" +  this.viewCtrl.data)
        // onLoad -> onEnable -> onEnter -> start
        cc.log(`当前缓存资源：${ bb.UILoader.getCacheCount()}`);
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.viewCtrl.destroyNode();
        });
    }
}