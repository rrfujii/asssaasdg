import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/deatilA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/deatilB",
    exact: false,
    children: <Page1DetailB />
  }
];
