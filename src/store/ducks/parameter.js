// Actions
export const UPDATE_DEFINITION = 'SnakeSnack/Parameters/UPDATE_DEFINITION'

// Reducer
const initial = {
    definitions: [
         {
            id: 1,
            label: "nokia 3310",
            width: 84,
            height: 48
        },
        {
            id: 2,
            label: "game boy",
            width: 160,
            height: 144
        }
    ],
    activeDefinition: 1
}

export default function reducer (state = initial, action = {}) {
    switch (action.type) {
        case UPDATE_DEFINITION:
            return {
                ...state,
                activeDefinition: action.newActiveParameter
            }
        default:
            return state
    }
}

// Action Creator
export const updateGrid = (newActiveParameter) => ({
    type: UPDATE_DEFINITION,
    newActiveParameter
})