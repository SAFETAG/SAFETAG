.PHONY:	all \
	install submodules pandoc wkhtmltopdf \ #Installation Rules
	build_dirs \ #Setup Rules
	pysetup fonts \ #Dependency Rules
	all_docs adids report guide overview clean_docs \ #Document Rules


#runs installation, post-installation preperation, and builds all core documents
all: install build_dirs all_docs

#============ Installation ==============

install: modules/markdown-pp/markdown-pp.py wkhtmltopdf pandoc

modules/markdown-pp/markdown-pp.py: | pysetup submodules
	@echo "Building markdown-pp"
	@echo "This will require root access to this machine... sorry"
	@cd modules/markdown-pp && sudo python setup.py install

wkhtmltopdf: fonts
	@echo "Checking if wkhtmltopdf is installed..."
	@pandoc --version > /dev/null 2>&1 \
	|| (echo "wkhtmltopdf needs to be installed" \
	&& echo "Go to http://wkhtmltopdf.org/downloads.html to download.")

submodules:
	@echo "Downloading SAFETAG submodules."
	git submodule update --init

pandoc:
	@echo "Checking if Pandoc is installed..."
	@pandoc --version > /dev/null 2>&1 \
	|| (echo "Pandoc needs to be installed" \
	&& echo "Please run (sudo apt-get install pandoc)")

fonts:
	@unzip --version  2>&1 \
	|| (echo "unzip needs to be installed" \
	&& echo "run 'sudo apt-get install unzip'.")
	wget www.google.com/get/noto/pkgs/NotoSans-hinted.zip
	unzip  NotoSans-hinted.zip -d styles/fonts

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

audit: $(DATE_DIR)
	@echo "Setting up a new audit in audit folder $(DATE_DIR)"
	#@python modules/audit_setup.py --directory audit/$(DATE_DIR)
	cp -fr templates/audit/. audit/$(DATE_DIR)/
	cp styles/core.css audit/$(DATE_DIR)/build/core.css

$(DATE_DIR):
	@echo "Creating a new audit folder named $(DATE_DIR)"
	mkdir --parents audit/$(DATE_DIR)/build

#============ Dependencies ==============

#Check if pysetup is installed using dpkg because it does not supply command line arguments.
PY_SETUP_NOT_INST = $(shell dpkg --status python-setuptools 2>&1 | grep -o "not installed")

pysetup:
ifeq ("$(PY_SETUP_NOT_INST)", "not installed")
	$(error "ERROR: Please install [python-setuptools]. It is required for the markdown preprocessor used in SAFETAG. (On Debian/Ubuntu, apt-get install python-setuptools.).")
endif

build/src/content:
	@echo Creating content link for pdf creation
	ln -s ../../content/ build/src/content

# =============== Report Generation =================

CURRENT_DIR = $(shell pwd)

#Create the auditor adids guide
adids: | $(SRC_DIR) $(DOC_DIR) build/src/content
	modules/markdown-pp/markdown-pp.py content/index/index.adids.md $(SRC_DIR)/adids.md
	pandoc -s --variable=title:"ADIDS Guide" \
		--template=styles/html5.template \
		--to=html5 $(SRC_DIR)/adids.md \
		--output=$(SRC_DIR)/adids.html 
	wkhtmltopdf --user-style-sheet styles/core.css \
		--title "SAFETAG ADIDS Curricula" \
		--disable-smart-shrinking  \
		--load-error-handling skip \
		--load-media-error-handling skip \
		--footer-center "Page [page] of [toPage]" \
		--header-right [doctitle] \
		--outline \
		--outline-depth 2 \
		$(SRC_DIR)/adids.html $(DOC_DIR)/adids.pdf || true

#Create the auditor guide
guide: | $(SRC_DIR) $(DOC_DIR) build/src/content
	modules/markdown-pp/markdown-pp.py content/index/index.guide.md $(SRC_DIR)/guide.md
	pandoc -s --variable=title:"Full Guide" \
		--template=styles/html5.template \
		--to=html5 $(SRC_DIR)/guide.md \
		--output=$(SRC_DIR)/guide.html
	wkhtmltopdf --user-style-sheet styles/core.css \
		--title "SAFETAG Guide" \
		--disable-smart-shrinking  \
		--load-error-handling skip \
		--load-media-error-handling skip \
		--footer-center "Page [page] of [toPage]" \
		--header-right [doctitle] \
		--outline \
		--outline-depth 2 \
		$(SRC_DIR)/guide.html $(DOC_DIR)/guide.pdf

#Create the auditor overview
overview: | $(SRC_DIR) $(DOC_DIR) build/src/content
	modules/markdown-pp/markdown-pp.py content/index/index.overview.md $(SRC_DIR)/overview.md
	pandoc -s --variable=title:"Overview" \
		--template=styles/html5.template \
		--to=html5 $(SRC_DIR)/overview.md \
		--output=$(SRC_DIR)/overview.html
	wkhtmltopdf --user-style-sheet styles/core.css \
		--title "SAFETAG Overview" \
		--disable-smart-shrinking  \
		--load-error-handling skip \
		--load-media-error-handling skip \
		--footer-center "Page [page] of [toPage]" \
		--header-right [doctitle] \
		--outline \
		--outline-depth 2 \
		$(SRC_DIR)/overview.html $(DOC_DIR)/overview.pdf || true

#Create the all SAFETAG documents
all_docs: adids guide overview

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
