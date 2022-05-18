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
    }
};


_.each({name: "emmo", bag: "vans"}, function(element) {
    console.log(element);
});
_.each(["emmo arr", "vans arr"], function(element) {
    console.log(element);
});


_.map = function() { _.each; }

let raw = _.map(["emmo arr", "vans arr"], function() {
    return `place ${elem}`;
})
console.log(raw);