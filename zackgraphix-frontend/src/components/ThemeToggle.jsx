import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import useTheme from '../hooks/useTheme'

const ThemeToggle = () => {
  const { isDark, toggle } = useTheme()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink hover:bg-soft dark:border-line dark:hover:bg-surface"
    >
      {isDark ? <SunIcon className="h-5 w-5 text-white hover:text-slate-950" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  )
}

export default ThemeToggle