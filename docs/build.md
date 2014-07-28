# Building Documentation and Reports

## Handbook

Currently SAFETAG can only be built by dirctly calling the command line tools. This should be fixed soon.

To create a PDF from an index.md or index.adids.md file use the following command.

```
modules/markdown-pp/markdown-pp.py content/index.md audit/folder/full.md
```

To create a PDF from a markdown file you need to add pandoc to your path and then run pandoc on the file.

You can type the following commands.

```
PATH=$PATH:~/.cabal/bin/
pandoc audit/folder/full.md -o audit/folder/full.pdf
```
