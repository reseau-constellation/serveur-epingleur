import express from "express";
import https from "https";
import secure from "express-force-https";

const PORT = process.env.PORT || 8080

const appli = express();
appli.use(secure);

appli.get("/", (req, res) => {
    res.send("Test");
})

const serveurHttps = https.createServer(appli);
serveurHttps.listen(PORT);
