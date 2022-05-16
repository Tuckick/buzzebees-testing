import HomePage from "./pages/Home.vue";
import ProfilePage from "./pages/Profile.vue";
import GalleryPage from "./pages/Gallery.vue";
import PageNotFound from "./pages/PageNotFound.vue";

export default [
  { path: "/", component: HomePage, name: "HomePage" },
  { path: "/profile", component: ProfilePage, name: "ProfilePage" },
  { path: "/gallery", component: GalleryPage, name: "GalleryPage" },
  { path: "/:catchAll(.*)*", component: PageNotFound, name: "PageNotFound" },
];
