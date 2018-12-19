const {ccclass, property} = cc._decorator;
@ccclass
export default class Test extends cc.Component {
    isTouching: boolean = false;
    graphics: cc.Graphics = null;

    offY: number = 0;
    start () {
        // init logic

        let node = new cc.Node();
        this.graphics = node.addComponent(cc.Graphics);
        this.graphics.fillColor = cc.Color.RED;
        this.graphics.strokeColor = cc.Color.RED;
        this.graphics.lineWidth = 10;

        // this.graphics.lineJoi;
        // this.graphics.fill();
        this.graphics.moveTo(0, 0);
        this.node.addChild(node);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart() {
        this.isTouching = true;
    }

    onTouchMove() {

    }

    onTouchEnd() {
        this.isTouching = false;
        this.graphics.fill();
        this.graphics.close();
        this.graphics.clear();
        this.offY = 0;
        this.graphics.moveTo(0, 0)
        
        
    }

    update(dt) {
        if ( this.isTouching) {
            this.offY += 5;
            this.graphics.lineTo(0, this.offY);
            this.graphics.stroke();
        }
       
    }
}
