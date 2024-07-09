import App from "./App";
import HomeLayout from "./layouts/HomeLayout";
import MenuBar from "./components/MenuBar";
import Pots from "./sections/Pots";
import times from "./assets/icons/x.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import profileImg from "./assets/images/Avatar.png";
import setting from "./assets/icons/settings.svg";
import support from "./assets/icons/help-circle.svg";
import search from "./assets/icons/search.svg";
import whilst from "./assets/icons/heart.svg";
import cart from "./assets/icons/shopping-cart.svg";
import check from "./assets/icons/check.svg";
import user from "./assets/icons/user.svg";
import home from "./assets/icons/home.svg";
import zap from "./assets/icons/zap.svg";
import shopBag from "./assets/icons/shopping-bag.svg";
import orderBag from "./assets/icons/shopping-bag-02.svg";
import creditCard from "./assets/icons/credit-card.svg";
import privacy from "./assets/icons/lock.svg";
import chat from "./assets/icons/message-circle.svg";
import logout from "./assets/icons/log-out.svg";
import arrowDown from "./assets/icons/chevron-down.svg";
import FilterButton from "./components/FilterButton";
export const navLinks = [
  "all",
  "pots",
  "plates",
  "cups",
  "cutlery",
  "gadgets",
  "sets",
];
export {
  App,
  HomeLayout,
  MenuBar,
  Pots,
  Header,
  Footer,
  profileImg,
  setting,
  support,
  search,
  whilst,
  cart,
  check,
  user,
  home,
  zap,
  shopBag,
  orderBag,
  creditCard,
  privacy,
  chat,
  logout,
  arrowDown,
  FilterButton,
  times,
};

export const menuBaritems = [
  {
    img: user,
    link: "My details",
  },
  {
    img: home,
    link: "Address book",
  },
  {
    img: zap,
    link: "Change password",
  },
  {
    img: shopBag,
    link: "Orders",
  },
  {
    img: shopBag,
    link: "Return",
  },
  {
    img: creditCard,
    link: "Gift cards and vouchers",
  },
  {
    img: privacy,
    link: "Privacy options",
  },
  {
    img: chat,
    link: "Rate this app",
  },
  {
    img: support,
    link: "Help & Support ",
  },
  {
    img: setting,
    link: "Settings",
  },
  {
    img: logout,
    link: "Log out",
  },
];

export const filterItems = ["heavy duty", "black", "stainless steel"];