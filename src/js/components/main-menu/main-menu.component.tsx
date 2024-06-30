import {Fragment, h} from 'preact'
import {Route, routes} from '../../consts/routing'
import {useEffect} from 'preact/compat'

import './main-menu.scss'

export const MainMenuComponent = (props: { currentRoute: Route }) => {
    const activeRoute = routes.find(route => route.route === props.currentRoute)

    useEffect(() => {
        const menuContainer = document.getElementById('fake-main-menu') as HTMLElement
        if (menuContainer) {
            console.log('Remove placeholder...')
            menuContainer.style.display = 'none'
        }
    }, [])

    return <Fragment>
        {activeRoute && <h1>{activeRoute?.title}</h1>}
        <nav>
            <ul>
                {routes.map(route => {
                    const isActive = route.route === props.currentRoute
                    return <li key={route.route} className={isActive ? 'active' : ''}>
                        {isActive ? route.text : <a href={route.route}>{route.text}</a>}
                    </li>
                })}
            </ul>
        </nav>
    </Fragment>
}

