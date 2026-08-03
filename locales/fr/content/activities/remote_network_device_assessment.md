---
title: Évaluation à distance du réseau et des appareils utilisateur
approaches:
  - Technique
position: 50
authors:
  - SAFETAG
remote_options:
  - avec assistance
skills_required:
  - Mise en réseau
skills_trained: []
summary: |
  Ce composant permet à l'auditeur de travailler à distance pour identifier les appareils sur le réseau d'un hôte, les services utilisés par ces appareils et toutes les protections en place, ainsi que pour évaluer la sécurité des appareils individuels sur le réseau.
overview: |
  Il peut y avoir plusieurs approches pour cet exercice, selon le scénario.

  ###### Scénario 0

  L'organisation a contacté l'auditeur par l'intermédiaire d'un intermédiaire qui connaît bien la technologie et peut suivre les instructions SAFETAG, ou l'organisation compte un technicien parmi ses employés.

  Ce scénario est comparable à une situation où l'auditeur est sur place. Dans ce cas, l'auditeur demandera à l'intermédiaire ou à la personne technique de l'organisation de suivre les instructions de l'exercice sur [Network mapping](#network-mapping) et sur [User device
  évaluation](#évaluation-appareil-utilisateur).

  ###### Scénario 1

  L'organisation compte parmi ses employés quelqu'un qui est prêt à suivre des instructions simples, notamment ouvrir un terminal et coller des commandes que nous lui fournirons.

  Dans ce scénario, l'auditeur enverra des instructions simples à l'audité, afin de pouvoir accéder au réseau de l'organisation via un tunnel SSH inversé et évaluer le LAN et les appareils individuels à partir de là. Pour exécuter l'ordinateur utilisé au sein du réseau de l'organisation pour établir le tunnel, un système UNIX est nécessaire. Ce sera une distribution live Linux ou un ordinateur Mac.

  ###### Scénario 2

  Dans ce scénario, personne dans l'organisation n'est prêt à appliquer des
  des instructions. Au lieu de se fier à une personne, l'auditeur s'appuiera sur
  tunnellisation dans un appareil situé dans l'espace physique de l'audité. Ceci peut être fait de deux façons:

  1. Bureau à distance ou VPN distant dans le réseau ciblé. Remote Desktop crée un tunnel vers une machine ciblée qui vit sur le même réseau LAN ciblé sur lequel vous souhaitez analyser le réseau et effectuer l'évaluation de l'appareil ; l'auditeur contrôle la machine à distance et l'utilise comme machine d'audit.
  2. VPN à un serveur VPN de confiance. Dans ce cas, l'audité connectera l'une de ses machines à un serveur VPN de confiance, et l'auditeur se connectera au même serveur VPN, permettant aux deux réseaux locaux de l'audité et de l'auditeur de se connecter.
materials_needed: |
  ###### Scénario 1

  - Une machine accessible globalement via ssh. Il peut s'agir d'une machine ou d'un serveur virtuel
  - Une machine GNULinux côté auditeur
  - Une machine exécutant Linux ou Mac avec ssh du côté de l'audité. Si l'organisation auditée ne possède que des ordinateurs Windows, elle peut utiliser une distribution en direct, par exemple [Ubuntu
  En direct] (https://tutorials.ubuntu.com/tutorial/try-ubuntu-before-you-install?_ga=2.100677957.597084418.1503414810-670812192.1503414810#0).
  - Si vous utilisez une distribution Linux en direct, vous devrez probablement guider l'audité dans la modification des paramètres du BIOS pour permettre à l'ordinateur de démarrer à partir d'une clé USB.
  - Si nous utilisons sshuttle, `net-tools` doit être installé du côté de l'audité.
  Ce paquet est installé par défaut dans Ubuntu.

  ###### Scénario 2

  **En cas de bureau à distance :**

  - Clean PC connecté au réseau LAN local de l'audité
  - Connexion Internet stable et rapide aux deux extrémités
  - Client TeamViewer installé sur la machine propre locale. ([Télécommande Windows
  bureau] (https://support.microsoft.com/en-us/help/17463/windows-7-connect-to-another-computer-remote-desktop-connection)
  peut également être utilisé.)
  - TeamViewer installé sur la machine de l'auditeur


  **En cas d'utilisation d'un serveur VPN de confiance intermédiaire :**

  - Un PC connecté au réseau LAN local de l'audité
  - Connexion Internet stable et rapide aux deux extrémités
  - Client OpenVPN installé sur la machine propre locale
  - Client OpenVPN installé sur la machine de l'auditeur
  - Un serveur OpenVPN de confiance

  **Applications à utiliser** :
  [TightVNC](http://www.tightvnc.com/)
  [TeamViewer](https://www.teamviewer.com/fr/)
  [Télécommande Windows
  bureau] (https://support.microsoft.com/en-us/help/17463/windows-7-connect-to-another-computer-remote-desktop-connection)
considerations: |
  ###### Scénario 1

  - Assurez-vous que l'audité télécharge l'image Linux via TLS et guidez-le tout au long du processus de vérification (les instructions pour Ubuntu peuvent être trouvées [ici](https://tutorials.ubuntu.com/tutorial/tutorial-how-to-verify-ubuntu#0)).
  - Lors du démarrage d'une distribution Linux en direct, assurez-vous que l'audité dispose d'un canal de communication sécurisé avec vous sur un appareil différent de celui qui sera redémarré - par exemple via Signal sur un téléphone Android ou sur un autre ordinateur.
  - Avertir l'audité qu'il ne doit pas appuyer sur "installer" lorsque la distribution live Linux a démarré, sinon son disque dur sera formaté et il perdra ses données.
  - Assurez-vous qu'un canal de communication sécurisé est en place pour envoyer les commandes ssh à l'audité.
  - Le serveur utilisé pour la connexion intermédiaire doit être mis à jour et sécurisé, ou mis à jour et éphémère.
  - Assurez-vous de supprimer/nettoyer toutes les connexions persistantes une fois que vous avez terminé l'audit.
walk_through: |
  ###### Scénario 0
  Demandez à l'intermédiaire ou au technicien de l'organisation de suivre les instructions de l'exercice sur [Réseau
  mapping](../../methods/network_mapping) et sur [User device
  évaluation] (../../methods/user_device_assessment).

  ###### Scénario 1

  **Légende**

  - S : Server - une machine accessible globalement via ssh. Il peut s'agir d'une machine ou d'un serveur virtuel
  - A : Machine GNULinux de l'auditeur
  - C : une machine exécutant GNULinux ou Mac avec ssh du côté de l'audité

  Demandez à l'audité d'initier une connexion au serveur (S) et de configurer un serveur ssh inversé :

  Supposons que nous ayons un serveur nommé safetag-audit.org (S) et des noms d'utilisateur pour chaque audité appelés auditee1, auditee2, etc.

  - sur la machine de l'audité (C) ; l'audité devra être invité à exécuter les commandes suivantes :

  démarrage du service sshd
  ssh -R 2200:localhost:22 auditee1@safetag-audit.org

  (l'auditeur doit fournir à l'audité un mot de passe pour l'invite de mot de passe qui apparaîtra lorsque cette commande est entrée.)
  cela permettra à toute connexion au port 2200 sur safetag-audit.org (S) d'être envoyée au port 22 sur la machine de l'audité (C). Le port distant est un port à numéro élevé arbitraire (> 1023) ; une pratique peut être établie pour attribuer un numéro à chaque emplacement et machine.

  **Exemple**:
  l'audité sur la machine du site 0 pourrait être chargé d'exécuter :

  ssh -R 2200:localhost:22 auditee0@safetag-audit.org

  cela permettra à l'audité de se connecter au port 2200 à partir de safetag-audit.org (S) et de faire suivre le trafic au port 22 sur la machine de l'audité (C).

  l'audité sur la machine du site 1 exécutera :

  ssh -R 2210:localhost:22 auditee1@safetag-audit.org

  **Important** : assurez-vous que les ports que vous utilisez n'entrent pas en conflit avec les ports d'autres services ou audités, c'est-à-dire n'utilisez pas un numéro de port deux fois.

  Une fois cette session ouverte, l'auditeur peut accéder à la machine de l'audité (C).
  À ce stade, il existe quelques options puissantes :

  * simplement ssh de S à C via le tunnel (port défini dans le tunnel inverse sur l'interface localhost du serveur) ;

  **Exemple**:

  pour se connecter au site 0 :

  ssh clientUser@localhost -p 2200

  avec le site 1 dans l'exemple précédent, le port serait 2210 (ou tout ce que l'audité a utilisé dans sa commande).
  * Créez une connexion de type VPN au site :
  - créer un tunnel aller de A à S qui est "pipé" dans le tunnel retour :

  ssh -L 2200:localhost:2200 user@safetag-audit.org

  vous avez maintenant un tunnel de votre localhost:2200 à safetag-audit.org:2200, qui à son tour a un tunnel de safetag-audit.org:2200 à la machine cliente sur le port 22.
  - une fois que vous avez cela, vous pouvez utiliser [sshuttle](https://sshuttle.readthedocs.io) (doit être installé, il se trouve dans la plupart des référentiels Linux standard) sur la machine de l'auditeur (A) pour accéder à des ressources supplémentaires dans l'audité réseau (tant qu'ils ne sont pas ICMP) directement à partir de la machine de l'auditeur (A). Ces ressources peuvent inclure des ressources Web (interface Web du routeur par exemple) ou un bureau à distance (pour évaluer les clients Windows ou Mac) ou l'accès aux partages de fichiers sur le réseau de l'audité, etc.
  pour ce faire, vous devez utiliser les informations d'identification du client via le tunnel que vous venez de créer et fournir le sous-réseau client pour acheminer correctement le trafic via ce "VPN":

  sshuttle -r utilisateur@localhost:2200 192.168.1.0/24

  une fois ce tunnel créé, vous devriez pouvoir accéder à n'importe quelle ressource du réseau distant par son IP et son port (par exemple, via le navigateur pour http(s))

  Une chose supplémentaire que l'on pourrait vouloir faire est de rendre la connexion de C à S sans mot de passe et automatique (cela peut être accompli avec des outils ou des scripts facilement disponibles sur Internet).

  ***AVERTISSEMENT*** : Assurez-vous de supprimer/nettoyer toutes les connexions persistantes une fois que vous avez terminé l'audit.

  Il ne devrait pas y avoir besoin de plusieurs tunnels inverses, car plusieurs tunnels directs peuvent être configurés de S à C si nécessaire (par exemple, VNC ou RDP) ; cela nécessite cependant plusieurs tunnels avant de A à S.

  ###### Scénario 2

  **Légende**:

  - A : machine locale de l'audité ; une machine propre, connectée à Internet via le réseau LAN de l'audité
  - B : Auditeur machine

  Quelqu'un du côté de l'audité préparera la machine A en coordination avec l'auditeur, puis installera [TeamViewer](https://www.teamviewer.com/en/).

  Après cela, et en utilisant une méthode de communication fiable, l'ID et le code d'accès TeamViewer seront envoyés à l'auditeur.

  L'auditeur utilisera l'ID et le code d'accès pour se connecter à la machine et commencer à utiliser la machine A comme machine d'audit.

  Il y a des avantages et des inconvénients à cela :

  **Les inconvénients**:

  1. Vitesse Internet : vous aurez besoin d'une connexion Internet haut débit pour accomplir cette tâche, car l'accès à distance vous transférera le bureau de la machine ciblée afin d'effectuer les tâches.
  2. Interruption de connexion : pendant que vous travaillez à distance, vous pouvez être confronté à des interruptions de connexion pendant votre session, et le redémarrage de l'accès à distance sera un défi car dans la plupart des cas, vous aurez besoin de quelqu'un à l'autre bout pour vous autoriser à vous connecter. la machine.
  3. Limitations physiques : vous êtes toujours physiquement éloigné de la machine, ce qui signifie que vous ne pouvez pas connecter une clé USB pour démarrer à partir de celle-ci ou effectuer toute autre tâche nécessitant que vous soyez à proximité de l'appareil.
  4. L'installation de Kali Linux peut être difficile : il peut être difficile pour une personne non technique de préparer une machine Kali Linux.

  **Avantages**:

  1. Convivialité : TeamViewer est facile à installer et à utiliser. Toute personne ayant des bases
  des connaissances sur la façon d'installer le logiciel peuvent vous aider à préparer la machine d'audit.
  2. Vitesse du réseau : Techniquement, votre machine d'audit est la machine à laquelle vous êtes connecté, qui est physiquement située dans le bureau ciblé et connectée
  au réseau LAN. Cela signifie que vous pourrez exécuter vos tâches d'audit à pleine vitesse.

  **Remarque** : certains logiciels d'assistant à distance fournissent des solutions VPN qui transforment la machine A en serveur VPN et permettent à la machine B de s'y connecter. La tunnellisation vers ce serveur VPN vous permettra de vous connecter au réseau local local, ce qui vous permettra d'utiliser la machine B pour exécuter l'audit.


  ###### Utilisation d'un serveur VPN de confiance intermédiaire

  **Légende**:

  - A : machine locale de l'audité ; une machine propre, connectée à Internet via le réseau LAN de l'audité
  - B : Machine d'audit
  - C : Serveur OpenVPN

  Réseau de l'audité --------- (A) ---------- C ---------- (B) ----------
  Réseau des auditeurs

  L'auditeur s'efforcera de préparer un serveur OpenVPN (C) et de créer 2 profils (Clés et configurations) pour permettre aux machines A et B de se connecter à C.

  Obtenez un VPS auprès de votre fournisseur VPS préféré et de confiance et gardez à l'esprit l'emplacement physique du serveur, puis installez OpenVPN Server en suivant les instructions contenues dans [ce guide sur Ubuntu
  Serveur] (https://help.ubuntu.com/lts/serverguide/openvpn.html).

  La configuration par défaut d'OpenVPN ne permettra pas aux clients (A-B) de se voir sur le réseau. Pour permettre cela, vous devez activer la directive client à client et permettre à vos deux sous-réseaux (audité et auditeur) de voir les réseaux les uns des autres. Pour ce faire, suivez [ces
  instructions] (https://community.openvpn.net/openvpn/wiki/RoutedLans).

  Après avoir terminé l'installation et l'avoir testée, l'auditeur passera l'examen
  .ovpn à la personne sur le site de l'audité via un moyen de confiance, et
  fournissent des instructions sur la façon d'installer et de se connecter au serveur. Après
  reliant A et B à C, l'auditeur pourra commencer l'évaluation du réseau et des appareils à l'autre extrémité.

  **Remarque** : Si le VPN est censuré dans les pays A ou B, ou dans les deux, vous pouvez suivre [ces instructions](https://www.pluggabletransports.info/implement/openvpn/) pour contourner le censure en utilisant des transports enfichables.
recommendations: ''
organization_size_under: 25
time_required_minutes: 120
---
