import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

function Ball({ onMediaDevice }) {
  const ball = useGLTF("./earth/scene.gltf");
  return (
    <primitive
      object={ball.scene}
      scale={onMediaDevice ? 0.03 : 0.025}
      position-y={0}
      rotation-y={Math.PI / 4}
    />
  );
}

function BallCanvas({ onMediaDevice }) {
  const ballRef = useRef();

  return (
    <div className="canvas-container w-full h-full bg-transparent">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 50,
          near: 0.1,
          far: 200,
          position: [0, 0, 4],
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <Suspense fallback={null}>
          <Preload all />
          <motion.group ref={ballRef} position={[0, 0, 0]}>
            <Ball onMediaDevice={onMediaDevice} />
          </motion.group>
        </Suspense>
        <OrbitControls
          enableRotate={true}
          autoRotate
          enablePan={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export default BallCanvas;
