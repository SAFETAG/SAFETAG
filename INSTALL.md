# Installation Instructions

These instructions work best on Debian-based systems, like Ubuntu and Kali Linux.  They are only necessary to create custom versions of the SAFETAG materials or to build reports. To browse SAFETAG guides, see the [Releases](https://github.com/OpenInternet/SAFETAG/releases).


  * Install git

```
sudo apt-get install git
```

  * Download SAFETAG

```
git clone --recursive https://github.com/openinternet/safetag.git
```

  * Follow the Document Builder's [Installation Instructions](https://github.com/OpenInternet/Documentation-Builder/blob/master/docs/INSTALL.md) to download and install.


# Building Documentation and Reports

The Document Builder can be used to generate the SAFETAG Overview, Guide, or reports using the following command:

```
 /path/to/Documentation-Builder/builddoc -i /path/to/SAFETAG/en -I index.overview.md -o /path/to/outputfile.pdf -t /path/to/SAFETAG/styles
 ```
The -i flag is the base directory, -I specifies the index file to build from, -o is the output file, and -t is the path to the template folder for styling.  -d provides debugging information and enables you to also get compiles markdown and HTML versions of the document. Run ```builddoc -h``` for more options.

 So, if you have all of your github repositories in a folder called "github" in your home directory, this command will build the full guide in your current directory:

```
~/github/Documentation-Builder/builddoc -i ~/github/SAFETAG/en -I index.guide.md -o guide.pdf -t ~/github/SAFETAG/styles
```

Replace index.guide.md with index.overview.md to build the more focused Overview document:

```
~/github/Documentation-Builder/builddoc -i ~/github/SAFETAG/en -I index.overview.md -o overview.pdf -t ~/github/SAFETAG/styles
```


To build the Spanish version of SAFETAG:

```
~/github/Documentation-Builder/builddoc -i ~/github/SAFETAG/es -I index.guide.md -o guia.pdf -t ~/github/SAFETAG/es/styles
```
*Note:* The Spanish version has a slightly modified style to fit the contents. **You will need to manually copy the fonts folder from the top-level styles directory into es/styles**.


To build the Arabic version of SAFETAG:

```
~/github/Documentation-Builder/builddoc -i ~/github/SAFETAG/ar -I index.guide.md -o guide.pdf -t ~/github/SAFETAG/ar/styles
```
*Note:* The Arabic version requires the styles and templates to be adapted to use a right-to-left text flow and implements custom fonts.  We recommend downloading and using the Apache 2.0 Licensed [Droid Arabic Naskh]( https://fontlibrary.org/en/font/droid-arabic-naskh) for readability, storing the font files in SAFETAG/ar/styles/fonts .
