import { MenuItem } from "@/interfaces";

export const NAVBAR_ITEMS: MenuItem[] = [
  {
    title: "SHOP",
    path: "/shop",
    subItems: [
      { title: "ARTISAN BREAD", path: "/shop/artisan-bread" },
      { title: "WHOLE GRAIN", path: "/shop/whole-grain-bread" },
      { title: "SPECIALTY BREADS", path: "/shop/specialty-breads" },
    ],
  },
  {
    title: "RECIPES",
    path: "/recipes",
    subItems: [
      { title: "BREAD", path: "/recipes/bread" },
      { title: "CATEGORIES", path: "/recipes/categories" },
      { title: "COLLECTIONS", path: "/recipes/collections" },
      { title: "RESOURCES", path: "/recipes/resources" },
    ],
  },
  {
    title: "LEARN",
    path: "/learn",
    subItems: [
      { title: "TECHNIQUES", path: "/learn/techniques" },
      { title: "TRAINING & RESOURCES", path: "/learn/training-resources" },
      { title: "LEAN IN ACTION", path: "/learn/lean-in-action" },
    ],
  },
  {
    title: "ABOUT",
    path: "/about",
    subItems: [
      { title: "OUR STORY", path: "/about/our-story" },
      { title: "TEAM", path: "/about/team" },
      { title: "CAREERS", path: "/about/careers" },
      { title: "PARTNERSHIPS", path: "/about/partnerships" },
    ],
  },
  {
    title: "BLOG",
    path: "/blog",
    subItems: [
      { title: "LATEST POSTS", path: "/blog/latest-posts" },
      { title: "CATEGORIES", path: "/blog/categories" },
    ],
  },
];

export const HAMBURGER_ICON_PATH = "/svg/hamburger-icon.svg";

export const LOGO_MOBILE_PATH =
  "https://www.kingarthurbaking.com/themes/custom/kaf_nextgenweb/images/crown@2x.png";

export const LOGO_PATH =
  "https://www.kingarthurbaking.com/themes/custom/kaf_nextgenweb/images/king-arthur-baking@2x.png";
