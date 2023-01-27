import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/universe',
      name: 'universe',
      component: () => import('../views/Universe.vue')
    },
    {
      path: '/responsibility',
      name: 'responsibility',
      component: () => import('../views/Responsibility.vue')
    },
    {
      path: '/tinder',
      name: 'tinder',
      component: () => import('../views/Tinder/tinder.vue')
    },
    {
      path: '/tinderTutoriel',
      name: 'tinderTutoriel',
      component: () => import('../views/Tinder/tinderTutoriel.vue')
    },
    {
      path: '/produitDescription',
      name: 'produitDescription',
      component: () => import('../views/PagesProduit/produitDesc.vue')
    },
    {
      path: '/produitPersonna',
      name: 'produitPersonna',
      component: () => import('../views/PagesProduit/produitPersonna.vue')
    },
    {
      path: '/compte',
      name: 'compte',
      component: () => import('../views/compte/compte.vue')
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: () => import('../views/compte/connexion.vue')
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: () => import('../views/compte/inscription.vue')
    },
    {
      path: '/CatalogueSofa',
      name: 'CatalogueSofa',
      component: () => import('../views/catalogue/CatalogueSofa.vue')
    },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: () => import('../views/catalogue/Catalogue.vue')
    },
    {
      path: '/achatCoordonnees',
      name: 'achatCoordonnees',
      component: () => import('../views/achat/achatCoordonnée.vue')
    },
    {
      path: '/achatPaiement',
      name: 'achatPaiement',
      component: () => import('../views/achat/achatPaiement.vue')
    },
    {
      path: '/achatSelection',
      name: 'achatSelection',
      component: () => import('../views/achat/achatSelection.vue')
    },
    {
      path: '/brandHistory',
      name: 'brandHistory',
      component: () => import('../views/BrandHistory.vue')
    },
  ]
})

export default router
