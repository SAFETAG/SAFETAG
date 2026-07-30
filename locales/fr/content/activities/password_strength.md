---
title: Force du mot de passe
approaches:
  - Technique
position: 50
authors:
  - SAFETAG
remote_options:
  - Partiel
skills_required:
  - Vérification du mot de passe
skills_trained: []
summary: |
  Cet exercice aide l'auditeur à créer un dictionnaire efficace adapté à une organisation.

  Ce dictionnaire peut alors être utilisé de différentes manières :

  * En utilisant les exemples référencés dans le [Mot de passe WPA
  Cracking](#wpa-password-cracking), l'auditeur peut attaquer les mots de passe wifi faibles, qui présentent un moyen non personnel et non perturbateur de démontrer les problèmes de sécurité des mots de passe. Les mots de passe Wi-Fi faibles sont particulièrement problématiques, car les signaux Wi-Fi sont souvent accessibles en dehors des limites physiques d'un bureau, mais offrent un accès complet au réseau privé.
  * Un auditeur peut montrer ou discuter de sa stratégie de personnalisation préférée et des outils (comme JtR) qui "mutent" automatiquement les mots de passe avec des chiffres, des majuscules, etc., pour démontrer la puissance d'un ordinateur pour contourner rapidement les "astuces" courantes
  * Un auditeur peut également utiliser une "enquête" sur les mots de passe pour comprendre les pratiques en matière de mots de passe au sein de l'organisation.
overview: |
  * Le cas échéant, testez les fichiers de mots de passe découverts, la force du mot de passe du réseau sans fil ou discutez de la façon dont les adversaires attaquent les mots de passe
materials_needed: |
  * Pour les attaques basées sur un mot de passe WPA (les plus courantes), un dictionnaire **déjà préparé** de mots à utiliser pour attaquer le mot de passe sera nécessaire.
  * L'activité Level Up, [Password Reverse Race](https://www.level-up.cc/leading-trainings/training-curriculum/activity/password-reverse-race) fournit une activité de personnel.
considerations: |
  * Informez-vous des lois locales pertinentes
  * N'attaquez pas les individus d'une organisation en utilisant ceci, concentrez-vous sur les mots de passe partagés (tels que le wifi)
  * Opérez toujours avec un consentement clair basé sur une pleine compréhension
walk_through: |
  Ce composant fournit des ressources et des recommandations sur le craquage des mots de passe - à la fois la création de dictionnaires et de règles pour modifier ces dictionnaires, ainsi que certaines implémentations de base. Il s'agit d'une compétence dangereuse (et dans de nombreux cas, illégale) à utiliser, et devrait être davantage un guide pour les auditeurs sur les mythes de sécurité des mots de passe qui ne fonctionnent pas contre les logiciels modernes de piratage de mots de passe, et à utiliser uniquement avec permission et uniquement dans des cas très spécifiques. situations comme une démonstration de la puissance d'un ordinateur portable même commun contre les faibles
  mots de passe.
  * Télécharger des listes de mots de base
  * Besoins de dictionnaire de recherche
  * Créer une liste de mots personnalisée
  * Construire une ou plusieurs listes de base
  * Attaquer un hachage de mot de passe en utilisant des méthodes de plus en plus chronophages
  Cet ensemble de compétences, ainsi qu'une démonstration contre les comptes non invasifs, ouvre la voie à une discussion avec le personnel sur la sécurité des mots de passe. Voir [Level Up](https://www.level-up.cc/leading-trainings/training-curriculum/secure-passwords) pour d'autres activités et exercices autour des mots de passe.

  Principalement destiné à être utilisé dans le composant d'accès au réseau, la création d'un dictionnaire de mots de passe, la compréhension des moyens de le faire muter automatiquement et de l'exécuter sur des mots de passe est une compétence utile à posséder et à utiliser pour expliquer pourquoi les mots de passe simples ne sont pas sécurisés. Cette [Ars Technica
  article](http://arstechnica.com/security/2013/10/how-the-bible-and-youtube-are-fueling-the-next-frontier-of-password-cracking/) donne un bon aperçu de la chemin pour lutter contre le craquage itératif de mot de passe en utilisant une variété d'outils pour atteindre différents objectifs.

  Ces instructions utilisent un petit ensemble d'outils de craquage de mot de passe, mais beaucoup sont possibles. S'il existe des outils avec lesquels vous êtes plus familier ou à l'aise, ceux-ci ne sont en aucun cas nécessaires. Les seules contraintes sont d'être respectueux et responsable, ainsi que de rester concentré sur les objectifs globaux et de ne pas s'enliser.

  Une bonne liste de mots avec quelques ajustements a tendance à casser la plupart des mots de passe. L'utilisation d'une collection de tous les mots anglais, tous les mots de la langue de l'organisation auditée, ainsi qu'une combinaison de tous ces mots, ainsi que des mots-clés, adresses et années pertinents, a tendance à déchiffrer la plupart des mots de passe wifi dans un délai raisonnable.

  Une approche qui commence par des attaques rapides, mais souvent fructueuses, jusqu'à des attaques de plus en plus complexes (et chronophages) est la plus gratifiante. Cependant, après une heure ou deux de piratage de mot de passe, le temps passé au bureau sur d'autres activités est plus précieux, alors admettez votre défaite et passez à autre chose. Consultez la section Recommandations pour des points de discussion sur les niveaux de craquage de mot de passe qui existent dans le monde. Vous pouvez travailler sur les mots de passe hors ligne/du jour au lendemain/post-audit pour l'exhaustivité du rapport.

  Voici une suggestion de chemin à suivre avec des outils suggérés pour vous aider. Vous pouvez essayer les premières étapes de l'approche par mots clés ciblés et de l'approche par dictionnaire avant de passer aux mutations plus complexes vers la fin de chaque chemin.

  * Mots clés ciblés
  * Commencez par une simple combinaison de mots-clés pertinents sur le plan organisationnel (en utilisant l'attaque combinatrice de hashcat, en combinant la liste de mots-clés de votre organisation avec elle-même)
  * Ajouter des nombres/années (simple scripting, hashcat, JtR)
  * Ajoutez d'autres mutateurs comme 1337 remplacements, des astuces de capitalisation (John)
  * Attaque de dictionnaire de langue (simple scripting, hashcat)
  * Exécutez une série d'attaques de mots du dictionnaire :
  * Une simple attaque par dictionnaire de langue
  * Ajouter des nombres/années (simple scripting, hashcat, JtR)
  * Ajoutez les mots-clés de l'organisation (une combinaison complète crée une liste massive, il est recommandé de commencer par 1:1)
  * Essayez d'autres combinaisons du dictionnaire, des mots-clés, des années
  * Ajoutez d'autres mutateurs comme 1337 remplacements, des astuces de capitalisation (John)
  * Brute forcing (ne vous embêtez pas avec cela sur place)
  * Modes incrémentiels de John, limités par types
  * L'attaque par force brute brute de Crunch (très, très chronophage - une perte de temps totale sans GPU)

  **Recherche et création de dictionnaires**

  **Avant d'arriver sur place**, il est important que vos outils de craquage de mot de passe soient téléchargés et que les dictionnaires pertinents soient prêts à l'emploi, car votre principale démonstration et utilisation de ces outils consiste à accéder au réseau de l'organisation. L'efficacité de cette démonstration est drastiquement réduite si vous avez déjà dû demander le mot de passe pour vous connecter à Internet et mettre à jour vos dictionnaires, outils, etc. Certains de ces fichiers (en particulier les dictionnaires de mots de passe volumineux) peuvent être assez volumineux, il n'est donc pas recommandé de les télécharger dans le pays.

  De nombreux sites de dictionnaires de mots de passe, tels que
  [SkullSecurity](https://wiki.skullsecurity.org/Passwords) , maintenez les dictionnaires de base dans plusieurs langues. Si votre langue cible n'est pas disponible,
  certains travaux rapides sur les expressions régulières peuvent transformer des dictionnaires correcteurs orthographiques (tels que ceux utilisés par
  [LibreOffice](http://extensions.libreoffice.org/extension-center?getCategories=Dictionary)
  en listes de mots utiles. Il est généralement utile de toujours tester avec l'anglais en plus de la langue cible.

  [CloudCracker](https://www.cloudcracker.com/dictionaries.html) et
  [OpenWall](http://www.openwall.com/wordlists/) propose, moyennant des frais, des dictionnaires de mots de passe bien testés.

  **Génération de mots-clés** De plus, créez un dictionnaire personnalisé avec des mots liés au sujet tel que révélé dans la recherche d'évaluation à distance :
  nom de l'organisation, adresse postale, numéro de téléphone, domaine de messagerie, nom du réseau sans fil, etc. 1992, certains ajouts au dictionnaire contextuel seraient :

  ```
  exempleorg
  Exemple
  exa
  ample
  org
  123
  central
  fédéral
  district
  payszstan
  Humain
  droits
  journaliste
  journalisme
  1992
  92
  ```

  Ajoutez également des fragments de mot de passe communs : qwerty, 1234/5/6/7/8 et, sur la base de l'expérience sur le terrain, les dates à quatre chiffres remontent à l'année 2001 (plus l'ajout de l'année de fondation de l'organisation). Il est également utile de voir quel système de calendrier est utilisé sur le site de votre organisation, car certaines cultures [n'utilisent pas les années grégoriennes](https://en.wikipedia.org/wiki/Calendar#Calendars_in_use).
  Il est assez étonnant de constater à quelle fréquence une année récente fera partie d'un mot de passe Wi-Fi -- cette présentation aborde de nombreux modèles courants de mots de passe :
  [https://www.owasp.org/images/a/af/2011-Supercharged-Slides-Redman-OWASP-Feb.pdf](https://www.owasp.org/images/a/af/2011- Supercharged-Slides-Redman-OWASP-Feb.pdf)

  **Étapes supplémentaires facultatives**

  **Utilisez [CeWL](http://digi.ninja/projects/cewl.php) pour explorer les propriétés Web de l'organisation** afin de générer des phrases supplémentaires. Cette liste devra être révisée, car une partie du contenu généré n'est pas très utile, mais peut être utile si le site n'est pas dans une langue que l'auditeur lit couramment.

  Pour les mots de passe autres que WPA, des stratégies ou des modèles spécifiques peuvent aider à cibler davantage votre dictionnaire de mots de passe. [PACK, ou analyse et craquage de mots de passe
  Toolkit] (https://github.com/iphelix/PACK) est une collection d'utilitaires
  développé pour faciliter l'analyse des listes de mots de passe afin d'améliorer le craquage des mots de passe grâce à la détection de modèles de masques, de règles, de jeux de caractères et d'autres caractéristiques de mot de passe. La boîte à outils génère des fichiers d'entrée valides pour la famille de craqueurs de mots de passe Hashcat. " PACK est particulièrement utile pour les grands ensembles de mots de passe, où il peut détecter des modèles dans des mots de passe déjà brisés pour aider à créer de nouvelles règles. Les deux outils de piratage de mots de passe répertoriés ici sont puissants et ont des capacités légèrement différentes. L'auditeur doit choisir celui qu'il préfère et/ou celui qui possède les caractéristiques qu'il souhaite pour ce travail.

  **Construisez des listes de mots de passe plus complexes avec des scripts et Hashcat** Un moyen rapide de créer une liste de mots de passe plus complexe consiste simplement à doubler la liste (une attaque "combinator"), afin qu'elle inclue une entrée pour chaque paire de ces chaînes :

  Vous pouvez faire une version unidirectionnelle de cette liste simplement, par exemple :

  ```
  $ for foo in `cat pwdlist.txt`; do for bar in `cat pwdlist.txt`; do printf $foo$bar'\n'; done; done > pwdpairs.txt
  $ cat pwdlist.txt >> pwdpairs.txt
  ```

  [Hashcat](http://hashcat.net/oclhashcat/) peut le faire dans une attaque en direct sous son mode "combinateur", et hashcat-utils (caché dans
  /usr/share/hashcat-utils/combinator.bin) le fournit en tant qu'outil autonome.
  Cela fournit une véritable combinaison de la liste, de sorte qu'elle augmente de manière exponentielle la taille de la liste - à utiliser avec prudence ou à utiliser avec un dictionnaire plus grand et un dictionnaire plus petit.

  Par exemple, utilisez cette approche de combinaison sur votre dictionnaire personnalisé (en le combinant avec lui-même, en créant des combinaisons à partir de la liste ci-dessus, telles que example92, journorights, exampleorgrights).


  ```
  $ /usr/share/hashcat-utils/combinator.bin dict.txt dict.txt

  ```

  Hashcat est extrêmement puissant lorsque vous avez des systèmes informatiques de bureau à utiliser, mais dispose de quelques outils de manipulation de listes de mots qui sont utiles malgré tout.

  Plus de références : (http://hashcat.net/wiki/doku.php?id=cracking_wpawpa2 ,
  http://www.darkmoreops.com/2014/08/18/cracking-wpa2-wpa-with-hashcat-kali-linux/)


  **Utilisez la mutation du mot avec John the Ripper (JtR)**
  [JtR](https://github.com/magnumripper/JohnTheRipper/commits/bleeding-jumbo) est un outil puissant que vous pouvez utiliser en combinaison avec des listes de mots existantes, mais il peut également ajouter des substitutions courantes (les personnes utilisant zéro pour la lettre "o"). JtR peut être utilisé pour générer une liste statique de mots de passe pour d'autres programmes, ou il peut être utilisé directement contre une base de données de mots de passe. JtR est un peu faible en combinant des mots dans une liste de mots, vous devez donc appliquer vos personnalisations et tout
  plier avant de passer à JtR.

  Vous pouvez ajouter des "règles" personnalisées pour faciliter ces substitutions - un ensemble de base est inclus avec JtR, mais un ensemble beaucoup plus puissant est ajouté par [KoreLogic]
  (http://contest-2010.korelogic.com/rules.html). KoreLogic fournit également un "fichier chr" de jeu de caractères personnalisé qui prend les données de fréquence de mot de passe à partir de grandes collections de [mots de passe du monde réel pour accélérer le mode force brute de JtR] (http://www.korelogic.com/tools.html). Cette présentation PDF a une bonne
  [présentation du fonctionnement des règles de John et Kore](https://www.owasp.org/images/a/af/2011-Supercharged-Slides-Redman-OWASP-Feb.pdf).
  [LinuxConfig](http://linuxconfig.org/password-cracking-with-john-the-ripper-on-linux)
  Offre une autre bonne procédure pas à pas.

  La version jumbo à la pointe de la technologie combine à la fois les règles intégrées et une version optimisée du [KoreLogic
  règles] (https://github.com/kost/jtr-stuff/tree/master/rules, et
  http://openwall.info/wiki/john/rules pour une description des optimisations).
  [Cette liste de KoreLogic
  Rules](http://contest-2010.korelogic.com/rules.html) fournit de belles
  descriptions de ce que font les règles KoreLogic. Dans saignement-jumbo, vous pouvez supprimer "KoreLogicRules".
  [BackReference](http://backreference.org/2009/10/26/password-recovery-with-john-the-ripper/) fournit de belles descriptions de ce que font les règles de KoreLogic. Dans saignement-jumbo, vous pouvez supprimer "KoreLogicRules".
  [BackReference](http://backreference.org/2009/10/26/password-recovery-with-john-the-ripper/) fournit un excellent exemple d'utilisation des règles.

  Certains ensembles de règles individuels particulièrement utiles sont:
  * AppendYears (ajoute les années, de 1900 à 2019) et AppendCurrentYearSpecial (ajoute 2000-2019 avec ponctuation)
  * AddJustNumbers (ajoute 1-4 chiffres à la fin de tout)
  * l33t (combinaisons leet-speek)
  Il existe des combinaisons intégrées d'ensembles de règles - par exemple, juste --rules exécute la collection interne de règles par défaut de John, et --rules:KoreLogic exécute une collection de règles KoreLogic dans un ordre réfléchi, et --rules:all est utile si vous détestez la vie.

  par exemple. :
  ```
  $ john -w:dictionary.txt --rules:AppendYears --stdout
  ```

  [Création de règles personnalisées](http://www.openwall.com/john/doc/RULES.shtml)


  **PROTIP** Créez un dictionnaire avec juste "blah" et exécutez-y diverses règles pour comprendre le fonctionnement de chaque ensemble de règles ou combinaison. Notez en particulier que chaque règle multiplie la taille du dictionnaire par le nombre de permutations qu'elle introduit. L'exécution de la combinaison d'ensemble de règles KoreLogic sur un dictionnaire **à un mot** crée une liste de 6 327 540 permutations sur ce mot uniquement, l'ajout d'une sortie de colonne est pratique pour un impact visuel supplémentaire.

  ```
  JohnTheRipper/run/john -w=blah.txt --rules:all --stdout |column
  ```

  **Force brute, utilisant John et crunch** Le mode "incrémental" de JtR est essentiellement une attaque par force brute optimisée, il faudra donc très longtemps pour tout sauf les mots de passe les plus courts, ou les mots de passe où vous pouvez limiter l'espace de recherche à un caractère set : "A partir de la version 1.8.0, les modes incrémentiels prédéfinis sont "ASCII" (tous les 95 caractères ASCII imprimables), "LM_ASCII" (à utiliser sur les hachages LM), "Alnum" (tous les 62 caractères alphanumériques), "Alpha " (toutes les 52 lettres),
  "LowerNum" (lettres minuscules plus chiffres, pour un total de 36), "UpperNum"
  (lettres majuscules plus chiffres, pour 36 au total), "LowerSpace" (lettres minuscules plus espace, pour 27 au total), "Lower" (lettres minuscules), "Upper" (lettres majuscules) et "Digits" (chiffres uniquement). Les fichiers .chr fournis incluent des données pour des longueurs allant jusqu'à 13 pour tous ces modes sauf pour "LM_ASCII" (où les parties de mot de passe entrées dans les moitiés de hachage LM sont supposées être tronquées à la longueur 7)
  et "Chiffres" (où le fichier .chr fourni et le mode incrémentiel prédéfini fonctionnent pour des longueurs allant jusqu'à 20). Certains des nombreux fichiers .chr nécessaires à ces modes incrémentiels prédéfinis peuvent ne pas être fournis avec toutes les versions de John the Ripper, étant disponibles en téléchargement séparé."
  (http://www.openwall.com/john/doc/MODES.shtml)

  En dernier recours, vous pouvez essayer une attaque directe par force brute pendant la nuit ou un post-audit pour fournir des détails sur la force de la clé. Crunch est une approche très simple mais approfondie. Avec suffisamment de temps, il cassera un mot de passe, mais ce n'est pas particulièrement rapide, même avec des mots de passe simples. Vous pouvez réduire la portée de cette attaque (et l'accélérer) si vous avez une raison de croire que le mot de passe est entièrement en minuscules, entièrement numérique, etc. Les mots de passe WPA comportent un minimum de 8 caractères, un maximum de 16, et certains routeurs wifi acceptent la ponctuation, mais en pratique, ils ne sont généralement que !@#$. - alors:

  ```
  $ /path/to/crunch 8 16
  abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$!@#$. |
  aircrack-ng -a 2 path/to/capture.pcap -b 00:11:22:33:44:55 -w -
  ```

  Cela dit d'essayer toutes les combinaisons alphanumériques possibles de 8 à 16 caractères. Cela prendra très, très, très longtemps.


  ###### Autres ressources

  **Exemple d'entraînement** Pour vous entraîner sur l'une de ces méthodes, vous pouvez utiliser le fichier wpa-Induction.pcap de
  [Wireshark](http://wiki.wireshark.org/SampleCaptures).

  [https://www.schneier.com/blog/archives/2014/03/choosing_secure_1.html](https://www.schneier.com/blog/archives/2014/03/choosing_secure_1.html)

  [http://zed0.co.uk/crossword/](http://zed0.co.uk/crossword/)

  http://www.instantcheckmate.com/crimewire/is-your-password-really-protecting-you/#lightbox/0/](http://www.instantcheckmate.com/crimewire/is-your-password-really-protecting-you/#lightbox/0/)

  Notez que les systèmes de craquage de mots de passe sont évalués en fonction du nombre de tentatives de mot de passe qu'ils font par seconde. Les ordinateurs portables standard sans cartes graphiques haut de gamme ou toute autre optimisation peuvent deviner 2500 mots de passe/seconde.
  Des ordinateurs de bureau plus puissants peuvent tester plus de cent millions de mots de passe chaque seconde, et avec des cartes graphiques (GPU) qui atteignent des milliards de mots de passe par seconde.
  ([https://en.wikipedia.org/wiki/Password_cracking](https://en.wikipedia.org/wiki/Password_cracking)).

  Ce site Web a une bonne explication sur la façon dont l'amélioration de la complexité d'un mot de passe affecte la facilité avec laquelle il est brisé :
  [http://www.lockdown.co.uk/?pg=combi](http://www.lockdown.co.uk/?pg=combi),
  mais utilise des numéros très obsolètes - considérez un ordinateur portable de base capable de produire des attaques de "classe E" et un ordinateur de bureau, "classe F"

  [http://rumkin.com/tools/password/passchk.php](http://rumkin.com/tools/password/passchk.php)

  [http://cyber-defense.sans.org/blog/downloads/](http://cyber-defense.sans.org/blog/downloads/)
  a une calculatrice enfouie dans le fichier zip "scripts.zip"

  [[http://www.dailymail.co.uk/sciencetech/article-2331984/Think-strong-password-Hackers-crack-16-character-passwords-hour.html](http://www.dailymail.co.uk/sciencetech/article-2331984/Think-strong-password-Hackers-crack-16-character-passwords-hour.html)

  [https://www.grc.com/haystack.htm](https://www.grc.com/haystack.htm)

  [https://www.owasp.org/images/a/af/2011-Supercharged-Slides-Redman-OWASP-Feb.pdf](https://www.owasp.org/images/a/af/2011-Supercharged-Slides-Redman-OWASP-Feb.pdf)

  [http://www.nytimes.com/2014/11/19/magazine/the-secret-life-of-passwords.html?_r=1](http://www.nytimes.com/2014/11/19/magazine/the-secret-life-of-passwords.html?_r=1)
recommendations: |
  Tout mot de passe important doit être suffisamment long et suffisamment complexe pour empêcher à la fois les attaques par dictionnaire standard et les "attaques par force brute" dans lesquelles des grappes d'ordinateurs puissants travaillent en parallèle pour tester toutes les combinaisons de caractères possibles. (Nous recommandons 12 caractères complètement aléatoires ou plus ou une phrase de passe qui contient au moins cinq mots relativement rares.) La clé ne doit pas contenir de « phrases » courantes, en particulier de la littérature bien connue.
  comme Shakespeare ou des textes religieux, mais ne doivent pas non plus inclure de séquences de chiffres ou de phrases, en particulier si elles sont liées à l'organisation, à ses employés ou à son travail, et utiliser des mots de passe uniques pour chaque compte.

  Parce que cela devient difficile sur le plan logistique, les **gestionnaires de mots de passe** tels que KeePassX ou d'autres systèmes sont recommandés.

  Spécifiquement pour les **mots de passe sans fil**, le choix d'une clé WPA forte est l'une des étapes les plus importantes pour défendre le périmètre du réseau d'une organisation contre un adversaire ayant la possibilité de passer du temps à proximité des bureaux. Par extension, l'atténuation de cette vulnérabilité est essentielle à la protection des employés et des partenaires (et des données confidentielles) contre le type d'exposition persistante qui finit par faire tomber même les systèmes d'information les mieux sécurisés.

  Étant donné que les clés partagées finissent inévitablement par être écrites sur des tableaux blancs, données aux visiteurs du bureau et envoyées par courriel aux partenaires, la clé WPA doit également être modifiée périodiquement. Cela n'a pas à se produire fréquemment, mais rien de moins que trois ou quatre fois par an peut être dangereux.

  À mesure que le WPA3 devient plus largement adopté, la mise à niveau de votre réseau vers l'authentification WPA3 fournira une sécurité substantielle contre les attaques par mot de passe sans fil.
organization_size_under: 100
time_required_minutes: 120
---
