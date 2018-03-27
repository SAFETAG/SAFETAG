**Look for indicators of compromise**

In the following steps you should look for files and URLs that may indicate a compromise and may help you identify an infection.


## 0. email / messages / communications

If the organization staff has received suspicious communications, the first step should be to clearly warn the auditee that any associated files or links *should not be opened*.

1. Ask the client to share the complete email with you. Instructions on how to share the complete email, which includes full headers and attachments:

    Instructions: https://www.circl.lu/pub/tr-34/ (this is preferred over just asking for the headers - as described here: https://www.circl.lu/pub/tr-07/ - since it is just as complicated from the user prospective but provides more information to us or a malware researcher).

2. Investigate the intent of the message. If this email appears to be spam, you can rule out an advanced threat and include in your recommendations instructions on how to report spam or mark email messages as junk.

3. If the message does not seem to be spam and has links or files attached to the email, capture any suspicious URL and save the file in an empty storage device for further analysis.

4. If the email does not have links or files and is not spam, investigate it as a potential social engineering email.


## 1. Network scanning and traffic analysis

Advanced threats may be identified during the network scanning and traffic analysis.

- For network scanning see https://github.com/SAFETAG/SAFETAG/tree/master/en/exercises/network_scanning
- For traffic analysis see https://github.com/SAFETAG/SAFETAG/tree/master/en/exercises/traffic_analysis


## 2. Analyze suspicious processes on individual devices

If you find suspicious open ports, follow the instructions in  https://github.com/SAFETAG/SAFETAG/tree/master/en/exercises/network_scanning, section "How to decide if an open port is suspicious".

It can also be useful to follow these steps:

- On every operating system, check if the device OS and the installed software are up-to-date.

### Windows, Mac, Android

1. Check that antivirus is installed in the device. 

    1. Check that the installed antivirus is up-to-date.

        - if an antivirus is installed, and it is up-to-date, launch a scan - this will help as a diagnostic tool, to identify any malware, not necessarily to remove it.
        - if malware is identified:
            - for commercial, known malware - get rid of it through the antivirus

    2. If the the antivirus is disabled:
        - Try to understand if the user disabled it, and why.
            - if the user hasn't disabled it, a computer compromise is likely.


### Android, iOS

- Check if the device is rooted or jailbroken - this might be an indicator of compromise.

    - Check if any suspicious applications have been installed from outside the official app stores.


## 3. Analyze suspicious files

The auditor will not have much time for this step, but a preliminary analysis (not longer than one hour) can be performed, following these instructions:

1. Get a hash of the file and a timestamp of the event.

    1. send the hash to MISP
        - Check if there are any related events

        - Find any connected IP addresses

    2. Send the hash to virustotal (**Warning** - if the file is targeted malware, this might show the attacker that you're carrying out an investigation on the incident).

        - Check if the file is known.


If the file is malicious, copy it onto an empty drive for further analysis.

Remember to include the hashes of the malicious files in the appendix of your assessment report.


## 4. Analyze suspicious URLs

You may have found suspicious URLs in your wireshark output during the traffic analysis, in the email content, in IMs, etc.

Capture the context in which the URL was sent to the user or used by a process (sender, timestamp including timezone, and any other identifying details).

If the URL was sent to the user through a message, ask them if they clicked the link.  

1. Check the URL in MISP.
2. Open the URL in a private cuckoo sandbox instance for a forensic capture of anything malicious.
3. Submit the URL to VirusTotal (**Warning** - if the file is targeted malware, this might show the attacker that you're carrying out an investigation on the incident).
4. Submit the URL to archive.org or archive.is for public archiving (this could also disclose your investigation to the attacker).


## 5. Urgent incident response

*This step should not take more than 2 hours, and the auditor should coordinate the response, rather than carry it out themselves.*

For the implementation of mitigation measures, you can refer the auditees to a third party. This may be the organization's IT staff, a rapid response helpline, a malware researcher, etc.

Some of the mitigation steps can be implemented by the user, following the instructions included [here](https://rarenet.github.io/DFAK/en/Malware/).

You should consider a compromise serious and coordinate an incident response if any of the following is happening:
    
- files are being leaked
- you have detected a keylogger or spyware in a device
- the infected device is critical for the organization

Possible mitigation steps:
    
- if the device is not critical, avoid using the infected device until a thorough investigation has been completed
- delete the hard disk content and reinstall the system
- if the forensic capture of the whole hard disk would take too long, and an investigation is needed, the hard disk can be replaced 
- if reinstalling the system is not possible, the device should be replaced
- mobile devices can be reset to factory settings
    - after resetting to factory settings, make sure any app or data recovery is not including potential compromise vectors, such as browser extensions, malicious applications, etc.


