
Most popular CMS platforms provide emailed alerts and semi-automated ways to update their software. Make sure someone responsible for the website is either receiving these emails or checking regularly for available updates. Security updates should be applied immediately. It is a best practice however to have a “test” site where you can first deploy any CMS update before attempting it on a production site.

For custom CMS systems, it is strongly advisable to migrate to a more standard, open source system.

An increasingly good practice is for organizations to take advantage of the "free" tiers of DDoS mitigation services, of which [CloudFlare](https://www.cloudflare.com/) is probably the best known. A challenge of these free services can be that they have definite limits to their protection. With CloudFlare, organizations can request to be a part of their [Project Galileo](https://www.cloudflare.com/galileo) program to support at-risk sites even beyond their normal scope of support.

A community-based, open source alternative is [Deflect](https://deflect.ca/), which is completely free for eligible sites.

Some of these services will be revealed by BuiltWith, but checking the HTTP Response Headers (in Chromium/Chrome, available under the Inspect Element tool, or by using [Firebug](https://addons.mozilla.org/en-US/firefox/addon/firebug/) in Firefox. See [Deflect's wiki](https://wiki.deflect.ca/wiki/About_Deflect#Is_it_working.3F) for more information.

Guide for NGOs about DDoS: [Digital First Aid Kit](https://rarenet.github.io/DFAK/en/DDoSMitigation/)
