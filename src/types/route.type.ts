import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
  children?: TRoute[];
};

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export type TRoutePath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRoutePath[];
};
