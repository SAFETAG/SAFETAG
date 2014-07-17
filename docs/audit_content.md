## Audit Sections

  * Engagement
    * Threat Modeling
A set of activities that are undertaken on the first or second day that the auditor runs with the staff to identify the "critical infrastructure" of the organization to guide the audit and theme of the reporting.
      * Asset Analysis
Identifying the range of assets an organization holds as valuable (staff, partners, plans, financial info, media content, customer/employee data)  and the impact of their potential loss/leakage. (Activity)
      * Process Analysis
Identifying the processes that allow the organization to function (publishing, payment, fund-raising, outreach, interviewing) the assets and systems (websites, software, PayPal) they rely on, and which ones are critical to their work. (Activity)
    * Remote Assessment / OS-INT
The remote assessment methodology focuses on direct observation of an organization and their infrstructure. This methodology uses "Open Source Inteligence" to gather as much information as the auditor can about an organization. This information is used to inform many of the following sections and can be done remotely. 
      * Service Identification
Identifying services being hosted or used by an organization and information about those services (e.g current versions of those services.)
      * Staff or Partner Identification
Identifying staff, partners, and beneficiaries.
    * External
The external assessment methodology focuses on the identification of vulnerabilities that will allow an external actor (without access to the local network) to gain access to services or information that they are not authorized to have access to.
      * Service Vulnerability Assessment (audit)
Identifying publicly identified vulnerabilities that can be used against services to gain greater access than should be allowed. This section contains a general vulnerability research section and targeted sections for commonly identified vulnerabilities.
        * Vulnerability Research
Using public research on vulnerability and exploit databases, vendor advisories, and virtualized replica testing 
        * Communication
Common concerns for services used for communication.
          * Mail (audit)
Identifying common mail configuration vulnerabilities.
          * Chat/Video Conferece Service Assessment (audit/activity)
Identifying common chat and video communication vulnerabilities.
        * Web (Audit)
Common concerns for externally facing web services.
        * VPN (Audit)
VPN fingerprinting for analysis of security of VPN solutions.
        * Wifi Access Assessment
Auditing wireless access to the organization.
          * WEP (audit)
Common concerns for WEP access points.
          * WPA (audit)
Common concerns for WPA access points.
          * WPS (audit)
Common concerns for WPS access points.
    * Internal - Once inside network
The internal assessment methodology focuses on the security of individual user's devices and their network traffic.
      * Network Traffic Assessment (Audit)
Identifying vulnerable services and practices being used over the local network that can be exploited.
      * Software Version Assessment (Handout/Activity)
Identify software run on computers and the current version of that software. Check this against (handout) "software current version" to identify attacks that the office is vulnerable to. This is used to develop a report component exposing how un-updated software can lead to large vulnerabilities.
      * Firewalls (Audit)
Identifying user and local firewall rule-sets. 
      * Data Storage (audit)
Individual Device Encryption.
        * Phishing, Malware, & Social Engineering
This component focuses on assessing and educating organizational staff on how to prevent, identify, and respond to social engineering attempts. 
          * Admin Rights (Audit)
Are used using admin on their computers, or are they using another user and have to type in a password to get admin rights.
          * Personal information you should not give out (Handout)
The personal information that organizational employees should keep private. (Handout & short activity)
    * Physical Assessment
The physical assessment methodology is focused on how to mitigate against threats that occur because of the arrangement of digital assets in the physical world.
      * Data Retention
How to make sure that old data does not put the org, or others, at risk.
      * Data Backup
How to make sure you can't do your work if local data is lost." is the backup drive for the whole organization laying unencrypted and unplugged on the desk of the executive director and/or sysadmin?"
      * Beacons & other wireless emissions
Auditing / Training on how devices beacon, if association and tracking in in the threat model.
      * Server Access
Where are the servers that host the organizations assets. Is the location locked, if so, who has the key, etc.
      * Device Storage
How are daily devices used and stored? Where are they when employees go home? 
      * Active Network Jacks
Are there active network jacks that are unused? Are they within easy access to the public? Are they in places where people would not notice if there was somthing plugged into them?

## Content to be created for each audit section

Each audit section should contain the following content. This content is used to populate various sections.

*Reporting Content*
  * summary - A short - two to three sentence - basic overview of the vulnerability.
  * description - An longer in-depth - two to three paragraph - overview of the vulnerability.
  * approach - Step-by-step explanation of how the vulnerability is tested that is tool agnostic.
  * threats - The threats that are associated with this specific vulnerability.
  * recommendation - The recommended fix to address this problem. 
  * resources - Guidance on how to seek out support to address this issue. 
  * skills - The skills needed to address the problem identified. This can include the skills needed to address a technical problem by a technologist or the digital security skill training needed.

*Audit Content*
  * baseline skill set - The minimum skills required to safely carry out a threat modeling activity.
  * instructions - tool-specific step-by-step instructions on how to identify the vulnerability.

*ADIDS Content*
  * Data Collection - What data to collect for reporting and how to present that data for the clearest understanding.
  * example - a folder with sample example content and example images from a false audit.

*Optional Content*
  * Training Activities - SHORT training activities that supplement sections that could otherwise be detrimental to achieving organizational agency (see: social engineering)
  * Handouts - Handouts to give to to the organization staff to support training or post-audit learning
  * Operational Security - Auditor guidelines for managing the audits operational security when running the audit.
