
## Operational Security


"*Also be aware that local groups may not be able to accurately gauge the safety of their communications with you. Sometimes they underestimate the likelihood of risk - at other times, they can wildly overestimate the risk. Either way, trainers need to navigate this issues carefully and respectfully with a "do no harm" approach that respects the reported needs, context, and experiences of your local contact and potential trainees.*" - _Needs Assessment: Level-Up_ [^event_planning_input]

### Summary

Below are the baseline operational security guidelines for a SAFETAG audit. Activity specific operational security guidelines are contained within each activity.

### Purpose

An audit uncovers an array of sensitive information about an organization. For some at-risk populations the mere act of getting a digital security audit can increase their likelihood of being actively attacked by an adversary. The foundation of the SAFETAG process is the goal of increasing the safety of the host organization, its staff, and the auditor. It is vital that an auditor weigh the possible risk an audit may incur on the organization or the auditor against the possible outcomes of an audit.

### Approaches

  * Data storage and transit security
    * Keep ALL data related to the assessment secured and compartmentalized, from interview and research notes through audit findings and reporting outputs. Auditors should note where tools (such as OpenVAS or recon-ng) store their internal data. Practically speaking, LUKS or VeraCrypt volumes are useful, secure, and portable. The auditor should modify their data storage approach based on threat information from their context research as well as ongoing inputs.
    * Consider what secure storage options the organization will need to have in place to store the final report and findings documents.
    * Consider if the raw data may be at risk during transit post-audit and plan mitigations in advance of travel (e.g. completing the report on-site or uploading to a secure remote server and securely deleting all data locally.)
    * Refer back to the agreement established with the organization.

  * Communications security
    * Conduct all communication with the client over at least minimally secure channels where the communication is encrypted in transit at all times. Consider risks to the organization and the auditor(s) if the organization is actively compromised.
    * Higher levels of security with end-to-end guarantees (such as Signal, PGP, veracrypt, or peerio/minilock) should be used for file and document transfers.
    * Training and support may be required to ensure the organization is able to reliably and securely receive such communications.

  * Data Deletion
    * When assessment data is to be destroyed (by the auditor or organization), ensure secure data deletion processes are followed.

### Resources

* *Standard*: [NIST SP 800-115, Technical Guide to Information Security Testing and Assessment](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-115.pdf) (Section 7.4)
* *Standard*: [Pentest Standards for data security](http://www.pentest-standard.org/index.php/Pre-engagement#PGP_and_Other_Alternatives)
* *Guide*: [Surveillance Self Defense](https://ssd.eff.org/en/index) (cross-platform guides for WhatsApp, Signal, PGP, and OTR secure communications)
* *Guide*: [Security in a box: Secure File Storage](https://securityinabox.org/en/guide/secure-file-storage/)
* *Guide*: [Digital First Aid Kit: Secure Communications](https://rarenet.github.io/DFAK/en/SecureCommunication/)
