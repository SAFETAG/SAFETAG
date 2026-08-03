---
title: Reconocimiento
position: 40
method_icon: /img/reconnaissance_icon.png
summary: |
  La metodología de evaluación remota se enfoca en la observación directa de una organización y su infraestructura, consistiendo en el reconocimiento pasivo de fuentes de datos disponibles públicamente ("Inteligencia de Fuente Abierta"). Esto permite al auditor identificar recursos públicamente disponibles (tales como sitios web, extranets, servidores de correo electrónico, pero también información de redes sociales) conectados a la organización, y recopilar información en forma remota acerca de esos recursos.
short_summary: Use publicly available data sources to identify resources, assets, and information connected to the organization and which forms a potential attack surface.
the_flow_of_information: "![](/img/reconnaissance.png)"
guiding_questions: |
  - Dependiendo de las necesidades de seguridad de la organización, ¿se filtra información online (ubicación, identidad personal, ubicación de los programas)?
  - ¿Se pueden identificar socios o beneficiarios a través de los sitios de las organizaciones?
  - ¿Cuál es el patrón para las direcciones de email del personal?
  - ¿Alguno de los servidores de la organización, de los usuarios, de las cuentas de correo electrónico, han sido comprometidas en el pasado?
authors:
  - SAFETAG
activities:
  - Manual Reconnaissance
  - Automated Reconnaisance
  - Website Footprinting
  - DNS Enumeration
references:
  - Open Source Intelligence (General)
  - Recolección de Información Organizacional
  - Searching
  - Pastebin Searching
  - Recon-ng
outputs: |
  * Dossier of organizational, partner, and beneficiary "open sources" information exposed online.
    * A list of e-mail address for members of the organization.
  * Identification and mapping of externally facing services and unintentionally exposed internal services.
    * Possible vulnerabilities in the websites and externally facing servers of the organization.
    * Existing information about earlier breaches identified in the paste-bin search.
  * Follow the proper incident response plan if high risk problems are identified.
operational_security: |
  * While this does not focus on identifying of vulnerabilities, it may nonetheless expose certain threats, particularly with regard to publicly-accessible information that is presumed to be confidential, such as the identity of sensitive staff, the existence of sensitive partner- and funder-relationships, or the organization’s history of participation in sensitive events or travel to sensitive locations.
info_required: []
info_provided: []
purpose: |
  Mientras que una gran parte de SAFETAG se enfoca en los desafíos a la seguridad digital dentro y alrededor de la oficina, información disponible no intencionalmente por parte de "fuentes abiertas" puede constituir una amenaza real y merece una atención significativa. Esto también construye el entendimiento del auditor acerca de la presencia digital de la organización y guiará hacia vulnerabilidades específicas a investigar una vez que se encuentre in situ.
preparation: |
  This Section:
  * does not require privileged access to the organization's offices, infrastructure or staff;
  * relies primarily on third-party data sources and observation and light probing of the organization’s infrastructure;
  * can generally be carried out from any secure Internet connection.
---
