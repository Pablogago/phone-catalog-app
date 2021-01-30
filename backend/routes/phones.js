const express = require("express")
const router = express.Router()
const Phones = require("../models/phone.js")

router
	.route("/")
	.get((req, res) => {
		Phones.find({}).then(data => {
			res.json(data);
		})
	})

router
	.route("/:id")
	.get(async (req, res) => {
		const id = req.params.id;
		try {
			const data = await Phones.findById(id)
			res.json(data);
		} catch(err) {
			res.status(404).json({error: "Phone not found"});
		}
	})
	.delete(async (req, res) => {
		const id = req.params.id;
		try {
			const phone = await Phones.findById(id)
			phone.remove();
			res.send();
		} catch(err) {
			res.status(400).json({error: "Delete failed"});
		}
	})
	.patch(async (req, res) => {
		const {id} = req.params;
		const {body} = req;
		const doc = {};
		if (body.name) doc.name = req.body.name;
		if (body.manufacturer) doc.manufacturer = req.body.manufacturer;
		if (body.description) doc.description = req.body.description;
		if (body.color) doc.color = req.body.color;
		if (body.price) doc.price = req.body.price;
		if (body.screen) doc.screen = req.body.screen;
		if (body.processor) doc.processor = req.body.processor;
		if (body.ram) doc.ram = req.body.ram;
		try {
			const data = await Phones.updateOne({_id: id}, doc);
			res.json(data);
		} catch (err) {
			res.status(400).json({error: "Update failed"});
		}
	})


module.exports = router;
