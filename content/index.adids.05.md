---
type: ADIDS
id: adids-remote-audit-index
...

# 5. Remote [stub]

<!-- ![](content/images/remote.png "") -->

!INCLUDE "audit/engagement/remote/summary.md"

### Why The Topic Matters [stub]

!INCLUDE "audit/engagement/remote/why_it_matters.md"

### What Participants Will Learn [stub]

!INCLUDE "audit/engagement/remote/what_participants_will_learn.md"

### Objectives [stub] {.sidebar}

!INCLUDE "audit/engagement/remote/objectives.md"

### Baseline Skills [stub]

!INCLUDE "audit/engagement/remote/baseline_skills.md"

### Before you Start [stub]

<?trainer resources?>
!INCLUDE "audit/engagement/remote/before_you_start.md"

### Materials Needed [stub]

!INCLUDE "audit/engagement/remote/materials_needed.md"

## Activity [stub] {.activity}

<?The activities focus on introducing the user to the scope of this threat or section using an activity that lets them explore the concept without the tool so that they can start tool usage with an existing set of use cases in mind.?>

Hide and Seek:

## Discussion [stub] {.discussion}

<?SAFETAG specific: For Audit discussions the auditor will provide scenarios that allow a trainee to explore ways they would use/focus a auditing technique with the identified risks in the case study provided.?>

## Input [stub] {.input}

<?This is usually the lecture part of the session. The trainer presents on issues, sub-topics and more advanced concepts related to focus of the session. An effective input session is one in which the participants are engages with a range of materials including case studies and there is a give and take in knowledge sharing among trainers and participants.?>

### Scope of Remote Section [stub]

!INCLUDE "audit/engagement/remote/scope.md"

#### Purpose of the Remote Audit [stub]

!INCLUDE "audit/engagement/remote/purpose.md"

#### Information Gathering Methodology  [stub]

<?step-by-step explanation that is tool agnostic of the audit / approach?>
!INCLUDE "audit/engagement/remote/approach.md"

### Introduction to Contextual Sources

Gathering contextual information to inform your audit. The remote section is not simply enumerating risks, but identifying the local 

- Contextual  information  about  country  in  which  the  organization  in.
  - https://www.theengineroom.org/wp-content/uploads/TSQuestionset3-1_2606121.pdf (Section 0B2_1)
  - Civil Society Index Reports:
    - http://civicus.org/index.php/en/media-centre-129/reports-and-publications/csi-reports
	- http://csi.civicus.org/
  - Corruption Perception Index
    - http://cpi.transparency.org/cpi2011/results/
  - ETC. -> See TechScape Section 0B2_1 When ready to continue this section.
  
### Introduction to SpiderFoot [stub]

!INCLUDE "path/to/spiderfoot/summary.md"

!INCLUDE "path/to/spiderfoot/why_spiderfoot.md"

### Advanced Concepts  [stub]

For audit sections we will do the actual tool training and  conduct mini-follow up on the larger safetag audit themes in relationship to that audit.

- Operational Security
- Practices for results capture
- Practices for displaying results
- Incident response for this audit type
- connecting results to the threats identified
- Translating results to various audiences

## Deepening  [stub]  {.deepening}

<?This is the hands-on segment of a session. The deepening will consist of a live experiment with a tool using existing data that has been already parsed, un-parsed data, and an opportunity to capture live data from a static target and the housing training organization using the tool.?>	

#### Hands on Training

<?Hands-on training on various components of the tool. This will be a moderately collaborative segment where the trainees will have documentation and be encouraged to explore the tool.?>

##### What you will need

##### Setting up Spiderfoot

  * Spiderfoot 2.2 Branch of GitHub

##### Configuring Spiderfot

  * API Keys
    * SHODAN
    * VirusTotal
    * projecthoneypot.org
  * Using a SOCKS proxy

##### Using Spiderfoot

**OUTPUT OVERVIEW**
```
Affiliate - Domain
Affiliate - Hostname
Affiliate - IP Address
Co-Hosted Site
Email Gateway (DNS 'MX' Records)
HTTP Headers
HTTP Status Code
Human Name
IP Address
IP Address - Subnet
Internet Service Provider
Linked URL - External
Linked URL - Internal
Malicious Affiliate IP Address
Malicious IP on Same Subnet
Name Server (DNS 'NS' Records)
Open TCP Port
Open TCP Port Banner
Physical Location
Raw DNS Records
Raw Data from RIRs
SSL Certificate - Issued by
SSL Certificate - Issued to
SSL Certificate - Raw Data
SSL Certificate Host Mismatch
Search Engine's Web Content
Similar Domain
Social Media Presence
Sub-domain/Hostname
URL (Purely Static)
URL (Uses Javascript)
URL (Uses a Web Framework)
User-Supplied Target
Web Content
Web Server
```

#### Live Practice
<?A timed practice session on a live target?>

##### Capturing Data

##### Writing up Findings

##### Connecting to Assets and Process'


## Synthesis  [stub]  {.synthesis}

<?A good training habit is to always summarize the session. Talk about what happened in the session, some of the results of the discussion, what issues were discussed, what solutions were made, and give some more time for participants to ask more questions before the session is closed.?>

- Sharing Results from Deepening
- Discussion about why auditors took different approaches
