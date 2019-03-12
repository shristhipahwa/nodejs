const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route("/:leaderId")

.all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader("Content-Type","text/plain");
  next();
})
.get((req,res,next)=>{
  res.end("will send the leader "+ req.params.leaderId +" to you!");
})

.post((req,res,next)=>{
  res.statusCode=403;
  res.end("put operation not supported on /leaders/"+ req.params.leaderId);
})

.put((req,res,next)=>{
  res.write('Updating the leaders : ' + req.params.leaderId + '\n');
res.end('Will update the leader: ' + req.body.name +
      ' with details: ' + req.body.description);
})
.delete((req,res,next)=>{
  res.end("deleting  the leader "+ req.params.leaderId);
});

leaderRouter.route("/")

.all((req,res,next)=>{
res.statusCode = 200;
res.setHeader("Content-Type","text/plain");
  next();
})

.get((req,res,next)=>{
  res.end("will send all the leaders to you!");
})
.post((req,res,next)=>{
res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req,res,next)=>{
  res.statusCode=403;
  res.end("put operation not supported on /leaders");
})
.delete((re,req,next)=>{
  res.end("deleting all the leaders");
});
module.exports = leaderRouter;
