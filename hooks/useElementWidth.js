import { useDimensions } from "@chakra-ui/react";
import { useRef } from "react";

export const useElementWidth = () => {
  const elementRef = useRef();
  const dimension = useDimensions(elementRef);

  const { borderBox } = dimension || {};
  const { width } = borderBox || { width: 0 };

  return [elementRef, width];
};
