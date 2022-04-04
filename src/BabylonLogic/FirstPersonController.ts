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
    this.CreateFloor();
    this.CreateEngineShed();
    this.CreateController();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  CreateScene(): Scene {
    const scene = new Scene(this.engine);

    // Free camera to add flight for visual bug checking in map
    // const camera = new FreeCamera("camera", new Vector3(0, 5, -15), this.scene);
    // camera.attachControl();
    // camera.speed = 0.5;

    //const envTex = CubeTexture.CreateFromPrefilteredData(
    //  "./enviroment/environment.env",
    //  scene
    //);

    //Uses light sources from skybox without img displaying
    //scene.environmentTexture = envTex;
    //scene.createDefaultSkybox(envTex, true);
    //global brightness for PBR skybox
    //scene.environmentIntensity = 0.75;
    // Skybox file is too large for 2GB max github repo hosted size. Hemi use instead.

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

  async CreateFloor(): Promise<void> {
    const { meshes } = await SceneLoader.ImportMeshAsync(
      "",
      "./models/",
      //  "EngineShedtest2.glb"
      "ScaledJFloors.glb"
    );

    meshes.map((mesh) => {
      mesh.checkCollisions = false;
    });

    // console.log("models", meshes);
  }

  async CreateEngineShed(): Promise<void> {
    const { meshes } = await SceneLoader.ImportMeshAsync(
      "",
      "./models/",
      //  "EngineShedtest2.glb"
      "ScaledJMap.glb"
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
    camera.speed = 0.5;
    camera.angularSensibility = 8500;

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
