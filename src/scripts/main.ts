import { Engine, Scene, Vector3, Mesh, Color3, Color4, ShadowGenerator, GlowLayer, PointLight, FreeCamera, CubeTexture, Sound, PostProcess, Effect, SceneLoader, Matrix, MeshBuilder, Quaternion, AssetsManager, EngineFactory } from "@babylonjs/core";

class App {
  // General Entire Application
  private _scene: Scene;
  private _canvas: HTMLCanvasElement;
  private _engine: Engine;

  constructor() {
    this._canvas = this._createCanvas();
    this._init();
  }

  private _createCanvas(): HTMLCanvasElement {
    this._canvas = document.createElement("canvas");
    this._canvas.id = "main-content";
    document.body.appendChild(this._canvas);

    return this._canvas;
  }

  private async _init(): Promise<void> {
    this._engine = (await EngineFactory.CreateAsync(this._canvas, undefined)) as Engine;
    this._scene = new Scene(this._engine);

    await this._main();
  }

  private async _main(): Promise<void> {

  }
}