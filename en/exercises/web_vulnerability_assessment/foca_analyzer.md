**FOCA Quick Guide**

Requirements:
- FOCA executable
- Windows Environment (Virtualized)
- .NET Framework

**Installing FOCA analyzer**
- Download from [FOCA website](https://www.elevenpaths.com/labstools/foca/index.html#)
- Install [.NET Framework](https://www.microsoft.com/net/download/linux)
- Extract FOCA zip file into a folder
- To launch, go to ```foca pro``` then```bin``` and select FOCA application

**Features**

To know more of FOCA's features, [Visit FOCA’s website](https://www.elevenpaths.com/labstools/foca/index.html)

**Functionality**

FOCA scanner has tons of great features from web searches and DNS searches as examples. To know more of functionalities, visit [FOCA's website](https://www.elevenpaths.com/labstools/foca/index.html)

**Creating Your first Project:**

To create a project in FOCA, click ```Project``` on the tab menu, and select ```New Project```

There are few items to fill in FOCA:
- **Project name:** Name of your project
- **Domain website:** the Website of your target
- **Alternative domains:** for sub-domains, and other domains that your target own
- **Folder where to save documents:** Select any folder or create a folder for your FOCA results
- **Project date:** Date of your project (automatically filled up)
- **Project notes:** Any notes that you have for this particular project

After completing the forms, select the button ```Create```

**Scan and Search:**

After saving your project, it will bring you to the main window. On the upper right hand corner of your screen, you will see the two settings:

- **Search Engines:** search engines you wanted to use (*Google, Bing, Exalead*)
- **Extensions:** Extension refers to file extensions (*doc, docx, xls, xlsx etc*) By selecting an extension, it will be included in the scan/search.

Click the ```Search All``` buttong below the ```Extension``` options to start scan.

Note: FOCA will give you a warning regarding the IP address of the target and it’s netrange owner. This will be added to the alternative domain.

**Analyzing Results:**

The results of FOCA depends on the files/documents uploaded to the website that are "publicly available". There are situations, where an organization may not have any publicly available documents. If that is the case, move next to the Maltego assessment activity.

However, if your scan generates files/documents scanned, you can may analyzing and extract metadata from the identified files/documents.

**Downloading Files:**
After the search/scan is complete, right-click on any file, and you can start downloading files one-by-one, or all at once. (you can only extract metadata of files that are already downloaded). If the target website contains a lot of files and documents available, you may want to selectively, or download the files by 



**Extracting Metadata:**
After selecting a file/s that is/are downloaded, you may ```right-click``` and select ```Download Metadata```
You may start analyzing the files one-by-one of all at once. To do this, first, download all documents. Then, right-click, select ```Extract all Metadata```. After Extracting your metadatas you can now ```right-click``` again, and select: ```analzye metadata```. (There’s a green button that will appear once a file has been analyzed. Same as with download, it will show progress bars for each individual files and the time it takes time to download)


