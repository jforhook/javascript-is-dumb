// This is an object
const rugger = {
    name: "Weeman",
    position: "Hooker",
    height: "66",
    weight: "200",
    fullName : function() {
        return this.height + ", " + this.weight + "lbs";
    }
}

// You can access variables one of two ways
console.log(rugger.name);
console.log(rugger["name"]);
console.log(rugger.fullName());
