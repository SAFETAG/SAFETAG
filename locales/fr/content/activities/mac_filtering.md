---
title: Accéder à un réseau filtré par MAC
approaches:
  - Technique
position: 50
authors:
  - SAFETAG
remote_options:
  - avec assistance
skills_required:
  - Sans fil
  - Analyse du trafic
skills_trained: []
summary: |
  Les points d'accès sans fil ouverts et filtrés par adresse MAC sont non seulement ouverts à toute personne à portée pour se joindre et écouter, mais ils n'offrent pas non plus de protection à ceux qui se trouvent sur le réseau lui-même, même s'ils ne "diffusent" pas leur nom. Ceux-ci peuvent sembler être d'excellents moyens d'empêcher les utilisateurs non autorisés d'accéder à votre réseau sans recourir à des mots de passe, mais ils sont faciles à surmonter.
overview: ''
materials_needed: ''
considerations: ''
walk_through: |
  L'auditeur peut facilement accéder à un point d'accès ouvert ou filtré par adresse MAC.

   * Usurpation d'adresse MAC
     * Démarrer l'interface sans fil en mode moniteur
     * Identifiez les adresses MAC qui sont sur la liste blanche

  ```bash
  airodump-ng
  ```
  * Remplacez notre adresse MAC par une adresse figurant sur la liste blanche

  ```bash
  ifconfig mon0 down
  macchanger -m [MAC ADDRESS IDENTIFIED] mon0
  ifconfig mon0 up
  ```
recommendations: |
  La transition vers les réseaux WPA avec des mots de passe forts, même pour les réseaux invités, 
  est recommandée.
organization_size_under: 50
time_required_minutes: 30
---
