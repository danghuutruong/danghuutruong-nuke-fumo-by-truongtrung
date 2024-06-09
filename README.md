### ENGLISH

## Introduction

### Description
This source code includes a Discord bot written in JavaScript, running through the `discord.js` library. This bot is designed to help you quickly create channels.

### Author
The bot is developed by **truongtrung**, a web developer experienced in using WordPress and offering website design services.

### What's new?
Nothing major, just added a new feature for creating stickers for you!

## Usage Instructions

### Requirements
- Node.js and Visual Studio Code (VSCode) installed on your computer.
- Download Node.js from https://nodejs.org/

### Installation and Configuration

1. **Initialize the Node.js project**:
    - Open the terminal in VSCode.
    - Navigate to the downloaded file.

2. **Install `discord.js`**:
    - Use the commands `npm init -y` and `npm install`, along with `npm install discord.js` and `npm install discord.js image-size` to install the library.

3. **Run the bot**:
    - Press the run button and select Node.js to start the bot.

### Editing Instructions

The `config.json` file will contain:
```json
{
    "token": "YOUR_BOT_TOKEN_HERE",
    "newServerName": "New Server Name"
}
```
- `token` is where you store your bot token.
- `newServerName` is where you set the server name, e.g., "NUKE FUMO BY TRUONGTRUNG".

### How to change channel names, messages, and roles

If you want to make specific changes, here's an example to guide you.
In the `main.js` file, look for the tags I have included:

```js
// Create new channels
// Send a message to the last created channel
// Create new roles
```
You just need to change them according to your preferences.

### Note:
- Add the bot to your Discord server for testing.

Good luck with your Discord bot project!

### TIẾNG VIỆT

## Giới thiệu

### Mô tả
Mã nguồn này bao gồm một bot Discord được viết bằng JavaScript và chạy thông qua thư viện `discord.js`. Bot này được để thực hiện trên giúp tạo kênh nhanh của bạn.

### Tác giả
Bot này được phát triển bởi **truongtrung**, một nhà phát triển web với kinh nghiệm sử dụng WordPres và cung cấp dịch vụ thiết kế website.

### có gì mới?
không có gì chỉ là thêm tính năng mới là tạo sticker cho bạn!

## Hướng dẫn sử dụng

### Yêu cầu
- Node.js và Visual Studio Code (VSCode) đã được cài đặt trên máy tính của bạn.
- tải Node.js https://nodejs.org/

### Cài đặt và Cấu hình

1. **Khởi tạo dự án Node.js**:
    - Mở terminal trong VSCode
    - và mở file đã tải xuống
      
2. **Cài đặt `discord.js`**:
    - Sử dụng lệnh `npm init-y` và `npm install` cùng với `npm install discord.js`  `npm install discord.js image-size` để cài đặt thư viện.
   

3. **Chạy bot**:
    - nhấn nút run và chọn Node.js để khởi động bot.
  
### Cách chỉnh sửa

file `config.json` sẽ có chứa là
`"token": "YOUR_BOT_TOKEN_HERE",`
`"newServerName": "New Server Name"`

token để lưu token của bạn
new Server Name là đổi tên máy chủ ví dụ "NUKE FUMO BY TRUONGTRUNG"

### cách thay đổi tên kênh, tin nhắn và vai trò

niếu bạn muốn đổi riêng mình và đây tôi ví dụ chỉ bạn.
trong file `main.js` bạn sẽ phải tìm mà tôi đã tag

// Tạo các kênh mới
// Gửi tin nhắn đến kênh cuối cùng đã tạo
// Tạo các vai trò mới
bạn chỉ cần đổi theo ý muốn là được

### Lưu ý:
- Thêm bot vào máy chủ Discord để kiểm tra.

Chúc bạn thành công với dự án bot Discord của mình.

Chúc bạn thành công với dự án bot Discord của mình.
