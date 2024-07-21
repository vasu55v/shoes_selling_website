import React,{useEffect,useState,useContext,useRef,createContext} from 'react'

export const ScrollContext = createContext();


export function ScrollProvider({children}){
    const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(null);

  const scrollUpFunc = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (scrollRef.current && scrollRef.current.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const scrollContainer = scrollRef.current;
    console.log(scrollRef.current)

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', toggleVisibility);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, []);



  return(
    <ScrollContext.Provider value={{isVisible,scrollRef,scrollUpFunc}}>
        {children}
    </ScrollContext.Provider>
  );
}