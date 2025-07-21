# Environment Variables Setup Guide

This guide will help you set up the environment variables for the e-commerce project.

## Overview

The project consists of three applications:
- **Backend** (Node.js/Express server)
- **Frontend** (React/Vite customer-facing app)
- **Admin** (React/Vite admin panel)

Each application requires its own environment configuration.

## Quick Setup

1. Copy the example files to create your environment files:
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   
   # Frontend
   cp frontend/.env.example frontend/.env
   
   # Admin
   cp admin/.env.example admin/.env
   ```

2. Edit each `.env` file with your actual credentials (see detailed setup below).

## Detailed Setup

### 1. Backend Environment Variables (`backend/.env`)

#### Required Variables:

**Database Configuration:**
- `MONGO_URI`: MongoDB connection string
  - Local: `mongodb://localhost:27017`
  - Atlas: `mongodb+srv://username:password@cluster.mongodb.net`

**Security:**
- `JWT_SECRET`: Strong random string for JWT token signing
  - Generate with: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`

**Admin Access:**
- `ADMIN_EMAIL`: Admin login email
- `ADMIN_PASSWORD`: Admin login password

**Image Upload (Cloudinary):**
- `CLOUDINARY_NAME`: Your Cloudinary cloud name
- `CLOUDINARY_API_KEY`: Your Cloudinary API key
- `CLOUDINARY_SECRET_KEY`: Your Cloudinary secret key
- Sign up at: https://cloudinary.com/

**Payment Gateways:**
- `STRIPE_SECRET_KEY`: Stripe secret key (starts with `sk_test_` for testing)
  - Get from: https://dashboard.stripe.com/apikeys
- `RAZORPAY_KEY_ID`: Razorpay key ID
- `RAZORPAY_KEY_SECRET`: Razorpay secret key
  - Get from: https://dashboard.razorpay.com/app/keys

#### Optional Variables:
- `PORT`: Server port (default: 4000)

### 2. Frontend Environment Variables (`frontend/.env`)

**API Configuration:**
- `VITE_BACKEND_URL`: Backend server URL (default: `http://localhost:4000`)

**Payment Integration:**
- `VITE_RAZORPAY_KEY_ID`: Razorpay public key ID (same as backend `RAZORPAY_KEY_ID`)

### 3. Admin Environment Variables (`admin/.env`)

**API Configuration:**
- `VITE_BACKEND_URL`: Backend server URL (default: `http://localhost:4000`)

## Service Setup Instructions

### MongoDB Setup

**Option 1: Local MongoDB**
1. Install MongoDB locally
2. Use: `MONGO_URI=mongodb://localhost:27017`

**Option 2: MongoDB Atlas (Recommended)**
1. Create account at https://www.mongodb.com/atlas
2. Create a cluster
3. Get connection string and replace `<username>` and `<password>`
4. Use: `MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net`

### Cloudinary Setup
1. Sign up at https://cloudinary.com/
2. Go to Dashboard
3. Copy Cloud Name, API Key, and API Secret

### Stripe Setup
1. Sign up at https://stripe.com/
2. Go to https://dashboard.stripe.com/apikeys
3. Copy the Secret key (starts with `sk_test_` for testing)

### Razorpay Setup
1. Sign up at https://razorpay.com/
2. Go to https://dashboard.razorpay.com/app/keys
3. Copy Key ID and Key Secret

## Security Notes

- Never commit `.env` files to version control
- Use strong, unique passwords and secrets
- For production, use environment-specific values
- Regularly rotate API keys and secrets

## Development vs Production

### Development
- Use test API keys for payment gateways
- Use local or development databases
- Backend URL: `http://localhost:4000`

### Production
- Use live API keys for payment gateways
- Use production databases
- Backend URL: Your deployed backend URL
- Update CORS origins in `backend/server.js`

## Troubleshooting

**Common Issues:**
1. **MongoDB connection fails**: Check connection string and network access
2. **Payment not working**: Verify API keys are correct and active
3. **Images not uploading**: Check Cloudinary credentials
4. **CORS errors**: Update allowed origins in backend server configuration

**Testing Environment Variables:**
```bash
# Backend
cd backend && npm run server

# Frontend
cd frontend && npm run dev

# Admin
cd admin && npm run dev
```

## Environment File Locations

```
project-root/
├── backend/.env
├── backend/.env.example
├── frontend/.env
├── frontend/.env.example
├── admin/.env
├── admin/.env.example
└── ENVIRONMENT_SETUP.md
```
