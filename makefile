.PHONY:	all \
	install packages submodules pandoc \ #Installation Rules
	build_dirs \ #Setup Rules
	dependencies ghc cabal tex pysetup tex_fonts inkscape \ #Dependency Rules
	all_docs adids report guide mini_guide overview clean_docs \ #Document Rules
	clean_art \ #Image Rules
	texpackages \ #compile pandoc from src (TODO)


#runs installation, post-installation preperation, and builds all core documents
all: install build_dirs all_docs

# Setting SHELL and adding cabal to PATH so that we can just make pandoc work on debian without mucking with the ~/.bash_profile
# This allows cabal, and therefore also pandoc to be used in this makefile without altering the users global path settings.
SHELL:=/bin/bash
PATH:=$(PATH):~/.cabal/bin/

#============ Installation ==============

install: packages

packages: | pandoc modules/markdown-pp/markdown-pp.py

modules/markdown-pp/markdown-pp.py: | submodules
	@echo "Building markdown-pp"
	@echo "This will require root access to this machine... sorry"
	@cd modules/markdown-pp && sudo python setup.py install

submodules:
	@echo "Downloading SAFETAG submodules."
	git submodule update --init

pandoc: | dependencies
	@echo "Checking if Pandoc is installed..."
	@pandoc --version > /dev/null 2>&1 \
	|| (echo "Pandoc needs to be installed" \
	&& echo "This will require a network connection" \
	&& echo "Updating package database" \
	&& cabal update \
	&& echo "Installing pandoc and its dependencies" \
	&& cabal install pandoc)
	@echo "Pandoc is installed"

#============ Output Folder Setup ==============

#Build all output directories
build_dirs: | $(DOC_DIR) $(SRC_DIR) $(RES_DIR)

build:
	@echo "Creating build directory."
	mkdir build

#path to folder for documentation created by pandoc
DOC_DIR := build/docs

$(DOC_DIR): | build
	@echo "Creating folders for document output."
	mkdir --parents $(DOC_DIR)

#path to folder for the source files for documentation created by pandoc to allow hand editing
SRC_DIR := build/src

$(SRC_DIR): | build
	@echo "Creating folders for document output."
	mkdir --parents $(SRC_DIR)

#path to folder for any resources that are auto-grabbed
RES_DIR := build/resource

$(RES_DIR): | build
	@echo "Creating folders for downloaded resources."
	mkdir --parents $(RES_DIR)

#============ Audit Folder Setup ==============

#Get the current date seperated by underscores.
DATE_DIR := $(shell date +%Y_%m_%d_%H_%M_%S)

audit: $(DATE_DIR) | packages
	@echo "Setting up a new audit in audit folder $(DATE_DIR)"
	@python modules/audit_setup.py --directory audit/$(DATE_DIR)

$(DATE_DIR):
	@echo "Creating a new audit folder named $(DATE_DIR)"
	mkdir --parents audit/$(DATE_DIR)

#============ Dependencies ==============

dependencies: | ghc cabal tex pysetup tex_fonts

#Haskell error variable which is used in multiple places.
#Recursively expanded (= instead of :=). The moment it is defined 'make' will call the error and exit.
HASKELL_ERROR = $(error "ERROR: Please install the [haskell-platform]. This will give you [GHC] and the [cabal-install] build tool.")

#Check if ghc is installed (any output from 'which ghc') and raise an error if it is not.
GHC_INST := $(shell which ghc)
ghc:
ifeq ($(GHC_INST),)
	$(HASKELL_ERROR)
endif

#Check if cabal is installed (any output from 'which cabal') and raise an error if it is not.
CABAL_INST := $(shell which cabal)
cabal:
ifeq ($(CABAL_INST),)
	$(HASKELL_ERROR)
endif

#Check if texlive is installed (any output from 'which latex') and raise an error if it is not.
TEX_INST := $(shell which latex)
tex:
ifeq ($(TEX_INST),)
	$(error "ERROR: For PDF output, you’ll need LaTeX. We recommend installing TeX Live via your package manager. (On Debian/Ubuntu, apt-get install texlive.).")
endif

#Check if pysetup is installed using dpkg because it does not supply command line arguments.
PY_SETUP_INST := $(shell dpkg --get-selections python\\-setuptools 2>/dev/null \
			| grep --invert-match deinstall ) # Don't show if the package is installed but selected for deinstallation.


pysetup:
ifeq ($(PY_SETUP_INST),)
	$(error "ERROR: Please install [python-setuptools]. It is required for the markdown preprocessor used in SAFETAG. (On Debian/Ubuntu, apt-get install python-setuptools.).")
endif

#Check if the texlive fonts library is installed using dpkg because it does not supply command line arguments.
TEX_FONT_INST := $(shell dpkg --get-selections texlive\\-fonts\\-recommended 2>/dev/null \
		  | grep --invert-match deinstall) # Don't show if the package is installed but selected for deinstallation.
tex_fonts:
ifeq ($(TEX_FONT_INST),)
	$(error "ERROR: Please install [texlive-fonts-recommended]. It is required for the pretty pretty fonts used in SAFETAG. (On Debian/Ubuntu, apt-get install texlive-fonts-recommended.).")
endif

#Check if inkscape is installed (any output from 'which inkscape') and raise an error if it is not.
INKSCP_INST := $(shell which inkscape)
inkscape:
ifeq ($(INKSCP_INST),)
	$(error "ERROR: Please install [inkscape]. It is required to convert the git repository friendly SVG images into multi-format friendly png's. (On Debian/Ubuntu, apt-get install inkscape.).")
endif

# =============== Convert vectors into pixel based images for publising=========

#Create list of PNG image names from the names of all SVG images.
#This is used as a dependency for report generation that specifies all the possible png's to be created.
SVG_IMAGES = $(wildcard content/images/*.svg)
PNG_IMAGES = $(SVG_IMAGES:.svg=.png)

# Create a requested png by exporting the corresponding svg to png format.
# Only re-creates a png when the svg has been updated.
# 72 DPI is pandoc's default DPI, but 92 fills up the page better when we have slim margins, so set the DPI to 92.
# See the following links to learn more about the syntax here.
# https://www.gnu.org/software/make/manual/make.html#Static-Usage
# https://www.gnu.org/software/make/manual/make.html#Automatic-Variables
%.png: %.svg
	inkscape --export-dpi=92 --export-png=$*.png $<

clean_art:
	rm --force content/images/*.png

# =============== Report Generation =================

#Create the ADIDS auditor trainer guide
adids: $(PNG_IMAGES) | $(SRC_DIR) $(DOC_DIR)
	modules/markdown-pp/markdown-pp.py index.adids.md $(SRC_DIR)/ADIDS.md
	pandoc --table-of-contents --toc-depth=2 --to=latex $(SRC_DIR)/ADIDS.md --output=$(SRC_DIR)/ADIDS.tex
	pandoc --table-of-contents --toc-depth=2 $(SRC_DIR)/ADIDS.md --output=$(DOC_DIR)/ADIDS.pdf

#Create an audit report
report: $(PNG_IMAGES) | $(SRC_DIR) $(DOC_DIR)
	modules/markdown-pp/markdown-pp.py index.report.md $(SRC_DIR)/report.md
	pandoc --table-of-contents --toc-depth=2 --to=latex $(SRC_DIR)/report.md --output=$(SRC_DIR)/report.tex
	pandoc --table-of-contents --toc-depth=2 $(SRC_DIR)/report.md --output=$(DOC_DIR)/report.pdf

#Create the auditor full guide
guide: $(PNG_IMAGES) | $(SRC_DIR) $(DOC_DIR)
	modules/markdown-pp/markdown-pp.py index.guide.md $(SRC_DIR)/guide.md
	pandoc --table-of-contents --toc-depth=2 --to=latex $(SRC_DIR)/guide.md --output=$(SRC_DIR)/guide.tex
	pandoc --table-of-contents --toc-depth=2 $(SRC_DIR)/guide.md --output=$(DOC_DIR)/guide.pdf

#Create the auditor mini guide
mini_guide: $(PNG_IMAGES) | $(SRC_DIR) $(DOC_DIR)
	modules/markdown-pp/markdown-pp.py index.mini.guide.md $(SRC_DIR)/guide.mini.md
	pandoc --table-of-contents --toc-depth=2 --to=latex $(SRC_DIR)/guide.mini.md --output=$(SRC_DIR)/guide.mini.tex
	pandoc --table-of-contents --toc-depth=2 $(SRC_DIR)/guide.mini.md --output=$(DOC_DIR)/guide.mini.pdf

#Create the auditor overview document
overview: $(PNG_IMAGES) | $(SRC_DIR) $(DOC_DIR)
	modules/markdown-pp/markdown-pp.py index.overview.md $(SRC_DIR)/overview.md
	pandoc --table-of-contents --toc-depth=2 --to=latex $(SRC_DIR)/overview.md --output=$(SRC_DIR)/overview.tex
	pandoc --table-of-contents --toc-depth=2 $(SRC_DIR)/overview.md --output=$(DOC_DIR)/overview.pdf

#Create the all SAFETAG documents
all_docs: adids guide mini_guide overview

#Get list of all docs and document sources
ALL_DOCS := $(wildcard $(DOC_DIR)/*.pdf)
ALL_DOC_MARKDOWN := $(wildcard $(SRC_DIR)/*.md)
ALL_DOC_TEX := $(wildcard $(SRC_DIR)/*.tex)

#Remove all created documents
clean_docs:
	@echo "Removing all existing documentation, markdown, and latex files created."
	@rm --verbose $(ALL_DOCS) 2>/dev/null || echo "No docs to remove"
	@rm --verbose $(ALL_DOC_MARKDOWN) 2>/dev/null || echo "No markdown files to remove"
	@rm --verbose $(ALL_DOC_TEX) 2>/dev/null || echo "No tex files to remove"

# =============== For Future Integration of a smaller latex install =================

modules/install-tl-unx.tar.gz:
	wget --directory-prefix=modules/  http://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz

modules/texlive: | modules/install-tl-unx.tar.gz
	mkdir modules/texlive
	tar -zxf modules/install-tl-unx.tar.gz -C modules/texlive --strip-components 1
	cd modules/texlive/ && ./install-tl  -v -v -no-gui -profile=../latex.profile

texpackages:
	tlmgr install titlesec



