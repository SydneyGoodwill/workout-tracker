const { Workout } = require("../models");
let db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {


  // index route loads view.html
  app.get("/api/workouts", (req, res) => {
    Workout.find({}).then(dbWorkout => {
      res.json(dbWorkout);
    })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    console.log(req.body, req.params);
    Workout.findByIdAndUpdate({}).then(dbWorkout => {
      res.json(dbWorkout);
    })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // cms route loads cms.html
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });


};