import Vue from 'vue'
import vueRouter from 'vue-router';
import App from './App.vue'

// Import route components
import Home from './components/HomeComponent';
import TeamSubmission from './components/TeamSubmissionComponent';
import Teams from './components/TeamsComponent';
import Rules from './components/RulesComponent';
import Questions from './components/QuestionsComponent';
import Records from './components/RecordsComponent';
import TopHos from './components/TopHosComponent';
import Players from './components/PlayersComponent';
import Standings from './components/StandingsComponent';

import VueRouter from 'vue-router';
Vue.config.productionTip = false;

// Enable routing
Vue.use(vueRouter);

// Setup routes
const routes = [
  { path: '/', component: Home},
  { path: '/team-submission', component: TeamSubmission},
  { path: '/teams', component: Teams},
  { path: '/rules', component: Rules },
  { path: '/questions', component: Questions},
  { path: '/records', component: Records},
  { path: '/top-hos', component: TopHos},
  { path: '/players', component: Players},
  { path: '/standings', component: Standings},
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
