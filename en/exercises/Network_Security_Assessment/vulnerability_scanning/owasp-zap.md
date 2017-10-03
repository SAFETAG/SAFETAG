**DEPRECATED**

Wapiti runs inside OpenVAS and appears to provide better overall reporting than OWASP ZAP.

## Summary ##
This component allows an auditor to quickly identify common web vulnerabilities using the OWASP framework - either by a relatively intense spidering of the website or through a more tailored use of the proxy functionality of the tool.

## Description ##

OWASP ZAP provides a highly configurable tool to test for common website vulnerabilities. In addition to supporting organizational change to support general best practices for websites, OWASP can expose more specific vulnerabilties that may warrant action above and beyond general best practice work.

## Approach ##
 * Agree on the site(s) to scan and determine the intensity of the process
 * Ensure documented permission and schedule an appropriate time with the site host.
 * Run automated or proxied investigation of the site(s)
 * Examine revealed information and issues, determining any that are critical.

## Instructions ##


OWASP ZAP is a quick but powerful tool to expose common problems, but there are many tools of use 

Other https://www.owasp.org/index.php/Category:Vulnerability_Scanning_Tools

For a website that can be expected to withstand a dedicated spidering of its content, the automated mode will dig through and expose common vulnerabilities. The tool itself is relatively easy to use. 

For more delicate sites, private sites, or other situations, OWASP can also proxy your web browser and test the pages you click through.

This provides a useful walk-through of the OWASP scan:
http://resources.infosecinstitute.com/which-weapon-should-i-choose-for-web-penetration-testing-3-0/

This provides a walkthrough which uses OWASP against the Metasploitable VM (which has built-in vulnerbilities):  http://cyberarms.wordpress.com/2014/06/05/quick-and-easy-website-vulnerability-scans-with-owasp-zap/ .  You can also try https://www.owasp.org/index.php/Webgoat
http://sourceforge.net/projects/samurai/

## Recommendations ##
Core recommendations are to always use well-supported, open source tools, and to minimize the use of interactive sites if not actually necessary. Removal of unused tools, demos, and default systems is highly encouraged.

For interactive sites, content management systems and other frameworks, make sure the site is actively maintained, updated to the latest software and security patches regularly, and that the user permissions are reviewed periodically.

OWASP-ZAP provides results of security problems it finds with differing levels of severity (https://code.google.com/p/zaproxy/wiki/HelpStartConceptsAlerts). Make special note of "High" severity issues and research the recommendations OWASP provides.

## Resources ##
 * Wiki and QuickStart Guide https://code.google.com/p/zaproxy/wiki/HelpStartStart
 * Overall walkthrough: http://resources.infosecinstitute.com/which-weapon-should-i-choose-for-web-penetration-testing-3-0/
 * Testing with Metasploitable VM: http://cyberarms.wordpress.com/2014/06/05/quick-and-easy-website-vulnerability-scans-with-owasp-zap/
 * Walkthrough of automated mode https://blog.codecentric.de/en/2013/10/automated-security-testing-web-applications-using-owasp-zed-attack-proxy/
 * Walkthrough of proxy usage https://blog.42.nl/articles/securing-web-applications-using-owasp-zap-passive-mode/

