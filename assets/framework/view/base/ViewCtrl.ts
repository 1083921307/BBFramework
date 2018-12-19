import BaseComponent from "./BaseComponent";

export default class ViewCtrl {
    _tag: string = "view"; // 界面标识符： view, subview, item,
    _referenceKey: string = null;
    name: string = "";
    node: cc.Node = null;
    parent: cc.Node = null;
    data: any = null;
    logicComponet: BaseComponent = null;
    parentViewCtrl: bb.ViewCtrl = null;
    _subViewCtrl: Array<bb.ViewCtrl> = [];

    hideView(): void {
        this.node.active = false;
    }

    showView(): void {
        this.node.active = true;
    }

    addSubViewCtrl(subViewCtrl: bb.ViewCtrl) {
        this._subViewCtrl.push(subViewCtrl);
    }

    destroyNode(): void {
        bb.UILoader.releaseNodeRes(this.node);
        bb.UILoader.releaseRes(this._referenceKey);

        this._subViewCtrl.forEach((item) => {
            bb.UILoader.releaseRes(item["_referenceKey"]);
        })

        if (this._tag === "view") {
            bb.ViewManager.removeView(this);
        }
        this.node.destroy();
        bb.UILoader.gc();
    }

    popSubView(depth?: number): void {
        if (depth !== null && depth !== undefined) {
            if (this._subViewCtrl.length < depth) {
                cc.log(`pop view depth error viewStack = ${this._subViewCtrl.length}, depth = ${depth}`);
                return;
            }

            let viewCtrls = this._subViewCtrl.splice(this._subViewCtrl.length - depth, depth);
            viewCtrls.forEach((viewCtrl) => {
                viewCtrl.destroyNode();
            })
            return;
        }

        if (this._subViewCtrl.length < 1) {
            return;
        }
        let viewCtrl = this._subViewCtrl.pop();
        viewCtrl.destroyNode();
    }

    popView(depth?: number): void {
        let subViewCtrls = this.parentViewCtrl["_subViewCtrl"];
        if (depth !== null && depth !== undefined) {
            if (subViewCtrls.length < depth) {
                cc.log(`pop view depth error viewStack = ${subViewCtrls.length}, depth = ${depth}`);
                return;
            }

            let viewCtrls =subViewCtrls.splice(subViewCtrls.length - depth, depth);
            viewCtrls.forEach((viewCtrl) => {
                viewCtrl.destroyNode();
            })
            return;
        }

        if (subViewCtrls.length < 1) {
            return;
        }
        let viewCtrl = subViewCtrls.pop();
        viewCtrl.destroyNode();
    }
}