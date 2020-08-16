export const LoadImages = (urls) => new Promise((urlResolve) => {
    const promises = urls.map((url) => {
        return new Promise((resolve) => {
            const img = new Image()
            img.onload = () => resolve(img)
            img.src = url
        })
    })
    Promise.all(promises).then((response) => urlResolve(response))
})