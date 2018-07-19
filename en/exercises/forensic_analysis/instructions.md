
*In most cases, reach out for help, there are multiple organizations which coordinate and can support malware analysis targeting NGOs. The [Digital First Aid Kit](https://rarenet.github.io/DFAK/en/SecureCommunication/) has a list of organizations and in most cases secure contact details to seek support in doing advanced analysis. The [Rapid Response Network](http://www.rarenet.org/), a project of [CiviCERT](https://civicert.org/) is a consortia of these organizations who may be able to help. [Citizen Lab](https://citizenlab.ca/) is also well known for their analysis and research.*

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



In order to facilitate the data analysis, we recommend to get the output data from the image acquisition in raw/dd format, which is accepted as input file in several forensic analysis tools.

To analyze the acquired data, you can use the following tools:

- [Sleuth Kit](http://www.sleuthkit.org/index.php) is a kit of useful open source digital forensic tools to analyze the acquired data. Available tools in this kit include command line tools and a C library that allows you to analyze disk images and recover files from them, and a GUI-based program (Autopsy) that allows you to efficiently analyze hard drives and smartphones. Both tools can be found in the DEFT distro (The Sleuthkit 4.1.3), along with another useful tool kit (Digital Forensics Framework 1.3).

- [Volatility](http://www.volatilityfoundation.org/releases) is an open source framework used for volatile memory forensics or RAM forensics for images taken in Linux, MacOS and Windows. More info and tutorials can be found [here](https://github.com/volatilityfoundation/volatility/wiki).
