
fonts:
	@unzip --version  2>&1 \
	|| (echo "unzip needs to be installed" \
	&& echo "run 'sudo apt-get install unzip'.")
	wget -nc https://www.google.com/get/noto/pkgs/NotoSans-hinted.zip
	unzip -n NotoSans-hinted.zip -d styles/fonts
