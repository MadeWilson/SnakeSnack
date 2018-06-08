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

const manageBorderX = (movementValue, currentPosition, state) => {
    let currentWidth = 84

    if (movementValue + currentPosition < 0) {
        return currentWidth
    }

    if (movementValue + currentPosition > currentWidth) {
        return 0
    }

    return movementValue + currentPosition
}

export default function reducer(state = initial, action = {}) {
    switch (action.type) {
        case SNACK_MOVE:
            state.direction.map((value, index) => {
                if (value.x == state.currentDirection[0].x && value.y == state.currentDirection[0].y) {
                    state.currentPosition.x = manageBorderX(value.x, state.currentPosition.x, state)
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