const express = require("express");
const router = express.Router();
const members = require("../../Member");
const uuid = require("uuid");

router.get("/", (req, res) => {
  res.json(members);
});

router.get("/:id", (req, res) => {
  // res.send(req.params.id)
  // res.json(members.filter(member=>member.id === parseInt(req.params.id)))
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Add new member
router.put("/", (req, res) => {
  // res.send(req.body)
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    age: req.body.age,
    status: "active",
  };
  if (!newMember.name || !newMember.age) {
    return res.status(400).json({ msg: "Enter your name or age" });
  }
  members.push(newMember);

  res.send(members);
});

// update member
router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const updMember = req.body;
    members.map((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.age = updMember.age ? updMember.age : member.age;
      }

      res.json({ msg: "Member update", member });
    });
  } else {
    res.status(400).json({ msg: `There id no such id of ${req.params.id}` });
  }
});

// Delete member
router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: "member updated",
      members: members.filter(
        (member) => member.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
