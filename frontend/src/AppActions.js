const addAction = (description) => {
    return {
        type: 'ADD',
        payload: description
    }
}

const addAppNotification = (notification) => {
    return {
        type: 'ADD_APP_NOTIFICATION',
        payload: notification
    }
}

const changeDescription = (event) => {
    return {
        type: 'DESCRIPTION_CHANGED',
        payload: event.target.value
    }
}

export { addAction, addAppNotification, changeDescription };