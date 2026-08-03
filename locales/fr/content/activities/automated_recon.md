---
title: Reconnaisance automatisée
approaches:
  - Technique
position: 50
authors:
  - SAFETAG
remote_options:
  - Complète
skills_required:
  - Outils OSINT
skills_trained: []
summary: |
  Ce composant permet à l'auditeur d'identifier rapidement les ressources publiques disponibles
  ressources accessibles au public (telles que les sites Web, les extranets, les serveurs de messagerie, mais aussi les médias sociaux) connectées à l'organisation et de recueillir à distance des informations sur ces ressources.
  mais aussi les médias sociaux) connectées à l'organisation et de collecter à distance des informations
  sur ces ressources.

  Alors qu'une grande partie de SAFETAG se concentre sur les défis de la sécurité numérique à l'intérieur et autour du bureau, les attaques à distance contre l'organisation peuvent également se produire.
  et autour du bureau, les attaques à distance sur le site web de l'organisation, les extranets et les réseaux sociaux sont des exemples d'attaques de ce type.
  les informations involontaires disponibles à partir de "sources ouvertes" constituent toutes des menaces réelles et méritent une attention particulière.
  méritent une attention particulière. SAFETAG prend grand soin d'adopter une approche très
  d'adopter une approche très passive de ce travail, surtout lorsqu'il est réalisé hors site, afin de ne pas
  avoir des conséquences inattendues sur l'infrastructure de l'organisation ou de saper les
  les préoccupations de sécurité opérationnelle.

  Ce travail à distance permet également à l'auditeur d'appréhender la présence numérique de l'organisation (et de ses partenaires).
  de la présence numérique de l'organisation (et de sa propre compréhension de celle-ci), et
  orientera les vulnérabilités spécifiques à examiner une fois sur place.
overview: |
  * Reconnaissance passive
  * Identifier la disponibilité en ligne des informations sur le personnel, les partenaires, les bénéficiaires et les projets en cours. [^PETS_logical_intel]
  * Rechercher sur les sites "paste-bin" des fuites d'informations internes ou des exploitations existantes de leur infrastructure.
  * Créer des clés API pour les services de Recon-ng à utiliser. [^recon-ng_API_keys]
  * Utilisez recon-ng pour effectuer une reconnaissance automatisée des sources ouvertes sur le Web. [^recon-ng_data_flow]
  **Résultats attendus
  * Dossier d'informations sur les organisations, les partenaires et les bénéficiaires des "sources ouvertes" exposées en ligne.
  * Liste des adresses courriel des membres de l'organisation.
  * Identification et cartographie des services externes et des services internes involontairement exposés.
  * Les vulnérabilités possibles des sites Web et des serveurs externes de l'organisation.
  * Informations existantes sur les violations antérieures identifiées lors de la recherche dans la corbeille à papier.
  * Suivre le plan de réponse aux incidents approprié si des problèmes à haut risque sont identifiés.
materials_needed: ''
considerations: |
  * Utilisez des VPN pour effectuer des recherches automatisées. Le processus automatisé peut être interprété à tort par divers services comme étant malveillant et faire en sorte que votre réseau local soit bloqué, filtré ou surveillé. Tor est souvent bloqué par les outils que vous utiliserez.
walk_through: |
  Recon-ng et Foca sont tous deux des outils de reconnaissance open source avec de nombreuses
  plugins disponibles. Foca est, dès le départ, davantage destiné à l'extraction de métadonnées
  de documents et d'images, tandis que Recon est un peu plus axé sur la recherche d'informations.
  les domaines, les sous-domaines, les contacts et les informations au niveau du réseau.
  réseau. Ces deux outils sont à utiliser en complément de la réflexion critique et de l'exploration manuelle.
  l'exploration manuelle, et nécessitent des entrées de type "seed" pour démarrer et une
  pour commencer et une sélection minutieuse pour éliminer les fausses pistes.

  ___

  ###### Variant : Recon-ng

  **Qu'est-ce que recon-ng?**

  recon-ng est une application interactive en ligne de commande écrite en python qui est
  utilisée pour effectuer une reconnaissance en utilisant diverses ressources de renseignement
  ressources de renseignement. Il offre une bibliothèque de modules permettant d'effectuer diverses recherches en utilisant
  des connaissances existantes telles qu'un domaine de site web, une IP, une adresse courriel, un nom,
  ou un emplacement géographique. Certains modules nécessitent l'utilisation d'une API de service que
  que vous devrez obtenir vous-même (certains sont gratuits avec des limitations d'utilisation, d'autres sont payants).
  d'autres sont payants). L'utilisation des modules alimentera
  des tables de base de données dynamiques avec des informations d'intérêt telles que le personnel, les contacts, les noms d'utilisateur, les courriels, etc.
  contacts, les noms d'utilisateur, les courriels, les informations techniques comme les hôtes, les IP et les ports,
  et des hachages de mot de passe ou des mots de passe en clair.

  **Installation de recon-ng**

  Suivez les instructions d'installation de [Recon-ng Getting Started
  Instructions] (https://github.com/lanmaster53/recon-ng/wiki/Getting-Started#installation).
  Notez que recon-ng est déjà inclus dans Kali Linux et Parrot.

  **Utilisation de recon-ng**
  Vous trouverez ci-dessous une présentation de l'utilisation de recon-ng v5, mais il existe également une bonne série de vidéos d'introduction à recon-ng V5 à l'adresse [Recon-ng v5 series](https://www.youtube.com/playlist?list=PLBf0hzazHTGOg9taK90uFjdcb8UgGfRKZ).
  **Bases de l'interface**

  Lancez recon-ng à partir de la ligne de commande :

  ```
  # recon-ng
  ```

  En appuyant deux fois sur la touche de tabulation, vous pouvez utiliser l'auto-complétion pour voir les options disponibles.
  disponibles. C'est un bon moyen de se familiariser avec les commandes et la navigation.
  navigation. Sur une nouvelle installation, appuyer deux fois sur la touche de tabulation affichera :

  ```

  [recon-ng][default] |
  back db help keys modules pdb 
  shell snapshots workspaces exit index marketplace
  options script show spool
  ```

  Ce sont les commandes de premier niveau

  La complétion automatique (en appuyant sur la tabulation) fonctionne même à l'intérieur des commandes :

  ```
  [recon-ng][default] > show
  banner credentials hosts locations 
  options schema
  companies dashboard keys modules 
  ports vulnerabilities
  contacts domains leaks netblocks 
  pushpins workspaces
  ```


  **Ajout de modules recon**

  recon-ng v5 n'est pas livré avec des modules préinstallés mais contient une
  marché à partir duquel vous pouvez rechercher et installer des modules individuels.

  En tapant "recherche sur le marché", vous obtiendrez la liste de tous les modules présents sur le marché. Notez
  que les modules ont un format de nom spécifique qui aide l'utilisateur à comprendre le
  le flux de données à l'intérieur de l'outil. Rappelez-vous que recon-ng organise les informations
  dans un certain nombre de tables de base de données telles que les domaines, les hôtes, les contacts, les fuites.
  Les modules utilisent la syntaxe suivante : "<<étape méthodologique>/<tableau d'entrée>-<tableau de sortie>/<module>".
  table>/<module>``. Les entrées constituent la première partie de chaque module, et les
  les sorties sont la deuxième partie. Le nom du module lui-même est l'outil utilisé pour
  traiter les données. Ainsi, recon/domains-hosts/brute-hosts prend les noms de domaine
  (nom_de_site_web.org) en entrée, et produit des noms d'hôtes
  (extranet.websitename.org, etc.). Si vous fournissez le nom du module spécifique
  spécifique, recon-ng peut le trouver (bien que la complétion de tabulation n'aide pas) -- par
  par exemple, ``marketplace info threatminer`` fonctionne tout aussi bien que
  ``marketplace info recon/domains-hosts/threatminer``

  En tapant "marketplace search", vous obtiendrez tous les modules du marché.
  Vous pouvez également rechercher un mot ou une table d'entrée/sortie spécifique, comme par exemple
  ``marketplace search DNS`` ou ``marketplace search hosts``.

  Si vous voulez lire ce que fait un module avant de l'installer, alors exécutez
  ``marketplace info <modulename>``

  Les résultats de la requête de recherche ressemblent à ceci :

  ```
  [recon-ng][default] > marketplace search DNS
  [*] Searching module index for 'DNS'...
  +--------------------------------------------------------------------------------------+
  | Path | Version | Status | Updated | D | K |
  +--------------------------------------------------------------------------------------+
  | discovery/info_disclosure/cache_snoop | 1.0 | not installed | 2019-06-24 | | |
  | recon/domains-domains/brute_suffix | 1.0 | not installed | 2019-06-24 | | |
  | recon/domains-hosts/binaryedge | 1.0 | not installed | 2019-06-24 | | * |
  | recon/domains-hosts/brute_hosts | 1.0 | installed | 2019-06-24 | | |
  | recon/domains-hosts/findsubdomains | 1.0 | not installed | 2019-06-24 | | |
  | recon/domains-hosts/threatcrowd | 1.0 | not installed | 2019-06-24 | | |
  | recon/domains-hosts/threatminer | 1.0 | not installed | 2019-06-24 | | |
  +--------------------------------------------------------------------------------------+
  D = Has dependencies. See info for details.
  K = Requires keys. See info for details.
  ```
  Comme expliqué dans la légende des résultats de recherche, un module avec un * dans la colonne D
  a des dépendances qui seront listées si vous vérifiez les informations du module.
  Les dépendances peuvent être installées en dehors de recon-ng en utilisant ``pip install
  <nom_de_dépendance>``. Les modules avec un * dans la colonne K nécessitent une clé API,
  expliquée ci-dessous.

  Installez un module avec ``marketplace install <module_name>`` ou installez tous les modules avec ``marketplace install <module_name>``.
  modules avec ``marketplace install all`` bien que les modules avec des dépendances
  dépendances et les clés API manquantes ne fonctionneront pas tant que vous n'aurez pas répondu à ces besoins.
  Vous pouvez également installer une collection de modules en utilisant des commandes telles que
  ```marketplace install recon``` to install all the recon/
  * modules, or
  ```marketplace install recon/domains-hosts``` to get all of the domains-hosts
  modules under recon.

  **Premières étapes**

  REMARQUE : Ce guide utilise des données échantillons. Les résultats varieront largement selon l'organisation avec laquelle vous travaillez.

  recon-ng vous permet de créer des espaces de travail distincts pour organiser votre travail de
  travail de reconnaissance. Ceci sera probablement utilisé pour séparer les résultats et les conclusions de la
  reconnaissance sur différentes organisations. Les différents espaces de travail maintiennent
  des tables de base de données de résultats distinctes.
  * Créez un espace de travail pour votre reconnaissance.
  ```
  [recon-ng][default] > workspaces add websitename
  [recon-ng][websitename] |
  ```
  * Notez que vous pouvez également changer d'espace de travail pendant la reconnaissance.
  ```
  [recon-ng][websitename] > workspaces load default
  [recon-ng][default] |
  [recon-ng][default] > workspaces load websitename
  [recon-ng][websitename] |
  ```
  * Ajouter des informations connues sur les semences (domaines, blocs réseau, noms de société, sites, etc.).
  Commencez par les informations que vous connaissez déjà sur l'organisation sur laquelle vous
  vous effectuez une reconnaissance.

  Affichez les informations possibles en utilisant la complétion automatique - tapez la commande
  ci-dessous, puis appuyez deux fois sur la touche tabulation :

  ```
  [recon-ng][websitename] > db insert
  companies credentials hosts locations 
  ports pushpins vulnerabilities
  contacts domains leaks netblocks 
  profiles repositories
  ```

  Nous n'utiliserons que le nom de l'organisation, un domaine, deux netblocks (que nous avons obtenus en recherchant d'autres domaines et en les localisant) et deux adresses électroniques de l'organisation.
  (que nous avons obtenus en recherchant d'autres domaines et en les mettant en évidence), et deux courriels de la
  entreprise que nous recherchons, nous allons donc les ajouter.

  Tout d'abord, ajoutez le nom de la société.

  ```
  [recon-ng][websitename] > db insert companies
  company (TEXT): Websitename
  description (TEXT):
  ```

  Ensuite, ajoutez le domaine. Vous pouvez ensuite utiliser la commande "show" pour voir les données que vous avez saisies ou collectées dans cette table.
  que vous avez saisies ou collectées dans cette table.

  ```
  [recon-ng][websitename] > db insert domains
  domain (TEXT): websitename.org
  notes (TEXT):
  [*] 1 rows affected.
  [recon-ng][websitename] > show domains
  +------------------------------------------------+
  | rowid | domain | notes | module |
  +------------------------------------------------+
  | 1 | websitename.org | | user_defined |
  +------------------------------------------------+
  [*] 1 rows returned

  ```

  Ensuite, ajoutez tous les contacts. Nous ne savons pas grand-chose. Mais, nous allons ajouter ce que nous savons.

  ```
  [recon-ng][websitename] > db insert contacts
  first_name (TEXT): Bob
  middle_name (TEXT): Pirate
  last_name (TEXT): Smith
  courriel (TEXT): bpsmith@websitename.org
  title (TEXT): Compliance Manager
  region (TEXT):
  country (TEXT): USA
  phone (TEXT):
  notes (TEXT):
  [*] 1 rows affected.

  [recon-ng][websitename] > db insert contacts
  first_name (TEXT): Susan
  middle_name (TEXT):
  last_name (TEXT): Mirembe
  courriel (TEXT): smirembe@websitename.org
  title (TEXT): Chief of Party
  region (TEXT):
  country (TEXT): USA
  phone (TEXT):
  notes (TEXT):
  [*] 1 rows affected.
  ```

  Enfin, nous ajouterons l'adresse IP de leur site web.

  ```
  [recon-ng][websitename] > db insert netblocks
  netblock (TEXT): 96.127.170.252
  notes (TEXT): Public website IP
  [*] 1 rows affected.
  [recon-ng][websitename] > db insert netblocks
  netblock (TEXT): 96.127.170.121
  notes (TEXT): Public website IP
  [*] 1 rows affected.
  ```

  Le voici dans la base de données.

  ```
  [recon-ng][websitename] > show netblocks
  +-----------------------------------------------------------+
  | rowid | netblock | notes | module |
  +-----------------------------------------------------------+
  | 1 | 96.127.170.252 | Public website IP | user_defined |
  | 2 | 96.127.170.121 | Public website IP | user_defined |
  +-----------------------------------------------------------+
  [*] 2 rows returned

  ```

  **Phase de reconnaissance (exemple de netblocks)**.
  * Exécuter des modules qui exploitent des netblocks connus. Cela expose d'autres domaines et hôtes à partir desquels les domaines peuvent être récoltés.
  Tout d'abord, recherchez tous les modules qui utilisent les netblocks comme entrée.

  ```
  [recon-ng][websitename] > marketplace search netblocks-
  [*] Searching module index for 'netblocks-'...
  +--------------------------------------------------------------------------------------+
  | Path | Version | Status | Updated | D | K |
  +--------------------------------------------------------------------------------------+
  | recon/netblocks-companies/whois_orgs | 1.0 | not installed | 2019-06-24 | | |
  | recon/netblocks-hosts/reverse_resolve | 1.0 | not installed | 2019-06-24 | | |
  | recon/netblocks-hosts/shodan_net | 1.0 | not installed | 2019-06-24 | | * |
  | recon/netblocks-hosts/virustotal | 1.0 | not installed | 2019-06-24 | | * |
  | recon/netblocks-ports/census_2012 | 1.0 | not installed | 2019-06-24 | | |
  | recon/netblocks-ports/censysio | 1.0 | not installed | 2019-06-24 | | * |
  +--------------------------------------------------------------------------------------+
  ```

  Dans le cas de ``recon/netblocks-hosts/reverse_resolve``, nous pouvons voir que le module
  \module ``reverse_resolve'' est un module de reconnaissance qui prend les blocs de réseau
  et produit des hôtes.

  Installons-le avec ``marketplace install
  recon/netblocks-hosts/reverse_resolve`` ou simplement ``marketplace install
  reverse_resovle``.

  Maintenant nous pouvons charger ce module pour l'utiliser

  ```
  [recon-ng][websitename] > modules load recon/netblocks-hosts/reverse_resolve
  [recon-ng][websitename][reverse_resolve] |
  ```

  Une ligne de commande vide peut être décourageante. Utilisez la commande "info" pour connaître le module
  sur le module et voir quelles options sont disponibles.

  ```
  [recon-ng][websitename][reverse_resolve] > info
  Name: Reverse Resolver
  Author: John Babio (@3vi1john)
  Version: 1.0
  Description:
  Conducts a reverse lookup for each of a netblock's IP addresses to resolve the hostname. Updates the
  'hosts' table with the results.
  Options:
  Name Current Value Required Description
  ------ ------------- -------- -----------
  SOURCE default yes source of input (see 'info' for details)
  Source Options:
  default SELECT DISTINCT netblock FROM netblocks WHERE netblock IS NOT NULL
  <string> string representing a single input
  <path> path to a file containing a list of inputs
  query <sql> database query returning one column of inputs
  ```

  Vous remarquez que la valeur actuelle de SOURCE est 'default' ? Regardez ensuite les options de source
  le comportement par défaut est d'exécuter le module sur tous les blocs de réseaux trouvés
  dans la table des blocs réseau que nous avons déjà commencé à remplir à la dernière étape.
  étape. Il y a d'autres options comme la résolution d'une IP particulière en changeant
  en changeant la source en utilisant ``options set SOURCE 8.8.8.8``, ou en utilisant un fichier d'entrée ou une
  ou une requête de base de données personnalisée. Dans cette présentation, nous allons utiliser le comportement par défaut
  qui prend le contenu actuel des blocs réseau en entrée. Maintenant, utilisez ```run`` pour
  lancer le module.

  ```
  [recon-ng][websitename][reverse_resolve] > run

  --------------
  96.127.170.121
  --------------
  [*] Country: None
  [*] Host: vps.websitename.org
  [*] Ip_Address: 96.127.170.121
  [*] Latitude: None
  [*] Longitude: None
  [*] Notes: None
  [*] Region: None
  [*] --------------------------------------------------

  --------------
  96.127.170.252
  --------------
  [*] Country: None
  [*] Host: vps.websitename.org
  [*] Ip_Address: 96.127.170.252
  [*] Latitude: None
  [*] Longitude: None
  [*] Notes: None
  [*] Region: None
  [*] --------------------------------------------------

  -------
  SUMMARY
  -------
  [*] 2 total (2 new) hosts found.

  ```

  Puisqu'il nous a promis des hôtes, nous allons voir quels hôtes il a découverts.

  ```
  [recon-ng][websitename][reverse_resolve] > show hosts
  +----------------------------------------------------------------------------------------------------------------+
  | rowid | host | ip_address | region | country | latitude | longitude | notes | module |
  +----------------------------------------------------------------------------------------------------------------+
  | 1 | vps.websitename.org | 96.127.170.121 | | | | | | reverse_resolve |
  | 2 | vps.websitename.org | 96.127.170.252 | | | | | | reverse_resolve |
  +----------------------------------------------------------------------------------------------------------------+
  [*] 2 rows returned

  ```

  Puisque ce module est terminé, nous allons le quitter en utilisant la commande ``back``.

  ```
  [recon-ng][websitename][shodan_net] > back
  [recon-ng][websitename] |
  ```

  * Exécuter des modules qui effectuent un forçage brutal des DNS des TLD et des sous-domaines par rapport aux
  domaines actuels.

  La reconnaissance consiste à transformer des informations existantes en plus d'informations.
  plus d'informations. Vous pouvez commencer avec quelque chose d'aussi simple qu'un nom de société, comme
  ACME, et vous savez que leur site web est ACME.com, mais saviez-vous qu'ils ont
  une branche à but non lucratif à ACME.org, et qu'il y a une branche européenne à ACME.eu.
  ou que leur équipe de développement gère un extranet à ACME.net et que les vendeurs
  se connectent à vendor.acme.net tandis que l'équipe de développement se connecte à dev.acme.net ?

  Trouvons de nouveaux domaines en utilisant le forçage brut. D'abord, nous devons chercher ce qui est
  disponible, puis installer, charger et exécuter le module sélectionné. Suivez les
  commandes ci-dessous. En raison du grand nombre de TLD, cela peut prendre du temps.
  Si vous en avez assez d'attendre, appuyez sur CTRL + C pour interrompre le processus.
  il sauvegardera quand même les résultats dans la base de données :

  ```
  [recon-ng][websitename] > marketplace search domains-domains
  [*] Searching module index for 'domains-domains'...
  +-----------------------------------------------------------------------------------+
  | Path | Version | Status | Updated | D | K |
  +-----------------------------------------------------------------------------------+
  | recon/domains-domains/brute_suffix | 1.0 | not installed | 2019-06-24 | | |
  +-----------------------------------------------------------------------------------+
  [recon-ng][websitename] > marketplace install
  recon/domains-domains/brute_suffix
  [recon-ng][websitename] > modules load brute_suffix
  [recon-ng][websitename][brute_suffix] > run

  ---------------
  WEBSITENAME.ORG
  ---------------
  [*] websitename.0 => No record found.
  [*] websitename.01 => No record found.

  [*] websitename.baltimore => No record found.
  [*] websitename.banking => No record found.
  [*] websitename.bayarea => No record found.
  [*] websitename.bb => No record found.
  [*] websitename.bbdd => No record found.
  [*] websitename.bbs => No record found.
  [*] websitename.bd => No record found.
  [*] websitename.bdc => No record found.
  [*] websitename.be => No record found.
  [*] websitename.bea => No record found.
  [*] websitename.beta => No record found.
  [*] websitename.bf => No record found.
  [*] websitename.bg => No record found.
  [*] websitename.bh => No record found.
  [*] websitename.bi => No record found.
  [*] websitename.billing => No record found.
  [*] websitename.biz => (SOA) websitename.biz
  [*] Domain: websitename.biz
  [*] Notes: None
  [*] --------------------------------------------------
  [*] websitename.biztalk => No record found.
  [*] websitename.bj => No record found.
  [*] websitename.black => No record found.
  [*] websitename.blackberry => No record found.
  [*] websitename.blog => No record found.
  [*] websitename.blogs => No record found.
  [*] websitename.blue => No record found.
  [*] websitename.bm => No record found.
  [*] websitename.bn => No record found.
  [*] websitename.bnc => No record found.
  [*] websitename.bo => No record found.
  [*] websitename.bob => No record found.
  [*] websitename.bof => No record found.
  ^C

  -------
  SUMMARY
  -------
  [*] 1 total (1 new) domains found.
  [recon-ng][websitename][brute_suffix] > show domains
  +------------------------------------------------+
  | rowid | domain | notes | module |
  +------------------------------------------------+
  | 1 | websitename.org | | user_defined |
  | 2 | websitename.biz | | brute_suffix |
  +------------------------------------------------+
  [*] 2 rows returned
  [recon-ng][websitename][brute_suffix] |

  ```
  * Suppression des domaines hors du champ d'application avec la commande "db delete domains" ou génération d'une requête qui ne sélectionne que les domaines du champ d'application en entrée.
  * Exécuter les modules qui conduisent la recherche d'hôtes supplémentaires via le moteur de recherche ou le DNS brute forcing des hôtes.
  Commençons par utiliser un moteur de recherche pour trouver des sous-domaines supplémentaires. Allez-y
  et ``marketplace install bing_domain_web`` et ``modules load
  bing_domain_web``.


  ```
  -------------
  websitename.ORG
  -------------
  [*] URL: https://www.bing.com/search?first=0&q=domain%3Awebsitename.org
  [*] Country: None
  [*] Host: internetinitiatives.websitename.org
  [*] Ip_Address: None
  [*] Latitude: None
  [*] Longitude: None
  [*] Notes: None
  [*] Region: None
  [*] --------------------------------------------------
  [*] Country: None
  [*] Host: design.websitename.org
  [*] Ip_Address: None
  [*] Latitude: None
  [*] Longitude: None
  [*] Notes: None
  [*] Region: None
  [*] --------------------------------------------------
  [*] Sleeping to avoid lockout...
  [*] URL:
  https://www.bing.com/search?first=0&q=domain%3Awebsitename.org+-domain%3Ainternetinitiatives.websitename.org+-domain%3Adesign.websitename.org
  [*] Country: None
  [*] Host: www.speakupspeakout.websitename.org
  [*] Ip_Address: None
  [*] Latitude: None
  [*] Longitude: None
  [*] Notes: None
  [*] Region: None
  [*] --------------------------------------------------
  [*] Sleeping to avoid lockout...
  [*] URL:
  https://www.bing.com/search?first=0&q=domain%3Awebsitename.org+-domain%3Ainternetinitiatives.websitename.org+-domain%3Adesign.websitename.org+-domain%3Awww.speakupspeakout.websitename.org

  -------
  SUMMARY
  -------
  [*] 3 total (3 new) hosts found.
  ```

  Maintenant, essayons de deviner les sous-domaines par force brute en utilisant le module brute_hosts
  en utilisant le module brute_hosts. Vous devriez savoir comment l'installer et le charger maintenant. Cela a également retourné
  beaucoup de résultats, ils sont donc tronqués ci-dessous.

  ```
  [recon-ng][websitename][brute_hosts] > run

  -------------
  websitename.ORG
  -------------
  [*] No Wildcard DNS entry found.
  ...
  [*] cn.websitename.org => No record found.
  [*] code.websitename.org => No record found.
  [*] chatserver.websitename.org => No record found.
  [*] cocoa.websitename.org => No record found.
  [*] coldfusion.websitename.org => No record found.
  [*] colombus.websitename.org => No record found.
  [*] columbus.websitename.org => No record found.
  [*] colorado.websitename.org => No record found.
  [*] com.websitename.org => No record found.
  [*] commerce.websitename.org => No record found.
  [*] commerceserver.websitename.org => No record found.
  [*] community.websitename.org => No record found.
  [*] compaq.websitename.org => No record found.
  [*] communigate.websitename.org => No record found.
  [*] compras.websitename.org => No record found.
  [*] conference.websitename.org => (A) 12.172.123.133
  [*] Country: None
  [*] Host: conference.websitename.org
  [*] Ip_Address: 12.172.123.133
  [*] Latitude: None
  [*] Longitude: None
  [*] Notes: None
  [*] Region: None
  [*] --------------------------------------------------
  [*] con.websitename.org => No record found.
  [*] concentrator.websitename.org => No record found.
  [*] conf.websitename.org => No record found.
  [*] confidential.websitename.org => No record found.
  [*] conferencing.websitename.org => No record found.
  [*] connect.websitename.org => No record found.
  [*] consola.websitename.org => No record found.
  [*] connecticut.websitename.org => No record found.
  ...
  -------
  SUMMARY
  -------
  [*] 39 total (35 new) hosts found.

  ```
  Ok c'était plutôt réussi, jetons un coup d'oeil à notre prime :

  ```
  [recon-ng][websitename] > show hosts
  +---------------------------------------------------------------------------------------------------------------------------------+
  | rowid | host | ip_address | region | country | latitude | longitude | notes | module |
  +---------------------------------------------------------------------------------------------------------------------------------+
  | 2 | vps.websitename.org | 96.127.170.121 | | | | | | reverse_resolve |
  | 3 | vps.websitename.org | 96.127.170.252 | | | | | | reverse_resolve |
  | 4 | internetinitiatives.websitename.org | | | | | | | bing_domain_web |
  | 5 | design.websitename.org | | | | | | | bing_domain_web |
  | 6 | www.speakupspeakout.websitename.org | | | | | | | bing_domain_web |
  | 7 | autodiscover.outlook.com | | | | | | | brute_hosts |
  | 8 | autodiscover.websitename.org | | | | | | | brute_hosts |
  | 9 | autod.ha-autod.office.com | | | | | | | brute_hosts |
  | 10 | autod.ms-acdc-autod.office.com | | | | | | | brute_hosts |
  | 11 | autodiscover.websitename.org | 40.101.19.152 | | | | | | brute_hosts |
  | 12 | autodiscover.websitename.org | 40.101.121.8 | | | | | | brute_hosts |
  | 13 | autodiscover.websitename.org | 40.101.80.200 | | | | | | brute_hosts |
  | 14 | autodiscover.websitename.org | 52.97.144.184 | | | | | | brute_hosts |
  | 15 | bw.websitename.org | 70.33.180.230 | | | | | | brute_hosts |
  | 16 | conference.websitename.org | 12.172.123.133 | | | | | | brute_hosts |
  | 17 | websitename.github.com | | | | | | | brute_hosts |
  | 18 | data.websitename.org | | | | | | | brute_hosts |
  | 19 | github.github.io | | | | | | | brute_hosts |
  | 20 | data.websitename.org | 185.199.110.153 | | | | | | brute_hosts |
  | 21 | data.websitename.org | 185.199.111.153 | | | | | | brute_hosts |
  | 22 | data.websitename.org | 185.199.109.153 | | | | | | brute_hosts |
  | 23 | data.websitename.org | 185.199.108.153 | | | | | | brute_hosts |
  | 24 | design.websitename.org | 108.178.27.2 | | | | | | brute_hosts |
  | 25 | courriel.websitename.org | 65.111.246.35 | | | | | | brute_hosts |
  | 26 | erp.websitename.org | 70.33.180.228 | | | | | | brute_hosts |
  | 27 | localhost.websitename.org | 127.0.0.1 | | | | | | brute_hosts |
  | 28 | mail.websitename.org | 65.111.246.35 | | | | | | brute_hosts |
  | 29 | ns1.websitename.org | 71.128.36.8 | | | | | | brute_hosts |
  | 30 | secure.websitename.org | 198.143.166.46 | | | | | | brute_hosts |
  | 31 | sharepoint.websitename.org | 70.33.180.236 | | | | | | brute_hosts |
  | 32 | temp.websitename.org | 184.154.33.5 | | | | | | brute_hosts |
  | 33 | websitename.org | | | | | | | brute_hosts |
  | 34 | test.websitename.org | | | | | | | brute_hosts |
  | 35 | test.websitename.org | 192.124.249.154 | | | | | | brute_hosts |
  | 36 | webmail.websitenamcourriel.org | | | | | | | brute_hosts |
  | 37 | webmail.websitename.org | | | | | | | brute_hosts |
  | 38 | webmail.websitename.org | 70.33.180.234 | | | | | | brute_hosts |
  | 39 | webmail.websitename.org | 70.33.180.233 | | | | | | brute_hosts |
  | 40 | www.websitename.org | | | | | | | brute_hosts |
  | 41 | www.websitename.org | 192.124.249.154 | | | | | | brute_hosts |
  +---------------------------------------------------------------------------------------------------------------------------------+
  [*] 40 rows returned

  ```

  **Prochaines étapes**

  Voici quelques suggestions pour les étapes suivantes de la phase de reconnaissance :
  * Résoudre les adresses IP.
  * Exécuter des modules de collecte de données par balayage de port (essayer recon/hosts-ports/binaryedge en utilisant l'API BinaryEdge).
  * Exécuter des modules de collecte de vulnérabilités.
  * Exécuter des modules de collecte de contacts.
  * Mêler les contacts en adresses courriel.
  * Exécuter les modules qui convertissent les adresses courriel en contacts complets.
  * Exécuter des modules de collecte d'informations d'identification.
  De nombreux modules utiles nécessitent l'utilisation d'une clé API d'un service tiers.

  Comme vous pouvez le constater, recon-ng est très puissant lorsqu'il est utilisé de manière efficace avec et
  compréhension des actions rendues disponibles par les différents modules. En
  passant du temps à lire les descriptions des modules (``marketplace info
  <modulename>``), à utiliser l'outil et à comprendre les différents services API,
  vous pourrez maîtriser l'utilisation de cet outil pour votre travail de reconnaissance.

  **Rapports**
  * Exportez les données pour les analyser ou les présenter :
  ```
  [recon-ng][websitename] > marketplace install reporting/csv
  [recon-ng][websitename] > modules load reporting/csv
  [recon-ng][websitename][csv] |
  [recon-ng][websitename][csv] > set TABLE Domains
  TABLE => Domains
  [recon-ng][websitename][csv] > set FILENAME
  /home/computer/.recon-ng/workspaces/websitename/Domains.csv
  FILENAME => /home/computer/.recon-ng/workspaces/websitename/Domains.csv
  [recon-ng][websitename][csv] > run
  [*] 5 records added to
  '/home/computer/.recon-ng/workspaces/websitename/Domains.csv'.
  ```

  **Création de clés API**

  Pour utiliser les modules nécessitant une clé API, vous devez vous inscrire pour obtenir une clé API
  auprès du service spécifié. Ces clés peuvent offrir des plans gratuits ou payants, et
  fonctionnalité peut être limitée sur les plans gratuits.

  Pour ajouter une clé après en avoir obtenu une (voir ci-dessous), obtenez le nom de reconnaissance
  de la clé en tapant ```keys list``` qui vous donnera le nom des clés nécessaires pour les modules que vous avez déjà installés.
  nécessaires pour les modules que vous avez déjà installés. Avec votre nouvelle clé API en
  en main, ajoutez-les avec ```keys add <apiname> <apikey>```, par exemple ```keys
  add bing_api a7b92c729e829f8a7cba4bc```.
  * Clé API Bing (bing_api) -
  * Souscrivez à l'abonnement gratuit à l'API de recherche Bing ici : https://azure.microsoft.com/en-us/try/cognitive-services/?api=search-api-v7
  * Utilisez l'option de compte Azure gratuit
  * La clé API sera disponible sur la page ”Account Keys”.
  * Clé API BuiltWith (builtwith_api) -
  * Créez un compte gratuit ici : https://api.builtwith.com/
  * Connectez-vous à l'application en suivant le même lien.
  * Clé API Google (google_api) -
  * Créez un projet API ici : https://console.developers.google.com/project/
  * La clé API sera disponible dans la console de gestion du projet.
  * Cliquez sur le menu ”APIs & auth”.
  * Cliquez sur le sous-menu ”Credentials” (Credentials)
  * Cliquez sur le bouton ”Create new Key” sous ”Public API Access”.
  * Cliquez sur ”Server Key” (Clé de serveur)
  * Saisissez votre adresse IP actuelle dans la zone de texte.
  * Assurez-vous de la supprimer après utilisation.
  * Clé API IPInfoDB (ipinfodb_api) -
  * NÉCESSITE UNE ADRESSE IP PERMANENTE COMME UN SERVEUR À PARTIR DUQUEL LES DEMANDES D'API SERONT EFFECTUÉES.
  * Nécessite un courriel de domaine personnalisé (il rejette les comptes ”gratuits” comme gmail).
  * Créez un compte gratuit ici : http://www.ipinfodb.com/register.php
  * Connectez-vous à l'application ici.
  * La clé API sera disponible dans l'onglet ”Account” (Compte).
  * Clé API Shodan (shodan_api) -
  * Créez un compte ou connectez-vous à Shodan en utilisant l'une des nombreuses options disponibles ici : https://www.shodan.io/
  * En haut à droite de l'écran, cliquez sur ”My Account” (Mon compte) pour obtenir une clé API.
  * Un compte amélioré est nécessaire pour accéder à la plupart des fonctions de recherche. Le coût actuel est de 50 $ pour un accès à vie. Mettez votre compte à niveau en vous connectant sur https://www.shodan.io et en cliquant sur "Mise à niveau" dans le coin supérieur droit.
  * Clé API de l'application Twitter (twitter_api) et (twitter_secret) -
  * Créez une application ici : https://apps.twitter.com/
  * La clé du consommateur sera disponible sur la page de gestion de l'application.
  * Le secret du consommateur (twitter_secret) sera disponible sur la page de gestion des applications pour l'application créée ci-dessus.
  * Clé API de VirusTotal (virustotal_api)
  * Créez un compte gratuit en cliquant sur le bouton "S'inscrire à la communauté VirusTotal" ici : https://www.virustotal.com/en/documentation/private-api/#.
  * Connectez-vous à l'application et sélectionnez ”My API key” (Ma clé API) dans le menu utilisateur.
  * La clé API sera visible en haut de la page.
  * HaveIBeenPwned (hibp_api)
  * Utilisé pour vérifier si des adresses électroniques, des domaines et des mots de passe ont été trouvés dans des violations de données antérieures.
  * Inscrivez-vous sur https://haveibeenpwned.com/API/Key. L'accès à l'API est actuellement facturé 3,50 $/mois.
  * BinaryEdge (binaryedge_api)
  * Ressources d'analyse de l'Internet (IP, domaines, ports, services).
  * Inscrivez-vous pour un compte gratuit sur https://app.binaryedge.io/sign-up
  * Censys.io (censysio_id) et (censysio_secret)
  * Création d'un compte gratuit sur https://censys.io/register
  * Full Contact (fullcontact_api)
  * S'inscrire sur https://www.fullcontact.com/developer-portal/
  * La clé gratuite comprend 1 000 recherches
  * Namechk (namechk_api)
  * Utilisé pour vérifier si un nom d'utilisateur donné a des comptes sur différentes plateformes.
  * S'inscrire sur https://namechk.com/access
  * Hashes (hashes_api)
  * Utilisé pour vérifier si un hachage de mot de passe a une valeur en clair connue.
  * Inscrivez-vous sur https://www.hashes.org/register.php
  * Obtenez votre clé sur https://www.hashes.org/settings.php
  * IPstack (ipstack_api)
  * Utilisé pour géo-identifier l'emplacement d'une adresse IP
  * Inscrivez-vous pour un compte gratuit sur https://ipstack.com/product
  ___


  ###### Variante : Foca Analyzer

  Exigences :

  - Exécutable FOCA
  - Environnement Windows (virtualisé)
  - Framework .NET

  **Installation de FOCA analyzer**

  - Télécharger sur le [le site web 
  de FOCA](https://www.elevenpaths.com/labstools/foca/index.html#)
  - Installer [.NET Framework](https://www.microsoft.com/net/download/linux)
  - Extraire le fichier zip de FOCA dans un dossier
  - Pour le lancer, allez dans ```foca pro``` puis ```bin``` et sélectionnez l'application FOCA

  **Caractéristiques et fonctionnalités

  Le scanner FOCA dispose d'une multitude de fonctions intéressantes, comme la recherche sur le Web et la recherche DNS.
  exemples. Pour en savoir plus sur les fonctionnalités, visitez le [site Web de FOCA
  site web](https://www.elevenpaths.com/labstools/foca/index.html)

  **Création de votre premier projet:**

  Pour créer un projet dans FOCA, cliquez sur ```Project``` (Projet) dans le menu d'onglet, et sélectionnez
  ```New Project``` (Nouveau projet).

  Il y a quelques éléments à remplir dans FOCA :

  - **Nom du projet:** Nom de votre projet
  - **Domaine web:** le site web de votre cible
  - **Domaines alternatifs:** pour les sous-domaines, et d'autres domaines que votre cible
  possèdent
  - Dossier de sauvegarde des documents:** Sélectionnez un dossier ou créez un dossier pour vos résultats de l'OFAC.
  vos résultats de l'OFAC
  - Date du projet:** Date de votre projet (automatiquement remplie)
  - Notes sur le projet : ** Toutes les notes que vous avez pour ce projet particulier.

  Après avoir rempli les formulaires, sélectionnez le bouton ```Create``` (Créer).

  **Scanner et rechercher:**

  Après avoir enregistré votre projet, vous accédez à la fenêtre principale. Dans le coin supérieur droit
  Dans le coin supérieur droit de votre écran, vous verrez les deux paramètres :

  - **Moteurs de recherche:** moteurs de recherche que vous vouliez utiliser (*Google, Bing,
  Exalead*)
  - **Extensions:** L'extension fait référence aux extensions de fichiers (*doc, docx, xls, xlsx
  etc*) En sélectionnant une extension, celle-ci sera incluse dans l'analyse/recherche.

  Cliquez sur le bouton ```Search All``` (Rechercher tout) situé sous les options ```Extension``` pour lancer l'analyse.
  l'analyse.

  Remarque : FOCA vous donnera un avertissement concernant l'adresse IP de la cible et le propriétaire de la zone réseau.
  Ceci sera ajouté au domaine alternatif.

  **Analyse des documents publics:**

  Les résultats de FOCA dépendent des fichiers/documents téléchargés sur le site web
  qui sont "accessibles au public". Dans certaines situations, une organisation peut
  n'a pas de documents accessibles au public. Si c'est le cas, passez à
  l'activité d'évaluation de Maltego.

  Cependant, si votre scan génère des fichiers/documents scannés, vous pouvez analyser
  et extraire les métadonnées des fichiers/documents identifiés.

  **Downloading Files:**

  Une fois la recherche/le balayage terminé, cliquez avec le bouton droit de la souris sur n'importe quel fichier (REMARQUE : vous pouvez commencer à télécharger les fichiers un par un).
  pouvez commencer à télécharger les fichiers un par un ou tous à la fois en utilisant SHIFT+SELECT.
  vous ne pouvez extraire que les métadonnées des fichiers déjà téléchargés). Si le
  site Web cible contient un grand nombre de fichiers et de documents, vous voudrez peut-être
  télécharger tous les fichiers en une seule fois.

  **Extraction des métadonnées :**

  Après avoir sélectionné un ou plusieurs fichiers qui ont été téléchargés, vous pouvez faire un ```clic droit``` (right-click) et 
  sélectionner ```Télécharger les métadonnées``` (Download Metadata).
  Vous pouvez commencer à analyser les fichiers un par un ou tous à la fois. Pour ce faire,
  commencez par télécharger tous les documents. Ensuite, faites un clic droit, sélectionnez ```Extraire toutes les métadonnées``` (Extract all
  Metadata).
  Après avoir extrait vos métadonnées, vous pouvez maintenant faire un ```clic droit```.
  à nouveau, et sélectionner : ```analyze metadata```. (Il y a un bouton vert qui apparaîtra
  apparaîtra une fois qu'un fichier a été téléchargé et analysé. Il affichera des barres de progression
  barres de progression de téléchargement pour chaque fichier individuel et le temps qu'il prend pour
  téléchargement)

  **Analyse des rapports et des résultats**

  Après avoir téléchargé les documents et extrait les métadonnées, vous pouvez consulter les résultats
  dans le volet de gauche de votre FOCA.
  Dans le volet de gauche, vous verrez les options suivantes :
  - Réseau
  - Domaines
  - Rôles
  - Vulnérabilités
  - Métadonnées
  Sous ```Métadonnées```, vous avez deux sous-menus, ```Documents``` et ```Résumé des métadonnées```.
  L'option "Documents" permet d'afficher les métadonnées récupérées
  par document/fichier. Cependant, sur l'option ``Sommaire des métadonnées``, vous aurez
  les options suivantes :
  - Utilisateur
  - Dossiers
  - Imprimantes
  - Logiciels
  - Courrier électronique
  - Systèmes d'exploitation
  - Mots de passe
  - Serveurs
  Ces informations peuvent ensuite être ajoutées à vos dossiers et être utilisées pour d'autres
  surface d'attaque comme les attaques d'ingénierie sociale.

  ___

  ###### Variante : Maltego

  **C'est quoi Maltego?**

  Selon le site officiel de Maltego, ils définissent Maltego comme :
  ”Un outil interactif d'exploration de données qui rend des graphes dirigés pour l'analyse des liens.
  l'analyse des liens. L'outil est utilisé dans les enquêtes en ligne pour trouver des relations
  entre des éléments d'information provenant de diverses sources situées sur Internet.

  Maltego utilise l'idée des transformations pour automatiser le processus d'interrogation de différentes sources de données.
  différentes sources de données. Ces informations sont ensuite affichées sur un graphique basé sur les nœuds, adapté à l'analyse des liens.
  sur un graphique basé sur les nœuds et adapté à l'analyse des liens.”

  Maltego a plusieurs utilisations différentes :
  - Collecte d'informations et exploration de données
  - Adresses électroniques, alias, noms de domaine, enregistrements DNS, adresses IP.
  - Documents et fichiers
  - Affiliations
  - Investigation et renseignement sur les menaces
  - Enquête sur les attaques ciblées
  - Analyse de fichiers malveillants
  Ce ne sont là que quelques-unes des façons dont vous pouvez utiliser Maltego. Cependant, avec ce guide,
  nous utiliserons Maltego pour la collecte d'informations et l'exploration de données. Les informations
  que nous trouverons seront par la suite utilisées dans les étapes suivantes de
  audit/évaluation de vulnérabilité/test de pénétration.

  Maltego existe également en différentes versions :
  - Maltego XL
  - Maltego Classic
  - Maltego CE (Community Edition)
  Pour cet exercice, nous allons utiliser la version Maltego CE.

  **Enregistrement**

  Maltego est disponible dans la dernière version de Kali Linux. (Voir
  [ici](https://www.kali.org/kali-linux-releases))
  NOTE : Pour exécuter Maltego, vous devez d'abord avoir un compte. Pour vous enregistrer, cliquez
  [ici](https://www.paterva.com/web7/community/community.php). Considérez
  attentivement les implications de cette exigence en matière de sécurité
  en particulier si vous utilisez un compte pour plusieurs audits différents.

  **Démarrer :**

  Avant de poursuivre ce guide, jetons d'abord un coup d'œil aux 3 principaux concepts de Maltego.
  principaux concepts importants de Maltego.
  - L'entité
  Selon Maltego, ”L'entité est représentée comme un nœud sur un graphe et peut être n'importe quoi, comme un nom DNS, une personne, un numéro de téléphone, etc. Le client Maltego est livré avec une vingtaine d'entités destinées à être utilisées dans les enquêtes en ligne, mais vous pouvez également créer vos propres entités personnalisées.”
  - Transformer
  Les transformations sont définies comme "un morceau de code qui transforme une entité en une autre. Pour ce faire, il interroge une source de données et renvoie les résultats sous forme de nouvelles entités sur votre graphique. Les sources de données sont des endroits comme les serveurs DNS, les moteurs de recherche, les réseaux sociaux, les informations WHOIS, etc.
  - Machines
  Dans Maltego, une machine peut ”enchaîner plusieurs transformations pour automatiser des tâches communes ou fastidieuses”.
  **Faire fonctionner Maltego pour la première fois***.

  Pour initialiser Maltego, sur votre Kali Linux, cliquez sur ```Applications``` > ```01 - 
  Collecte d'informations``` > ```Maltego```. Cela vous amènera à l'écran ”Accueil” de l'application Maltego.
  de l'application Maltego et vous montrera une liste des transformations disponibles.
  Transformations. Les transformations sont simplement un ensemble d'activités que vous pouvez exécuter contre
  une cible spécifique. Nous en apprendrons davantage sur les transformations dans les rubriques suivantes.

  **Création d'un nouveau graphique**

  Pour créer un nouveau graphique dans lequel nous pouvons placer notre première tâche, cliquez sur l'icône Maltego
  dans le coin supérieur gauche de votre fenêtre, puis cliquez sur *Nouveau*. Cela va ouvrir un
  écran vide, avec l'onglet intitulé *Nouveau graphique*.

  **Sélection de l'entité Pallete**.

  L'entité Pallete se trouve dans le volet de gauche intitulé ”Entity Pallete”. Ce site
  contient toutes les Entités que vous pouvez utiliser en fonction de l'activité que vous
  allez réaliser. Pour notre exercice, recherchez l'entité ```Domaine```.
  dans la palette. Une fois que vous l'avez trouvée, faites-la glisser et déposez-la sur le graphique vide à la
  à droite. Vous avez maintenant une entité sur votre graphique. Essayez de double-cliquer sur l'entité
  l'entité ```domain``` pour la renommer à votre cible (pour cet exemple, nous pouvons utiliser
  ```paterva.com```)

  **Choisir les transformations**

  Une fois que vous avez édité votre entité, vous pouvez faire un ```clic droit``` pour ouvrir la fenêtre ```Exécuter une ou plusieurs transformations```.
  Vous pouvez voir ici toutes les transformations disponibles que vous pouvez
  utiliser. (En fonction des transformations que vous avez installées)

  Pour cet exercice, cliquez sur le ```+``` sur le côté gauche de ```PATERVA CTAS
  CE```. Cela vous permettra d'utiliser 4 transformateurs :
  - DNS du domaine
  - Détail du propriétaire du domaine
  - Adresses courriel du domaine
  - Fichiers et documents du domaine
  Vous pouvez exécuter chacune de ces transformations individuellement, ou vous pouvez cliquer sur l'icône ```>>``` pour executer ```Toutes les transformations```.

  Une fois que vous aurez cliqué sur cette icône, toutes les transformations seront exécutées sur le domaine "paterva.com".
  Ce résultat graphique inclura :
  - Sous-domaines
  - Adresses courriel
  - Fichiers et documents
  - Adresses IP
  - Géolocalisation
  - Registrants de domaines
  - Numéros de téléphone
  - etc.
  Vous pouvez maintenant rassembler ces résultats et les utiliser pour vos prochaines
  activité de reconnaissance.
recommendations: ''
organization_size_under: 1000
time_required_minutes: 240
---
