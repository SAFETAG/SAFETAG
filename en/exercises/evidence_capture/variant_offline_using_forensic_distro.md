
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

    ```fdisk -l | less```

    **Note:** all mounted partitions and devices will be in the /dev directory, typically as /dev/sdX - where X is a letter starting with `a` and incrementing.

- Create a log directory in a separate USB stick by entering the following commands (assuming /dev/sdb1 is a partition on the USB stick):

    - Check if the USB stick partition you want to use for your log directory is mounted by launching this command:

        ```mount | grep /dev```

    - The output will be a list of mounted devices with several details, including the directory where they are mounted. Check if the USB partition you want to use features in this list, and in which directory it is mounted (for example, `/dev/sdb1 on /media/user/USB` means that the USB stick partition `/dev/sdb1` is mounted in the directory `/media/user/USB`.

    - If the USB stick partition you want to use is not mounted, you can mount it with the following commands:

        - Create a directory where you can mount the partition:

            ```mkdir /mnt/[DirectoryNameUSB]```

        - Mount the partition in the directory you just created:

            ```mount /dev/sdb1 /mnt/[DirectoryNameUSB]```

    - Create a directory labeled with your incident name in the mounted partition:

       ```mkdir /mnt/[DirectoryNameUSB]/[incidentname]```

- Take a copy of the fdisk output and write it to the USB stick using a command output redirection like this:

    ```fdisk -l > /mnt/[DirectoryNameUSB]/[incidentname]/fdisk.txt```

- Create a directory in the destination media (assuming `/dev/sdc1` is the partition to write the forensic image to):

    - If the destination media is not automatically mounted (see above on how to check), mount it with the following commands:

        ```mkdir /mnt/[DirectoryNameIMAGE]```

        ```mount /dev/sdc1 /mnt/[DirectoryNameIMAGE]```

    - Access the directory where you have mounted the destination media and create a directory with the incident name, then access the directory you have just created:

        ```cd /mnt/[DirectoryNameIMAGE]```

        ```mkdir [incidentname]```

        ```cd [incidentname]```


**Step 2:** Write-blockers to prevent alterations.

If you use the forensic distribution option, this step can be skipped. Otherwise, the following command should be entered to prevent any data from being written to the block device, allowing mounting of the block device with read-only access.

    mount -o ro /dev/sdX  /mnt/sdX/

Other block devices (the USB stick for the log or the destination block device) can be mounted without taking this precaution.


**Step 3:**  Byte-copy the data to a data image for forensic analysis purposes.

When all the data from a disk is duplicated exactly from the source disk and stored in a file, the resulting bit-for-bit copy is called a raw image. Raw images can be created by several different utilities and frequently will use the following file extensions: `.dd`, `.raw`, `.img`.

There are different tools available to obtain this raw image file. Which one we use will depend on which are available for our operating system, and which tool best suits our needs. These tools are listed below.

**WARNING!** Be extremely careful when typing the command line for this program. Reversing the **`if`** and **`of`** flags, or confusing the label of the device block related to the source or destination device **will cause the computer to destroy the evidence!** Therefore it is imperative to check and re-check (and preferably have someone else check) the command before executing it.

Please keep in mind that the `if=` flag refers to the input file, in this case, the source device or target and the `of=` flag refers to the output file or destination device.

Tools for bit-by-bit copy

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
