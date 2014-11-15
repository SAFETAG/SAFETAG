# Installation Instructions

SAFETAG's curricula and reporting rely on the pandoc markdown publishing tool and the markdown-pp module.

## Linux instructions

Currently we only have instructions for installing on Linux systems.

### Installation

  * Install the haskell-platform on your system.
```
sudo apt-get install haskell-platform inkscape texlive texlive-fonts-recommended
```
  * In the main SAFETAG directory run 'make install'
```
make install
```

  * If you receive the following error...

```
Configuring pandoc-1.13.1...
setup: At least the following dependencies are missing:
http-client >=0.3.2 && <0.4 && ==0.4.2.2
World file is already up to date.
cabal: Error: some packages failed to install:
pandoc-1.13.1 failed during the configure step. The exception was:
ExitFailure 1
make: *** [pandoc] Error 1
```

Cabal installed a too recent version of the http-client. Run the following.

```
cabal install --reinstall --force-reinstalls 'http-client < 0.4'
ghc-pkg unregister http-client-tls-0.2.2
ghc-pkg unregister http-client-0.4.2.2
cabal install pandoc
```
