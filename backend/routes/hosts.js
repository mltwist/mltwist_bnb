var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET hosts */
router.get("/", async function (req, res, next) {
  const properties = await prisma.property.findMany();

  res.json(properties);
});

module.exports = router;
