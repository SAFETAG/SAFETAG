# Installation Instructions

These instructions work best on Debian-based systems, like Ubuntu and Kali Linux.  They are only necessary to create custom versions of the SAFETAG materials or to build reports. To browse SAFETAG guides, see the [Releases](https://github.com/OpenInternet/SAFETAG/releases).


  1. Install git

```
sudo apt-get install git
```

  2. Download SAFETAG

```
git clone --recursive https://github.com/SAFETAG/SAFETAG.git
```

  3. Follow the Document Builder's [Installation Instructions](https://github.com/OpenInternet/Documentation-Builder/blob/master/docs/INSTALL.md) to download and install.


# Building Documentation and Reports

The Document Builder can be used to generate the SAFETAG Overview, Guide, or reports using the following command, customizing it to the correct paths for where each have been downloaded

**Please note /path/to** -- thoughtout this guide, /path/to is used as a placeholder which you will need to replace with the right path for where your SAFETAG and Documentation-Builder repositories are stored.  This is generally your home directory (generally /home/username/SAFETAG , or in a subdirectory (e.g. /home/username/github/SAFETAG or /home/username/Documents/SAFETAG). The symbol ~ is a shortcut in Linux which means /home/username,  so the above examples could also be ~/SAFETAG , ~/github/SAFETAG, and ~/Documents/SAFETAG)

```
/path/to/Documentation-Builder/builddoc \
  -i /path/to/SAFETAG/en \
  -I index.overview.md \
  -o outputfile.pdf \
  -t /path/to/SAFETAG/styles
```
The `-i` flag is the base directory, `-I` specifies the index file to build from, `-o` is the output file (it will be created in the directory you run the script from -- but you do not have to run the script from the Document-Builder directory!), and `-t` is the path to the template folder for styling. `-d` provides debugging information and enables you to also get compiled markdown and HTML versions of the document from the tmp directories it creates and lists in the output. Run ```builddoc -h``` for more options.

 So, if you have all of your github repositories in a folder called "github" in your home directory, this command will build the full guide in your current directory:

```
/path/to/Documentation-Builder/builddoc \
  -i /path/to/SAFETAG/en \
  -I index.guide.md \
  -o guide.pdf \
  -t /path/to/SAFETAG/styles
```

Replace index.guide.md with index.overview.md to build the more focused Overview document:

```
/path/to/Documentation-Builder/builddoc \
  -i /path/to/SAFETAG/en \
  -I index.overview.md \
  -o overview.pdf \
  -t /path/to/SAFETAG/styles
```


To build the Spanish version of SAFETAG:

```
/path/to/Documentation-Builder/builddoc \
  -i /path/to/SAFETAG/es \
  -I index.guide.md \
  -o guia.pdf \
  -t /path/to/SAFETAG/es/styles
```
*Note:* The Spanish version has a slightly modified style to fit the contents. **You will need to manually copy the fonts folder from the top-level styles directory into es/styles**.


To build the Arabic version of SAFETAG:

```
/path/to/Documentation-Builder/builddoc \
  -i /path/to/SAFETAG/ar \
  -I index.guide.md \
  -o guide.pdf \
  -t /path/to/SAFETAG/ar/styles
```
*Note:* The Arabic version requires the styles and templates to be adapted to use a right-to-left text flow and implements custom fonts.  We recommend downloading and using the SIL Open Font 1.1 licensed Noto Naskh Arabic  (https://www.google.com/get/noto/#naskh-arab), storing the font files in SAFETAG/ar/styles/fonts . If you choose a different font, you will need to edit the SAFETAG/ar/styles/styles.css to link and reference it, and you may encounter errors rendering periods (.).
