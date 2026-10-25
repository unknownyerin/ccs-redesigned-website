
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Programs from '../views/Programs.vue'
import BSIT from '../views/BSIT.vue'
import BSCS from '../views/BSCS.vue'
import BSDMIA from '../views/BSDMIA.vue'
import BLIS from '../views/BLIS.vue'
import Faculty from '../views/Faculty.vue'
import Contact from '../views/Contact.vue'
import EventCalendar from '../views/EventCalendar.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path: '/event-calendar',
  name: 'EventCalendar',
  component: EventCalendar
},
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/programs',
    name: 'Programs',
    component: Programs
  },
  {
    path: '/programs/bsit',
    name: 'BSIT',
    component: BSIT
  },
  {
    path: '/programs/bscs',
    name: 'BSCS',
    component: BSCS
  },
  {
    path: '/programs/bsdmia',
    name: 'BSDMIA',
    component: BSDMIA
  },
  {
    path: '/programs/blis',
    name: 'BLIS',
    component: BLIS
  },
  {
    path: '/faculty',
    name: 'Faculty',
    component: Faculty
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
