

const {ccclass, property} = cc._decorator;
@ccclass
export default class test_scene1 extends bb.BaseComponent {
    @property(cc.Prefab)
    prefab: cc.Prefab = null;
    onLoad () {
        bb.ViewManager.showView(this.prefab.name, this.prefab, {"aaa": 11, ddd:"333"});
    }
}