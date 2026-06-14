/** Primary navigation used by the navbar, footer and mobile menu. */
export interface NavItem {
  label: string;
  to: string;
}

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Practice Areas", to: "/practice-areas" },
  { label: "Contact", to: "/contact" },
];
