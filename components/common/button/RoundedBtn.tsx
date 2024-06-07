import { xCenter } from '@/utils/styles';
import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * RoundedBtn Component
 * 
 * This component renders a customizable button with rounded corners, gradient background,
 * and optional additional styles and child elements.
 * 
 * @param {string} text - The text to display on the button.
 * @param {() => void} [onClick] - The function to call when the button is clicked.
 * @param {string} [className] - Additional class names to apply to the button.
 * @param {React.CSSProperties} [style] - Additional inline styles to apply to the button.
 * @param {React.ReactNode} [children] - Additional React nodes to display inside the button.
 * 
 * @returns {JSX.Element} The RoundedBtn component.
 */
const RoundedBtn: React.FC<ButtonProps> = ({ text, onClick, className = '', style = {}, children }): JSX.Element => {
  return (
    <div
      className={`w-auto h-[60px] px-[24px] ${xCenter} text-punchText text-black cursor-pointer rounded-[50px] ${className}`}
      style={{ background: 'linear-gradient(270deg, #AAD9D1, #017373)', ...style }}
      onClick={onClick}
    >
      {text}
      {children && <div className="ml-2">{children}</div>}
    </div>
  );
};

export default RoundedBtn;
