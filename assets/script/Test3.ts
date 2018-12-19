const {ccclass, property} = cc._decorator;
@ccclass
export default class Test3 extends cc.Component {
    start() {
        cc.director.getPhysicsManager().enabled = true;

        cc.director.getPhysicsManager().debugDrawFlags =  cc.PhysicsManager.DrawBits["e_aabbBit"] |
        cc.PhysicsManager.DrawBits["e_pairBit"] |
        cc.PhysicsManager.DrawBits["e_centerOfMassBit"] |
        cc.PhysicsManager.DrawBits["e_jointBit"] |
        cc.PhysicsManager.DrawBits["e_shapeBit"];

        // cc.director.getPhysicsManager().debugDrawFlags = 0;

        // 如果希望修改重力加速度为其他值，比如每秒加速降落 640 像素，那么可以这样设置：
        cc.director.getPhysicsManager().gravity = cc.v2(0, -640);
    }
}
