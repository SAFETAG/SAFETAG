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

    1. using a bootable Linux forensic distribution on a CD or USB stick, or
    2. by command line (terminal). If possible, use the forensic distribution, as this method does not mount devices by default.
