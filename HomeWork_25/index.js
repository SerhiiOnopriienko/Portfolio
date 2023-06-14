const express = require("express");
const fs = require("fs");
const util = require("util");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const { type } = require("os");

const app = express();
const PORT = 3000;
const readFileAsPromise = util.promisify(fs.readFile);
const writeFileAsPromise = util.promisify(fs.writeFile);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/notes", async (req, res) => {
  const notes = JSON.parse(
    await readFileAsPromise("./data/notes.json", "utf-8")
  );
  console.log(typeof notes);
  res.send(notes);
});

app.post("/notes", async (req, res) => {
  let notes = JSON.parse(await readFileAsPromise("./data/notes.json", "utf-8"));
  const newNote = {
    id: uuidv4(), 
    dateCreated: `${new Date().getDate()} ${new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date())} ${new Date().getFullYear()}`, 
    title: Object.keys(req.body).join(), 
    text: Object.values(req.body).join(), 
    isShared: false,
}

  notes.push(newNote);
  console.log(typeof notes);

  await writeFileAsPromise("./data/notes.json", JSON.stringify(notes));
  res.send(notes);
});

app.delete("/notes", async (req, res) => {
    let notes = JSON.parse(await readFileAsPromise("./data/notes.json", "utf-8"));
    const result = notes.filter((note) => note.id !== Object.keys(req.body).join());
    await writeFileAsPromise("./data/notes.json", JSON.stringify(result));
    res.send(result);
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
