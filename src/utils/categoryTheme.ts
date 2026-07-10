import type { CategoryColor } from '@config/categories';

interface CategoryTheme {
  icon: string;
  chip: string;
  chipActive: string;
}

export const categoryThemes: Record<CategoryColor, CategoryTheme> = {
  amber: {
    icon: 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300',
    chip: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    chipActive: 'border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200'
  },
  blue: {
    icon: 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300',
    chip: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    chipActive: 'border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-700 dark:bg-blue-950 dark:text-blue-200'
  },
  cyan: {
    icon: 'border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-800 dark:bg-cyan-950 dark:text-cyan-300',
    chip: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300',
    chipActive: 'border-cyan-300 bg-cyan-50 text-cyan-800 dark:border-cyan-700 dark:bg-cyan-950 dark:text-cyan-200'
  },
  emerald: {
    icon: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
    chip: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
    chipActive: 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-200'
  },
  indigo: {
    icon: 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300',
    chip: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
    chipActive: 'border-indigo-300 bg-indigo-50 text-indigo-800 dark:border-indigo-700 dark:bg-indigo-950 dark:text-indigo-200'
  },
  rose: {
    icon: 'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800 dark:bg-rose-950 dark:text-rose-300',
    chip: 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
    chipActive: 'border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-700 dark:bg-rose-950 dark:text-rose-200'
  },
  sky: {
    icon: 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-300',
    chip: 'bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
    chipActive: 'border-sky-300 bg-sky-50 text-sky-800 dark:border-sky-700 dark:bg-sky-950 dark:text-sky-200'
  },
  slate: {
    icon: 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300',
    chip: 'bg-slate-50 text-slate-700 dark:bg-slate-900 dark:text-slate-300',
    chipActive: 'border-slate-300 bg-slate-50 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200'
  },
  violet: {
    icon: 'border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-300',
    chip: 'bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300',
    chipActive: 'border-violet-300 bg-violet-50 text-violet-800 dark:border-violet-700 dark:bg-violet-950 dark:text-violet-200'
  }
};

export function getCategoryTheme(color: CategoryColor) {
  return categoryThemes[color] ?? categoryThemes.slate;
}
