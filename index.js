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

// h1 = document.querySelector("h1");

// function changeColor(color , delay , nextColorChange) { 
//     setTimeout(()=>{
//         h1.style.color = "color";
//         if (nextColorChange) nextColorChange();
//     }, delay);

// }

// changeColor("red" ,1000, ()=>{
//     changeColor("orange",1000, () => {
//         changeColor("purple",1000,() => {
//            changeColor("green",1000);
//         });
//     });
// });

h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!!");
        }, delay);
    });
}

changeColor("red" , 1000)
.then(() => {
    console.log("red color was changed");
    return changeColor("orange" , 1000);
})
.then(() => {
    console.log("orange color was changed");
    return changeColor("purple", 1000);
})
.then(() => {
    console.log("purple color was changed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color was changed");
    return changeColor("pink", 1000);
})

.then(() => {
    console.log("pink color was changed");
    return changeColor("blue", 1000);
})
.then(() => {
    console.log("blue color was changed");
    return changeColor("yellow", 1000);
})
.then(() => {
    console.log("yellow color was changed");
    
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

// promises  


// function savetoDb(data , success, failure)  {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1 ;
//     if (internetSpeed > 4) {
//         success();
//     } else{
//         failure();
//     }
// }

// savetoDb("apna college" , () =>{
//     console.log(" success: your data was saved : ");
//     savetoDb(
//         "hello world",
//         () =>{
//             console.log("success2: data2 saved");
//         },
//         () =>{
//             console.log("failure2 : weak connection");
//         }
//     );
// },
// () => {
//     console.log("weak connection , data not saved");
// }
// );


// promises execution that will return some object

function savetoDb(data)  {
    return new Promise ((success , failure)  => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1 ;
        if (internetSpeed > 4) {
            success("success: data was saved");
        } else{
            failure("failure: weak connection");
        }
    });
   
}


let request = savetoDbPromise("apnacollege");
request
.then(() => {
    console.log("promise resolved");
})

.catch(() => {
    console.log("promise rejected");
});



// promise chain

savetoDbPromise("apna college")
.then(() => {
    console.log("promise1 resolved");
    return savetoDbPromise("hello world");
})

.then(() => {
    console.log("promise2 resolved");
})

.catch(() =>{
    console.log("some promise rejected");
});


//  promises are rejected and resolved with some data(valid reults or errors)

savetoDbPromise("apnacollege")
  .then((result) => {
    console.log("result: ", result);
    console.log("promise1 resolved");
    return savetoDbPromise("hello world");
  })

  .then((result) =>{
    console.log("result: ", result);
    console.log("promise2 resolved");
  })

  .catch((error) => {
    console.log("error : ", error);
    console.log("some promise rejected");
  }); 