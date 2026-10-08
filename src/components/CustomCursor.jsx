import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover', 'drag', 'view', 'text'
  const [cursorLabel, setCursorLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const requestRef = useRef();

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check target element
      const target = e.target;
      const clickable = target.closest('button, a, input, textarea, select, [role="button"]');
      const projectCard = target.closest('[data-cursor="view"]');
      const dragArea = target.closest('[data-cursor="drag"]');
      const textElement = target.closest('[data-cursor="text"]');

      if (projectCard) {
        setCursorType('view');
        setCursorLabel('VIEW');
      } else if (dragArea) {
        setCursorType('drag');
        setCursorLabel('DRAG');
      } else if (textElement) {
        setCursorType('text');
        setCursorLabel('');
      } else if (clickable) {
        setCursorType('hover');
        setCursorLabel('');
      } else {
        setCursorType('default');
        setCursorLabel('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing ring physics
  useEffect(() => {
    if (isTouch) return;

    let targetX = position.x;
    let targetY = position.y;
    let currentX = trailingPos.x;
    let currentY = trailingPos.y;

    const animate = () => {
      targetX = position.x;
      targetY = position.y;

      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      setTrailingPos({ x: currentX, y: currentY });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${
            cursorType === 'hover' ? 0.4 : cursorType === 'view' || cursorType === 'drag' ? 0 : 1
          })`,
          opacity: isVisible ? 1 : 0
        }}
      />

      {/* Fluid outer magnetic ring with label */}
      <div
        className="custom-cursor-ring flex items-center justify-center pointer-events-none"
        style={{
          transform: `translate(${trailingPos.x}px, ${trailingPos.y}px) translate(-50%, -50%)`,
          width:
            cursorType === 'view' || cursorType === 'drag'
              ? '64px'
              : cursorType === 'hover'
              ? '48px'
              : '32px',
          height:
            cursorType === 'view' || cursorType === 'drag'
              ? '64px'
              : cursorType === 'hover'
              ? '48px'
              : '32px',
          backgroundColor:
            cursorType === 'view' || cursorType === 'drag'
              ? 'var(--accent-color)'
              : 'transparent',
          borderColor:
            cursorType === 'hover'
              ? 'var(--accent-color)'
              : cursorType === 'view' || cursorType === 'drag'
              ? 'transparent'
              : 'rgba(255, 255, 255, 0.4)',
          opacity: isVisible ? 1 : 0,
        }}
      >
        {cursorLabel && (
          <span className="text-[10px] font-mono font-bold tracking-widest text-black select-none">
            {cursorLabel}
          </span>
        )}
      </div>
    </>
  );
}
