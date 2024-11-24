'use client';

import * as React from 'react';

interface DialogProps {
  children: React.ReactNode;
  className?: string;
}

const AlertDialog: React.FC<DialogProps> = ({ children }) => {
  return <div>{children}</div>;
};

const AlertDialogTrigger: React.FC<DialogProps> = ({ children }) => {
  return <button>{children}</button>;
};

const AlertDialogContent: React.FC<DialogProps> = ({ children }) => {
  return <div className="fixed inset-0 z-50 flex items-center justify-center">{children}</div>;
};

const AlertDialogHeader: React.FC<DialogProps> = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

const AlertDialogFooter: React.FC<DialogProps> = ({ children }) => {
  return <div className="flex justify-end space-x-2">{children}</div>;
};

const AlertDialogTitle: React.FC<DialogProps> = ({ children }) => {
  return <h2 className="text-lg font-semibold">{children}</h2>;
};

const AlertDialogDescription: React.FC<DialogProps> = ({ children }) => {
  return <p className="text-sm text-gray-500">{children}</p>;
};

const AlertDialogAction: React.FC<DialogProps> = ({ children }) => {
  return <button className="px-4 py-2 bg-primary text-white rounded">{children}</button>;
};

const AlertDialogCancel: React.FC<DialogProps> = ({ children }) => {
  return <button className="px-4 py-2 border rounded">{children}</button>;
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
