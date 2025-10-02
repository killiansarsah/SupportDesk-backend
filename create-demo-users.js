import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import User from './models/User.js';

const DEMO_USERS = [
  {
    email: 'admin@company.com',
    name: 'System Administrator',
    phone: '+1-555-0101',
    role: 'administrator',
    password: 'password123',
    isActive: true
  },
  {
    email: 'agent@company.com',
    name: 'Support Agent',
    phone: '+1-555-0102',
    role: 'support-agent',
    password: 'password123',
    isActive: true
  },
  {
    email: 'customer@email.com',
    name: 'John Customer',
    phone: '+1-555-0103',
    role: 'customer',
    password: 'password123',
    isActive: true
  }
];

async function createDemoUsers() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing users
    await User.deleteMany({});
    console.log('🗑️ Cleared existing users');

    // Create demo users
    for (const userData of DEMO_USERS) {
      const user = new User(userData);
      await user.save();
      console.log(`✅ Created user: ${user.email} (${user.role})`);
    }

    console.log('🎉 Demo users created successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

createDemoUsers();