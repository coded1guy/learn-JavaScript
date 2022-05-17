console.log("learning destructuring ...... ");


const data = {
    boy: ["fsd", "sff", "edef"]
};


(function boys() {
    data.boy.forEach(element => {
        console.log(element)
    })
})();


let bord = [1,2,3,4];



var tmp;
var [a,b,c,d] = tmp = bord;


console.log(a,b,c);


bord[0] = 9;
console.log(a,tmp);