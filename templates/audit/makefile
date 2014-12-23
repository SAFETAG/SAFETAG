
build/report.md:
	@echo "Building markdown file from report."
	../../modules/markdown-pp/markdown-pp.py index.report.md build/report.md

build/report.html: build/report.md
	@echo "Building html file from markdown report."
	pandoc build/report.md --to=html --output=build/report.html

build/report.pdf: build/report.html
	@echo "Building pdf from html report."
	wkhtmltopdf --user-style-sheet build/core.css build/report.html build/report.pdf
