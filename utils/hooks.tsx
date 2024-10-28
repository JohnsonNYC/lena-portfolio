import {useState, useEffect} from 'react';
import { useMediaPredicate as useMediaPredicateLib } from 'react-media-hook';

export const useMediaPredicate = (breakpoint: string): boolean => {
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const isMobile: boolean = useMediaPredicateLib(breakpoint);

  useEffect(() => {
    setIsMobileState(isMobile);
  },[isMobile])

  return isMobileState;
}