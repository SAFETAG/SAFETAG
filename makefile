PHONY: all dependencies pandoc ghc cabal HASKELL_DEPENDS packages report adids install texpackages

export PATH := $(PATH):~/.cabal/bin

all: install audit

#============ Installation ==============

install: packages

packages: | pandoc scripts/markdown-pp/markdown-pp.py

scripts/markdown-pp/markdown-pp.py: | submodules
	@echo "Building markdown-pp"
	@echo "This will require root access to this machine... sorry"
	@cd scripts/markdown-pp && sudo python setup.py install

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
	@python scripts/audit_setup.py --directory audit/$(DATE_DIR)

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


# =============== Report Generation =================

# Setting SHELL and adding cabal to PATH so that we can just make pandoc work on debian without mucking with the ~/.bash_profile
SHELL:=/bin/bash
PATH:=$(PATH):~/.cabal/bin/

adids:
	echo $(PATH)
	-mkdir -p audit/build
	scripts/markdown-pp/markdown-pp.py index.adids.md audit/build/ADIDS.md
	pandoc --table-of-contents --toc-depth=1 audit/build/ADIDS.md -o audit/build/ADIDS.pdf

report:
	-mkdir -p audit/build
	scripts/markdown-pp/markdown-pp.py index.report.md audit/build/report.md
	pandoc --table-of-contents --toc-depth=1 audit/build/report.md -o audit/build/report.pdf

guide:
	-mkdir -p audit/build
	scripts/markdown-pp/markdown-pp.py index.guide.md audit/build/guide.md
	pandoc --table-of-contents --toc-depth=1 audit/build/guide.md -o audit/build/guide.pdf

all_docs: adids guide report


# =============== For Future Integration of a smaller latex install =================

scripts/install-tl-unx.tar.gz:
	wget --directory-prefix=scripts/  http://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz

scripts/texlive: | scripts/install-tl-unx.tar.gz
	mkdir scripts/texlive
	tar -zxf scripts/install-tl-unx.tar.gz -C scripts/texlive --strip-components 1
	cd scripts/texlive/ && ./install-tl  -v -v -no-gui -profile=../latex.profile

texpackages:
	tlmgr install titlesec



