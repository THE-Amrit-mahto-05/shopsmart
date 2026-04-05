const auth = require("../middleware/authMiddleware");

router.post("/", auth, controller.createProduct);
router.put("/:id", auth, controller.updateProduct);
router.delete("/:id", auth, controller.deleteProduct);