---
Authors:
- SAFETAG
Info_provided:
- unknown
Info_required:
- unknown
---

## Responding to Advanced Threats

### Summary
This component allows the auditor to be able to identify, triage, and analyze suspicious behavior on a device or in a network. Depending on the analysis, the auditor may need to further investigate a malware infection, analyze a binary and determine if it is malicious or not, and recommend urgent mitigation steps.

### Purpose
It is very common to find suspicious behaviors, processes, traffic and other ‘weird activities’ during a SAFETAG audit. SAFETAG practitioners should always be on the lookout for suspicious activities as they apply other SAFETAG methods and their activities, from interactions and discussions with staff to hands-on device assessment and traffic analysis.

### The Flow of Information
![ Information Flow](images/info_flows/advanced_threat.svg)

### Guiding Questions

* Does the organization suspect they already have malware? If so, what evidence supports that?
* Have staff members received suspicious communications, like emails or IMs?
* Based on the context research and the organization's activities, how likely are targeted attacks?
* How much time should be devoted to more complete analysis during the audit itself, and what other factors change that?
* What are the implications of targeted malware for the organization, and for the current assessment process?
* What types of malware should trigger an incident response approach?





### Outputs

**Due to the limited window of time, the auditor should focus on identifying suspicious activities and triaging them rapidly**. Many of these will be false positives related to other non-malicious software causing the machine to "act weird" or other types of less serious (and non-targeted) malicious software like adware or ransomware.

When this cannot be ruled out, collecting evidence, running basic research and analysis, and assessing the risk and impact against organizational priorities will help prioritize further action. In-depth binary analysis is best kept for post-audit work during the reporting and follow-up phases. If critical assets are compromised, the auditor might need to coordinate urgent mitigation measures with other IT experts.

Time management is extremely crucial when responding to potential malware infections and similar more advanced threats. If using this method, the auditor should constantly question whether to continue this process or complete other aspects of their audit plan. At the end of the audit process, not having an understanding of the organization's risk tolerance, existing capacity, current practices/processes/policies and existing informational assets will undermine the auditor's ability to provide a prioritized report or understand the context around the potentially malicious activity they have uncovered.

The main outputs of advanced threats identification should be evidence like files, emails, screenshots and URLs included in messages or spotted in suspicious connections.

### Operational Security

* For engagements with high levels of potential threats, the auditor should conduct a more comprehensive **Adversary Capability Assessment** - based on the the technical context research work. Are there Advanced Persistent Threats which should be taken into account? How do they operate? Are there known indicators of compromise to look for?
* An agreement on capturing data in infected devices should be signed with the organization before this step.
* The auditor should ensure they have a clear understanding set with the organization on an incidence response plan, points of contact, and process to allow for safe discussions.
* Dealing with malicious software is risky, you have to be aware of the threats around it, don’t infect yourself or more machines.
* Don't upload files to third party services (use hashes). Take extreme care with identifying or potentially targeted information.
* Use VPNs or Tor to search if conducting the search from a country that is highly competitive with the organization’s country, or is known to surveil.
* For severe infections or incidents, the auditor and the organization may agree, through the Incident Response Plan, to clean or reformat critical devices. This is extremely time consuming, and may result in the loss of data, critical programs where the installation media/license has been lost, and potential re-infection. Proceed with extreme caution and clarity.

### Preparation

#### Baseline Skills

* Knowledge of spotting malicious elements, scanning machines and cleaning them
* Ability to do initial malware research safely
* Ability to image a machine and practice good digital forensics and evidence capture processes (see the Evidence Capture exercise)
* Contacts with malware analysis experts for more in depth investigation

### Resources

<div class="greybox">

#### Malware Analysis

* *Guide:* ["Digital First Aid Kit: My Device Is Acting Suspiciously"](https://digitalfirstaid.org/en/topics/device-acting-suspiciously/)

* *Guide:* ["Recommendations for Readiness to Handle Computer Security Incidents"](https://www.circl.lu/pub/tr-22/#memory-acquisition) (CIRCL)

* *Guide:* ["Guide to Integrating Forensic Techniques into Incident Response"](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf) (NIST)

* *RFC:* ["Guidelines for Evidence Collection and Archiving"](https://tools.ietf.org/html/rfc3227) (IETF)

* *Guide:* ["Electronic evidence - a basic guide for First Responders"](https://www.enisa.europa.eu/publications/electronic-evidence-a-basic-guide-for-first-responders) (European Union Agency for Network and Information Security)

* *Procedures:* ["The ThreatHunting Project"](https://github.com/ThreatHuntingProject/ThreatHunting) ([ThreatHunting.net](http://www.threathunting.net/))

* *Resource Collection:* ["Annotated Reading List"](http://www.threathunting.net/reading-list) ([ThreatHunting.net](http://www.threathunting.net/))

* *Guide:* [Recovering from an intrusion](https://www.ucl.ac.uk/informationsecurity/itsecurity/knowledgebase/securitybaselines/recovering) (UCL Security Baselines)

* *Educational Resources* [Memory Samples](https://github.com/volatilityfoundation/volatility/wiki/Memory-Samples) (Volatility)

* *Educational Resources* [Awesome Malware Analysis](https://github.com/rshipp/awesome-malware-analysis)

* *Presentation:* [Practical Malware Analysis](https://www.blackhat.com/presentations/bh-dc-07/Kendall_McMillan/Presentation/bh-dc-07-Kendall_McMillan.pdf) (Mandiant / Black Hat)

#### Digital Forensics

* *Guide* [ENISA Electronic evidence - a basic guide for First Responders](https://www.enisa.europa.eu/publications/electronic-evidence-a-basic-guide-for-first-responders)

* *Guide* Mahesh Kolhe et al., [Live Vs Dead Computer Forensic Image Acquisition](http://ijcsit.com/docs/Volume%208/vol8issue3/ijcsit2017080331.pdf)

* *Tool* [DEFT 7 Manual - Digital Evidence and Forensics Toolkit](http://www.deftlinux.net/doc/EN-deft7.pdf)

* *Guide* Justin C. Klein Keane, [Capturing a Forensic Image](http://sites.sas.upenn.edu/sites/default/files/kleinkeane/files/forensic-capture.pdf)

* *Blog* SANS Digital Forensics and Incident Response Blog: [Forensics 101: Acquiring an Image with FTK Imager](https://digital-forensics.sans.org/blog/2009/06/18/forensics-101-acquiring-an-image-with-ftk-imager/)

* *Samples* [Test Images and Forensic Challenges](https://www.forensicfocus.com/images-and-challenges) Forensic Focus

* *Samples* [Evidence Files and Scenarios](http://www.digitalforensicsassociation.org/evidence-files/) Digital Forensics Association
</div>

### Activities