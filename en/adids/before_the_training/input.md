<!-- ### Input -->


### Logistics

* Venue: You'll want a private room large enough for the number of trainees.  A projector, TV or other large external screen is often useful, and a whiteboard or flipcharts are key.
* Travel: double-check on visa requirements 
* Lodging and ground transit: make sure you and the trainees understand how to get from the airport to the hotel, and where to gather on the first day.
* Food: having breakfast and lunch catered or provided/delivered can reduce complications / late starts
* Dinners/post-training: while everyone will want a break from each other afterwards, having a few planned but informal dinners or happy hours can help surface issues or places for deeper discussion that don't come up during the training.

### Schedule

Below is a sample 4-day training schedule.  

|Time|Day 1|Day 2|Day 3|Day 4|
|----|-----|-----|-----|-----|
| **Theme**  | **Intro, Prep, and Research**  | **Recon and Risk Modeling**  | **Networks, Devices and Data**  | **Vulnerabilities and Reporting**  |
| 9:30 | Gathering  | Gathering  | Gathering  | Gathering  |
| 10a  | Welcome / icebreakers & ground rules for the training  | recon-ng  | Network Discovery  | Vulnerability Scanning |
| :30  | Intro to SAFETAG process; scope; responsibilities  | recon exercise and exploration  | beacon exploration  |   |
| 11a  | Operational Security, Communications and Audit Prep  | (:15 break)  | (:15 break)  | (:15 break)  |
| :30  | Tools of the trade (Kali, encrypted containers, VPNs)  |   | Network Access  | Vulnerability Research  |
| 12p  | Intro to the SAFETAG repo  |   | Password cracking exercise  |   |
| :30  |   | Physical aspects  |   | Vulnerability Prioritization; EOP Activity?  |
| 1p  | Lunch break  | Lunch break  | Lunch break  | Lunch break  |
| :30  |   |   |   |   |
| 2p  | Capacity Assessment and Interviews  | Facilitated Risk Modeling  | Data assessment Overview  | Debriefing and Spot Training  |
| :30  | Assessment Plan Negotiation  |   |  Critical Data Activity  |   |
| 3p  | (:15 break)  | (:15 break)  |   | Recommendations, Resources, Roadmaps  |
| :30  | Context Research  | Process Mapping and pre-mortem exercise  | (:15 break)  | (:15 break)  |
| 4p  | Context Exercise  |   | Device assessment (volunteer?)  | Report Compilation  |
| :30  | OSINT Intro (google dorking, pastebin, socmedia tools)  |   | Network Mapping  | Follow-up  |
| 5p  | Exercise: OSINT/Google yourself!  |   | Digging in to mapping results |   |
|   |   | Password Dictionary development  |   | Next steps: Working with Orgs; Scheduling Audits  |
| 6p  | close  | close  | close  | close  |

### Pre-tests and Homework

Pre-tests are ways to try and make sure your trainees have a base skill level to be able to not only absorb, but responsibly use the SAFETAG material.  This is an area of active discussion and development in the SAFETAG community, but currently, having trainees who use Linux as their daily operating system or who are extremely familiar with it, and who are comfortable and accustomed to using PGP for communications seems to be a good start.

Homework assignments are useful to further prepare your trainees and to get some of the slower exercises and tasks out of the way.

Below are a selection of homework assignments that can be used, or the trainer can adapt and create new ones. We recommend steering away from assignments that would gather overly sensitive information before having taken trainees through an operational security session, and strongly advise against any "active" scans such as nmap or OpenVAS.

The below Homework Assignments can be sent directly to your trainees. Trainees should also read the the relevant section(s) and appendices from the full SAFETAG guide appropriate to the assignment.


#### Homework Assignment: Context Research ####

To help ground and focus our SAFETAG training, we’d like to assign some “homework” for you to prepare before the event.

First, select an organization that you are already familiar with as a hypothetical recipient of a SAFETAG audit.  You will not need to share the name or sensitive details of this organization, nor will any of the exercises reveal or impact their work.

You will want to set up an encrypted container to save the results of the below work in - VeraCrypt or Axcrypt are popular choices. If you are not familiar with any of these tools, please get in touch.

You will also want to perform most of this research over tor or via a similar anonymizing proxy.

With this organization in mind, go through the Context Research section of the SAFETAG guide (attached) and build an initial context report (one that does not mention the specific  organization) on regional threats.  The real meat in this chapter is in the resources section at the end - finding what local and regional digital, legal, and physical threats are relevant is very important to understanding the environment an organization with operating within.  Even if this is a country you are familiar with, refreshing your understanding is key - are large online platforms responding to government information requests?  How many?  Is encryption illegal in any way?  Are digital attacks common?  Are there any current events or recent laws that could affect the organization or your ability to safely carry out the audit?


#### Homework Assignment: Recon-ng Setup ####

 * Setup a VPN (tor won't work for this)
 * Gather API keys for use with recon-ng (See recon-ng appendix)

#### Homework Assignment: Open Source Intel Gathering ####

Finally, explore the remote assessment section.  Do NOT attempt any of the more active steps - OpenVAS and even nmap can break servers, and these have some very serious operational security concerns we want to discuss first.  However, the reference sections on advanced searching with Google and Pastebin to discover possibly unintentionally public information about the organization 

Next, review the (google dorking / OSINT) section and begin exploring their online profile.
