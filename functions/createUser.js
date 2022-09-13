
exports = function(name, location, title){
    let collection = context.services.get("mongodb-atlas").db("vueRealmDB").collection("vueRealmCol");
    
    let newUser = collection.insertOne({"name": name, "location": location, "title": title})

    return newUser;
};