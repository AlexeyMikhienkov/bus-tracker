export const chooseRouteNumber = {
    title: "chooseRouteNumber",
    text: "Выберите номер маршрута"
}

export const busesTableHeader = [
    "Марка автобуса", "Водитель", "Расход топлива", "Статус"
];

export const autoParkTableHeader = [
    "Марка автобуса", "Водитель", "Расход топлива"
];

export const onRouteTableHeader = [
    "Марка автобуса", "Водитель", "Номер маршрута"
];

export const routesTableHeader = [
    "Номер маршрута", "Длина маршрута", "Необходимое число автобусов"
];

export const checkFuelTableHeader = [
    "Номер маршрута", "Длина маршрута", "Расход топлива на маршруте"
]

export const busStatus = {
    inPark: "В парке",
    onRoute: "Маршрут"
};

export const busFormFields = {
    driverFirstName: {
        title: "driverFirstName",
        text: "Имя водителя"
    },
    driverLastName: {
        title: "driverLastName",
        text: "Фамилия водителя"
    },
    fuelPerKm: {
        title: "fuelPerKm",
        text: "Расход топлива на км"
    },
    number: {
        title: "number",
        text: "Марка автобуса"
    }
};

export const routeFormFields = {
    distance: {
        title: "distance",
        text: "Длина маршрута (дробные значения указываются через точку)"
    },
    needBusCount: {
        title: "needBusCount",
        text: "Число автобусов на маршрут"
    },
    number: {
        title: "number",
        text: "Номер маршрута"
    }
};

export const menuContentTitles = {
    routes: {
        title: "Маршруты",
        path: "/routes"
    },
    buses: {
        title: "Все автобусы",
        path: "/buses"
    },
    autoPark: {
        title: "Автопарк",
        path: "/park"
    },
    onRoute: {
        title: "Автобусы на маршруте",
        path: "/on-route"
    },
    consumption: {
        title: "Затраты бензина",
        path: "/check-fuel"
    }
}

export const headers = {
    routes: "Маршруты",
    buses: "Автобусы",
    autoPark: "Автопарк",
    onRoute: "На маршруте",
    fuel: "Затраты топлива",
    chooseRoute: "Выбрать маршрут",
    addBus: "Добавить автобус",
    addRoute: "Добавить маршрут"
}
