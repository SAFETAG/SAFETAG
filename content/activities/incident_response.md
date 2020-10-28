---
title: Incident Response and Emergency Contact
approaches:
  - Technical
  - Interpersonal
  - Research
authors:
  - SAFETAG
remote_options:
  - Partial
skills_required:
  - Malware analysis
  - Research
  - Digital Forensics
skills_trained: []
summary: >
  Incident Response setups up a procedure for identifying what counts as an
  incident during an audit, as well as incident handling and response in the
  event the auditor causes or uncovers a security incident during the course of
  the assessment. [^NIST_SP_800-115-Section_7.1]^,^[^PETS_emergency_contact]


  It is important to know these procedures in handling incidents to protect data
  integrity and create an audit trail to be used for investigation and
  collection of information.
overview: |2

   * * **Establish an Emergency Contact:** Establish a procedure for incident handling and an emergency contact in the event that the auditor causes or uncovers an incident during the course of the assessment. [^NIST_SP_800-115-Section_7.1]^,^[^PETS_emergency_contact]
   * Agree on primary and secondary points of contact and relevant contact information
   * Establish what severity counts as an "incident" for the organization
   * Agree on security protocols around incident response
   * Create procedure for incident handling in the event the auditor causes or uncovers an incident during the course of the assessment. [^NIST_SP_800-115-Section_7.1]^,^[^pets_emergency_contact_info]
materials_needed: ''
considerations: >

  * Having an established emergency contact through the agreement process is
  critical

  * A clear understanding of the legal and technical context from the Context
  Research method will be critical in choosing how to proceed.

  * Consider moving sensitive conversations to a separate, offsite location.
walk_through: >

  What counts as an incident should be agreed with the organization's management
  during the agreement phase, and should include possibilities informed by the
  Context and Technical Research work.


  Incidents can include problems such as insider threats, active remote access
  malware systems, or the discovery of physical surveillance of the office, as
  well as many other possibilities.  The auditor must use their best judgement
  along the SAFETAG Auditor Code of Conduct, their agreement with the
  organization, personal ethics, legal responsibilities, and balance this in the
  frame of the organization's context, capacity, and the need to in good faith
  gain the trust of the staff of the organization to fulfil a successful audit.


  ___


  ###### Variant: Malware / Remote Access




  For the implementation of mitigation measures, you can refer the auditees to a
  third party. This may be the organization's IT staff, a rapid response
  helpline, a malware researcher, etc.


  Some of the mitigation steps can be implemented by the user, following the
  instructions included in the Rapid Response Network's [Digital First Aid
  Kit](https://digitalfirstaid.org/en/topics/device-acting-suspiciously/).


  You should consider a compromise serious and coordinate an incident response
  if any of the following is happening:


  - files are being leaked

  - you have detected a keylogger or spyware in a device

  - the infected device is critical for the organization


  Possible mitigation steps are below. *This step should not take more than 2
  hours, and the auditor should coordinate the response, rather than carry it
  out themselves.* The auditor should keep in mind the organization's capacity
  and be extremely careful when reformatting devices, as there may be critical
  programs which the organization does not have the installation media / license
  keys for any more, or critical data on the disk which did not come up in other
  discussions. Check to see if the organization has trustworthy operating system
  installation media and license keys. In almost every situation, these
  mitigations should be done post-audit so as to ensure the audit itself has
  time to complete and be thorough.


  - if the device is not critical, avoid using the infected device and disable
  its ability to access the network until a thorough investigation has been
  completed

  - In consultation with the organization and any IT staff, delete the hard disk
  content and reinstall the system

  - if the forensic capture of the whole hard disk would take too long, and an
  investigation is needed, the hard disk can be replaced (See the Advanced
  Threats Method for further guidance)

  - if reinstalling the system is not possible, the device should be replaced

  - mobile devices can be reset to factory settings. After resetting to factory
  settings, make sure any app or data recovery is not including potential
  compromise vectors, such as browser extensions, malicious applications, etc.

  -

  ___


  ###### Variant: Insider Threat


  Insider Threat refers to any threat to an organization that comes within or
  inside the organization.

  These can include (but not limited to)

      - Employees
      - Former employees
      - Contractors
      - Interns

  Suspicions or evidence for insider threats must be raised discretely with
  organisational management through the audit contact person.

  ___


  ###### Variant: WebApp Hacking


  For the implementation of mitigation measures, you can refer the auditees to a
  third party. This may be the organization's IT staff, hosting service
  provider, a rapid response helpline, a digital forensic expert, etc.


  You should consider a web application compromise serious and coordinate an
  incident response if any of the following is happening:


  - Unusual accounts are created in server and CMS

  - Access logs from outside regions beyond the organizations location

  - Malicious php scripts (webshells) are present on the server

  - Defaced web pages and are sometimes password pro


  ___

  ###### Variant: Active Surveillance



  To be developed.
recommendations: ''
organization_size_under: 100
time_required_minutes: 480
---

