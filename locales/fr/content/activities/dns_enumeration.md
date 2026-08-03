---
title: Énumération DNS
approaches:
  - Technique
  - Recherche
position: 50
authors:
  - SAFETAG
remote_options:
  - Complète
skills_required:
  - DNS
  - OSINT
skills_trained: []
summary: |
  DNS est l'abréviation de Domain Name Service. En résumé, il s'agit de traduire
  le nom des hôtes/ordinateurs en adresses IP. Il fournit un moyen de connaître l'adresse IP d'une machine donnée sur Internet, avec l'URL ou le domaine correspondant. On peut le considérer comme un annuaire téléphonique de l'Internet.

  L'énumération des DNS est l'une des premières étapes de l'évaluation et de l'audit de la vulnérabilité. C'est une étape qui vous permettra de découvrir d'autres
  cibles potentielles. À l'issue de cette étape d'évaluation, vous pourrez trouver
  des problèmes tels que des fuites d'informations causées par des paramètres par défaut et des mauvaise configuration du serveur. En plus de cela, vous pouvez également avoir un champ plus large de cibles, comme les adresses IP des serveurs internes, les blocs réseau de l'entreprise et les noms de domaine/sous-domaine.

  L'énumération DNS peut être accomplie avec un nombre différent d'outils et d'approches. Ce guide aborde certaines de ces approches et les outils nécessaires pour réaliser chacune de ces activités. Vous pouvez effectuer l'énumération DNS de manière passive ou active, en fonction de vos besoins opérationnels en matière de sécurité.

  **L'approche passive**, ou indirecte, fait référence au processus d'énumération qui n'envoie aucun trafic ou paquet depuis votre ordinateur, directement vers votre
  cible. Cela peut être fait en utilisant des outils tiers tels que des outils en ligne et des scanners basés sur le cloud.

  L'approche **Active**, ou "directe", consiste à envoyer des requêtes DNS et des tests d'énumération directement à la cible. Il faut considérer que du trafic est envoyé sur la cible ce qui peut laisser des traces ou des journaux de trafic provenant de votre IP source. Les techniques actives comprennent le transfert de zone, la recherche inversée, le forçage brutal du domaine et de l'hôte, l'enregistrement standard et la vérification de l'identité (wildcard, SOA, MX, A, TXT, etc.), Cache snooping, et Zone Walking
overview: |
  * Using a variety of passive and active techniques, uncover as many
  domains/subdomains linked to the target organization as possible.
  * Use these to advance other aspects of your work to discover additional
  credentials and potential vulnerable or outdated services.

  **Expected Outputs**

  * A fuller map of the organization's online presence, including additional
  (potentially forgotten) hosts/services connected with the organization.
  * Domains + IP addresses
  * Subdomains + IP addresses
  * MX Records + IP addresses
  * DNSKeys
  * SOA records, DNS records and registrar
  * Domains hosted within the same IP address
  * DNS history Records
  * Domain Reputation (Web of Trust)
  * Some of this information may already give you an idea of how your target's
  infrastructure setup. For example, you may see if the target domain goes into
  a CDN (Content Delivery Network) or sometimes DDoS mitigations services by
  finding out it's NS records. You can also identify if the target's MX records
  are behind a DLP (Data Leakage Prevention) systems.
  * The output of your DNS enumeration might contain "more" information about
  the client organization (internal DNS records, hostnames, router names,
  additional IP addresses). This data is sometimes caused by misconfigured DNS
  or default service configurations, so look for misleading and false-positive
  results.
materials_needed: |
  * Système ou machine virtuelle exécutant [Kali Linux.](https://www.kali.org/downloads/)
  * Connexion Internet (et éventuellement une configuration VPN ou tor)
  * Domaine(s) cible(s)
  * Outil de prise de notes sécurisé
considerations: |
  * Ces techniques peuvent révéler votre intérêt pour l'organisation cible à n'importe qui sur votre chemin de réseau, alors pensez à utiliser un VPN ou un tor pour effectuer des recherches.
  * Lorsque vous effectuez une "énumération active", il est toujours bon de demander à
  liste blanche de vos adresses IP chaque fois que vous effectuez des évaluations. Cela exclut l'idée que les attaquants aient pu éviter de fuir. La mise en liste blanche de vos adresses IP supprime également les faux rapports positifs et les résultats inexacts
  * Il est important que nous vérifiions que nous avons le(s) domaine(s) cible(s) correct(s) avant de procéder à l'un des exercices d'analyse/audit/évaluation dans le cadre SAFETAG. La dernière chose que nous ne voudrions pas qu'il se produise est de scanner et d'énumérer la cible qui est hors de portée !)
walk_through: |
  La flexibilité d'avoir plusieurs options dans l'exécution d'une activité d'énumération DNS est la clé d'une énumération réussie. En pratique, la comparaison des résultats peut aider à garantir que les informations que nous recueillons sont exactes.

  ** Une note sur les services de protection DDoS ** Votre enquête peut être bloquée par des services de protection DDoS qui fonctionnent au niveau DNS tels que Deflect ou CloudFlare. ["CloudFlair"](https://blog.christophetd.fr/bypassing-cloudflare-using-internet-wide-scan-data/) fournit certaines options dans ce cas, tout comme le suivi de l'historique DNS et IP pour voir si seuls les enregistrements DNS ont changé.

  Une façon d'identifier si un site Web utilise ou non un service DDoS est d'enquêter sur son enregistrement DNS. Étant donné que nous travaillons avec des organisations qui n'ont peut-être pas suffisamment de fonds pour s'abonner à un service d'atténuation DNS, vous les verrez souvent ne pas utiliser la protection DDoS.

  - [Into DNS](https://intodns.com)

  Recherche de ```Noms de serveur``` ou de votre ```A Record``` qui pointe vers un service DDoS CDN tiers particulier, comme dans les exemples suivants :

   - brianna.ns.cloudflare.com (Cloudflare) 
  - toby.ns.cloudflare.com (Cloudflare) 
  - 4k9o.x.incapdns.net (Incapsula)
  - e3396.dscx.akamaiedge.net (Akama)

  Si ceux-ci apparaissent sur votre résultat, il y a une forte probabilité que votre cible soit derrière le service DDoS



  **Outils d'énumération DNS :**

  | Outils | Descriptif | Type | Techniques |
  |--------|----------------------------------------- -------------|------|------|
  |[Robtex](https://www.robtex.com/)|Collecte des informations publiques sur les numéros IP, les noms de domaine, les noms d'hôte, les systèmes autonomes, les routes, etc., puis indexe les données dans une grande base de données et fournit un accès gratuit à cela données | En ligne | Passif |
  |[DNSdumpster](https://dnsdumpster.com/)|Outil de recherche de domaine gratuit qui peut découvrir les hôtes liés à un domaine, résultats avec des bannières pour HTTP, FTP, SSH et Telnet |En ligne | Passif |
  |[CentralOps-Domain Dossier](https://centralops.net/co/)|Enquête sur les domaines et les adresses IP. Rassemble les informations du titulaire, les enregistrements DNS, les enregistrements Whois du réseau et du domaine, les analyses de services et les traceroutes | En ligne | Passif |
  |[Analyseur DNSSEC](http://dnssec-debugger.verisignlabs.com/)| Vérifie la gestion des clés DNSSEC et les enregistrements de configuration | En ligne | Passif |
  |[Recon-ng](https://bitbucket.org/LaNMaSteR53/recon-ng)| Framework de reconnaissance Web automatisé écrit en Python. Complet avec des modules indépendants, une interaction avec la base de données, des fonctions de commodité intégrées, une aide interactive et la complétion des commandes. | Scénario | Actif |
  [IntoDNS](https://intodns.com/) | IntoDNS vérifie la santé et la configuration de votre DNS et fournit également un rapport sur les enregistrements MX. Fournit des suggestions pour corriger et améliorer les résultats | En ligne | Passif |
  |[YougetSignal](https://www.yougetsignal.com/tools/web-sites-on-web-server/)| Vous aide à trouver d'autres sites hébergés sur une adresse IP particulière, en vérifiant si la cible utilise un service d'hébergement partagé | En ligne | Passif |
  |[DNSRecon](https://github.com/darkoperator/dnsrecon)|Un script Python écrit par Carlos Perez pour effectuer une reconnaissance DNS. Il peut énumérer les enregistrements DNS généraux, effectuer des transferts de zone, effectuer des recherches inversées et des sous-domaines de force brute, entre autres fonctions. Il effectuera même une analyse Google, automatisant le processus dont nous avons parlé dans la section Utilisation de Google pour rechercher des sous-domaines. | Scénario | Actif |
  |[DNSenum](https://github.com/fwaeytens/dnsenum)|script perl multithread pour énumérer les informations DNS d'un domaine et découvrir les blocs IP non contigus.|Script|En ligne|
  tools:
    - Outils tiers et en ligne
    - DNSrecon
    - DNSenum
    - Transfert de zone DNS
    - Enregistrements MX
tools:
  - Third Party and Online Tools
  - DNSrecon
  - DNSenum
  - DNS Zone Transfer
  - MX Records
recommendations: |
  Le DNS est par nature une information publique, mais nous pouvons encore prendre de nombreuses mesures poursécuriser toutes les parties de celui-ci qui révèlent des informations plus privées. Fortinet
  fournit un ensemble de bonnes recommandations :

  https://blog.fortinet.com/2016/03/10/10-simple-ways-to-mitigate-dns-based-ddos-attacks

  Si le site n'est pas protégé contre les attaques DDoS, il existe plusieurs ressourcesqui fournissent non seulement une protection DDoS mais une sécurité supplémentaire contre
  attaques, telles que :
  - [Deflect.ca](https://deflect.ca)
  - [Projet Galileo par Cloudflare](https://www.cloudflare.com/galileo)
  - [Project Shield de Google](https://projectshield.withgoogle.com/public)
  Si un transfert de zone a réussi (la plupart des fournisseurs limitent automatiquement les transferts de zone anonymes), vous devrez travailler avec leur équipe d'assistance pour empêcher cela, ou passer à un autre fournisseur DNS. Si votre organisationmaintient ses propres serveurs DNS, l'administrateur de ces serveurs doit vérifier
  les politiques de transfert de zone pour empêcher les transferts anonymes.
organization_size_under: 1000
time_required_minutes: 45
---
