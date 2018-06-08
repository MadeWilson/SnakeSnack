// Actions
const NEW_FRAME_END = "SnakeSnack/timer/NEW_FRAME_END"
const NEW_FRAME_START = "SnakeSnack/timer/NEW_FRAME_START"
const NEW_FRAME_ERROR = "SnakeSnack/timer/NEW_FRAME_ERROR"

// Reducer
const initial = {
    intervalId: 0,
    currentCount: 0
}

export default function reducer(state = initial, action = {}) {
    switch (action.type) {
        case NEW_FRAME_START:
            console.log("start a new Frame")
            return {
                ...state
            }
        case NEW_FRAME_END:
            return {
                ...state,
                currentCount: state.currentCount + 1
            }
        case NEW_FRAME_ERROR:
            console.log(action.error)
        default:
            return state
    }
}

// Action Creator
export const newFrameStart = () => ({
    type: NEW_FRAME_START
})

export const newFrameEnd = () => ({
    type: NEW_FRAME_END
})

export const newFrameError = () => ({
    type: NEW_FRAME_ERROR
})