// let demo = document.getElementById('demo')

// function some(some){
//     demo.innerHTML = some
// }

// let myPromise = new Promise(function(res , rej){
//     let x = 0
//     if(x==0){
//         res('OK')
//     }else{
//         rej("errror")
//     }
// })


// let is_shop_open = true
// let learning = (startlearning , time)=>{
//     return new Promise((resolve , reject) =>{
//         if(is_shop_open){
//           setTimeout(()=>{
//           resolve(startlearning())
//           } , time)
//         }else{
//           reject(console.log('magazin yopiq'))
//         }
//     })
// }



// let barber_shop = true
// let learning = (startlearning , time)=>{
//     return new Promise((resolve , reject) =>{
//         if(is_shop_open){
//           setTimeout(()=>{
//           resolve(startlearning())
//           } , time)
//         }else{
//           reject(console.log('sartarosh hona yopiq'))
//         }
//     })
// }



let time = new Date().getHours();

let delaver = true;

if (time)  {
}
let buyurtma = ( time, work) =>{
    return new Promise((res, rej) => {
        if (delaver){
            setTimeout(() => {
                res(work())
            }, time);
        } else {
            rej (
                console.log('error')
            )
        }
    })
}

buyurtma(2000, () => console.log('logation aniqlandi'))
.then( () => {
    return buyurtma(1000, () => console.log('mijozdan buyurtma olindi '))
})
.then( () => {
    return buyurtma(1000, () => console.log('buyurtma tayyorlandi va'))
})
.then( () => {
    return buyurtma(1000, () => console.log('buyurtmani oz egasiga olib borishgani ketishdi'))
})
.then( () => {
    return buyurtma(1000, () => console.log('olib borishdi '))
})
.then( () => {
    return buyurtma(1000, () => console.log('va mijoz raxmat aytdi'))
})