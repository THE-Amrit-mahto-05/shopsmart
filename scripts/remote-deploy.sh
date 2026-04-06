#!/bin/bash
set -e

echo "=== Starting ShopSmart deployment ==="

# Clone repo if it doesn't exist
if [ ! -d "$HOME/shopsmart" ]; then
  git clone https://github.com/THE-Amrit-mahto-05/shopsmart $HOME/shopsmart
fi

cd $HOME/shopsmart
git fetch --all
git reset --hard origin/main

# Install Node.js if missing
if ! command -v node &> /dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

# Install PM2 if missing
if ! command -v pm2 &> /dev/null; then
  sudo npm install -g pm2
fi

# Install backend dependencies
cd $HOME/shopsmart/server
npm install --no-fund

# Start or restart the backend
pm2 restart shopsmart-backend 2>/dev/null || pm2 start src/app.js --name shopsmart-backend
pm2 save

echo "=== Deployment completed successfully! ==="
