import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { toggleDarkMode } from '../store/darkmode/darkModeSlice';

export const useDarkModeStore = () => {
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((state) => state.darkMode);

  const toggleDarkModeClass = useCallback((isDarkMode: boolean) => {
    const htmlElement = document.documentElement; // Acceder directamente a document.documentElement
    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, []);

  const onToggleDarkMode = useCallback(() => {
    toggleDarkModeClass(!darkMode); // Invertir el valor actual de darkMode
    dispatch(toggleDarkMode());
  }, [darkMode, toggleDarkModeClass]);

  toggleDarkModeClass(darkMode);

  return {
    darkMode,
    onToggleDarkMode,
  };
};
