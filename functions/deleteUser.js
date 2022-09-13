exports = function(id){
    let collection = context.services.get("mongodb-atlas").db("vueRealmDB").collection("vueRealmCol");
    
    let deleteUser = collection.deleteOne({_id: BSON.ObjectId(id)})
    
    return deleteUser;
};