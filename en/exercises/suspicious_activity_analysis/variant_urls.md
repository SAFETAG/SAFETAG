
You may have found suspicious URLs in your wireshark output during the traffic analysis, in the email content, in IMs, etc.

Capture the context in which the URL was sent to the user or used by a process (sender, timestamp including timezone, and any other identifying details).

If the URL was sent to the user through a message, ask them if they clicked the link.

* Search for the URL in a MISP instance or with VirusTotal or URLScan.io. **Warning** - if the file is targeted malware, using online scanners such as VirusTotal or URLScan will show the attacker that you're carrying out an investigation on the incident; try to use their passive search features before using an active scan.
* Open the URL in a private cuckoo sandbox instance for a forensic capture of anything malicious.
* Submit the URL to archive.org or archive.is for public archiving (this could also disclose your investigation to the attacker).
