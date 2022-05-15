const plasticController = require("./controllers/plasticController");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Oceanides");
});

app.listen(port, () => {
    console.log(`testing app listening on port ${port}`);
});

app.get("/Oceanides/Plastics/:list", (req, res) => {
    const list = req.params.list;
    const plasticList = plasticController.getWholePlasticsElements(list);
    res.json(plasticList);
});

app.get("/Oceanides/Stats/:status", (req, res) => {
    const status = req.params.status === "true" ? true : false;
    const plasticStats = plasticController.getValidation(status);
    res.json(plasticStats)
})

app.get("/Oceanides/Graphic/:graph", (req, res) => {
    const graph = req.params.graph;
    const degradetion = plasticController.getYeardDeg(graph)
    res.json(degradetion)
})