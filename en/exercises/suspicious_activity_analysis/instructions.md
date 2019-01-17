
*  In case they still have the original binaries (Attachment, email..etc.)

    1.  Download the file to your auditing machine, Scan the file via Anti-Virus or hash the file and use virustotal.com to search for it (Note, don’t upload the actual file to virus total as uploaded files are discoverable by paid subscribers in most cases)

    2.  Check the email’s header and see if it looks suspicious

*  In case there is no binaries (Attachment, email..etc.) or they have no access to it

    1.  Take the machine offline

    2.  In case you have time, Image the hard disk

    3.  Help the auditees to operate another machine to fill the gap of the suspicious machine

    4.  Run a non-depth scan for the machine and try to locate any suspicious files

    5.  Collect the suspicious files, hash them, then search for them on virustotal.com

    6.  Scan the open ports and monitor which applications is connected to external address


The next sections often are highly interrelated - a phishing email may include malicious URLs and/or files, network traffic may include URLs, URLs may try to send malicious file downloads.

**Questions to ask the user / organization**

* What suspicious behaviors are you witnessing?
* Where and when are you seeing this behavior? What makes you feel that the machine is somehow infected?
* Do you have an alternative to this machine/process/account you can use it until we clear things up?
* Did you receive any suspicious or unexpected email, attachment or different form of communication that made you feel this way?
* Do you still have access to the original email, attachment or any form of communication?

___

###### Phishing or Suspicious Emails

!INCLUDE "variant_phishing.md"

___

###### Malicious Files

!INCLUDE "variant_malicious_file.md"

___

###### Suspicious URLs

!INCLUDE "variant_urls.md"

___

###### Suspicious Processes

!INCLUDE "variant_suspicious_process.md"

___

###### Unusual Network Traffic

Advanced threats may be identified during the network scanning and traffic analysis. See the Network Scanning and Traffic Analysis activities.

___


###### Threat Hunting

!INCLUDE "variant_threathunting.md"
