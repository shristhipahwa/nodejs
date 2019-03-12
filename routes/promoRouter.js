const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route("/:promoId")

.all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader("Content-Type","text/plain");
  next();
})
.get((req,res,next)=>{
  res.end("will send the promotion "+ req.params.promoId +" to you!");
})

.post((req,res,next)=>{
  res.statusCode=403;
  res.end("put operation not supported on /promo/"+ req.params.promoId);
})

.put((req,res,next)=>{
  res.write('Updating the promotion  : ' + req.params.promoId + '\n');
res.end('Will update the promotion: ' + req.body.name +
      ' with details: ' + req.body.description);
})
.delete((req,res,next)=>{
  res.end("deleting  the promotion "+ req.params.promoId);
});


promoRouter.route("/")
.all((req,res,next)=>{
res.statusCode = 200;
res.setHeader("Content-Type","text/plain");
  next();
})

.get((req,res,next)=>{
  res.end("will send all the promotions to you!");
})
.post((req,res,next)=>{
res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req,res,next)=>{
  res.statusCode=403;
  res.end("put operation not supported on /promo");
})
.delete((re,req,next)=>{
  res.end("deleting all the promotions");
});

module.exports = promoRouter;
