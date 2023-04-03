#!/usr/bin/env python
"""
Reformat multiline YAML fields
"""

import sys
import re
import glob

long_keys = [
                "walk_through:",
                "recommendations:",
                "overview:",
                "guiding_questions:",
                "operational_security:",
                "outputs:",
                "summary:",
                "short_summary:",
                "considerations:",
                "materials_needed:",
                "recommendations:",
                "purpose:",
                "preparation:",
                "author:",
                "authors:",
                "activities:",
                "references:",
                "skills_required:",
                "skills_trained:",
                "remote_options:",
]

frontmatter_keys = [
                "title:"
                "position:",
                "overview:",
                "organization_size_under:",
                "time_required_minutes:",
                "info_required:",
                "info_provided:",
                "method_icon:",
                "the_flow_of_information:",
            ]

def process_file(filename):
    print(filename)
    f = open(filename, "r")
    lines = f.readlines()
    f.close()

    newlines = []
    processing = False
    for line in lines:
        if line.startswith(tuple(long_keys)):
            if line.strip().endswith((">")):
                newlines.append(line.replace(">", '|'))
                processing = True
                continue
            elif line.strip().endswith(("|")):
                newlines.append(line)
                processing = True
                continue
            elif line.strip().endswith(("''", '""')):
                newlines.append(line)
                processing = False
                continue
            processing = True
            key, start = line.split(":", 1)
            if start.strip() == '[]':
                newlines.append(line)
                processing = False
            elif start.strip():
                newlines.append(key + ": |\n")
                newlines.append("  " + start.strip('"'))
            else:
                newlines.append(line)
            continue

        if processing:
            if line.strip() == '"':
                processing = False
                continue
            elif line.strip() == '---':
                processing = False
                newlines.append(line)
                continue
            elif line.strip().startswith(tuple(frontmatter_keys)):
                processing = False
                newlines.append(line.strip() + '\n')
                continue
            elif line.startswith(tuple(frontmatter_keys)):
                processing = False
                newlines.append(line.strip() + '\n')
                continue
            elif line.strip().startswith(("- ", "* ")):
                newlines.append("  " + line)
                continue
            else:
                newlines.append("  " + line)
        else:
            newlines.append(line)

    output = "".join(newlines)
    # replace double quotes with typographical quotes, mostly to not
    # confuse the markdown renderer
    output = output.replace('\\"', "”")
    # don't allow empty lines after a multiline entry key
    output = output.replace(': |\n\n', ': |\n')

    f = open(filename, "w")
    f.write(output)
    f.close()


if __name__ == "__main__":
    # this will be run from the project root via npm, so that's the base path
    for f in glob.glob("locales/**/content/activities/*.md"):
        process_file(f)
    for f in glob.glob("locales/**/content/methods/*.md"):
        process_file(f)
