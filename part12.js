//  async function greet() {
//     // throw "some random error";
//     return "hello!";
//  }

//  greet()
//  .then(()=>{
//     console.log("promise was resolved");
//     console.log("result was : ", result);
//  })

//  .catch((err)=>{
//     console.log("promise was rejected with err :", err);
//  })

//  let demo = () =>{
//     return 5;
//  };

// //  await keyword

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() *10)+1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo () {
//      await getNum();
//      await getNum();
//      await getNum();
//      await getNum();
//      await getNum();


// };

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*5)+1;
            if(num > 3) {
                reject("promise was rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay)
    });
}

async function demo()  {
    try {                                   //handle rejection in await using try and catch block   
      await changeColor("red", 1000);
      await changeColor("yellow", 1000);
      await changeColor("green", 1000);
      await changeColor("blue", 1000);
      await changeColor("pink", 1000);
    } catch(err) {
        console.log("error caught");
        console.log(err);
    }
      let a =5;
      console.log(a);
      console.log("new number" , a+3);

}


// API

let student = {
    name : "milky",
    marks: 97,
};


