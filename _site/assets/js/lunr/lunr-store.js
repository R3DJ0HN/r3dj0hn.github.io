var store = [{
        "title": "Mischief - Hack The Box",
        "excerpt":"This blog post is a writeup of the Mischief machine from Hack the Box using the unintended LXC container privesc method. Linux / 10.10.10.92 Summary SNMP is enabled and the default public SNMP community string is configured Using SNMP, we find that a Python SimpleHTTPServer is running with basic authentication,...","categories": ["hackthebox","infosec"],
        "tags": ["hackthebox","linux","lxc","containers","unintended"],
        "url": "http://192.168.1.12:4000/htb-writeup-mischief/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-mischief/mischief_logo.png"},{
        "title": "Oz - Hack The Box",
        "excerpt":"This blog post is a writeup of the Oz machine from Hack the Box. Linux / 10.10.10.96 Summary There’s an SQL injection vulnerability on the port 80 application which allow us to dump the database We can crack the user credentials and log into the ticketing application An SSTI vulnerability...","categories": ["hackthebox","infosec"],
        "tags": ["hackthebox","linux","sqli","ssti","containers"],
        "url": "http://192.168.1.12:4000/htb-writeup-oz/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-oz/oz_logo.png"},{
        "title": "Secnotes - Hack The Box",
        "excerpt":"This blog post is a writeup of the Hack the Box SecNotes machine from 0xdf. Windows / 10.10.10.97 Summary The box runs a PHP application on an IIS server. There is a 2nd order SQL injection in the registration page which allows us to dump all the notes from the...","categories": ["hackthebox","infosec"],
        "tags": ["hackthebox","windows","sqli","wsl","csrf"],
        "url": "http://192.168.1.12:4000/htb-writeup-secnotes/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-secnotes/secnotes_logo.png"},{
        "title": "Ypuffy - Hack The Box",
        "excerpt":"Ypuffy is being retired this weekend, so it’s time to do another writeup. I think this is the only OpenBSD machine so far on Hack the Box. The initial user part was not really difficult and involved doing some basic LDAP edumeration to find an NTLM hash that can be...","categories": ["hackthebox","infosec"],
        "tags": ["openbsd","ssh","pass-the-hash","ldap","ca"],
        "url": "http://192.168.1.12:4000/htb-writeup-ypuffy/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-ypuffy/ypuffy_logo.png"},{
        "title": "Giddy - Hack The Box",
        "excerpt":"Giddy from Hack the Box is being retired this week so I’ll go over the steps to pwn this box. For this one we need to find an easy SQL injection point in the web application then leverage this to trigger an SMB connection back to our machine and use...","categories": ["hackthebox","infosec"],
        "tags": ["sqli","powershell"],
        "url": "http://192.168.1.12:4000/htb-writeup-giddy/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-giddy/giddy_logo.png"},{
        "title": "Zipper - Hack The Box",
        "excerpt":"Zipper was a cool box that mixed some enumeration, API usage and a priv esc using a SUID binary. I had some problems at first getting into Zabbix when I found a possible username but didn’t think of trying the same name as the password. The priv esc was pretty...","categories": ["hackthebox","infosec"],
        "tags": ["linux","zabbix","api","suid"],
        "url": "http://192.168.1.12:4000/htb-writeup-zipper/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-zipper/zipper_logo.png"},{
        "title": "Access - Hack The Box",
        "excerpt":"Access was a quick and fun box where we had to look for credentials in an Access database then use the credentials to decrypt a PST file. Kali Linux has some tools that let us read those two file types without having to spin up a Windows VM. The box...","categories": ["hackthebox","infosec"],
        "tags": ["telnet","windows","access","outlook","credential manager"],
        "url": "http://192.168.1.12:4000/htb-writeup-access/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-access/access_logo.png"},{
        "title": "Ethereal - Hack The Box",
        "excerpt":"Ethereal was a really difficult box from MinatoTW and egre55 that I solved using an unintended priv esc method with Rotten Potato. The box was patched soon after the release to block that priv esc route. The box had some trivial command injection in the Test Connection page but since...","categories": ["hackthebox","infosec"],
        "tags": ["ms-dos","dns exfiltration","command injection","rotten potato","unintended","efs"],
        "url": "http://192.168.1.12:4000/htb-writeup-ethereal/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-ethereal/ethereal_logo.png"},{
        "title": "Carrier - Hack The Box",
        "excerpt":"I had the idea for creating Carrier after competing at the NorthSec CTF last year where there was a networking track that required the players to gain access to various routers in the network. I thought of re-using the same concept but add a MITM twist to it with BGP...","categories": ["hackthebox","infosec"],
        "tags": ["networking","lxc","containers","bgp","command injection","php","snmp","mitm"],
        "url": "http://192.168.1.12:4000/htb-writeup-carrier/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-carrier/carrier_logo.png"},{
        "title": "Frolic - Hack The Box",
        "excerpt":"Frolic had a pretty straightforward user access part where after minimal enumeration we could find the password for the PlaySMS application obfuscated a couple of times with some esoteric languages and other things. The PlaySMS application which we could access with the password was directly exploitable from Metasploit without any...","categories": ["hackthebox","infosec"],
        "tags": ["metasploit","esoteric language","ctf","rop","buffer overflow","binary exploitation"],
        "url": "http://192.168.1.12:4000/htb-writeup-frolic/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-frolic/frolic_logo.png"},{
        "title": "Curling - Hack The Box",
        "excerpt":"Quick summary The username for the Joomla site is Floris as indicated on the main page in one of the post The password is a variant of a word on the main page: Curling2018! On the Joomla admin page we can inject a meterpreter reverse shell in the index.php file...","categories": ["hackthebox","infosec"],
        "tags": ["joomla","ctf","cron","php","easy"],
        "url": "http://192.168.1.12:4000/htb-writeup-curling/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-curling/curling_logo.png"},{
        "title": "Vault - Hack The Box",
        "excerpt":"Quick summary An upload page allows us to get RCE by uploading a PHP file with the php5 file extension We can find the SSH credentials in a plaintext file in Dave’s directory After getting a foothold on the box, we find another network segment with another machine on it...","categories": ["hackthebox","infosec"],
        "tags": ["linux","php","openvpn","firewall","pivoting","gpg"],
        "url": "http://192.168.1.12:4000/htb-writeup-vault/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-vault/vault_logo.png"},{
        "title": "Redcross - Hack The Box",
        "excerpt":"Redcross has a bit of everything: Cross-Site Scripting, a little bit of SQL injection, reviewing C source code to find a command injection vulnerability, light exploit modification and enumeration. Quick summary XSS on contact form to get admin cookie SQLi to get user creds (rabbit hole, credentials are not useful)...","categories": ["hackthebox","infosec"],
        "tags": ["linux","xss","sqli","command injection","pgsql","cve","nss"],
        "url": "http://192.168.1.12:4000/htb-writeup-redcross/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-redcross/redcross_logo.png"},{
        "title": "Teacher - Hack The Box",
        "excerpt":"Teacher uses the Moodle Open Source Learning platform and contains a vulnerability in the math formula that gives us RCE. The credentials for the Moodle application are found in a .png file that contains text instead of an actual image. After getting a shell with the math formula, we find...","categories": ["hackthebox","infosec"],
        "tags": ["moodle","mysql","enumeration","ctf","tar","cronjob"],
        "url": "http://192.168.1.12:4000/htb-writeup-teacher/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-teacher/teacher_logo.png"},{
        "title": "Irked - Hack The Box",
        "excerpt":"Irked is an easy box running a backdoored UnrealIRC installation. I used a Metasploit module to get a shell then ran steghide to obtain the SSH credentials for the low privileged user then got root by exploiting a vulnerable SUID binary. Tools/Exploits/CVEs used steghide metasploit Summary UnrealIRCd MSF exploit for...","categories": ["hackthebox","infosec"],
        "tags": ["ctf","stego","cve","metasploit","suid"],
        "url": "http://192.168.1.12:4000/htb-writeup-irked/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-irked/irked_logo.png"},{
        "title": "Bighead - Hack The Box",
        "excerpt":"Bighead was an extremely difficult box by 3mrgnc3 that starts with website enumeration to find two sub-domains and determine there is a custom webserver software running behind an Nginx proxy. We then need to exploit a buffer overflow in the HEAD requests by creating a custom exploit. After getting a...","categories": ["hackthebox","infosec"],
        "tags": ["exploit development","egghunter","asm","nginx","php","keepass","lfi","ntfs ads","enumeration","insane","windows"],
        "url": "http://192.168.1.12:4000/htb-writeup-bighead/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-bighead/bighead_logo.png"},{
        "title": "Lightweight - Hack The Box",
        "excerpt":"Lightweight was a fun box that uses Linux capabilities set on tcpdump so we can capture packets on the loopback interface and find credentials in an LDAP session. We then find more credentials in the source code of the web application and finally priv esc to root by abusing a...","categories": ["hackthebox","infosec"],
        "tags": ["john","ldap","caps","tcpdump","password cracking"],
        "url": "http://192.168.1.12:4000/htb-writeup-lightweight/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-lightweight/lightweight_logo.png"},{
        "title": "Craft - Hack The Box",
        "excerpt":"Craft was a fun Silicon Valley themed box where we have to exploit a vulnerable REST API eval function call to get RCE. After getting a shell on the app container, we escalate to a user shell on the host OS by finding credentials and SSH private keys. To gain...","categories": ["hackthebox","infosec"],
        "tags": ["gogs","api","git","vault","eval","python"],
        "url": "http://192.168.1.12:4000/htb-writeup-craft/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-craft/craft_logo.png"},{
        "title": "Bitlab - Hack The Box",
        "excerpt":"I solved this gitlab box the unintended way by exploiting the git pull command running as root and using git post-merge hooks to execute code as root. I was able to get a root shell using this method but I still had to get an initial shell by finding the...","categories": ["hackthebox","infosec"],
        "tags": ["git","gitlab","javascript","obfuscated","unintended"],
        "url": "http://192.168.1.12:4000/htb-writeup-bitlab/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-bitlab/bitlab_logo.png"},{
        "title": "Player - Hack The Box",
        "excerpt":"Player was a tough one. Getting the initial shell on Player took me quite some time. Every time I got new credentials I thought I would be able to log in but there was always another step after. The trickiest part of the box for me was finding the .php~...","categories": ["hackthebox","infosec"],
        "tags": ["php","jwt","vhosts","codiad","ffmpeg","lshell","openssh xauth","pspy","cronjob","php deserialization"],
        "url": "http://192.168.1.12:4000/htb-writeup-player/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-player/player_logo.png"},{
        "title": "AI - Hack The Box",
        "excerpt":"Exploiting the simple SQL injection vulnerability on the AI box was harder than expected because of the text-to-speech conversion required. I had to use a few tricks to inject the single quote in the query and the other parameters needed for the injection. Summary There is a web application with...","categories": ["hackthebox","infosec"],
        "tags": ["tts","sqli","jdwp"],
        "url": "http://192.168.1.12:4000/htb-writeup-ai/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-ai/ai_logo.png"},{
        "title": "Exposición de datos médicos en hospitales",
        "excerpt":"Durante los últimos meses, hemos visto noticias por todos lados de datos médicos de pacientes los cuales han quedado expuestos por internet. Es algo alarmante pero no sorprendente teniendo en cuenta cómo está la seguridad a día de hoy. En el siguiente artículo, os explico en qué consiste este “gran...","categories": ["Research"],
        "tags": ["Hospitales","Dicom","Radiant"],
        "url": "http://192.168.1.12:4000/hospital-dicom-exposure/",
        "teaser":"http://192.168.1.12:4000/assets/images/hospital-dicom/dicom.png"},{
        "title": "Bypassing de validación en Chatroulette",
        "excerpt":"Hoy os vengo a mostrar un bypassing de lo más absurdo en la plataforma de Chatroulette. Supongo que sabréis que a la hora de entrar en Chatroulette se lleva a cabo una especie de validación, donde te piden que sonrías para que tu cara quede registrada en el sistema y...","categories": ["Research"],
        "tags": ["Chatroulette","Burpsuite","Bypassing"],
        "url": "http://192.168.1.12:4000/chatroulette-bypass/",
        "teaser":"http://192.168.1.12:4000/assets/images/chatroulette-bypass/chatroulette-main.jpg"},{
        "title": "FastTcpScan - Go",
        "excerpt":"En el siguiente artículo os comparto la herramienta FastTcpScan que nos desarrollamos en la máquina Hawk de la plataforma HackTheBox. Esta herramienta consiste en un escáner que permite detectar de forma rápida y precisa los puertos TCP que una máquina tiene abiertos. Para aquellos que quieran ver el desarrollo de...","categories": ["Scripting"],
        "tags": ["TCP Scan","Go Golang"],
        "url": "http://192.168.1.12:4000/fasttcpscan-go/",
        "teaser":"http://192.168.1.12:4000/assets/images/fasttcpscan-go/golang-go.png"},{
        "title": "RE - Hack The Box",
        "excerpt":"I had fun solving RE but I did it using an unintended path. After getting a shell with a macroed .ods file, I saw that the Winrar version had a CVE which allowed me to drop a webshell in the webserver path and get RCE as iis apppool\\re. The user...","categories": ["hackthebox","infosec"],
        "tags": ["yara","usosvc","unintended","libreoffice","macros","ods","CVE-2018-20253"],
        "url": "http://192.168.1.12:4000/htb-writeup-re/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-re/re_logo.png"},{
        "title": "Canal encubierto en WhatsApp",
        "excerpt":"En el siguiente artículo, os muestro una forma de mantener conversaciones encubiertas sin que quede registro en el historial de conversaciones de WhatsApp. De esta forma, dos personas pueden mantener una conversación mediante la lectura de logs a tiempo de escritura sin necesidad de enviar el mensaje. Antecedentes Para poder...","categories": ["Research"],
        "tags": ["WhatsApp","Canales Encubiertos"],
        "url": "http://192.168.1.12:4000/canal-encubierto-whatsapp/",
        "teaser":"http://192.168.1.12:4000/assets/images/whatsapp-canal-encubierto/whatsapp-banner.jpeg"},{
        "title": "ttyOverHTTP - Herramienta",
        "excerpt":"Podéis encontrar esta herramienta en el siguiente enlace: https://github.com/s4vitar/ttyoverhttp ¿Qué es ttyOverHTTP? ttyOverHTTP no es más que una herramienta de utilidad la cual nos permitirá en base a una webshell, sin la necesidad de entablarnos una reverse shell, contar con una TTY completamente interactiva, haciendo uso para ello de la...","categories": ["Scripting","Utilidades"],
        "tags": ["Python","Web Exploiting","Herramientas"],
        "url": "http://192.168.1.12:4000/ttyoverhttp/",
        "teaser":"http://192.168.1.12:4000/assets/images/ttyOverHTTP/ttyoverhttp-banner.jpg"},{
        "title": "Falsificación de mensajes en WhatsApp",
        "excerpt":"¿Cómo reproducir este bug? Antes que nada, vamos a darle los buenos créditos al señor @RiftWhiteHat, que fue el que me enseñó esta maravilla bajo la cual pueden surgir investigaciones para todo aquel que le quiera meter mano y tal vez descubrir nuevas cosas. Comenzamos presionando la combinación Ctrl+Shift+C. Posteriormente,...","categories": ["Research"],
        "tags": ["WhatsApp","Manipulación","Bug"],
        "url": "http://192.168.1.12:4000/falsificacion-mensajes-whatsapp/",
        "teaser":"http://192.168.1.12:4000/assets/images/whatsapp-fake-messages/whatsapp.jpg"},{
        "title": "JSON - Hack The Box",
        "excerpt":"To get remote code execution on JSON, I exploited a deserialization vulnerability in the web application using the Json.net formatter. After getting a shell I could either get a quick SYSTEM shell by abusing SeImpersonatePrivileges with Juicy Potato or reverse the Sync2FTP application to decrypt its configuration and find the...","categories": ["hackthebox","infosec"],
        "tags": ["deserialization","unintended","juicy potato","reversing","dnspy"],
        "url": "http://192.168.1.12:4000/htb-writeup-json/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-json/json_logo.png"},{
        "title": "Zetta - Hack The Box",
        "excerpt":"Zetta is another amazing box by jkr. The first part was kinda tricky because you had to pay attention to the details on the webpage and spot the references to IPv6 that lead you to the EPTR command to disclose the IPv6 address of the server. Then there’s some light...","categories": ["hackthebox","infosec"],
        "tags": ["ipv6","rsync","sqli","postgresql"],
        "url": "http://192.168.1.12:4000/htb-writeup-zetta/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-zetta/zetta_logo.png"},{
        "title": "Bankrobber - Hack The Box",
        "excerpt":"Bankrobber is a web app box with a simple XSS and SQL injection that we have to exploit in order to get the source code of the application and discover a command injection vulnerability in the backdoor checker page that’s only reachable from localhost. By using the XSS to make...","categories": ["hackthebox","infosec"],
        "tags": ["xss","sqli","ssfr","command injection","brute force","buffer overflow"],
        "url": "http://192.168.1.12:4000/htb-writeup-bankrobber/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-bankrobber/bankrobber_logo.png"},{
        "title": "Postman - Hack The Box",
        "excerpt":"Postman was a somewhat frustrating box because we had to find the correct user directory where to write our SSH key using the unprotected Redis instance. I expected to be able to use a wordlist to scan through /home and find a valid user but on this box the redis...","categories": ["hackthebox","infosec"],
        "tags": ["redis","webmin","ssh"],
        "url": "http://192.168.1.12:4000/htb-writeup-postman/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-postman/postman_logo.png"},{
        "title": "Forest - Hack The Box",
        "excerpt":"Forest is a nice easy box that go over two Active Directory misconfigurations / vulnerabilities: Kerberos Pre-Authentication (disabled) and ACLs misconfiguration. After I retrieved and cracked the hash for the service account I used aclpwn to automate the attack path and give myself DCsync rights to the domain. Summary The...","categories": ["hackthebox","infosec"],
        "tags": ["ad","kerberos","bloodhound","dcsync","aclpwn"],
        "url": "http://192.168.1.12:4000/htb-writeup-forest/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-forest/forest_logo.png"},{
        "title": "Sniper - Hack The Box",
        "excerpt":"Sniper is another box I got access to through an unintended method. The PHP application wasn’t supposed to be exploitable through Remote File Inclusion but because it runs on Windows, we can use UNC path to include a file from an SMB share. Once I had a shell, I pivoted...","categories": ["hackthebox","infosec"],
        "tags": ["php","rfi","unintended","plink","winrm","chm"],
        "url": "http://192.168.1.12:4000/htb-writeup-sniper/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-sniper/sniper_logo.png"},{
        "title": "Registry - Hack The Box",
        "excerpt":"This writeup is outdated and the attack path presented for user bolt has been patched. Initially once we pivoted from the bolt user to www-data we could run restic as root and abuse the sftp.command parameter to execute any command as root. Portscan root@kali:~# nmap -T4 -sC -sV -p- 10.10.10.159...","categories": ["hackthebox","infosec"],
        "tags": ["docker","registry","restic","unintended"],
        "url": "http://192.168.1.12:4000/htb-writeup-registry/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-registry/registry_logo.png"},{
        "title": "Traverxec - Hack The Box",
        "excerpt":"Sometimes you need a break from the hard boxes that take forever to pwn. Traverxec is an easy box that start with a custom vulnerable webserver with an unauthenticated RCE that we exploit to land an initial shell. After pivoting to another user by finding his SSH private key and...","categories": ["hackthebox","infosec"],
        "tags": ["nostromo","journalctl","gtfobins"],
        "url": "http://192.168.1.12:4000/htb-writeup-traverxec/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-traverxec/traverxec_logo.png"},{
        "title": "Mango - Hack The Box",
        "excerpt":"Mango was a medium box with a NoSQSL injection in the login page that allows us to retrieve the username and password. The credentials we retrieve through the injection can be used to SSH to the box. For privilege escalation, the jjs tool has the SUID bit set so we...","categories": ["hackthebox","infosec"],
        "tags": ["mango","nosql","jjs"],
        "url": "http://192.168.1.12:4000/htb-writeup-mango/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-mango/mango_logo.png"},{
        "title": "Control - Hack The Box",
        "excerpt":"Control runs a vulnerable PHP web application that controls access to the admin page by checking the X-Forwarded-For HTTP header. By adding the X-Forwarded-For HTTP header with the right IP address we can access the admin page and exploit an SQL injection to write a webshell and get RCE. After...","categories": ["hackthebox","infosec"],
        "tags": ["x-forwarded-for","sqli","php","mysql","services"],
        "url": "http://192.168.1.12:4000/htb-writeup-control/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-control/control_logo.png"},{
        "title": "Cómo explotar la vulnerabilidad Zerologon",
        "excerpt":"¿Es realmente crítico Zerologon? La respuesta es un si rotundo. No creo que haga falta a estas alturas comentar qué es Zerologon… ya existen montón de artículos a disposición detallando de forma técnica y ejecutiva en qué consiste la vulnerabilidad. Centrémonos en la explotación, ¿cómo se explota zerologon?, vamos a...","categories": ["Research","Utilidades","Exploits","Vulnerabilidades"],
        "tags": ["Pentesting","Herramientas","Windows","Linux","Domain Controller","Guías","Privilege Escalation"],
        "url": "http://192.168.1.12:4000/como-explotar-vulnerabilidad-zerologon/",
        "teaser":"http://192.168.1.12:4000/assets/images/zerologon/zerologon.png"},{
        "title": "Europa - Hack The Box",
        "excerpt":"Una máquina muy interesante la cual resolvemos en mi canal de YouTube. En este caso, os comparto el script Autopwn que nos habíamos configurado en Python, donde tras su ejecución se nos automatiza la intrusión y la escalada de privilegios mediante el uso de la librería pwn. Para los interesados...","categories": ["hackthebox","Autopwn","Scripting"],
        "tags": ["Sqli","Web Exploiting","Privilege Escalation","Python","Pentesting"],
        "url": "http://192.168.1.12:4000/htb-writeup-europa/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-europa/europa_logo.png"},{
        "title": "Ready - Hack The Box",
        "excerpt":"Ready was a pretty straighforward box to get an initial shell on: We identify that’s it running a vulnerable instance of Gitlab and we use an exploit against version 11.4.7 to land a shell. Once inside, we quickly figure out we’re in a container and by looking at the docker...","categories": ["hackthebox","infosec"],
        "tags": ["linux","gitlab","cve","docker","privileged container"],
        "url": "http://192.168.1.12:4000/htb-writeup-ready/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-ready/ready_logo.png"},{
        "title": "Conceal - Hack The Box",
        "excerpt":"Conceal uses IPSec to secure connectivity to the server and nothing is exposed by default except SNMP and IPSec. After finding the preshared key by enumerating with SNMP, we connect to the server, upload an ASP payload to gain RCE then privesc to SYSTEM using RottenPotato. Not a bad box...","categories": ["hackthebox","infosec"],
        "tags": ["asp","ipsec","vpn","rotten tomato"],
        "url": "http://192.168.1.12:4000/htb-writeup-conceal/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-conceal/conceal_logo.png"},{
        "title": "Chaos - Hack The Box",
        "excerpt":"Chaos starts with some enumeration to find a hidden wordpress site that contains a set of credentials for a webmail site. There’s some simple crypto we have to do to decrypt an attachment and find a hidden link on the site. We then exploit the PDF creation website which uses...","categories": ["hackthebox","infosec"],
        "tags": ["wordpress","weak credentials","pdf","LaTeX","firefox","saved credentials"],
        "url": "http://192.168.1.12:4000/htb-writeup-chaos/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-chaos/chaos_logo.png"},{
        "title": "Sizzle - Hack The Box",
        "excerpt":"Sizzle was an amazing box that requires using some Windows and Active Directory exploitation techniques such as Kerberoasting to get encrypted hashes from Service Principal Names accounts. The privesc involves adding a computer to domain then using DCsync to obtain the NTLM hashes from the domain controller and then log...","categories": ["hackthebox","infosec"],
        "tags": ["windows","scf","pass-the-hash","meterpreter","port forwarding","winrm","kerberoasting","responder"],
        "url": "http://192.168.1.12:4000/htb-writeup-sizzle/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-sizzle/sizzle_logo.png"},{
        "title": "Help - Hack The Box",
        "excerpt":"Help showed that a small programming mistake in a web application can introduce a critical security vulnerability. In this case, the PHP application errors out when uploading invalid extensions such as PHP files but it doesn’t delete the file. Combined with a predictable filename generated based on MD5 of original...","categories": ["hackthebox","infosec"],
        "tags": ["linux","php","apache","kernel exploit","helpdeskz"],
        "url": "http://192.168.1.12:4000/htb-writeup-help/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-help/help_logo.png"},{
        "title": "Flujab - Hack The Box",
        "excerpt":"Flujab was without a doubt one of the toughest HTB box. It’s got a ton of vhosts that force you to enumerate a lot of things and make sure you don’t get distracted by the quantity of decoys and trolls left around. The key on this box is to stay...","categories": ["hackthebox","infosec"],
        "tags": ["smtp","sqli","enumeration","screen","exploit","waf","tamper script","weak ssh keys"],
        "url": "http://192.168.1.12:4000/htb-writeup-flujab/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-flujab/flujab_logo.png"},{
        "title": "Querier - Hack The Box",
        "excerpt":"To solve Querier, we find an Excel spreadsheet that contains a VBA macro then use Responder to capture NTLM hashes from the server by forcing it to connect back to our machine with xp_dirtree. After cracking the hash, we gain RCE on the server by using the standard xp_cmdshell command....","categories": ["hackthebox","infosec"],
        "tags": ["windows","hardcoded credentials","mssql","gpp","winrm","impacket","responder"],
        "url": "http://192.168.1.12:4000/htb-writeup-querier/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-querier/querier_logo.png"},{
        "title": "Netmon - Hack The Box",
        "excerpt":"I think Netmon had the quickest first blood on HTB yet. The user flag could be grabbed by just using anonymous FTP and retrieving it from the user directory. I guessed the PRTG admin password after finding an old backup file and changing the year in the password from 2018...","categories": ["hackthebox","infosec"],
        "tags": ["ftp","prtg","powershell","nishang","config backups"],
        "url": "http://192.168.1.12:4000/htb-writeup-netmon/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-netmon/netmon_logo.png"},{
        "title": "Hackback - Hack The Box",
        "excerpt":"Hackback took me a long time to do. There are so many steps required just to get a shell. For extra difficulty, AppLocker is enabled and an outbound firewall policy is configured to block reverse shells. This box has a bit of everything: fuzzing, php, asp (for pivoting with reGeorg),...","categories": ["hackthebox","infosec"],
        "tags": ["windows","gophish","alpc","command injection","reversing","ntfs ads","powershell","regeorg","pivoting","fuzzing","php","asp","winrm","proxychains"],
        "url": "http://192.168.1.12:4000/htb-writeup-hackback/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-hackback/hackback_logo.png"},{
        "title": "Friendzone - Hack The Box",
        "excerpt":"Friendzone is an easy box with some light enumeration of open SMB shares and sub-domains. I used an LFI vulnerability combined with a writable SMB share to get RCE and a reverse shell. A cron job running as root executes a python script every few minutes and the OS module...","categories": ["hackthebox","infosec"],
        "tags": ["smb","smbmap","vhosts","php","python","cronjob","dns","axfr"],
        "url": "http://192.168.1.12:4000/htb-writeup-friendzone/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-friendzone/friendzone_logo.png"},{
        "title": "CTF - Hack The Box",
        "excerpt":"This time it’s a very lean box with no rabbit holes or trolls. The box name does not relate to a Capture the Flag event but rather the Compressed Token Format used by RSA securid tokens. The first part of the box involves some blind LDAP injection used to extract...","categories": ["hackthebox","infosec"],
        "tags": ["secureid","injection","otp","php","ldap","cronjob","7zip"],
        "url": "http://192.168.1.12:4000/htb-writeup-ctf/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-ctf/ctf_logo.png"},{
        "title": "LaCasaDePapel - Hack The Box",
        "excerpt":"I had trouble with the OTP token on this box: I never figured out why but whenever I scanned the QR code with my Google Authenticator app it would always generate an invalid token. Using a Firefox add-on I was able to properly generate the token to get access to...","categories": ["hackthebox","infosec"],
        "tags": ["otp","vsftpd","cronjob","openssl","certificates","ssh","ssh rsa auth","php","psysh","nodejs"],
        "url": "http://192.168.1.12:4000/htb-writeup-lacasa/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-lacasa/lacasa_logo.png"},{
        "title": "Fortune - Hack The Box",
        "excerpt":"In this box, I use a simple command injection on the web fortune application that allows me to find the Intermediate CA certificate and its private key. After importing the certificates in Firefox, I can authenticate to the HTTPS page and access a privileged page that generates an SSH private...","categories": ["hackthebox","infosec"],
        "tags": ["python","flask","command injection","certificate","nfs","port forward","ssh","postgresql","sqlite","pgadmin","openssl"],
        "url": "http://192.168.1.12:4000/htb-writeup-fortune/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-fortune/fortune_logo.png"},{
        "title": "Arkham - Hack The Box",
        "excerpt":"Arkham was a medium difficulty box that shows how Java deserialization can be used by attackers to get remote code execution. After finding the JSF viewstates encryption key in a LUKS encrypted file partition, I created a Java deserialization payload using ysoserial to upload netcat and get a shell. After...","categories": ["hackthebox","infosec"],
        "tags": ["java","deserialization","smb","luks","readpst","unintended"],
        "url": "http://192.168.1.12:4000/htb-writeup-arkham/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-arkham/arkham_logo.png"},{
        "title": "Helpline - Hack The Box",
        "excerpt":"I did Helpline the unintended way by gaining my initial shell access as NT AUTHORITY\\SYSTEM and then working my way back to the root and user flags. Both flags were encrypted for two different users so even with a SYSTEM shell I couldn’t immediately read the files and had to...","categories": ["hackthebox","infosec"],
        "tags": ["windows","winrm","mimikatz","efs","ServiceDesk","incognito","tokens","meterpreter","powershell","postgresql","xxe","lfi","evtx","windows logs"],
        "url": "http://192.168.1.12:4000/htb-writeup-helpline/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-helpline/helpline_logo.png"},{
        "title": "Unattended - Hack The Box",
        "excerpt":"Unattended was a pretty tough box with a second order SQL injection in the PHP app. By injecting PHP code into the web server access logs through the User-Agent header, I can get RCE by including the logs using the SQL injection. I didn’t quite understand what the priv esc...","categories": ["hackthebox","infosec"],
        "tags": ["vhost","linux","sqli","sqlmap","2nd order injection","php","lfi","ipv6","firewall","uinitrd"],
        "url": "http://192.168.1.12:4000/htb-writeup-unattended/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-unattended/unattended_logo.png"},{
        "title": "Onetwoseven - Hack The Box",
        "excerpt":"OneTwoSeven starts with enumeration of various files on the system by creating symlinks from the SFTP server. After finding the credentials for the ots-admin user in a vim swap file, I get access to the administration page by SSH port-forwarding my way in and then I have to use the...","categories": ["hackthebox","infosec"],
        "tags": ["php","apt","mitm","swapfile","vim","sftp","ssh","port forwarding","sudo","web","linux","symlink"],
        "url": "http://192.168.1.12:4000/htb-writeup-onetwoseven/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-onetwoseven/onetwoseven_logo.png"},{
        "title": "Bastion - Hack The Box",
        "excerpt":"Bastion was an easy box where we had to find an open SMB share that contained a Windows backup. Once we mounted the disk image file, we could recover the system and SAM hive and then crack one of the user’s password. An OpenSSH service was installed on the machine...","categories": ["hackthebox","infosec"],
        "tags": ["windows","mremoteng","backup","smb"],
        "url": "http://192.168.1.12:4000/htb-writeup-bastion/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-bastion/bastion_logo.png"},{
        "title": "Luke - Hack The Box",
        "excerpt":"Luke is a easy machine that doesn’t have a lot steps but we still learn a few things about REST APIs like how to authenticate to the service and get a JWT token and which headers are required when using that JWT. The rest of the box was pretty straighforward...","categories": ["hackthebox","infosec"],
        "tags": ["ftp","php","ajenti","json","jwt"],
        "url": "http://192.168.1.12:4000/htb-writeup-luke/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-luke/luke_logo.png"},{
        "title": "Kryptos - Hack The Box",
        "excerpt":"I loved the Kryptos machine from Adamm and no0ne. It starts with a cool parameter injection in the DSN string so I can redirect the DB queries to my VM and have the webserver authenticate to a DB I control. Next is some crypto with the RC4 stream cipher in...","categories": ["hackthebox","infosec"],
        "tags": ["linux","crypto","sqli","php","vim","lfi","mysql","sqlite","injection","jail escape"],
        "url": "http://192.168.1.12:4000/htb-writeup-kryptos/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-kryptos/kryptos_logo.png"},{
        "title": "Swagshop - Hack The Box",
        "excerpt":"SwagShop is one of those easy boxes where you can pop a shell just by using public exploits. It’s running a vulnerable Magento CMS on which we can create an admin using an exploit then use another one to get RCE. To privesc I can run vi as root through...","categories": ["hackthebox","infosec"],
        "tags": ["linux","magento","vi","sudo"],
        "url": "http://192.168.1.12:4000/htb-writeup-swagshop/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-swagshop/swagshop_logo.png"},{
        "title": "Ghoul - Hack The Box",
        "excerpt":"Ghoul was a tricky box from Minatow that required pivoting across 3 containers to find the bits and pieces needed to get root. To get a shell I used a Zip Slip vulnerability in the Java upload app to drop a PHP meterpreter payload on the webserver. After pivoting and...","categories": ["hackthebox","infosec"],
        "tags": ["linux","zipslip","git","ssh","unintended","gogs","containers"],
        "url": "http://192.168.1.12:4000/htb-writeup-ghoul/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-ghoul/ghoul_logo.png"},{
        "title": "Writeup - Hack The Box",
        "excerpt":"Writeup starts off easy with an unauthenticated vulnerability in CMS Made Simple that I exploit to dump the database credentials. After cracking the user hash, I can log in to the machine because the user re-used the same password for SSH. The priv esc is pretty nice: I have write...","categories": ["hackthebox","infosec"],
        "tags": ["linux","sqli","cms"],
        "url": "http://192.168.1.12:4000/htb-writeup-writeup/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-writeup/writeup_logo.png"},{
        "title": "Safe - Hack The Box",
        "excerpt":"Safe was a bit of a surprise because I didn’t expect a 20 points box to start with a buffer overflow requiring ropchains. The exploit is pretty straightforward since I have the memory address of the system function and I can call it to execute a shell. The privesc was...","categories": ["hackthebox","infosec"],
        "tags": ["linux","binary exploit","buffer overflow","keepass"],
        "url": "http://192.168.1.12:4000/htb-writeup-safe/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-safe/safe_logo.png"},{
        "title": "Haystack - Hack The Box",
        "excerpt":"Haystack is an easy ctf-like box where the initial credentials can be found hidden in an ElasticSearch database. Knowing some ES API syntax it’s very easy to retrieve the credentials then get an SSH shell. After exploiting CVE-2018-17246 in Kibana, I get another shell with user kibana who has read...","categories": ["hackthebox","infosec"],
        "tags": ["linux","elasticsearch","easy","ctf-like","logstash","kibana","CVE-2018-17246"],
        "url": "http://192.168.1.12:4000/htb-writeup-haystack/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-haystack/haystack_logo.png"},{
        "title": "Jarvis - Hack The Box",
        "excerpt":"The entrypoint for Jarvis is an SQL injection vulnerability in the web application to book hotel rooms. There is a WAF but I was able to easily get around it by lowering the amount of requests per second in sqlmap and changing the user-agent header. After landing a shell, I...","categories": ["hackthebox","infosec"],
        "tags": ["linux","sqli","sqlmap","waf","command injection","suid","systemd"],
        "url": "http://192.168.1.12:4000/htb-writeup-jarvis/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-jarvis/jarvis_logo.png"},{
        "title": "Networked - Hack The Box",
        "excerpt":"Networked was an easy box that starts off with a classic insecure upload vulnerability in an image gallery web application. The Apache server is misconfigured and let me use a double extension to get remote code execution through my PHP script. To escalate to root, we have to find a...","categories": ["hackthebox","infosec"],
        "tags": ["linux","php","upload","double extension","cronjob","command injection","sudo"],
        "url": "http://192.168.1.12:4000/htb-writeup-networked/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-networked/networked_logo.png"},{
        "title": "Chainsaw - Hack The Box",
        "excerpt":"I learned a bit about Ethereum and smart contracts while doing the Chainsaw box from Hack the Box. There’s a command injection vulnerability in a smart contract that gives me a shell. Then after doing some googling on IPFS filesystem, I find an encrypted SSH key for another user which...","categories": ["hackthebox","infosec"],
        "tags": ["linux","smart contract","ethereum","ipfs","suid","hidden","bmap","command injection"],
        "url": "http://192.168.1.12:4000/htb-writeup-chainsaw/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-chainsaw/chainsaw_logo.png"},{
        "title": "Msfvenom shellcode analysis",
        "excerpt":"This blog post provides an analysis of various common shellcodes generated by the msfvenom utility which is part of Metasploit. # Shellcode analysis #1: linux/x86/exec Stepping through the shellcode # Shellcode analysis #2: linux/x86/shell_reverse_tcp Stepping through the shellcode # Shellcode analysis #3: linux/x86/adduser Stepping through the shellcode Shellcode analysis #1:...","categories": ["reverseshell","msfvenom"],
        "tags": ["slae","assembly","encoding"],
        "url": "http://192.168.1.12:4000/msfvenom-shellcode-analysis/",
        "teaser":"http://192.168.1.12:4000/assets/images/slae32.png"},{
        "title": "Heist - Hack The Box",
        "excerpt":"Heist starts off with a support page with a username and a Cisco IOS config file containing hashed &amp; encrypted passwords. After cracking two passwords from the config file and getting access to RPC on the Windows machine, I find additional usernames by RID cycling and then password spray to...","categories": ["hackthebox","infosec"],
        "tags": ["linux","cisco","hashes","creds spray","rpcclient","winrm","procdump","memory forensics"],
        "url": "http://192.168.1.12:4000/htb-writeup-heist/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-heist/heist_logo.png"},{
        "title": "Wall - Hack The Box",
        "excerpt":"Wall is running a vulnerable version of the Centreon application that allows authenticated users to gain RCE. The tricky part of this box was finding the path to the application since it’s not something that normally shows up in the wordlists I use with gobuster. The intended way was to...","categories": ["hackthebox","infosec"],
        "tags": ["linux","centreon","screen","waf","centreon","CVE-2019-13024"],
        "url": "http://192.168.1.12:4000/htb-writeup-wall/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-wall/wall_logo.png"},{
        "title": "Smasher2 - Hack The Box",
        "excerpt":"Just its predecessor, Smasher2 is a very difficult box with reverse engineering and binary exploitation. Unfortunately, the initial step required some insane brute-forcing which took part of the fun out of this one for me. I solved the authentication bypass part using an unintended method: The code compares the password...","categories": ["hackthebox","infosec"],
        "tags": ["waf","sqli","bruteforce","kernel module","python","re"],
        "url": "http://192.168.1.12:4000/htb-writeup-smasher2/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-smasher2/smasher2_logo.png"},{
        "title": "OpenAdmin - Hack The Box",
        "excerpt":"OpenAdmin is an easy box that starts with using an exploit for the OpenNetAdmin software to get initial RCE. Then we get credentials from the database config and can re-use them to connect by SSH. We then find another web application with an hardcoded SHA512 hash in the PHP code...","categories": ["hackthebox","infosec"],
        "tags": ["opennetadmin","unintended","db creds","gtfobins"],
        "url": "http://192.168.1.12:4000/htb-writeup-openadmin/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-openadmin/openadmin_logo.png"},{
        "title": "Obscurity - Hack The Box",
        "excerpt":"The Obscurity box has a vulnerable Python web application running. After finding the source code from a secret directory we find that the exec call can be command injected to get a shell as www-data. Then we have to solve a simple crypto challenge to retrieve an encryption key that...","categories": ["hackthebox","infosec"],
        "tags": ["custom webserver","command injection","race condition"],
        "url": "http://192.168.1.12:4000/htb-writeup-obscurity/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-obscurity/obscurity_logo.png"},{
        "title": "Resolute - Hack The Box",
        "excerpt":"We start Resolute with enumeration of the domain user accounts using an anonymous bind session to the LDAP server and find an initial password in the description field of one of the account. Password spraying the password against all the discovered accounts give us an initial shell then we pivot...","categories": ["hackthebox","infosec"],
        "tags": ["rid cycling","password spray","creds in plaintext","bloodhound","dns"],
        "url": "http://192.168.1.12:4000/htb-writeup-resolute/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-resolute/resolute_logo.png"},{
        "title": "P.O.O. - Hack The Box",
        "excerpt":"Professional Offensive Operations (P.O.O.) was the first endgame lab released by Hack The Box. It contained five different flags spread across two Windows machines. The initial part required some tricky recon with ds_store and IIS short names to find a MSSQL DB connection string. We then had to pivot by...","categories": ["hackthebox","infosec"],
        "tags": ["endgame","ds_store","iis shortname","fuzzing","mssql","linked servers","ipv6","mssql python","hashcat","kerberoast","bloodhound","mimikatz"],
        "url": "http://192.168.1.12:4000/htb-writeup-poo/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-poo/poo_logo.png"},{
        "title": "Monteverde - Hack The Box",
        "excerpt":"Monteverde was an Active Directory box on the easier side that requires enumerating user accounts then password spraying to get an initial shell. Then we find more credentials looking around the box and eventually find the MSOL account password which we use to get administrator access. Summary Get the list...","categories": ["hackthebox","infosec"],
        "tags": ["ad","password spray","azure ad","crackmapexec","plaintext creds","winrm"],
        "url": "http://192.168.1.12:4000/htb-writeup-monteverde/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-monteverde/monteverde_logo.png"},{
        "title": "Forwardslash - Hack The Box",
        "excerpt":"Forwardslash starts off like most classic Hack The Box machines with some enumeration of vhosts, files and directories with gobuster then we use a Server-Side Request Forgery (SSRF) vulnerability to reach a protected dev directory only accessible from localhost. After finding credentials and getting a shell, we’ll analyze and exploit...","categories": ["hackthebox","infosec"],
        "tags": ["php","vhosts","ssrf","ltrace","python","unintended","luks"],
        "url": "http://192.168.1.12:4000/htb-writeup-forwardslash/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-forwardslash/forwardslash_logo.png"},{
        "title": "Book - Hack The Box",
        "excerpt":"I initially thought for Book that the goal was to get the administrator’s session cookie via an XSS but instead we have to create a duplicate admin account by using a long email address that gets truncated to the existing one. Once we have access to the admin page we...","categories": ["hackthebox","infosec"],
        "tags": ["xss","pdf","ssh keys","logrotate","cronjob","bash_completion.d"],
        "url": "http://192.168.1.12:4000/htb-writeup-book/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-book/book_logo.png"},{
        "title": "Sauna - Hack The Box",
        "excerpt":"Sauna is a good beginner-friendly AD box that covers a few key Windows exploitation topics like AS-REP roasting, enumeration for credentials, using tools such as Powerview to find attack paths, DCsync and Pass-The-Hash techniques. Summary Find a list of valid users with kerbrute Pre-auth is disabled on the fsmith account...","categories": ["hackthebox","infosec"],
        "tags": ["ad","asrep","kerbrute","crackmapexec","powerview","dcsync","secretsdump"],
        "url": "http://192.168.1.12:4000/htb-writeup-sauna/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-sauna/sauna_logo.png"},{
        "title": "Cascade - Hack The Box",
        "excerpt":"Cascade was a simple and straightforward enumeration-focused Windows box. We find the credentials for the initial account in a custom LDAP attibute then enumerate SMB shares, finding VNC credentials which can be decrypted. With those creds we find an SQlite database that contains encrypted credentials for yet another user. To...","categories": ["hackthebox","infosec"],
        "tags": ["ldap","smb","vnc","reversing","crypto","tombstone"],
        "url": "http://192.168.1.12:4000/htb-writeup-cascade/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-cascade/cascade_logo.png"},{
        "title": "Oouch - Hack The Box",
        "excerpt":"Ooauth was a pretty tough box because I was unfamiliar with Oauth and it took a while to figure out the bits and pieces to chain together. The priv esc was pretty cool, we had to talk to the uwsgi socket directly to manipulate the REMOTE_ADDR variable and exploit a...","categories": ["hackthebox","infosec"],
        "tags": ["linux","ftp","python","flask","xss","oauth","api","dbus","uwsgi"],
        "url": "http://192.168.1.12:4000/htb-writeup-oouch/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-oouch/oouch_logo.png"},{
        "title": "Traceback - Hack The Box",
        "excerpt":"Traceback was an easy box where you had to look for an existing webshell on the box, then use it to get the initial foothold. Then there was some typical sudo stuff with a LUA interpreter giving us access as another user then for privesc we find that we can...","categories": ["hackthebox","infosec"],
        "tags": ["php","webshell","lua","update-motd.d"],
        "url": "http://192.168.1.12:4000/htb-writeup-traceback/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-traceback/traceback_logo.png"},{
        "title": "Magic - Hack The Box",
        "excerpt":"Magic starts with a classic PHP insecure upload vulnerability that let us place a webshell on the target host and then we exploit a subtle webserver misconfiguration to execute the webshell (even though the file name doesn’t end with a .php extension). Once we land a shell, we escalate to...","categories": ["hackthebox","infosec"],
        "tags": ["sqli","upload","php","mysql","port forward","suid","path hijack"],
        "url": "http://192.168.1.12:4000/htb-writeup-magic/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-magic/magic_logo.png"},{
        "title": "Quick - Hack The Box",
        "excerpt":"Quick was a hard box with multiple steps requiring the use of the QUIC protocol to access one section of the website and get the customer onboarding PDF with a set of default credentials. We get to play with ESI template injection to get the initial shell, then abuse a...","categories": ["hackthebox","infosec"],
        "tags": ["quic","php","esi","xslt","port forward","mysql","race condition"],
        "url": "http://192.168.1.12:4000/htb-writeup-quick/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-quick/quick_logo.png"},{
        "title": "Remote - Hack The Box",
        "excerpt":"Remote is a beginner’s box running a vulnerable version of the Umbraco CMS which can be exploited after we find the credentials from an exposed share. After landing a reverse shell, we find that the machine has TeamViewer installed and we can recover the password with Metasploit then log in...","categories": ["hackthebox","infosec"],
        "tags": ["nfs","umbraco","teamviewer","metasploit"],
        "url": "http://192.168.1.12:4000/htb-writeup-remote/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-remote/remote_logo.png"},{
        "title": "Travel - Hack The Box",
        "excerpt":"Travel is an awesome box from my ATeam teammates xct and jkr. The box has a code review part where we analyze the source code of a PHP web app to find a command injection vulnerability in a curl command. We then use the Gopher protocol to perform SSRF and...","categories": ["hackthebox","infosec"],
        "tags": ["vhosts","php","git","memcache","ssrf","gopher","deserialization","ldap","viminfo","nss"],
        "url": "http://192.168.1.12:4000/htb-writeup-travel/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-travel/travel_logo.png"},{
        "title": "Multimaster - Hack The Box",
        "excerpt":"Multimaster was a challenging Windows machine that starts with an SQL injection so we can get a list of hashes. The box author threw a little curve ball here and it took me a while to figure that the hash type was Keccak-384, and not SHA-384. After successfully spraying the...","categories": ["hackthebox","infosec"],
        "tags": ["ad","password spray","kerberoasting","keccak","sqli","winrm","powerview","vs code","chisel","server operators","backup operators"],
        "url": "http://192.168.1.12:4000/htb-writeup-multimaster/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-multimaster/multimaster_logo.png"},{
        "title": "Admirer - Hack The Box",
        "excerpt":"Admirer is an easy box with the typical ‘gobuster/find creds on the webserver’ part, but after we use a Rogue MySQL server to read files from the server file system, then for privesc there’s a cool sudo trick with environment variables so we can hijack the python library path and...","categories": ["hackthebox","infosec"],
        "tags": ["plaintext creds","gobuster","ftp","rogue mysql","python","sudo","setenv"],
        "url": "http://192.168.1.12:4000/htb-writeup-admirer/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-admirer/admirer_logo.png"},{
        "title": "Blackfield - Hack The Box",
        "excerpt":"Blackfield was a fun Windows box where we get a list of potential usernames from an open SMB share, validate that list using kerbrute, then find and crack the hash of an account with the AS-REProasting technique. After getting that first user, we’ll use Bloodhound to discover that we can...","categories": ["hackthebox","infosec"],
        "tags": ["ad","backup operators","asrep","lsass","pypykatz","usodllloader","impacket","bloodhound"],
        "url": "http://192.168.1.12:4000/htb-writeup-blackfield/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-blackfield/blackfield_logo.png"},{
        "title": "Cache - Hack The Box",
        "excerpt":"On Cache, we start off with bypassing a simple login form that uses client-side user/password validation, then find a vhost with a vulnerable OpenEMR application. After bypassing the login page, obtaining a valid session cookie and dumping the database through a SQLi injection vulnerability we exploit yet another OpenEMR CVE...","categories": ["hackthebox","infosec"],
        "tags": ["javascript","client-side validation","sqli","vhost","openemr","cve","john","memcached","docker"],
        "url": "http://192.168.1.12:4000/htb-writeup-cache/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-cache/cache_logo.png"},{
        "title": "Blunder - Hack The Box",
        "excerpt":"Blunder was an easy box for beginners that required bruteforcing the login for a Bludit CMS, then exploiting a known CVE through Metasploit to get remote code execution. The priv esc is a neat little CVE with sudo that allows us to execute commands as root even though the root...","categories": ["hackthebox","infosec"],
        "tags": ["linux","bludit cms","wordlist","cewl","bruteforce","sudo"],
        "url": "http://192.168.1.12:4000/htb-writeup-blunder/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-blunder/blunder_logo.png"},{
        "title": "Dyplesher - Hack The Box",
        "excerpt":"Dyplesher was a pretty tough box that took me more than 10 hours to get to the user flag. There’s quite a bit of enumeration required to get to the git repo and then find memcached credentials from the source code. I couldn’t use the memcache module from Metasploit here...","categories": ["hackthebox","infosec"],
        "tags": ["linux","vhosts","gogs","memcache","sqlite","minecraft","capabilities","pcap","amqp","rabbitmq","lua"],
        "url": "http://192.168.1.12:4000/htb-writeup-dyplesher/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-dyplesher/dyplesher_logo.png"},{
        "title": "Fuse - Hack The Box",
        "excerpt":"To solve Fuse, we’ll do some enumeration to gather potential usernames from the print jobs information then build a password list from the strings on the website. After successfully password spraying, we’ll reset the expired password to a new one then use rpcclient to identify a printer service account and...","categories": ["hackthebox","infosec"],
        "tags": ["password spray","crackmapexec","smbpasswd","print operators","capcom"],
        "url": "http://192.168.1.12:4000/htb-writeup-fuse/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-fuse/fuse_logo.png"},{
        "title": "Tabby - Hack The Box",
        "excerpt":"Tabby was an easy box with simple PHP arbitrary file ready, some password cracking, password re-use and abusing LXD group permissions to instantiate a new container as privileged and get root access. I had some trouble finding the tomcat-users.xml file so installed Tomcat locally on my VM and found the...","categories": ["hackthebox","infosec"],
        "tags": ["php","lfi","tomcat","password cracking","zip","password re-use","lxd"],
        "url": "http://192.168.1.12:4000/htb-writeup-tabby/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-tabby/tabby_logo.png"},{
        "title": "Intense - Hack The Box",
        "excerpt":"Intense starts with code review of a flask application where we find an SQL injection vulnerability that we exploit with a time-based technique. After retrieving the admin hash, we’ll use a hash length extension attack to append the admin username and hash that we found in the database, while keeping...","categories": ["hackthebox","infosec"],
        "tags": ["snmp","sqli","sqlite","hash length extension","path traversal","flask"],
        "url": "http://192.168.1.12:4000/htb-writeup-intense/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-intense/intense_logo.png"},{
        "title": "Buff - Hack The Box",
        "excerpt":"Buff is pretty straightforward: Use a public exploit against the Gym Management System, then get RCE. Do some port-forwarding, then use another exploit (buffer overflow against Cloudme Sync) to get Administrator access. Summary Use unauthenticated file upload vulnerability in Gym Management System 1.0 to get RCE Exploit a buffer overflow...","categories": ["hackthebox","infosec"],
        "tags": ["buffer overflow","cve","windows","file upload","cloudme sync"],
        "url": "http://192.168.1.12:4000/htb-writeup-buff/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-buff/buff_logo.png"},{
        "title": "Smasher - Hack The Box",
        "excerpt":"Linux / 10.10.10.89 This blog post is a writeup of the excellent Hack the Box machine created by dzonerzy. Summary The webserver used is vulnerable to a path traversal bug and buffer overflow in the GET parameter By using the path traversal bug we can get the Makefile and copy...","categories": ["hackthebox","infosec"],
        "tags": ["hackthebox","binary exploit"],
        "url": "http://192.168.1.12:4000/htb-writeup-smasher/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-smasher/smasher.png"},{
        "title": "Creando una antena casera direccional de largo alcance",
        "excerpt":"¿Cómo crear una antena casera de largo alcance? Hoy aprenderás a crear una antena casera para que tu nivel de Hack llegue a distancias inimaginables. Empecemos por el principio, ¿por qué elementos está compuesta la antena? Parecerá una broma, pero no… es una lata de Pringles. Estas latas pueden convertirse...","categories": ["WiFi","Utilidades","Casero"],
        "tags": ["Pentesting","OSWP","Antena Casera"],
        "url": "http://192.168.1.12:4000/antena-casera-largo-alcance/",
        "teaser":"http://192.168.1.12:4000/assets/images/antenacasera/antena.jpg"},{
        "title": "Hawk - Hack The Box",
        "excerpt":"Linux / 10.10.10.102 This blog post is a quick writeup of Hawk from Hack the Box. Summary The server is running an FTP server, a Drupal website and an H2 database (which is not accessible remotely) There is an OpenSSL encrypted file on the publicly accessible FTP server We can...","categories": ["hackthebox","infosec"],
        "tags": ["hackthebox","drupal"],
        "url": "http://192.168.1.12:4000/htb-writeup-hawk/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-hawk/hawk.png"},{
        "title": "Unbalanced - Hack The Box",
        "excerpt":"To solve Unbalanced, we’ll find configuration backups files in EncFS and after cracking the password and figuring out how EncFS works, we get the Squid proxy cache manager password that let us discover internal hosts. Proxying through Squid, we then land on a login page that uses Xpath to query...","categories": ["hackthebox","infosec"],
        "tags": ["rsync","encfs","squid","xpath","CVE-2020-11108","command injection"],
        "url": "http://192.168.1.12:4000/htb-writeup-unbalanced/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-unbalanced/unbalanced_logo.png"},{
        "title": "Active - Hack The Box",
        "excerpt":"Windows / 10.10.10.100 This blog post is a writeup for Active from Hack the Box. Summary There’s a GPP file with user credentials on the replication share of the DC which we can can crack with gpp-decrypt We then grab an encrypted ticket using the Kerberoasting technique and recover the...","categories": ["hackthebox","infosec"],
        "tags": ["hackthebox","kerberos","ad"],
        "url": "http://192.168.1.12:4000/htb-writeup-active/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-active/active.png"},{
        "title": "Waldo - Hack The Box",
        "excerpt":"Linux / 10.10.10.87 This blog post is a writeup of the Waldo machine from Hack the Box. Summary The webserver has a vulnerable function that can be used to browse directories and read files We can read the SSH private key from the nobody user home directory and log in...","categories": ["hackthebox","infosec"],
        "tags": ["hackthebox","linux","capabilities","php"],
        "url": "http://192.168.1.12:4000/htb-writeup-waldo/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-waldo/waldo.png"},{
        "title": "Delivery - Hack The Box",
        "excerpt":"Delivery is a quick and fun easy box where we have to create a MatterMost account and validate it by using automatic email accounts created by the OsTicket application. The admins on this platform have very poor security practices and put plaintext credentials in MatterMost. Once we get the initial...","categories": ["hackthebox","infosec"],
        "tags": ["osticket","mysql","mattermost","hashcat","rules"],
        "url": "http://192.168.1.12:4000/htb-writeup-delivery/",
        "teaser":"http://192.168.1.12:4000/assets/images/htb-writeup-delivery/delivery_logo.png"},{
        "title": "TCP reverse shellcode",
        "excerpt":"A TCP reverse shell connects back to the attacker machine, then executes a shell and redirects all input &amp; output to the socket. This is especially useful when a firewall denies incoming connections but allows outgoing connections. C prototype First, a C prototype is created to test the functionality before...","categories": ["revershell","shellcode"],
        "tags": ["slae","assembly","tcp reverse shellcode"],
        "url": "http://192.168.1.12:4000/tcp-reverse-shellcode/",
        "teaser":"http://192.168.1.12:4000/assets/images/slae32.png"},{
        "title": "TCP bind shellcode",
        "excerpt":"A bind shellcode listens on a socket, waiting for a connection to be made to the server then executes arbitrary code, typically spawning shell for the connecting user. This post demonstrates a simple TCP bind shellcode that executes a shell. The shellcode does the following: Creates a socket Binds the...","categories": ["shellcode","bind"],
        "tags": ["slae","assembly","tcp bind shellcode"],
        "url": "http://192.168.1.12:4000/tcp-bind-shellcode/",
        "teaser":"http://192.168.1.12:4000/assets/images/slae32.png"}]
