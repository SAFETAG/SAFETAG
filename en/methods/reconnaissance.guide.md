---
Authors:
- SAFETAG
Info_provided:
- unknown
Info_required:
- unknown
---

## Reconnaissance

### Summary
The remote assessment methodology focuses on direct observation of an organization and their infrastructure, consisting of passive reconnaissance of publicly available data sources ("Open Source Intelligence") This allows the auditor to identify publicly available resources (such as websites, extranets, email servers, but also social media information) connected to the organization and remotely gather information about those resources.

### Purpose

While much of SAFETAG focuses on digital security challenges within and around the office,  unintended information available from "open sources" can pose real threats and deserve significant attention.  This also builds the Auditor's understanding of the organization's digital presence  and will guide specific vulnerabilities to investigate once on site.

### The Flow Of Information
![Reconnaissance Information Flow](images/info_flows/reconnaissance.svg)

### Guiding Questions

* Depending on the organization's security needs, does it "leak" any sensitive information online (location, staff identities, program locations?)
* Can you identify partners or beneficiaries through the organizations sites?
* What is the pattern for staff e-mail addresses?
* Have any of the the organization's servers, users, or e-mail accounts been compromised in the past?
* Are executive / staff social media accounts in scope, and if so, are they compliant with the organizational social media policies? What additional threats do they introduce?




### Outputs

  * Dossier of organizational, partner, and beneficiary "open sources" information exposed online.
    * A list of e-mail address for members of the organization.
  * Identification and mapping of externally facing services and unintentionally exposed internal services.
    * Possible vulnerabilities in the websites and externally facing servers of the organization.
    * Existing information about earlier breaches identified in the paste-bin search.
  * Follow the proper incident response plan if high risk problems are identified.

### Operational Security

 * While this does not focus on identifying of vulnerabilities, it may nonetheless expose certain threats, particularly with regard to publicly-accessible information that is presumed to be confidential, such as the identity of sensitive staff, the existence of sensitive partner- and funder-relationships, or the organization’s history of participation in sensitive events or travel to sensitive locations.


### Preparation

This Section:

  * does not require privileged access to the organization's offices, infrastructure or staff;
  * relies primarily on third-party data sources and observation and light probing of the organization’s infrastructure;
  * can generally be carried out from any secure Internet connection.
  



### Resources
<div class="greybox">


#### Open Source Intelligence (General)

  * *Standard:* [Intelligence Gathering](http://www.pentest-standard.org/index.php/Intelligence_Gathering) (The Penetration Testing Execution Standard)

  * *Guide:* ["Passive Reconnaissance"](http://www.securitysift.com/passive-reconnaissance/) (Security Sift)

  * *Tool:* ["NameChk account search"](http://namechk.com/) (NameChk)

  * *List:* ["Open Source Intelligence Links"](http://www.inteltechniques.com/links.html) (Intel Techniques)
  
  * *List:* ["OSINT Tools - Recommendations List Free OSINT Tools."](http://www.subliminalhacking.net/2012/12/27/osint-tools-recommendations-list/) (subliminalhacking.net)

  * *Guide:* ["OWASP Testing Guide v4 - Information Gathering"](https://www.owasp.org/index.php/Testing_Information_Gathering) (OWASP)







#### Organizational Information Gathering

  * *Database:* ["find the email address formats in use at thousands of companies."](http://www.email-format.com/) (Email Format)


#### Searching

  * *Online Courses:* [Power Searching and Advanced Power Searching online courses](http://www.powersearchingwithgoogle.com/) (Power Searching With Google)

  * *Online Course:* [Advanced Power Searching By Skill](http://www.powersearchingwithgoogle.com/course/aps/skills) (Power Searching With Google)
  
   * *Cheat Sheet:* [Google Search Operators](https://support.google.com/websearch/answer/136861) (Google Support)

  * *Cheat Sheet:* [Google Hacking and Defense Cheat Sheet](https://www.sans.org/security-resources/GoogleCheatSheet.pdf) (SANS)

   * *Cheat Sheet:* [Google Searchable Filetypes](https://support.google.com/webmasters/answer/35287?hl=en) (Google Support)

  * *Cheat Sheet:* [Google Search Punctuation Operators](https://support.google.com/websearch/answer/2466433) (Google Support)

  * *Cheat Sheet:* [Google Power Searching Quick Reference Guide](http://www.powersearchingwithgoogle.com/course/ps/assets/PowerSearchingQuickReference.pdf) (Power Searching With Google)

  * *Database:* [Google Hacking Database](http://www.exploit-db.com/google-dorks/) (Exploit Database)


#### Pastebin Searching

  * *Article:* ["Using Pastebin Sites for Pen Testing Reconnaissance"](http://blog.zeltser.com/post/7303303567/paste-sites-for-pen-testing-reconnaissance) (Lenny Zeltser)
  
  * *Custom Search* ["This custom search page indexes 80 Paste Sites:"](http://inteltechniques.com/OSINT/pastebins.html) (Intel Techniques)

  * *Article* ["Pastebin: How a popular code-sharing site became the ultimate hacker hangout"](http://thenextweb.com/socialmedia/2011/06/05/pastebin-how-a-popular-code-sharing-site-became-the-ultimate-hacker-hangout/) (Matt Brian)

  * *Advanced Search* ["Github Advanced Search"](https://github.com/search/advanced) (Github)


#### Recon-ng

  * *Site:* ["Recon-ng: Website"](https://bitbucket.org/LaNMaSteR53/recon-ng/overview) (Bitbu  * *Guide:* [The Recon-ng Frameworkcket)
  
  * *Type:* ["Recon-ng: Usage Guide"](https://bitbucket.org/LaNMaSteR53/recon-ng/wiki/Usage%20Guide) (Bitbucket)
  
  * *Demonstration:* ["Look Ma, No Exploits! – The Recon-ng Framework - Tim "LaNMaSteR53" Tomes"](http://www.irongeek.com/i.php?page=videos/derbycon3/1104-look-ma-no-exploits-the-recon-ng-framework-tim-lanmaster53-tomes) (Derbycon 2013)
  
  * *Guide:* [toolsmith guide to Recon-ng](http://holisticinfosec.blogspot.com/2013/05/toolsmith-recon-ng.html)

  * *Video:* [Tektip ep26 - Information gathering with Recon-ng Video Tutorial](http://www.tekdefense.com/news/2013/3/24/tektip-ep26-information-gathering-with-recon-ng.html)

  * *Guide:* [The Recon-ng Framework : Automated Information Gathering](http://resources.infosecinstitute.com/the-recon-ng-framework-automated-information-gathering/)

  * *Guide:* [The Recon-ng Framework : Updated modules](http://resources.infosecinstitute.com/basic-updated-guide-to-recon-ng-plus-new-modules-rundown/)

   * *Blog:* [Professionally Evil Toolkit - Recon-ng](http://blog.secureideas.com/2013/11/professionally-evil-toolkit-recon-ng.html)
</div>

### Activities