export interface dishes{
    _id: String,
    name: String,
    image: String,
    descriptionCat: String,
    descriptionSpa: String,
    ingredientsCat: Array<String>,
    ingredientsSpa: Array<String>,
    tags: Array<String>,
    price: Number
}
export interface menus{
    _id: String,
    name: String,
    dishes: Array<String>
    price: Number
}

export interface wines{
    _id: String,
    name: String,
    vinery: String,
    type: String,
    year: Number,
    DO: String,
    grapeTypes: Array<String>,
    ingredientsSpa: Array<String>,
    tags: Array<String>,
    bottlePrice: Number,
    glassPrice: Number
}

export interface user{
    _id: String,
    name: String,
    login: String,
    password: String,
    role: String,

}

export interface State {

  dishes: Array<dishes> | [],
  menus: Array<menus> | [],
  wines: Array<wines> | [],
  currentDish: dishes | {},
  currentWine: wines | {},
  user: String | user,
  token: String,
  currentState: Array<dishes> | Array<menus> | Array<wines> | [],
  dataToSend: dishes | menus | wines | {},
  currentElementId: String,
  tags:Array<String> | [],
}
