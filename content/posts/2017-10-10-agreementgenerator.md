---
layout: post
title:  "SAFETAG Agreement Generator"
date:   2017-10-10 16:49:55
tags: SAFETAG, Agreement Generator
author: Jon
---

Seamus Tuohy of [Prudent Innovation](http://prudentinnovation.org/) has completed an in-depth decision tree program for auditors/assessors to answer questions and builds a detailed, plain language agreement for you to use in your engagements. It's built in Python on Debian/Ubuntu, and available [in the SAFETAG community github](https://github.com/safetag/safetag_agreement_generator).

It allows auditors to provide custom fee schedules and has specific call-outs for parts of the agreement which are the most critical to have local legal advice on. Given that SAFETAG auditors operate in legal jurisdictions all over the world and in a variety of languages, the template text will focused on clarity and conciseness instead of legalese. By clearly articulating the scope and intent of the each component lawyers in different regions will be able to evaluate and update the language to support their legal code. The repository comes with an example plain language template. It includes a "base" outline template and a fine-grained template file that extends this base. By editing the base template a assessor can add/remove large sections of the agreement without searching through the fine-grained template for the text they wish to remove, which also customizes the interactive agreement process, enabling auditors to quickly re-generate new agreements with small modifications.

The project’s [README file](https://github.com/SAFETAG/safetag_agreement_generator/blob/master/README.md) includes both an installation guide as well as usage and advance customization documentation.

![Agreement Generator Screenshot](https://github.com/seamustuohy/safetag_agreement_generator/raw/decision_tree/images/screenshot.png?raw=true "Agreement Generator Screenshot")

Please test it out and send in feedback via the issue queue, as this will be replacing the existing "draft engagement agreement" currently in SAFETAG.
