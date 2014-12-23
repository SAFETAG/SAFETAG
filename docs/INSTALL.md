# Installation Instructions

SAFETAG's curricula and reporting rely on the pandoc markdown publishing tool and the markdown-pp module.

## Linux instructions

Currently we only have instructions for installing on Linux systems.

### Installation

  * Download SAFETAG

```
git clone --recursive https://github.com/openinternet/safetag.git
```

  * Download the binary [wkhtmltopdf](http://wkhtmltopdf.org/downloads.html) application for your system.

  * Install wkhtmltopdf

```
sudo dpkg --install wkhtmltox-[VERSION]_[PLATFORM]-[CPU].deb
```

  * Install pandoc

```
sudo apt-get install pandoc
```

  * Install python-setuptools

```
sudo apt-get install python-setuptools
```
