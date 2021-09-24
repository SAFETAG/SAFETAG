# Guide

## License

SAFETAG resources are available under a Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) License

The audit framework and checklist may be used and shared for educational, non-commercial, not-for-profit purposes, with attribution to Internews. Users are free to modify and distribute content under conditions listed in the license.

The audit framework and checklist is intended as reference and the authors take no responsibility for the safety and security of persons using them in a personal or professional capacity.

### Attribution for content from other Licenses

* The Interview and Capacity Assessment components borrows heavily from [the engine room's](https://www.theengineroom.org) [TechScape](https://www.theengineroom.org/projects/techscape/) project. They have [made their content available](https://www.theengineroom.org/attribution-policy/) under the [Creative Commons Attribution License](https://creativecommons.org/licenses/by/3.0/us/).
* The Data Assessment Activity was taken from the [Level Up Project](https://level-up.cc) is available under a [Creative Commons Attribution-Share Alike Unported 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/). This activity is credited to Pablo, Daniel O’Clunaigh, Ali Ravi, and Samir Nassar.

### Usage of "SAFETAG"

SAFETAG is itself a framework and template for organizational audits.  As such, audits performed which use or adapt SAFETAG materials may be referred to as "adapting the SAFETAG methodology" or "based on the SAFETAG framework", and similar phrasings, but may NOT be called "SAFETAG audits".

This is not intended to imply that an audit using any or all of the SAFETAG materials need to refer to SAFETAG at all.

This usage policy does not affect the distribution of SAFETAG materials, covered in the license statement above.

## Introduction

The Security Auditing Framework and Evaluation Template for Advocacy Groups (SAFETAG) is a professional audit framework that adapts traditional penetration testing and risk assessment methodologies to be relevant to small and medium, non-profit, human rights organizations based or operating in the developing world, taking into account the capacity constraints and unique threats faced in this community.

SAFETAG uses assessment activities derived from standards in the security auditing world and best-practices for working with small scale at-risk organizations to provide organization-driven risk assessment and mitigation consultation. SAFETAG auditors lead an organizational risk modelling process that helps staff and leadership take an institutional lens on their digital security problems, conduct a targeted digital security audit to expose vulnerabilities that impact the vital processes and assets identified, and provide post-audit reporting and follow-up that helps the organization and staff identify the training and technical support that they need to address needs identified in the audit.

info@safetag.org | https://safetag.org

## The SAFETAG Audit Framework Core

The SAFETAG audit consists of multiple information gathering and confirmations steps as well as research and capacity-building exercises with staff. These are organized in a collection of objectives, each of which supports the core goals of SAFETAG: creating an information security risk assessment while simultaneously building the capacity of the organization to manage its risk.

These objectives provide collections of approaches and activities to gather and verify information in both technical and interactive/social methods and to assess and build capacity. Many of these activities include targeted exercises and walk-through instructions.

These are not meant to be a "checklist" or even a prescribed set of actions -- indeed, experienced auditors will deviate strongly from many of the specific activities. SAFETAG  provides only a library of activities which auditors can draw from, as well as guidance on what a "minimal set" of audit activities would entail.

Indeed, many objectives and their specific exercises overlap or can be done together -- on-site interviews with staff can coincide with assessing their devices and keeping one's eyes open for physical security issues. Conversely, the data assessment exercises may provide enough information that other staff engagements are unnecessary.

## The Life Cycle of an Audit

SAFETAG consists of a collection of high-level Methodologies, each with a variety of linked activities, that contribute towards the goals and their required information needs is represented here. Activites tend to fall in three broad approaches: Technical, Research, and Interpersonal. It is tempting to focus on the style of approach you as the auditor are most comfortable with - people with backgrounds in digital security training tend towards the interpersonal, people with pentesting backgrounds the technical. However, by using a combination of these, you get a clearer understanding of not only the organization’s setup and infrastructure, but how decisions are made, how policies are enforced (or not), and where there are opportunities for organizational change. Experienced Auditors will likely come up with their own approaches, and the SAFETAG project welcomes such contributions.  

The audit process is very cyclical. Assessment activities reveal new threats, vulnerabilities, capabilities, and barriers which in turn shed new light on activities that have already been and have yet to be run. At the same time the auditor, through conversations, training, and group activities is actively building the organization's agency and addressing time-sensitive or critical threats insofar as possible within the time frame. This iterative process eventually leads to a point where the auditor is confident they have identified the critical and low-hanging fruit, and is confident the organization is capable of moving forward with their recommendations.

Each objective requires a certain base of information, and outputs more information into this cyclical process.  Each objective has a "map" of the data flow that it and its specific activities provide:

![SAFETAG Data Flow](/img/data_flow_all.png)

* **Actors** are the people connected to an organization including an organization's staff, board members, contractors, and partners.  Actors could also include volunteers, members of a broader community of practice, and even the family members of principle actors. Actors also include potential adversaries of the organization such as competing groups.
* **Activities** are the actions and processes of an organization.  While most NGO work revolves around program-based concepts, activities also include things like payroll.
* **Capacity** includes staff skills and a wide variety of resources that an organization can draw from to affect change including funding, networks, and institutional processes and policies.
* **Barriers** are specific challenges an organization faces that might limit or block its capacity.
* **Assets** are most easily conceptualized as computer systems - laptops and servers, but also include both the data stored on them and can also be services like remote file storage, hosted websites, applications, webmail, and more.  Offline drives, USB sticks, and even paper records containing sensitive information are also assets.
* **Vulnerabilities** are specific flaws or attributes of an asset susceptible to attack.
* **Threats** are specific, possible attacks or occurrences that could harm the organization.

If a bucket of oily rags is a **vulnerability**, a fire is the **threat**.  **Mitigations** would be rules against leaving oily rags around as well as fire extinguishers, smoke detectors, remote backup policies, and evacuation planning. Note that some mitigations may be outside the **capacity** of an organization -- perhaps there is limited budget (a **barrier**)  for one fire extinguisher or one smoke detector, but not both. **Vulnerability** can be reduced by implementing mitigating strategies for the assets at highest risk of combustion or smoke damage. The auditor will need to work with the organization to review **assets**, **activities**, and **actors** as well as a detailed review of the **threats** to determine the organization's response.

These components are defined in greater depth in the Risk Assessment and Agency Building sections to follow.

## Risk Assessment & Analysis

Functionally, SAFETAG is an information security risk assessment framework. Risk assessment is a systematic approach to identifying and analyzing risks associated with potential hazards to organized human activities. SAFETAG focuses this approach on information security risks. A SAFETAG audit will work to collect the types of information listed in sections below in order to assess the risks an organization faces.

### Risk

Risk is the current assessment of the possibility of harmful events occurring. Risk is assessed by comparing the threats an actor faces with their vulnerabilities, and their capacity to respond to or mitigate emergent threats.

The SAFETAG evaluation revolves around collecting enough information to identify and assess the various risks an organization and its related actors face so that they can take action strategically.

![The Risk Equation](/img/risk_equation.svg)

SAFETAG breaks the risk analysis down into three parts: Program Analysis, Vulnerability Analysis, and Threat Analysis.

### Program Analysis

Program analysis identifies the priority objectives of the organization and determine its capacities. This process helps the auditor identify and describe the activities, actors, and capacities of an organization.

#### Activities

**Definition:** The practices and interactions that the organization carries out in order to accomplish their goals. This includes any activity that the organization carries out to accomplish its goals and those that allow the organization to function.

**Example:**  Organizing conferences, publishing press releases, sending out newsletters, legal aid clinics, conducting research, making payments, fund-raising, renewing legal registration status.

* What is the main purpose of the organization?
* What are the processes the organization takes part in and executes to carry out their work?

#### Actors

**Definition:** The staff, volunteers, partners, beneficiaries, donors, and adversaries associated with the organization.

**Example:** The core organizational staff, the volunteers, maintenance, cleaning, security, or other non-critical staff; the partner organizations; the individuals and groups that the organization provides services to; groups of unorganized individuals who are opposed to organizational aims, governmental and non-governmental high-power agents and organizations that are opposed to the organizations aims.

* What staff does the organization have?
* Are their volunteers, maintenance, cleaning, security, or other non-critical staff who have access to the office?
* Who does the organization serve?
* Does the organization have any partners?
* Who are the organizations beneficiaries?
* Who is threatened by the work of the organization?
* Who has opposed the organization in the past or might do so in the future?

### Vulnerability analysis

Understand the organisation’s exposure to threats, points of weakness and the ways in which the organisation may be affected.

#### Vulnerability

**Definition:** An attribute or feature that makes an entity, asset, system, or network susceptible to a given threat.

**Example:** Poorly built or unmaintained hardware, software, or offices as well as missing, ignored, or poor policies or practices around security.

### Threat Analysis

Threat analysis is the process of identifying possible attackers and gathering background information about the capability of those attackers to threaten the organization. The basis of this information is a potential threat's **history** of carrying out specific threats, their **capability** to carry out those threats currently, and proof that the threat has **intent** to leverage resources against the target.

#### Threat

**Definition:** A threat is a possible attack or occurrence that has the potential to harm life, information, operations, the environment, and/or property.

**Example:** Threats can range from *fire,* or *flood,* to *targeted malware,* *physical harassment,* or *phishing attacks.*

##### Threat History

**Definition:** The types of threats the attacker has used historically and and the types of actors which have been targeted by those threats.

**Example:**

* What history of attacks does the threat actor have?
* What techniques have they used? Have they targeted vulnerabilities that the organization currently has?
* Have they targeted similar organizations?
* What is known about the types of threats used by a threat actor to attack similar organizations?

##### Threat Capability

**Definition:** The means that the attacker has to carry out threats against the organization.

**Example:** This includes, but is not limited to technical skill, financial support, number of staff hours, and legal power.

* Does the threat actor have the means to exploit a vulnerability that the organization currently has?
* Does the threat actor have the means to leverage widespread threats against all similar organizations, or will they have to prioritize their targets?

##### Threat Intent

**Definition:** The level of desire for the attacker to carry out threats against the organization.

**Example:** Intent can be goals or outcomes that the adversary seeks; consequences the adversary seeks to avoid; and how strongly the adversary seeks to achieve those outcomes and/or avoid those consequences.

* Does the threat actor currently have the desire to conduct an attack against this type of organization?
* Is the organization a priority threat target for the threat actor?

## Agency Building

SAFETAG differs from many risk assessment tools because it aims to build the host's and staff's capacity so that they are able to address the risks that the auditor has identified. SAFETAG is designed to provide in-audit activities and training that increase an organization's agency to seek out and address security challenges within their organization. To do this an auditor must collect information that allows them to identify organizational areas of strength and weakness - for instance staff expertise, financial resources, willingness to learn, and staff time.

A common refrain among auditors, software developers and other specialists in this sector is that digital security is not about technology; it is about people. This is undeniably true, and the SAFETAG modules — despite their more direct fixation on technology — acknowledge this insight by emphasizing the educational and persuasive roles played by your findings report.

#### Capacity

**Definition:** The combination of strengths, attributes and resources available within the organization that can be used to reduce the impact or likelihood of threats.

**Example:** Technical skill, financial support, staff and management time, internal processes, relationships, and legal clout.

#### Barriers

**Definition:** The combination of weaknesses, assumptions, regulations, social or cultural practices, and obligations that get in the way of an organization effectively managing digital security risk.

**Example:** Lack of funding, lack of authority within an organization to mandate practices to their staff, resistance to change, high staff turnover, or digital illiteracy.

## Operational Security

"*Be aware that local groups may not be able to accurately gauge the safety of their communications with you. Sometimes they underestimate the likelihood of risk - at other times, they can wildly overestimate the risk. Either way, [you] need to navigate this issue carefully and respectfully with a "do no harm" approach that respects the reported needs, context, and experiences of your local contact and potential trainees.*" - *Needs Assessment: Level-Up* [^event_planning_input]

### Summary

Operational security refers to the security measures taken by you to protect the auditee and yourself throughout the audit process itself. Below are some baseline operational security guidelines for a SAFETAG audit. Activity-specific operational security guidelines are contained within each activity.

### Purpose

An audit uncovers an array of sensitive information about an organization. For some at-risk populations the mere act of getting a digital security audit can increase their likelihood of being actively attacked by an adversary. The foundation of the SAFETAG process is the goal of increasing the safety of the host organization, its staff, and the auditor. It is vital that an auditor weigh the possible risk an audit may incur on the organization or the auditor against the possible benefits of the audit. In other words, there may be circumstances where carrying out an audit could introduce such levels of risk to the organization or the auditor that that a no-go decision must be made.

### Approaches

**Data storage and data transit security**

* Keep ALL data related to the assessment secured and compartmentalized, from interview and research notes through audit findings and reporting outputs. Auditors should note where tools (such as OpenVAS or recon-ng) store their internal data. Practically speaking, LUKS or VeraCrypt volumes are useful, secure, and portable. The auditor should modify their data storage approach based on threat information from their context research.
* Consider what secure storage options the organization will need to have in place to store the final report and findings documents.
* Consider if the raw data may be at risk during transit post-audit and plan mitigations in advance of travel (e.g. completing the report on-site or uploading to a secure remote server and securely deleting all data locally).
* Refer back to the agreement established with the organization.

**Communications security**

* Conduct all communication with the client over at least minimally secure channels where the communication is encrypted in transit at all times. Consider risks to the organization and the auditor(s) if the organization is actively compromised.
* Higher levels of security with end-to-end guarantees (such as Signal, Wire, PGP, or Veracrypt) should be used for file and document transfers.
* Training and support may be required to ensure the organization is able to reliably and securely receive such communications.

**Data Deletion**

* When assessment data is to be destroyed (by the auditor or organization), ensure secure data deletion processes are followed.

### Resources

* *Standard*: [NIST SP 800-115, Technical Guide to Information Security Testing and Assessment](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-115.pdf) (Section 7.4)
* *Standard*: [Pentest Standards for data security](http://www.pentest-standard.org/index.php/Pre-engagement#PGP_and_Other_Alternatives)
* *Guide*: [Surveillance Self Defense](https://ssd.eff.org/en/index) (cross-platform guides for WhatsApp, Signal, PGP, and OTR secure communications)
* *Guide*: [Security in a box: Secure File Storage](https://securityinabox.org/en/guide/secure-file-storage/)