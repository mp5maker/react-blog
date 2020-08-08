export const StorageSet = ({ key, value }) => {
    return new Promise((resolve) => {
        resolve(localStorage.setItem(key, value))
    })
}

export const StorageGet = ({ key }) => {
    return new Promise((resolve) => {
        resolve(localStorage.getItem(key))
    })
}