---
Approach:
- Research, Technical
Authors:
- SAFETAG
Org_size_under:
- 1000
Remote_options:
- Complete
Skills_required:
- Research, Malware analysis, Risk Assessment
Time_required_minutes:
- 480
---

#### Technical Context Research

##### Summary
This exercise focuses on research into the technical capacity of potential threat actors, including both historical attack data and any indicators of changes to their capacity. Auditors are encouraged to create a summary of their findings for inclusion in the audit report and for sharing (if operational security and the agreement with the organization permits) among trusted networks.

##### Overview
* Explore latest cyber security trends, focusing on the security landscape of organizational hardware and software identified in interviews. [^staying_abreast_of_tech_and_threats]
* Identify access to and ownership/centralized control of communications infrastructure.
* Identify and prepare for any infrastructural barriers
* Research known uses of surveillance, censorship, or malware in the country/region and/or affecting the organization's line of work
* Identify known [technical threats](#technical-threats-by-region) and Advanced Persistent Threats impacting the region or type of work the organization conducts.
* Investigate current non-targeted digital threats affecting the region and/or type of organization.
* Investigate the top targeted digital threats facing organizations doing this work in this region / country.
* Identify any legal barriers associated with common audit recommendations (Secure communications and storage, network forensics, device exploitation, digital security training.) [^PETS_legal_considerations]

##### Materials Needed

##### Considerations

  * Use VPNs or Tor to search if conducting the search from a country that is highly competitive with the organization's country, or is known to surveil.
  * The regional or country focus of the report may reveal information about the acitivites of an auditor. If the report is to be shared, consider sharing in bulk or a significant time after any travel has been completed.
  * If the report is to be shared, ensure your audit agreement with the organization covers and restrictions for sharing.

##### Walkthrough

Thoroughly research technical attack history for the country/region, with a focus on identifying attacks which may focus on the work of the organization. Auditors are advised to track both capability (known attacks and tools) and intent (attempts to aquire tools, changes in policies, public statements). For auditors who intend to share their research efforts, it is incredibly useful to include key quotes and data directly into relevant sections of this document, providing a reference or link back to the original report. This allows future reviewers to more immediately understand your assessment, what it has included and not, and incorporate new material.

It is useful to categorize the research into categories:

* **Surveillance** (Surveillance Technology, Encryption Regulation, Identity Tracking, Requests for User Information)
* **Targeted Attacks** (Targeting Ability, Technical Sophistication)
* **Censorship and Connectivity** (Network Ownership, Shutdowns, Targeted Censorship, Blocking apps, Blocking Circumvention)
* **Seizure and Theft** (Device Confiscation, Targeted Raids, Robbery/Theft)

Keep a separate running list for:
* **Targeted Populations** (Are specific types of people targeted/surveilled due to their identity/race/background?)
* **Targeted Activities** (Are specific activities abnormally targeted - e.g. protests, calls for government transparency, etc.?)
* **Sensitive Events** (Are there specific historic/anniversary/holiday dates, upcoming elections (https://www.ndi.org/elections-calendar), or other known events to be noted?)
* **Sources and New Additions** (What resources have you found, ?)

If the country(ies) of interest are in the [Freedom on the Net](https://freedomhouse.org/report-types/freedom-net) report, you will be able to gather a great deal of baseline information across all the sections by reading through the relevant country reports. The key internet controls found in the Freedom on the Net report ( [https://freedomhouse.org/report/key-internet-controls-table-2016](https://freedomhouse.org/report/key-internet-controls-table-2016) ) guided many of the categories used here, reducing the effort required to create a baseline report. More advanced reporting could include references to the [CAPEC](https://capec.mitre.org/) (Common Attack Pattern Enumeration and Classification) taxonomy, and auditors may also be interested in leveraging the [STIX](https://oasis-open.github.io/cti-documentation/stix/intro) standard to better automate sharing and further research into specific threats using threat information sharing platforms.

Additional organizations which regularly release in-depth digital security focused country reports which are strongly recommended to review in creation of an assessment are listed below. These sources often link to their primary sources or other groups doing dedicated research on the country or topic for further research.  In addition, sub-sections list topic-specific research ideas.

* Digital attacks and threat information affecting NGOs and media
  * [Freedom on the Net Report (Country Reports)](https://freedomhouse.org/report-types/freedom-net)
  * [Human Rights Watch](https://www.hrw.org/regions)
  * [Reporters Without Borders](https://rsf.org/en) ([http://12mars.rsf.org/2014-en](http://12mars.rsf.org/2014-en/)[ ](http://12mars.rsf.org/2014-en/)and [http://en.rsf.org/%5BFULL-COUNTRY-NAME%5D.html](http://en.rsf.org/%5BFULL-COUNTRY-NAME%5D.html))
  * [Privacy International](https://www.privacyinternational.org/) (site:[https://www.privacyinternational.org/](https://www.privacyinternational.org/) "[COUNTRY]" filetype:pdf)
  * Citizen Lab (site:[https://www.privacyinternational.org/](https://www.privacyinternational.org/) "[COUNTRY]")
  * Amnesty International site:[http://www.amnestyusa.org/research/reports/](http://www.amnestyusa.org/research/reports/) [TERM] [COUNTRY]
  * Information Security and Cyber Threats sections of OSAC assessments  [https://www.osac.gov/Pages/ContentReports.aspx?cid=3](https://www.osac.gov/Pages/ContentReports.aspx?cid=3)

* Industry-wide news and data
  * OODALoop: site:https://www.oodaloop.com [COUNTRY]
  * Akami (Security) State of the Internet Report https://www.akamai.com/us/en/about/our-thinking/state-of-the-internet-report/global-state-of-the-internet-security-ddos-attack-reports.jsp
  * [Internet World Stats - Country Internet and Telecom Reports](http://www.internetworldstats.com/)

Below are definitions and resources for the research categories which can help build out a country or regional assessment useful for the auditor, the organization, and for the broader organizational security community.

* **Surveillance**
  * _Surveillance Technology_
    * **Definition and Guiding Questions**: Telecommunications network monitoring or surveillance technology in use. To what extent are providers of access to digital technologies required to aid the government in monitoring the communications of their users?
    * **Useful Data Sources**: [https://sii.transparencytoolkit.org](https://sii.transparencytoolkit.org) , Google Searches of Privacy international:   site:[https://www.privacyinternational.org/](https://www.privacyinternational.org/)  "[COUNTRY]" filetype:pdf, Google Searches of Citizen Lab: site:[https://citizenlab.org/](https://citizenlab.org/)  [TERM] [COUNTRY], Information Security and Cyber Threats sections of OSAC assessments
  * _Encryption Regulation_
    * **Definition and Guiding Questions**: Encryption and/or secure communications and anonymity is limited or banned via regulation. Are users prohibited from using encryption software to protect their communications? Are there laws restricting the use of encryption and other security tools, or requiring that the government be given access to encryption keys and algorithms?
    * **Useful Data Sources**: [https://www.gp-digital.org/world-map-of-encryption/](https://www.gp-digital.org/world-map-of-encryption/), [http://www.cryptolaw.org](http://www.cryptolaw.org) [https://github.com/digitalfreedom](https://github.com/digitalfreedom), [http://www.nationaldefensemagazine.org/archive/2013/August/pages/UseCautionWhenTravelingWithEncryptionSoftware.aspx](http://www.nationaldefensemagazine.org/archive/2013/August/pages/UseCautionWhenTravelingWithEncryptionSoftware.aspx) [http://www.infolawgroup.com/](http://www.infolawgroup.com/) , [https://mlat.info/](https://mlat.info/) , [http://www.itu.int/en/ITU-D/Cybersecurity/Pages/Country_Profiles.aspx](http://www.itu.int/en/ITU-D/Cybersecurity/Pages/Country_Profiles.aspx)
  * _Identity Tracking_
    * **Definition and Guiding Questions**: There are regulations requiring some form of identification  tracking  on telecommunication technology or online platforms, such as for purchase of a SIM card.  Are users able to post comments online or purchase mobile phones anonymously or does the government require that they use their real names or register with the government? Are website owners, bloggers, or users in general required to register with the government?
    * **Useful Data Sources**:  [https://www.gp-digital.org/world-map-of-encryption/](https://www.gp-digital.org/world-map-of-encryption/), [http://www.cryptolaw.org](http://www.cryptolaw.org) [https://github.com/digitalfreedom](https://github.com/digitalfreedom), [http://www.itu.int/en/ITU-D/Cybersecurity/Pages/Country_Profiles.aspx](http://www.itu.int/en/ITU-D/Cybersecurity/Pages/Country_Profiles.aspx)
  * _Requests for User Information_
    * **Definition and Guiding Questions**: The government requests user data from internet intermediaries like ISP’s, social media, and online services.
    * **Useful Data Sources**: Recent transparency reports from top and/or locally relevant service providers; see the following for listings: [https://www.accessnow.org/transparency-reporting-index/](https://www.accessnow.org/transparency-reporting-index/) , [http://thememoryhole2.org/blog/transparency-reports](http://thememoryhole2.org/blog/transparency-reports) , [http://jameslosey.com/post/114045240881/who-publishes-transparency-reports-a-list-of-the](http://jameslosey.com/post/114045240881/who-publishes-transparency-reports-a-list-of-the)

* **Targeted Attacks**
  * _Targeting Ability_
    * **Definition and Guiding Questions**: Host nation has in-house or commercially sourced capability to leverage the information from social media monitoring, arrests, or existing targeted attacks in conducting additional attacks such as phishing, pharming, or spear-phishing.
    * **Useful Data Sources**:  Google Searches of Citizen Lab: site:[https://citizenlab.org/](https://citizenlab.org/)  [TERM] [COUNTRY], [https://targetedthreats.net/media/2-Extended%20Analysis-Full.pdf#page=23](https://targetedthreats.net/media/2-Extended%20Analysis-Full.pdf#page=23) , [http://www.itu.int/en/ITU-D/Cybersecurity/Pages/Country_Profiles.aspx](http://www.itu.int/en/ITU-D/Cybersecurity/Pages/Country_Profiles.aspx)  , [http://www.kroll.com/en-us/intelligence-center/reports/global-fraud-report, ](http://www.kroll.com/en-us/intelligence-center/reports/global-fraud-report)[Symantec](http://www.kroll.com/en-us/intelligence-center/reports/global-fraud-report)[ https://www.symantec.com/security-center/threat-report , https://www.symantec.com/security_response/publications/monthlythreatreport.jsp , https://www.symantec.com/connect/blogs ](http://www.kroll.com/en-us/intelligence-center/reports/global-fraud-report), [Awesome Threat Intel](https://github.com/hslatman/awesome-threat-intelligence)
  * _Technical Sophistication_
    * **Definition and Guiding Questions**: Host nation has in-house or commercially sourced capability to maintain persistent access to targets over time and across platforms.
    * **Useful Data Sources**: [https://sii.transparencytoolkit.org/](https://sii.transparencytoolkit.org/) , APT Groups and Operations sheet (includes targets): [https://docs.google.com/spreadsheets/d/1H9_xaxQHpWaa4O_Son4Gx0YOIzlcBWMsdvePFX68EKU/edit#gid=1864660085](https://docs.google.com/spreadsheets/d/1H9_xaxQHpWaa4O_Son4Gx0YOIzlcBWMsdvePFX68EKU/edit#gid=1864660085) , Google Searches of Citizen Lab: site:[https://citizenlab.org/](https://citizenlab.org/)  [TERM] [COUNTRY],
* **Censorship and Connectivity**
  * _Connectivity and Network Ownership_
    * **Definition and Guiding Questions**: Extent to which telecommunications networks and internet service providers are state owned or operated.
    * **Useful Data Sources**: [https://freedomhouse.org/report-types/freedom-net](https://freedomhouse.org/report-types/freedom-net) ,  [http://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx](http://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx) , ASNs: [https://ipinfo.io/countries](https://ipinfo.io/countries) , DYN Research Reports site:[http://research.dyn.com](http://research.dyn.com) [COUNTRY], Akami State of the Internet Report [https://www.akamai.com/us/en/our-thinking/state-of-the-internet-report/index.jsp](https://www.akamai.com/us/en/our-thinking/state-of-the-internet-report/index.jsp) , ITU Statistics [http://www.itu.int/en/ITU-D/Statistics/Pages/default.aspx](http://www.itu.int/en/ITU-D/Statistics/Pages/default.aspx) , Internet World Stats [http://www.internetworldstats.com/](http://www.internetworldstats.com/)
  * _Internet Shutdowns_
    * **Definition and Guiding Questions**: The host nation is willing and able to obstruct access to the global Internet or mobile networks either in a specific region or nationwide
    * **Useful Data Sources**: [https://www.accessnow.org/keepiton](https://www.accessnow.org/keepiton)
  * _Targeted Censorship_
    * **Definition and Guiding Questions**: Host nation is willing and able to use targeted censorship approaches (including DDoS) against specific websites. To what extent does the state employ legal, administrative, or other means to force deletion of particular content, including requiring private access providers to do so? To what extent does the state or other actors block or filter specific internet and other ICT content, particularly on political and social issues e.g. distributed denial of service attacks (DDoS) attacks,  content removal requests, and legal take-downs
    * **Useful Resources:** [https://explorer.ooni.torproject.org/world/](https://explorer.ooni.torproject.org/world/) , [https://www.herdict.org/explore/indepth](https://www.herdict.org/explore/indepth) , [https://www.qurium.org/alerts/](https://www.qurium.org/alerts/) , [https://equalit.ie/category/deflect-labs/](https://equalit.ie/category/deflect-labs/) , DYN Research Reports site:[http://research.dyn.com](http://research.dyn.com)   [COUNTRY], Internet Monitor [https://cyber.law.harvard.edu/research/internetmonitor](https://cyber.law.harvard.edu/research/internetmonitor)

  * _Blocking Communications Apps and Platforms_
    * **Definition and Guiding Questions**: Entire platforms temporarily or permanently blocked to prevent communication and information sharing.
    * **Useful Data Sources**: [https://explorer.ooni.torproject.org/world/](https://explorer.ooni.torproject.org/world/), [Herdict](https://www.herdict.org/), [GreatFire (for China)](https://en.greatfire.org/analyzer)
  * _Blocking Circumvention_
    * **Definition and Guiding Questions**: Host nation is willing and able to disable the use of circumvention or secure communications technology.
    * **Useful Data Sources**: [https://explorer.ooni.torproject.org/world/](https://explorer.ooni.torproject.org/world/)

* **Seizure and Theft**
  * _Device Confiscation_
    * **Definition and Guiding Questions**: Likelihood of confiscation of user devices when interacting with security forces. E.g. When crossing borders, at internal checkpoints, or during detainment or arrest. See themes for "targeted individuals"
    * **Useful Data Sources**: See physical-security risk register and for information around border crossings.
  * _Targeted Raids_
    * **Definition and Guiding Questions**: Likelihood of office raid and seizure of equipment by host nation. See project information for modifiers around "unwelcome themes," “environmental factors,” and “office being built / existing” as well as physical security risk register for risk of sanctioned office raids.
    * **Useful Data Sources**:
  * _Robbery/Theft_
    * **Definition and Guiding Questions**: Likelihood of (non-host nation) theft of user or office devices
    * **Useful Data Sources**: OSAC reports [https://www.osac.gov/Pages/ContentReports.aspx?cid=2](https://www.osac.gov/Pages/ContentReports.aspx?cid=2) , Pinkerton Risk Index [https://www.pinkerton.com/risk-index/](https://www.pinkerton.com/risk-index/) ,
