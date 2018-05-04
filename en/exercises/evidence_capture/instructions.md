
**Important notes on capturing evidence for analysis**

There are some procedures that must be followed to ensure the evidence is properly handled while the forensic analysis is taking place. These include:

- **Keep a log of everything you do to analyze the data.**
    - What you connected it to, and how
    - Each and every command you ran against the data image as you perform your investigation
    - This log must identify who is performing the analysis
    - Date and time stamps for each action performed

- **Only work on copies of the data, not the source data.**

- **Ideally make multiple copies** from the initial copy, as you may need to work on fresh copies if your analysis accidentally modifies the copy you are working on.

- **Immediately on receipt of the source data, make a cryptographic hash of that image, and store it in a safe place.** This is your *only* guarantee that you have not tampered with the evidence you are working on!

- **After making a copy of the data, immediately create a cryptographic hash of that image**, and check it against your master hash to ensure they match.

- **As you work on your investigation on a copy of the data, periodically check that data image with the cryptographic hash**, to ensure you have not inadvertently modified the data by performing your investigation. If the hash does not match, then:

    - Record the fact that the hash no longer matches in your activity log.
    - Look in your log at all the steps you have taken between when you last checked the hash and now. One or more of the steps you have taken has modified the data of the copy, so you need to work out which step caused this, and how to perform a copy in the investigative step without modifying the data.
    - Abandon the now modified copy of the data. This is tainted, so clearly mark it as such and return it to secure storage.
    - Use a fresh copy of the data, again checking the hash to ensure it is clean before proceeding with the investigation.
    - If necessary, make extra copies of the data from the original source image you created (making sure to never perform investigative steps on that source image).


    **How to handle forensic data**

    The Chain of Custody (often referred to as audit trail or chain of evidence) is the process of preserving the integrity of the digital evidence. Being able to maintain the Chain of Custody is very important for forensic evidence. This means that you need to record, and be able to prove, that authorized personnel were in control of the evidence at all times, and that no unauthorized person or device or mechanism could have altered the evidence while in our custody.

    To maintain the Chain of Custody, it is imperative to carefully document what happens to the evidence. This means:

    - **Clearly label the evidence.** There must be no confusion about a piece of evidence. All evidence, whether hard drives, USB sticks, DVDs, etc. should be clearly labeled with the following information:

        - What the evidence relates to
        - Who received the evidence
        - Location of where the evidence was received
        - Location of where the evidence was sourced from
        - The date and time the evidence came into our possession
        - Any other notes you think are relevant regarding this piece of evidence (the specifications of the computer a hard drive came from, etc.)

    - **If you have to send evidence via courier, or the postal service**:
        - Special containers should be used to seal the evidence in such a way that the container cannot be opened without it being apparent (e.g. seal with special tape that, if removed, cannot be replaced without showing that the container has been opened).
        - Make a copy (image) of the evidence before sending the original through the post or courier service, and generate a hash of the image.

    - **Store the evidence in an anti-static bag**, or similar appropriate container that will protect the device from static electricity or other destructive forces.

    - Every time the evidence changes hands, **the next person responsible for the evidence should "sign for it"**, which means documentation should be produced where the recipient of the evidence confirms they have received the evidence into their custody with their signature.

    - **Deny unauthorized personnel from accessing the data** - Every reasonable effort must be taken to prevent unauthorized access to the stored evidence. This means:
        - Storing the evidence in a locked safe
        - Controlling access to areas where the evidence is stored and analyzed
        - Not leaving unauthorized people alone with the evidence


* * *

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

!INCLUDE "variant_live_capture.md"

___

##### Variant: Offline / Dead imaging tools and procedures

!INCLUDE "variant_offline_capture.md"

___


**Forensic Analysis of the Acquired Data**

In order to facilitate the data analysis, we recommend to get the output data from the image acquisition in raw/dd format, which is accepted as input file in several forensic analysis tools.

To analyze the acquired data, you can use the following tools:

- [Sleuth Kit](http://www.sleuthkit.org/index.php) is a kit of useful open source digital forensic tools to analyze the acquired data. Available tools in this kit include command line tools and a C library that allows you to analyze disk images and recover files from them, and a GUI-based program (Autopsy) that allows you to efficiently analyze hard drives and smartphones. Both tools can be found in the DEFT distro (The Sleuthkit 4.1.3), along with another useful tool kit (Digital Forensics Framework 1.3).

- [Volatility](http://www.volatilityfoundation.org/releases) is an open source framework used for volatile memory forensics or RAM forensics for images taken in Linux, MacOS and Windows. More info and tutorials can be found [here](https://github.com/volatilityfoundation/volatility/wiki).
