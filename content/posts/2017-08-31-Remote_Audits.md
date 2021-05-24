---
layout: post
title:  "Remote SAFETAG Assessments?"
date:   2017-08-31 13:09:25
tags: SAFETAG, remote, content, update
author: Jon
---

An ongoing interest in the SAFETAG community has been how to use the SAFETAG framework in situations where the auditor cannot travel to the organization at all, or cannot travel to remote or multiple office locations -- what can be done remotely, what can be done with help, and what gaps remain that must be accommodated? Thanks to coordination and co-funding with multiple organizations, a SAFETAG peer-training and content sprint answered these questions with new approaches and adaptations to support a variety of remote-only SAFETAG assessment work.

Content created from this training and content sprint is included with summaries below and has been compiled into an updated [SAFETAG release](https://github.com/SAFETAG/SAFETAG/releases/tag/v0.4.1).  The content sprint approach taken with this event took advantage of the existing expertise and experience of the attendees to co-create new approaches as a peer training approach.  This has the exciting add-on benefit of supporting community-sourced contributions on the SAFETAG github repository, which can be seen via the [github commit and pull history](https://github.com/SAFETAG/SAFETAG/pulls?utf8=%E2%9C%93&q=is%3Apr)

### Operational Security (expanded from Physical Security)

The thought process for dealing with "remote" audits - as well as the multiple scenarios they would be most likely - also led to improved clarity on the future of the "Physical Security" module for SAFETAG. It has been transformed into an "Operational Security" section to also include activities to determine staff traveling, working remotely or from home, and the security impacts of multiple offices, especially in situations where the auditor can only assess a subset of an organization's offices.

The organizational security methodology is focused on how to mitigate against threats that occur because of the arrangement of digital assets in the physical world -- how secure are the devices at an organization's office, where and how staff travel with organizational devices, and whether staff work outside of the office (e.g. in remote offices, at their homes, while traveling, or at cafes).  Further, is organizational information accessed from personal devices, and how are those devices secured?

[Pull #282](https://github.com/SAFETAG/SAFETAG/pull/282),  [Issue #268](https://github.com/SAFETAG/SAFETAG/issues/268)

This also enabled the movement of some odd pieces of the framework inside of this, such as hands off discovery of wifi networks and device beacons/probes (https://github.com/SAFETAG/SAFETAG/pull/289) -- transforming an awkward "module" into an activity underneath this module that fits more naturally.

### Office Mapping (New)

This activity seeks to identify potential physical vulnerabilities to an organization's information security practices by documenting the current physical layout of the office and the locations of key assets, as well as potential "external" risks such as nearby/shared office spaces.  This can be done in person independently or alongside the "Guided Tour" activity, and can also be done in advance of an assessment or remotely by a willing staff member who knows where these assets are located (often a technical or administrative staff person). This can also be conducted in a multi-office or home-office environment where the auditor is unable to visit every location.

### Guided Tour (Adapted to include remote support)

During this component an auditor tours the audit location(s) and flags potential risks related to physical access at that location. This can be done remotely via secure videoconference over a smartphone or tablet that can moved around the office easily. Combining this activity with Office Mapping helps to reduce the awkwardness of taking notes while walking around the office, and if being done remotely, the two separate activities can be used to cross-verify the accuracy of each.

[Pull #286](https://github.com/SAFETAG/SAFETAG/pull/286)

### Scavenger Hunt (New)

This activity assists in identifying potential physical security concerns at an organization, particularly when an auditor cannot travel to the office location or cannot visit every office location. The scavenger hunt approach is focused on involving the organization staff members into mapping out potential threats based on the abstraction and the gamification of the physical security mapping process. See the "Risk Hunting" exercise in [SaferJourno](https://www.internews.org/sites/default/files/resources/SaferJournoGuide_2014-03-21.pdf), page 19, for additional ideas and guidance on conducting this activity.

### Remote Local Network Scanning and  Device Assessment (Adapted)

This allows the auditor to work remotely to identify the devices on a host's network, the services that are being used by those devices, and any protections in place, as well as to assess the security of the individual devices on the network.

[Pull #283](https://github.com/SAFETAG/SAFETAG/pull/283)

### Remote Facilitation (New)

Suggested approaches and methods to use if in-person facilitation for activities such as process mapping and data assessment is not possible. This may not provide as deep results as in-person facilitation, but should provide adequate level of expansion and verification needed.

[Pull #288](https://github.com/SAFETAG/SAFETAG/pull/288)
