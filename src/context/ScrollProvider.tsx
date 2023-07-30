import React from 'react';
import { scrollTo } from '../helpers';

type ScrollContextValue = {
  priceRef: React.RefObject<HTMLHeadingElement> | null;
  handleScroll: () => void;
}

const ScrollContext = React.createContext<ScrollContextValue>({
  priceRef: null,
  handleScroll: () => {},
});
export const useScroll = () => React.useContext(ScrollContext);

const TITLE_OFFSET: number = 70;
let counter = 0;

const ScrollProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const priceRef = React.useRef<HTMLHeadingElement>(null);
  const handleScroll = () => {
    if (priceRef.current) {
      scrollTo(priceRef.current.offsetTop - TITLE_OFFSET);
      console.log('Scroll click counter:', ++counter);
    }
  };
  return (
    <ScrollContext.Provider value={{ priceRef, handleScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
