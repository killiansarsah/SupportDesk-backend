import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import User from './models/User.js';

async function addNetlifyUser() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const user = new User({
      email: '1@gmail.com',
      name: 'netify',
      phone: '+1-555-0000',
      role: 'customer',
      password: '1@gmail.com',
      isActive: true
    });

    await user.save();
    console.log('✅ Created user: 1@gmail.com');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

addNetlifyUser();