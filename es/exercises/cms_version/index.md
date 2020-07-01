
####Check for common website vulnerabilities

##### Summary

Content management systems require ongoing maintenance and updates to stay secure. Quite often these (or specific plugins) fall out of date and become increasingly vulnerable to automated as well as targeted attacks. 

##### Overview

* Determine the version of any content management system used by the organization
* Search for potential security vulnerabilities for that version.

##### Materials Needed 

##### Considerations

##### Walkthrough
The publicly-accessible CHANGELOG file at http://www.sampleorg.org/CHANGELOG.txt reveals an out of date, and security-compromised (https://drupal.org/SA-CORE-2012-004), version of Drupal. Upgrade immediately.

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

##### Recommendation

Most popular CMS platforms provide emailed alerts and semi-automated ways to update their software. Make sure someone responsible for the website is either receiving these emails or checking regularly for available updates. Security updates should be applied immediately. It is a best practice however to have a “test” site where you can first deploy any CMS update before attempting it on a production site.

For custom CMS systems, it is strongly advisable to migrate to a more standard, open source system.
