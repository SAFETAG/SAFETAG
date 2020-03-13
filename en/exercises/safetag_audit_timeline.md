### Audit Timeline and Planning

Review these notes in preparation for the audit as you begin to map out your schedule.  This provides a rough, suggested outline of how to schedule your time on site for a SAFETAG audit, and some reminders of the work you need to have completed before arriving in country. You may adapt this plan or use its sections as a template to develop your own timeline fitting the context of each audit.


#### Prepare for Uncertainty

The SAFETAG roadmap is a crisp, clear data flow of inputs to outputs.  Reality, generally speaking, is less direct.  There are a few core parts of the audit process that force action, but others are more flexible.  Outcomes of your discussion and exploration of the network will also derail the process in impossible-to-predict ways.  The pre-audit interviews and your own contexts research, research on the organization, and preparation are meant to give you the best possible idea of what situation you'll walk in to, but even with all of that, frankly, shit happens.

#### Before Travel

* Agreements, Scope, Risk Analysis
* Remote Research
  * Openly sourced data: DNS, MX, Web, research via social media and google
  * Revealed information via Skype / etc. (office IP address?), nmap
* Packing and Prep
  * Visas / Travel planning
  * Hardware packing
  * Software (run updates) and dictionary list prep (local language dictionaries, plus creation of a custom password list based on website keywords, addresses, and dates)


#### First Day
Priorities for the first day include meeting staff (even, possibly especially, for the more technical auditor).  There is a strong temptation to dive in and get started, but establishing connections with the staff - especially those you haven't met through interviews - is key.  You may discover hidden sources of talent or resistance, historical information, and new parts of the infrastructure or practices and policies that you may not have yet found.

* Meet staff, discuss operations and plan interruptions with key staff
* In-person discussions of risks, challenges, fears, questions, and experiences around digital security
* (If relevant) Attempt to crack wifi without password knowledge
* Parallel, collect wifi beacons while not associated to any one network (sending connection resets).
* Once wifi password is obtained (through cracking or asking), start a capture of decrypted traffic and run it as long as possible for later analysis
* Map out the “visible” network (nmap)


#### Early steps
From a data-gathering point of view, the first steps are to try and access the wireless network by password guessing, but also to connect to the network and capture traffic for analysis overnight.  This provides other views on the actual technology and services used on the network, different both from the management and IT view as well as other tools discussed by staff.

* Associate nmap scans, MAC addresses, and beacons with people and specific systems, plus servers/networking hardware
* Scans on the captured traffic for passwords, auth cookies, suspicious traffic, unencrypted connections

#### Further Days (on Location)

The next day you’re on location, you have hopefully looked through the research data you gathered, and have some specific follow-up things to investigate.  It’s also now time to start going through the audit tasks.

* Deeper dive into what hardware is connected and what it is doing
* Begin organizing vulnerabilities and tracking against the audit framework
* External audit tasks
* Internal audit tasks
* Physical audit tasks


#### Final Day (on Location)

* Discuss initial findings and responses
* Suggestions for follow-up training, resources to consult, and possibly targeted trainings for relevant staff (what is a secure password? How to communicate securely?)
* Discuss next steps: SAFETAG Report, connections to trainers, how to seek help


#### Exploration and check-ins

Throughout the entire audit, aggressively make time to engage with staff - stop for coffee, eat lunch with them, have conversations.  This can be integrated in to other parts of the process, such as the user device assessments, as well as being completely independent and natural.  Having better connections with staff will make the group exercises, especially the risk assessment work, flow much better.

Whenever you set off a scan (airodumping, nmap, openvas...) are good times to stand up and walk around.

#### Debrief and Setting Expectations

Largely covered in the [debrief] section, making time at the end of the (often hectic) audit week is very important to making sure the next few steps are absolutely clear in terms of timelines and communication protocols.


#### Clean up

If you have been using paper or post-it notes during the audit, be sure you securely destroy them (by shredding, burning, or tearing into small pieces) before you leave the site on the last day.  By the same token, any digital reports should be stored on secure media and securely deleted from all other locations.  See the [operational security] section and per-item notes for further details. Clean off any whiteboards used, and check any camera used to remove sensitive photos.

#### Follow up care and Reporting

See the reporting sections for specific details here, but a series of check-ins with the organization to support their ability to respond to any incidents, understand further topics from the debrief, and to help provide them a timeline to expect the final report is valuable in maintaining their engagement post-audit to support the needed changes.
