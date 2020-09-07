"use strict";
cc._RF.push(module, '99b71dkCQROtoqM1IniL334', 'ViewManager');
// framework/view/ViewManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 基于一个场景上的视图管理:
 * 1. (同步或者异步)显示一个 View
 * 2. (同步或者异步)显示一个 Item
 * 3. 回收一个视图节点
 */
var ViewManager = /** @class */ (function () {
    function ViewManager() {
        this.viewStack = null;
        this.viewStack = [];
    }
    ViewManager.getInstance = function () {
        if (ViewManager.singleInstance == null) {
            ViewManager.singleInstance = new ViewManager();
        }
        return ViewManager.singleInstance;
    };
    ViewManager.prototype.showView = function (name, prefab, data) {
        var viewCtrl = new bb.ViewCtrl();
        viewCtrl.node = cc.instantiate(prefab);
        viewCtrl.data = data;
        viewCtrl["_tag"] = "view";
        if (name) {
            viewCtrl.node.name = name;
        }
        cc.director.getScene().addChild(viewCtrl.node);
        var components = viewCtrl.node["_components"];
        if (components.length > 0) {
            viewCtrl.logicComponet = components[components.length - 1];
            viewCtrl.logicComponet["viewCtrl"] = viewCtrl;
            viewCtrl.logicComponet["initBind"]();
            viewCtrl.logicComponet["onEnter"]();
        }
        if (this.viewStack.length) {
            this.viewStack[this.viewStack.length - 1].hideView();
        }
        var key = cc.loader["_getReferenceKey"](prefab);
        viewCtrl["_referenceKey"] = key;
        this.viewStack.push(viewCtrl);
        bb.UILoader.retatinRes(key);
        bb.UILoader.retainNodeRes(viewCtrl.node);
        return viewCtrl;
    };
    ViewManager.prototype.showViewSync = function (pathStr, data, callback) {
        var _this = this;
        bb.UILoader.loadRes(pathStr, cc.Prefab, function (prefab) {
            var viewCtrl = _this.showView(prefab.name, prefab, data);
            if (callback) {
                callback(viewCtrl);
            }
        });
    };
    ViewManager.prototype.showSubView = function (name, prefab, data) {
        var viewCtrl = new bb.ViewCtrl();
        viewCtrl.node = cc.instantiate(prefab);
        viewCtrl.data = data;
        viewCtrl["_tag"] = "subView";
        if (name) {
            viewCtrl.node.name = name;
        }
        viewCtrl["parentViewCtrl"] = this.viewStack[this.viewStack.length - 1];
        this.viewStack[this.viewStack.length - 1].node.addChild(viewCtrl.node);
        var components = viewCtrl.node["_components"];
        if (components.length > 0) {
            viewCtrl.logicComponet = components[components.length - 1];
            viewCtrl.logicComponet["viewCtrl"] = viewCtrl;
            viewCtrl.logicComponet["initBind"]();
            viewCtrl.logicComponet["onEnter"]();
        }
        this.viewStack[this.viewStack.length - 1].addSubViewCtrl(viewCtrl);
        var key = cc.loader["_getReferenceKey"](prefab);
        viewCtrl["_referenceKey"] = key;
        bb.UILoader.retatinRes(key);
        bb.UILoader.retainNodeRes(viewCtrl.node);
        return viewCtrl;
    };
    ViewManager.prototype.showSubViewSync = function (pathStr, data, callback) {
        var _this = this;
        bb.UILoader.loadRes(pathStr, cc.Prefab, function (prefab) {
            var viewCtrl = _this.showSubView(prefab.name, prefab, data);
            if (callback) {
                callback(viewCtrl);
            }
        });
    };
    ViewManager.prototype.showItem = function (name, prefab, data, parent, parentViewCtrl) {
        var viewCtrl = new bb.ViewCtrl();
        viewCtrl.node = cc.instantiate(prefab);
        viewCtrl.data = data;
        viewCtrl["_tag"] = "item";
        if (name) {
            viewCtrl.node.name = name;
        }
        parent.addChild(viewCtrl.node);
        viewCtrl["parentViewCtrl"] = parentViewCtrl;
        var components = viewCtrl.node["_components"];
        if (components.length > 0) {
            viewCtrl.logicComponet = components[components.length - 1];
            viewCtrl.logicComponet["viewCtrl"] = viewCtrl;
            viewCtrl.logicComponet["initBind"]();
            viewCtrl.logicComponet["onEnter"]();
        }
        parentViewCtrl.addSubViewCtrl(viewCtrl);
        var key = cc.loader["_getReferenceKey"](prefab);
        viewCtrl["_referenceKey"] = key;
        bb.UILoader.retatinRes(key);
        bb.UILoader.retainNodeRes(viewCtrl.node);
        return viewCtrl;
    };
    ViewManager.prototype.showItemSync = function (pathStr, data, parent, parentViewCtrl, callback) {
        var _this = this;
        bb.UILoader.loadRes(pathStr, cc.Prefab, function (prefab) {
            var viewCtrl = _this.showItem(prefab.name, prefab, data, parent, parentViewCtrl);
            if (callback) {
                callback(viewCtrl);
            }
        });
    };
    ViewManager.prototype.popView = function (depth) {
        if (depth !== null) {
            if (this.viewStack.length <= depth) {
                cc.log("pop view depth error viewStack = " + this.viewStack.length + ", depth = " + depth);
                return;
            }
            var viewCtrls = this.viewStack.splice(this.viewStack.length - depth, depth);
            viewCtrls.forEach(function (viewCtrl) {
                viewCtrl.destroyNode();
            });
            this.viewStack[this.viewStack.length - 1].showView();
            return;
        }
        if (this.viewStack.length < 2) {
            return;
        }
        var viewCtrl = this.viewStack.pop();
        viewCtrl.destroyNode();
        this.viewStack[this.viewStack.length - 1].showView();
    };
    ViewManager.prototype.removeView = function (viewCtrl) {
        var deleteIdx = this.viewStack.indexOf(viewCtrl);
        if (deleteIdx >= 0) {
            this.viewStack.splice(deleteIdx, 1)[0];
        }
    };
    ViewManager.singleInstance = null;
    return ViewManager;
}());
exports.default = ViewManager;

cc._RF.pop();