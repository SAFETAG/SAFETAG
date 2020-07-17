---
Authors:
- SAFETAG
Info_provided:
- unknown
Info_required:
- unknown
---

## User Device Assessment

### Summary
This component allows the auditor to assess the security of the individual devices on the network. This component consists of interviews, surveys, and inspection of devices.

### Purpose

Compromised devices have the ability to undermine nearly any other organizational attempt at securing information. Knowing if devices receive basic software and security upgrades and what core protections against unauthorized access exist is vital to designing a strategy to make the host more secure.

### The Flow Of Information
![User Device Assessment Information Flow](images/info_flows/user_device_assessment.svg)

### Guiding Questions
* What work and personal devices do staff use to accomplish their work, store work related files, or engage in work communications?
* What organizational and external/personal services  do staff use to accomplish their work, store work related files, or engage in work communications?
* What are the organizational processes that staff take part in and the tools and communication channels that are used in those process'?
* What are the existing in/formal security practices that the participants use to address risks.




### Outputs

* List of all assets in the organization and whom they belong to.
* List of software running on staff devices.
* List of known vulnerabilities, and identifiable malware, that the office is vulnerable to.
* List of malware found by running updated anti-virus on office computers (if anti-virus installed during device inspection.)

### Operational Security

  * Treat device assessment data as well as any additional service information learned with the utmost security

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


</div>

### Activities