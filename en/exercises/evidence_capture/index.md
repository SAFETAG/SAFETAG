---
Approach:
- Technical
Authors:
- Anonymous
Org_size_under:
- 10000
Remote_options:
- None
Skills_required:
- Digital Forensics
Time_required_minutes:
- 60
---

#### Digital Forensics and Evidence Capture

##### Summary

This component briefs the tools and procedures required to acquire the image (live or dead, depending on the situation) and securely handle data from a device (laptop, desktop, HDD, memory stick, USB stick, etc.) that is needed to later perform a malware analysis or forensic evidence process.

##### Overview

* **Capture Evidence for later Analysis** - If suspicious activities are identified, the auditor may want to capture evidence  (including hard disk image, memory image, suspicious files, emails, network traffic captures, URLs). to analyze or share with professionals. This is time-consuming and the captured evidence is high-risk, so be extremely careful in pursuing this.
* Determine what kind of data acquisition (live or dead imaging) is required.
* Perform the necessary data acquisition preserving the Chain of Custody and preventing modification of the evidence.

##### Materials Needed

**Skills Needed**

* Use of evidence capture tools (below) to capture memory dumps and to byte-copy the data in order to create a forensic image to be used to execute tests without affecting the original evidence received.

**Required software** - depending on the data acquisition type and the operating system, you will need the following tools:

* Live imaging:
  * Windows: DumpIt
  * Mac OS: OSXpmem
  * Linux: LiME - Linux Memory Extractor
* Dead imaging:
  * DEFT distro

**Additional materials**

* Labels or tags
* anti-static bags
* equally sized or larger hard drive or storage device to store the image
* USB stick to collect a file log

##### Considerations

* Define how to handle the documentation and containment related to the data acquisition.
* Follow the data forensic analysis procedures that are required to ensure the evidence is properly handled (see "Important  notes on capturing evidence for analysis" below).
* Document all the process and keep a log, including timestamps, dates, and time zones, as well as versions of software and operating system.
* Carefully consider how to protect this data in transit to analysis. See "How to handle forensic data" below for notes on the Chain of Custody.
* While byte-copying data, be extremely careful when typing the command line `dd` or related. Reversing the **`if`** and **`of`** flags, or confusing the label of the device block related to the source or destination device **will cause the computer to destroy the evidence!**
* If possible, always connect the source disk with a write blocker to prevent modification of the evidence.

##### Walkthrough

**The Chain of Custody: How to handle forensic data**

The Chain of Custody (often referred to as audit trail or chain of evidence) is the process of preserving the integrity of the digital evidence. Being able to maintain the Chain of Custody is very important for forensic evidence. This means that you need to record, and be able to prove, that authorized personnel were in control of the evidence at all times, and that no unauthorized person or device or mechanism could have altered the evidence while in our custody.

To maintain the Chain of Custody, it is imperative to carefully document what happens to the evidence. This means:

- **Store the evidence in an anti-static bag**, or similar appropriate container that will protect the device from static electricity or other destructive forces.

- **Clearly label the evidence.** There must be no confusion about a piece of evidence. All evidence, whether hard drives, USB sticks, DVDs, etc. should be clearly labeled with the following information:

  - What the evidence relates to
  - Who received the evidence
  - Location of where the evidence was received
  - Location of where the evidence was sourced from
  - The date and time the evidence came into our possession
  - Any other notes you think are relevant regarding this piece of evidence (the specifications of the computer a hard drive came from, etc.)

- Every time the evidence changes hands, **the next person responsible for the evidence should "sign for it"**, which means documentation should be produced where the recipient of the evidence confirms they have received the evidence into their custody with their signature.

- **Deny unauthorized personnel from accessing the data** - Every reasonable effort must be taken to prevent unauthorized access to the stored evidence. This means:
  - Storing the evidence in a locked safe
  - Controlling access to areas where the evidence is stored and analyzed
  - Not leaving unauthorized people alone with the evidence

- **If you have to send evidence via courier, or the postal service**:

  - Special containers should be used to seal the evidence in such a way that the container cannot be opened without it being apparent (e.g. seal with special tape that, if removed, cannot be replaced without showing that the container has been opened).
  - Make a copy (image) of the evidence before sending the original through the post or courier service, and generate a hash of the image.


**Live or Dead Imaging?**

Different processes and tools are used depending on what kind of data acquisition and investigation will be done. However, in order to make a correct decision on how to get the forensic image, you should take into account the following questions:

- Is the computer networked? The data in a networked device could be remotely erased. That's why this question is relevant and time sensitive.
- Is the computer running? Important volatile information could be lost if the computer is turned off.
- Do you want to preserve volatile data? Nowadays, sophisticated malware hides on volatile data and modern web browsers can operate in ‘incognito’ or ‘private’ mode (no information is saved). In most of these cases, preserving live evidence is the only way to go, so deleting it may cause loss of evidence. Therefore this decision should be taken in advance, based on the details gathered before the data acquisition.
- Is full-disk encryption enabled? An encrypted disk could complicate the investigation. If the disk is encrypted, the investigator should ask for the password and decrypt the disk manually.
- Is the console unlocked? if the console is locked, a live CD should be used.

Regarding the definitions, we call 'dead imaging', or 'offline imaging', the process of obtaining evidence from systems that are switched off and where no data processing is taking place, while 'live imaging', or 'memory imaging', refers to the process of making a bit-by-bit copy of memory in order to preserve the volatile data available in the device. There is a lot of information of evidentiary value that could be found in a live system. Switching it off may cause loss of volatile data such as running processes, network connections and mounted file systems. On the other hand, leaving a computer running may cause evidence to be altered or deleted. Therefore the investigator needs to decide what alternative is best in each given situation. Another approach is to use specialized tools to extract volatile data from the computer before shutting it down.


___

##### Variant: Live imaging tools and procedures


**Windows: DumpIt**

**Brief description**: DumpIt helps the user to get a memory dump in Windows systems. It is easy to use and it is possible to send the DumpIt.exe file to the victim in order to facilitate the data acquisition.

**Source**: in order to download DumpIt, you need to register [here](https://my.comae.io/tools).
Intructions can be found [here](https://www.circl.lu/pub/tr-22/#memory-acquisition).

**How to use DumpIt**:

**Note:** *it is easier to provide DumpIt.exe directly to the client.*

1. Make sure you have more free space on the disk or the USB key you run the memory dump from
2. Download DumpIt
3. As it is an archive, extract it (right-click, extract)
4. Connect the hard disk or USB key with DumpIt to the computer you want to do the memory acquisition from
5. Double-click on the file
6. A window will pop up. Read the message in the window: if the “Address space size” is bigger than the “Free space size”, you do not have enough space in the device. In that case, you should move DumpIt.exe to an empty USB key or SD card that is bigger than the “Address space size”
7. If the space in the device is sufficient, hit ‘y’ and wait (it can take a very long time)
8. Compress the memory dump in an encrypted archive. The best way is to use 7-ZIP, as Windows 7 does not support encryption.


**MacOS: OSXPMem**

**Brief description**: OSXPMem is a part of the pmem suite created by the developers of Rekall. Rekall itself is a very useful utility built for both memory acquisition and live memory analysis on Windows, Linux, and OS X systems.

**Source**:

- [OSXPMem Github repository](https://github.com/wrmsr/pmem/tree/master/OSXPMem)
- [OSXPMem latest release](https://github.com/google/rekall/releases/download/v1.5.1/osxpmem-2.1.post4.zip)
- Instructions on how to download and launch OSXPMem can be found [here](http://cyberforensicator.com/2016/12/06/mac-memory-imaging-with-osxpmem/).

**How to use OSXPMem**:

Download the latest release (the latest *OSXPMem* release is [1.5.1 Furka](https://github.com/google/rekall/releases/tag/v1.5.1)).

1. Unzip the package

    `$ unzip osxpmem.osxpmem-2.1.post4.zip`

2. The file ownership/permissions must be changed to “root:wheel”

    `$ sudo chown -R root:wheel osxpmem.app/`

3. Run OSXPMem to collect memory from the local system

    `$ sudo osxpmem.app/osxpmem -o OUTPUT_DIR/FILENAME.aff4`

4. Check the information acquired

     `$ sudo osxpmem.app/osxpmem -V OUTPUT_DIR/FILENAME.aff4`

5.  Extract the AFF4 memory image stream into a singular raw file for parsing/analysis by other tools

      `$ sudo osxpmem.app/osxpmem -e /dev/pmem -o OUTPUT_DIR/FILENAME.raw OUTPUT_DIR/FILENAME.aff4`

6. Unload the kernel extension

    `$ sudo osxpmem.app/osxpmem -u`

7. Check if your OS X has a memory profile available or create one if required, in order to do the analysis with the tool Volatility.

     You can check available profiles [here](https://github.com/volatilityfoundation/profiles/tree/master/Mac)

Note: You also have the option of including additional local files within the resulting AFF4 volume/file via the `-i </path/to/file> -i </path/to/file>` command line option(s), which can be useful in producing a singular output volume containing not only memory but other files (binaries/logs/etc.) you’d like to analyze as well.

Additional information:

- http://blog.rekall-forensic.com/2016/05/the-pmem-suite-of-memory-acquisition.html
- https://ponderthebits.com/2017/02/osx-mac-memory-acquisition-and-analysis-using-osxpmem-and-volatility/


**Linux: LiME - Linux Memory Extractor**

**Brief description**: Linux Memory Extractor (LiME) is a Loadable Kernel Module (LKM), which allows the acquisition of volatile memory from Linux and Linux-based devices, such as those powered by Android. The tool supports dumping memory either to the file system of the device or over the network.

**Source:**

- [LiME Github repository](https://github.com/504ensicsLabs/LiME)

**How to use LiME**:

1. Download the LiME source code from the [Github repository](https://github.com/504ensicslabs/lime).
2. Compile it using the Linux `make` command.
3. The result will be the creation of a “.ko” file in the current directory, named `lime-3.2.0-59-generic.ko`.
4. Move the USB to the suspect machine. Plug the USB extraction drive into the machine (assuming that it mounts successfully, otherwise you have to mount it yourself. This isn’t very forensically sound, but there’s not much choice here).
5. Run the command:

    `sudo insmod lime-3.2.0-59-generic.ko "path=/media/USBDriveName/myRAMDump.lime format=raw"`.

6. It is important that you include both the path parameter and the format parameter in the command, otherwise you’ll get the “-1 invalid parameters” error. For Ubuntu you’ll need the quotes around the path and format parameters, while in other distributions like CentOS and RedHat you won’t need them.

Memory acquisition can be achieved from remote too. Instructions on how to do it can be found [here](https://github.com/504ensicslabs/lime#examples).

Additional tools and procedures from different OSs and versions can be found [here](http://www.forensicswiki.org/wiki/Tools:Memory_Imaging)

___

##### Variant: Offline / Dead imaging tools and procedures

Dead or offline imaging (also known as disk acquisition) is the action of creating a forensic image of an entire disk, where the imaging process does not alter any data on the disk, and all data, metadata, and unallocated space are included. Details on how to do this (using CLI commands or a forensic distro) can be found in the section "How to Byte-Copy Data" below (instead of using an external medium as source device, the hard disk of the victim's device should be used).

Additional tutorials can be found here:

- [Windows](https://www.circl.lu/pub/tr-22/#disk-acquisition)
- Mac and Linux:
    - [Forensic Wiki: Dd](http://www.forensicswiki.org/wiki/Dd)
    - [Guymager](http://guymager.sourceforge.net/)
- [Solid State Drives](https://articles.forensicfocus.com/2018/03/13/forensic-acquisition-of-solid-state-drives-with-open-source-tools/)

**How to Byte-Copy Data**

By "target" we will refer to the hard drive or data image already acquired. When explaining the use of commands, the "target" will be also referred to as "source device", while the place where the byte-copied data will be stored is referred to as "destination device". The forensic image that will be acquired with this process will be used to execute tests without affecting the original evidence received.


**Files and device block labels for the examples**

For the command examples, these name conventions will be used:

- `[IMAGENAME].img` - The name of the image file to be created

- `[LOGFILENAME].txt` - log file name

- `/dev/sdX` - target drive or source (assuming we want to copy a hard drive or data image and sdX is the partition).

- `/dev/sdY` - destination drive (assuming this is the media where the copy will be stored and sdY is the partition).

1. Prepare destination media to be used to save the forensic image

    The forensic image that will be taken from the target should be saved in a proper labeled and formatted drive with available space greater that the size of the forensic image. Execute the actions described below before approaching the target.

    - Select an equally sized or larger hard drive or storage device to store the image
    - Properly label the destination media
    - Prepare an additional USB stick to collect a file log

2. Capture the forensic image

    There are two ways to capture the forensic image:

    1. using a bootable Linux forensic distribution on a CD or USB stick (see "Using a Forensic distribution" below), or
    2. by command line (terminal). If possible, use the forensic distribution, as this method does not mount devices by default.



**Using a Forensic distribution**

In case you are using the forensic distribution, for example [DEFT](http://www.deftlinux.net/), boot the image by following these steps:

- While the PC/laptop is powered off, plug into it:
    1. the USB stick or CD with the Deft image,
    2. the USB stick to upload the log, and
    3. the enclosure with the wiped drive where the copy will be saved.

- Boot the DEFT Linux from the USB/CD/DVD: power the PC/laptop on, wait for the DEFT boot loader to start, select the language and then the system will display a text-based session with a bash shell with root permissions.

**NOTE:** in order to get the DEFT boot loader started, the BIOS of the system being analyzed should be set to boot from CD-ROM/DVD-ROM/BD-ROM or from external storage devices (depending on the media containing DEFT). In any other circumstances, configure the BIOS, save and restart the system either with the DVD already inserted in your CD/DVD drive or with the USB stick already connected. We recommend changing the boot order of the devices directly in the BIOS to prevent an accidental reboot of your PC (e.g. due to a power surge).

If it is not possible to use the forensic distribution's graphical interface, just open a command line terminal.

In the command prompt (bash shell in DEFT) enter the commands detailed in each step listed below.

**Step 1:** in order to keep the record of the procedure, a log file will be elaborated in a separate USB stick.

- List all the partitions and storage devices connected to the system. Identify all  the plugged devices (especially the internal hard disk, external drives, etc.) by entering the below command:

    `fdisk -l | less`

    **Note:** all mounted partitions and devices will be in the /dev directory, typically as /dev/sdX - where X is a letter starting with `a` and incrementing.

- Create a log directory in a separate USB stick by entering the following commands (assuming /dev/sdb1 is a partition on the USB stick):

    - Check if the USB stick partition you want to use for your log directory is mounted by launching this command:

        `mount | grep /dev`

    - The output will be a list of mounted devices with several details, including the directory where they are mounted. Check if the USB partition you want to use features in this list, and in which directory it is mounted (for example, `/dev/sdb1 on /media/user/USB` means that the USB stick partition `/dev/sdb1` is mounted in the directory `/media/user/USB`.

    - If the USB stick partition you want to use is not mounted, you can mount it with the following commands:

        - Create a directory where you can mount the partition:

            `mkdir /mnt/[DirectoryNameUSB]`

        - Mount the partition in the directory you just created:

            `mount /dev/sdb1 /mnt/[DirectoryNameUSB]`

    - Create a directory labeled with your incident name in the mounted partition:

       `mkdir /mnt/[DirectoryNameUSB]/[incidentname]`

- Take a copy of the fdisk output and write it to the USB stick using a command output redirection like this:

    `fdisk -l > /mnt/[DirectoryNameUSB]/[incidentname]/fdisk.txt`

- Create a directory in the destination media (assuming `/dev/sdc1` is the partition to write the forensic image to):

    - If the destination media is not automatically mounted (see above on how to check), mount it with the following commands:

        `mkdir /mnt/[DirectoryNameIMAGE]`

        `mount /dev/sdc1 /mnt/[DirectoryNameIMAGE]`

    - Access the directory where you have mounted the destination media and create a directory with the incident name, then access the directory you have just created:

        `cd /mnt/[DirectoryNameIMAGE]`

        `mkdir [incidentname]`

        `cd [incidentname]`


**Step 2:** Write-blockers to prevent alterations.

If you use the forensic distribution option, this step can be skipped. Otherwise, the following command should be entered to prevent any data from being written to the block device, allowing mounting of the block device with read-only access.

    mount -o ro /dev/sdX  /mnt/sdX/

Other block devices (the USB stick for the log or the destination block device) can be mounted without taking this precaution.


**Step 3:**  Byte-copy the data to a data image for forensic analysis purposes.

When all the data from a disk is duplicated exactly from the source disk and stored in a file, the resulting bit-for-bit copy is called a raw image. Raw images can be created by several different utilities and frequently will use the following file extensions: `.dd`, `.raw`, `.img`.

There are different tools available to obtain this raw image file. Which one we use will depend on which are available for our operating system, and which tool best suits our needs. These tools are listed below.

**WARNING!** Be extremely careful when typing the command line for this program. Reversing the **`if`** and **`of`** flags, or confusing the label of the device block related to the source or destination device **will cause the computer to destroy the evidence!** Therefore it is imperative to check and re-check (and preferably have someone else check) the command before executing it.

Please keep in mind that the `if=` flag refers to the input file, in this case, the source device or target and the `of=` flag refers to the output file or destination device.

**Tools for bit-by-bit copy**

- [**dd**](http://forensicswiki.org/wiki/Dd) - Functional utility that  requires only minimal resources to run. This command takes as input the mass storage device and returns as output its clone within the file diskimage.img, to a file or to a mass storage device (and vice versa).
    - Platform: Linux, Mac
    - Difference from other tools: Lacks some of the useful features found in more capable imagers such as metadata gathering, error correction, piecewise hashing, and a user-friendly interface.

- **dd.exe** - Dd.exe is a Microsoft Windows implementation of the Unix dd utility. This utility, which does not come with the operating system, is one of the tools in the Forensic Acquisition Utilities suite written by George Garner, and should be downloaded from [this page](http://www.gmgsystemsinc.com/fau/)
    - Platform: Windows
    - Difference from other tools: Same features as dd, but this utility provides native encryption and compression capability. It functions very much like the Unix/Linux dd utility, with some notable exceptions. Dd.exe can send the output directly to a specified TCP or UDP port.

- [**dc3dd**](http://tools.kali.org/forensics/dc3dd) - This tool is a patched version of GNU dd with added features for computer forensics and a graphical interface developed for dc3dd called Automated Image and Restore (AIR).
    - Platform: Linux
    - Difference from other tools:
        - On-the-fly hashing with multiple algorithms
        - Able to write errors directly to a file
        - Combined error log. Groups errors together
        - Pattern wiping. Wipe output files with a single hex digit or a text pattern
        - Verify mode
        - Progress reports. See the progress of the operation while it's running
        - Split output. Able to split output files into fixed-size chunks

- **dcfldd** - dcfldd is a fork of GNU dd, so dcfldd has its own release schedule unrelated to dd updates.
    - Platform: Linux
    - Difference from other tools:
        - On-the-fly hashing of the transmitted data
        - Progress bar of how much data has already been sent
        - Wiping of disks with known patterns
        - Verification that the image is identical to the original drive, bit-for-bit
        - Simultaneous output to more than one file/disk is possible
        - The output can be split into multiple files
        - Logs and data can be piped into external applications

- [**ddrescue**](https://www.gnu.org/software/ddrescue/) - Data recovery tool. It copies data from one file or block device (hard disk, CD-ROM, etc.) to another, trying hard to rescue data in case of read errors.
    - Platform: Windows, Linux
    - Difference from other tools: ddrescue uses a sophisticated algorithm to copy data from failing drives, causing them as little additional damage as possible.


**Command flag clarification and examples**

- `if=` flag refers to the input file, the source device or target
- `of=` flag refers to the output file or destination device or data image file name (.img)
- `hash=` indicates the algorithm used to generate the hash

| **Tool** |                      Command Syntax                   |
|----------|-------------------------------------------------------|
|    dd    | `dd if=/dev/sdX of=/dev/sdY` <br /> `dd if=/dev/sdX of=/dev/sdY/[IMAGENAME].img` |
|   dc3dd  | `dc3dd  if=/dev/sdX of=[IMAGENAME].img hash=md5 log=[LOGFILENAME].txt` |
| ddrescue | `ddrescue /dev/sdX /dev/sdY/[IMAGENAME].img`            |
|  dcfldd  | `dcfldd if=/dev/sdX of=/dev/sdY/[IMAGENAME].img hash=sha1` (or `hash=md5`)|

##### Recommendation

See Incident Response guidance.
