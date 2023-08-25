import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

//*
// cn() is a utility function that uses clsx and tailwind-merge to merge class names together. Tailwind-merge avoids class name conflicts, while clsx allows you to write conditional class names in an object style.
// {@link https://leovoon.github.io/blog/tailwind-merge/}
// {@link https://www.youtube.com/watch?v=re2JFITR7TI}
// */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
