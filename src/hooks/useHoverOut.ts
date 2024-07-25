import { useState, useRef, useEffect } from "react";

/**
+ * Returns a tuple containing a ref and a boolean indicating whether the ref is currently being hovered over.
+ *
+ * @return {[React.RefObject<HTMLDivElement | null>, boolean]} A tuple containing a ref and a boolean indicating whether the ref is currently being hovered over.
+ */
const useHoverOut = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, isHovered] as const;
};

export default useHoverOut;
