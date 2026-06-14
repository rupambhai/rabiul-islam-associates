import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Render as a semantic element other than <div> (e.g. "section"). */
  as?: ElementType;
}

/** Constrained, gutter-aware content column shared across the site. */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return <Tag className={cn("container-page", className)}>{children}</Tag>;
}
