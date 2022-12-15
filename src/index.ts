import express from "express";
import https from "https";
import secure from "express-force-https";
import historique from "connect-history-api-fallback";
import compression from "compression";

const PORT = process.env.PORT || 8080

const appli = express();
appli.use(secure());

appli.use(historique());
appli.use(compression());

appli.get("/", (req, res) => {
    res.send("Test");
})

const serveurHttps = https.createServer(appli);
serveurHttps.listen(PORT);
