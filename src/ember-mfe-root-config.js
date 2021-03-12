import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import { loadEmberApp } from "single-spa-ember";

const isLocal = true;
const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  loaders: {
    topNav: "<h1>Loading topnav</h1>",
  },
  errors: {
    topNav: "<h1>Failed to load topnav</h1>",
  },
});

const navbarDomain = isLocal
  ? "http://localhost:4200"
  : "https://ember-micro-frontends.github.io/navbar";
const navbarApp = registerApplication(
  "navbar",
  () => {
    const appName = "navbar";
    const appUrl = `${navbarDomain}/assets/navbar.js`;
    const vendorUrl = `${navbarDomain}/assets/vendor.js`;
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/")
);

const planetsDomain = isLocal
  ? "http://localhost:4202/planets"
  : "https://ember-micro-frontends.github.io/planets";
const planetsApp = registerApplication(
  "planets",
  () => {
    const appName = "planets";
    const appUrl = `${planetsDomain}/assets/planets.js`;
    const vendorUrl = `${planetsDomain}/assets/vendor.js`;
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/planets")
);

const peopleDomain = isLocal
  ? "http://localhost:4201/people"
  : "https://ember-micro-frontends.github.io/people";
const peopleApp = registerApplication(
  "people",
  () => {
    const appName = "people";
    const appUrl = `${peopleDomain}/assets/people.js`;
    const vendorUrl = `${peopleDomain}/assets/vendor.js`;
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/people")
);

const filmsDomain = isLocal
  ? "http://localhost:4203/films"
  : "https://ember-micro-frontends.github.io/films";
const filmsApp = registerApplication(
  "films",
  () => {
    const appName = "films";
    const appUrl = `${filmsDomain}/assets/films.js`;
    const vendorUrl = `${filmsDomain}/assets/vendor.js`;
    return loadEmberApp(appName, appUrl, vendorUrl);
  },
  (location) => location.pathname.startsWith("/films")
);

const applications = [];
applications.concat(navbarApp);
applications.concat(planetsApp);
applications.concat(peopleApp);
applications.concat(filmsApp);
applications.forEach(registerApplication);
const layoutEngine = constructLayoutEngine({ routes, applications });

layoutEngine.activate();
start();
