
* Document all the process and keep a log.
* Carefully consider how to protect this data in transit to analysis. See below for Chain of Custody notes
* Be extremely careful when typing the command line `dd` or related. Reversing the **`if`** and **`of`** flags, or confusing the label of the device block related to the source or destination device **will cause the computer to destroy the evidence!**
* If possible, always connect the source disk with a write blocker to prevent modification of the evidence.


**How to handle forensic data**

The chain of custody (often referred to as audit trail or chain of evidence) is the process of preserving the integrity of the digital evidence. Being able to maintain the chain of custody is very important for forensic evidence. This means that you need to record, and be able to prove, that authorized personnel were in control of the evidence at all times, and that no unauthorized person or device or mechanism could have altered the evidence while in our custody.

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
