PHONY: all dependencies pandoc ghc cabal HASKELL_DEPENDS packages report adids install texpackages

export PATH := $(PATH):~/.cabal/bin

all: install audit

#============ Installation ==============

install: packages

packages: | pandoc modules/markdown-pp/markdown-pp.py

modules/markdown-pp/markdown-pp.py: | submodules
	@echo "Building markdown-pp"
	@echo "This will require root access to this machine... sorry"
	@cd modules/markdown-pp && sudo python setup.py install

submodules:
	git submodule update --init

PANDOC_INST := $(shell which pandoc)
pandoc: | dependencies
	@echo "Checking if Pandoc is installed"
ifeq ($(PANDOC_INST),)
	@echo "Pandoc needs to be installed"
	@echo "This will require a network connection"
	@echo "Updating package database"
	cabal update
	@echo "Installing pandoc and its dependencies"
	cabal install pandoc
else
	@echo "Pandoc is already installed."
endif

#============ Audit Folder Setup ==============

DATE_DIR := $(shell date +%Y_%m_%d_%H_%M_%S)
audit: date_dir | packages
	@echo "Setting up a new audit in audit folder $(DATE_DIR)"
	@python modules/audit_setup.py --directory audit/$(DATE_DIR)

date_dir:
	-mkdir -p audit/$(DATE_DIR)

#============ Dependencies ==============

dependencies: | ghc cabal tex

HASKELL_ERROR = $(error "ERROR: Please install the [haskell-platform]. This will give you [GHC] and the [cabal-install] build tool.")

GHC_INST := $(shell which ghc)
ghc:
ifeq ($(GHC_INST),)
	$(HASKELL_ERROR)
endif

CABAL_INST := $(shell which cabal)
cabal:
ifeq ($(CABAL_INST),)
	$(HASKELL_ERROR)
endif

TEX_INST := $(shell which latex)
tex:
ifeq ($(TEX_INST),)
	$(error "ERROR: For PDF output, you’ll need LaTeX. We recommend installing TeX Live via your package manager. (On Debian/Ubuntu, apt-get install texlive.).")
endif

# =============== Convert vectors into pixel based images for publising=========

SVG_IMAGES = $(wildcard content/images/*.svg)
PNG_IMAGES = $(SVG_IMAGES:.svg=.png)

content/images/%.png: %.svg
	inkscape -e $*.png $<


# =============== Report Generation =================

# Setting SHELL and adding cabal to PATH so that we can just make pandoc work on debian without mucking with the ~/.bash_profile
SHELL:=/bin/bash
PATH:=$(PATH):~/.cabal/bin/

adids: content/images/$(PNG_IMAGES)
	echo $(PATH)
	-mkdir -p audit/build
	modules/markdown-pp/markdown-pp.py index.adids.md audit/build/ADIDS.md
	pandoc --table-of-contents --toc-depth=2 -t latex audit/build/ADIDS.md -o audit/build/ADIDS.tex
	pandoc --table-of-contents --toc-depth=2 audit/build/ADIDS.md -o audit/build/ADIDS.pdf

report: content/images/$(PNG_IMAGES)
	-mkdir -p audit/build
	modules/markdown-pp/markdown-pp.py index.report.md audit/build/report.md
	pandoc --table-of-contents --toc-depth=2 -t latex audit/build/report.md -o audit/build/report.tex
	pandoc --table-of-contents --toc-depth=2 audit/build/report.md -o audit/build/report.pdf

guide: content/images/$(PNG_IMAGES)
	-mkdir -p audit/build
	modules/markdown-pp/markdown-pp.py index.guide.md audit/build/guide.md
	pandoc --table-of-contents --toc-depth=2 -t latex audit/build/guide.md -o audit/build/guide.tex
	pandoc --table-of-contents --toc-depth=2 audit/build/guide.md -o audit/build/guide.pdf

mini_guide: content/images/$(PNG_IMAGES)
	-mkdir -p audit/build
	modules/markdown-pp/markdown-pp.py index.mini.guide.md audit/build/guide.mini.md
	pandoc --table-of-contents --toc-depth=2 -t latex audit/build/guide.mini.md -o audit/build/mini_guide.tex
	pandoc --table-of-contents --toc-depth=2 audit/build/guide.mini.md -o audit/build/mini_guide.pdf

all_docs: adids guide report



# =============== For Future Integration of a smaller latex install =================

modules/install-tl-unx.tar.gz:
	wget --directory-prefix=modules/  http://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz

modules/texlive: | modules/install-tl-unx.tar.gz
	mkdir modules/texlive
	tar -zxf modules/install-tl-unx.tar.gz -C modules/texlive --strip-components 1
	cd modules/texlive/ && ./install-tl  -v -v -no-gui -profile=../latex.profile

texpackages:
	tlmgr install titlesec



