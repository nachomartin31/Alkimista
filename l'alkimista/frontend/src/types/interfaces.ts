interface State {
    dishes: [{}] | [],
    menus: [{}] | [],
    wines: [{}] | [],
    currentDish: object,
    currentWine: object,
    user: object | string,
    token: string,
    currentState: any,
    dataToSend: object,
    currentElement: object
}

export default State;
