---
title: La criminalistique numérique et la collecte de preuves
approaches:
  - Technique
position: 50
authors:
  - Anonyme
remote_options:
  - Aucun
skills_required:
  - La criminalistique numérique
skills_trained: []
summary: |
  Cette composante présente les outils et les procédures nécessaires à l'acquisition de l'image (vivante ou morte, selon la situation) et au traitement sécurisé des données d'un appareil (ordinateur portable, ordinateur de bureau, disque dur, carte mémoire, clé USB, etc.) qui sont nécessaires pour effectuer ultérieurement une analyse de logiciels malveillants ou un processus de preuve médico-légale.
overview: |
  * **Capturer des preuves pour une analyse ultérieure** - Si des activités suspectes sont identifiées, l'auditeur peut vouloir capturer des preuves (y compris image de disque dur, image mémoire, fichiers suspects, courriels, captures de trafic réseau,URL). à analyser ou à partager avec des professionnels. Cela prend du temps et les preuves capturées sont à haut risque, il faut donc être extrêmement prudent dans la poursuite de cette démarche.
  * Déterminer quel type d'acquisition de données (imagerie vivante ou morte) est nécessaire.
  * Effectuer l'acquisition de données nécessaire en préservant la chaîne de possession et prévenir la modification des preuves.
materials_needed: |
  **Compétences requises**

  * Utilisation d'outils de capture de preuves (ci-dessous) pour capturer les vidages de mémoire et pour mémoire et de copier les données en octet afin de créer une image médico-légale qui sera utilisée pour tests sans affecter les preuves originales reçues.

  **Logiciels requis** - selon le type d'acquisition de données et le système d'exploitation, vous aurez besoin des éléments suivants
  système d'exploitation, vous aurez besoin des outils suivants :

  * Imagerie en direct :
  * Windows : DumpIt
  * Mac OS : OSXpmem
  * Linux: LiME - Extracteur de mémoire Linux
  * Imagerie morte :
  * Distro DEFT

  **Matériaux supplémentaires**

  * Étiquettes ou tags
  * Sacs antistatiques
  * Disque dur ou dispositif de stockage de taille égale ou supérieure pour stocker l'image.
  * Clé USBpour collecter un fichier journal
considerations: |
  * Définir comment traiter la documentation et le confinement liés à l'acquisition de données.
  * Suivez les procédures d'analyse médico-légale des données qui sont nécessaires pour garantir que les preuves sont correctement traitées (voir "Notes importantes sur la capture des preuves").
  preuve est correctement traitée (voir "Notes importantes sur la capture des preuves pour l'analyse" ci-dessous).
  * Documentez tout le processus et tenez un journal, avec les horodatages, les dates et les fuseaux horaires, ainsi que les versions des logiciels et du système d'exploitation.
  * Réfléchissez soigneusement à la manière de protéger ces données en transit vers l'analyse. Voir "Comment
  Comment traiter les données médico-légales" ci-dessous pour des notes sur la chaîne de possession.
  * Lors de la copie d'octets de données, soyez extrêmement prudent lorsque vous tapez la ligne de commande
  `dd` ou autre. Inversez les drapeaux **`if`** et **`of`**, ou confondez l'étiquette du bloc de périphérique lié au bloc de données source ou de destination **sera à l'origine de la destruction des preuves par l'ordinateur !
  * Si possible, connectez toujours le disque source avec un bloqueur d'écriture pour empêcher la modification des preuves.
walk_through: |
  **La chaîne de traçabilité : comment gérer les données médico-légales**

  La chaîne de traçabilité (souvent appelée piste d'audit ou chaîne de preuves) est le processus de préservation de l'intégrité des preuves numériques. Être capable de maintenir la chaîne de possession est très important pour les preuves médico-légales. Cela signifie que vous devez enregistrer et être en mesure de prouver que le personnel autorisé contrôlait les preuves à tout moment et qu'aucune personne, dispositif ou mécanisme non autorisé n'aurait pu modifier les preuves sous notre garde.

  Pour maintenir la chaîne de traçabilité, il est impératif de documenter soigneusement ce qui arrive aux preuves. Ça signifie:

  - **Conservez les preuves dans un sac antistatique**, ou similaire approprié
  contenant qui protégera l'appareil de l'électricité statique ou d'autres
  forces destructrices.

  - **Étiquetez clairement la preuve.** Il ne doit y avoir aucune confusion quant à une preuve. Toutes les preuves, qu'il s'agisse de disques durs, de clés USB, de DVD, etc., doivent être clairement étiquetées avec les informations suivantes :
  - À quoi se rapportent les preuves
  - Qui a reçu la preuve
  - Lieu où la preuve a été reçue
  - Lieu d'où proviennent les preuves
  - La date et l'heure auxquelles la preuve est entrée en notre possession
  - Toute autre note que vous jugez pertinente concernant cet élément de preuve (les spécifications de l'ordinateur d'où provient le disque dur, etc.)
  - Chaque fois que la preuve change de mains, ** la prochaine personne responsable de la preuve doit "signer" **, ce qui signifie que la documentation doit être produite lorsque le destinataire de la preuve confirme qu'il a reçu la preuve sous sa garde avec sa signature .

  - **Refuser au personnel non autorisé d'accéder aux données** - Tous les efforts raisonnables doivent être déployés pour empêcher l'accès non autorisé aux preuves stockées.
  Ça signifie:
  - Stockage des preuves dans un coffre-fort verrouillé
  - Contrôler l'accès aux zones où les preuves sont stockées et analysées
  - Ne pas laisser les personnes non autorisées seules avec les preuves
  - **Si vous devez envoyer des preuves par coursier ou par la poste** :
  - Des conteneurs spéciaux doivent être utilisés pour sceller les preuves de manière à ce que le conteneur ne puisse pas être ouvert sans que cela soit apparent (par exemple, sceller avec du ruban adhésif spécial qui, s'il est retiré, ne peut être remplacé sans montrer que le conteneur a été ouvert).
  - Faites une copie (image) de la preuve avant d'envoyer l'original par la poste ou par un service de messagerie, et générez un hachage de l'image.

  **Imagerie en direct ou morte ?**

  Différents processus et outils sont utilisés selon le type d'acquisition de données et d'investigation qui sera effectué. Cependant, afin de prendre une décision correcte sur la façon d'obtenir l'image médico-légale, vous devez prendre en compte les questions suivantes :

  - L'ordinateur est-il en réseau ? Les données d'un appareil en réseau pourraient être effacées à distance. C'est pourquoi cette question est pertinente et urgente.
  - L'ordinateur fonctionne-t-il ? Des informations volatiles importantes peuvent être perdues si l'ordinateur est éteint.
  - Voulez-vous conserver des données volatiles ? De nos jours, des logiciels malveillants sophistiqués se cachent sur des données volatiles et les navigateurs Web modernes peuvent fonctionner en mode « incognito » ou « privé » (aucune information n'est enregistrée). Dans la plupart de ces cas, la préservation des preuves vivantes est la seule solution. Leur suppression peut donc entraîner une perte de preuves. Par conséquent, cette décision doit être prise à l'avance, sur la base des détails recueillis avant l'acquisition des données.
  - Le chiffrement intégral du disque est-il activé ? Un disque crypté pourrait compliquer l'enquête. Si le disque est crypté, l'enquêteur doit demander le mot de passe et décrypter le disque manuellement.
  - La console est-elle déverrouillée ? si la console est verrouillée, un CD live doit être utilisé.

  En ce qui concerne les définitions, nous appelons « imagerie morte » ou « imagerie hors ligne », le processus d'obtention de preuves à partir de systèmes éteints et où aucun traitement de données n'a lieu, tandis que « imagerie en direct » ou « imagerie de la mémoire »,
  fait référence au processus de création d'une copie bit à bit de la mémoire afin de
  préserver les données volatiles disponibles dans l'appareil. Il y a beaucoup de
  informations de valeur probante qui pourraient être trouvées dans un système vivant.
  Le désactiver peut entraîner la perte de données volatiles telles que les processus en cours d'exécution, les connexions réseau et les systèmes de fichiers montés. D'autre part, laisser un ordinateur en marche peut entraîner la modification ou la suppression de preuves. Par conséquent, l'enquêteur doit décider quelle alternative est la meilleure dans chaque situation donnée.
  Une autre approche consiste à utiliser des outils spécialisés pour extraire les données volatiles de l'ordinateur avant de l'éteindre.


  ___
recommendations: |
  Voir [Incident Response guidance](https://safetag.org/activities/incident_response).
organization_size_under: 10000
time_required_minutes: 60
---
