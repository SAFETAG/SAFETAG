
build/report.md:
	@echo "Building markdown file from report."
	../../modules/markdown-pp/markdown-pp.py index.report.md build/report.md

build/report.html: build/report.md
	@echo "Building html file from markdown report."
	pandoc --toc --toc-depth=2 -s \
		--template=theme/html5.template \
		--to=html5 build/report.md \
		--output=build/report.html

build/report.pdf: build/report.html
	@echo "Building pdf from html report."
	wkhtmltopdf --user-style-sheet theme/core.css \
		--title "SAFETAG ADIDS Curricula" \
		--disable-smart-shrinking  \
		--footer-center "Page [page] of [toPage]" \
		--header-left [doctitle] \
		--outline \
		--outline-depth 2 \
		build/report.html build/report.pdf
