
fonts:
	@unzip --version  2>&1 \
	|| (echo "unzip needs to be installed" \
	&& echo "run 'sudo apt-get install unzip'.")
	wget -nc https://fonts.google.com/download?family=Noto%20Sans -O NotoSans-hinted.zip
#	wget -nc https://www.google.com/get/noto/pkgs/NotoSans-hinted.zip
	unzip -n NotoSans-hinted.zip -d styles/fonts
