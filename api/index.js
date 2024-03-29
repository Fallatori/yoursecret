import { writeFile, readFile, appendFile } from "fs/promises";
import express from "express";
import cors from "cors";
import { v4 } from "uuid";
const app = express();
app.use(express.json());
app.use(cors());

const DB_URI = "./db.txt";

app.get("/api/secrets", async (req, res) => {
  console.log("/api/secrets");
  //console.log(await readFile("./db.json", { encoding: "utf-8" }));
  try {
    const rawData = await readFile(DB_URI, { encoding: "utf-8" });
    const data = rawData.split("\n").map((rawItem) => {
      const [id, text, used] = rawItem.split(":");
      return {
        id,
        text,
        used: Boolean(used),
      };
    });
    res.send({ data });
  } catch (err) {
    console.log("I don goofed");
    console.log(err);
  }
});

app.get("/api/secrets/random", async (req, res) => {
  console.log("/api/secrets/random");
  const rawData = await readFile(DB_URI, { encoding: "utf-8" });

  if (rawData.length === 0) {
    return res.status(404).send("No data");
  }
  const data = rawData.split("\n").map((rawItem) => {
    const [id, text, used] = rawItem.split(":");
    return {
      id,
      text,
      used,
    };
  });

  const unusedDataItems = data.filter((item) => !item.used);

  console.log("unused length is ", unusedDataItems.length);

  const randomIndex = Math.floor(Math.random() * unusedDataItems.length);

  console.log("random index is ", randomIndex);

  const random = unusedDataItems[randomIndex];

  const shouldSetAllUsedItemsToUnused = unusedDataItems.length <= 1;

  //set random selection to status "used"
  const newDBData = data
    .map(({ id, text, used }) => {
      if (id === random.id) {
        //if the item in the database has the same id as the request asked to update
        return `${id}:${text}:${shouldSetAllUsedItemsToUnused ? "" : "x"}`; //return a new item with updated data
      }
      return `${id}:${text}:${shouldSetAllUsedItemsToUnused ? "" : used}`; //return an identical item
    })
    .join("\n"); //make back into a string with newlines as separators

  writeFile(DB_URI, newDBData); //update database

  res.send({
    id: random.id,
    text: random.text,
  });
});

app.post("/api/secrets", async (req, res) => {
  console.log("POST /api/secrets", req.body);

  const rawData = await readFile(DB_URI, { encoding: "utf-8" });
  const addNewline = rawData.length !== 0;

  const id = v4();
  appendFile(DB_URI, `${addNewline ? "\n" : ""}${id}:${req.body.data}:`);
  res.send(`New item created with data ${req.body.data}`);
});

app.put("/api/secrets/:id", async (req, res) => {
  console.log("PUT /api/secrets", req.params.id);
  const rawData = await readFile(DB_URI, { encoding: "utf-8" }); //read raw data from file
  const data = rawData.split("\n"); //make data into a list of items
  const responseData = data
    .map((item) => {
      //for every item:
      const values = item.split(":"); //split item in the middle.
      const id = values[0]; //id is whatever comes before the colon
      const used = values[2];
      if (id === req.params.id) {
        //if the item in the database has the same id as the request asked to update
        return `${id}:${req.body.data}:${used}`; //return a new item with updated data
      }
      return item; //return an identical item
    })
    .join("\n"); //make back into a string with newlines as separators

  writeFile(DB_URI, responseData); //update database
  res.send(`Item ${req.params.id} was updated with data ${req.body.data}`);
});

app.delete("/api/secrets/:id", async (req, res) => {
  console.log("DELETE /api/secrets", req.params.id);
  const rawData = await readFile(DB_URI, { encoding: "utf-8" }); //read raw data from file
  const data = rawData
    .split("\n") //make data into a list of items
    .filter((item) => item.split(":")[0] !== req.params.id) //remove item with the offending id
    .join("\n"); //make back into a string with newlines as separators
  writeFile(DB_URI, data); //update database
  res.send(`Item ${req.params.id} was deleted`);
});

app.listen(3001, () => {
  console.log("Listening on port 3001!");
});
