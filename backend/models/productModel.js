import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String,unique: true },
    slug: { type: String, unique: true },
    image: { type: String,  },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    serviceProvider: {type: String, required: true},
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;