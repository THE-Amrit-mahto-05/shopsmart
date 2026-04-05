#!/bin/bash

# ShopSmart Environment Setup Script (Idempotent)
# Requirement #10: Scripts should produce the same result even if run multiple times.

echo "--- Initializing Environment ---"

# 1. Create necessary directories
mkdir -p client/dist
mkdir -p server/prisma

# 2. Check for node_modules and install if missing
if [ ! -d "node_modules" ]; then
    echo "Installing root dependencies..."
    npm install --no-fund
fi

if [ ! -d "server/node_modules" ]; then
    echo "Installing server dependencies..."
    cd server && npm install --no-fund && cd ..
fi

if [ ! -d "client/node_modules" ]; then
    echo "Installing client dependencies..."
    cd client && npm install --no-fund && cd ..
fi

# 3. Prisma setup (Idempotent generate)
echo "Generating Prisma client..."
cd server && npx prisma generate && cd ..

echo "--- Setup Complete ---"
