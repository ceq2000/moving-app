const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./user");
const itemRoutes = require("./item");

// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);

// Item routes
router.use("/items", itemRoutes);


module.exports = router;
