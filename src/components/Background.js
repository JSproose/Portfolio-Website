// https://varun.ca/modular-webgl/


import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useMemo } from "react";
import { OrthographicCamera } from '@react-three/drei';
import { EffectComposer, ChromaticAberration, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';



import vertexShader from '../shaders/VertexShader.js';
import fragmentShader from '../shaders/FragmentShader.js';

const Plane = () => {


  // This reference will give us direct access to the mesh
  const mesh = useRef();

  const uniforms = useMemo(() => ({
    u_time: {
      value: 1.0,
    },
  }),[]);
    


  // Run once when window is opened
  useEffect(() => {

  }, []);

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh position={[0,0,0]} ref={mesh}>
      <planeGeometry args={[2,2]}/>
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
};


const Background = () => {
  
  return (
    <div className="canvas">
    <Canvas dpr={window.devicePixelRatio}>
      <OrthographicCamera position={[0,0,4.4]} left={-1/2} right={1/2} top={1/2} bottom={-1/2} near={1} far={1000}>
        <Plane />
      </OrthographicCamera>
      <EffectComposer>
      <ChromaticAberration blendFunction={BlendFunction.NORMAL} />      
      </EffectComposer>
    </Canvas>
    </div>
  );
};


export default Background;