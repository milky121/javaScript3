function one(){
    return 1;

}

function two(){
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three(); 


// js is single thread

setTimeout( ()=>{
        console.log("apna college");
}, 2000);
console.log("hello......."); 


// callback hell

h1 = document.querySelector("h1");

function changeColor(color , delay , nextColorChange) { 
    setTimeout(()=>{
        h1.style.color = "color";
        if (nextColorChange) nextColorChange();
    }, delay);

}

changeColor("red" ,1000, ()=>{
    changeColor("orange",1000, () => {
        changeColor("purple",1000,() => {
           changeColor("green",1000);
        });
    });
});
// setTimeout(()=>{
//     h1.style.color = "red";
// },1000);

// setTimeout(()=>{
//     h1.style.color = "orange";
// },2000);

// setTimeout(()=>{
//     h1.style.color = "green";
// },3000);