---
layout: post
title:  "Updates from the Advanced Threats Workshop!"
date:   2018-05-04 12:49:55
tags: SAFETAG, malware, prague, advanced threats
author: Jon
---

SAFETAG Fellows and partners gathered for a 3-day workshop to expand the guidance that the SAFETAG framework has for auditors to respond to advanced threats - organizations receiving phishing emails or with active malware in their systems. This will all be included in a release going live later today.  Thanks to all the contributions and support from the fellows in creating this!

### Responding to Advanced Threats Method

In advance of the workshop, Dlshad Othman put together a new SAFETAG method for advanced threat response paired with an analysis activity. At the workshop, we expanded this into a full-on triage approach for responding to attacks, paired with  "hooks" across the framework to better identify signs of active attacks.  This collection of changes makes heavy use of the activity "variant" approach to combine very similar or parallel approaches in one single activity.

The majority of the work can be found in the new **"Responding to Advanced Threats"** method and its related activities, detailed below.

It is important to underline that this is focused on identifying malicious activity and doing the minimal possible analysis to responsibly triage it. Deeper analysis of the specifics may happen during the report-writing phase, but it is important to not be easily derailed from completing the SAFETAG audit process.  This drives home the importance of having an agreed-upon incident response plan with the organization to determine how they would prefer to respond if something that is potentially serious occurs.

### New and Updated Activities

#### Identifying and Analyzing Suspicious Activities

Malware is a common tactic to target organizations, Malwares like RAT (Remote Access Trojan) can provide an attacker with a back-door access to a targeted machine which enables the attacker to steal information, record audio and video and run commands on the infected machine. This component provides an overview for analyzing different types of suspicious emails, files, active processes, and network traffic.

#### Evidence Capture

This component briefs the tools and procedures required to acquire the image (live or dead, depending on the situation) and securely handle data from a device (laptop, desktop, HDD, memory stick, USB stick, etc.) that is needed to later perform a malware analysis or forensic evidence process.

#### Digital Forensics

This component describes how to perform an analysis on captured evidence (e.g. hard drive image or memory dump) without altering the evidence. Any alteration, or even an environment or situation that creates the possibility of alteration, could lead to rejection of the evidence in a court of law or to malware analysis failures.

*In most cases, reach out for help, there are multiple organizations which coordinate and can support malware analysis targeting NGOs. The [Digital First Aid Kit](https://rarenet.github.io/DFAK/en/SecureCommunication/) has a list of organizations and in most cases secure contact details to seek support in doing advanced analysis. The [Rapid Response Network](http://www.rarenet.org/), a project of [CiviCERT](https://civicert.org/) is a consortia of these organizations who may be able to help. [Citizen Lab](https://citizenlab.ca/) is also well known for their analysis and research.*

#### Technical Context Research

An important cornerstone in working with high-risk organizations is having an expansive understanding of their potential adversaries and their capabilities. This has long been guidance in SAFETAG, and at the workshop we pushed out a more structured approach to tackle this research based on Internews' internal digital country risk assessment methodology.

#### Changes to Incident Response

Since its inception, SAFETAG has had a section instructing auditors to create an agreed-upon incident response plan with the organization.  During the Advanced Threats workshop, we expanded on this in parallel with the overall "triage" approach.

#### Changes to the Interview activity and creation of a High-Risk Interview activity

For the pre-audit interview process, we have improved the formatting of the overall section and added more questions to help identify potential attacks, and added a specific "Guiding Questions for High-Risk Organisations" to dive deeper where the auditor and/or organization already suspects they are under active attack. This additional interview activity is to identify if there are any indicators that the organization may have already been attacked and/or compromised, or if someone they know has faced advanced threats. It should help identify what threats / threat actors they are dealing with, and their intent. This will help the auditor prioritize work with the organisation during the audit and follow up and understand whether the auditor has the expertise to address or understand the threat or if outside expertise is needed.

#### Changes to Network Scanning and Traffic Analysis

We have added some guidance to help auditors judge whether open ports and network traffic is out of the ordinary for office environments. Naturally, every office set up is different, and this will rely on the auditor conducting on-site research and analysis.  These changes are in the Network Scanning and Traffic Analysis activities.
