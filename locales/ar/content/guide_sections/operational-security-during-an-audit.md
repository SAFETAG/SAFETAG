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

### ملخص

Operational security refers to the security measures taken by you to protect the
auditee and yourself throughout the audit process itself. Below are some
baseline operational security guidelines for a SAFETAG audit. Activity-specific
operational security guidelines are contained within each activity.

### غرض

An audit uncovers an array of sensitive information about an organization. For
some at-risk populations the mere act of getting a digital security audit can
increase their likelihood of being actively attacked by an adversary. The
foundation of the SAFETAG process is the goal of increasing the safety of the
host organization, its staff, and the auditor. It is vital that an auditor weigh
the possible risk an audit may incur on the organization or the auditor against
the possible benefits of the audit. In other words, there may be circumstances
where carrying out an audit could introduce such levels of risk to the
organization or the auditor that that a no-go decision must be made.

### أساليب المعالجة

**Data storage and data transit security**

* Keep ALL data related to the assessment secured and compartmentalized, from
  interview and research notes through audit findings and reporting outputs.
  Auditors should note where tools (such as OpenVAS or recon-ng) store their
  internal data. Practically speaking, LUKS or VeraCrypt volumes are useful,
  secure, and portable. The auditor should modify their data storage approach
  based on threat information from their context research.
* يجب الاعتبار في ماهية خيارات التخزين الآمن التي ستحتاجها المنظمة لتخزين
  التقرير النهائي ومستندات النتائج.
* Consider if the raw data may be at risk during transit post-audit and plan
  mitigations in advance of travel (e.g. completing the report on-site or
  uploading to a secure remote server and securely deleting all data locally).
* الرجوع إلى الاتفاقية المتعاقد عليها مع المنظمة.

**Communications security**

* يجب القيام بجميع الاتصالات مع العميل عبر قنوات مؤمّنة بحد أدنى، حيث تكون جميع
  الاتصالات مشفرة أثناء الانتقال طوال الوقت، وكذلك دراسة المخاطر على المنظمة
  والمدقق(ين) لو تم إختراق المنظمة.
* Higher levels of security with end-to-end guarantees (such as Signal, Wire,
  PGP, or Veracrypt) should be used for file and document transfers.
* من المحتمل أن يكون هناك حاجة للتدريب والدعم للتأكد من أن المنظمة قادرة على
  القيام بهذه النوعية من الاتصالات بشكل آمن ومستقر.

**Data Deletion**

* يجب التأكد من اتباع طرق آمنة لحذف البيانات عند تدمير بيانات التقييم (عن طريق
  المدقق أو المنظمة).

### الموارد

* *معيار*: [NIST SP 800-115, Technical Guide to Information Security Testing and
  Assessment](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-115.pdf)
  (Section 7.4)
* *معيار*: [Pentest Standards for data
  security](http://www.pentest-standard.org/index.php/Pre-engagement#PGP_and_Other_Alternatives)
* *Guide*: [Surveillance Self Defense](https://ssd.eff.org/) (cross-platform
  guides for WhatsApp, Signal, PGP, and OTR secure communications)
* *دليل*: [الأمن في صندوق: التخزين الآمن
  للملفات](https://securityinabox.org/en/guide/secure-file-storage/)
