import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { Engine } from "@babylonjs/core/Engines/engine";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Color4 } from "@babylonjs/core/Maths/math.color";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Scene } from "@babylonjs/core/scene";
import { Sprite } from "@babylonjs/core/Sprites/sprite";
import { SpritePackedManager } from "@babylonjs/core/Sprites/spritePackedManager";

class Playground {
    public static CreateScene(engine: Engine, canvas: HTMLCanvasElement): Scene {
        // This creates a basic Babylon Scene object (non-mesh)
        var scene = new Scene(engine);
        scene.clearColor = new Color4(0, 0, 0, 1);

        const camera = new FreeCamera("camera", new Vector3(0, -1, -10), scene);
        camera.attachControl();

        // Crear la luz
        const light = new HemisphericLight("light1", new Vector3(0, 6, -4), scene);
        light.intensity = 1;

        const enemies: Sprite[] = [];

        const enemyPacker = new SpritePackedManager("enemyPacker", "/assets/eneAtlas.png", 30, scene);

        //by default takes eneexplosion index 0
        enemies[0] = new Sprite("ene0", enemyPacker);
        enemies[0].position = new Vector3(2, 2, 0);
        enemies[0].cellIndex = 0;

        enemies[1] = new Sprite("ene1", enemyPacker);
        enemies[1].position = new Vector3(2, 1, 0);
        enemies[1].cellRef = "enebullet";

        enemies[2] = new Sprite("ene2", enemyPacker);
        enemies[2].position = new Vector3(2, 0, 0);
        enemies[2].cellRef = "ene2";

        enemies[0] = new Sprite("ene3", enemyPacker);
        enemies[0].position = new Vector3(2, -1, 0);
        enemies[0].cellRef = "ene3";
        enemies[0].playAnimation(0, 2, true, 400);

        return scene;
    }
}

declare var dat: any;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { Playground };
