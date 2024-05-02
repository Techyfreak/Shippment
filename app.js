const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const db = require("./db"); // connecting db and server.js

app.use(express.json()); // to bring the data into format

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form");
});




app.post("/", (req, res) => {
  const { department_id,
    transportation_mode,
    voyages,
    port_load,
    job_types,
    place_of_receipt,
    port_disc_id,
    place_of_delivery,
    estimate_tod,
    carrier_agent_id,
    shipper_ref_num,
    shipment_country_of_origin} = req.body;
  db.query(
    "insert into Shipping(department_id,customer_id,transportation_mode,voyages,port_load,job_types,place_of_receipt,port_disc_id,place_of_delivery,master_bl,estimate_tod,carrier_agent_id,shipper_ref_num,shipment_country_of_origin) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [department_id,
        Math.random()*10000000,
        transportation_mode,
        voyages,
        port_load,
        job_types,
        place_of_receipt,
        port_disc_id,
        place_of_delivery,
        Math.random()*10000000,
        estimate_tod,
        carrier_agent_id,
        shipper_ref_num,
        shipment_country_of_origin],
    (error, results) => {
      if (!error) {
        // res.json(results);
        res.redirect("/result");
      } else {
        console.log(error);
      }
    }
  );
});


app.get("/result", (req, res) => {
    res.render("result");
  });
  
app.listen(8080, () => {
    console.log("server is running 8080");
});