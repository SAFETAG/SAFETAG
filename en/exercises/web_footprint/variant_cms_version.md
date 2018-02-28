Identification of CMS during web footprint can be done either using sripts and tools or using online services.

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









