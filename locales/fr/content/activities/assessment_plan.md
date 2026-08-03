---
title: Plan d’évaluation
approaches:
  - Interpersonnelle
position: 50
authors:
  - SAFETAG
skills_trained: []
remote_options:
  - Entier
time_required_minutes: 120
organization_size_under: 1000
summary: |
  Ce composant permet à la personne qui audite et à l’hôte ou l’hôtesse de s’entendre sur le niveau d’accès de la personne qui audite, ce qui ne sera pas audité, et sur le processus pour changer la portée de l’audit si de nouveaux renseignements apparaissent.
  [^PETS_legal_considerations]^,^[^PETS_separate_permissions] Ce composant est un processus de création par la personne qui audite d’un plan d’évaluation en collaboration avec les membres clés de l’organisation. 
  L’un des principes fondamentaux de SAFETAG est de développer la capacité des organisations à améliorer leur sécurité numérique. Ainsi, créer un plan d’évaluation en collaboration avec l’organisation permet non seulement de clarifier la portée de l’audit, des données sensibles qui pourraient être exposées lors de l’audit aux systèmes qui pourraient être perturbés, mais aussi de mettre de l’avant la capacité de l’organisation à soutenir aux résultats de l’audit et à y répondre.
materials_needed: |
  Pour utiliser le générateur d'accords SAFETAG (en option), un système Linux basé sur Debian
  avec python et d'autres conditions sont requises, comme indiqué dans le [générateur 
  d'accord 
  README] (https://github.com/SAFETAG/safetag_agreement_generator#installation).
walk_through: |
  * Élaborer un accord signé par les deux parties décrivant la portée de l'audit, y compris: 
  * Les dates de début et de fin de l'audit.
  * Le lieu où l'audit sur site aura lieu. [^pets_pre-engagement_location]
  * Les responsabilités du personnel d'accueil.
  * Les responsabilités de l'auditeur.
  *Les noms d'hôte et les plages d'adresses IP de tous les services gérés par l'organisation. [^PETS_host_and_ip]
  * Coordonnées d'urgence de l'organisation. [^PETS_emergency_contact]
  * La procédure que l'auditeur suivra lors du traitement des incidents. [^NIST_incident_repose_plan]
  * Les normes de sécurité des données pour le traitement et la communication des preuves. [^PETS_evidence_handling]
  * Élaborer et signer un accord de confidentialité et de non-divulgation
  * Partager une décharge de responsabilité signée par l'organisation hôte. [^PETS_permission_to_test]
  * Obtenir l'approbation de tout tiers, si nécessaire. [^PETS_tierces_parties]
  L'accord d'audit, l'accord de non-divulgation, l'exonération de responsabilité peuvent être réalisés au moyen d'un seul document, ou ils peuvent être des documents distincts.

  Les auditeurs sont encouragés à utiliser, ou au moins à faire référence, à des textes provenant des sources suivantes:

  * Exemple de texte pour un énoncé de travail et un accord d'engagement dans l'[activité d'accord de confidentialité] (https://safetag.org/activities/confidentiality_agreement/).
  * Le [Générateur d'accord SAFETAG](https://github.com/SAFETAG/safetag_agreement_generator), un script python qui fournit un arbre de décision couvrant les points ci-dessus, et construit un accord de base en langage clair qui peut être traduit et formalisé comme nécessaire. Des exemples de sorties et un diagramme de l'arbre de décision complet sont disponibles dans le dossier "outputs" du référentiel du générateur d'accords. Celui-ci remplace le projet d'accord qui faisait auparavant partie de SAFETAG.
considerations: |
  * Tenez compte du paysage des menaces de l'organisation lors de la détermination des canaux de communication sécurisés. Cela peut nécessiter un travail préalable à l'accord en utilisant des parties de la méthodologie de recherche contextuelle.
  * En plus du mandat général d'envoyer des informations cryptées à l'organisation, exigez également d'eux une communication chiffrée. L'incapacité à établir un canal de planification sécurisé contribue également à une situation de non-droit en mettant à la fois l'auditeur et l'organisation en danger.
skills_required: []
overview: |
  **Create an Assessment Plan:** Have a "scoping" meeting that outlines the
  level of access that an auditor will have, what is off limits, and the process
  for modifying the scope of the audit when new information arises.
  [^PETS_legal_considerations], [^PETS_separate_permissions]

  * Determine a point person for the audit and exchange contact information.  [^PETS_emergency_contact]
  * Explain and get approval to the scope of audit from the host.
  * Agree to the timeline, location, and attendees of the on-site audit. [^pets_pre-engagement_location]
  * Codify data security standards for audit communication and evidence handling. [^PETS_evidence_handling]
  * Establish confidentiality and non-disclosure clauses
  * If funded externally, identify what should be reported to external funder. [^external_funding_and_reporting]
recommendations: ""
---
