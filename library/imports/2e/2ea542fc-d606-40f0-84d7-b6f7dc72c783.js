"use strict";
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