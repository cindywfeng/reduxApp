export default addDog = event => ({
    type: "ADD_A_DOG",
    payload: {name: event.target.name, age: event.target.age}
})

export default changeFavouriteDog = id => ({
    type: "SELECT_A_DOG",
    payload: id
})