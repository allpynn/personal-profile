import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './css/LogoLoop.css';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
};

const toCssLength = value => (typeof value === 'number' ? `${value}px` : (value ?? undefined));

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }
    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });
    callback();
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [callback, elements, dependencies]);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    if (!seqRef.current) return;
    const images = seqRef.current.querySelectorAll('img');
    if (images.length === 0) {
      onLoad();
      return;
    }
    let loadedCount = 0;
    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) onLoad();
    };
    images.forEach(img => {
      if (img.complete) handleLoad();
      else {
        img.addEventListener('load', handleLoad);
        img.addEventListener('error', handleLoad);
      }
    });
    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleLoad);
      });
    };
  }, [onLoad, seqRef, dependencies]);
};

const LogoLoop = ({
  items = [],
  direction = 'left',
  speed = 100,
  hoverSpeed,
  vertical = false,
  columnCount = 1,
  gap = '2rem',
  padding = 0,
  fade = false,
  fadeColor,
  className = '',
  children
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);
  const [seqSize, setSeqSize] = useState(0);
  const [containerSize, setContainerSize] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isVertical = vertical;
  const targetVelocity = (direction === 'left' || direction === 'up') ? speed : -speed;

  const updateSizes = useCallback(() => {
    if (!containerRef.current || !seqRef.current) return;
    const cSize = isVertical ? containerRef.current.offsetHeight : containerRef.current.offsetWidth;
    const sSize = isVertical ? seqRef.current.offsetHeight : seqRef.current.offsetWidth;
    setContainerSize(cSize);
    setSeqSize(sSize);
  }, [isVertical]);

  useResizeObserver(updateSizes, [containerRef, seqRef], [items, children, gap]);
  useImageLoader(seqRef, updateSizes, [items, children]);

  const copyCount = useMemo(() => {
    if (seqSize <= 0) return ANIMATION_CONFIG.MIN_COPIES;
    return Math.max(
      ANIMATION_CONFIG.MIN_COPIES,
      Math.ceil(containerSize / seqSize) + ANIMATION_CONFIG.COPY_HEADROOM
    );
  }, [containerSize, seqSize]);

  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimestampRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || seqSize <= 0) return;
    const animate = (timestamp) => {
      if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;
      const deltaTime = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;
      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;
      offsetRef.current += velocityRef.current * deltaTime;
      offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;
      const transformValue = isVertical 
        ? `translate3d(0, ${-offsetRef.current}px, 0)` 
        : `translate3d(${-offsetRef.current}px, 0, 0)`;
      track.style.transform = transformValue;
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [seqSize, targetVelocity, isHovered, hoverSpeed, isVertical]);

  const containerStyle = useMemo(() => ({
    padding: toCssLength(padding),
    '--logoloop-gap': toCssLength(gap),
    '--logoloop-fadeColor': fadeColor,
    '--logoloop-columnCount': columnCount
  }), [padding, gap, fadeColor, columnCount]);

  return (
    <div 
      ref={containerRef}
      className={`logoloop ${vertical ? 'logoloop--vertical' : ''} ${fade ? 'logoloop--fade' : ''} ${className}`}
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); lastTimestampRef.current = null; }}
    >
      <div ref={trackRef} className="logoloop__track">
        {Array.from({ length: copyCount }).map((_, i) => (
          <div key={i} ref={i === 0 ? seqRef : null} className="logoloop__sequence">
            {items.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="logoloop__link" aria-label={item.name}>
                <div className="logoloop__item"><img src={item.logo} alt={item.name} loading="lazy" /></div>
              </a>
            ))}
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(LogoLoop);
