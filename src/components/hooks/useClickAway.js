import { useEffect } from "react";

export default function useOutsideClick(elementRef, handler, attached = true) {
    useEffect(() => {
       if (!attached) return;

       const handleClick = (e) => {
           if (!elementRef.current) return;
           if (!elementRef.current.contains(e.target)) {
               return console.log("hello world")
           }
       }

       document.addEventListener("click", handleClick);
       
       return () => {
            document.removeEventListener("click", handleClick);
       };
    }, [elementRef, handler, attached]);
}