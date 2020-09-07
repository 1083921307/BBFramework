
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_uiloader/test_scene2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84c3eC4wZ1E0L4Z9GtCEUgr', 'test_scene2');
// resources/scene/test_uiloader/test_scene2.ts

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
var SpriteCount = 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test_scene2 = /** @class */ (function (_super) {
    __extends(test_scene2, _super);
    function test_scene2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @property(cc.AudioClip)
    // audioclip: cc.AudioClip = null;
    test_scene2.prototype.start = function () {
        this.scheduleOnce(function () {
            bb.AudioManager.playEffectSync("ball_hit_kartoon", false);
            // bb.AudioManager.playEffect(this.audioclip, false);
        }, 5);
        this.scheduleOnce(function () {
            bb.AudioManager.playMusicSync("ball_hit_kartoon", false);
            // bb.AudioManager.playEffectSync("ball_hit_kartoon", false);
            // bb.AudioManager.playEffect(this.audioclip, false);
        }, 10);
    };
    test_scene2 = __decorate([
        ccclass
    ], test_scene2);
    return test_scene2;
}(cc.Component));
exports.default = test_scene2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF91aWxvYWRlclxcdGVzdF9zY2VuZTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBbUJBLENBQUM7SUFsQkcsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUVsQywyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNELHFEQUFxRDtRQUN4RCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHTixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2IsRUFBRSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0QsNkRBQTZEO1lBQzVELHFEQUFxRDtRQUN6RCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBaEJnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUIvQjtJQUFELGtCQUFDO0NBbkJELEFBbUJDLENBbkJ3QyxFQUFFLENBQUMsU0FBUyxHQW1CcEQ7a0JBbkJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBTcHJpdGVDb3VudCA9IDA7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0X3NjZW5lMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gYXVkaW9jbGlwOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBiYi5BdWRpb01hbmFnZXIucGxheUVmZmVjdFN5bmMoXCJiYWxsX2hpdF9rYXJ0b29uXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAvLyBiYi5BdWRpb01hbmFnZXIucGxheUVmZmVjdCh0aGlzLmF1ZGlvY2xpcCwgZmFsc2UpO1xyXG4gICAgICAgIH0sIDUpOyBcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICBiYi5BdWRpb01hbmFnZXIucGxheU11c2ljU3luYyhcImJhbGxfaGl0X2thcnRvb25cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgIC8vIGJiLkF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0U3luYyhcImJhbGxfaGl0X2thcnRvb25cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyBiYi5BdWRpb01hbmFnZXIucGxheUVmZmVjdCh0aGlzLmF1ZGlvY2xpcCwgZmFsc2UpO1xyXG4gICAgICAgIH0sIDEwKTsgXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=