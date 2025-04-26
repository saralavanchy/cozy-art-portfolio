import React, { ReactNode, useRef, useState, useLayoutEffect } from 'react';
import { useIsTouchDevice } from './useIsTouchDevice';

interface TooltipProps {
  label: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({ label, children, position = 'top' }) => {
  const isTouch = useIsTouchDevice();
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [mobileTop, setMobileTop] = useState<string | undefined>(undefined);

  // Show/hide tooltip on tap for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isTouch) {
      setVisible((v) => !v);
      e.stopPropagation();
    }
  };
  // Hide tooltip on outside tap for mobile
  useLayoutEffect(() => {
    if (!isTouch || !visible) return;
    const handleDoc = (e: TouchEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };
    document.addEventListener('touchstart', handleDoc);
    return () => document.removeEventListener('touchstart', handleDoc);
  }, [isTouch, visible]);

  // Desktop hover logic
  const handleMouseEnter = () => {
    if (!isTouch) setVisible(true);
  };
  const handleMouseLeave = () => {
    if (!isTouch) setVisible(false);
  };

  // Dynamically position tooltip below button on mobile if needed
  useLayoutEffect(() => {
    if (isTouch && tooltipRef.current && wrapperRef.current) {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      if (wrapperRect.top < tooltipRect.height + 12) {
        setMobileTop(`${wrapperRect.height + 8}px`);
      } else {
        setMobileTop(undefined);
      }
    }
  }, [isTouch, label]);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isTouch) {
      // Find the button element
      const button = wrapperRef.current?.querySelector('button');
      if (button && typeof (button as any).onclick === 'function') {
        (button as any).onclick(e);
      } else if (button) {
        // fallback for React synthetic event
        button.dispatchEvent(new Event('click', { bubbles: true }));
      }
      setVisible(false);
    }
  };

  let tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: !isTouch ? (position === 'top' ? '-2.2rem' : undefined) : mobileTop === undefined ? '-2.2rem' : undefined,
    bottom: isTouch && mobileTop !== undefined ? undefined : (position === 'bottom' ? '-2.2rem' : undefined),
    transform: 'translateX(-50%)',
    background: '#FFE066',
    color: '#8C5C2E',
    border: '2px solid #C2A13C',
    borderRadius: '0.75rem',
    padding: isTouch ? '0.18rem 0.7rem' : '0.35rem 1.1rem',
    fontFamily: 'Quicksand,Poppins,sans-serif',
    fontWeight: 700,
    fontSize: isTouch ? '0.92rem' : '1rem',
    boxShadow: '0 2px 10px 0 rgba(255,224,102,0.13)',
    opacity: (isTouch && visible) || (!isTouch && visible) ? 1 : 0,
    pointerEvents: (isTouch && visible) || (!isTouch && visible) ? 'auto' : 'none',
    transition: 'opacity 0.2s',
    zIndex: 20,
    display: 'block',
    visibility: (isTouch && visible) || (!isTouch && visible) ? 'visible' : 'hidden',
    whiteSpace: 'nowrap',
    ...(isTouch && mobileTop !== undefined ? { top: mobileTop } : {}),
  };

  const tooltipContent = label;
  const child = React.Children.only(children);
  const childProps: any = {};
  if (isTouch) {
    childProps.onTouchStart = handleTouchStart;
    childProps.onTouchMove = handleTouchMove;
  } else {
    childProps.onMouseEnter = handleMouseEnter;
    childProps.onMouseLeave = handleMouseLeave;
  }

  return (
    <div
      ref={wrapperRef}
      style={{ position: 'relative', display: 'inline-block', width: '100%' }}
    >
      {React.cloneElement(child as React.ReactElement, childProps)}
      <span ref={tooltipRef} className="custom-tooltip" style={tooltipStyle} aria-live="polite">{tooltipContent}</span>
      <style>{`
        .custom-tooltip {
          transition: opacity 0.2s;
        }
      `}</style>
    </div>
  );
};
