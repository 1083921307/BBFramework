
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ea54L81gZA8ITXtvfccseD', 'Test');
// script/Test.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isTouching = false;
        _this.graphics = null;
        _this.offY = 0;
        return _this;
    }
    Test.prototype.start = function () {
        // init logic
        var node = new cc.Node();
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
    };
    Test.prototype.onTouchStart = function () {
        this.isTouching = true;
    };
    Test.prototype.onTouchMove = function () {
    };
    Test.prototype.onTouchEnd = function () {
        this.isTouching = false;
        this.graphics.fill();
        this.graphics.close();
        this.graphics.clear();
        this.offY = 0;
        this.graphics.moveTo(0, 0);
    };
    Test.prototype.update = function (dt) {
        if (this.isTouching) {
            this.offY += 5;
            this.graphics.lineTo(0, this.offY);
            this.graphics.stroke();
        }
    };
    Test = __decorate([
        ccclass
    ], Test);
    return Test;
}(cc.Component));
exports.default = Test;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBa0RDO1FBakRHLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBOENyQixDQUFDO0lBN0NHLG9CQUFLLEdBQUw7UUFDSSxhQUFhO1FBRWIsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFN0IseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELDJCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsMEJBQVcsR0FBWDtJQUVBLENBQUM7SUFFRCx5QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFHOUIsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzFCO0lBRUwsQ0FBQztJQWpEZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWtEeEI7SUFBRCxXQUFDO0NBbERELEFBa0RDLENBbERpQyxFQUFFLENBQUMsU0FBUyxHQWtEN0M7a0JBbERvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgaXNUb3VjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgICBvZmZZOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIGluaXQgbG9naWNcclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBub2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVXaWR0aCA9IDEwO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmdyYXBoaWNzLmxpbmVKb2k7XHJcbiAgICAgICAgLy8gdGhpcy5ncmFwaGljcy5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydCgpIHtcclxuICAgICAgICB0aGlzLmlzVG91Y2hpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKCkge1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5vZmZZID0gMDtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbygwLCAwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICggdGhpcy5pc1RvdWNoaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmWSArPSA1O1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbygwLCB0aGlzLm9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==