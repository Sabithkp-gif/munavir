import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeLaptopCanvas({
  phase,
  lidOpenProgress, // 0 to 1
  typedName,
  typedRole,
  isScreenOn,
  rgbColor = '#c5ff4a',
  onCameraZoomComplete,
  isWarping
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const laptopGroupRef = useRef(null);
  const lidGroupRef = useRef(null);
  const screenTextureRef = useRef(null);
  const screenCanvasRef = useRef(null);
  const pointLightRef = useRef(null);
  const rimLightRef = useRef(null);

  // Mouse orbit drag state (defaults to clean, front-facing isometric view)
  const mouseDragRef = useRef({
    isDown: false,
    prevX: 0,
    prevY: 0,
    rotX: 0.12,
    rotY: -0.15,
    targetRotX: 0.12,
    targetRotY: -0.15,
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04050a, 0.035);
    sceneRef.current = scene;

    // 2. Camera - centered directly at laptop
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 5.0);
    camera.lookAt(0, 0.35, 0);
    cameraRef.current = camera;

    // 3. Renderer with high dynamic range & antialiasing
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Studio Lighting System (Bright, crisp product lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Main Key Light from top-front
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(3, 6, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Front-Fill Light to illuminate keyboard and bevels clearly
    const fillLight = new THREE.DirectionalLight(0xddeeff, 1.8);
    fillLight.position.set(-3, 3, 4);
    scene.add(fillLight);

    // Under-Chassis Accent Light (glows with active theme color)
    const accentLight = new THREE.PointLight(new THREE.Color(rgbColor), 3.5, 8);
    accentLight.position.set(0, -0.2, 0);
    pointLightRef.current = accentLight;
    scene.add(accentLight);

    // Backstage Rim Light (creates sleek edge contour on laptop lid)
    const rimLight = new THREE.DirectionalLight(new THREE.Color(rgbColor), 2.0);
    rimLight.position.set(0, 4, -4);
    rimLightRef.current = rimLight;
    scene.add(rimLight);

    // 5. Materials
    const spaceGrayChassis = new THREE.MeshStandardMaterial({
      color: 0x222530,
      metalness: 0.85,
      roughness: 0.22,
    });

    const silverChamferEdge = new THREE.MeshStandardMaterial({
      color: 0x5a6075,
      metalness: 0.95,
      roughness: 0.1,
    });

    const keyboardTrayMat = new THREE.MeshStandardMaterial({
      color: 0x0c0e14,
      metalness: 0.7,
      roughness: 0.5,
    });

    const keycapMat = new THREE.MeshStandardMaterial({
      color: 0x161824,
      metalness: 0.4,
      roughness: 0.35,
    });

    const keycapLitMat = new THREE.MeshStandardMaterial({
      color: 0x252b3d,
      emissive: new THREE.Color(rgbColor),
      emissiveIntensity: 0.25,
      metalness: 0.5,
      roughness: 0.3,
    });

    const trackpadMat = new THREE.MeshStandardMaterial({
      color: 0x1a1d28,
      metalness: 0.8,
      roughness: 0.2,
    });

    const hingeMat = new THREE.MeshStandardMaterial({
      color: 0x3d4254,
      metalness: 0.9,
      roughness: 0.15,
    });

    // 6. Laptop Group (Centered vertically at origin)
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0, -0.35, 0);
    laptopGroupRef.current = laptopGroup;
    scene.add(laptopGroup);

    // A. BASE CHASSIS (Bottom Half)
    const baseW = 3.8;
    const baseH = 0.12;
    const baseD = 2.5;

    // Main base body
    const baseGeo = new THREE.BoxGeometry(baseW, baseH, baseD);
    const baseMesh = new THREE.Mesh(baseGeo, spaceGrayChassis);
    baseMesh.position.y = baseH / 2;
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    laptopGroup.add(baseMesh);

    // Polished front edge lip
    const edgeLipGeo = new THREE.BoxGeometry(baseW + 0.02, 0.02, baseD + 0.02);
    const edgeLipMesh = new THREE.Mesh(edgeLipGeo, silverChamferEdge);
    edgeLipMesh.position.y = baseH;
    laptopGroup.add(edgeLipMesh);

    // Keyboard well
    const kbWellGeo = new THREE.BoxGeometry(3.3, 0.015, 1.45);
    const kbWellMesh = new THREE.Mesh(kbWellGeo, keyboardTrayMat);
    kbWellMesh.position.set(0, baseH + 0.008, -0.15);
    laptopGroup.add(kbWellMesh);

    // Individual Keycaps
    const keyGroup = new THREE.Group();
    const rows = 5;
    const cols = 12;
    const keyW = 0.22;
    const keyD = 0.22;
    const gapX = 0.045;
    const gapZ = 0.055;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Spacebar on bottom row
        if (r === 4 && (c > 3 && c < 8)) {
          if (c === 4) {
            const spaceGeo = new THREE.BoxGeometry(keyW * 4 + gapX * 3, 0.025, keyD);
            const spaceMesh = new THREE.Mesh(spaceGeo, keycapMat);
            spaceMesh.position.set(0, baseH + 0.02, 0.42);
            keyGroup.add(spaceMesh);
          }
          continue;
        }

        const kGeo = new THREE.BoxGeometry(keyW, 0.025, keyD);
        const isSpecialKey = (r === 2 && (c >= 2 && c <= 8)); // MUNAVIR letters
        const kMesh = new THREE.Mesh(kGeo, isSpecialKey ? keycapLitMat : keycapMat);
        const posX = (c - (cols - 1) / 2) * (keyW + gapX);
        const posZ = -0.68 + r * (keyD + gapZ);
        kMesh.position.set(posX, baseH + 0.02, posZ);
        keyGroup.add(kMesh);
      }
    }
    laptopGroup.add(keyGroup);

    // Trackpad
    const trackpadGeo = new THREE.BoxGeometry(1.3, 0.01, 0.75);
    const trackpadMesh = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpadMesh.position.set(0, baseH + 0.009, 0.75);
    laptopGroup.add(trackpadMesh);

    // Cylindrical Hinge
    const hingeGeo = new THREE.CylinderGeometry(0.055, 0.055, baseW - 0.4, 24);
    hingeGeo.rotateZ(Math.PI / 2);
    const hingeMesh = new THREE.Mesh(hingeGeo, hingeMat);
    hingeMesh.position.set(0, baseH + 0.01, -baseD / 2 + 0.03);
    laptopGroup.add(hingeMesh);

    // B. ROTATING SCREEN LID (Pivot set at hinge axis)
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, baseH + 0.01, -baseD / 2 + 0.03);
    lidGroupRef.current = lidGroup;
    laptopGroup.add(lidGroup);

    const lidH = 2.45;
    const lidThick = 0.06;

    // Lid Back Case (Aluminium)
    const lidBackGeo = new THREE.BoxGeometry(baseW, lidH, lidThick);
    lidBackGeo.translate(0, lidH / 2, -lidThick / 2);
    const lidBackMesh = new THREE.Mesh(lidBackGeo, spaceGrayChassis);
    lidBackMesh.castShadow = true;
    lidGroup.add(lidBackMesh);

    // Glowing Apple-style "M" logo on back of lid
    const logoGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.015, 32);
    logoGeo.rotateX(Math.PI / 2);
    logoGeo.translate(0, lidH / 2, -lidThick - 0.005);
    const logoMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(rgbColor) });
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    lidGroup.add(logoMesh);

    // Front Bezel (Dark border)
    const bezelGeo = new THREE.BoxGeometry(baseW - 0.04, lidH - 0.04, 0.01);
    bezelGeo.translate(0, lidH / 2, 0.005);
    const bezelMesh = new THREE.Mesh(bezelGeo, new THREE.MeshStandardMaterial({ color: 0x07080d, roughness: 0.3 }));
    lidGroup.add(bezelMesh);

    // HD Webcam on top bezel
    const camGeo = new THREE.CircleGeometry(0.02, 16);
    camGeo.translate(0, lidH - 0.07, 0.012);
    const camMesh = new THREE.Mesh(camGeo, new THREE.MeshBasicMaterial({ color: 0x3399ff }));
    lidGroup.add(camMesh);

    // C. DYNAMIC RETINA SCREEN DISPLAY (60 FPS CanvasTexture)
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1280;
    screenCanvas.height = 800;
    screenCanvasRef.current = screenCanvas;

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.generateMipmaps = true;
    screenTexture.minFilter = THREE.LinearMipmapLinearFilter;
    screenTextureRef.current = screenTexture;

    const screenGeo = new THREE.PlaneGeometry(baseW - 0.24, lidH - 0.22);
    screenGeo.translate(0, lidH / 2, 0.015);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      transparent: false,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    lidGroup.add(screenMesh);

    // D. Soft Floor Reflection Disc
    const floorGeo = new THREE.CircleGeometry(4.5, 48);
    const floorMat = new THREE.MeshBasicMaterial({
      color: 0x05060b,
      transparent: true,
      opacity: 0.8,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -0.01;
    scene.add(floorMesh);

    // 7. Particle Starfield
    const pCount = 90;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i += 3) {
      pPositions[i] = (Math.random() - 0.5) * 14;
      pPositions[i + 1] = Math.random() * 6 - 1;
      pPositions[i + 2] = (Math.random() - 0.5) * 10;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({ size: 0.035, color: 0xffffff, transparent: true, opacity: 0.35 });
    const pMesh = new THREE.Points(pGeo, pMat);
    scene.add(pMesh);

    // 8. Render Loop with Smooth Damping
    let animId;
    let clock = new THREE.Clock();

    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);
      const time = clock.getElapsedTime();

      // Smooth drag rotation damping
      const drag = mouseDragRef.current;
      drag.rotX += (drag.targetRotX - drag.rotX) * 0.08;
      drag.rotY += (drag.targetRotY - drag.rotY) * 0.08;

      laptopGroup.rotation.x = drag.rotX;
      laptopGroup.rotation.y = drag.rotY;

      // Gentle floating animation
      laptopGroup.position.y = -0.35 + Math.sin(time * 1.6) * 0.03;

      // Particle drift
      pMesh.rotation.y = time * 0.015;

      // Refresh dynamic screen canvas texture
      if (screenTextureRef.current) {
        screenTextureRef.current.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    renderLoop();

    // 9. Resize listener
    const onResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update Lid Angle in 3D (Hinge rotation)
  useEffect(() => {
    if (!lidGroupRef.current) return;
    // 0 rad (closed) to 1.85 rad (~106 deg open facing camera)
    const maxOpenAngle = 1.85;
    lidGroupRef.current.rotation.x = lidOpenProgress * maxOpenAngle;
  }, [lidOpenProgress]);

  // Update Dynamic Color Light
  useEffect(() => {
    if (pointLightRef.current) pointLightRef.current.color.set(rgbColor);
    if (rimLightRef.current) rimLightRef.current.color.set(rgbColor);
  }, [rgbColor]);

  // Render High-DPI Retina Screen Content
  useEffect(() => {
    const canvas = screenCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    if (!isScreenOn) {
      // Off state
      ctx.fillStyle = '#06070a';
      ctx.fillRect(0, 0, w, h);
      return;
    }

    // A. OLED Background Wallpaper with cyber glow
    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, '#0a0d16');
    bgGrad.addColorStop(0.5, '#0e1220');
    bgGrad.addColorStop(1, '#070910');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Glowing Ambient Orb
    const orb = ctx.createRadialGradient(w * 0.7, h * 0.4, 20, w * 0.7, h * 0.4, 450);
    orb.addColorStop(0, `${rgbColor}33`);
    orb.addColorStop(0.6, 'rgba(168, 85, 247, 0.12)');
    orb.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = orb;
    ctx.fillRect(0, 0, w, h);

    // B. macOS Top Menu Bar
    ctx.fillStyle = 'rgba(12, 15, 24, 0.95)';
    ctx.fillRect(0, 0, w, 48);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.fillRect(0, 47, w, 1);

    // Window controls
    ctx.fillStyle = '#ff5f56';
    ctx.beginPath(); ctx.arc(30, 24, 8, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ffbd2e';
    ctx.beginPath(); ctx.arc(55, 24, 8, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#27c93f';
    ctx.beginPath(); ctx.arc(80, 24, 8, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px monospace';
    ctx.fillText('MUNAVIR DESIGNER OS v2.6', 115, 30);

    ctx.fillStyle = rgbColor;
    ctx.font = 'bold 15px monospace';
    ctx.fillText('⚡ 100% (60 FPS THREE.JS GL)', w - 320, 30);

    ctx.fillStyle = '#aaaaaa';
    ctx.font = '15px monospace';
    ctx.fillText('06:35 IST', w - 95, 30);

    // C. Center Workstation Card
    ctx.fillStyle = 'rgba(18, 22, 34, 0.85)';
    ctx.strokeStyle = rgbColor;
    ctx.lineWidth = 2.5;
    ctx.roundRect(w / 2 - 440, 85, 880, 580, 28);
    ctx.fill();
    ctx.stroke();

    // Glowing Brand Monogram Badge
    ctx.fillStyle = `${rgbColor}25`;
    ctx.strokeStyle = rgbColor;
    ctx.lineWidth = 2;
    ctx.roundRect(w / 2 - 45, 125, 90, 90, 22);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = rgbColor;
    ctx.font = '900 52px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('M', w / 2, 188);

    // Massive Bold Designer Name
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 68px sans-serif';
    ctx.fillText(typedName || 'MUNAVIR', w / 2, 285);

    // Caret
    if (typedName && typedName.length < 8) {
      ctx.fillStyle = rgbColor;
      ctx.fillRect(w / 2 + 180, 235, 6, 56);
    }

    // Subtitle Role
    ctx.fillStyle = rgbColor;
    ctx.font = 'bold 22px monospace';
    ctx.fillText(typedRole || 'GRAPHIC DESIGNER & VISUAL ARTIST', w / 2, 340);

    // Terminal Boot Output Box
    ctx.fillStyle = 'rgba(6, 8, 14, 0.95)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    ctx.roundRect(w / 2 - 380, 380, 760, 165, 18);
    ctx.fill();
    ctx.stroke();

    ctx.textAlign = 'left';
    ctx.font = '16px monospace';
    ctx.fillStyle = '#4ade80';
    ctx.fillText('> THREE.JS RETINA DISPLAY: 60 FPS ACTIVE', w / 2 - 350, 420);

    ctx.fillStyle = '#ffffff';
    ctx.fillText('> SPECIALIZATIONS: BRAND ARCHITECTURE / 3D SCENOGRAPHY / POSTER ART', w / 2 - 350, 455);

    ctx.fillStyle = rgbColor;
    ctx.fillText('> STATUS: 85+ PROJECTS DELIVERED • 14 AWARDS • READY TO EXPLORE', w / 2 - 350, 490);

    ctx.fillStyle = '#94a3b8';
    ctx.fillText('> PRESS "ENTER PORTFOLIO" BELOW TO PLUNGE INTO LIVE SHOWCASE ↓', w / 2 - 350, 524);

    // D. macOS Dock with Designer Tools
    const dockW = 420;
    const dockH = 68;
    const dockX = w / 2 - dockW / 2;
    const dockY = h - 95;

    ctx.fillStyle = 'rgba(15, 20, 32, 0.92)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
    ctx.lineWidth = 1.5;
    ctx.roundRect(dockX, dockY, dockW, dockH, 22);
    ctx.fill();
    ctx.stroke();

    const apps = [
      { name: 'Ps', color: '#001e36', text: '#31a8ff' },
      { name: 'Ai', color: '#330000', text: '#ff9a00' },
      { name: 'Ae', color: '#00005b', text: '#9999ff' },
      { name: 'Fg', color: '#1e1e1e', text: '#f24e1e' },
      { name: 'Bl', color: '#2a1a00', text: '#ea7600' },
      { name: 'C4D', color: '#001a33', text: '#0099ff' },
    ];

    apps.forEach((app, i) => {
      const appX = dockX + 24 + i * 62;
      const appY = dockY + 12;

      ctx.fillStyle = app.color;
      ctx.roundRect(appX, appY, 44, 44, 12);
      ctx.fill();

      ctx.fillStyle = app.text;
      ctx.font = 'bold 16px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(app.name, appX + 22, appY + 28);
    });

    if (screenTextureRef.current) {
      screenTextureRef.current.needsUpdate = true;
    }
  }, [isScreenOn, typedName, typedRole, rgbColor]);

  // Pointer Drag Handlers (Rotate 3D laptop)
  const handlePointerDown = (e) => {
    mouseDragRef.current.isDown = true;
    mouseDragRef.current.prevX = e.clientX;
    mouseDragRef.current.prevY = e.clientY;
  };

  const handlePointerMove = (e) => {
    if (!mouseDragRef.current.isDown) return;
    const dx = e.clientX - mouseDragRef.current.prevX;
    const dy = e.clientY - mouseDragRef.current.prevY;
    mouseDragRef.current.prevX = e.clientX;
    mouseDragRef.current.prevY = e.clientY;

    mouseDragRef.current.targetRotY += dx * 0.007;
    mouseDragRef.current.targetRotX = Math.max(-0.25, Math.min(0.65, mouseDragRef.current.targetRotX + dy * 0.007));
  };

  const handlePointerUp = () => {
    mouseDragRef.current.isDown = false;
  };

  // Hyperspace Camera Zoom In
  useEffect(() => {
    if (!isWarping || !cameraRef.current) return;
    const camera = cameraRef.current;
    let startZ = camera.position.z;
    let startTime = Date.now();
    const duration = 900;

    const zoomStep = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = Math.pow(progress, 3);

      camera.position.z = startZ - ease * 4.6;
      camera.position.y = 0.8 - ease * 0.35;

      if (progress < 1) {
        requestAnimationFrame(zoomStep);
      } else if (onCameraZoomComplete) {
        onCameraZoomComplete();
      }
    };

    zoomStep();
  }, [isWarping]);

  return (
    <div
      ref={mountRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="w-full h-full cursor-grab active:cursor-grabbing relative"
    />
  );
}
