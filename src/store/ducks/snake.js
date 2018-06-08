// Actions
const SNACK_MOVE = "SnakeSnacke/Snake/SNACK_MOVE"

// Reducer
const initial = {
    currentPosition: {
        x: 42,
        y: 24
    },
    direction: [
        {
            x: -1,
            y: 0
        },
        {
            x: +1,
            y: 0
        },
        {
            x: 0,
            y: +1
        },
        {
            x: 0,
            y: -1
        }
    ],
    currentDirection: [
        {
            x: -1,
            y: 0
        }
    ]
}

export default function reducer(state = initial, action = {}) {
    switch (action.type) {
        case SNACK_MOVE:
            state.direction.map((value, index) => {
                if (value.x == state.currentDirection[0].x && value.y == state.currentDirection[0].y) {
                    state.currentPosition.x = value.x + state.currentPosition.x
                    state.currentPosition.y = value.y + state.currentPosition.y
                    return {
                        ...state
                    }
                }
            })
        default:
            return state
    }
}

// Action Creator
export const snackMove = () => ({
    type: SNACK_MOVE
})