---
position: 50
approaches:
  - Recherche
  - Technique
authors:
  - SAFETAG
skills_trained: []
remote_options:
  - Complète
time_required_minutes: 240
organization_size_under: 100
summary: |
  Cet exercice propose des outils de recherche en ligne ciblés et des astuces pour recueillir les fuites d'informations des organisations. Alors que de nombreuses organisations axées sur le plaidoyer, l'activisme et les médias/journalisme sont très publiques dans le cadre de leurs opérations, les recherches suggérées ici visent à explorer les données qui pourraient être utilisées pour mieux attaquer ou organiser socialement une organisation.
short_summary: This exercise suggests some targeted online search tools and tricks to gather information leakages from organizations.
materials_needed: ""
walk_through: |
  Ces approches personnalisées et plus manuelles fonctionnent parfaitement en combinaison avec des outils automatisés tels que recon-ng ou le Maltego commercial. Travailler avec ces astuces et les outils automatisés, en transmettant les informations apprises de l'un à l'autre, est un moyen puissant de découvrir de grandes quantités d'informations sur une organisation.

  Une grande partie des outils et des conseils supplémentaires sont bien couverts dans les références de la méthode de reconnaissance, une petite sélection de points de départ est cartographiée ci-dessous.

  Attention cependant à ne pas perdre de temps là-dessus ; l'utilisation d'outils d'information sur les images sur chaque photo du site Web d'une organisation ou la recherche de tous les comptes de médias sociaux liés peuvent ne pas fournir d'autres informations précieuses - prenez du recul et jugez de l'intérêt de creuser plus profondément - trouvez-vous des adversaires ? Trouvez-vous des informations que l'organisation ne souhaite peut-être pas en ligne ? Existe-t-il d'autres méthodes qui pourraient être plus appropriées à appliquer?
considerations: |
  * Utilisez des VPN ou Tor pour effectuer votre recherche. Tor peut être bloqué par certains services.
  * Certaines recherches peuvent révéler des informations personnelles. Soyez empathique et responsable avec cela, même s'il s'agit d'informations "publiques".
  title: Reconnaissance manuelle
title: Reconnaissance manuelle
skills_required:
  - Recherche OSINT
overview: |
  * Utilisez les outils de recherche avancés des principaux moteurs de recherche pour découvrir des partenaires, des projets et d'autres informations précieuses sur l'organisation.
  * Réseaux sociaux / Découverte de compte
  * Rechercher des sites de style pastebin et github pour les enregistrements de violation et de développement de sites Web/logiciels
  * Utilisez la recherche d'image inversée et les outils exif sur les photos qui vous intéressent
  * À utiliser pour ajouter des données supplémentaires et rechercher d'autres découvertes à partir du travail de reconnaissance automatisé
recommendations: >
  Part of modern life is having a presence on-line.  For many organizations,
  their online work is key to their success.  It is overall important to
  understand how disparate pieces of data can be combined by a dedicated
  adversary to build a deep understanding of the organization and its employees,
  which is useful in ”social engineering” attacks such as  ”spear-phishing” --
  sending professional, seemingly relevant emails with malicious attachments.

  Monitoring sites for information about your organization can help detect breaches, especially by cyber-criminals. However, it is generally more valuable to expend limited resources on constant updates of the web server, CMS system (e.g. Joomla), and plugins.

  Running images through tools to remove ”EXIF” data is useful, particularly when the images come from devices (such as smartphones) with GPS built-in.

  Consider the risk of doxing, which affects particularly organizations with a focus on topics that carry a social stigma - OSINT-based attacks can affect for example single members of women's and LGBTQ rights organizations. In these cases the research described in this exercise should also be carried out on the most visible persons of the organization. This activity can be combined with the Self-Doxing exercise to identify and mitigate vulnerabilities without intruding into team members' privacy.
---
