
declare module bb {
    export function log(msg: string);
    export function log2(msg: string);
    export function info(msg: string);
    export function info2(msg: string);
    export function info3(msg: string);
    export function warn(msg: string);
    export function error(msg: string);
    export function _T(key: number);
    export class BaseComponent extends cc.Component{
        viewCtrl: bb.ViewCtrl;
        onEnter(): void;
        onExit(): void;
    }

    export class SceneComponent extends cc.Component{
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

        export function  releaseRes(res: string);

        export function  releaseArrayRes(res: string[]);
        
        export function getCacheCount(): number;

        

        export function updateSpriteTexture(target: cc.Node, spriteFrame: cc.SpriteFrame): void;
        export function updateButtonTexture(target: cc.Node, normalSprite?: cc.SpriteFrame, pressedSprite?: cc.SpriteFrame, hoverSprite?: cc.SpriteFrame, disabledSprite?: cc.SpriteFrame);
        export function  gc();
    }

    export module UIBind {
        export function  bindComponent(component: cc.Component, options: object = null);
        export function  bindNode(node : cc.Node, target: cc.Component, options: object = null) : void;
        export function  getComponentName(component : cc.Component);
    }
    export module ViewManager {
        export function removeView(node: bb.ViewCtrl);
        export function showView(name: string,  prefab: cc.Prefab, data: any): bb.ViewCtrl;
        export function showViewSync(pathStr: string, data: any, callback?: Function);
        export function showSubView(name: string,  prefab: cc.Prefab, data: any):  bb.ViewCtrl; 
        export function showSubViewSync(pathStr: string, data: any,  callback: Function);
        export function showItem(name: string,  prefab: cc.Prefab, data: any, parent: cc.Node, parentViewCtrl: bb.ViewCtrl);
        export function showItemSync(pathStr: string, data: any,  parent: cc.Node, parentViewCtrl: bb.ViewCtrl, callback: Function);
        export function popView(depth?: number);
    }

    export module Localization {
        export function init();
        export function get(key: string);
    }

    export module AudioManager {
        export function  playMusic(audioclip: cc.AudioClip, loop: boolean);
        export function  playMusicSync(path: string, loop: boolean);
        export function  playEffect(audioclip: cc.AudioClip, immediately: boolean);
        export function  playEffectSync(path: string, immediately: boolean);
        export function  setEffectsVolume(volume: number);
        export function  setMusicVolume(volume: number);
        export function  stopMusic();
        export function  stopEffect();
    }

    export module SceneManager {
        export function loadScene(scene: string, data?: any);
    }

   
}