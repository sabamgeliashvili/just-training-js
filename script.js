let btn1 = document.getElementById('prev')
let slimgs = document.getElementById('slider')
let btn2 = document.getElementById('next')


let imgarr = [
    './images/image1.jpg',
    './images/image2.jpg',
    './images/image3.gif'
]



btn1.addEventListener('click', function(){
    for(let i =0; i > imgarr.length; i--){
        if(i < 0 ){
            i = 2
        }
        slimgs.src = imgarr[i]
    }
})


btn2.addEventListener('click', function(){
    for(let i = 0; i < imgarr.length; i++) {
        if (i > 2){
            i = 0
        }
        slimgs.src = imgarr[i]
    }

})


// let i = 0
// btn1.addEventListener('click', function(){
//     i--
//     if (i < 0){
//         i = 2
//     }
//     slimgs.src = imgarr[i]
// })


// btn2.addEventListener('click', function(){
//     i++
//     if(i > 2) {
//         i = 0
//     }
//     slimgs.src = imgarr[i]
// })



/////////////// END OF SLIDER/////////////////







//////////////// SORTING //////////////////////

// let arr = [12,10,21,7,4,9,13]


// function sortNumbers(target) {
//     target.sort(function(a,b){
//         return b - a
//     })
//     return target
// }

// console.log(sortNumbers(arr))






/////////////// FILTERING /////////////////


// let arr = [12,10,21,7,4,9,13]

// function filterEvenNumbers(target) {
//     let newarr = target.filter(function(elem){
//         if (elem % 2 == 1){
//             return true;
//         }
//     })
//     return newarr
// }


// console.log(filterEvenNumbers(arr))







//////////// fromCharCode ////////////


// console.log(String.fromCharCode(75))




// //////////// charCodeAt ////////////

// let word = 'hello world!'

// console.log(word.charCodeAt(7))










// let mname = 'saba mgeliashvili'
// let newname = ''

// for(let i = 0; i < mname.length; i++) {
//     if (mname[i] !== 'a'){
//         newname += mname[i]
//     }
        
//     console.log(newname)
// }

