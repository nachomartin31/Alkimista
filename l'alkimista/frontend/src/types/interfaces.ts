interface State {
    dishes: [{}] | [],
    menus: [{}] | [],
    wines: [{}] | [],
    currentDish: object,
    currentWine: object,
    user: object | string,
    token: string,
    currentState: any
}

export default State;
