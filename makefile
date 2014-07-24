PHONY: all dependencies pandoc ghc cabal HASKELL_DEPENDS packages report adids install

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


