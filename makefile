PHONY: all

all: pandoc markdown-pp

submodules:
	git submodules update --init

markdown-pp: submodules
	echo "Building markdown-pp"
	cd modules/markdown-pp && sudo python setup.py install

pandoc:
	echo "Installing pandoc"
