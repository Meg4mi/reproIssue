import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import HelloWorldTS from './components/HelloWorldTS.vue';

export default async function Plugin(
  vue: typeof Vue,
  options?: any
): Promise<void> {
  vue.component('HelloWorld', HelloWorld);
  vue.component('HelloWorldTS', HelloWorldTS);
}
