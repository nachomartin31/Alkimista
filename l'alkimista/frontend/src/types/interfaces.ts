interface State {
    dishes: [{}] | [],
    menus: [{}] | [],
    wines: [{}] | [],
    currentDish: object,
    currentWine: object,
    user: object | string,
    token: string
}

export default State;
