import { useRef, type PointerEvent } from 'react';
import profilePhoto from '@/assets/profile-photo.jpg';
import styles from './DepthPortrait.module.css';

const DepthPortrait = () => {
  const scene = useRef<HTMLDivElement>(null);

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const element = scene.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
    const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));
    element.style.setProperty('--portrait-x', `${-y * 5}deg`);
    element.style.setProperty('--portrait-y', `${x * 7}deg`);
    element.style.setProperty('--portrait-shift', `${-x * 4}px`);
  };

  const reset = () => {
    const element = scene.current;
    if (!element) return;
    ['--portrait-x', '--portrait-y', '--portrait-shift'].forEach(property => element.style.removeProperty(property));
  };

  return (
    <div ref={scene} className={`${styles.scene} relative w-64 h-80 md:w-80 md:h-[28rem]`} onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>
      <div className={styles.tilt}>
        <div className={styles.frame}>
          <img src={profilePhoto} alt="Vivek Kumar" className={styles.photo} loading="eager" draggable={false} />
          <div className={styles.fade} />
        </div>
      </div>
    </div>
  );
};

export default DepthPortrait;