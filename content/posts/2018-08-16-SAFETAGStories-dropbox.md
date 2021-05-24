---
layout: post
title:  "SAFETAG Stories: If you fail -- TRI, TRI Again"
date:   2018-08-16 12:49:55
tags: SAFETAG, dropbox, TRI, metadata
author: Jon
---
*This is the first in a series of blog posts sharing some stories gleaned from audits over the years (often combined from multiple experiences and with all identifying information removed).  The goal is to share experiences and approaches to help new auditors get into the mindset of SAFETAG*

One of the most common questions we get about the SAFETAG framework is whether one has to do everything in it for it to “count” as an assessment based on SAFETAG.  The answer is **absolutely not**.

In describing SAFETAG, I often poke fun at the inevitable result of traditional "penetration tests" against an organization.  These tests try every handle, press every button, and push on every closed door of an organization's digital (and often physical) security to map out every possible vulnerability, resulting in incredibly detailed and overwhelming reports. For many organizations, this report may not even include a clear way to prioritize how to tackle it beyond a gazillion "high" priority issues and countless "medium" and below things to also ponder.

*The secret follow-up punchline however, is that SAFETAG itself is, well, an overwhelming, detailed, 300+ page behemoth itself, and will continue to grow.*


### Choose your own SAFETAG Adventure: Try out the "TRI" model

We are working to make working with SAFETAG feel as flexible as it was built to be. It has always been a modular, "choose-your-own-adventure" style approach to working closely with organizations to assess the risks they face, and the best path for addressing their top priorities. One important way we are doing this is by adding metadata into each activity to help auditors build a comprehensive audit plan (follow the [metadata branch at https://github.com/SAFETAG/SAFETAG/tree/metadata](https://github.com/SAFETAG/SAFETAG/tree/metadata)  and the [issue at https://github.com/SAFETAG/SAFETAG/issues/334](https://github.com/SAFETAG/SAFETAG/issues/334])!  Initially, we are focusing on the time each activity takes, specific skills it requires, and what “type” of activity it is.

In SAFETAG, the various activities we suggest to learn about an organization tend to fall in three broad approaches: **Technical**, **Research**, and **Interpersonal**. It is tempting to focus on the style of approach you as the auditor are most comfortable with - people with backgrounds in digital security training tend towards the interpersonal, people with pentesting backgrounds the technical. However, by using a combination of these, you get a clearer understanding of not only the organization’s setup and infrastructure, but how decisions are made, how policies are enforced (or not), and where there are opportunities for organizational change.

### The Dropbox Effect

An illustrative story from my own auditing experience is what I call the “dropbox effect”. This story, with small changes, has come out of … many audits I’ve been a part of. It starts during the initial scoping and interviewing stage (*Interpersonal*!), where management and/or any technical staff will say something to the effect that the organization has made a decision to not use dropbox (or google drive, etc.), so no one is using it.  Digging through provided policy documents (*Research*!), there may even be a section on correct storage and backup / filesharing for the organization which specifically bans dropbox.  Once you start scanning networks (*Technical*!) and talking 1:1 with end users (*Interpersonal* again!) as you sit with them and look at their desktop systems (*Technical* again!) -- a different picture emerges.  Dropbox is *everywhere*.

So, research and initial interpersonal approaches lead you to expect that staff members are not using dropbox.  Additional activities (in this case, mostly technical) reveal the exact opposite.  The combination of this work will reveal the why.  Perhaps the communications lead needs to regularly send very large files to a print shop, and dropbox works where email doesn’t and SBs are unsafe. Perhaps people are using it to sync family or pet photos from their home account to have as a screensaver. Perhaps some people simply never uninstalled it after the policy change, but aren’t actively using it.  Any or all of these can provide a hint towards what a recommendation to resolve this difference between the organization’s policies and its actual practices.  Based on the specific risks and priorities of the organization, it may be relaxing the “dropbox ban” and improving information controls and entry/exit policies instead, or actually enforcing it but finding workable, policy-compliant solutions for these specific cases.

**Does the TRI concept make sense? Sound even more confusing? Let us know on the issue queue or at info@safetag.org**
