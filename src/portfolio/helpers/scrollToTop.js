import { useEffect } from "react";

export const scrollToTop = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [])

};