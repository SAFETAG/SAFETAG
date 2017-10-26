
Before unleashing more advanced and powerful tools like OpenVAS, a few quick steps can help better guide your work. As a general note, surfing using a browser with at least [NoScript](https://addons.mozilla.org/en-US/firefox/addon/noscript/) enabled may help not only protect you, but may also help to reveal malware or adware infecting the websites. 

Record core details about the website - determine the hosting provider, platform, Content Management Systems, and other baseline data.  [BuiltWith](http://builtwith.com/) is a great tool.  There are a few alternatives, including an open source tool, [SiteLab](https://callmeed.github.io/site-lab/).  *Note that BuiltWith is a tool bundled in recon-ng, but the output it provides is not currently stored in its data structures.* These tools may also reveal plugins, javascript libraries, and DDoS protection systems like CloudFlare.

Especially for CMS systems, out of date components can mean well-known and easy to exploit by malicious actors. The publicly-accessible CHANGELOG file at http://www.sampleorg.org/CHANGELOG.txt reveals an out of date, and security-compromised (https://drupal.org/SA-CORE-2012-004), version of Drupal. Upgrade immediately.

```
Drupal 6.27, 2012-12-19
----------------------
- Fixed security issues (multiple vulnerabilities), see SA-CORE-2012-004.
Drupal 6.26, 2012-05-02
----------------------
- Fixed a small number of bugs.
- Made code documentation improvements.
```

For Drupal, try visiting /CHANGELOG.txt , which, if not manually removed, will reveal the most recent version of Drupal installed on the server. Other telltale signs depend on the specific Drupal release; http://corporate.adulmec.ro/blog/2010/drupal-detection-test-site-running-drupal maintains a detection tool.

For Joomla, default templates provide strong hints towards versions based on copyright dates. Specific versions can often be discovered using this guide: https://www.gavick.com/magazine/how-to-check-the-version-of-joomla.html

Wordpress sites tend to advertise their version number in the header of each webpage, such as

```
<meta name="generator" content="WordPress 3.3.1" />
```

There is a web-based tool with browser add-ons available here: http://www.whitefirdesign.com/tools/wordpress-version-check.html

For other CMS systems, try BuiltWith (http://builtwith.com)
