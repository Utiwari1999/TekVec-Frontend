import { useEffect, useState, useRef } from "react"

function useSticky() {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

  const handleScroll = () => {
    // if (element.current) {
      if(window.scrollY > 50){
        setSticky(true);
        console.log("true value");
      }else{
        setSticky(false);
        console.log("false value");
        console.log(window.scrollY);
        // console.log(element.current.getBoundingClientRect().bottom);
    }
  
  };

  // This function handles the scroll performance issue
  const debounce = (func, wait = 20, immediate = false) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll))
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [debounce, handleScroll])

  return { isSticky, element }
}

export default useSticky