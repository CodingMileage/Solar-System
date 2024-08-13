import React from "react";
import * as THREE from "three/";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLtfLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Three = () => {
  // Canvas
  //   const canvas =

  // Scene
  const scene = new THREE.Scene();
  //Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerHeight / window.innerHeight,
    0.1,
    1000
  );
  // Lights

  // Renderer

  // Animate
  return (
    <>
      <div className="canvas"></div>
    </>
  );
};

export default Three;
