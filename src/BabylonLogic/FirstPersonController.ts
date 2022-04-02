import {
  Scene,
  Engine,
  FreeCamera,
  Vector3,
  MeshBuilder,
  CubeTexture,
  PBRMaterial,
  Texture,
  SceneLoader,
  Axis,
  HemisphericLight,
  SceneSerializer,
} from "@babylonjs/core";
import "@babylonjs/loaders";

export class FirstPersonController {
  scene: Scene;
  engine: Engine;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);
    this.scene = this.CreateScene();
    //this.CreateGround();
    //this.CreateBarrel();
    //this code is stolen off internet to help with 'reversed models' -- this.scene.useRightHandedSystem = true;
    this.CreateEngineShed();
    this.CreateController();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  CreateScene(): Scene {
    const scene = new Scene(this.engine);

    // commented code is from custommodels.ts
    // Free camera to add flight for visual bug checking in map
    // const camera = new FreeCamera("camera", new Vector3(0, 5, -15), this.scene);
    // camera.attachControl();
    // camera.speed = 0.25;

    //const envTex = CubeTexture.CreateFromPrefilteredData(
    //  "./enviroment/environment.env",
    //  scene
    //);

    //Uses light sources from skybox without img displaying
    //scene.environmentTexture = envTex;
    //scene.createDefaultSkybox(envTex, true);
    //global brightness for PBR skybox
    //scene.environmentIntensity = 0.75;

    const light = new HemisphericLight(
      "hemi",
      new Vector3(0, 1, 0),
      this.scene
    );
    light.intensity = 1;

    // Left click lock into screen + middle mouse unlocks
    scene.onPointerDown = (evt) => {
      if (evt.button === 0) this.engine.enterPointerlock();
      if (evt.button === 1) this.engine.exitPointerlock();
    };

    //Gravity for Y axis
    const framesPerSecond = 60;
    const gravity = -9.81; // earth gravity = -9.81
    scene.gravity = new Vector3(0, gravity / framesPerSecond, 0);

    scene.collisionsEnabled = true;

    return scene;
  }

  async CreateEngineShed(): Promise<void> {
    const { meshes } = await SceneLoader.ImportMeshAsync(
      "",
      "./models/",
      //  "EngineShedtest2.glb"
      "LearningHub.glb"
    );

    meshes.map((mesh) => {
      mesh.checkCollisions = true;
    });

    //can reference meshes from the models variable [0] is root / parent
    //meshes.meshes[0].position = new Vector3(-15, 0, 0);

    console.log("models", meshes);
  }

  CreateController(): void {
    // standard free camera
    const camera = new FreeCamera("camera", new Vector3(3, 1.5, 7), this.scene);
    camera.attachControl();

    camera.applyGravity = true;
    camera.checkCollisions = true;

    camera.ellipsoid = new Vector3(1.5, 0.7, 1.5);
    camera.speed = 0.7;
    camera.angularSensibility = 5000;

    // keycode.info used to find WASD
    camera.keysUp.push(87);
    camera.keysLeft.push(65);
    camera.keysDown.push(83);
    camera.keysRight.push(68);

    document.onkeydown = (e) => {
      if (e.code === "Space") camera.cameraDirection.y += 0.75;
    };
  }
}
