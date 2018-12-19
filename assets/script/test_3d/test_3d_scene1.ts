const {ccclass, property} = cc._decorator;
@ccclass
export default class test_3d_scene1 extends cc.Component{
    /** 
     *  2.1.0 Camera: 摄像机
     *  @param {Number} zoomRatio  摄像机缩放比率
     *  @param {Color} backgroundColor  摄像机用于清除屏幕的背景色。
     *  @param {Number} depth  摄像机深度，用于决定摄像机的渲染顺序
     *  @param {Number} cullingMask  决定摄像机会渲染场景的哪一部分。
     *  @param {Camera.ClearFlags} clearFlags  决定摄像机渲染时会清除哪些状态。
     *  @param {Number} nearClip 摄像机的近剪裁面。
     *  @param {Number} farClip  摄像机的远剪裁面。
     *  @param {Rect} rect  决定摄像机绘制在屏幕上哪个位置，值为 0-1。
     *  @param {Boolean} ortho  设置摄像机的投影模式是正交还是透视模式。
     *  @param {Number} orthoSize  摄像机在正交投影模式下的视窗大小。
     *  @param {Number} fov  决定摄像机视角的宽度，当摄像机处于透视投影模式下这个属性才会生效。
     *  @param {RenderTexture} targetTexture  摄像机渲染的目标 RenderTexture。
     *  @param {Camera} main 第一个被激活的摄像机。
     *  @param {[Camera]} cameras  激活的所有摄像机。
     *  @function findCamera 获取节点所在的第一个摄像机。
     *  @function getNodeToCameraTransform 返回一个将节点坐标系转换到摄像机坐标系下的矩阵
     *  @function getCameraToWorldPoint 将一个摄像机坐标系下的点转换到世界坐标系下。
     *  @function getWorldToCameraPoint 将一个世界坐标系下的点转换到摄像机坐标系下。
     *  @function getWorldToCameraMatrix 获取世界坐标系到摄像机坐标系的矩阵
     *  @function getRay 从屏幕坐标获取一条射线
     *  @function containsNode 检测节点是否被此摄像机影响
     *  @function render 手动渲染摄像机。
     */

  


}