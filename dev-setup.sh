#!/bin/bash

if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js is not installed."
    exit 1
fi

echo "[INFO] Node version: $(node -v)"
echo "[INFO] NPM version: $(npm -v)"

if [ ! -d "client" ]; then
    echo "[ERROR] Frontend (client) folder not found."
    exit 1
fi

if [ ! -d "server" ]; then
    echo "[ERROR] Backend (server) folder not found."
    exit 1
fi

echo "[INFO] Starting Frontend..."
cd client || exit
npm install
npm run dev &
cd ..

echo "[INFO] Starting Backend..."
cd server || exit
npm install
npm run dev

