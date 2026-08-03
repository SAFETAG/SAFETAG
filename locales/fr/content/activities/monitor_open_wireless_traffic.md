---
title: Surveiller le trafic sans fil ouvert
approaches:
  - Technique
position: 50
authors:
  - SAFETAG
remote_options:
  - Aucun
skills_required:
  - Sans fil
  - Analyse du trafic
skills_trained: []
summary: |
  Il peut être utile d'écouter le trafic sans fil diffusé à l'emplacement physique du bureau, avant même de savoir quoi que ce soit sur le réseau de l'organisation lui-même. Cette collecte d'informations passive extérieure peut révéler une quantité surprenante de données non seulement sur les appareils qui se connectent à quels réseaux, mais aussi sur
  également de quel type d'appareils il s'agit (en fonction de leurs adresses MAC uniques), et
  à quels autres réseaux ces appareils se sont historiquement connectés. Ces sondes peuvent révéler des informations personnelles, organisationnelles, de localisation et d'appareil qui, prises dans leur contexte, peuvent être dangereuses ou entraîner d'autres vulnérabilités.
overview: |
  Chaque appareil sans fil conserve une "mémoire" des réseaux auxquels il s'est connecté avec succès. Lorsqu'il se connecte à un réseau, il envoie des "sondes" à tous les réseaux qu'il a dans cette mémoire. Il est important de noter que ces données sont largement diffusées et peuvent être collectées sans aucun accès au réseau, uniquement à proximité de l'appareil.

  Ces sondes de réseau peuvent souvent contenir des noms (en particulier des attaches de téléphone mobile), des affiliations organisationnelles, des fabricants d'appareils et un mélange d'autres données potentiellement précieuses (noms de réseau domestique, aéroports/voyages récents
  lieux, cafés et réseaux de conférences). S'il existe de nombreux réseaux à proximité du bureau, cette activité peut également aider à identifier le réseau du bureau spécifique (en cas de doute). Dans de nombreux cas, une organisation peut ne pas souhaiter que le nom de son réseau sans fil soit associé à son organisation,
  mais il peut être révélé par ces métadonnées supplémentaires.

  Les balises peuvent "désanonymiser" un nom de réseau masqué et fournir un contenu riche pour les attaques d'ingénierie sociale. Cela fournit une introduction peu invasive pour discuter de la traçabilité des appareils, en particulier des mobiles et des ordinateurs portables.

  * Recherchez les réseaux sans fil à proximité, identifiez (et confirmez) le ou les réseaux du bureau.
  * Surveiller le trafic de ce réseau et capturer des métadonnées potentiellement sensibles
  (paramètres de sécurité sans fil, balises et adresses MAC).
  * Recherchez le matériel de périphérique probable à l'aide d'adresses MAC.
  * Les appareils du personnel divulguent-ils des métadonnées sensibles ?
  * Que peut-on déterminer sur l'organisation en fonction des données diffusées sans fil ?
materials_needed: |
  * Carte Wifi (et pilotes) pouvant être configurée en mode moniteur.
considerations: |
  * Bien que cet exercice ne couvre que les données diffusées, vérifiez les lois locales qui pourraient couvrir ce processus avant de le mener.
  * Considérez à quoi cela ressemble pour les tiers lorsque vous analysez un réseau, en particulier depuis l'extérieur d'un bureau.
  * Confirmez que tous les appareils auxquels vous accédez/analysez appartiennent à l'organisation.
  * Supprimez tous les appareils de votre analyse qui n'appartiennent pas à l'organisation.
  * Résultats de l'étude pour toute information personnelle manifestement embarrassante
  (en particulier les enregistrements de balises réseau) avant le partage.
walk_through: |
  ###### Step 1: Monitor Mode

  You should disconnect from any wifi network you may be connected to to capture the widest amount of data.

  Switch your wireless adapter to monitor mode**

  ```$ airmon-ng start <interface>```

  You may need to stop your network manager system to prevent it from interfering. Running

  ```$ airmon-ng check```

  to list anything that is causing problems, and

  ```$ airmon-ng check kill```

  to try and stop them automatically, and running stop network-manager && stop avahi-daemon may keep them from re-starting automatically.


  ###### Step 2: Listen for wifi probes.

  Run airodump-ng on the monitor mode interface (usually mon0). This listens to wifi beacons and you can begin analyzing who is on what network, and see historical networks.

  ```airodump-ng -w filename mon0```

  This scans all networks and channels, collecting broadcast network information. Note that, despite its broadcast nature, this is privacy invasive and can be considered illegal: http://www.slate.com/blogs/future_tense/2013/09/16/google_street_view_wi_fi_snooping_case_good_news_and_bad_news.html . You can restict this to a specific channel or base station ID (BSSID) with -c and --bssid:

  ```airodump-ng -c 1 --bssid 00:11:22:33:44:55 -w filename mon0```


  ###### Step 3: de-auth (optional)

  Send de-authentication packets to force clients to reconnect and send out additional probes. Take note that by its very nature, de-authentication causes annoying interruptions to wifi traffic. **This breaks connections, drops VoIP calls, and can make the wireless network temporarily unusable -- Make sure to check with staff before going through this** (to make sure no one is doing a live webcast or on an important VOIP call, and to expect some network instability).

  ```
  $ aireplay-ng -0 1 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF mon0

   15:54:48  Waiting for beacon frame (BSSID: 00:11:22:33:44:55) on channel 1
   15:54:49  Sending 64 directed DeAuth. STMAC: [AA:BB:CC:DD:EE:FF] [ 5| 3 ACKs]
  ```

  This command de-authenticates one targeted user with one attempted deauth packet.  "-0 10" would try 10 times (potentially disconnecting the user multiple times!). With permission, you can also target all users on a network by leaving out the "-c ..." flag.

  There are scripts, like wifijammer, which use this same approach to jam *all* wifi connections in range of the attacking computer, so check against the documentation at http://www.aircrack-ng.org and act responsibly to protect yourself and the organization.

  ###### Step 4: MAC Address Research

  The first three hex numbers of each MAC address designate the vendor, which can reveal useful information in matching MAC addresses to devices. The MAC address is a unique identifier, so never post or search using the full address.  Note that increasingly, devices are using MAC address randomization, but if it implemented, it often is poorly implemented against even minimally determined adversaries, as per this [2017 research study](https://www.theregister.co.uk/2017/03/10/mac_address_randomization/).

  To compare found MAC addresses to the bendor database offline you can download the full vendor database from [IEEE](https://regauth.standards.ieee.org/standards-ra-web/pub/view.html#registries) or use the [Wireshark list](
  https://code.wireshark.org/review/gitweb?p=wireshark.git;a=blob_plain;f=manuf)


  ###### Step 4: Ongoing Monitoring

  The longer you leave this running (particularly when staff are first entering the office or returning after lunch/meetings), the better sense of what devices are connected to the network you will get.

  Watch what probes the various devices are sending out (especially when they are deauthenticated, as above). You will see each computer on the network, as identified by their mac addresses, broadcast information about previous networks to which they have connected.

  ```
  BSSID              STATION            PWR   Rate    Lost    Frames Probe

  00:11:22:33:44:55  0F:3E:DF:DA:2D:E2  -67  0  0  234567  SampleOrg,linksys ̧John Smith's iPhone,Free Public Wifi
  00:11:22:33:44:55  F8:7E:FC:03:CC:43  -80  -24  0  234567  amygreen,SampleOrg,android-hotspot,Starbucks,united_club,Dulles Airport WiFi
  00:11:22:33:44:55  F8:19:F3:DF:75:19  -58  -54  0  234567  SampleOrg
  00:11:22:33:44:55  38:08:95:EB:7E:0B  -75  -12  0  234567  HolidayInn,SampleOrg,John Smith's Mac mini,android-hotspot
  ```
recommendations: |
  For most devices, deleting networks from the “saved” network list will stop
  them from being probed. Obviously, this can be an annoyance for networks you
  regularly connect to, so renaming these networks to non-revealing names would
  help, as would creating non-name-associated “guest” networks for colleagues
  connecting to your home network.

  On iPhones and iPads, it is not possible to selectively remove historical
  networks unless you are currently in range of that network. It is however
  possible to remove all history: go to Settings > General > Reset > Reset
  Network Settings . When you take this step, it is worth going through this
  reset multiple times – approximately once per year of device ownership, as the
  first reset appears to only remove recently-connected networks, and older
  networks will be broadcast.

  Organizations may want to choose innocent or generic network names, and/or not
  broadcast network names. It is worth noting that devices seeking out hidden
  networks will "beacon" for the actual network name, so this has extremely
  limited security use and must be combined with other protective measures. See
  this [Acrylic blog
  post](https://www.acrylicwifi.com/en/blog/hidden-ssid-wifi-how-to-know-name-of-network-without-ssid/)
  for further details.

  It is worth noting that wifi access points are also tracked to assist in
  location services, and as such the location of a wireless network can be
  learned from its name or the MAC address of the access point.
  [WiGLE](https://wigle.net/) is a community-managed database for such
  information, but both Google and Microsoft, and likely many others, also track
  this locational information, so the opt-out information below is only
  minimally useful.

  **Removal options:**
  See [wikipedia](https://en.wikipedia.org/wiki/Wi-Fi_positioning_system#Public_Wi-Fi_location_databases)
  for public listings. Some opt-out options exist below:

  * WiGLE: [WiGLE's FAQ](https://wigle.net/faq): "To have your record removed
  from our database, or if you have any questions or suggestions, send an email
  to: WiGLE-admin [at] WiGLE.net [...] include the BSSID (Mac Address) of the
  network in question!"
  * Google Location services :
  https://support.google.com/maps/answer/1725632?hl=en
  * Mozilla Location Services: follows the Google standard of adding _nomap to a
  wifi name.
  * Microsoft Location Services:
  https://support.microsoft.com/en-us/help/20039/opt-out-of-location-services ;
  See also using _optout and [blocking wifi login information in Windows
  10](https://www.wired.com/2015/07/share-not-share-wi-fi-windows-10/)
  * Apple: No clear opt out,  more information:
  https://www.apple.com/newsroom/2011/04/27Apple-Q-A-on-Location-Data/
  * Skyhook: http://www.skyhookwireless.com/opt-out-of-skyhook-products
organization_size_under: 50
time_required_minutes: 60
---
