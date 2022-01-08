export default function getRouteNumber(routes, routeId) {
    const route = routes.find(route => route.id === routeId);

    return route.number;
}