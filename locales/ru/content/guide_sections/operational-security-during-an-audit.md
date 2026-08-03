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

### Кратко

Operational security refers to the security measures taken by you to protect the
auditee and yourself throughout the audit process itself. Below are some
baseline operational security guidelines for a SAFETAG audit. Activity-specific
operational security guidelines are contained within each activity.

### Цель

An audit uncovers an array of sensitive information about an organization. For
some at-risk populations the mere act of getting a digital security audit can
increase their likelihood of being actively attacked by an adversary. The
foundation of the SAFETAG process is the goal of increasing the safety of the
host organization, its staff, and the auditor. It is vital that an auditor weigh
the possible risk an audit may incur on the organization or the auditor against
the possible benefits of the audit. In other words, there may be circumstances
where carrying out an audit could introduce such levels of risk to the
organization or the auditor that that a no-go decision must be made.

### Подходы

**Data storage and data transit security**

* Keep ALL data related to the assessment secured and compartmentalized, from
  interview and research notes through audit findings and reporting outputs.
  Auditors should note where tools (such as OpenVAS or recon-ng) store their
  internal data. Practically speaking, LUKS or VeraCrypt volumes are useful,
  secure, and portable. The auditor should modify their data storage approach
  based on threat information from their context research.
* Подумайте, как организация сможет обеспечить безопасность хранения финального
  аудиторского отчета и дополнений.
* Consider if the raw data may be at risk during transit post-audit and plan
  mitigations in advance of travel (e.g. completing the report on-site or
  uploading to a secure remote server and securely deleting all data locally).
* Обратитесь к соглашению, заключенному с организацией ранее.

**Communications security**

* Для всех коммуникаций с клиентом нужно использовать хотя бы минимально
  защищенные каналы связи с шифрованием данных во время передачи. Если
  организация явно находится под ударом, подумайте о рисках для нее и для
  аудиторов.
* Higher levels of security with end-to-end guarantees (such as Signal, Wire,
  PGP, or Veracrypt) should be used for file and document transfers.
* Чтобы организация надежно и безопасно получала такие сообщения, могут
  потребоваться обучение и поддержка.

**Data Deletion**

* Аудитор или организация должны удалять материалы аудита надежным способом.

### Материалы

* *(cтандарт)* [NIST SP 800-115, Техническое руководство по тестированию и
  оценке информационной
  безопасности](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-115.pdf)
  (раздел 7.4) *(англ.)*
* *(cтандарт)* [Стандарты тестов на проникновение для безопасности
  данных](http://www.pentest-standard.org/index.php/Pre-engagement#PGP_and_Other_Alternatives)
  *(англ.)*
* *Guide*: [Surveillance Self Defense](https://ssd.eff.org/) (cross-platform
  guides for WhatsApp, Signal, PGP, and OTR secure communications)
* *(руководство)* [Безопасность-в-коробке. Как защитить важные компьютерные
  данные](https://securityinabox.org/en/guide/secure-file-storage/)
