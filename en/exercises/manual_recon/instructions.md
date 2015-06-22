
These custom and more manual approaches work excellently in combination with automated tools such as recon-ng or the commercial Maltego.  Working with both these tricks and the automated tools, feeding information learned from one back to the other, is a powerful way to unearth large amounts of information about an organization.

Much of the tools and further guidance is well covered in the references for the Reconnaissance method, a small selection of starting points is mapped out below.

Take care, however, to not waste time on this; using image information tools on every photo on an organization's website, or researching every linked social media account may not provide further valuable information - step back and judge the value of digging deeper - are you finding adversaries?  Are you finding information that the organization may not want online? Are there other methods which might be more appropriate to apply?

##### Search Engines

Google dorking tricks:

* limit to the target webiste using site: and look for potentially accidentally uploaded file types (e.g. xlsx, you can reference this [full list of searchable filetypes](https://support.google.com/webmasters/answer/35287?hl=en)) 
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
