export interface Dishes{
    _id: string,
    name: string,
    image: string,
    descriptionCat: string,
    descriptionSpa: string,
    ingredientsCat: Array<string>,
    ingredientsSpa: Array<string>,
    tags: Array<string>,
    price: number
}
export interface Menus{
    _id: string,
    name: string,
    dishes: Array<string>
    price: number
}

export interface Wines{
    _id: string,
    name: string,
    vinery: string,
    type: string,
    year: number,
    DO: string,
    grapeTypes: Array<string>,
    bottlePrice: number,
    glassPrice: number
}

export interface User{
    _id: string,
    name: string,
    login: string,
    password: string,
    role: string,

}

export interface State {

  dishes: Array<Dishes> | [],
  menus: Array<Menus> | [],
  wines: Array<Wines> | [],
  currentDish: Dishes | {},
  currentWine: Wines | {},
  user: string | User,
  token: string,
  currentState: Array<Dishes> | Array<Menus> | Array<Wines> | [],
  dataToSend: Dishes | Menus | Wines | {},
  currentElementId: string,
  tags:Array<string> | [],
}
