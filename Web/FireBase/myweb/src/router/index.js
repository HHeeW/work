import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import MyInfo from "@/components/MyInfo";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
    props: true
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
    props: true
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
    props: true
  },
  {
    path: "/MyInfo",
    name: "MyInfo",
    component: MyInfo,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;