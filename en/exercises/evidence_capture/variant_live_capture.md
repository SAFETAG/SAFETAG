
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
