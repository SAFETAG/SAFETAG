---
title: Connexions de messagerie non sécurisées
approaches:
  - Technique
position: 50
authors:
  - SAFETAG
remote_options:
  - avec assistance
skills_required:
  - sslstrip
  - surveillance du trafic
skills_trained: []
summary: |
  Un problème courant avec les services de messagerie est le manque de cryptage approprié. Le personnel ne doit être autorisé à se connecter au serveur de messagerie de l'organisation qu'en utilisant le cryptage SSL ou TLS.

  Lorsqu'un membre du personnel envoie ou reçoit des courriels, un attaquant ayant accès au même réseau local peut facilement et de manière invisible lire, enregistrer ou modifier tous les messages en transit vers et depuis le serveur de messagerie de l'organisation.

  Même un membre du personnel informé qui tente de configurer son client de messagerie pour exiger le cryptage SSL ou TLS sera incapable de le faire car le serveur de messagerie ne le prend pas en charge.adversaire.

  L'adversaire pourrait être quelqu'un, tel qu'un client du cybercafé où travaille un membre du personnel, qui utilise le même réseau local pour se connecter à Internet. Ou, elle pourrait travailler pour une organisation disposant d'un accès privilégié au réseau concerné, telle que le fournisseur d'accès Internet (FAI) de %{organisation}.

  Même un membre du personnel informé qui tente de configurer son client de messagerie pour exiger le cryptage SSL ou TLS ne pourra pas le faire car le serveur de messagerie ne le prend pas en charge. Pour la messagerie Web, un membre du personnel qui tente de saisir l'adresse de messagerie Web alternative sécurisée ("https://";) lors de la connexion, peut ne pas être en mesure de le faire, car l'application Webmail ne la prend pas en charge.
overview: ''
materials_needed: ''
considerations: ''
walk_through: |
  Si l'attaquant souhaite observer le trafic de messagerie de la victime (probablement parce qu'il n'a pas réussi à capturer un mot de passe non crypté, ce qui lui aurait permis de se connecter en tant que victime et de lire directement son courriel), il peut avoir besoin d'effectuer une seconde, légèrement attaque plus complexe, qui donnera également probablement accès au mot de passe des victimes ainsi qu'au contenu de leur courriel.

  Pour capturer les messages sortants (SMTP), le processus est presque identique à [l'exercice de surveillance du trafic](https://safetag.org/activities/monitor_open_wireless_traffic).
recommendations: |
  Cryptage obligatoire (SSL, TLS ou HTTPS) sur tous les services authentifié (notamment  un courriel). Cela devrait s'appliquer à la fois aux connexions directes au serveur de messagerie (par exemple via IMAP, MAPI, SMTP) ainsi qu'aux services de messagerie Web.

  Ceux qui utilisent Outlook, ou un autre client de messagerie, ne devraient être autorisés à se connecter au serveur de messagerie de l'organisation qu'en utilisant le cryptage SSL ou TLS.
  Les tentatives de connexion sans chiffrement doivent échouer. Tous les clients de messagerie du personnel doivent être reconfigurés en conséquence.
organization_size_under: 1000
time_required_minutes: 30
---
