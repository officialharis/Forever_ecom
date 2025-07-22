# Forever - E-Commerce Platform

A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features a customer-facing storefront, admin dashboard, and integrated payment processing.

## 🚀 Features

### Customer Features
- Browse and search products
- User authentication (register/login)
- Shopping cart functionality
- Secure checkout with multiple payment options
- Order tracking and history
- Responsive design for all devices

### Admin Features
- Product management (add/edit/delete)
- Order management and tracking
- User management
- Dashboard analytics
- Image upload and management

### Technical Features
- JWT-based authentication
- Payment integration (Stripe & Razorpay)
- Image upload with Cloudinary
- RESTful API design
- Responsive UI with Tailwind CSS

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing

**Payment Gateways:**
- Stripe
- Razorpay

**Cloud Services:**
- Cloudinary (Image storage)
- MongoDB Atlas (Database)
- Vercel (Deployment)

## 📁 Project Structure

```
├── backend/          # Express.js API server
├── frontend/         # React customer app
├── admin/           # React admin dashboard
└── ENVIRONMENT_SETUP.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Cloudinary account
- Stripe account (for payments)
- Razorpay account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/officialharis/forever_ecom.git
   cd forever-ecommerce
   ```

2. **Set up environment variables**
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   
   # Frontend
   cp frontend/.env.example frontend/.env
   
   # Admin
   cp admin/.env.example admin/.env
   ```
   
   Edit each `.env` file with your credentials (see [Environment Setup Guide](ENVIRONMENT_SETUP.md))

3. **Install dependencies**
   ```bash
   # Backend
   cd backend && npm install
   
   # Frontend
   cd ../frontend && npm install
   
   # Admin
   cd ../admin && npm install
   ```

4. **Start the development servers**
   ```bash
   # Backend (Terminal 1)
   cd backend && npm run server
   
   # Frontend (Terminal 2)
   cd frontend && npm run dev
   
   # Admin (Terminal 3)
   cd admin && npm run dev
   ```

5. **Access the applications**
   - Frontend: http://localhost:5173
   - Admin: http://localhost:5174
   - Backend API: http://localhost:4000

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### Frontend (.env)
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Admin (.env)
```env
VITE_BACKEND_URL=http://localhost:4000
```

## 📚 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/admin` - Admin login

### Products
- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add product (Admin)
- `POST /api/product/remove` - Remove product (Admin)
- `GET /api/product/single` - Get single product

### Cart
- `POST /api/cart/get` - Get user cart
- `POST /api/cart/add` - Add to cart
- `POST /api/cart/update` - Update cart

### Orders
- `POST /api/order/place` - Place order
- `POST /api/order/stripe` - Stripe payment
- `POST /api/order/razorpay` - Razorpay payment
- `GET /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)

## 🚀 Deployment

### Backend (Vercel)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Frontend & Admin (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables

See detailed deployment instructions in [Environment Setup Guide](ENVIRONMENT_SETUP.md).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/forever-ecommerce](https://github.com/yourusername/forever-ecommerce)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
- [Razorpay](https://razorpay.com/)
- [Cloudinary](https://cloudinary.com/)
