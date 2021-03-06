var express = require("express");
var router = express.Router();
const { pageLinkService } = require("../services");

const {
  getUserLinks,
  addPageLink,
  updatePageLink,
  deletePageLink,
} = pageLinkService;



router.get("/users/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const links = await getUserLinks(id);
    res.status(200).json(links);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newPageLink = await addPageLink(req.body);
    res.status(201).json(newPageLink);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await deletePageLink(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {

  try {
    const updatedPageLink = await updatePageLink(req.params.id, req.body);
    res.status(201).json(updatedPageLink);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
