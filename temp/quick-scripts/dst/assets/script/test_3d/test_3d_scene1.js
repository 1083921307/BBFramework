
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/test_3d/test_3d_scene1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f3a8jT73pCXbgPBzaAYcul', 'test_3d_scene1');
// script/test_3d/test_3d_scene1.ts

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
var test_3d_scene1 = /** @class */ (function (_super) {
    __extends(test_3d_scene1, _super);
    function test_3d_scene1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_3d_scene1 = __decorate([
        ccclass
    ], test_3d_scene1);
    return test_3d_scene1;
}(cc.Component));
exports.default = test_3d_scene1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0ZXN0XzNkXFx0ZXN0XzNkX3NjZW5lMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUE0QyxrQ0FBWTtJQUF4RDs7SUE4QkEsQ0FBQztJQTlCb0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQThCbEM7SUFBRCxxQkFBQztDQTlCRCxBQThCQyxDQTlCMkMsRUFBRSxDQUFDLFNBQVMsR0E4QnZEO2tCQTlCb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0XzNkX3NjZW5lMSBleHRlbmRzIGNjLkNvbXBvbmVudHtcclxuICAgIC8qKiBcclxuICAgICAqICAyLjEuMCBDYW1lcmE6IOaRhOWDj+aculxyXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSB6b29tUmF0aW8gIOaRhOWDj+acuue8qeaUvuavlOeOh1xyXG4gICAgICogIEBwYXJhbSB7Q29sb3J9IGJhY2tncm91bmRDb2xvciAg5pGE5YOP5py655So5LqO5riF6Zmk5bGP5bmV55qE6IOM5pmv6Imy44CCXHJcbiAgICAgKiAgQHBhcmFtIHtOdW1iZXJ9IGRlcHRoICDmkYTlg4/mnLrmt7HluqbvvIznlKjkuo7lhrPlrprmkYTlg4/mnLrnmoTmuLLmn5Ppobrluo9cclxuICAgICAqICBAcGFyYW0ge051bWJlcn0gY3VsbGluZ01hc2sgIOWGs+WumuaRhOWDj+acuuS8mua4suafk+WcuuaZr+eahOWTquS4gOmDqOWIhuOAglxyXG4gICAgICogIEBwYXJhbSB7Q2FtZXJhLkNsZWFyRmxhZ3N9IGNsZWFyRmxhZ3MgIOWGs+WumuaRhOWDj+acuua4suafk+aXtuS8mua4hemZpOWTquS6m+eKtuaAgeOAglxyXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSBuZWFyQ2xpcCDmkYTlg4/mnLrnmoTov5Hliaroo4HpnaLjgIJcclxuICAgICAqICBAcGFyYW0ge051bWJlcn0gZmFyQ2xpcCAg5pGE5YOP5py655qE6L+c5Ymq6KOB6Z2i44CCXHJcbiAgICAgKiAgQHBhcmFtIHtSZWN0fSByZWN0ICDlhrPlrprmkYTlg4/mnLrnu5jliLblnKjlsY/luZXkuIrlk6rkuKrkvY3nva7vvIzlgLzkuLogMC0x44CCXHJcbiAgICAgKiAgQHBhcmFtIHtCb29sZWFufSBvcnRobyAg6K6+572u5pGE5YOP5py655qE5oqV5b2x5qih5byP5piv5q2j5Lqk6L+Y5piv6YCP6KeG5qih5byP44CCXHJcbiAgICAgKiAgQHBhcmFtIHtOdW1iZXJ9IG9ydGhvU2l6ZSAg5pGE5YOP5py65Zyo5q2j5Lqk5oqV5b2x5qih5byP5LiL55qE6KeG56qX5aSn5bCP44CCXHJcbiAgICAgKiAgQHBhcmFtIHtOdW1iZXJ9IGZvdiAg5Yaz5a6a5pGE5YOP5py66KeG6KeS55qE5a695bqm77yM5b2T5pGE5YOP5py65aSE5LqO6YCP6KeG5oqV5b2x5qih5byP5LiL6L+Z5Liq5bGe5oCn5omN5Lya55Sf5pWI44CCXHJcbiAgICAgKiAgQHBhcmFtIHtSZW5kZXJUZXh0dXJlfSB0YXJnZXRUZXh0dXJlICDmkYTlg4/mnLrmuLLmn5PnmoTnm67moIcgUmVuZGVyVGV4dHVyZeOAglxyXG4gICAgICogIEBwYXJhbSB7Q2FtZXJhfSBtYWluIOesrOS4gOS4quiiq+a/gOa0u+eahOaRhOWDj+acuuOAglxyXG4gICAgICogIEBwYXJhbSB7W0NhbWVyYV19IGNhbWVyYXMgIOa/gOa0u+eahOaJgOacieaRhOWDj+acuuOAglxyXG4gICAgICogIEBmdW5jdGlvbiBmaW5kQ2FtZXJhIOiOt+WPluiKgueCueaJgOWcqOeahOesrOS4gOS4quaRhOWDj+acuuOAglxyXG4gICAgICogIEBmdW5jdGlvbiBnZXROb2RlVG9DYW1lcmFUcmFuc2Zvcm0g6L+U5Zue5LiA5Liq5bCG6IqC54K55Z2Q5qCH57O76L2s5o2i5Yiw5pGE5YOP5py65Z2Q5qCH57O75LiL55qE55+p6Zi1XHJcbiAgICAgKiAgQGZ1bmN0aW9uIGdldENhbWVyYVRvV29ybGRQb2ludCDlsIbkuIDkuKrmkYTlg4/mnLrlnZDmoIfns7vkuIvnmoTngrnovazmjaLliLDkuJbnlYzlnZDmoIfns7vkuIvjgIJcclxuICAgICAqICBAZnVuY3Rpb24gZ2V0V29ybGRUb0NhbWVyYVBvaW50IOWwhuS4gOS4quS4lueVjOWdkOagh+ezu+S4i+eahOeCuei9rOaNouWIsOaRhOWDj+acuuWdkOagh+ezu+S4i+OAglxyXG4gICAgICogIEBmdW5jdGlvbiBnZXRXb3JsZFRvQ2FtZXJhTWF0cml4IOiOt+WPluS4lueVjOWdkOagh+ezu+WIsOaRhOWDj+acuuWdkOagh+ezu+eahOefqemYtVxyXG4gICAgICogIEBmdW5jdGlvbiBnZXRSYXkg5LuO5bGP5bmV5Z2Q5qCH6I635Y+W5LiA5p2h5bCE57q/XHJcbiAgICAgKiAgQGZ1bmN0aW9uIGNvbnRhaW5zTm9kZSDmo4DmtYvoioLngrnmmK/lkKbooqvmraTmkYTlg4/mnLrlvbHlk41cclxuICAgICAqICBAZnVuY3Rpb24gcmVuZGVyIOaJi+WKqOa4suafk+aRhOWDj+acuuOAglxyXG4gICAgICovXHJcblxyXG4gIFxyXG5cclxuXHJcbn0iXX0=