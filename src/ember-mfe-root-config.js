import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import { loadEmberApp } from "single-spa-ember";

const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  loaders: {
    topNav: "<h1>Loading topnav</h1>",
  },
  errors: {
    topNav: "<h1>Failed to load topnav</h1>",
  },
});

/*
const navbarApp = registerApplication(
  "navbar",
  () => {
    const appName = "navbar";
    const appUrl = "http://localhost:4200/assets/navbar.js";
    const vendorUrl = "http://localhost:4200/assets/vendor.js";
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/")
);
*/
const navbarApp = registerApplication(
  "navbar",
  () => {
    const appName = "navbar";
    const appUrl =
      "https://ember-micro-frontends.github.io/navbar/assets/navbar.js";
    const vendorUrl =
      "https://ember-micro-frontends.github.io/navbar/assets/vendor.js";
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/")
);

const planetsApp = registerApplication(
  "planets",
  () => {
    const appName = "planets";
    const appUrl =
      "https://ember-micro-frontends.github.io/planets/assets/planets.js";
    const vendorUrl =
      "https://ember-micro-frontends.github.io/planets/assets/vendor.js";
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/planets")
);

/*
const planetsApp = registerApplication(
  "planets",
  () => {
    const appName = "planets";
    const appUrl = "http://localhost:4202/planets/assets/planets.js";
    const vendorUrl = "http://localhost:4202/planets/assets/vendor.js";
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/planets")
);
*/

const peopleApp = registerApplication(
  "people",
  () => {
    const appName = "people";
    const appUrl =
      "https://ember-micro-frontends.github.io/people/assets/people.js";
    const vendorUrl =
      "https://ember-micro-frontends.github.io/people/assets/vendor.js";
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/people")
);

/*
const peopleApp = registerApplication(
  "people",
  () => {
    const appName = "people";
    const appUrl = "http://localhost:4201/people/assets/people.js";
    const vendorUrl = "http://localhost:4201/people/assets/vendor.js";
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/people")
);
*/

const applications = [];
applications.concat(navbarApp);
applications.concat(planetsApp);
applications.concat(peopleApp);

const layoutEngine = constructLayoutEngine({ routes, applications });

layoutEngine.activate();
start();
