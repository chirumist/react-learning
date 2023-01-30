import React from "react";

export const CollapsibleAccoardion = ({
  children,
  title,
  isVisible = false,
  onClick,
}) => {
  return (
    <div className="border rounded">
      <div className="flex justify-between px-4 py-2 bg-gray-100">
        <h2 className="text-xl">{title}</h2>
        {!isVisible ? (
          <button onClick={() => onClick(title)}>+</button>
        ) : (
          <button onClick={() => onClick("")}>-</button>
        )}
      </div>
      {isVisible && <div className="p-4"> {children}</div>}
    </div>
  );
};

export default CollapsibleAccoardion;
