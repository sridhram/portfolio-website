import React, { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefer-color-scheme: dark)';
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem('theme');
    const handleChange = () => {
      if (userPref) {
        let currTheme = userPref === 'dark' ? 'dark' : 'light';
        setTheme(currTheme);
        if (currTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        let currTheme = mediaQuery.matches ? 'dark' : 'light';
        setTheme(currTheme);
        if (currTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };
    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return [theme, setTheme];
};
export default useThemeSwitcher;
