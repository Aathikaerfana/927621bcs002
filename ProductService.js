import axios from 'axios';

const ProductService = {
  getTopProducts: () => {
    return axios.get('https://api.example.com/top-products');
  }
};

export default ProductService;
