---
approaches:
  - Technical
authors:
  - SAFETAG
skills_trained: []
remote_options:
  - None
time_required_minutes: 120
organization_size_under: 100
summary: >
  Malware is a common tactic to target organizations. Malware like a Remote
  Access Trojan (or RAT) can provide an attacker with backdoor access to a
  targeted machine, enabling the attacker to steal information, record audio and
  video, as well as run commands on the infected machine.


  To stop this from happening, you have to identify the malicious process within the system and stop it, or reformatting the machine in case you don’t feel spending time on stopping the malicious process.


  It’s important to keep evidence, in case the auditee still has access to the original malicious software they received (e.g., an email, etc.), keep a copy of the file if you have the time and expertise to continue investigating or have the resources to submit it to other organizations working on analyzing such issues.


  Scanning the possible infected machine or the original suspicious file with an anti-virus will save you time and effort, in the case such malware is already in its database. Scanning should always be the first step, preventing you from spending excess time if the machine was infected with a less serious piece of malware.


  After determining the machine is infected, you can proceed in helping the staff member back up their information, scanning the files for malware, then reformatting the infected machine. Note, it is very difficult to clean an infected machine if you only have a short window of time.


  In case the machine was infected, taking an image of the operating system will allow you to replicate the infected machine and run it after you finish your audit for a more in-depth investigation or send it to an expert to work on investigating the malware. Note, this also can be difficult in an audit setting where time is limited. Also see operational security considerations that come with replicating the files of a staff member of a sensitive organization. Be sure this is absolutely necessary and the staff members provides consent before completing.
materials_needed: >
  
  * An Incident Response Plan agreed upon with the organization

  * An emergency contact for the organization

  * A Kali Virtual machine connected to the Internet

  * A [Cuckoo Sandbox](https://cuckoosandbox.org/) installation (for later analysis post audit if you have the expertise)

  * VPN

  * USB drive(s)

  * Large capacity External Hard disk, OS installation media and license keys
walk_through: >-
  * In case they still have the original binaries (Attachment, email..etc.)

    1. Download the file to your auditing machine, Scan the file via Anti-Virus or hash the file and use virustotal.com to search for it (Note, don’t upload the actual file to virus total as uploaded files are discoverable by paid subscribers in most cases)
    2. Check the email’s header and see if it looks suspicious
  * In case there is no binaries (Attachment, email..etc.) or they have no access to it

    1. Take the machine offline
    2. In case you have time, Image the hard disk
    3. Help the auditees to operate another machine to fill the gap of the suspicious machine
    4. Run a non-depth scan for the machine and try to locate any suspicious files
    5. Collect the suspicious files, hash them, then search for them on virustotal.com
    6. Scan the open ports and monitor which applications is connected to external address

  The next sections often are highly interrelated - a phishing email may include malicious URLs and/or files, network traffic may include URLs, URLs may try to send malicious file downloads.


  **Questions to ask the user / organization**


  * What suspicious behaviors are you witnessing?

  * Where and when are you seeing this behavior? What makes you feel that the machine is somehow infected?

  * Do you have an alternative to this machine/process/account you can use it until we clear things up?

  * Did you receive any suspicious or unexpected email, attachment or different form of communication that made you feel this way?

  * Do you still have access to the original email, attachment or any form of communication?


  - - -


  ###### Variant: Phishing or Suspicious Emails


  If the organization staff has received suspicious communications, the first step should be to clearly warn the auditee that any associated files or links *should not be opened*.


  * Ask the client to share the complete email with you. Instructions on how to share the complete email, which includes full headers and attachments:

      Instructions: https://www.circl.lu/pub/tr-34/ (this is preferred over just asking for the headers - as described here: https://www.circl.lu/pub/tr-07/ - since it is just as complicated from the user prospective but provides more information to us or a malware researcher).
  * Investigate the intent of the message. If this email appears to be spam, you can rule out an advanced threat and include in your recommendations instructions on how to report spam or mark email messages as junk.

  * If the message does not seem to be spam and has links or files attached to the email, capture any suspicious URL and save the file in an empty storage device for further analysis.

  * If the email does not have links or files and is not spam, investigate it as a potential social engineering email.


  - - -


  ###### Variant: Malicious Files


  In this part, you will be investigating a file and determine if it’s malicious or not. The auditor will not have much time for this step, but a preliminary analysis (not longer than one hour) can be performed, following these instructions:


  * **Step 1: Collection**

  * Collect the binary from the targeted person or organization by asking them to forward you the suspicious email including any attachment in it, or by coping the file if it’s still on the machine by copying it to a USB drive. In case the user did not remember where the file is located, ask the user to walk through their browsing history or download folder and try to locate the file and then copy it to your USB drive.

  * Get a hash of the file and a timestamp of the file at acquisition


  Include the hashes of the malicious files in the appendix of your assessment report.


  * **Step 2: Research**

  * Initial offline investigation, in this stage you will be scanning the file using [ClamAV](https://www.clamav.net/) which comes with Kali-Linux

    * Update CalmAV by running the following command in the terminal
      `sudo freshclam`
    * Create a new folder and copy-paste the suspicious (file)s inside, then scan the targeted folder by running the following command in the terminal which is going to show the infected files and give you more information about it `clamscan -r –bell -i /your/target/folder`
  * Search for the hash on a MISP instance or VirusTotal to check if there are any related events, known malware associations, and connected details (such as URLs, email addresses, IP addresses)

  * After scanning the file, in case it has already been identified as malicious, the result will show you what type of malware is, in case the result showed the file as Trojan, Backdoor, agent or Remote access Trojan RAT then it’s time to consider taking an image from the hard drive, the original file, the header of the email and submit them for in depth investigation.


  If the organization was targeted with a more advanced attack, there will be a high probability that the attacker will use new or disguised malware -- which means no Anti-Virus will find it as malicious, in this case, and if you feel you still have doubts that a clean file is still malicious, submit it for in depth analysis.


  * **Step 3 (Optional): Imaging**


  In this step, you will be dealing with infected machine by one of the binaries you analyzed in step 1 and 2, or you are sure that the machine is infected and you have no time to analyze it. In this case, you will take a backup, migrate the data safely to a new machine and take a full image from the system and submit it for more in depth analysis.


  * It’s better to start with taking a full hard disk image, using ‘dd’ a tool that takes bit-by-bit copy of the hard drive, after taking the image, you will have an identical copy of infected machine and you can send the hard drive to experts for more in depth analysis. To take the image, you will need to boot the infected machine with a Live Kali Linux and apply the following steps:

    ```
    -   Identify the `<source>` which is the infected hard disk, and `<destination>` the external hard disk you will put the image on, run the following command which will list all the drive *lsblk*

    -   After identifying the source and destination, apply the following command the start the process `dd if=<source> of=<destination> bs=<byte size>`
    ```

    *Where bs is byte size, read more about how to use dd [here](https://wiki.archlinux.org/index.php/disk_cloning)*
  * Taking back up in this stage is to back-up all the important data and save them on a hard drive, usually it’s the document, desktop, download, favorite and personal data, save them on external storage then Scan them using [ClamAV](https://www.howtoforge.com/tutorial/clamav-ubuntu/) or any available Anti-virus on your auditing virtual machine.

  * Make sure the data is clean then transfer it to the clean replacement machine.

  * **Step 4 (Optional): Analysis**


  *See the Incident Response activity for additional details.*


  You will need at least one hour to prepare and carry the advanced investigation. this step is optional in case you have time and you think you still have doubts about the file and you need a more advanced result. In this step, you will analyze the suspicious file using Cuckoo Sandbox, an automated malware analysis system. In case you decided to go with this option, you will need an installed Linux on your audit machine you can use [this Kali guide](https://docs.kali.org/installation/kali-linux-hard-disk-install) to install Kali Linux.


  * Make sure you have that you have Cuckoo Sandbox installed on your audit Linux machine by running the following command `cuckoo`

  * In case Cuckoo was not installed, follow the following [instructions](http://docs.cuckoosandbox.org/en/latest/installation/) on how to install it. Make sure cuckoo is running without errors the previously posted documentation will provide you with details steps on how to install and run Cuckoo

  * Create a new folder and copy-paste the suspicious (file)s inside

  * You can use ‘submit’ to start analyzing the binary, you can find more options in the  [Cuckoo Sandbox documentation](http://docs.cuckoosandbox.org/en/latest/usage/submit/) , the easiest way to do it is by running the following command: `cuckoo submit /folder/targeted/binary`

  * To view the analysis results, once an analysis is completed, you will find the result in `$CWD/storage/analyses/`

  * You can find more information on how to read the results in the  [Cuckoo Sandbox documentation](http://docs.cuckoosandbox.org/en/latest/usage/results/)


  - - -


  ###### Variant: Suspicious URLs


  You may have found suspicious URLs in your wireshark output during the traffic analysis, in the email content, in IMs, etc.


  Capture the context in which the URL was sent to the user or used by a process (sender, timestamp including timezone, and any other identifying details).


  If the URL was sent to the user through a message, ask them if they clicked the link.


  * Search for the URL in a MISP instance or with VirusTotal or URLScan.io. **Warning** - if the file is targeted malware, using online scanners such as VirusTotal or URLScan will show the attacker that you're carrying out an investigation on the incident; try to use their passive search features before using an active scan.

  * Open the URL in a private cuckoo sandbox instance for a forensic capture of anything malicious.

  * Submit the URL to archive.org or archive.is for public archiving (this could also disclose your investigation to the attacker).


  - - -


  ###### Variant: Suspicious Processes


  If you find suspicious open ports, follow the instructions in the Network Scanning activity section "How to decide if an open port is suspicious".


  It can also be useful to follow these steps:


  * On every operating system, check if the device OS and the installed software are up-to-date and where possible set to automatically update.


  **Windows, Mac, Android**


  * On Windows, use [Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer) to dig into further details on each process.

  * Check that antivirus is installed in the device and is updated.

    * If an antivirus is installed, and it is up-to-date, launch a scan - this will help as a diagnostic tool, to identify any already known malware, not necessarily to remove it.
          - if malware is identified:
              - for commercial, known malware - get rid of it through the antivirus
  * If the the antivirus is disabled or not updated:
          - Try to understand if the user disabled it, and why.
              - if the user hasn't disabled it, a computer compromise is likely.

  **Android, iOS**


  * Check if the device is rooted or jailbroken - this might be an indicator of compromise.

  * Check if any suspicious applications have been installed from outside the official app stores, and on android, if this has been enabled.


  *See the User Device Assessment and Mobile Device Assessment activities for more in-depth device analysis.*


  - - -


  ###### Variant: Unusual Network Traffic


  Advanced threats may be identified during the network scanning and traffic analysis. See the **Network Scanning and Traffic Analysis** activities.


  - - -


  ###### Variant: Threat Hunting


  **Threat Hunting**

  In case you went through the entire process and still you have doubts about a file, email, process, or have other reasons to believe the organization may have undetected malware, you will probably need to work on specific threat hunting procedure that matches your needs, the organization's assets, and the threat profile of potential adversaries.


  The [ThreatHunting.net](http://threathunting.net) project, is collecting different Threat Hunting techniques on their [GitHub repo](https://github.com/ThreatHuntingProject/ThreatHunting/tree/master/hunts).


  The provided Threat Hunting procedures will guide on how to address your doubts on specific issue which means, you have to be able at least able to identify the category of the possible threat then apply the steps provided by [ThreatHunting.net](http://threathunting.net) project.
considerations: >
  
  * Consider the time you have, investigating malware can take days (you should not investigate during the audit itself)

  * Confirm that the device belongs to the organization

  * Make sure to take the device offline before start working on it

  * Don’t transfer files from the infected machine to any other machines

  * Use a USB drive to move files from the infected machine to your Audit machine for investigating proposes

  * Study outputs for any obviously embarrassing personal information

  * Don’t test anything on your virtual machine without VPN
title: Suspicious Activity Analysis
skills_required:
  - Malware Analysis
overview: >
  
  * Identification and **initial triage/analysis** of suspicious processes, files, and emails (via Anti-Virus scanning results, MISP and Virustotal information, network traffic analysis, and other research)

  * **Analyzing Specific Suspicious Events/Activities** - If the organization have specific concerns or evidence suggesting a targeted attack, the auditor can focus attention to match them against any known attacks or flag them for further research.


  In the following, you should look for files and URLs that may indicate a compromise and may help you identify an infection. If you have time, some inital light research may be suggested to see if the URLs or files hashes have been identified by other security researchers which can help you provide more context to the organization around the types of threats they are facing.
recommendations: ""
---
