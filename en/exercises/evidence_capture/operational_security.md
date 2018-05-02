
* Define how to handle the documentation and containment related to the data acquisition.
* Follow the data forensic analysis procedures that are required to ensure the evidence is properly handled.
* Document all the process and keep a log.
* Carefully consider how to protect this data in transit to analysis. See below for Chain of Custody notes
* Be extremely careful when typing the command line `dd` or related. Reversing the **`if`** and **`of`** flags, or confusing the label of the device block related to the source or destination device **will cause the computer to destroy the evidence!**
* If possible, always connect the source disk with a write blocker to prevent modification of the evidence.
