import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="relative h-9 w-16 rounded-full border border-border bg-surface-2/60 backdrop-blur-md flex items-center px-1 transition-colors hover:border-primary/40"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span
        className={`absolute top-1 left-1 h-7 w-7 rounded-full bg-grad-brand shadow-lux-glow transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]`}
        style={{ transform: isDark ? 'translateX(0)' : 'translateX(28px)' }}
      />
      <Moon className={`w-3.5 h-3.5 z-10 transition-opacity ${isDark ? 'opacity-0' : 'opacity-70 text-muted-foreground'}`} />
      <Sun className={`w-3.5 h-3.5 ml-auto z-10 transition-opacity ${isDark ? 'opacity-70 text-muted-foreground' : 'opacity-0'}`} />
    </button>
  );
};

export default ThemeToggle;
