/**
 * Please note: this is not an SPA. Well, it is exactly SPA: each route is a separate page and an app =)
 */
export const routes = [
    {title: 'Welcome to a Preact App', text: 'Home', route: 'index.html'},
    {title: 'Dashboard page', text: 'Dashboard', route: 'dashboard.html'}
] as const

export type Route = typeof routes[number]['route']