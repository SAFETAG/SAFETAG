
* Define how to handle the documentation and containment related to the data acquisition.
* Follow the data forensic analysis procedures that are required to ensure the evidence is properly handled (see "Important  notes on capturing evidence for analysis" below).
* Document all the process and keep a log, including timestamps, dates, and time zones, as well as versions of software and operating system.
* Carefully consider how to protect this data in transit to analysis. See "How to handle forensic data" below for notes on the Chain of Custody.
* While byte-copying data, be extremely careful when typing the command line `dd` or related. Reversing the **`if`** and **`of`** flags, or confusing the label of the device block related to the source or destination device **will cause the computer to destroy the evidence!**
* If possible, always connect the source disk with a write blocker to prevent modification of the evidence.
