import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";

import {
  ViewerApp,
  AssetManagerPlugin,
  AssetManagerBasicPopupPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
} from "https://dist.pixotronics.com/webgi/runtime/bundle-0.7.9.mjs";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";
import { useSnapshot } from "valtio";
import state from "../store";

gsap.registerPlugin(ScrollTrigger)

const WebgiViewer = () => {
  const snap = useSnapshot(state)
  const canvasRef = useRef(null);
  let obj = document.getElementById("webgi-canvas");

  const memoizedScrollAnimation = useCallback(
    (position, target, onUpdate) => {
      if(position && target && onUpdate) {
        scrollAnimation(position, target, onUpdate);
      }
    }, []
  )

  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    const manager = await viewer.addPlugin(AssetManagerPlugin);


    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    // Add plugins individually.
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    // This must be called once after all plugins are added.
    viewer.renderer.refreshPipeline();

    // Import and add a GLB file.
    await viewer.load("iphone-scene.glb");

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

    window.scrollTo(0, 0);

    let needsUpdate = true;

    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    }

    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });

  memoizedScrollAnimation(position, target, onUpdate);

  }, []);

  useEffect(() => {
    setupViewer();
    
  }, []);

  return (
    <>
      {snap.showObject && (
        <div id="webgi-canvas-container">
          <canvas
            id="webgi-canvas"
            ref={canvasRef}
            className="absolute top-20 md:right-[5%] w-[800px] h-[80vh]"
          />
        </div>
      )}
    </>
  );
};

export default WebgiViewer;
