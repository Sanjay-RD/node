// some command for mongodb

// show dbs ->show all your databases
// use test1 or any name listend in dbs -> using use we can use test1 dbs
// show collections -> collection inside test1 dbs
// db.dropDatabase() -> use to delete whole database
// show dbs
// use acme -> use to create fresh database
// show dbs -> here we can't see acme dbs because with out having collections in it we can't see it's table
// db ->used to check in which folder your location is.
// db.createCollection('posts') -> used to create collection inside dbs
// show collection

// insert table
db.posts.insert({
  title: "post one",
  body: "Body of post one",
  category: "News",
  likes: 4,
  tags: ["news", "events"],
  user: {
    name: "sanjay RD",
    status: "author",
  },
  date: Date(),
});

// insert many table
db.posts.insertMany([
  {
    title: "post two",
    body: "Body of post two",
    category: "technology",
    date: Date(),
  },
  {
    title: "post three",
    body: "Body of post three",
    category: "News",
    date: Date(),
  },
  {
    title: "post four",
    body: "Body of post four",
    category: "entertnment",
    date: Date(),
  },
]);

// db.posts.find() -> to find all the table in the databases
//  db.posts.find().pretty() ->pretty() is used to formatt the code in json format
//  db.posts.find({category:'News'}) ->we can specifice the find method by passing abject, so that we can only get those data
//  db.posts.find().sort({title:1}) -> 1 and -1 is used for assending and descending order respectively.
//  db.posts.find().count() ->cound() is used to count the table in the databases
//  db.posts.find({category:'News'}).count()
//  db.posts.find().sort({title:-1}).limit(2) -> limit is used to show only the limited table from database
//  db.posts.find().forEach(function(doc){print('Blog post : '+doc.title)})
//
