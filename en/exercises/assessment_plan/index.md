---
Approach:
- Interpersonal
Authors:
- SAFETAG
Org_size_under:
- 1000
Remote_options:
- Complete
Skills_required:
- N/A
Time_required_minutes:
- 120
---

#### Assessment Plan

##### Summary
This component allows an auditor and host to come to an understanding of the level of access that an auditor will have, what is off limits, and the process for modifying the scope of the audit when new information arises. [^PETS_legal_considerations]^,^[^PETS_separate_permissions] This component consists of a process where the auditor collaboratively creates an assessment plan with key members of the organization.

A core tenet of SAFETAG is building agency in organizations to improve their digital security. To that end, collaboratively creating an assessment plan with the organization helps to clarify not only the audit scope - from discussing what sensitive data may be exposed to what systems may be disrupted in the process of the audit - but it also helps reveal the ability of the organization to support and respond to the audit findings.

##### Overview

* **Create an Assessment Plan:** Have a "scoping" meeting that outlines the level of access that an auditor will have, what is off limits, and the process for modifying the scope of the audit when new information arises. [^PETS_legal_considerations]^,^[^PETS_separate_permissions]
  * Determine a point person for the audit and exchange contact information.  [^PETS_emergency_contact]
  * Explain and get approval to the scope of audit from the host. [^PETS_legal_considerations]^,^[^PETS_separate_permissions]
  * Agree to the timeline, location, and attendees of the on-site audit. [^pets_pre-engagement_location]
  * Codify data security standards for audit communication and evidence handling. [^PETS_evidence_handling]
  * Establish confidentiality and non-disclosure clauses
  * If funded externally, identify what should be reported to external funder. [^external_funding_and_reporting]

##### Materials Needed

* To use the optional SAFETAG Agreement Generator, a Debian-based Linux system with python and other requirements are required as detailed in the [Agreement Generator README](https://github.com/SAFETAG/safetag_agreement_generator#installation).

##### Considerations

  * Consider the threat landscape of the organization when determining secure communications channels. This may require some pre-agreement work using parts of the Context Research methodology.
  * In addition to the overall mandate to send information encrypted to the organization, also demand encrypted communication back from them. Failure to establish a secure planning channel also contributes towards a no-go situation by putting both the auditor and organization at risk.

##### Walkthrough

  * Develop an agreement signed by both parties outlining the scope of the audit including:
    * The start and end dates of the audit.
    * The location where the on-site audit will take place. [^pets_pre-engagement_location]
    * The responsibilities of the host staff.
    * The responsibilities of the auditor.
    * The host names and IP ranges of any services run by the organization. [^PETS_host_and_ip]
    * Emergency contact information for the organization. [^PETS_emergency_contact]
    * The procedure the auditor will follow when handling incidents. [^NIST_incident_repose_plan]
    * The data security standards for evidence handling and communication. [^PETS_evidence_handling]
  * A confidentiality and non-disclosure agreement
  * A liability waiver signed by the host organization. [^PETS_permission_to_test]
  * Approval from any third parties. [^PETS_third_parties]

Auditors are encouraged to use, or at least reference, the [SAFETAG Agreement Generator](https://github.com/SAFETAG/safetag_agreement_generator), a python script which provides a decision tree covering the above points, and builds a basic, clear-language agreement which can be translated and formalized as needed. Sample outputs and a diagram of the full decision tree are available in the "outputs" folder of the Agreement Generator repository. This replaces the draft agreement previously part of SAFETAG.

##### Recommendation
