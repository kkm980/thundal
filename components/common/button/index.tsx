import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Button component that renders a clickable div with specified text and optional children.
 * 
 * @param text - The text to display on the button.
 * @param onClick - Optional function to handle click events.
 * @param className - Additional CSS classes for styling.
 * @param style - Inline styles for the button.
 * @param children - Optional React nodes to render inside the button.
 */

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '', style = {}, children }) => (
  <div
    className={`w-auto h-[55px] px-[24px] mr-1.5 flex justify-center items-center text-[16px] text-[black] font-regular rounded-[8px] cursor-pointer h-[45px] ${className}`}
    style={{ background: 'linear-gradient(270deg, #AAD9D1, #017373)', ...style }}
    onClick={onClick}
  >
    {text}
    {children}
  </div>
);

export default Button;
