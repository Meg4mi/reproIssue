# ReproIssue #293

## Install

1. clone this repo
2. install package in "app" and "plugin" project
3. `cd plugin && npm link`
4. go back into "app" directory => `npm link plugin`
5. `npm run serve` and open your favorite browser

### The issue

Using vue-class-component you can't access \$vuetify in the external plugin, but using pure js object, it works.

HelloWorld Component is working
HelloWorldTS can't see \$vuetify

Vuetify is used here as an exemple. You'll have the same issue with every plugin.
