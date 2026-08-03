---
title: Connexion au site Web non sécurisé
approaches:
  - Technique
position: 50
authors:
  - SAFETAG
remote_options:
  - Complète
skills_required:
  - Analyse des vulnérabilités
skills_trained: []
summary: |
  Les mots de passe d'administration et d'utilisateur sur le site sont soumis en clair.
overview: |
  * Déterminer le lien de connexion de l'administrateur du site Web
  * Voir s'il existe une option sécurisée avec TLS pour se connecter
materials_needed: ''
considerations: ''
walk_through: |
  Les utilisateurs et les éditeurs du site se connectent au site à l'adresse
  http://www.sampleorg.org/user/login. Il n'y a pas de sécurité SSL sur cette page,
  il ne semble pas non plus y avoir la possibilité d'utiliser SSL.
  La description

  Par défaut, tout le trafic Web n'est pas chiffré. Pour le contenu de site Web non controversé, ce n'est pas un problème. Cependant, comme de nombreux sites Web sont passés du téléchargement de fichiers sur le backend à un système de gestion de contenu frontal, tout en devenant plus complexes avec les comptes d'utilisateurs et l'interaction, ce manque de sécurité devient problématique.

  Lorsqu'un administrateur (ou tout autre utilisateur) se connecte, son mot de passe est envoyé en clair. Cela signifie que n'importe qui sur le même réseau (dans un café ou sur un lieu de travail) ainsi que toute personne contrôlant le réseau (propriétaire d'un café, administrateur de réseau sur le lieu de travail, FAI ou gouvernement) peut intercepter trivialement le mot de passe (souvent simplement en recherchant le réseau flux de trafic pour "mot de passe"). Cela permet à un adversaire d'avoir un accès administrateur à un site Web, de publier du faux contenu, d'installer des logiciels malveillants ou de tenter de découvrir d'autres comptes où ce même mot de passe peut être utilisé.

  Tout d'abord, déterminez la page de connexion, s'il n'y a pas de lien "Connexion utilisateur" visible.
  La plupart des systèmes CMS ont un chemin de connexion standard (pour Drupal, c'est /user/login, par exemple). Ensuite, essayez d'accéder à cette page via une connexion SSL.
recommendations: |
  Sans la sécurité SSL, chaque mot de passe, y compris celui utilisé pour l'accès administrateur
  au site Web – passe en clair sur Internet. C'est tout de suite
  à la disposition d'un acteur au niveau de l'État via le FAI, et peut également être reniflé si
  accessible par un membre du personnel sur une connexion wifi partagée (dans un coffeeshop ou
  aéroport), et enfin si l'attaquant s'est introduit dans le réseau du bureau (voir
  la section Accès local). De plus, sans SSL, c'est trivial pour ces mêmes
  acteurs pour intercepter le trafic destiné à votre site Web et capturer les connexions des utilisateurs
  et les informations de profil. Activer SSL (et en faire la valeur par défaut pour votre
  site) protège également les utilisateurs de votre site.

  Historiquement, la sécurité SSL a eu un coût, à la fois le certificat SSL et
  souvent une mise à niveau du plan d'hébergement lui-même. Dans la plupart des cas, les sites peuvent maintenant
  recevez une assistance HTTPS gratuite via [LetsEncrypt](https://letsencrypt.org/) et
  également via des plates-formes de protection DDoS.

  Si une organisation met à jour son site Web via FTP, il convient de noter que FTP
  est tout aussi peu sûr. De nombreux hébergeurs fournissent SFTP ou FTPS, (deux
  différentes versions FTP, mais sécurisées), ou WebDAV sécurisé pour télécharger des fichiers. Ces
  doit être utilisé, en désactivant complètement le FTP "simple" si possible.

  Lors du passage à SSL/Secure FTP après avoir utilisé les versions en clair,
  les webmasters doivent également mettre à jour tous les mots de passe administratifs et veiller à
  assurez-vous qu'aucune étape en cours de route (gestion/panneau de l'hébergeur, fichier
  téléchargement, édition CMS) passe par des canaux “clairs”.
organization_size_under: 1000
time_required_minutes: 15
---
