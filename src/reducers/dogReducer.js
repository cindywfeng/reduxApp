const initState = { all: [{id:1, name: "Maya", age:2}, {id:2, name: "Coconut", age:3}]}

const dogsReducer = (state=initState, action) => {
    switch(action.type){
        case "ADD_A_DOG":
            const newDOG = action.payload;
            return { ...state, all: [ ...state.all, newDOG ] };
        case "DELETE_A_DOG":
            const deleteDOG = state.all.find(c => c.id === action.payload);
            return { ...state}
        case "UPDATE_A_DOG": 
            const DogToUpdate = state.all.find(c => c.id === action.payload.id);
            const index = state.all.indexOf(DogToUpdate);
            const updatedDogs = [ ...state.all.slice(0, index), action.payload, ...state.all.slice(index + 1)]
            return { ...state, all: updatedDogs}
        default:
            return state;
    }
}
export default dogsReducer;