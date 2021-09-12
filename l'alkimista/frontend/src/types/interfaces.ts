interface State {
    dishes: [{tags: [string]}] | [],
    menus: [{}] | [],
    wines: [{}] | [],
    currentDish: object,
    currentWine: object,
    user: object | string,
    token: string,
    currentState: any,
    dataToSend: object,
    currentElementId: "",
    tags: [string] | [],
}

export default State;
