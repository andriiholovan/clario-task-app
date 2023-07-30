import React from 'react';

export const useIntersection = (element: React.RefObject<HTMLElement>, rootMargin: string = '0px') => {
  const [isVisible, setState] = React.useState(false);

  React.useEffect(() => {
    const { current } = element;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    if (current && observer) {
      observer.observe(current);
    }

    return () => {
      if (current && observer) {
        observer.unobserve(current);
      }
    }
  }, []);

  return isVisible;
};
