---
Approach:
- Technical, Research
Authors:
- SAFETAG
Org_size_under:
- 1000
Remote_options:
- Complete
Skills_required:
- Website scanning
Time_required_minutes:
- 60
---

#### Website Footprinting

##### Summary

Using online tools as a starting point in assessing the auditee web application is a good way to expand online reconnaisance as well as start your vulnerability assessment. You can build a profile and a good understanding of the web application by identifying what comprises the web application and technologies behind. From there you can start your next move by putting together different strategies on conducting your vulnerability assessment.

For example, after discovering accessable web directories, you can then start looking for forgotten or abandoned files and applications that might contain sensitive information like (Passwords) or an outdated and vulnerable applications.  Content management systems, while powerful, require ongoing maintenance and updates to stay secure. Quite often these (or specific plugins) fall out of date and become increasingly vulnerable to automated as well as targeted attacks.

Online tools offer ways of performing "passive" scans, in which your identity is hidden from the target organization, in cases where there are IDS/IPS, firewalls deployed. These should be used in conjuction with other outputs from reconnaisance to determine platforms and hosts which are out of scope.

##### Overview

* Determine the version of any content management system used by the organization
* Search for potential security vulnerabilities for that version.

##### Materials Needed

##### Considerations

##### Walkthrough

Before unleashing more advanced and powerful tools like OpenVAS, a few quick steps can help better guide your work. As a general note, surfing using a browser with at least [NoScript](https://addons.mozilla.org/en-US/firefox/addon/noscript/) enabled may help not only protect you, but may also help to reveal malware or adware infecting the websites.

Record core details about the website - determine the hosting provider, platform, Content Management Systems, and other baseline data.  [BuiltWith](http://builtwith.com/) is a great tool.  There are a few alternatives, including an open source tool, [SiteLab](https://callmeed.github.io/site-lab/).  *Note that BuiltWith is a tool bundled in recon-ng, but the output it provides is not currently stored in its data structures.* These tools may also reveal plugins, javascript libraries, and DDoS protection systems like CloudFlare.

**Tools**

- [BuiltWith](https://builtwith.com)
- [Online Pentesting Tools](https://pentest-tools.com/)
- [Hacker Target](https://hackertarget.com/)

___

###### CMS Version Detection

Identification of CMS during web footprint can be done either using scripts and tools or using online services.

you can use certain websites to determine the type of CMS a target website is using:

  - https://builtwith.com
  - https://sitecheck.sucuri.net
  - http://guess.scritch.org

For CMS systems, out of date components can mean well-known and easy to exploit by malicious actors.

**Drupal**
For Drupal, try visiting /CHANGELOG.txt , which, if not manually removed, will reveal the most recent version of Drupal installed on the server. Other telltale signs depend on the specific Drupal release; http://corporate.adulmec.ro/blog/2010/drupal-detection-test-site-running-drupal maintains a detection tool.

```
Drupal 6.27, 2012-12-19
----------------------
- Fixed security issues (multiple vulnerabilities), see SA-CORE-2012-004.
Drupal 6.26, 2012-05-02
----------------------
- Fixed a small number of bugs.
- Made code documentation improvements.
```

**Joomla**
For Joomla, default templates provide strong hints towards versions based on copyright dates. Specific versions can often be discovered using this guide: https://www.gavick.com/magazine/how-to-check-the-version-of-joomla.html

**WordPress**
Wordpress sites tend to advertise their version number in the header of each webpage, such as

```
<meta name="generator" content="WordPress 3.3.1" />
```

There is a web-based tool with browser add-ons available here: http://www.whitefirdesign.com/tools/wordpress-version-check.html

Document your finding and list what type of CMS your target is using along with it's version. You can use this information in the next possible activities:

  - Vulnerability Scanning
  - Vulnerability Research

___

##### Recommendation

Most popular CMS platforms provide emailed alerts and semi-automated ways to update their software. Make sure someone responsible for the website is either receiving these emails or checking regularly for available updates. Security updates should be applied immediately. It is a best practice however to have a “test” site where you can first deploy any CMS update before attempting it on a production site.

For websites using a content management system (Drupal, Wordpress, Joomla or similar), it is important to use a popular and open source tool (as opposed to a custom tool that a web design firm has put together for its customer base). Open source tools are more likely to have their security holes discovered and fixed at a rapid pace, but the burden remains on the organization to keep up to date with these security updates.

The top CMS tools have dashboards and other tools to help alert the webmaster to available updates, and security updates should be heeded quickly. For sites that hold password data, it is worth exploring additional security features – the built-in password security for even modern CMS systems is weak, but the methods to improve upon them vary widely depending on the system.

For sites built on custom CMS software which does not regularly receive updates, it is strongly advisable to migrate to a more standard, open source system.

Note that “Static” websites – those created with a web design tool and uploaded to a server – are both more secure (no code to break) and also withstand denial of service attacks easier. However, these are more difficult to maintain and update, and work best only for “brochure” style sites.

For custom CMS systems, it is strongly advisable to migrate to a more standard, open source system.

An increasingly good practice is for organizations to take advantage of the "free" tiers of DDoS mitigation services, of which [CloudFlare](https://www.cloudflare.com/) is probably the best known. A challenge of these free services can be that they have definite limits to their protection. With CloudFlare, organizations can request to be a part of their [Project Galileo](https://www.cloudflare.com/galileo) program to support at-risk sites even beyond their normal scope of support.

A community-based, open source alternative is [Deflect](https://deflect.ca/), which is completely free for eligible sites.

Some of these services will be revealed by BuiltWith, but checking the HTTP Response Headers (in Chromium/Chrome, available under the Inspect Element tool, or by using [Firebug](https://addons.mozilla.org/en-US/firefox/addon/firebug/) in Firefox. See [Deflect's wiki](https://wiki.deflect.ca/wiki/About_Deflect#Is_it_working.3F) for more information.

Guide for NGOs to diagnose issues with a website: [Digital First Aid Kit](https://digitalfirstaid.org/en/topics/website-not-working/)
