* Be extremely careful when typing the command line `dd` or related. Reversing the **`if`** and **`of`** flags, or confusing the label of the device block related to the source or destination device **will cause the computer to destroy the evidence!** 
* If possible, always connect the source disk with a write blocker to prevent modification of the evidence.
* Document all the process and keep a log.


## How to handle forensic data

The chain of custody (often referred to as audit trail or chain of evidence) is the process of preserving the integrity of the digital evidence. Being able to maintain the chain of custody is very important for forensic evidence. This means that you need to record, and be able to prove, that authorized personnel were in control of the evidence at all times, and that no unauthorized person or device or mechanism could have altered the evidence while in our custody.


### Documentation and containment

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
    - Ideally make a copy (image) of the evidence before sending the original through the post or courier service, and generate a hash of the image.

- **Store the evidence in an anti-static bag**, or similar appropriate container that will protect the device from static electricity or other destructive forces.

- Every time the evidence changes hands, **the next person responsible for the evidence should "sign for it"**, which means documentation should be produced where the recipient of the evidence confirms they have received the evidence into their custody with their signature.

- **Deny unauthorized personnel from accessing the data** - Every reasonable effort must be taken so as to prevent unauthorized access to the stored evidence. This means:
    - Storing the evidence in a locked safe
    - Controlling access to areas where the evidence is stored and analyzed
    - Not leaving unauthorized people alone with the evidence


### Forensic Analysis of the Data

There are some procedures that must be followed to ensure the evidence is properly handled while the forensic analysis is taking place. These include:

- **Keep a log of everything you do to analyze the data:**
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
    - Look in your log at all the steps you have taken between when you last checked the hash and now. One or more of the steps you have taken has modified the data of the copy, so you need to work out which step caused this, and work out how to perform a copy in the investigative step without modifying the data.
    - Abandon the now modified copy of the data. This is tainted, so clearly mark it as such and return it to secure storage.
    - Use a fresh copy of the data, again checking the hash to ensure it is clean before proceeding with the investigation.
    - If necessary, make extra copies of the data from the original source image you created (making sure to never perform investigative steps on that source image).


## Further Readings:

For more details on digital forensics you can explore these resources:

- [*ENISA Electronic evidence - a basic guide for First Responders*](https://www.enisa.europa.eu/publications/electronic-evidence-a-basic-guide-for-first-responders) [PDF]

- Mahesh Kolhe et al., [*Live Vs Dead Computer Forensic Image Acquisition*](http://ijcsit.com/docs/Volume%208/vol8issue3/ijcsit2017080331.pdf) [PDF]

- [*DEFT 7 Manual - Digital Evidence and Forensics Toolkit*](http://www.deftlinux.net/doc/EN-deft7.pdf) [PDF]

- Justin C. Klein Keane, [*Capturing a Forensic Image*](http://sites.sas.upenn.edu/sites/default/files/kleinkeane/files/forensic-capture.pdf) [PDF]

- SANS Digital Forensics and Incident Response Blog: [Forensics 101: Acquiring an Image with FTK Imager](https://digital-forensics.sans.org/blog/2009/06/18/forensics-101-acquiring-an-image-with-ftk-imager/)
