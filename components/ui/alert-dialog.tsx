'use client';

import * as React from 'react';

// Placeholder component until we properly fix the @radix-ui/react-alert-dialog dependency
const AlertDialog = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const AlertDialogTrigger = ({ children }: { children: React.ReactNode }) => {
  return <button>{children}</button>;
};

const AlertDialogContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="fixed inset-0 z-50 flex items-center justify-center">{children}</div>;
};

const AlertDialogHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-4">{children}</div>;
};

const AlertDialogFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex justify-end space-x-2">{children}</div>;
};

const AlertDialogTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-lg font-semibold">{children}</h2>;
};

const AlertDialogDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm text-gray-500">{children}</p>;
};

const AlertDialogAction = ({ children }: { children: React.ReactNode }) => {
  return <button className="px-4 py-2 bg-primary text-white rounded">{children}</button>;
};

const AlertDialogCancel = ({ children }: { children: React.ReactNode }) => {
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
