import { ReactElement } from "react";

export type HtagProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4';
  classes?: string;
  children: React.ReactNode;
}