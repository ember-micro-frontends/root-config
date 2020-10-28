import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));

import { loadEmberApp } from "single-spa-ember";

const planetsApp = registerApplication(
  "planets",
  () => {
    const appName = "planets";
    const appUrl = "http://localhost:4200/planets/assets/planets.js";
    const vendorUrl = "http://localhost:4200/planets/assets/vendor.js";
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/planets")
);

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

const applications = [planetsApp, peopleApp];

const layoutEngine = constructLayoutEngine({ routes, applications });
layoutEngine.activate();
start();
