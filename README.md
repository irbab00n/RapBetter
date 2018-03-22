<h1>Rap Better Website && Freestyle Tool</h1>

Rap Better is a website dedicated to helping individuals learn to rap. This proejct contains resources such as a youtube-hosted video library, brief descriptions of applicable courses, and an about page. there is also a distinct tool for practicing freestyling.

The freestyle tool serves sets of rhymes the server, held in a Mongo database. It serves one word and four rhymes at a time. 

<img width="1358" alt="screen shot 2018-03-22 at 10 27 05 am" src="https://user-images.githubusercontent.com/27744870/37787834-26b026b0-2dbd-11e8-8cca-2e5be44efa6e.png">

Setup
---
 
```
npm install
```

Usage
---
 
Start the development server with this command:
 
```
npm start
```

Compile
---
 
```
npm run compile
```

Fill database with words 
---

If you need to add rhymes to your database, you can run these two commands. The first one will add all the 10k words from words.txt to the database. The second command will get rhymes for those words and put them into the database as well. 

```
node fillDatabaseWithWords
node mapWordsToRhymes
```
