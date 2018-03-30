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

-   It’s better to start with taking a full hard disk image, using ‘dd’ a tool that takes bit-by-bit copy of the hard drive, after taking the image, you will have an identical copy of infected machine and you can send the hard drive to experts for more in depth analysis. To take the image, you will need to boot the infected machine with a Live Kali Linux and apply the following steps:

    -   Identify the `<source>` which is the infected hard disk, and `<destination>` the external hard disk you will put the image on, run the following command which will list all the drive *lsblk*

    -   After identifying the source and destination, apply the following command the start the process `dd if=<source> of=<destination> bs=<byte size>`
*Where bs is byte size, read more about how to use dd [here](https://wiki.archlinux.org/index.php/disk_cloning)*

-   Taking back up in this stage is to back-up all the important data and save them on a hard drive, usually it’s the document, desktop, download, favorite and personal data, save them on external storage then Scan them using [ClamAV](https://www.howtoforge.com/tutorial/clamav-ubuntu/) or any available Anti-virus on your auditing virtual machine.

-   Make sure the data is clean then transfer it to the clean replacement machine.

* **Step 4 (Optional): Analysis**

*See the Incident Response activity for additional details.*

You will need at least one hour to prepare and carry the advanced investigation. this step is optional in case you have time and you think you still have doubts about the file and you need a more advanced result. In this step, you will analyze the suspicious file using Cuckoo Sandbox, an automated malware analysis system. In case you decided to go with this option, you will need an installed Linux on your audit machine you can use [this Kali guide](https://docs.kali.org/installation/kali-linux-hard-disk-install) to install Kali Linux.

-   Make sure you have that you have Cuckoo Sandbox installed on your audit Linux machine by running the following command `cuckoo`

-   In case Cuckoo was not installed, follow the following [instructions](http://docs.cuckoosandbox.org/en/latest/installation/) on how to install it. Make sure cuckoo is running without errors the previously posted documentation will provide you with details steps on how to install and run Cuckoo

-   Create a new folder and copy-paste the suspicious (file)s inside

-   You can use ‘submit’ to start analyzing the binary, you can find more options in the  [Cuckoo Sandbox documentation](http://docs.cuckoosandbox.org/en/latest/usage/submit/) , the easiest way to do it is by running the following command: `cuckoo submit /folder/targeted/binary`

-   To view the analysis results, once an analysis is completed, you will find the result in `$CWD/storage/analyses/`

-   You can find more information on how to read the results in the  [Cuckoo Sandbox documentation](http://docs.cuckoosandbox.org/en/latest/usage/results/)
