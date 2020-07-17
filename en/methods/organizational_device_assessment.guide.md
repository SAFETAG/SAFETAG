---
Authors:
- SAFETAG
Info_provided:
- unknown
Info_required:
- unknown
---

## Organizational Device Usage

### Summary

This component allows the auditor to discover and assess the security of the devices on the network and/or used in the organization. This component consists of interviews, surveys, network mapping, and inspection of devices.

### Purpose

Compromised devices have the ability to undermine nearly any other organizational attempt at securing information. Knowing if devices receive basic software and security updates/upgrades and what core protections exist against unauthorized access is vital to designing a strategy to make the host more secure. Because the SAFETAG framework is focused on the security of data, it's also crucial that the physicality of devices on which this data resides, including the hard-wired networks through which it's exchanged, be not overlooked.

### The Flow Of Information
![User Device Assessment Information Flow](images/info_flows/user_device_assessment.svg)

### Guiding Questions

* What work and personal devices do staff use to accomplish their work, store work related files, or engage in work communications?
* What organizational and external/personal services  do staff use to accomplish their work, store work related files, or engage in work communications?
* How do staff communicate internal and external? What tools do they use?
* What are the existing in/formal security practices that the participants use to address risks.
* Who has physical access to what? Who has remote access to what?
* When are devices not monitored by trusted staff?
* How could adversaries gain access? (forced entry, theft, social engineering, seizure)
* Are there mitigation procedures if devices are lost or taken by adversaries? (e.g.: encrypted drives, offsite backups?)




### Outputs

* List of all assets in the organization and whom they belong to.
* Notes on un/documented access controls measures for the office
* List of software running on staff devices and date of last update
* List of known vulnerabilities, and identifiable malware, that the office is vulnerable to.
* List of malware found by running updated anti-virus on office computers (if anti-virus installed during device inspection.)
* List of specific unsecured servers, workstations, external hard   drives and any other digital resources
* Notes on existing security measures for all digital systems
* Written-down passwords
 

### Operational Security

  * Treat the information learned/collected with the utmost sensitivity and security. Physical notes should be destroyed immediately after use and digital notes should be kept in line with overall SAFETAG standards. 

### Preparation

#### Baseline Skills

* Basic systems administration experience for common operating systems


### Resources
<div class="greybox">

  * *Guidelines:* ["Guidelines on Firewalls and Firewall Policy"](http://csrc.nist.gov/publications/nistpubs/800-41-Rev1/sp800-41-rev1.pdf) (NIST 800-41)

  * *Benchmarks:* ["Security Configuration Benchmarks"](http://benchmarks.cisecurity.org/downloads/browse/index.cfm?category=benchmarks) (CIS Security Benchmarks)

  * *Repository:* ["National Checklist Program Repository - Prose security checklists"](https://web.nvd.nist.gov/view/ncp/repository) (National Vulnerability Database)

  * *Security Guidance:* ["Operating Systems Security Guidance"](https://www.nsa.gov/ia/mitigation_guidance/security_configuration_guides/operating_systems.shtml) (NSA)

 * *Windows Utility:* ["HardenTools"](https://github.com/securitywithoutborders/hardentools) (Security Without Borders)

#### Password Security

  * *Guide:* ["How to Teach Humans to Remember Really Complex Passwords"](http://www.wired.com/2014/07/how-to-teach-humans-to-remember-really-complex-passwords/) (Wired)

  * *Guide:* ["Security on Passwords and User Awareness"](https://www.hashtagsecurity.com/security-on-passwords-and-user-awareness) (HashTag Security)

  * *Video:* ["What’s wrong with your pa$$w0rd?"](http://www.ted.com/talks/lorrie_faith_cranor_what_s_wrong_with_your_pa_w0rd?language=en) (TED)

  * *Article:* ["Password Security: Why the horse battery staple is not correct"](https://diogomonica.com/posts/password-security-why-the-horse-battery-staple-is-not-correct/) (Diogo Mónica)

  * *Organization:* ["Passwords Research"](http://cups.cs.cmu.edu/passwords.html) (The CyLab Usable Privacy and Security Laboratory (CUPS))

   * *Guide:* ["Hacker Lexicon: What Is Password Hashing?"](https://www.wired.com/2016/06/hacker-lexicon-password-hashing) (Wired)

   * *Guide:* ["7 Password Experts on How to Lock Down Your Online Security"](https://www.wired.com/2016/05/password-tips-experts/) (Wired)
   
   * *Password Survery:* [Encountering Stronger Password Requirements:
User Attitudes and Behaviors](https://cups.cs.cmu.edu/soups/2010/proceedings/a2_shay.pdf#page=14) (CUPS)


#### Privilege Separation Across OS

* identify what privileges services are running as
* identify is the admin user is called admin or root
* Identify if users are logging in and installing software as admin.



#### Examining Firewalls Across OS

  * *Checklist:* ["Firewall Configuration Checklist."](https://www.netspi.com/Portals/0/docs/Blog_Documents/EH_Firewalls/Firewall_Audit_Checklist_Short_v1.pdf) (NetSPI)




#### Identifying Software Versions




#### Device Encryption By OS

* Identifying if a device is using encryption by OS
* Encryption availablility by OS
* Encryption Guides




#### Anti-Virus Updates




#### Identifying Odd/One-Off Services



  * *Guide:* ["Physical Penetration Test"](http://www.pentest-standard.org/index.php/Pre-engagement#Physical_Penetration_Test) (About The Penetration Testing Execution Standard)

  * *Checklist:* ["Check list: Office Security"](frontlinedefenders.org/files/workbook_eng.pdf#page=80) (Frontline Defenders)

  * *Manual:* [Planning, improving and checking security in offices and homes](http://www.peacebrigades.org/fileadmin/user_files/groups/uk/files/Publications/Frontline_Manual_pdf.pdf#page=83)

  * *Guide:* ["Physical Security Assessment - pg. 122"](http://www.isecom.org/research/osstmm.html) (OSTTM)
  
  * *Guide:* ["Workbook on Security: Practical Steps for Human Rights Defender at Risk"](https://www.frontlinedefenders.org/en/resource-publication/workbook-security-practical-steps-human-rights-defenders-risk) (Frontline Defenders)
  
  * *Guide:* ["Protect your Information from Physical Threats"](https://securityinabox.org/en/guide/physical) (Frontline Defenders)
  
  * *Policy Template:* [Information Security
Policy Templates](https://www.sans.org/security-resources/policies) (SANS)

</div>

### Activities