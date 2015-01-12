# Installation Instructions

Currently we have instructions for installing on the Ubuntu, Debian, and Kali-Linux operating-systems.

### Installation Ubuntu


  * Install git

```
sudo apt-get install git
```

  * Download SAFETAG

```
git clone --recursive https://github.com/openinternet/safetag.git
```

  * Download the binary [wkhtmltopdf](http://wkhtmltopdf.org/downloads.html) application for your system.

  * Install wkhtmltopdf

```
sudo dpkg --install wkhtmltox-[VERSION]_[PLATFORM]-[CPU].deb
```

  * Install wkhtmltopdf's dependencies [xfonts-75dpi]. *dpkg does not automatically pull in dependencies so we use apt-get to install them.*

```
sudo apt-get -f install
```

  * Install pandoc

```
sudo apt-get install pandoc
```

  * Install python-setuptools

```
sudo apt-get install python-setuptools
```


### Installation Debian

  * **NOTE** Debian users do not have "sudo privileges" by default. If you are using Debian you must be using the root user or a user with sudo privileges.

  * Install git

```
sudo apt-get install git
```

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


### Installation Kali-Linux

  * *NOTE:** SAFETAG is currently incompatable with *metasploit* and its graphical user interface *armitage.* Installing SAFETAG requires that you remove these applications from Kali-Linux.
 
  * Download SAFETAG

```
git clone --recursive https://github.com/openinternet/safetag.git
```

  * Uninstall the default version of wkhtmltopdf installed on Kali-Linux. *This also removes metasploit, armitage, and the package that makes sure you are running the full set of packages for "kali-linux".*

```
apt-get remove wkhtmltopdf
```

  * Download the binary [wkhtmltopdf](http://wkhtmltopdf.org/downloads.html) application for your system.

  * Install wkhtmltopdf

```
sudo dpkg --install wkhtmltox-[VERSION]_[PLATFORM]-[CPU].deb
```

  * Install wkhtmltopdf's dependencies [xfonts-75dpi]. *dpkg does not automatically pull in dependencies so we use apt-get to install them.*

```
sudo apt-get -f install
```

  * Install pandoc

```
sudo apt-get install pandoc
```

  * Install python-setuptools

```
sudo apt-get install python-setuptools
```
