gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1= [];
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32SceneCode.GDBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDCoinsObjects1= [];
gdjs.Game_32SceneCode.GDCoinsObjects2= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Game_32SceneCode.GDNewSprite2Objects1= [];
gdjs.Game_32SceneCode.GDNewSprite2Objects2= [];
gdjs.Game_32SceneCode.GDNewSprite3Objects1= [];
gdjs.Game_32SceneCode.GDNewSprite3Objects2= [];
gdjs.Game_32SceneCode.GDNewSprite4Objects1= [];
gdjs.Game_32SceneCode.GDNewSprite4Objects2= [];
gdjs.Game_32SceneCode.GDJoystickObjects1= [];
gdjs.Game_32SceneCode.GDJoystickObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Game_32SceneCode.GDNewSprite3Objects1});
gdjs.Game_32SceneCode.mapOfEmptyGDCoinsObjects = Hashtable.newFrom({"Coins": []});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.Game_32SceneCode.GDCoinsObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Game_32SceneCode.GDNewSpriteObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Game_32SceneCode.GDNewSprite4Objects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Game_32SceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Game_32SceneCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Game_32SceneCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSprite2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSprite3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSprite4Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Game_32SceneCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSprite3Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDNewSprite3Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDNewSprite3Objects1[k] = gdjs.Game_32SceneCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDNewSprite3Objects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game 1");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfEmptyGDCoinsObjects) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Game_32SceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Game_32SceneCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSprite2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSprite3Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Game_32SceneCode.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Game_32SceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSpriteObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Game_32SceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Game_32SceneCode.GDNewSprite4Objects1);
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSprite2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSprite4Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Game_32SceneCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDNewSprite4Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDNewSprite4Objects1[k] = gdjs.Game_32SceneCode.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDNewSprite4Objects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
