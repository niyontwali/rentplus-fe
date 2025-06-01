import { cn } from '@/utils';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'default';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className,
  size = 'default',
}) => {
  return (
    <button
      type={type}
      className={cn(
        // Base classes
        'text-white bg-secondary hover:bg-secondary/90 focus:ring-3 focus:ring-secondary/50 font-medium rounded-4xl focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-[1.03] active:scale-[0.95] me-2 ',
        // Size variants
        size === 'sm' && 'text-sm px-5 py-1.5',
        size === 'default' && 'text-md px-5 py-2.5',
        // Disabled classes
        disabled && 'opacity-50 cursor-not-allowed hover:scale-100 active:scale-100',
        // Custom className
        className
      )}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };
