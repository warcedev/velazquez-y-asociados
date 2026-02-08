import { useTheme } from '../context/ThemeContext';

export default function DarkModeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-neutral-200 dark:bg-primary-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary"
      aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {/* Track */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-20'}`} />
        <div className={`absolute inset-0 bg-gradient-to-r from-neutral-dark to-primary-dark transition-opacity duration-300 ${isDarkMode ? 'opacity-20' : 'opacity-0'}`} />
      </div>
      
      {/* Thumb */}
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white dark:bg-secondary transform transition-transform duration-300 ${isDarkMode ? 'translate-x-7' : 'translate-x-1'}`}>
        {/* Icono dentro del thumb */}
        {isDarkMode ? (
          <span className="absolute inset-0 flex items-center justify-center text-[8px] text-neutral-dark">☀️</span>
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-[8px] text-neutral-dark">🌙</span>
        )}
      </div>
      
      {/* Estrellas en dark mode */}
      {isDarkMode && (
        <>
          <div className="absolute top-1 left-2 w-[2px] h-[2px] bg-white rounded-full animate-pulse" />
          <div className="absolute top-3 left-3 w-[1px] h-[1px] bg-white rounded-full animate-pulse delay-75" />
        </>
      )}
    </button>
  );
}