import {initGauges} from './utils/gauges.js'
import {h, render} from 'preact'
import 'preact/devtools'
import {MainMenuComponent} from './components/main-menu/main-menu.component'

console.log('Dashboard init - with Preact')

initGauges()

console.log('Main init')

const menuContainer = document.getElementById('main-menu') as HTMLElement

const Menu = <MainMenuComponent currentRoute="dashboard.html"/>

render(Menu, menuContainer)
