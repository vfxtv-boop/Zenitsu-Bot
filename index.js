require("./config.js")
const { default: DeepakConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const CFonts = require('cfonts');
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const PhoneNumber = require('242041029122')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const figlet = require('figlet')
const { color } = require('./lib/color')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

async function startDeepak() {
console.log(color(figlet.textSync('ZenitsuBot', {
		font: 'Pagga',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
	    width: 80,
		whitespaceBreak: true
        }), 'yellow'))

console.log(color('\nHello, I am Deepak, the main Developer of this bot.\n\nThanks for using: Zenitsu Bot','aqua'))
console.log(color('\nYou can follow me on Instagram: deepak_gupta_2006','aqua'))

    let { version, isLatest } = await fetchLatestBaileysVersion()
    const Deepak = DeepakConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Zenitsu by: Deepak','Safari','1.0.0'],
        auth: state,
        version
    })
    
store.bind(Deepak.ev)

    
    Deepak.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await Deepak.sendContact(callerId, global.owner)
    Deepak.sendMessage(callerId, { text: `Baka! You will be blocked automatically for calling me!`}, { quoted : pa7rick })
    await sleep(8000)
    await Deepak.updateBlockStatus(callerId, "block")
    }
    })

Deepak.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!Deepak.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(Deepak, mek, store)
require("./Zenitsu")(Deepak, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

 /* 
Deepak.ev.on('groups.update', async pea => {
    
       try {     
       ppgc = await Deepak.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://i.ibb.co/vXnjzpr/cheemspic.jpg'
       }
       let wm_fatih = { url : ppgc }
       if (pea[0].announce == true) {
       Deepak.send5ButImg(pea[0].id, `Grop has been *Closed!* Only *Admins* can send Messages!`, `${BotName}`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       Deepak.send5ButImg(pea[0].id, `Grop has been *Opened!* Now *Everyone* can send Messages!`, `${BotName}`, wm_fatih, [])
       } else {
       Deepak.send5ButImg(pea[0].id, `Group Subject has been updated to *${pea[0].subject}*`, `${BotName}`, wm_fatih, [])
     }
    })
*/

    Deepak.ev.on('groups.update', async pea => {
        //console.log(pea)
     // Get Profile Picture Group
        try {
        ppgc = await Deepak.profilePictureUrl(pea[0].id, 'image')
        } catch {
        ppgc = 'https://i.ibb.co/vXnjzpr/cheemspic.jpg'
        }
        let wm_fatih = { url : ppgc }
        if (pea[0].announce == true) {
        //Deepak.send5ButImg(pea[0].id, `Grop has been *Closed!* Only *Admins* can send Messages!`, `Deepak Bot`, wm_fatih, [])

        Deepak.sendMessage(m.chat, { image: wm_fatih, caption: 'Grop has been *Closed!* Only *Admins* can send Messages!'})
        } else if(pea[0].announce == false) {
       // Deepak.send5ButImg(pea[0].id, `Grop has been *Opened!* Now *Everyone* can send Messages!`, `Deepak Bot`, wm_fatih, [])
       Deepak.sendMessage(m.chat, { image: wm_fatih, caption: 'Grop has been *Opened!* Now *Everyone* can send Messages!'})
        } else if (pea[0].restrict == true) {
        //Deepak.send5ButImg(pea[0].id, `Group Info modification has been *Restricted*, Now only *Admins* can edit Group Info !`, `Deepak Bot`, wm_fatih, [])
        Deepak.sendMessage(m.chat, { image: wm_fatih, caption: 'Group Info modification has been *Restricted*, Now only *Admins* can edit Group Info !'})
        } else if (pea[0].restrict == false) {
        //Deepak.send5ButImg(pea[0].id, `Group Info modification has been *Un-Restricted*, Now only *Everyone* can edit Group Info !`, `Deepak Bot`, wm_fatih, [])
        Deepak.sendMessage(m.chat, { image: wm_fatih, caption: 'Group Info modification has been *Un-Restricted*, Now only *Everyone* can edit Group Info !'})
        } else {
        //Deepak.send5ButImg(pea[0].id, `Group Subject has been uhanged To:\n\n*${pea[0].subject}*`, `Deepak Bot`, wm_fatih, [])
        Deepaktextddfq =`Group Subject has been updated To:\n\n*${pea[0].subject}*`
        Deepak.sendMessage(pea[0].id, { image: wm_fatih, caption: Deepaktextddfq})
      }
     })



function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}



Deepak.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
       
        try {
            let metadata = await Deepak.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
  
                try {
                    ppuser = await Deepak.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i.ibb.co/vXnjzpr/cheemspic.jpg'
                }

                try {
                    ppgroup = await Deepak.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i.ibb.co/vXnjzpr/cheemspic.jpg'
                }

                let targetname = await Deepak.getName(num)
                grpmembernum = metadata.participants.length

            
                if (anu.action == 'add') {
                let WAuserName = num
                Deepaktext = `
Hello @${WAuserName.split("@")[0]},

I am *ZenitsuBot*, Welcome to ${metadata.subject}.

*Group Description:*
${metadata.desc}
`

    let buttonMessage = {
    image: await getBuffer(ppgroup),
    mentions: [num],
    caption: Deepaktext,
    footer: `${global.BotName}`,
    headerType: 4,
    }
Deepak.sendMessage(anu.id, buttonMessage)
                } else if (anu.action == 'remove') {
                	let WAuserName = num
                    Deepaktext = `
Okay Bye 👋, @${WAuserName.split("@")[0]},

I hope you will come back soon, but You will be missed!
`

    let buttonMessage = {
	image:await getBuffer(ppuser),
    mentions: [num],
    caption: Deepaktext,
    footer: `${global.BotName}`,
    headerType: 4,
    
    }
    Deepak.sendMessage(anu.id, buttonMessage)}}
            } catch (err) {
                console.log(err)
            }
    })
    


    Deepak.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    Deepak.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = Deepak.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    Deepak.getName = (jid, withoutContact  = false) => {
        id = Deepak.decodeJid(jid)
        withoutContact = Deepak.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = Deepak.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === Deepak.decodeJid(Deepak.user.id) ?
            Deepak.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    
    Deepak.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await Deepak.getName(i + '@s.whatsapp.net'),
		vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Deepak.getName(i + '@s.whatsapp.net')}\nFN:${global.OwnerName}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.websitex}\nitem2.X-ABLabel:GitHub\nitem3.URL:${global.websitex}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	Deepak.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
    Deepak.setStatus = (status) => {
        Deepak.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    Deepak.public = true

    Deepak.serializeM = (m) => smsg(Deepak, m, store)

    Deepak.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = lastDisconnect.error ? lastDisconnect?.error?.output.statusCode : 0;
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); process.exit(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startDeepak(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startDeepak(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); process.exit(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete Session and Scan Again.`); process.exit(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startDeepak(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startDeepak(); }
            else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`) }
        }
        //console.log('Connected...', update)
    })

    Deepak.ev.on('creds.update', saveState)


   
    /** Send Button 5 Images
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    Deepak.send5ButImg = async (jid , text = '' , footer = '', img, but = [], thumb, options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail:thumb }, { upload: Deepak.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            Deepak.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    Deepak.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        Deepak.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Deepak.sendText = (jid, text, quoted = '', options) => Deepak.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Deepak.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Deepak.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Deepak.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Deepak.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    Deepak.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Deepak.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Deepak.sendTextWithMentions = async (jid, text, quoted, options = {}) => Deepak.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Deepak.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await Deepak.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Deepak.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await Deepak.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	Deepak.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await Deepak.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await Deepak.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    Deepak.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    Deepak.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    Deepak.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await Deepak.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }


        Deepak.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        Deepak.sendMessage(jid, listMes, { quoted: quoted })
        }
        
    Deepak.cMod = (jid, copy, text = '', sender = Deepak.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === Deepak.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    Deepak.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
 
        Deepak.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: Deepak.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            Deepak.relayMessage(jid, template.message, { messageId: template.key.id })
    }

        Deepak.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: Deepak.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            Deepak.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    //send5butmsg
            Deepak.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        Deepak.sendMessage(jid, templateMessage)
        }
        
    Deepak.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
        let types = await Deepak.getFile(PATH, true)
        let { filename, size, ext, mime, data } = types
        let type = '', mimetype = mime, pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let { writeExif } = require('./lib/sticker.js')
            let media = { mimetype: mime, data }
            pathFile = await writeExif(media, { packname: global.packname, author: global.packname, categories: options.categories ? options.categories : [] })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        }
        else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await Deepak.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
        return fs.promises.unlink(pathFile)
    }
    Deepak.parseMention = async(text) => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }

    return Deepak
}

startDeepak()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`${__filename} Updated`))
	delete require.cache[file]
	require(file)
})
