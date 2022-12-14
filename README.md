
# ++ RSS XML Feed Server ++
Dieses Projekt ist ein Node-Port der ursprünglichen Google App Engine-Anwendung „rsstodolist“.
Für mehr Zuverlässigkeit und Privatsphäre empfehle ich Ihnen, diese Anwendung selbst zu hosten.
Das Add-Ons für Firefox und aus dem Chrome Web Store sind auch zu empfehlen- Macht die Fuktiomalität viel einfacher als die Html-Oberfläche.

## Für Node & MariaDB :

## Raspi 3B+ :
Die Anwendung ist hier für den "Raspi 3B+" installiert und getestet worden.
Der Umgang mit dem Microcomputer sollte aber schon einen von der Hand gehen...

install Raspberry Pi OS (64-bit) Specification:
https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/

Compatible with :

    3B 3B+ 3A+ 4 400 CM3 CM3+ CM4 Zero 2 W

Bitte Download der aktuellen Software :
Raspberry Pi OS with desktop :

https://www.raspberrypi.com/software/operating-systems/#raspberry-pi-os-64-bit

Raspberry Pi Imager ist die schnelle und einfache Möglichkeit, ein Betriebssystem auf einer microSD-Karte zu installieren, die mit Ihrem Raspberry Pi verwendet werden kann. Alternativ können Sie eines der folgenden Betriebssysteme auswählen, die heruntergeladen und manuell installiert werden können.

    
## Nodejs :
Installieren Sie Node.js und npm aus dem NodeSource-Repository.
z.B.
```shell
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
```
`
```shell
sudo apt install nodejs

node --version
v16.17.0

Check: 

nvm --version
0.39.1
```
## pm2:

Installation | Leitfaden | PM2-Dokumentation
```shell
https://pm2.io/docs/runtime/guide/installation/
```
<pre>pm2 start . --name &apos;rsstodolist-server&apos; --max-memory-restart 128M</pre>

## npm:
```shell
npm --version
8.18.0

npm install
npm start
```


### Datenbank Installieren und MariaDB-Server :
Führen Sie die Migrationsdatei aus hier sind grundlegende Datenbank kentnisser erforderlich.
Migrationsdatei ./rssdolist.sql ++ um die Datenbank rsstodolist zu erstellen. 
Aber vorher bitte install MariaDB:
```shell
sudo apt install mariadb-server
```
..für später eine GUI installieren um über remote die Database einfacher einzusehen/bearbeiten/modifizieren! 
install:
```shell
sudo dpkg -i dbeaver-ce_latest_amd64.d |https://dbeaver.io/download/
```


##  mysql -u rsstodolist -p :
rsstodolist Database/Tabellen erstellen:

-- rsstodolist.feeds_feedentry definition
```
CREATE TABLE `feeds_feedentry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `url` varchar(512) NOT NULL,
  `title` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11337 DEFAULT CHARSET=utf8;
```


## Fehlerbehebung :
Nutze die folgenden Sprüche über Mängel und Fehler, um dir für immer bewusst zu machen, dass falsche Entscheidungen auch neue Türen öffnen können. Fehler Zitate 1 - 10 „Wenn du keine Fehler machst, dann sind die Probleme, an denen du arbeitest, nicht schwierig genug. Und das ist ein grosser Fehler." (Frank Wilczek)

## Lizenz :
MIT

+++
https://github.com/paulgreg/rsstodolist-node-server

Un grand merci à paulgre
