PHONY: all dependencies pandoc ghc cabal HASKELL_DEPENDS packages report adids install texpackages clean_art

all: install output

# Setting SHELL and adding cabal to PATH so that we can just make pandoc work on debian without mucking with the ~/.bash_profile
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
	git submodule update --init

pandoc: | dependencies
	@echo "Checking if Pandoc is installed..."
	@pandoc -v > /dev/null 2>&1 \
	|| (echo "Pandoc needs to be installed" \
	&& echo "This will require a network connection" \
	&& echo "Updating package database" \
	&& cabal update \
	&& echo "Installing pandoc and its dependencies" \
	&& cabal install pandoc)
	@echo "Pandoc is installed"

#============ Output Folder Setup ==============

#path to folder for documentation created by pandoc
DOC_DIR := build/docs

#path to folder for the source files for documentation created by pandoc to allow hand editing
SRC_DIR := build/src

#path to folder for any resources that are auto-grabbed
RES_DIR := build/resource

output:
	@echo "Creating folders for document output."
	mkdir -p $(DOC_DIR)
	mkdir -p $(SRC_DIR)
	mkdir -p $(RES_DIR)

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

PY_SETUP_INST := $(shell dpkg --get-selections \
			| grep -v deinstall \
			| grep python-setuptools > /dev/null 2>&1)
pysetup:
ifeq ($(PY_SETUP_INST),)
	$(error "ERROR: Please install [python-setuptools]. It is required for the markdown preprocessor used in SAFETAG. (On Debian/Ubuntu, apt-get install python-setuptools.).")
endif

TEX_FONT_INST := $(shell dpkg --get-selections \
			| grep -v deinstall \
			| grep texlive-fonts-recommended > /dev/null 2>&1)
pysetup:
ifeq ($(TEX_FONT_INST),)
	$(error "ERROR: Please install [texlive-fonts-recommended]. It is required for the pretty pretty fonts used in SAFETAG. (On Debian/Ubuntu, apt-get install texlive-fonts-recommended.).")
endif

INKSCP_INST := $(shell which inkscape)
inkscape:
ifeq ($(INKSCP_INST),)
	$(error "ERROR: Please install [inkscape]. It is required to convert the git repository friendly SVG images into multi-format friendly png's. (On Debian/Ubuntu, apt-get install inkscape.).")
endif

# =============== Convert vectors into pixel based images for publising=========

SVG_IMAGES = $(wildcard content/images/*.svg)
PNG_IMAGES = $(SVG_IMAGES:.svg=.png)

# Create png's from svg
# 72 DPI is pandoc's default DPI, so set them to this.
%.png: %.svg
	inkscape -d 92 -e $*.png $<

clean_art:
	rm -f content/images/*.png

# =============== Report Generation =================

adids: $(PNG_IMAGES) | output
	modules/markdown-pp/markdown-pp.py index.adids.md $(SRC_DIR)/ADIDS.md
	pandoc --table-of-contents --toc-depth=2 -t latex $(SRC_DIR)/ADIDS.md -o $(SRC_DIR)/ADIDS.tex
	pandoc --table-of-contents --toc-depth=2 $(SRC_DIR)/ADIDS.md -o $(DOC_DIR)/ADIDS.pdf

report: $(PNG_IMAGES) | output
	modules/markdown-pp/markdown-pp.py index.report.md $(SRC_DIR)/report.md
	pandoc --table-of-contents --toc-depth=2 -t latex $(SRC_DIR)/report.md -o $(SRC_DIR)/report.tex
	pandoc --table-of-contents --toc-depth=2 $(SRC_DIR)/report.md -o $(DOC_DIR)/report.pdf

guide: $(PNG_IMAGES) | output
	modules/markdown-pp/markdown-pp.py index.guide.md $(SRC_DIR)/guide.md
	pandoc --table-of-contents --toc-depth=2 -t latex $(SRC_DIR)/guide.md -o $(SRC_DIR)/guide.tex
	pandoc --table-of-contents --toc-depth=2 $(SRC_DIR)/guide.md -o $(DOC_DIR)/guide.pdf

mini_guide: $(PNG_IMAGES) | output
	modules/markdown-pp/markdown-pp.py index.mini.guide.md $(SRC_DIR)/guide.mini.md
	pandoc --table-of-contents --toc-depth=2 -t latex $(SRC_DIR)/guide.mini.md -o $(SRC_DIR)/guide.mini.tex
	pandoc --table-of-contents --toc-depth=2 $(SRC_DIR)/guide.mini.md -o $(DOC_DIR)/guide.mini.pdf

overview: $(PNG_IMAGES) | output
	modules/markdown-pp/markdown-pp.py index.overview.md $(SRC_DIR)/overview.md
	pandoc --table-of-contents --toc-depth=2 -t latex $(SRC_DIR)/overview.md -o $(SRC_DIR)/overview.tex
	pandoc --table-of-contents --toc-depth=2 $(SRC_DIR)/overview.md -o $(DOC_DIR)/overview.pdf

all_docs: adids guide mini_guide overview

#Get list of all docs and document sources
ALL_DOCS := $(wildcard $(DOC_DIR)/*.pdf)
ALL_DOC_MARKDOWN := $(wildcard $(SRC_DIR)/*.md)
ALL_DOC_TEX := $(wildcard $(SRC_DIR)/*.tex)

clean_docs:
	@echo "Removing all existing documentation, markdown, and latex files created."
	@rm -v $(ALL_DOCS) 2>/dev/null || echo "No docs to remove"
	@rm -v $(ALL_DOC_MARKDOWN) 2>/dev/null || echo "No markdown files to remove"
	@rm -v $(ALL_DOC_TEX) 2>/dev/null || echo "No tex files to remove"

# =============== For Future Integration of a smaller latex install =================

modules/install-tl-unx.tar.gz:
	wget --directory-prefix=modules/  http://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz

modules/texlive: | modules/install-tl-unx.tar.gz
	mkdir modules/texlive
	tar -zxf modules/install-tl-unx.tar.gz -C modules/texlive --strip-components 1
	cd modules/texlive/ && ./install-tl  -v -v -no-gui -profile=../latex.profile

texpackages:
	tlmgr install titlesec



