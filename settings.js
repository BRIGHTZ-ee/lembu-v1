require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "KenzoDev"
global.namaowner = "KenzoDev"

//======== Setting Bot & Link ========//
global.namabot = "KenzoDev-MD" 
global.namabot2 = "KenzoDev-MD"
global.ownerbot = "6285736564735"
global.foother = "© Copyright KenzoDev"
global.idsaluran = "120363318521671268@newsletter"
global.linkgc = 'https://chat.whatsapp.com/DN388OMsXu8GZFp5Ygtpho'
global.linksaluran = "https://whatsapp.com/channel/0029VaeVC5EL7UVedWGwG13A"
global.linkyt = 'https://youtube.com/@rafatharcode444?si=XkrOGhkrQVK50FOa'
global.linktele = "https://t.me/dowestt"
global.packname = "Created By KenzoDev"
global.author = "KenzoDev"
global.footer2 = '© KenzoDev'
global.foter1 = 'Script type Case'
global.foter2 = '𝘚𝘤𝘳𝘪𝘱𝘵 𝘴𝘪𝘮𝘱𝘭𝘦 by KenzoDev-MD'

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = true
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://kanzzjmbt.fadhostoffc.xyz"
global.apikey = "ptla_htvTI4lVUc54x2ODi9J1jd0bjwf3frbLNYbwfjvo0Ha"
global.capikey = "ptlc_ul7FPue4GmbDxbwjOpNpO7oLNBUXyVN8a85CL9A5Az5"

//========== Setting Panell 2 ==========//
global.domain2 = "-"
global.apikey2 = "-"
global.capikey2 = "-"

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "088242101688"
global.gopay = false
global.ovo = false
global.qris = fs.readFileSync("./media/qris.jpg")
                             
//========== Api Domain 1 ===========//
global.zone1 = "f222e05ce3606754861dcee1652b0356"
global.apitoken1 = "FB2CauPWHhMN9YxSgwHtzU1f9uossOhy0WQ5SEdt"
global.tld1 = "raikyxzhost.biz.id"
//========== Api Domain 2 ==========//
global.zone2 = "3fb14ab83a9c9cf9185d8bc6115bdffb";
global.apitoken2 = "G4Sbq3qah_J_llfKIjEcyezILYzQiKAO8OvhFDh1";
global.tld2 = "raikyxzhost.xyz";
//========== Api Domain 3 ==========//
global.zone3 = "e63c738d677e2f8df374e5391851883b";
global.apitoken3 = "cm6dyRx6etcOYItccSPnmUGBrgurKXiGvx2eKPAP";
global.tld3 = "rajapanel.xyz";
//========== Api Domain 4 ==========//
global.zone4 = "090545398bfb26d095060c650fff960b";
global.apitoken4 = "8d8de23548a462d7298161544a00b198232d9";
global.tld4 = "aetherscode.xyz";
//========== Api Domain 5 ==========//
global.zone5 = "a53c4b6c85caeb4800daa6996a18231a";
global.apitoken5 = "8d8de23548a462d7298161544a00b198232d9";
global.tld5 = "aetherss.xyz";
//========== Api Domain 6 ==========//
global.zone6 = "606fe3ef833d6e0353e7f452358b37ca";
global.apitoken6 = "eda68f68d2811c02900f4b19ba08d53d";
global.tld6 = "aetherz.xyz";

//========= Setting Message =========//
global.msg = {
"error": "Error terjadi kesalahan",
"done": "Done Bang ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})