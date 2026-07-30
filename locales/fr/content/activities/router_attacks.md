---
title: Attaques basées sur le routeur
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
  De nombreux routeurs sans fil utilisent toujours le mot de passe par défaut répertorié dans [“Router Default Password Search”](http://www.routerpasswords.com/), ce qui signifie que toute personne ayant accès au réseau peut également prendre le contrôle total du routeur - en ajoutant des outils d'accès à distance ou la mise en place d'autres attaques.
short_summary: Vérifiez les routeurs pour les mots de passe par défaut, les micrologiciels non corrigés, les vulnérabilités, l'accès à distance et les erreurs de configuration.
overview: |
  * Trouvez le(s) routeur(s) (``route`` fonctionne bien pour cela)
  * Testez avec les mots de passe par défaut
  * Vérifiez les mises à jour / les vulnérabilités non corrigées et les portes dérobées
  * Enquêter sur des données potentiellement précieuses (journaux, utilisateurs connectés)
materials_needed: ''
considerations: ''
walk_through: ''
recommendations: |
  **Modifier les mots de passe par défaut du routeur**

  Les mots de passe - en particulier sur les périphériques du réseau central - sont très importants. Utilisez un gestionnaire de mots de passe pour enregistrer le nouveau mot de passe (ou préparez-vous à réinitialiser le routeur aux paramètres d'usine par défaut).

  Bien que nominalement "à l'intérieur du pare-feu" et protégé contre les attaques à distance, laisser les routeurs avec des mots de passe par défaut, en particulier les routeurs sans fil dont les réseaux sont souvent partagés avec des visiteurs, représente un risque potentiellement très élevé pour une organisation. Toute personne ayant obtenu l'accès au réseau par des moyens légitimes ou autres pourrait subtilement modifier la configuration du routeur pour fournir un accès à distance ou acheminer le trafic vers un serveur désigné par l'attaquant. De tels changements peuvent facilement passer inaperçus pendant de longues périodes.

  Une crainte courante est d'oublier le nouveau mot de passe du routeur. Un système de gestion de mot de passe est une solution évidente, mais si le routeur se trouve dans un endroit sécurisé, même une note autocollante serait préférable au mot de passe par défaut.
organization_size_under: 100
time_required_minutes: 15
---
