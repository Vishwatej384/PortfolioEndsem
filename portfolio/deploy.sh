#!/bin/bash

# Portfolio Deployment Script
# This script helps you deploy your portfolio to Render

echo "🚀 Portfolio Deployment Helper"
echo "=============================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found"
    echo "Initialize git first: git init"
    exit 1
fi

# Check git status
echo "📋 Current Git Status:"
git status --short
echo ""

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes"
    echo "Do you want to commit them? (y/n)"
    read -r response
    if [ "$response" = "y" ]; then
        git add .
        git commit -m "Update portfolio"
        echo "✅ Changes committed"
    fi
fi

echo ""
echo "📦 Build Status:"
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "🔗 Ready for Deployment!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Go to https://render.com/dashboard"
echo "3. Click 'New +' → 'Web Service'"
echo "4. Connect your portfolio repository"
echo "5. Configure build command: npm install && npm run build"
echo "6. Configure start command: serve -s build"
echo ""
echo "For detailed instructions, see DEPLOYMENT_GUIDE.md"
