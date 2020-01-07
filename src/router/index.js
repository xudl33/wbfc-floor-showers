import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'index', component: () => import('../views/index') },
    { path: '/TempleteEditorDemo', name: '编辑器DEMO', component: () => import('../views/templete-editor-demo') },
    { path: '/FSShowHorLinkDemo', name: '商品展示列表(分类横版)Demo', component: () => import('../views/fs-products-show-hor-link-demo') },
    { path: '/FSShowHorLinkLayout', name: '商品展示列表(分类横版)布局', component: () => import('../views/fs-products-show-hor-link-layout') },
    { path: '/FSShowHorLinkTpl', name: '商品展示列表(分类横版)编辑器', component: () => import('../components/fs-products-show-hor-link/fs-products-show-hor-link-tpl-editor') },
    { path: '/FSShowVerLinkDemo', name: '商品展示列表(分类竖版)Demo', component: () => import('../views/fs-products-show-ver-link-demo') },
    { path: '/FSShowVerLinkTpl', name: '商品展示列表(分类竖版)编辑器', component: () => import('../components/fs-products-show-hor-link/fs-products-show-ver-link-tpl-editor') },
    { path: '/FSShowVerLinkLayout', name: '商品展示列表(分类竖版)布局', component: () => import('../views/fs-products-show-ver-link-layout') },
  ],
  mode: 'history',
})
