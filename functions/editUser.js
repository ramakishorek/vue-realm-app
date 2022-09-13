exports = function(id, name, location, title){
    let collection = context.services.get("mongodb-atlas").db("vueRealmDB").collection("vueRealmCol");
    let updated = collection.findOneAndUpdate(
        {_id: BSON.ObjectId(id)},
        { $set: { "name": name, "location": location, "title": title } },
        { returnNewDocument: true }
      )
      
    return updated;
};