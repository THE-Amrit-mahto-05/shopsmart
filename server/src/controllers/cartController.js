const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getCart = async (req, res) => {
  const userId = req.user.userId;
  try {
    let cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: { product: true }
        }
      }
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId },
        include: { items: { include: { product: true } } }
      });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart", details: error.message });
  }
};

exports.addItem = async (req, res) => {
  const userId = req.user.userId;
  const { productId, quantity } = req.body;

  try {
    let cart = await prisma.cart.findUnique({ where: { userId } });
    if (!cart) {
      cart = await prisma.cart.create({ data: { userId } });
    }

    const existingItem = await prisma.cartItem.findUnique({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: parseInt(productId)
        }
      }
    });

    if (existingItem) {
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + (parseInt(quantity) || 1) }
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId: parseInt(productId),
          quantity: parseInt(quantity) || 1
        }
      });
    }

    const updatedCart = await prisma.cart.findUnique({
      where: { id: cart.id },
      include: { items: { include: { product: true } } }
    });

    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: "Failed to add item to cart", details: error.message });
  }
};

exports.updateItem = async (req, res) => {
  const userId = req.user.userId;
  const itemId = parseInt(req.params.id);
  const { quantity } = req.body;

  try {
    const item = await prisma.cartItem.findUnique({ where: { id: itemId } });
    if (!item) return res.status(404).json({ error: "Item not found" });

    await prisma.cartItem.update({
      where: { id: itemId },
      data: { quantity: parseInt(quantity) }
    });
    
    let cart = await prisma.cart.findUnique({
      where: { userId },
      include: { items: { include: { product: true } } }
    });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to update item", details: error.message });
  }
};

exports.removeItem = async (req, res) => {
  const userId = req.user.userId;
  const itemId = parseInt(req.params.id);

  try {
    await prisma.cartItem.delete({
      where: { id: itemId }
    });

    let cart = await prisma.cart.findUnique({
      where: { userId },
      include: { items: { include: { product: true } } }
    });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete item", details: error.message });
  }
};

exports.mergeCart = async (req, res) => {
  const userId = req.user.userId;
  const { items } = req.body;

  try {
    let cart = await prisma.cart.findUnique({ where: { userId } });
    if (!cart) {
      cart = await prisma.cart.create({ data: { userId } });
    }

    if (items && Array.isArray(items)) {
      for (let i of items) {
        const existingItem = await prisma.cartItem.findUnique({
          where: {
            cartId_productId: {
              cartId: cart.id,
              productId: parseInt(i.productId)
            }
          }
        });
        
        if (existingItem) {
          await prisma.cartItem.update({
            where: { id: existingItem.id },
            data: { quantity: existingItem.quantity + (parseInt(i.quantity) || 1) }
          });
        } else {
          try {
             await prisma.cartItem.create({
               data: {
                 cartId: cart.id,
                 productId: parseInt(i.productId),
                 quantity: parseInt(i.quantity) || 1
               }
             });
          } catch(e) {
          }
        }
      }
    }

    cart = await prisma.cart.findUnique({
      where: { userId },
      include: { items: { include: { product: true } } }
    });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to merge cart", details: error.message });
  }
};
