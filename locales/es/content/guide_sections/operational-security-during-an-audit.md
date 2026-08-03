---
title: Operational Security During an Audit
---
"*Be aware that local groups may not be able to accurately gauge the safety of
their communications with you. Sometimes they underestimate the likelihood of
risk - at other times, they can wildly overestimate the risk. Either way, [you]
need to navigate this issue carefully and respectfully with a "do no harm"
approach that respects the reported needs, context, and experiences of your
local contact and potential trainees.*" - *Needs Assessment: Level-Up*
[^event_planning_input]

### Resumen

Operational security refers to the security measures taken by you to protect the
auditee and yourself throughout the audit process itself. Below are some
baseline operational security guidelines for a SAFETAG audit. Activity-specific
operational security guidelines are contained within each activity.

### Propósito

An audit uncovers an array of sensitive information about an organization. For
some at-risk populations the mere act of getting a digital security audit can
increase their likelihood of being actively attacked by an adversary. The
foundation of the SAFETAG process is the goal of increasing the safety of the
host organization, its staff, and the auditor. It is vital that an auditor weigh
the possible risk an audit may incur on the organization or the auditor against
the possible benefits of the audit. In other words, there may be circumstances
where carrying out an audit could introduce such levels of risk to the
organization or the auditor that that a no-go decision must be made.

### Enfoques

**Data storage and data transit security**

* Keep ALL data related to the assessment secured and compartmentalized, from
  interview and research notes through audit findings and reporting outputs.
  Auditors should note where tools (such as OpenVAS or recon-ng) store their
  internal data. Practically speaking, LUKS or VeraCrypt volumes are useful,
  secure, and portable. The auditor should modify their data storage approach
  based on threat information from their context research.
* Considerar qué opciones de almacenamiento seguro necesitará tener provistas la
  organización para almacenar el reporte final y documentos de conclusiones.
* Considerar si los datos en bruto pudieran estar en riesgo durante el tránsito
  posterior a la auditoría y planear mitigaciones con anterioridad al viaje
  (p.ej. completando el reporte in situ o subiéndolo a un servidor remoto seguro
  y borrando en forma segura todos los datos localmente.)
* Remitirse al acuerdo establecido con la organización.

**Communications security**

* Conducir todas las comunicaciones con el cliente sobre canales al menos
  mínimamente seguros, donde la comunicación es cifrada en tránsito en todo
  momento. Considerar riesgos a la organización y el(los) auditor(es) si la
  organización está activamente comprometida.
* Higher levels of security with end-to-end guarantees (such as Signal, Wire,
  PGP, or Veracrypt) should be used for file and document transfers.
* Puede que sean requeridos entrenamiento y soporte para asegurar que la
  organización es capaz de recibir tales comunicaciones confiable y seguramente.

**Data Deletion**

* Cuando los datos de evaluación hayan de ser destruidos (por el auditor u
  organización) asegúrese de que sean seguidos los procesos seguros de borrado.

### Recursos

* *Estándar*: [NIST SP 800-115, Guía Técnica para Prueba y Evaluación de
  Seguridad
  Informática](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-115.pdf)
  (Sección 7.4)
* *Estándar*: [Estándares Pentest para seguridad de
  datos](http://www.pentest-standard.org/index.php/Pre-engagement#PGP_and_Other_Alternatives)
* *Guide*: [Surveillance Self Defense](https://ssd.eff.org/) (cross-platform
  guides for WhatsApp, Signal, PGP, and OTR secure communications)
* *Guía*: [Seguridad en un ordenador: Almacenamiento Seguro de
  Archivos](https://securityinabox.org/en/guide/secure-file-storage/)
