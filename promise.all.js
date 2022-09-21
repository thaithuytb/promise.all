
const promise = (t) => {
    // if (t === 2000) {
    //     throw new Error('false')
    // }
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(t);
            res(t)
        }, t)
    })
}
const createUser = async () => {
    const a =2;
    const b = 3;
    const c = 4;
    const arr1 = [5,4,3]
    const arr2 = [4,3,2]
    const arr3 = [1,1,1]
    try {
        await promise(3000);
        if (a===2) {
             Promise.all(arr1.map(  a => {
                return  promise(a*1000)
            }))
        }
        if (b===3) {
            await Promise.all(arr2.map(  a => {
                return  promise(a*1000)
            }))
        }
        if (c===4) {
             await Promise.all(arr3.map(  a => {
                return  promise(a*1000)
            }))
        }
    } catch (error) {
        console.log('q')
        console.log(error)
    }
}
const x = async () => {
    await createUser()
}
x()