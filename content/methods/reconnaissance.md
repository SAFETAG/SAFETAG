---
title: Reconnaissance
method_icon: /img/reconnaissance_icon.png
summary: >
  The remote assessment methodology focuses on direct observation of an
  organization and their infrastructure, consisting of passive reconnaissance of
  publicly available data sources ("Open Source Intelligence") This allows the
  auditor to identify publicly available resources (such as websites, extranets,
  email servers, but also social media information) connected to the
  organization and remotely gather information about those resources.
the_flow_of_information: "![](/img/reconnaissance.png)"
guiding_questions: >-
  * Depending on the organization's security needs, does it "leak" any sensitive
  information online (location, staff identities, program locations?)

  * Can you identify partners or beneficiaries through the organizations sites?

  * What is the pattern for staff e-mail addresses?

  * Have any of the organization's servers, users, or e-mail accounts been compromised in the past?

  * Are executive / staff social media accounts in scope, and if so, are they compliant with the organizational social media policies? What additional threats do they introduce?
authors:
  - SAFETAG
activities:
  - Manual Reconnaissance
  - Automated Reconnaisance
  - Website Footprinting
  - DNS Enumeration
references:
  - Open Source Intelligence (General)
  - Organizational Information Gathering
  - Searching
  - Pastebin Searching
  - Recon-ng
outputs: >2

    * Dossier of organizational, partner, and beneficiary "open sources" information exposed online.
      * A list of e-mail address for members of the organization.
    * Identification and mapping of externally facing services and unintentionally exposed internal services.
      * Possible vulnerabilities in the websites and externally facing servers of the organization.
      * Existing information about earlier breaches identified in the paste-bin search.
    * Follow the proper incident response plan if high risk problems are identified.
operational_security: >+2

   * While this does not focus on identifying of vulnerabilities, it may nonetheless expose certain threats, particularly with regard to publicly-accessible information that is presumed to be confidential, such as the identity of sensitive staff, the existence of sensitive partner- and funder-relationships, or the organization’s history of participation in sensitive events or travel to sensitive locations.

info_required: []
info_provided: []
purpose: >

  While much of SAFETAG focuses on digital security challenges within and around the office,  unintended information available from "open sources" can pose real threats and deserve significant attention.  This also builds the Auditor's understanding of the organization's digital presence  and will guide specific vulnerabilities to investigate once on site.
preparation: >-

  This Section:

    * does not require privileged access to the organization's offices, infrastructure or staff;
    * relies primarily on third-party data sources and observation and light probing of the organization’s infrastructure;
    * can generally be carried out from any secure Internet connection.
position: 40
---
