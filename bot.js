const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$"
var adminprefix = '$'


//bc

client.on("message", message => {
    if (message.content.startsWith("$obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "$";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });

client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("$avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('$adminbc')){
if(!message.author.id === '476185102922285066') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

  client.on('message', msg => {
    if(msg.content === '$help')
    msg.reply('Check Your DM :white_check_mark:')
  });
  
  
  client.on("message", message => {
    if (message.content === "$help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب

       $obc | لأرسال برود كاست للكل

       $bc  |  لأرسال برود كاست للأونلاين

       $adminbc | برودكاست عادي

       ** `)
   message.author.sendEmbed(embed)
   
   }
   });

const developers = ["515474180603641866","445915062809526283"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.on('message', message => {
  if (message.content === 'clock') {
    let Canvas = require('canvas');
    let canvas = new Canvas(400, 400),
    rebel = canvas.getContext('2d');
 
    var radius = canvas.height / 2;
    rebel.translate(radius, radius);
    radius = radius * 0.90;
   
    let Image = Canvas.Image;
 
    imgImport(rebel);
   
    drawClock();
   
 
    let fileC  = new Discord.Attachment(canvas.toBuffer(), 'clock.png');
    message.channel.send({file : fileC});
   
    function imgImport(rebel){
        var img = new Image();
        img.onload = function(){
            rebel.drawImage(img,-200,-200);
        };
        img.src = './موقع الصورة لو توفر';
    }
   
    function drawClock() {
        drawFace(rebel, radius);
        drawNumbers(rebel, radius);
        drawTime(rebel, radius);
    }
   
    function drawFace(rebel, radius) {
        var grad;
        rebel.beginPath();
        rebel.arc(0, 0, radius, 0, 2*Math.PI);
        //ctx.fillStyle = 'white';
        //ctx.fill();
        grad = rebel.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
        grad.addColorStop(0, '#42d9f4');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, '#42d9f4');
        rebel.strokeStyle = grad;
        rebel.lineWidth = radius*0.1;
        rebel.stroke();
        rebel.beginPath();
        rebel.arc(0, 0, radius*0.1, 0, 2*Math.PI);
        rebel.fillStyle = '#42d9f4';
        rebel.fill();
    }
    function drawNumbers(rebel, radius) {
        var ang;
        var num;
        rebel.font = radius*0.15 + "px arial";
        rebel.textBaseline="middle";
        rebel.textAlign="center";
        for(num = 1; num < 13; num++){
            ang = num * Math.PI / 6;
            rebel.rotate(ang);
            rebel.translate(0, -radius*0.85);
            rebel.rotate(-ang);
            rebel.fillText(num.toString(), 0, 0);
            rebel.rotate(ang);
            rebel.translate(0, radius*0.85);
            rebel.rotate(-ang);
        }
    }
   
    function drawTime(rebel, radius){
        var now = new Date();
        var hour = now.getHours() + 2;
        var minute = now.getMinutes() - 8;
        var second = now.getSeconds();
        //hour
        hour=hour%12;
        hour=(hour*Math.PI/6)+
        (minute*Math.PI/(6*60))+
        (second*Math.PI/(360*60));
        drawHand(rebel, hour, radius*0.5, radius*0.07);
        //minute
        minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
        drawHand(rebel, minute, radius*0.8, radius*0.07);
        // second
        second=(second*Math.PI/30);
        drawHand(rebel, second, radius*0.9, radius*0.02);
    }
   
    function drawHand(rebel, pos, length, width) {
        rebel.beginPath();
        rebel.lineWidth = width;
        rebel.lineCap = "round";
        rebel.moveTo(0,0);
        rebel.rotate(pos);
        rebel.lineTo(0, -length);
        rebel.stroke();
        rebel.rotate(-pos);
    }
 
  };

client.login(process.env.TOKEN);
