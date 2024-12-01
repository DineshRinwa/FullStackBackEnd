const express = require("express");
const Product = require("../Model/productModel");
const auth = require("../Middlewear/auth");
const User = require("../Model/registerstionModel");
const router = express.Router();

// Handle Error Function
const handleError = (res, error, status = 400) => {
  return res.status(status).json({ error: error.message || error });
};

// Create Product
router.post("/products", auth, async (req, res) => {
  try {
    const userId = req.user.userId;
    const role = req.user.role;
    const { name, price, quantity, description } = req.body;

    // Admin
    if (role === "admin") {
      const admin = await User.findById(userId);
      if (!admin) return handleError(res, "User Not Found", 404);

      const product = new Product({
        name,
        price,
        quantity,
        description,
        userId,
      });

      await product.save();
      return res
        .status(200)
        .json({ message: "Product added Sucessfully", product });
    }

    // Saler
    if (role === "seller") {
      const saler = await User.findById(userId);
      if (!saler) return handleError(res, "User Not Found", 404);

      const product = new Product({
        name,
        price,
        quantity,
        description,
        userId,
      });

      await product.save();
      return res
        .status(200)
        .json({ message: "Product added Sucessfully", product });
    }

    // Unauthorized user
    return handleError(res, "You are Unauthorized!", 403); // Changed status to 403 (Forbidden)
  } catch (error) {
    handleError(res, error);
  }
});

// Get All Products
router.get("/products", async (req, res) => {
  try {
    const product = await Product.find();
    if (!product) return handleError(res, "Products Not Found");

    return res.status(200).json({ message: "All Product Get", product });
  } catch (error) {
    handleError(res, error, 404);
  }
});

// Update Products
router.put("/products/:id", auth, async (req, res) => {
  const userId = req.user.userId;
  const role = req.user.role;
  const productId = req.params.id;
  try {
    // Admin
    if (role === "admin") {
      const user = await User.findById(userId);
      if (!user) return handleError(res, "User Not Found", 404);

      // Update Product
      const product = await Product.findByIdAndUpdate(productId, req.body, {
        new: true,
        runValidators: true,
      });

      if (!product) return handleError(res, "Product Not Found", 404);
      return res
        .status(200)
        .json({ message: "Product Update Successfully" }, product);
    }

    // Seller
    if (role === "seller") {
      const user = await User.findById(userId);
      if (!user) return handleError(res, "User Not Found", 404);

      const product = await Product.findById(productId);
      if (!product) return handleError(res, "Product Not Found", 404);

      if (product.userId.toString() !== userId) {
        return handleError(res, "You are not authorized to update this product",403);
      }

      const updateProduct = await Product.findByIdAndUpdate(product, req.body, {
        new: true,
        runValidators: true,
      });
      return res.status(201).json({ message: "Product updated", product: updateProduct });
    }

      // Unauthorized user
      return handleError(res, "You are Unauthorized!", 403); // Changed status to 403 (Forbidden)
  } catch (error) {
    handleError(res, error);
  }
});


// Delete Products
router.delete('/products/:id', auth, async(req, res) => {
    const userId = req.user.userId;
    const role = req.user.role;
    const productId = req.params.id;
    try {
        if(role === "admin"){
            const product = await Product.findByIdAndDelete(productId);
            if(!product) return handleError(res, "Product Not Found", 404);

            res.status(200).json({message: "Product Deleted Successfully"});
        }

        if(role === "seller"){
            const product = await Product.findById(productId);
            if(!product) return handleError(res, "Product Not Found", 404);

            // Check if the seller is deleting their own product
            if(product.userId.toString() !== userId){
                return handleError(res, "You are not authorized to delete this product",403);
            }

            await Product.findByIdAndDelete(productId);
            return res.status(200).json({message: "Product Deleted Successfully"});
        }

        // If the user is neither admin nor seller, return Unauthorized
        return handleError(res, "Unauthorized", 403);
    } catch (error) {
        handleError(res, error);
    }
})

module.exports = router;