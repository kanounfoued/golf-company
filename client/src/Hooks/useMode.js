import React from 'react';

export default function useMode() {
  const preferMatch = '(prefers-color-scheme: dark)';

  const [isDark, setIsDark] = React.useState(window.matchMedia(preferMatch).matches);

  React.useEffect(() => {
    window.matchMedia(preferMatch).addEventListener('change', (e) => {
      setIsDark(e.matches);
    });
  }, []);

  return isDark;
}
