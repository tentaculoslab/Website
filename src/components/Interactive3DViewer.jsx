import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three-stdlib';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sun, 
  Moon, 
  Grid, 
  Box,
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const Interactive3DViewer = ({ projectName = "Casa do Papai Noel" }) => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [renderMode, setRenderMode] = useState('shaded'); // 'shaded', 'wireframe', 'night'
  const [autoRotate, setAutoRotate] = useState(true);
  const [loading, setLoading] = useState(true);
  const [webGLError, setWebGLError] = useState(false);
  
  // Real SKP Angle Renders for high-definition fallback/orbit view
  const angleRenders = [
    { id: 0, label: 'Perspectiva 3D Isométrica', url: '/models/papai_noel_real_angle_0.png' },
    { id: 1, label: 'Elevação Frontal 3D', url: '/models/papai_noel_real_angle_1.png' },
    { id: 2, label: 'Vista Lateral Espacial', url: '/models/papai_noel_real_angle_2.png' },
    { id: 3, label: 'Elevação de Fachada', url: '/models/papai_noel_real_angle_3.png' },
    { id: 4, label: 'Planta Baixa de Montagem', url: '/models/papai_noel_real_angle_4.png' }
  ];
  const [currentAngleIndex, setCurrentAngleIndex] = useState(0);

  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const loadedMeshGroupRef = useRef(null);
  const lightsGroupRef = useRef(null);

  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });

  // Three.js WebGL Setup
  useEffect(() => {
    if (!containerRef.current) return;

    let scene, camera, renderer, animationFrameId;

    try {
      const width = containerRef.current.clientWidth || 600;
      const height = containerRef.current.clientHeight || 460;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x070d18);
      sceneRef.current = scene;

      const gridHelper = new THREE.GridHelper(80, 40, 0x38bdf8, 0x1e293b);
      gridHelper.position.y = -0.01;
      scene.add(gridHelper);

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(24, 18, 28);
      camera.lookAt(0, 5, 0);
      cameraRef.current = camera;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xfffaed, 2.2);
      dirLight.position.set(30, 45, 25);
      dirLight.castShadow = true;
      scene.add(dirLight);

      const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.8);
      fillLight.position.set(-25, 20, -25);
      scene.add(fillLight);

      const lightsGroup = new THREE.Group();
      scene.add(lightsGroup);
      lightsGroupRef.current = lightsGroup;

      const textureLoader = new THREE.TextureLoader();
      const realTexture = textureLoader.load('/models/papai_noel_real_angle_0.png');

      const loadedGroup = new THREE.Group();
      scene.add(loadedGroup);
      loadedMeshGroupRef.current = loadedGroup;

      const objLoader = new OBJLoader();
      objLoader.load(
        '/models/Casa_do_Papai_Noel_real.obj',
        (obj) => {
          const box = new THREE.Box3().setFromObject(obj);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 14 / (maxDim || 1);

          obj.position.sub(center);
          obj.position.y += (size.y * scale) / 2;
          obj.scale.set(scale, scale, scale);

          obj.traverse((child) => {
            if (child.isMesh) {
              child.material = new THREE.MeshStandardMaterial({
                map: realTexture,
                color: 0xffffff,
                roughness: 0.5,
                metalness: 0.1,
                side: THREE.DoubleSide
              });
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          loadedGroup.add(obj);

          // GSAP Entrance Animation
          gsap.from(loadedGroup.rotation, {
            y: Math.PI * 2,
            duration: 1.5,
            ease: "power2.out"
          });

          setLoading(false);
        },
        undefined,
        (err) => {
          console.warn("OBJ Mesh load fallback:", err);
          setLoading(false);
        }
      );

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        if (autoRotate && loadedMeshGroupRef.current && !isDraggingRef.current) {
          loadedMeshGroupRef.current.rotation.y += 0.006;
        }

        renderer.render(scene, camera);
      };

      animate();

      const domElement = renderer.domElement;

      const handleMouseDown = (e) => {
        isDraggingRef.current = true;
        previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
      };

      const handleMouseMove = (e) => {
        if (!isDraggingRef.current || !loadedMeshGroupRef.current) return;
        const deltaX = e.clientX - previousMousePositionRef.current.x;
        const deltaY = e.clientY - previousMousePositionRef.current.y;

        loadedMeshGroupRef.current.rotation.y += deltaX * 0.008;
        loadedMeshGroupRef.current.rotation.x += deltaY * 0.005;
        loadedMeshGroupRef.current.rotation.x = Math.max(-0.6, Math.min(0.9, loadedMeshGroupRef.current.rotation.x));
        previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
      };

      const handleMouseUp = () => {
        isDraggingRef.current = false;
      };

      domElement.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        cancelAnimationFrame(animationFrameId);
        domElement.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        if (renderer.domElement && containerRef.current) {
          try {
            containerRef.current.removeChild(renderer.domElement);
          } catch(e) {}
        }
        renderer.dispose();
      };
    } catch (err) {
      console.warn("WebGL initialization failed, falling back to 360 HD Image Orbit View:", err);
      setWebGLError(true);
      setLoading(false);
    }
  }, []);

  // Update Render Modes
  useEffect(() => {
    if (!loadedMeshGroupRef.current || !sceneRef.current) return;

    loadedMeshGroupRef.current.traverse((child) => {
      if (child.isMesh && child.material) {
        if (renderMode === 'wireframe') {
          child.material.wireframe = true;
          child.material.color.setHex(0x38bdf8);
        } else {
          child.material.wireframe = false;
          child.material.color.setHex(0xffffff);
        }
      }
    });

    if (renderMode === 'night') {
      sceneRef.current.background = new THREE.Color(0x030712);
      if (lightsGroupRef.current) {
        lightsGroupRef.current.children.forEach(l => l.intensity = 4.0);
      }
    } else {
      sceneRef.current.background = new THREE.Color(0x070d18);
      if (lightsGroupRef.current) {
        lightsGroupRef.current.children.forEach(l => l.intensity = 2.2);
      }
    }
  }, [renderMode]);

  const handleResetCamera = () => {
    if (loadedMeshGroupRef.current && cameraRef.current) {
      gsap.to(loadedMeshGroupRef.current.rotation, { x: 0, y: 0, z: 0, duration: 0.8, ease: "power2.out" });
      gsap.to(cameraRef.current.position, { x: 24, y: 18, z: 28, duration: 0.8, ease: "power2.out" });
    }
  };

  // If WebGL fails, render crisp 360 HD Image Orbit View!
  if (webGLError) {
    return (
      <div className="relative w-full rounded-xl overflow-hidden bg-[#070d18] border border-white/15 shadow-2xl cad-corner-ticks select-none">
        <div className="relative z-10 w-full h-[400px] sm:h-[460px] flex items-center justify-center p-4">
          <img
            src={angleRenders[currentAngleIndex].url}
            alt={angleRenders[currentAngleIndex].label}
            className="max-w-full max-h-[380px] object-contain rounded-lg shadow-2xl"
          />
          <button
            onClick={() => setCurrentAngleIndex(prev => (prev - 1 + angleRenders.length) % angleRenders.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-slate-950/80 text-white border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentAngleIndex(prev => (prev + 1) % angleRenders.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-slate-950/80 text-white border border-white/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-[#070d18] border border-white/15 shadow-2xl cad-corner-ticks select-none">
      
      {/* Three.js WebGL Canvas Container */}
      <div 
        ref={containerRef} 
        className="w-full h-[400px] sm:h-[460px] cursor-grab active:cursor-grabbing relative"
      />

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-[#0A1326]/90 backdrop-blur-sm z-30 flex flex-col items-center justify-center space-y-3">
          <div className="w-8 h-8 border-2 border-[#63A4FF] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs text-[#63A4FF] font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('viewer3D.loading', 'Carregando Visualizador 3D...')}
          </p>
        </div>
      )}

      {/* Top HUD Banner */}
      <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none text-[10px]">
        <div className="flex items-center gap-2 bg-[#0A1326]/90 px-3 py-1.5 rounded-lg border border-[#377BDB]/40 text-[#63A4FF] backdrop-blur-md shadow-lg">
          <Box className="w-3.5 h-3.5 text-[#63A4FF]" />
          <span className="font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('viewer3D.project', 'PROJETO 3D')}: {projectName}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 bg-[#0A1326]/90 px-3 py-1.5 rounded-lg border border-white/[0.08] text-slate-400 backdrop-blur-md">
          <span>{t('viewer3D.vertices', 'VÉRTICES')}: <strong className="text-[#63A4FF]">15.145</strong></span>
          <span>{t('viewer3D.polygons', 'POLÍGONOS')}: <strong className="text-slate-200">424.036</strong></span>
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="absolute bottom-3 left-3 right-3 z-20 bg-[#0A1326]/90 p-2.5 rounded-lg border border-white/[0.08] backdrop-blur-md flex items-center justify-between gap-3 flex-wrap text-xs">
        
        {/* Render Mode Switcher */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setRenderMode('shaded')}
            className={`px-3 py-1 rounded text-[11px] font-medium transition-all flex items-center gap-1 ${
              renderMode === 'shaded' ? 'bg-[#377BDB] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>{t('viewer3D.render3D', 'Render 3D')}</span>
          </button>

          <button
            onClick={() => setRenderMode('wireframe')}
            className={`px-3 py-1 rounded text-[11px] font-medium transition-all flex items-center gap-1 ${
              renderMode === 'wireframe' ? 'bg-[#377BDB] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>{t('viewer3D.wireframe', 'Aramado CAD')}</span>
          </button>

          <button
            onClick={() => setRenderMode('night')}
            className={`px-3 py-1 rounded text-[11px] font-medium transition-all flex items-center gap-1 ${
              renderMode === 'night' ? 'bg-[#377BDB] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>{t('viewer3D.night', 'Noturno')}</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-1.5 rounded transition-colors ${autoRotate ? 'text-[#63A4FF] bg-[#1B283D]' : 'text-slate-400 hover:text-white'}`}
            title={autoRotate ? t('viewer3D.pauseRotation', "Pausar Rotação 360°") : t('viewer3D.playRotation', "Ativar Rotação 360°")}
          >
            {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={handleResetCamera}
            className="p-1.5 rounded text-slate-400 hover:text-white transition-colors"
            title={t('viewer3D.resetCamera', "Resetar Câmera")}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Drag Hint */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-[10px] text-slate-200 bg-[#0A1326]/90 px-3.5 py-1 rounded-full border border-[#377BDB]/40 backdrop-blur-md shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
        🖱️ {t('viewer3D.dragHint', 'Clique e arraste na tela para rotacionar a malha 3D')}
      </div>

    </div>
  );
};
