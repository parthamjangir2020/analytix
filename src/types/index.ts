/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

type MenuItem = {
  href: string;
  label: string;
  submenu?: SubmenuItem[]
};

type SubmenuItem = {
  href: string;
  icon: JSX.Element;
  label: string;
  desc: string;
}

export type { MenuItem };