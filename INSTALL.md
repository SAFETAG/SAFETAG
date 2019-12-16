# Installation Instructions

These instructions work best on Debian-based systems, like Ubuntu and Kali Linux.  They are only necessary to create custom versions of the SAFETAG materials or to build reports. To browse SAFETAG guides, see the [Releases](https://github.com/OpenInternet/SAFETAG/releases).


  * Install git

```
sudo apt-get install git
```

  * Download SAFETAG

```
git clone --recursive https://github.com/SAFETAG/SAFETAG.git
```

  * Follow the Document Builder's [Installation Instructions](https://github.com/OpenInternet/Documentation-Builder/blob/master/docs/INSTALL.md) to download and install.


# Building Documentation and Reports

The Document Builder can be used to generate the SAFETAG Overview, Guide, or reports using the following command, customizing it to the correct paths for where each have been downloaded

```
/path/to/Documentation-Builder/builddoc \
  -i /path/to/SAFETAG/en \
  -I index.overview.md \
  -o /path/to/outputfile.pdf \
  -t /path/to/SAFETAG/styles
```
The `-i` flag is the base directory, `-I` specifies the index file to build from, `-o` is the output file, and `-t` is the path to the template folder for styling. `-d` provides debugging information and enables you to also get compiles markdown and HTML versions of the document. Run ```builddoc -h``` for more options.

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
