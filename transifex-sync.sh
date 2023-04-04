#!/bin/bash
#

function prepend() { while read line; do echo "${1}${line}"; done; }


./tx add \
    --organization otf \
    --project safetag-overview \
    --resource site \
    --file-filter 'locales/<lang>/site.json' \
    --type GITHUBMARKDOWN \
    $FILEPATH



# per file
MARKDOWN_FILES=$(find content/{activities,approaches,authors,guide_sections,infos,methods,references,skills,tools} -name '*.md')
for FILEPATH in $MARKDOWN_FILES; do
    # ./content/activities/example.md => content/activities/example.md
    FILEPATH=$(echo $FILEPATH | sed 's/^\.\///')
    # content/activities/example.md => activities_example
    RESOURCE_SLUG=$(echo $FILEPATH | sed 's/\.md//' | tr '/' '_')
    # content/activities/example.md => locales/<lang>/activities/example.md 
    FILE_FILTER=$(echo $FILEPATH | prepend 'locales/<lang>/')

    ./tx add \
        --organization otf \
        --project safetag-overview \
        --resource $RESOURCE_SLUG \
        --file-filter "$FILE_FILTER" \
        --type GITHUBMARKDOWN \
        $FILEPATH
done
