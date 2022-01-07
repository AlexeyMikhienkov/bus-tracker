export const chooseRouteNumber = {
    title: "chooseRouteNumber",
    text: "Выберите номер маршрута"
}

export const busesTableHeader = [
    "Марка автобуса", "Водитель", "Расход топлива", "Статус"
];

export const routesTableHeader = [
  "Номер маршрута", "Протяженность", "Необходимое число автобусов"
];

export const checkFuelTableHeader = [
    "Номер маршрута", "Протяженность", "Расход топлива на маршруте"
]

export const busStatus = {
    inPark: "В парке",
    onRoute: "На маршруте"
};

export const busFormFields = [
    {
        title: "driverFirstName",
        text: "Имя водителя*"
    },
    {
        title: "driverLastName",
        text: "Фамилия водителя*"
    },
    {
        title: "fuelPerKm",
        text: "Расход топлива на км*"
    },
    {
        title: "number",
        text: "Марка автобуса*"
    }
];

export const routeFormFields = [
    {
        title: "distance",
        text: "Длина маршрута (дробные значения через точку)*"
    },
    {
        title: "needBusCount",
        text: "Число автобусов на маршрут*"
    },
    {
        title: "number",
        text: "Номер маршрута*"
    }
];