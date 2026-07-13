import { useRef, ReactNode, MouseEvent } from 'react';

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const MagneticButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  target,
  rel,
  type = 'button',
  disabled,
}: Props) => {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
  };

  const base = `lux-btn ${variant === 'primary' ? 'lux-btn-primary' : 'lux-btn-ghost'} ${className}`;

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={base}
        style={{ transition: 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease' }}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      disabled={disabled}
      className={base}
      style={{ transition: 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease' }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default MagneticButton;
