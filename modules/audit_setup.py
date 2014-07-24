#!/usr/bin/env python
# -*- coding: utf-8 -*-
#


import sys
import os
import argparse
import logging


def main():
    """
    Basic program flow.
    """
    args = get_args()
    try:
        populate_directories(args.directory)
    except OSError as traceback:
        logging.debug(traceback)
        sys.exit(1)

def get_args():
    """Parses command line arguments"""
    arg_parser = argparse.ArgumentParser(description="SAFETAG Audit Setup")
    arg_parser.add_argument("-d", "--directory",
                            help="Choose the path to create the audit directory within.",
                            type=check_dir_exists)
    args = arg_parser.parse_args()
    return args

def populate_directories(root):
    """Populates the sub-directories in the supplied root audit directory. """
    directories = ["output","evidence", "notes"]
    for sub_dir in directories:
        logging.info("Creating audit sub directory {0}".format(sub_dir))
        try:
            os.mkdir(os.path.join(root, sub_dir))
        except OSError:
            logging.warning("\n\tThe sub directory '{0}' already exists. \n\tRe-Running audit folder setup on an existing audit can have unexpected consiquences. \n\tExiting setup.....".format(sub_dir))
            raise

def check_dir_exists(path):
    """Checks that a directory passed to arg-parse exists."""
    absolute = os.path.abspath(path)
    if os.path.isdir(absolute):
        return absolute
    else:
        raise argparse.ArgumentTypeError("The directory specified does not exist. Please specify an existing directory.")

if __name__ == "__main__":
    main()
