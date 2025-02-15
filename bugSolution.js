```javascript
//Correct usage of $inc operator with conditional check
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890"),count:{$gt:0}},{$inc:{count:-1}});
```