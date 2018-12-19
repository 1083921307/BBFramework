window["bb"] = {};

console.log("hello world");

import AppLog from './log/AppLog';
(window["bb"] as any).log   = AppLog.getInstance().log.bind(AppLog.getInstance());
(window["bb"] as any).log2  = AppLog.getInstance().log2.bind(AppLog.getInstance());
(window["bb"] as any).info  = AppLog.getInstance().info.bind(AppLog.getInstance());
(window["bb"] as any).info2 = AppLog.getInstance().info2.bind(AppLog.getInstance());
(window["bb"] as any).info3 = AppLog.getInstance().info3.bind(AppLog.getInstance());
(window["bb"] as any).warn  = AppLog.getInstance().warn.bind(AppLog.getInstance());
(window["bb"] as any).error = AppLog.getInstance().error.bind(AppLog.getInstance());


import SceneComponent from './view/base/SceneComponent'
(window["bb"] as any).SceneComponent = SceneComponent;

import SceneCtrl from './view/base/SceneCtrl'
(window["bb"] as any).SceneCtrl = SceneCtrl;

import BaseComponent from './view/base/BaseComponent'
(window["bb"] as any).BaseComponent = BaseComponent;

import ViewCtrl from './view/base/ViewCtrl'
(window["bb"] as any).ViewCtrl = ViewCtrl;

import UIBind from './loader/UIBind'
(window["bb"] as any).UIBind = UIBind.getInstance();

import UILoader from './loader/UILoader';
(window["bb"] as any).UILoader = UILoader.getInstance();

import Localization from './Localization';
(window["bb"] as any).Localization = Localization.getInstance();
(window["bb"] as any)._T = Localization.getInstance().get.bind(Localization.getInstance());

import EventManager from './event/EventManager'
(window["bb"] as any).EventManager = EventManager.getInstance();

import SceneManager from './scene/SceneManager'
(window["bb"] as any).SceneManager = SceneManager.getInstance();

import ViewManager from './view/ViewManager';
(window["bb"] as any).ViewManager = ViewManager.getInstance();

import AudioManager from './audio/AudioManager';
(window["bb"] as any).AudioManager = AudioManager.getInstance();
