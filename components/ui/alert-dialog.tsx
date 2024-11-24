'use client';

import * as React from 'react';

interface DialogProps {
  children: React.ReactNode;
  className?: string;
}

const AlertDialog: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

const AlertDialogTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <button type="button">{children}</button>;
};

const AlertDialogContent: React.FC<DialogProps> = ({ children, className }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${className || ''}`}>
      <div className="fixed inset-0 bg-black/50" />
      <div className="relative bg-background rounded-lg p-6 w-full max-w-lg">
        {children}
      </div>
    </div>
  );
};

const AlertDialogHeader: React.FC<DialogProps> = ({ children, className }) => {
  return <div className={`space-y-2 ${className || ''}`}>{children}</div>;
};

const AlertDialogFooter: React.FC<DialogProps> = ({ children, className }) => {
  return <div className={`mt-4 flex justify-end space-x-2 ${className || ''}`}>{children}</div>;
};

const AlertDialogTitle: React.FC<DialogProps> = ({ children, className }) => {
  return <h2 className={`text-lg font-semibold ${className || ''}`}>{children}</h2>;
};

const AlertDialogDescription: React.FC<DialogProps> = ({ children, className }) => {
  return <p className={`text-sm text-muted-foreground ${className || ''}`}>{children}</p>;
};

const AlertDialogAction: React.FC<DialogProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ 
  children, 
  className,
  ...props 
}) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90 ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

const AlertDialogCancel: React.FC<DialogProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ 
  children, 
  className,
  ...props 
}) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium hover:bg-accent hover:text-accent-foreground ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
