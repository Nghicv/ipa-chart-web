#!/bin/bash

# Script tự động deploy Firebase
# Sử dụng: ./deploy-firebase.sh

echo "🚀 Bắt đầu deploy Firebase..."
echo ""

# Kiểm tra xem Firebase CLI đã được cài đặt chưa
if ! command -v firebase &> /dev/null
then
    echo "❌ Firebase CLI chưa được cài đặt!"
    echo "Vui lòng cài đặt bằng: npm install -g firebase-tools"
    exit 1
fi

# Kiểm tra trạng thái đăng nhập Firebase
echo "🔍 Kiểm tra trạng thái đăng nhập Firebase..."
if ! firebase projects:list &> /dev/null
then
    echo "⚠️  Chưa đăng nhập Firebase. Đang thực hiện đăng nhập..."
    firebase login
    
    # Kiểm tra lại sau khi đăng nhập
    if ! firebase projects:list &> /dev/null
    then
        echo "❌ Đăng nhập Firebase thất bại!"
        exit 1
    fi
else
    echo "✅ Đã đăng nhập Firebase"
fi

echo ""
echo "📦 Đang build project..."

# Chạy build command
if npm run firebase:build; then
    echo "✅ Build thành công!"
else
    echo "❌ Build thất bại!"
    exit 1
fi

echo ""
echo "🚀 Đang deploy lên Firebase Hosting..."

# Deploy lên Firebase
if firebase deploy --only hosting:ipachart; then
    echo ""
    echo "🎉 Deploy thành công!"
    echo "🌐 Website đã được deploy lên: https://ipachart.web.app"
else
    echo "❌ Deploy thất bại!"
    exit 1
fi

echo ""
echo "✨ Hoàn tất!" 