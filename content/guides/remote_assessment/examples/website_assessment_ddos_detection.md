#### Website Assessment

Before unleashing more advanced and powerful tools like OpenVAS, a few quick steps can help better guide your work. As a general note, surfing using a browser with at least [NoScript](https://addons.mozilla.org/en-US/firefox/addon/noscript/) enabled may help not only protect you, but may also help to reveal malware or adware infecting the websites.

##### Baseline Data

Record core details about the website - determine the hosting provider, platform, Content Management Systems, and other baseline data.  [BuiltWith](http://builtwith.com/) is a great tool.  There are a few alternatives, including an open source tool, [SiteLab](https://callmeed.github.io/site-lab/). 

These tools may also reveal plugins, javascript libraries, and DDoS protection systems like CloudFlare.

Note that BuiltWith is a tool bundled in recon-ng, but the output it provides is not currently stored in its data structures.

Especially for CMS systems, out of date components can mean well-known and easy to exploit by malicious actors.

##### DDoS protection

An increasingly good practice is for organizations to take advantage of the "free" tiers of DDoS mitigation services, of which [CloudFlare](https://www.cloudflare.com/) is probably the best known. A challenge of these free services can be that they have definite limits to their protection. With CloudFlare, organizations can request to be a part of their [Project Galileo](https://www.cloudflare.com/galileo) program to support at-risk sites even beyond their normal scope of support.

A community-based, open source alternative is [Deflect](https://deflect.ca/), which is completely free for eligible sites.

Some of these services will be revealed by BuiltWith, but checking the HTTP Response Headers (in Chromium/Chrome, available under the Inspect Element tool, or by using [Firebug](https://addons.mozilla.org/en-US/firefox/addon/firebug/) in Firefox. See [Deflect's wiki](https://wiki.deflect.ca/wiki/About_Deflect#Is_it_working.3F) for more information.


#### Resources

Guide for NGOs about DDoS: [My Website is Down](https://github.com/OpenInternet/MyWebsiteIsDown/blob/master/MyWebsiteIsDown.md)

See also: content/guides/vulnerability_analysis/examples/web
