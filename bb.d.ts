
declare module bb {
    export enum UI_ACTION_IN {
        NONE,
        SCALE_IN,
        MOVE_RIGHT_IN,
        MOVE_LEFT_IN,
        MOVE_UP_IN,
        MOVE_DOWN_IN,
    }

    export enum UI_ACTION_OUT {
        NONE,
        SCALE_OUT,
        MOVE_RIGHT_OUT,
        MOVE_LEFT_OUT,
        MOVE_UP_OUT,
        MOVE_DOWN_OUT,
    }

    export enum LOG {
        NONE,
        NOMAL,
        INFO,
        WARIN,
        ERROR,
    }


    export var logLevel: number;
    export var logEnable: boolean;
    export var logCache: string[];

    // 普通输出
    export function log(msg: string)
    export function info(msg)
    // 输出 警告
    export function logW(msg: string)
    // 输出 错误
    export function logE(msg: string)


    export class BaseComponent extends cc.Component {
        actionInId: bb.UI_ACTION_IE;
        actionOutId: bb.UI_ACTION_OUT;
        uiCtrl: bb.UICtrl
        onEnter()
        onExit()
    }

    


    export class BasePool {
        constructor(prefab: cc.Prefab, num: number);
        get(): cc.Node;
        put(target: cc.Node): void;
        count(): number;
        size(): number;
        clear(): void;
    }

    export module PoolManager {
        export function addPool(name: string, pool: bb.BasePool);
        export function getPool(name: string);
        export function getPoolByName(name: string, prefab: cc.Prefab);
        export function getPoolNode(name: string);
        export function putPoolNode(name: string, target: cc.Node);
        export function removePool(name: string);
    }

    export class BaseModel {
        initModel();
        saveItem(key: string, item: any);
        getItem(key: string);
        removeItem(key: string);
    }

    export module ObjectManager {
        export function addModel(name: string, model: typeof bb.BaseModel);
        export function removeModel(name: string);
        export function getModelByName(name: string, model: typeof bb.BaseModel): bb.BaseModel;
    }

    export class SceneComponent extends cc.Component {
        sceneCtrl: bb.SceneCtrl = null;
        initBind(): void;
        onEnter(): void;
        onExit(): void;
    }

    export class ViewCtrl {
        name: string;
        node: cc.Node;
        parent: cc.Node;
        data: any;
        logicComponet: bb.BaseComponent;
        parentViewCtrl: bb.ViewCtrl;
        hideView(): void;
        showView(): void;
        destroyNode(): void;
        addSubViewCtrl(subViewCtrl: bb.ViewCtrl): void;
        popSubView(depth?: number): void
        popView(depth?: number): void
    }

    export class SceneCtrl {
        name: string;
        data: any;
        logicComponet: BaseComponent;
    }


    export module EventManager {
        export function addEventListener(type: number, callback: any, class_id: string = "", priority: number = 0);
        export function dispatchEvent(type: number, params?: any);
        export function removeEventListener(type: number, callback: any);
        export function removeEventListenerByTag(type: number, class_id: string);
    }

    export module UILoader {
        export function loadRes(url: string, type: typeof cc.Asset, callback: Function): void
        export function loadStaticRes(url: string, type: typeof cc.Asset, tag: string, callback: Function): void;
        export function loadResArr(paths: Array<string>, callfun: Function);
        export function loadAudioClip(path: string, callfun: Function);
        export function loadStaticResArr(paths: Array<string>, tag: string, callfun: Function)
        export function loadSpriteFrame(path: string, callfun: Function, retainRes: boolean = false)
        export function loadSpriteFrames(paths: Array<string>, callfun: Function, retainRes: boolean = false);

        export function releaseStaticRes(tag: string): void;

        export function releaseMusicRes(res: string): void;
        export function retatinRes(res: string);

        export function retainArrayRes(res: string[]);

        export function retainNodeRes(node: cc.Node);

        export function releaseNodeRes(node: cc.Node);

        export function releaseRes(res: string);

        export function releaseArrayRes(res: string[]);

        export function getCacheCount(): number;



        export function updateSpriteTexture(target: cc.Node, spriteFrame: cc.SpriteFrame): void;
        export function updateButtonTexture(target: cc.Node, normalSprite?: cc.SpriteFrame, pressedSprite?: cc.SpriteFrame, hoverSprite?: cc.SpriteFrame, disabledSprite?: cc.SpriteFrame);
        export function gc();
    }

    export module UIBind {
        export function bindComponent(component: cc.Component, options: object = null);
        export function bindNode(node: cc.Node, target: cc.Component, options: object = null): void;
        export function getComponentName(component: cc.Component);
    }
    export module ViewManager {
        export function removeView(node: bb.ViewCtrl);
        export function showView(name: string, prefab: cc.Prefab, data: any): bb.ViewCtrl;
        export function showViewSync(pathStr: string, data: any, callback?: Function);
        export function showSubView(name: string, prefab: cc.Prefab, data: any): bb.ViewCtrl;
        export function showSubViewSync(pathStr: string, data: any, callback: Function);
        export function showItem(name: string, prefab: cc.Prefab, data: any, parent: cc.Node, parentViewCtrl: bb.ViewCtrl);
        export function showItemSync(pathStr: string, data: any, parent: cc.Node, parentViewCtrl: bb.ViewCtrl, callback: Function);
        export function popView(depth?: number);
    }

    export module Localization {
        export function init();
        export function get(key: string);
    }

    export module AudioManager {
        export function playMusic(audioclip: cc.AudioClip, loop: boolean);
        export function playMusicSync(path: string, loop: boolean);
        export function playEffect(audioclip: cc.AudioClip, immediately: boolean);
        export function playEffectSync(path: string, immediately: boolean);
        export function setEffectsVolume(volume: number);
        export function setMusicVolume(volume: number);
        export function stopMusic();
        export function stopEffect();
    }

    export module SceneManager {
        export function loadScene(scene: string, data?: any);
    }


}