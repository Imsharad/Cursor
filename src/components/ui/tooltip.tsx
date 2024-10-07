import React from 'react';

export const Tooltip: React.FC<React.HTMLAttributes<HTMLDivElement> & { content: string }> = ({ children, content, ...props }) => (
  <div className="relative group" {...props}>
    {children}
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
      {content}
    </div>
  </div>
);