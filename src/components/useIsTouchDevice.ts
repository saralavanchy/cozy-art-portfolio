import { useEffect, useState } from 'react';

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    function updateIsTouch() {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }
    updateIsTouch();
    window.addEventListener('resize', updateIsTouch);
    return () => window.removeEventListener('resize', updateIsTouch);
  }, []);
  return isTouch;
}
