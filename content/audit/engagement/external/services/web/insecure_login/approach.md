Users and website editors log in to the site at http://www.sampleorg.org/user/login. There is no SSL security on this page, nor does there appear to be the option to use SSL.
Description

By default, all web traffic is unencrypted. For non-controversial website content, this is not a problem. However, as many websites have moved from uploading files on the backend to a front-end content management system, as well as becoming more complex with user accounts and interaction, this lack of security becomes problematic.

When an admin (or any user) logs in, their password is sent in the clear. This means anyone on the same network (at a coffee shop or workplace) as well as anyone in control of the network (coffee shop owner, workplace network admin, ISP, or government) can trivially intercept the password (often simply by searching the network traffic stream for “password”). This allows an adversary to have admin access to a website, post fake content, install malware, or attempt to discover other accounts where that same password may be used.

First, determine the login page, if there is not a “user login” link visible. Most CMS systems have a standard login path (for Drupal, it’s /user/login, for example). Then, attempt to access this page through an SSL connection.
