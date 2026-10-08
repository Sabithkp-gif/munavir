import React, { useEffect, useRef } from 'react';

export default function Laptop3DVisualizer({ color = '#c5ff4a' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    let width = (canvas.width = canvas.parentElement.clientWidth || 300);
    let height = (canvas.height = canvas.parentElement.clientHeight || 180);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D Wireframe Icosahedron Geometry vertices
    const t = (1.0 + Math.sqrt(5.0)) / 2.0;
    const rawVertices = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]
    ];

    // Normalize
    const vertices = rawVertices.map(v => {
      const len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
      return [v[0] / len, v[1] / len, v[2] / len];
    });

    const edges = [
      [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
      [1, 5], [5, 11], [11, 10], [10, 7], [7, 1],
      [3, 9], [3, 4], [3, 2], [3, 6], [3, 8],
      [4, 9], [9, 8], [8, 6], [6, 2], [2, 4],
      [4, 5], [5, 9], [9, 1], [1, 8], [8, 7],
      [7, 6], [6, 10], [10, 2], [2, 11], [11, 4]
    ];

    let angleX = 0;
    let angleY = 0;
    let angleZ = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angleX += 0.012;
      angleY += 0.018;
      angleZ += 0.008;

      const scale = Math.min(width, height) * 0.36;
      const cx = width / 2;
      const cy = height / 2;

      // Project vertices
      const projected = vertices.map(v => {
        // Rotate X
        let y1 = v[1] * Math.cos(angleX) - v[2] * Math.sin(angleX);
        let z1 = v[1] * Math.sin(angleX) + v[2] * Math.cos(angleX);

        // Rotate Y
        let x2 = v[0] * Math.cos(angleY) + z1 * Math.sin(angleY);
        let z2 = -v[0] * Math.sin(angleY) + z1 * Math.cos(angleY);

        // Rotate Z
        let x3 = x2 * Math.cos(angleZ) - y1 * Math.sin(angleZ);
        let y3 = x2 * Math.sin(angleZ) + y1 * Math.cos(angleZ);

        // Perspective division
        const distance = 2.4;
        const fov = 1 / (distance + z2 * 0.4);

        return {
          x: cx + x3 * scale * fov,
          y: cy + y3 * scale * fov,
          z: z2
        };
      });

      // Draw edges with depth lighting
      edges.forEach(([i1, i2]) => {
        const p1 = projected[i1];
        const p2 = projected[i2];
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.15, Math.min(0.9, (avgZ + 1) / 2));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      // Draw glowing vertex nodes
      projected.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [color]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}
