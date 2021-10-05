#!/usr/bin/env python
"""
Reformat multiline YAML fields
"""

import sys
import re
import glob


def process_file(filename):
    f = open(filename, "r")
    lines = f.readlines()
    f.close()

    newlines = []
    processing = False
    for line in lines:
        if line.startswith(("walk_through: ", "recommendations: ", "overview: ")):
            if line.strip().endswith(("|", "''")):
                newlines.append(line)
                continue
            print(line)
            processing = True
            key, start = line.split(": ", 1)
            newlines.append(key + ": |\n")
            newlines.append("  " + start.strip('"'))
            continue

        if processing:
            if line.strip() == '"':
                processing = False
                continue
            newlines.append("  " + line)
        else:
            newlines.append(line)

    output = "".join(newlines)

    f = open(filename, "w")
    f.write(output)
    f.close()


if __name__ == "__main__":
    # this will be run from the project root via npm, so that's the base path
    for f in glob.glob("locales/**/content/activities/*.md"):
        # for f in glob.glob('locales/es/content/activities/*.md'):
        process_file(f)
