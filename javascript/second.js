// // function a()
// {
   
//     console.log(arguments[0])
// }
// x=[1,2,3]
// a(x)

function sum1(v,f){
    z=v[0]+f
    console.log(`ans is ${z}`)
}
function sum2(){
    return arguments[1]
}
x=[1,2,3]
sum1(x,sum2(2,3))

