import Vue from 'vue';
import { VuetifyObject } from 'vuetify';
import HelloWorld from './components/HelloWorld.vue';
import HelloWorldTS from './components/HelloWorldTS.vue';

declare module 'vue/types/vue' {
  interface Vue {
    $vuetify: VuetifyObject;
  }
}
export default async function Plugin(
  vue: typeof Vue,
  options?: any
): Promise<void> {
  vue.component('HelloWorld', HelloWorld);
  vue.component('HelloWorldTS', HelloWorldTS);
}
