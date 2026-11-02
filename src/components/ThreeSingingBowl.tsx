"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { CHAKRAS, ChakraInfo } from '../utils/healing';
import { playSingingBowlStrike } from '../utils/audioSynthesizer';
import { Volume2, VolumeX, Sparkles, RotateCw, Eye, EyeOff, Music } from 'lucide-react';

interface ThreeSingingBowlProps {
  activeChakraId?: string;
  onChakraSelect?: (chakraId: string) => void;
  className?: string;
}

export const ThreeSingingBowl: React.FC<ThreeSingingBowlProps> = ({
  activeChakraId = 'solar',
  onChakraSelect,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedChakra, setSelectedChakra] = useState<ChakraInfo>(
    CHAKRAS.find(c => c.id === activeChakraId) || CHAKRAS[2]
  );
  const [isStriking, setIsStriking] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isZenMode, setIsZenMode] = useState(false);
  const [resonanceLevel, setResonanceLevel] = useState(1.0);

  // References to communicate with Three.js loop without resetting the scene
  const strikeTriggerRef = useRef<(() => void) | null>(null);
  const chakraColorRef = useRef<THREE.Color>(new THREE.Color(selectedChakra.color));
  const autoRotateRef = useRef<boolean>(autoRotate);
  const resonanceLevelRef = useRef<number>(resonanceLevel);
  const isVisibleRef = useRef<boolean>(false);
  const requestFrameRef = useRef<number>(0);

  useEffect(() => {
    const ch = CHAKRAS.find(c => c.id === activeChakraId);
    if (ch) {
      setSelectedChakra(ch);
      chakraColorRef.current.set(ch.color);
    }
  }, [activeChakraId]);

  useEffect(() => {
    chakraColorRef.current.set(selectedChakra.color);
  }, [selectedChakra]);

  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    resonanceLevelRef.current = resonanceLevel;
  }, [resonanceLevel]);

  const handleStrike = useCallback(() => {
    setIsStriking(true);
    setTimeout(() => setIsStriking(false), 800);

    if (soundEnabled) {
      playSingingBowlStrike({
        frequency: selectedChakra.frequency,
        duration: 6.5,
        volume: 0.75 * resonanceLevel,
        intensity: 0.9,
      });
    }

    if (strikeTriggerRef.current) {
      strikeTriggerRef.current();
    }
  }, [selectedChakra, soundEnabled, resonanceLevel]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 560;

    // 1. Scene, Camera, High-Efficiency Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1f6fb);
    scene.fog = new THREE.FogExp2(0xf1f6fb, 0.035);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 80);
    camera.position.set(0, 3.4, 6.2);
    camera.lookAt(0, 0.6, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: 'high-performance',
      alpha: false,
      stencil: false,
      depth: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = false;

    container.appendChild(renderer.domElement);

    // 2. Studio Environment Reflection
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envTexture = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;
    pmremGenerator.dispose();

    // 3. Studio Lighting Rig (Optimized 512x512 shadow resolution)
    const keyLight = new THREE.DirectionalLight(0xfffaec, 2.5);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 512;
    keyLight.shadow.mapSize.height = 512;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 16;
    keyLight.shadow.camera.left = -3;
    keyLight.shadow.camera.right = 3;
    keyLight.shadow.camera.top = 3;
    keyLight.shadow.camera.bottom = -3;
    keyLight.shadow.bias = -0.0006;
    scene.add(keyLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xcbe0f2, 1.3);
    scene.add(hemiLight);

    const rimLight = new THREE.DirectionalLight(0xd4af37, 1.1);
    rimLight.position.set(-5, 4, -4);
    scene.add(rimLight);

    // Interactive Chakra Point Light
    const chakraLight = new THREE.PointLight(chakraColorRef.current, 1.8, 5);
    chakraLight.position.set(0, 1.2, 0);
    scene.add(chakraLight);

    // 4. Procedural Hammered Texture (Fast 256x256 texture)
    const createHammeredTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#999999';
      ctx.fillRect(0, 0, 256, 256);

      for (let i = 0; i < 350; i++) {
        const x = Math.random() * 256;
        const y = Math.random() * 256;
        const radius = 4 + Math.random() * 8;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const shade = Math.floor(100 + Math.random() * 120);
        grad.addColorStop(0, `rgb(${shade + 40},${shade + 40},${shade + 40})`);
        grad.addColorStop(0.7, `rgb(${shade},${shade},${shade})`);
        grad.addColorStop(1, '#999999');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(4, 2);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    const hammeredTexture = createHammeredTexture();

    // 5. Himalayan Singing Bowl Assembly
    const bowlGroup = new THREE.Group();
    bowlGroup.position.set(0, 0.45, 0);

    // Lathe Geometry of Singing Bowl
    const bowlPoints: THREE.Vector2[] = [];
    bowlPoints.push(new THREE.Vector2(0.0, 0.04));
    bowlPoints.push(new THREE.Vector2(0.65, 0.05));
    bowlPoints.push(new THREE.Vector2(1.25, 0.35));
    bowlPoints.push(new THREE.Vector2(1.68, 0.85));
    bowlPoints.push(new THREE.Vector2(1.85, 1.35));
    bowlPoints.push(new THREE.Vector2(1.90, 1.65));
    bowlPoints.push(new THREE.Vector2(1.88, 1.72));
    bowlPoints.push(new THREE.Vector2(1.82, 1.70));
    bowlPoints.push(new THREE.Vector2(1.74, 1.45));
    bowlPoints.push(new THREE.Vector2(1.58, 0.95));
    bowlPoints.push(new THREE.Vector2(1.15, 0.45));
    bowlPoints.push(new THREE.Vector2(0.55, 0.16));
    bowlPoints.push(new THREE.Vector2(0.0, 0.15));

    const bowlGeometry = new THREE.LatheGeometry(bowlPoints, 40);
    bowlGeometry.computeVertexNormals();

    const bowlMaterial = new THREE.MeshStandardMaterial({
      color: 0xdeb75c,
      metalness: 0.90,
      roughness: 0.25,
      bumpMap: hammeredTexture,
      bumpScale: 0.012,
    });

    const bowlMesh = new THREE.Mesh(bowlGeometry, bowlMaterial);
    bowlMesh.castShadow = true;
    bowlMesh.receiveShadow = true;
    bowlGroup.add(bowlMesh);

    // Accent Rim Band
    const rimBandGeom = new THREE.TorusGeometry(1.87, 0.022, 10, 40);
    rimBandGeom.rotateX(Math.PI / 2);
    rimBandGeom.scale(1, 1, 0.6);
    const rimBandMat = new THREE.MeshStandardMaterial({
      color: 0x6e4815,
      metalness: 0.85,
      roughness: 0.4,
    });
    const rimBandMesh = new THREE.Mesh(rimBandGeom, rimBandMat);
    rimBandMesh.position.set(0, 1.55, 0);
    bowlGroup.add(rimBandMesh);

    // Secondary Accent Rim Band near bottom
    const lowerBandGeom = new THREE.TorusGeometry(1.30, 0.016, 8, 40);
    lowerBandGeom.rotateX(Math.PI / 2);
    const lowerBandMesh = new THREE.Mesh(lowerBandGeom, rimBandMat);
    lowerBandMesh.position.set(0, 0.42, 0);
    bowlGroup.add(lowerBandMesh);

    // Water Pool (High-performance shimmering water WITHOUT offscreen transmission render pass)
    const waterGeom = new THREE.CircleGeometry(1.35, 30);
    waterGeom.rotateX(-Math.PI / 2);
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x3b5f7d,
      roughness: 0.1,
      metalness: 0.7,
      transparent: true,
      opacity: 0.8,
    });
    const waterMesh = new THREE.Mesh(waterGeom, waterMat);
    waterMesh.position.set(0, 0.55, 0);
    bowlGroup.add(waterMesh);

    // Silk Brocade Cushion Base
    const cushionGroup = new THREE.Group();
    const cushionGeom = new THREE.TorusGeometry(0.95, 0.28, 14, 40);
    cushionGeom.rotateX(Math.PI / 2);
    cushionGeom.scale(1, 1, 0.65);

    const cushionMat = new THREE.MeshStandardMaterial({
      color: 0x663366,
      roughness: 0.75,
      metalness: 0.15,
    });
    const cushionMesh = new THREE.Mesh(cushionGeom, cushionMat);
    cushionMesh.position.set(0, 0.18, 0);
    cushionMesh.castShadow = true;
    cushionMesh.receiveShadow = true;
    cushionGroup.add(cushionMesh);

    // Gold silk brocade piping
    const pipingGeom = new THREE.TorusGeometry(0.96, 0.03, 8, 30);
    pipingGeom.rotateX(Math.PI / 2);
    const goldPipingMat = new THREE.MeshStandardMaterial({
      color: 0xdfb75c,
      metalness: 0.9,
      roughness: 0.25,
    });
    const pipingMesh = new THREE.Mesh(pipingGeom, goldPipingMat);
    pipingMesh.position.set(0, 0.18, 0);
    cushionGroup.add(pipingMesh);

    // Wooden Suede Mallet / Striker
    const strikerGroup = new THREE.Group();
    const handleGeom = new THREE.CylinderGeometry(0.07, 0.08, 1.8, 12);
    const woodMat = new THREE.MeshStandardMaterial({
      color: 0x543216,
      roughness: 0.6,
      metalness: 0.05,
    });
    const handleMesh = new THREE.Mesh(handleGeom, woodMat);
    handleMesh.position.set(0, 0.9, 0);
    strikerGroup.add(handleMesh);

    const headGeom = new THREE.CylinderGeometry(0.12, 0.12, 0.8, 12);
    const suedeMat = new THREE.MeshStandardMaterial({
      color: 0x8a6f4d,
      roughness: 0.95,
      metalness: 0.02,
    });
    const headMesh = new THREE.Mesh(headGeom, suedeMat);
    headMesh.position.set(0, 0.45, 0);
    strikerGroup.add(headMesh);

    strikerGroup.position.set(2.4, 0.15, 0.6);
    strikerGroup.rotation.set(0.15, 0.2, 0.65);
    strikerGroup.castShadow = true;

    // Soft Contact Shadow Plane
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d')!;
    const sGrad = sCtx.createRadialGradient(64, 64, 0, 64, 64, 60);
    sGrad.addColorStop(0, 'rgba(30, 41, 59, 0.35)');
    sGrad.addColorStop(0.5, 'rgba(30, 41, 59, 0.1)');
    sGrad.addColorStop(1, 'rgba(30, 41, 59, 0)');
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 128, 128);
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);

    const contactPlaneGeom = new THREE.PlaneGeometry(5.2, 5.2);
    contactPlaneGeom.rotateX(-Math.PI / 2);
    const contactPlaneMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const contactPlane = new THREE.Mesh(contactPlaneGeom, contactPlaneMat);
    contactPlane.position.y = 0.01;
    scene.add(contactPlane);

    // 3D Acoustic Resonance Wave Rings
    const waveCount = 3;
    const waveRings: THREE.Mesh[] = [];
    const waveMat = new THREE.MeshBasicMaterial({
      color: chakraColorRef.current,
      transparent: true,
      opacity: 0,
      wireframe: true,
      depthWrite: false,
    });

    for (let i = 0; i < waveCount; i++) {
      const ringGeom = new THREE.RingGeometry(1.9, 1.95, 28);
      ringGeom.rotateX(-Math.PI / 2);
      const ringMesh = new THREE.Mesh(ringGeom, waveMat.clone());
      ringMesh.position.set(0, 1.7, 0);
      ringMesh.visible = false;
      scene.add(ringMesh);
      waveRings.push(ringMesh);
    }

    // Floating Prana Particles
    const particleCount = 35;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 3.8;
      particlePositions[i * 3 + 1] = 0.2 + Math.random() * 3.2;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 3.8;
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: chakraColorRef.current,
      size: 0.05,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // Assemble Main Group
    const masterGroup = new THREE.Group();
    masterGroup.add(cushionGroup);
    masterGroup.add(bowlGroup);
    masterGroup.add(strikerGroup);
    scene.add(masterGroup);

    let strikeAnimationProgress = 0;
    let waveProgress = [0, 0, 0];
    let isWaveActive = false;

    strikeTriggerRef.current = () => {
      strikeAnimationProgress = 1.0;
      isWaveActive = true;
      waveProgress = [0, -0.3, -0.6];
    };

    let targetCameraX = 0;
    let targetCameraY = 3.4;
    let cachedRect: DOMRect | null = null;

    const updateRect = () => {
      if (container) {
        cachedRect = container.getBoundingClientRect();
      }
    };
    updateRect();

    const handlePointerMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) return;
      if (!cachedRect) updateRect();
      if (!cachedRect) return;
      const x = ((e.clientX - cachedRect.left) / cachedRect.width) * 2 - 1;
      const y = -(((e.clientY - cachedRect.top) / cachedRect.height) * 2 - 1);
      targetCameraX = x * 0.9;
      targetCameraY = 3.4 + y * 0.5;
    };

    container.addEventListener('mousemove', handlePointerMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      updateRect();
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // =========================================================================
    // NATIVE 60-FPS SMOOTH RENDER LOOP (Zero Jitter, Zero Layout Recalcs)
    // Completely pauses (0% GPU/CPU) when scrolled out of view.
    // =========================================================================
    const clock = new THREE.Clock();

    const tick = () => {
      if (!isVisibleRef.current) {
        return; // Complete sleep when out of view
      }

      requestFrameRef.current = requestAnimationFrame(tick);

      const delta = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();

      // Camera dampening
      camera.position.x = THREE.MathUtils.damp(camera.position.x, targetCameraX, 3.5, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, targetCameraY, 3.5, delta);
      camera.lookAt(0, 0.7, 0);

      // Bowl rotation
      if (autoRotateRef.current) {
        bowlGroup.rotation.y += delta * 0.12;
      }

      // Smooth color transitions
      chakraLight.color.lerp(chakraColorRef.current, 0.1);
      particleMat.color.lerp(chakraColorRef.current, 0.1);

      // Strike mallet animation
      if (strikeAnimationProgress > 0) {
        strikeAnimationProgress -= delta * 2.8;
        if (strikeAnimationProgress < 0) strikeAnimationProgress = 0;
        const swing = Math.sin(strikeAnimationProgress * Math.PI);
        strikerGroup.position.x = 2.4 - swing * 0.55;
        strikerGroup.rotation.z = 0.65 - swing * 0.45;

        bowlMesh.scale.set(
          1 + Math.sin(elapsed * 50) * 0.01 * strikeAnimationProgress,
          1 + Math.cos(elapsed * 50) * 0.01 * strikeAnimationProgress,
          1 + Math.sin(elapsed * 50) * 0.01 * strikeAnimationProgress
        );
      } else {
        bowlMesh.scale.set(1, 1, 1);
        strikerGroup.position.x = THREE.MathUtils.damp(strikerGroup.position.x, 2.4, 4, delta);
        strikerGroup.rotation.z = THREE.MathUtils.damp(strikerGroup.rotation.z, 0.65, 4, delta);
      }

      // Acoustic wave rings
      if (isWaveActive) {
        let anyActive = false;
        waveRings.forEach((ring, idx) => {
          waveProgress[idx] += delta * 0.65;
          const prog = waveProgress[idx];
          if (prog > 0 && prog < 1.0) {
            anyActive = true;
            ring.visible = true;
            const currentScale = 1.0 + prog * 2.6;
            ring.scale.set(currentScale, currentScale, 1);
            ring.position.y = 1.7 + prog * 0.7;
            (ring.material as THREE.MeshBasicMaterial).color.copy(chakraColorRef.current);
            (ring.material as THREE.MeshBasicMaterial).opacity = (1 - prog) * 0.5 * resonanceLevelRef.current;
          } else if (prog >= 1.0) {
            ring.visible = false;
          }
        });
        if (!anyActive && strikeAnimationProgress <= 0) {
          isWaveActive = false;
        }
      }

      // Rotate particles smoothly via Group transform (0 CPU buffer upload)
      particles.rotation.y += delta * 0.05;

      renderer.render(scene, camera);
    };

    // IntersectionObserver to freeze WebGL when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isIntersecting = entry.isIntersecting;
        isVisibleRef.current = isIntersecting;

        if (isIntersecting) {
          clock.start();
          cancelAnimationFrame(requestFrameRef.current);
          requestFrameRef.current = requestAnimationFrame(tick);
        } else {
          cancelAnimationFrame(requestFrameRef.current);
        }
      },
      { threshold: 0.02 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      cancelAnimationFrame(requestFrameRef.current);

      envTexture.dispose();
      bowlGeometry.dispose();
      bowlMaterial.dispose();
      hammeredTexture.dispose();
      rimBandGeom.dispose();
      rimBandMat.dispose();
      lowerBandGeom.dispose();
      waterGeom.dispose();
      waterMat.dispose();
      cushionGeom.dispose();
      cushionMat.dispose();
      pipingGeom.dispose();
      goldPipingMat.dispose();
      handleGeom.dispose();
      woodMat.dispose();
      headGeom.dispose();
      suedeMat.dispose();
      contactPlaneGeom.dispose();
      contactPlaneMat.dispose();
      shadowTex.dispose();
      waveRings.forEach(r => {
        r.geometry.dispose();
        (r.material as THREE.Material).dispose();
      });
      particleGeom.dispose();
      particleMat.dispose();
      renderer.forceContextLoss();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#f8fbfd] to-[#edf4fa] border border-[#d6e3f0] shadow-xl ${className}`}>
      {/* 3D WebGL Canvas Mount Container */}
      <div
        ref={mountRef}
        data-testid="three-singing-bowl-canvas"
        className="w-full h-[440px] md:h-[540px] cursor-grab active:cursor-grabbing"
        onClick={handleStrike}
        title="Click anywhere on the 3D sanctuary to strike the singing bowl"
      />

      {/* Top Overlay: Title & Frequency Indicator */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="bg-white/95 border border-[#d8e3ed] px-4 py-2 rounded-2xl shadow-md pointer-events-auto flex items-center gap-3">
          <div
            className="w-3.5 h-3.5 rounded-full shadow-sm"
            style={{ backgroundColor: selectedChakra.color }}
          />
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#663366] font-bold">
              {selectedChakra.name} ({selectedChakra.sanskrit})
            </div>
            <div className="text-sm font-serif-elegant text-[#1e293b] flex items-center gap-2">
              <span className="font-semibold">{selectedChakra.frequency} Hz Solfeggio [{selectedChakra.solfeggioKey}]</span>
              <span className="text-[#64748b] text-xs font-sans">• Note {selectedChakra.note}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setIsZenMode(!isZenMode)}
            className="bg-white/95 hover:bg-[#f1f6fb] text-[#475569] hover:text-[#663366] border border-[#d8e3ed] px-3.5 py-2 rounded-2xl transition text-xs flex items-center gap-1.5 shadow-md font-medium"
            title={isZenMode ? 'Show Controls' : 'Zen View Mode'}
          >
            {isZenMode ? <Eye className="w-4 h-4 text-[#663366]" /> : <EyeOff className="w-4 h-4" />}
            <span className="hidden sm:inline">{isZenMode ? 'Show Dock' : 'Zen View'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Center Click Prompt */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`transition-opacity duration-700 pointer-events-none text-center ${isStriking ? 'opacity-0 scale-95' : 'opacity-40 hover:opacity-80'}`}>
          <div className="text-xs uppercase tracking-[0.25em] text-[#663366] font-semibold drop-shadow-sm bg-white/70 px-4 py-1.5 rounded-full border border-white/80">
            Click Anywhere To Strike & Resonate
          </div>
        </div>
      </div>

      {/* Unified Bottom Control Dock */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-[94%] max-w-2xl bg-white/95 border border-[#d8e3ed] rounded-2xl p-3 shadow-xl transition-all duration-500 ${
          isZenMode ? 'translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="flex flex-col gap-2.5">
          {/* Top Row: Chakra Frequency Selector */}
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 scrollbar-none">
            {CHAKRAS.map((ch) => {
              const isSelected = ch.id === selectedChakra.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    setSelectedChakra(ch);
                    if (onChakraSelect) onChakraSelect(ch.id);
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 border ${
                    isSelected
                      ? 'border-[#663366] bg-[#f7edf7] text-[#552555] shadow-sm'
                      : 'border-transparent hover:border-[#e2eaf2] text-[#64748b] hover:text-[#1e293b]'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: ch.color }}
                  />
                  <span>{ch.frequency}Hz</span>
                </button>
              );
            })}
          </div>

          {/* Bottom Row: Strike Action, Audio Toggle, Rotation */}
          <div className="flex items-center justify-between pt-1 border-t border-[#edf2f7] text-xs">
            <button
              onClick={handleStrike}
              className="bg-[#663366] hover:bg-[#7b3e7b] active:scale-95 text-white font-bold px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-current text-[#ffd875]" />
              <span>Strike Singing Bowl</span>
            </button>

            <div className="flex items-center gap-2 sm:gap-3 text-[#64748b]">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-2 rounded-xl border transition ${
                  soundEnabled
                    ? 'border-[#663366]/40 bg-[#f7edf7] text-[#663366]'
                    : 'border-[#e2eaf2] text-[#94a3b8]'
                }`}
                title={soundEnabled ? 'Harmonic sound enabled' : 'Muted'}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-2 rounded-xl border transition ${
                  autoRotate
                    ? 'border-[#663366]/40 bg-[#f7edf7] text-[#663366]'
                    : 'border-[#e2eaf2] text-[#94a3b8]'
                }`}
                title={autoRotate ? 'Auto-rotation active' : 'Rotation paused'}
              >
                <RotateCw className="w-4 h-4" />
              </button>

              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f1f6fb] border border-[#d8e3ed] text-[#334155]">
                <Music className="w-3.5 h-3.5 text-[#663366]" />
                <span className="font-serif-elegant italic text-sm">Seed Mantra: {selectedChakra.mantra}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
