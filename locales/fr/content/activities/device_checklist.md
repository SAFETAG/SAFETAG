---
title: Évaluation de l'appareil et du comportement
approaches:
  - Recherche
  - Interpersonnel
position: 50
authors:
  - SAFETAG
remote_options:
  - avec assistance
skills_required:
  - Administration système
skills_trained: []
summary: |
  L'auditeur vérifie les appareils du personnel pour les systèmes et logiciels mis à jour, les antivirus et autres capacités de sécurité, et identifie les logiciels exécutés sur les ordinateurs et leur version actuelle. L'auditeur vérifie les vulnérabilités connues de tout logiciel obsolète.

  Ceci est utilisé pour développer un composant de rapport exposant comment un logiciel non mis à jour peut entraîner de grandes vulnérabilités.
overview: |
  * Identifiez sous quel niveau de privilège les services s'exécutent. Les utilisateurs utilisent-ils des comptes avec des privilèges d'administrateur ou utilisent-ils un autre utilisateur et doivent-ils saisir un mot de passe pour obtenir des droits d'administrateur ? [^privilège-séparation-entre-os]
  * Vérifiez l'existence et l'état des antivirus (et des outils anti-malware) sur l'appareil. [^mises à jour antivirus]
  * Enregistrez la version et les niveaux de correctifs du logiciel sur l'appareil. [^identifier-les-versions-du-logiciel]
  * Identifiez le niveau de cryptage utilisé et disponible pour le stockage des données sur l'appareil. [^device_encryption_by_os]
  * À l'aide de la liste des versions de logiciels et des correctifs, identifiez les attaques et, si possible, identifiez les logiciels malveillants auxquels les appareils du bureau sont vulnérables.
materials_needed: |
  * Un bloc-notes peut s'avérer utile
considerations: |
  * Communiquez aux membres du personnel le niveau de confidentialité avec lequel vous traitez les discussions concernant leur appareil et l'utilisation de la technologie - c'est-à-dire expliquez quels déclencheurs de réponse aux incidents vous avez convenus avec l'organisation, et que tout ce qui ne déclenche pas et qui ne doit être signalé que dans l'ensemble.
walk_through: |
  L'auditeur inspecte un sous-ensemble d'appareils utilisateur clés et/ou représentatifs (travail et personnel). L'auditeur doit se concentrer sur les appareils de travail pour limiter la dérive de la portée, mais si le bureau dispose de nombreux appareils personnels accédant aux comptes/données de l'organisation, l'auditeur doit partager les « signaux d'alarme » qu'il recherche et travailler en tandem avec les propriétaires d'appareils et/ou Le personnel informatique. Pour un petit bureau, il peut être possible de vérifier chaque machine. Pour les grands bureaux, l'auditeur doit utiliser un sous-ensemble pour se faire une idée de la position de sécurité globale des appareils des utilisateurs.

  Lorsque vous travaillez avec des membres du personnel, interrogez-les également sur les autres appareils qu'ils utilisent, tels que les téléphones et les tablettes, et sur la manière dont ils se connectent aux services professionnels - courriel/webmail, applications de dialogue en ligne, outils intra/extranet, outils de gestion des relations avec les constituants (CRM) tels que CiviCRM ou Salesforce, outils de suivi financier et outils de gestion de site Web.

  Dans la section Outils, vous trouverez une liste de contrôle pour vous aider à vérifier sur différentes plates-formes/versions les besoins de sécurité courants.
  tools:
    - Vérification de l'appareil MacOS
    - Vérification de l'appareil Windows
    - Vérification de l'appareil Linux


tools:
  - MacOS Device Check
  - Windows Device Check
  - Linux Device Check

recommendations: |
  ** Si le système d'exploitation n'est pas pris en charge - Mise à niveau vers la version récente **

  Les systèmes d'exploitation populaires comme Windows XP ne reçoivent malheureusement plus de mises à jour de sécurité. Mettez à niveau vers la dernière version en gardant à l'esprit la configuration système requise de la version sélectionnée. Pour Windows, consultez la [fiche d'information sur le cycle de vie de Windows](https://support.microsoft.com/en-ph/help/13853/windows-lifecycle-fact-sheet) pour connaître les "EOL" (fin de vie) à venir. Apple ne publie pas de calendriers EOL, mais publie historiquement des mises à jour de sécurité pour ses versions actuelles et ses deux versions précédentes.

  Bien que les systèmes d'exploitation et les logiciels "piratés" soient extrêmement courants (en particulier pour Windows), ils laissent souvent beaucoup à désirer en termes de sécurité. Si le système d'exploitation ou le logiciel ne reçoit pas de mises à jour régulières du créateur du logiciel, il est extrêmement vulnérable à des milliers d'attaques potentielles. Passez à un logiciel sous licence ou à un logiciel libre recommandé

  **Si logiciel piraté - Déplacez-vous vers des systèmes logiciels sous licence**

  Bien que les systèmes d'exploitation et les logiciels "piratés" soient extrêmement courants (en particulier pour Windows), ils laissent souvent beaucoup à désirer en termes de sécurité. Si le système d'exploitation ou le logiciel ne reçoit pas de mises à jour régulières du créateur du logiciel, il est extrêmement vulnérable à des milliers d'attaques potentielles. Passez à un logiciel sous licence ou à un logiciel libre recommandé

  **Si obsolète - Mettre à jour les systèmes d'exploitation et autres logiciels**

  Les systèmes d'exploitation et les logiciels de toutes sortes - Windows, Mac, Linux et autres, sont constamment mis à jour. Ces mises à jour corrigent souvent des bogues, mais elles protègent également le système des vulnérabilités nouvellement découvertes. Il peut sembler difficile de maintenir une mise à jour constante, mais cela est très important pour protéger même les systèmes non sensibles.

  **Si logiciel vulnérable - Mettre à jour le logiciel vulnérable**

  De nombreux composants logiciels critiques, tels que Java ou Adobe Flash, présentent de nombreuses vulnérabilités et doivent être mis à jour de manière agressive. S'il n'y a pas besoin pour le travail des utilisateurs, désinstallez-les

  **S'il n'y a pas d'analyseur antivirus et antimalware - Installez l'antivirus et
  Scanner Anti-Maware**

  Un antivirus et un anti-malware offrent une protection minimale au système et il est donc important de les installer.

  **Si l'antivirus est obsolète - Mettre à jour l'antivirus**

  La plupart des outils AV se mettent à jour automatiquement, mais cela peut parfois se désynchroniser, ou si l'AV était un système d'essai préinstallé, il cessera de se mettre à jour après sa période d'essai. Un antivirus obsolète ne vaut rien. Par conséquent, assurez-vous que la mise à jour continue de AV est effectuée.

  **Si lecteur non crypté - Chiffrer les disques durs**

  Lorsque cela est possible, le chiffrement de lecteur intégré (Filevault sur OSX, BitLocker sur Windows et LUKS sur Linux) a tendance à offrir les expériences les plus transparentes et les plus conviviales. VeraCrypt offre un cryptage de lecteur multiplateforme gratuit et cna crée également des lecteurs cryptés qui peuvent être partagés entre les plates-formes.

  **Si pare-feu inactif - Activez à la fois le pare-feu personnel et le pare-feu du serveur (le cas échéant)**

  Encore une fois, le cas échéant, utilisez des pare-feu intégrés et configurez-les pour les options de réseau de bureau et public. Les tests pour s'assurer que les systèmes peuvent toujours effectuer le travail de réseau de bureau attendu (partage de fichiers, impression, etc.) sont essentiels à moins que des alternatives ne soient créées.
organization_size_under: 25
time_required_minutes: 120
---
