console.log("loop assignment, implementing what the underscore.js library do in the back .....");


var _ = {
    each(list, callback) {
        if(typeof list === "object") {
            console.log("object");
            if(Array.isArray(list)) {
                console.log("the object is an array");
                for(var i = 0; i < list.length; i++) {
                    callback(list[i], i, list);
                }
            } else {
                console.log("the object is a object oo");
                for(var i in list) {
                    callback(list[i], i, list);
                }
            }
        } else {
            console.log("error");
        }
    },
    // map(list, callback) {
    //     if(typeof list === "object") {
    //         console.log("object");
    //         if(Array.isArray(list)) {
    //             console.log("the object is an array");
    //             let newArr = [];
    //             for(var i = 0; i < list.length; i++) {
    //                 newArr.push(callback(list[i], i, list));
    //             }
    //             return newArr;
    //         }
    //     } else {
    //         console.log("error");
    //     }
    // }
    map(list, callback) {
        if(typeof list === "object") {
            console.log("object");
            if(Array.isArray(list)) {
                console.log("the object is an array");
                let newArr = [];
                _.each(list, function(elem, id, arr) {
                    newArr.push(callback(elem, id, arr));
                });
                return newArr;
            }
        } else {
            console.log("error");
        }
    }
};


_.each({name: "emmo", bag: "vans"}, function(element) {
    console.log(element);
});
_.each(["emmo arr", "vans arr"], function(element) {
    console.log(element);
});


let raw = _.map(["emmo arr", "vans arr"], function(elem, id) {
    return `place ${elem} ${id}`;
})
console.log(raw);