
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/view/ViewManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx2aWV3XFxWaWV3TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHO0FBQ0g7SUFVSTtRQURBLGNBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRTdCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFWTSx1QkFBVyxHQUFsQjtRQUNJLElBQUksV0FBVyxDQUFDLGNBQWMsSUFBSSxJQUFJLEVBQUU7WUFDcEMsV0FBVyxDQUFDLGNBQWMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxXQUFXLENBQUMsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFRRCw4QkFBUSxHQUFSLFVBQVMsSUFBWSxFQUFHLE1BQWlCLEVBQUUsSUFBUztRQUNoRCxJQUFJLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUMxQixJQUFJLElBQUksRUFBRTtZQUNOLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUM3QjtRQUVELEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsUUFBUSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMs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LENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLFFBQXFCO1FBQzdCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUM7SUFDSixDQUFDO0lBN0pNLDBCQUFjLEdBQWdCLElBQUksQ0FBQztJQThKOUMsa0JBQUM7Q0EvSkQsQUErSkMsSUFBQTtrQkEvSm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5Z+65LqO5LiA5Liq5Zy65pmv5LiK55qE6KeG5Zu+566h55CGOlxyXG4gKiAxLiAo5ZCM5q2l5oiW6ICF5byC5q2lKeaYvuekuuS4gOS4qiBWaWV3XHJcbiAqIDIuICjlkIzmraXmiJbogIXlvILmraUp5pi+56S65LiA5LiqIEl0ZW1cclxuICogMy4g5Zue5pS25LiA5Liq6KeG5Zu+6IqC54K5XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3TWFuYWdlciB7XHJcbiAgICBzdGF0aWMgc2luZ2xlSW5zdGFuY2U6IFZpZXdNYW5hZ2VyID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBWaWV3TWFuYWdlciB7XHJcbiAgICAgICAgaWYgKFZpZXdNYW5hZ2VyLnNpbmdsZUluc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgVmlld01hbmFnZXIuc2luZ2xlSW5zdGFuY2UgPSBuZXcgVmlld01hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFZpZXdNYW5hZ2VyLnNpbmdsZUluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXdTdGFjazogYmIuVmlld0N0cmxbXSA9ICBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3U3RhY2sgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHNob3dWaWV3KG5hbWU6IHN0cmluZywgIHByZWZhYjogY2MuUHJlZmFiLCBkYXRhOiBhbnkpOiBiYi5WaWV3Q3RybCB7XHJcbiAgICAgICAgbGV0IHZpZXdDdHJsID0gbmV3IGJiLlZpZXdDdHJsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmlld0N0cmwubm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgdmlld0N0cmwuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdmlld0N0cmxbXCJfdGFnXCJdID0gXCJ2aWV3XCI7XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgdmlld0N0cmwubm9kZS5uYW1lID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQodmlld0N0cmwubm9kZSk7XHJcblxyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdmlld0N0cmwubm9kZVtcIl9jb21wb25lbnRzXCJdO1xyXG4gICAgICAgIGlmIChjb21wb25lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmlld0N0cmwubG9naWNDb21wb25ldCA9IGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgdmlld0N0cmwubG9naWNDb21wb25ldFtcInZpZXdDdHJsXCJdID0gdmlld0N0cmw7XHJcbiAgICAgICAgICAgIHZpZXdDdHJsLmxvZ2ljQ29tcG9uZXRbXCJpbml0QmluZFwiXSgpO1xyXG4gICAgICAgICAgICB2aWV3Q3RybC5sb2dpY0NvbXBvbmV0W1wib25FbnRlclwiXSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld1N0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdTdGFja1t0aGlzLnZpZXdTdGFjay5sZW5ndGggLSAxXS5oaWRlVmlldygpO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGxldCBrZXkgPSBjYy5sb2FkZXJbXCJfZ2V0UmVmZXJlbmNlS2V5XCJdKHByZWZhYik7XHJcbiAgICAgICAgdmlld0N0cmxbXCJfcmVmZXJlbmNlS2V5XCJdID0ga2V5O1xyXG4gICAgICAgIHRoaXMudmlld1N0YWNrLnB1c2godmlld0N0cmwpO1xyXG4gICAgICAgIGJiLlVJTG9hZGVyLnJldGF0aW5SZXMoa2V5KTtcclxuICAgICAgICBiYi5VSUxvYWRlci5yZXRhaW5Ob2RlUmVzKHZpZXdDdHJsLm5vZGUpO1xyXG4gICAgICAgcmV0dXJuIHZpZXdDdHJsO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBzaG93Vmlld1N5bmMocGF0aFN0cjogc3RyaW5nLCBkYXRhOiBhbnksICBjYWxsYmFjaz86ICh2aWV3Q3RybDogYmIuVmlld0N0cmwpPT57fSkge1xyXG4gICAgICAgIGJiLlVJTG9hZGVyLmxvYWRSZXMocGF0aFN0ciwgY2MuUHJlZmFiLCAocHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2aWV3Q3RybCAgPSB0aGlzLnNob3dWaWV3KHByZWZhYi5uYW1lLCBwcmVmYWIsIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHZpZXdDdHJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaG93U3ViVmlldyhuYW1lOiBzdHJpbmcsICBwcmVmYWI6IGNjLlByZWZhYiwgZGF0YTogYW55KTogIGJiLlZpZXdDdHJsIHtcclxuICAgICAgICBsZXQgdmlld0N0cmwgPSBuZXcgYmIuVmlld0N0cmwoKTtcclxuICAgICAgICB2aWV3Q3RybC5ub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICB2aWV3Q3RybC5kYXRhID0gZGF0YTtcclxuICAgICAgICB2aWV3Q3RybFtcIl90YWdcIl0gPSBcInN1YlZpZXdcIjtcclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICB2aWV3Q3RybC5ub2RlLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgdmlld0N0cmxbXCJwYXJlbnRWaWV3Q3RybFwiXSA9ICAgdGhpcy52aWV3U3RhY2tbdGhpcy52aWV3U3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICAgICAgdGhpcy52aWV3U3RhY2tbdGhpcy52aWV3U3RhY2subGVuZ3RoIC0gMV0ubm9kZS5hZGRDaGlsZCh2aWV3Q3RybC5ub2RlKTtcclxuICAgICAgICBsZXQgY29tcG9uZW50cyA9IHZpZXdDdHJsLm5vZGVbXCJfY29tcG9uZW50c1wiXTtcclxuICAgICAgICBpZiAoY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZpZXdDdHJsLmxvZ2ljQ29tcG9uZXQgPSBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIHZpZXdDdHJsLmxvZ2ljQ29tcG9uZXRbXCJ2aWV3Q3RybFwiXSA9IHZpZXdDdHJsO1xyXG4gICAgICAgICAgICB2aWV3Q3RybC5sb2dpY0NvbXBvbmV0W1wiaW5pdEJpbmRcIl0oKTtcclxuICAgICAgICAgICAgdmlld0N0cmwubG9naWNDb21wb25ldFtcIm9uRW50ZXJcIl0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWV3U3RhY2tbdGhpcy52aWV3U3RhY2subGVuZ3RoIC0gMV0uYWRkU3ViVmlld0N0cmwodmlld0N0cmwpO1xyXG4gICAgICAgIGxldCBrZXkgPSBjYy5sb2FkZXJbXCJfZ2V0UmVmZXJlbmNlS2V5XCJdKHByZWZhYik7XHJcbiAgICAgICAgdmlld0N0cmxbXCJfcmVmZXJlbmNlS2V5XCJdID0ga2V5O1xyXG4gICAgICAgIGJiLlVJTG9hZGVyLnJldGF0aW5SZXMoa2V5KTtcclxuICAgICAgICBiYi5VSUxvYWRlci5yZXRhaW5Ob2RlUmVzKHZpZXdDdHJsLm5vZGUpO1xyXG4gICAgICAgcmV0dXJuIHZpZXdDdHJsO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dTdWJWaWV3U3luYyhwYXRoU3RyOiBzdHJpbmcsIGRhdGE6IGFueSwgIGNhbGxiYWNrPzogKHZpZXdDdHJsOiBiYi5WaWV3Q3RybCk9Pnt9KSB7XHJcbiAgICAgICAgYmIuVUlMb2FkZXIubG9hZFJlcyhwYXRoU3RyLCBjYy5QcmVmYWIsIChwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHZpZXdDdHJsICA9IHRoaXMuc2hvd1N1YlZpZXcocHJlZmFiLm5hbWUsIHByZWZhYiwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodmlld0N0cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNob3dJdGVtKG5hbWU6IHN0cmluZywgIHByZWZhYjogY2MuUHJlZmFiLCBkYXRhOiBhbnksIHBhcmVudDogY2MuTm9kZSwgcGFyZW50Vmlld0N0cmw6IGJiLlZpZXdDdHJsKSB7XHJcbiAgICAgICAgbGV0IHZpZXdDdHJsID0gbmV3IGJiLlZpZXdDdHJsKCk7XHJcbiAgICAgICAgdmlld0N0cmwubm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgdmlld0N0cmwuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdmlld0N0cmxbXCJfdGFnXCJdID0gXCJpdGVtXCI7XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgdmlld0N0cmwubm9kZS5uYW1lID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50LmFkZENoaWxkKHZpZXdDdHJsLm5vZGUpO1xyXG4gICAgICAgIHZpZXdDdHJsW1wicGFyZW50Vmlld0N0cmxcIl0gPSBwYXJlbnRWaWV3Q3RybDtcclxuICAgICAgICBsZXQgY29tcG9uZW50cyA9IHZpZXdDdHJsLm5vZGVbXCJfY29tcG9uZW50c1wiXTtcclxuICAgICAgICBpZiAoY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZpZXdDdHJsLmxvZ2ljQ29tcG9uZXQgPSBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIHZpZXdDdHJsLmxvZ2ljQ29tcG9uZXRbXCJ2aWV3Q3RybFwiXSA9IHZpZXdDdHJsO1xyXG4gICAgICAgICAgICB2aWV3Q3RybC5sb2dpY0NvbXBvbmV0W1wiaW5pdEJpbmRcIl0oKTtcclxuICAgICAgICAgICAgdmlld0N0cmwubG9naWNDb21wb25ldFtcIm9uRW50ZXJcIl0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50Vmlld0N0cmwuYWRkU3ViVmlld0N0cmwodmlld0N0cmwpO1xyXG5cclxuICAgICAgICBsZXQga2V5ID0gY2MubG9hZGVyW1wiX2dldFJlZmVyZW5jZUtleVwiXShwcmVmYWIpO1xyXG4gICAgICAgIHZpZXdDdHJsW1wiX3JlZmVyZW5jZUtleVwiXSA9IGtleTtcclxuICAgICAgICBiYi5VSUxvYWRlci5yZXRhdGluUmVzKGtleSk7XHJcbiAgICAgICAgYmIuVUlMb2FkZXIucmV0YWluTm9kZVJlcyh2aWV3Q3RybC5ub2RlKTtcclxuXHJcbiAgICAgICByZXR1cm4gdmlld0N0cmw7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0l0ZW1TeW5jKHBhdGhTdHI6IHN0cmluZywgZGF0YTogYW55LCAgcGFyZW50OiBjYy5Ob2RlLCBwYXJlbnRWaWV3Q3RybDogYmIuVmlld0N0cmwsIGNhbGxiYWNrPzogKHZpZXdDdHJsOiBiYi5WaWV3Q3RybCk9Pnt9KSB7XHJcbiAgICAgICAgYmIuVUlMb2FkZXIubG9hZFJlcyhwYXRoU3RyLCBjYy5QcmVmYWIsIChwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHZpZXdDdHJsICA9IHRoaXMuc2hvd0l0ZW0ocHJlZmFiLm5hbWUsIHByZWZhYiwgZGF0YSwgcGFyZW50LCBwYXJlbnRWaWV3Q3RybCk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodmlld0N0cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wVmlldyhkZXB0aD86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChkZXB0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52aWV3U3RhY2subGVuZ3RoIDw9IGRlcHRoKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYHBvcCB2aWV3IGRlcHRoIGVycm9yIHZpZXdTdGFjayA9ICR7dGhpcy52aWV3U3RhY2subGVuZ3RofSwgZGVwdGggPSAke2RlcHRofWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdmlld0N0cmxzID0gdGhpcy52aWV3U3RhY2suc3BsaWNlKHRoaXMudmlld1N0YWNrLmxlbmd0aCAtIGRlcHRoLCBkZXB0aCk7XHJcbiAgICAgICAgICAgIHZpZXdDdHJscy5mb3JFYWNoKCh2aWV3Q3RybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmlld0N0cmwuZGVzdHJveU5vZGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy52aWV3U3RhY2tbdGhpcy52aWV3U3RhY2subGVuZ3RoIC0gMV0uc2hvd1ZpZXcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld1N0YWNrLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmlld0N0cmwgPSB0aGlzLnZpZXdTdGFjay5wb3AoKTtcclxuICAgICAgICB2aWV3Q3RybC5kZXN0cm95Tm9kZSgpO1xyXG4gICAgICAgIHRoaXMudmlld1N0YWNrW3RoaXMudmlld1N0YWNrLmxlbmd0aCAtIDFdLnNob3dWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVmlldyh2aWV3Q3RybDogYmIuVmlld0N0cmwpIHtcclxuICAgICAgIGxldCBkZWxldGVJZHggPSB0aGlzLnZpZXdTdGFjay5pbmRleE9mKHZpZXdDdHJsKTtcclxuICAgICAgIGlmIChkZWxldGVJZHggPj0gMCkge1xyXG4gICAgICAgICAgIHRoaXMudmlld1N0YWNrLnNwbGljZShkZWxldGVJZHgsIDEpWzBdO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG59Il19