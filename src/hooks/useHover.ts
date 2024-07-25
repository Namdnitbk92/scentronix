"use client";
import { useEffect, useState } from "react";

/**
+ * Returns an object containing the current hover state and event handlers for mouse enter and leave.
+ *
+ * @return {{hoveredIdx: null | number | string, isHovered: boolean, events: {onMouseEnter: (idx: string | number | null) => void, onMouseLeave: () => void}}}
+ *   An object with the following properties:
+ *   - hoveredIdx: The index of the element that is currently being hovered over, or null if no element is being hovered over.
+ *   - isHovered: A boolean indicating whether an element is currently being hovered over.
+ *   - events: An object with two event handlers:
+ *     - onMouseEnter: A function that takes an index as an argument and sets the hoveredIdx state to the given index and sets isHovered to true.
+ *     - onMouseLeave: A function that sets the hoveredIdx state to null and sets isHovered to false.
+ */
const useHover = () => {
  const [isHovered, toggle] = useState<Boolean>(false);
  const [hoveredIdx, setHoveredIdx] = useState<null | number | string>(null);

  const handleMouseEnter = (idx: string | number | null) => {
    toggle(true);
    idx && setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    toggle(false);
    setHoveredIdx(null);
  };

  useEffect(() => {
    const cleanup = () => handleMouseLeave();

    return cleanup;
  }, []);

  return {
    hoveredIdx,
    isHovered,
    events: { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
  };
};

export default useHover;
