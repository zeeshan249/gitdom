let looping=document.querySelectorAll('.as-imagegrid-item-title')
let arr=[];
for(let fresh of looping){
    arr.push(fresh.innerText.replace("\nSupport", " "));
}
console.log(arr);
//Output:-
//  ['iPhone ', 'Mac ', 'iPad ', 'Watch ', 'AirPods ', 'Music ', 'TV ']
// let arr = [];
// document.querySelectorAll(".as-imagegrid-item").forEach((e) => {
//   arr.push(e.innerText.replace("\nSupport", " "));
// })
// console.log(arr);