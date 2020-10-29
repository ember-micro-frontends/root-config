# ember-micro-frontends

Micro Frontends in Ember.js using single-spa
https://single-spa.js.org/docs/ecosystem-ember

## Micro frontends

- People
- Planets
- Navbar

## Local Development

### 1. Start the root-config app

```
yarn start
```

### 2. Start the respective micro frontends on separate ports

For example, for starting the people and planets mfes(micro frontends),

people

```
cd src/people
PORT=4200 ember serve
```

planets

```
cd src/planets
PORT=4201 ember serve
```

### 3. Configure and register the apps in root-config:

```js
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
```
