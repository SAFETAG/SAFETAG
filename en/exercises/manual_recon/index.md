---
Approach:
- Research, Technical
Authors:
- SAFETAG
Org_size_under:
- 100
Remote_options:
- Complete
Skills_required:
- OSINT Research
Time_required_minutes:
- 240
---

#### Manual Reconnaissance

##### Summary
This exercise suggests some targeted online search tools and tricks to gather information leakages from organizations.  While many advocacy, activism, and media/journalism focused organizations are very public as part of their operations, the searches suggested here aim to explore data that could be used to better attack or socially engineer an organization.

##### Overview

* Use advanced search tools of major search engines to discover partners, projects, and other valuable information about the organization.
* Social Media / Account Discovery
* Search pastebin and github style sites for breach and website/software development records
* Use reverse image searching and exif tools on photos of interest
* Use to add additional data in to, and to research further discoveries from, the automated recon work

##### Materials Needed

##### Considerations

* Use VPNs or Tor to conduct your searching. Tor may be blocked by some services.
* Some searches may reveal personal information. Be empathetic and responsible with this, even though it is "public" information.

##### Walkthrough

These custom and more manual approaches work excellently in combination with automated tools such as recon-ng or the commercial Maltego.  Working with both these tricks and the automated tools, feeding information learned from one back to the other, is a powerful way to unearth large amounts of information about an organization.

Much of the tools and further guidance is well covered in the references for the Reconnaissance method, a small selection of starting points is mapped out below.

Take care, however, to not waste time on this; using image information tools on every photo on an organization's website, or researching every linked social media account may not provide further valuable information - step back and judge the value of digging deeper - are you finding adversaries?  Are you finding information that the organization may not want online? Are there other methods which might be more appropriate to apply?

##### Search Engines

Google dorking tricks:

* limit to the target website using site: and look for potentially accidentally uploaded file types (e.g. xlsx, you can reference this [full list of searchable filetypes](https://support.google.com/webmasters/answer/35287?hl=en))
* inurl:
* search for link: to discover partners and projects (add "project of" and similar), removing known, un-interesting and irrelevant sites with -site:
* Browse [Exploit-db](https://www.exploit-db.com/google-hacking-database/) for interesting and advanced combinations to consider, e.g. inurl:/wp-en/wpbackitup_backups

##### Social Media / Account Discovery

* Use tools such as [KnowEm](http://knowem.com/checksocialnames.php), [namechk](https://namechk.com/), or [namechecklist](http://www.namechecklist.com/) to find similar or organizationally-linked usernames across other social media accounts.

##### Additional Tools

* GlassDoor can provide insight (mostly for larger organizations) on whether there might be disgruntled former (or current) employees.

##### Pastebin Searching

* Search pastebin for keywords about the organization (usually their website address) -- this [custom google search](https://cse.google.com/cse/home?cx=001580308195336108602:mhdmrvbspnm) by [IntelTechniques](http://inteltechniques.com/OSINT/pastebins.html) searches across over 100 pastebin-like sites, including github, at once.

##### Working with Images

* Use tools like [tineye](https://tineye.com/) and [Google Reverse Image search](https://support.google.com/websearch/answer/1325808?hl=en) to find images (especially user icons from twitter, etc.) on other sites, and test interesting ones for additional image in the EXIF data using online tools like [Exif Viewer](http://regex.info/exif.cgi) or commandline tools like ``exiftool``.

##### Recommendation

Part of modern life is having a presence on-line.  For many organizations, their online work is key to their success.  It is overall important to understand how disparate pieces of data can be combined by a dedicated adversary to build a deep understanding of the organization and its employees, which is useful in "social engineering" attacks such as  "spear-phishing" -- sending professional, seemingly relevant emails with malicious attachments.

Monitoring sites (like pastebin with tools like [pasteLert](http://www.andrewmohawk.com/pasteLert/)) for information about your organization can help detect breaches, especially by cyber-criminals. However, it is generally more valuable to expend limited resources on constant updates of the web server, CMS system (e.g. Joomla), and plugins.

Running images through tools to remove "EXIF" data is useful, particularly when the images come from devices (such as smartphones) with GPS built-in.

Consider the risk of doxing, which affects particularly organizations with a focus on topics that carry a social stigma - OSINT-based attacks can affect for example single members of women's and LGBTQ rights organizations. In these cases the research described in this exercise should also be carried out on the most visible persons of the organization. This activity can be combined with the Self-Doxing exercise to identify and mitigate vulnerabilities without intruding into team members' privacy.
