import React from 'react';

const LiquidGlass = ({ children, style, className, mouseContainer, ...props }) => (
    <div
        style={{
            ...style,
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
        }}
        className={className}
        {...props}
    >
        {children}
    </div>
);

export default LiquidGlass;
