---
title: Sécurité opérationnelle lors d'un audit
---
"* Sachez que les groupes locaux peuvent ne pas être en mesure d'évaluer avec
précision la sécurité de leurs communications avec vous. Parfois, ils
sous-estiment la probabilité de risque - à d'autres moments, ils peuvent
largement surestimer le risque. Dans tous les cas, [vous] devez naviguer cette
question avec soin et respect avec une approche "ne pas nuire" qui respecte les
besoins signalés, le contexte et les expériences de votre contact local et des
stagiaires potentiels.*" - *Évaluation des besoins : Niveau supérieur*
[^event_planning_input]

### Résumé

La sécurité opérationnelle fait référence aux mesures de sécurité que vous avez
prises pour protéger l'audité et vous-même tout au long du processus d'audit
lui-même. Vous trouverez ci-dessous quelques directives de sécurité
opérationnelles de base pour un audit SAFETAG. Des directives de sécurité
opérationnelle spécifiques à l'activité sont contenues dans chaque activité.

### Objectif

Un audit révèle un ensemble d'informations sensibles sur une organisation. Pour
certaines populations à risque, le simple fait d'obtenir un audit de sécurité
numérique peut augmenter leur probabilité d'être activement attaqué par un
adversaire. Le fondement du processus SAFETAG est l'objectif d'accroître la
sécurité de l'organisme d'accueil, de son personnel et de l'auditeur. Il est
essentiel qu'un auditeur évalue le risque éventuel qu'un audit peut encourir
pour l'organisation ou l'auditeur par rapport aux avantages éventuels de
l'audit. En d'autres termes, il peut y avoir des circonstances où la réalisation
d'un audit pourrait introduire de tels niveaux de risque pour l'organisation ou
l'auditeur qu'une décision de non-participation doit être prise.

### Approches

**Sécurité du stockage et des données en transit**

* Gardez TOUTES les données liées à l'évaluation sécurisées et compartimentées,
  des notes d'entretien et de recherche aux résultats d'audit et aux résultats
  des rapports. Les auditeurs doivent noter où les outils (tels que OpenVAS ou
  recon-ng) stockent leurs données internes. En pratique, les volumes LUKS ou
  VeraCrypt sont utiles, sécurisés et portables. L'auditeur doit modifier son
  approche de stockage des données en fonction des informations sur les menaces
  issues de sa recherche contextuelle.
* Réfléchissez aux options de stockage sécurisé que l'organisation devra mettre
  en place pour stocker le rapport final et les documents de conclusions.
* Déterminez si les données brutes peuvent être à risque pendant le post-audit
  de transit et planifiez des mesures d'atténuation avant le voyage (par
  exemple, remplir le rapport sur place ou le télécharger sur un serveur distant
  sécurisé et supprimer en toute sécurité toutes les données localement).
* Reportez-vous à l'entente établie avec l'organisme.

**Sécurité des communications**

* Effectuez toutes les communications avec le client sur au moins des canaux à
  sécurité minimale où la communication est cryptée en transit à tout moment.
  Tenir compte des risques pour l'organisation et le(s) auditeur(s) si
  l'organisation est activement compromise.
* Des niveaux de sécurité plus élevés avec des garanties de bout en bout (tels
  que Signal, Wire, PGP ou Veracrypt) doivent être utilisés pour les transferts
  de fichiers et de documents.
* Une formation et un soutien peuvent être nécessaires pour s'assurer que
  l'organisation est en mesure de recevoir ces communications de manière fiable
  et sécurisée.

**Suppression des données**

* Lorsque les données d'évaluation doivent être détruites (par l'auditeur ou
  l'organisation), assurez-vous que les processus sécurisés de suppression des
  données sont suivis.

### Resources

* *Standard*: [NIST SP 800-115, Technical Guide to Information Security Testing
  and
  Assessment](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-115.pdf)
  (Section 7.4)
* *Standard*: [Pentest Standards for data
  security](http://www.pentest-standard.org/index.php/Pre-engagement#PGP_and_Other_Alternatives)
* *Guide*: [Surveillance Self Defense](https://ssd.eff.org/) (cross-platform
  guides for WhatsApp, Signal, PGP, and OTR secure communications)
* *Guide*: [Security in a box: Secure File
  Storage](https://securityinabox.org/en/guide/secure-file-storage/)
