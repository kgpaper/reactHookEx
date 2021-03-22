import React, { useRef, useEffect, useReducer, createRef, useState } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "funtion") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default useClick;
