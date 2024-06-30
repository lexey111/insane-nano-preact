import {h, render} from 'preact'
import 'preact/devtools'
import {HelloComponent} from './components/hello.component'
import {MainMenuComponent} from './components/main-menu/main-menu.component'

console.log('Main init - with Preact')

// Two entry points/render roots: one for main menu, second one for the app
const menuContainer = document.getElementById('main-menu') as HTMLElement
const appContainer = document.getElementById('app') as HTMLElement

const Menu = <MainMenuComponent currentRoute="index.html"/>
const App = <HelloComponent name="John Doe"/>

render(Menu, menuContainer)
render(App, appContainer)
