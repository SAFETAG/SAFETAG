---
Approach:
- Technical
Authors:
- SAFETAG
Org_size_under:
- 1000
Remote_options:
- Complete
Skills_required:
- OSINT Tools
Time_required_minutes:
- 240
---

#### Automated Reconnaisance


##### Summary
This component allows the auditor to quickly identify publicly available resources (such as websites, extranets, email servers, but also social media information) connected to the organization and remotely gather information about those resources.

While much of SAFETAG focuses on digital security challenges within and around the office, remote attacks on the organization's website, extranets, and unintended information available from "open sources" all pose real threats and deserve significant attention.  SAFETAG takes great care to take a very passive approach to this work, especially when done off-site, so as not to have unintended consequences on the organization's infrastructure or undermine operational security concerns.

This remote work also feeds in to the Auditor's understanding of the organization's digital presence (and their own understanding thereof), and will guide specific vulnerabilities to investigate once on site.


##### Overview
  * Passive Reconnaissance
    * Identify availability of staff, partner, beneficiary, and current project information online. [^PETS_logical_intel]
    * Search "paste-bin" sites for leaked internal information or existing exploitation of their infrastructure.
    * Create API keys for Recon-ng services to be used. [^recon-ng_API_keys]
    * Use recon-ng to do automated web-based open source reconnaissance. [^recon-ng_data_flow]

**Expected Outputs**

  * Dossier of organizational, partner, and beneficiary "open sources" information exposed online.
    * A list of e-mail address for members of the organization.
  * Identification and mapping of externally facing services and unintentionally exposed internal services.
    * Possible vulnerabilities in the websites and externally facing servers of the organization.
    * Existing information about earlier breaches identified in the paste-bin search.
  * Follow the proper incident response plan if high risk problems are identified.



##### Materials Needed

##### Considerations

  * Use VPNs to do automated searching. The automated process can be misconstrued by various services as malicious and cause your local network to get blocked, filtered, or surveilled. Tor is often blocked by the tools you will be using.

##### Walkthrough

Both Recon-ng and Foca are open source reconnaissance tools with many available plugins. Foca is, out-of-the-box, more aimed at extracting metadata from documents and images, whereas Recon is slightly more focused on finding digging into domains, subdomains, contacts, and the more network-level information.  Both tools are best used in addition to critical thinking and manual exploration, and require "seed" inputs to get started and careful curation to remove false leads.

___

###### Variant: Recon-ng

**What is recon-ng?**

recon-ng is an interactive command-line application written in python which is used to carry out reconnaissance using various open source intelligence resources. It offers a library of modules to carry out various searches using existing knowledge such as a website domain, an IP, an email address, a name, or a geographic location. Some modules require usage of a service API which you will need to obtain yourself (some of these are free with usage limitations while others must be paid for). Usage of the modules will populate dynamic database tables with information of interest such as personnel contacts, usernames, emails, technical information like hosts, IPs, and ports, and password hashes or plaintexts.

**Installing recon-ng**

Follow installation instructions from [Recon-ng Getting Started Instructions](https://github.com/lanmaster53/recon-ng/wiki/Getting-Started#installation). Note that recon-ng is already included in Kali Linux and Parrot.

**Using recon-ng**

  Below is a walkthrough on using recon-ng v5, but there is also a good introductory recon-ng V5 video series at [Recon-ng v5 series](https://www.youtube.com/playlist?list=PLBf0hzazHTGOg9taK90uFjdcb8UgGfRKZ)

**Interface Basics**

Run recon-ng from the command line:

```
# recon-ng
```

By pressing the tab key twice you can use auto-completion to see the available options. This is a good way to familiarize yourself with the commands and navigation. On a new installation, pressing tab twice will display:

```
[recon-ng][default] >
back         db           help         keys         modules      pdb          shell        snapshots    workspaces   exit         index        marketplace  options      script       show         spool
```

These are the first level of commands

Autocomplete (pressing tab) works even inside commands:

```
[recon-ng][default] > show
banner           credentials      hosts            locations        options          schema
companies        dashboard        keys             modules          ports            vulnerabilities
contacts         domains          leaks            netblocks        pushpins         workspaces
```


**Adding recon modules**

recon-ng v5 does not come with any modules pre-installed but contains a marketplace from which you can search and install individual modules.

Typing ```marketplace search``` will list all modules in the marketplace. Note that modules have a specific name format which helps the user understand the flow of data inside the tool. Remember that recon-ng organises information into a number of database tables such as domains, hosts, contacts, leaks. Modules use the syntax ```<methodology step>/<input table>-<output table>/<module>```.  The inputs are the first part of each module, and the outputs are the second part. The module name itself is the tool used to process the data.  So, recon/domains-hosts/brute-hosts takes domain names (websitename.org) as an input, and outputs hostnames (extranet.websitename.org, etc.).  If you provide the name of the specific module, recon-ng can figure it out (though tab completion doesn't help) -- for example, ``` marketplace info threatminer``` works just as well as ```marketplace info recon/domains-hosts/threatminer```

Typing ```marketplace search``` will display all modules in the marketplace. You can also search for a specific word or input/output table such as ```marketplace search DNS``` or ```marketplace search hosts```.

If you want to read what a module does before installing it then execute ```marketplace info <modulename>```

The results of the search query look like this:

```
[recon-ng][default] > marketplace search DNS
[*] Searching module index for 'DNS'...

  +--------------------------------------------------------------------------------------+
  |                  Path                 | Version |     Status    |  Updated   | D | K |
  +--------------------------------------------------------------------------------------+
  | discovery/info_disclosure/cache_snoop | 1.0     | not installed | 2019-06-24 |   |   |
  | recon/domains-domains/brute_suffix    | 1.0     | not installed | 2019-06-24 |   |   |
  | recon/domains-hosts/binaryedge        | 1.0     | not installed | 2019-06-24 |   | * |
  | recon/domains-hosts/brute_hosts       | 1.0     | installed     | 2019-06-24 |   |   |
  | recon/domains-hosts/findsubdomains    | 1.0     | not installed | 2019-06-24 |   |   |
  | recon/domains-hosts/threatcrowd       | 1.0     | not installed | 2019-06-24 |   |   |
  | recon/domains-hosts/threatminer       | 1.0     | not installed | 2019-06-24 |   |   |
  +--------------------------------------------------------------------------------------+

  D = Has dependencies. See info for details.
  K = Requires keys. See info for details.

```
As explained in the search results legend, a module with a * in the D column has dependencies which will be listed if you check the module info. Dependencies can be installed outside of recon-ng using ```pip install <dependency_name>```. Modules with a * in the K column require an API key, explained below.

Install a module with ```marketplace install <module_name>``` or install all modules with ```marketplace install all``` though modules with missing dependencies and missing API keys will not work until you address those needs. You can also install a collection of modules by using commands like ```marketplace install recon``` to install all the recon/* modules, or ```marketplace install recon/domains-hosts``` to get all of the domains-hosts modules under recon.

**First steps**

NOTE: This walkthrough is using sample data. Results will vary widely depending on the organization you are working with.

recon-ng lets you set up separate workspaces to organise your reconnaissance work. This will likely be used to separate results and findings for reconnaissance on different organisations. Different workspaces maintain separate results database tables.

  * Create a workspace for your recon.

```
[recon-ng][default] > workspaces add websitename
[recon-ng][websitename] >
```

  * Note that you can also switch workspaces during the recon.

```
[recon-ng][websitename] > workspaces load default
[recon-ng][default] >
[recon-ng][default] > workspaces load websitename
[recon-ng][websitename] >
```

  * Add known seed information (domains, netblocks, company names, locations, etc.)

Start off with information you already know about the organisation you are conducting reconnaissance on.

Display possible seed information by using auto-completion - type the command below followed by tapping tab twice:

```
[recon-ng][websitename] > db insert
companies        credentials      hosts            locations        ports            pushpins         vulnerabilities
contacts         domains          leaks            netblocks        profiles         repositories
```

We will only use the organization's name, one domain, two netblocks (that we got by searching for other domains and ping-ing them), and two e-mails of the company we are looking for so we will add those.

First, add the company name.

```
[recon-ng][websitename] > db insert companies
company (TEXT): Websitename
description (TEXT):
```

Next, add the domain. You can then use the ```show``` command to see the data you have entered or collected in that table.

```
[recon-ng][websitename] > db insert domains
domain (TEXT): websitename.org
notes (TEXT):
[*] 1 rows affected.
[recon-ng][websitename] > show domains

  +------------------------------------------------+
  | rowid |      domain     | notes |    module    |
  +------------------------------------------------+
  | 1     | websitename.org |       | user_defined |
  +------------------------------------------------+

[*] 1 rows returned

```

Next, add any contacts. we don't know much. But, we will add what we know.

```
[recon-ng][websitename] > db insert contacts
first_name (TEXT): Bob
middle_name (TEXT): Pirate
last_name (TEXT): Smith
email (TEXT): bpsmith@websitename.org
title (TEXT): Compliance Manager
region (TEXT):
country (TEXT): USA
phone (TEXT):
notes (TEXT):
[*] 1 rows affected.

[recon-ng][websitename] > db insert contacts
first_name (TEXT): Susan
middle_name (TEXT):
last_name (TEXT): Mirembe
email (TEXT): smirembe@websitename.org
title (TEXT): Chief of Party
region (TEXT):
country (TEXT): USA
phone (TEXT):
notes (TEXT):
[*] 1 rows affected.
```

Finally we will add the ip address of their website.

```
[recon-ng][websitename] > db insert netblocks
netblock (TEXT): 96.127.170.252
notes (TEXT): Public website IP
[*] 1 rows affected.
[recon-ng][websitename] > db insert netblocks
netblock (TEXT): 96.127.170.121
notes (TEXT): Public website IP
[*] 1 rows affected.
```

Here it is in the database.

```
[recon-ng][websitename] > show netblocks

  +-----------------------------------------------------------+
  | rowid |    netblock    |       notes       |    module    |
  +-----------------------------------------------------------+
  | 1     | 96.127.170.252 | Public website IP | user_defined |
  | 2     | 96.127.170.121 | Public website IP | user_defined |
  +-----------------------------------------------------------+

[*] 2 rows returned

```

**Reconnaissance phase (netblocks example)**

  * Run modules that leverage known netblocks. This exposes other domains and hosts from which domains can be harvested.

First, search for any modules that use netblocks as an input.

```
[recon-ng][websitename] > marketplace search netblocks-
[*] Searching module index for 'netblocks-'...

  +--------------------------------------------------------------------------------------+
  |                  Path                 | Version |     Status    |  Updated   | D | K |
  +--------------------------------------------------------------------------------------+
  | recon/netblocks-companies/whois_orgs  | 1.0     | not installed | 2019-06-24 |   |   |
  | recon/netblocks-hosts/reverse_resolve | 1.0     | not installed | 2019-06-24 |   |   |
  | recon/netblocks-hosts/shodan_net      | 1.0     | not installed | 2019-06-24 |   | * |
  | recon/netblocks-hosts/virustotal      | 1.0     | not installed | 2019-06-24 |   | * |
  | recon/netblocks-ports/census_2012     | 1.0     | not installed | 2019-06-24 |   |   |
  | recon/netblocks-ports/censysio        | 1.0     | not installed | 2019-06-24 |   | * |
  +--------------------------------------------------------------------------------------+

```

In the case of ```recon/netblocks-hosts/reverse_resolve``` we can see that the "reverse_resolve" module is a reconnaissance module that takes in netblocks and produces hosts.

Lets install it  with ```marketplace install recon/netblocks-hosts/reverse_resolve``` or just ```marketplace install reverse_resovle```.

Now we can load that module to use it

```
[recon-ng][websitename] > modules load recon/netblocks-hosts/reverse_resolve
[recon-ng][websitename][reverse_resolve] >
```

An empty command line can be daunting. Use the ```info``` command to learn about the module and see what options are available.

```
[recon-ng][websitename][reverse_resolve] > info

      Name: Reverse Resolver
    Author: John Babio (@3vi1john)
   Version: 1.0

Description:
  Conducts a reverse lookup for each of a netblock's IP addresses to resolve the hostname. Updates the
  'hosts' table with the results.

Options:
  Name    Current Value  Required  Description
  ------  -------------  --------  -----------
  SOURCE  default        yes       source of input (see 'info' for details)

Source Options:
  default        SELECT DISTINCT netblock FROM netblocks WHERE netblock IS NOT NULL
  <string>       string representing a single input
  <path>         path to a file containing a list of inputs
  query <sql>    database query returning one column of inputs

```

Notice how the current value of SOURCE is 'default'? Then look at the source options - the default behaviour is to run the module on all netblocks found within the netblock table which we have already begun to populate in the last step. There are other options such as resolving one particular IP by changing the source using ```options set SOURCE 8.8.8.8```, or using an input file or a custom database query. In this walkthrough, we will use the default behaviour which takes the current contents of netblocks as input. Now, use ```run``` to run the module .

```
[recon-ng][websitename][reverse_resolve] > run

--------------
96.127.170.121
--------------
[*] Country: None
[*] Host: vps.websitename.org
[*] Ip_Address: 96.127.170.121
[*] Latitude: None
[*] Longitude: None
[*] Notes: None
[*] Region: None
[*] --------------------------------------------------

--------------
96.127.170.252
--------------
[*] Country: None
[*] Host: vps.websitename.org
[*] Ip_Address: 96.127.170.252
[*] Latitude: None
[*] Longitude: None
[*] Notes: None
[*] Region: None
[*] --------------------------------------------------

-------
SUMMARY
-------
[*] 2 total (2 new) hosts found.

```

Since it promised us hosts, we will see what hosts it uncovered.

```
[recon-ng][websitename][reverse_resolve] > show hosts

  +----------------------------------------------------------------------------------------------------------------+
  | rowid |        host       |   ip_address   | region | country | latitude | longitude | notes |      module     |
  +----------------------------------------------------------------------------------------------------------------+
  | 1     | vps.websitename.org | 96.127.170.121 |        |         |          |           |       | reverse_resolve |
  | 2     | vps.websitename.org | 96.127.170.252 |        |         |          |           |       | reverse_resolve |
  +----------------------------------------------------------------------------------------------------------------+

[*] 2 rows returned

```

Since this module has finished, we will leave it using the ```back``` command.

```
[recon-ng][websitename][shodan_net] > back
[recon-ng][websitename] >
```

* Run modules that conduct DNS brute forcing of TLDs and sub-domains against current domains.

Reconnaissance is all about turning existing information into more information. You may start with something as simple as a company name, like ACME, and you know their website is ACME.com, but did you know that they have a non-profit arm at ACME.org, and that there is a European branch at ACME.eu or that their development team runs an extranet at ACME.net and that vendors login from vendor.acme.net while the development team logs in at dev.acme.net?

Let's find new domains using brute forcing. First we should look for what is available, then install, load, and run the selected module. Follow along the command prompts below. Due to the large number of TLDs this can take a long time - if you get tired of waiting press CTRL + C to interrupt the process - it will still save the results in the database:

```
[recon-ng][websitename] > marketplace search domains-domains
[*] Searching module index for 'domains-domains'...

  +-----------------------------------------------------------------------------------+
  |                Path                | Version |     Status    |  Updated   | D | K |
  +-----------------------------------------------------------------------------------+
  | recon/domains-domains/brute_suffix | 1.0     | not installed | 2019-06-24 |   |   |
  +-----------------------------------------------------------------------------------+
[recon-ng][websitename] > marketplace install recon/domains-domains/brute_suffix
[recon-ng][websitename] > modules load brute_suffix
[recon-ng][websitename][brute_suffix] > run

---------------
WEBSITENAME.ORG
---------------
[*] websitename.0 => No record found.
[*] websitename.01 => No record found.

[*] websitename.baltimore => No record found.
[*] websitename.banking => No record found.
[*] websitename.bayarea => No record found.
[*] websitename.bb => No record found.
[*] websitename.bbdd => No record found.
[*] websitename.bbs => No record found.
[*] websitename.bd => No record found.
[*] websitename.bdc => No record found.
[*] websitename.be => No record found.
[*] websitename.bea => No record found.
[*] websitename.beta => No record found.
[*] websitename.bf => No record found.
[*] websitename.bg => No record found.
[*] websitename.bh => No record found.
[*] websitename.bi => No record found.
[*] websitename.billing => No record found.
[*] websitename.biz => (SOA) websitename.biz
[*] Domain: websitename.biz
[*] Notes: None
[*] --------------------------------------------------
[*] websitename.biztalk => No record found.
[*] websitename.bj => No record found.
[*] websitename.black => No record found.
[*] websitename.blackberry => No record found.
[*] websitename.blog => No record found.
[*] websitename.blogs => No record found.
[*] websitename.blue => No record found.
[*] websitename.bm => No record found.
[*] websitename.bn => No record found.
[*] websitename.bnc => No record found.
[*] websitename.bo => No record found.
[*] websitename.bob => No record found.
[*] websitename.bof => No record found.
^C

-------
SUMMARY
-------
[*] 1 total (1 new) domains found.
[recon-ng][websitename][brute_suffix] > show domains

  +------------------------------------------------+
  | rowid |      domain     | notes |    module    |
  +------------------------------------------------+
  | 1     | websitename.org |       | user_defined |
  | 2     | websitename.biz |       | brute_suffix |
  +------------------------------------------------+

[*] 2 rows returned
[recon-ng][websitename][brute_suffix] >

```

  * Remove out-of-scope domains with the ```db delete domains``` command or generate a query which only selects the scoped domains as input.

  * Run modules that conduct search for additional hosts via search engine or DNS brute forcing of hosts.

Let's start by using a search engine to find additional sub-domains. Go ahead and ```marketplace install bing_domain_web``` and ```modules load bing_domain_web```.


```
[recon-ng][websitename][bing_domain_web] > run
-------------
websitename.ORG
-------------
[*] URL: https://www.bing.com/search?first=0&q=domain%3Awebsitename.org
[*] Country: None
[*] Host: internetinitiatives.websitename.org
[*] Ip_Address: None
[*] Latitude: None
[*] Longitude: None
[*] Notes: None
[*] Region: None
[*] --------------------------------------------------
[*] Country: None
[*] Host: design.websitename.org
[*] Ip_Address: None
[*] Latitude: None
[*] Longitude: None
[*] Notes: None
[*] Region: None
[*] --------------------------------------------------
[*] Sleeping to avoid lockout...
[*] URL: https://www.bing.com/search?first=0&q=domain%3Awebsitename.org+-domain%3Ainternetinitiatives.websitename.org+-domain%3Adesign.websitename.org
[*] Country: None
[*] Host: www.speakupspeakout.websitename.org
[*] Ip_Address: None
[*] Latitude: None
[*] Longitude: None
[*] Notes: None
[*] Region: None
[*] --------------------------------------------------
[*] Sleeping to avoid lockout...
[*] URL: https://www.bing.com/search?first=0&q=domain%3Awebsitename.org+-domain%3Ainternetinitiatives.websitename.org+-domain%3Adesign.websitename.org+-domain%3Awww.speakupspeakout.websitename.org

-------
SUMMARY
-------
[*] 3 total (3 new) hosts found.
```

Now let's try some sub-domain brute force guessing using the brute_hosts module. You should know how to install and load it by now. This also returned a lot of results so they are truncated below

```
[recon-ng][websitename][brute_hosts] > run

-------------
websitename.ORG
-------------
[*] No Wildcard DNS entry found.
...
[*] cn.websitename.org => No record found.
[*] code.websitename.org => No record found.
[*] chatserver.websitename.org => No record found.
[*] cocoa.websitename.org => No record found.
[*] coldfusion.websitename.org => No record found.
[*] colombus.websitename.org => No record found.
[*] columbus.websitename.org => No record found.
[*] colorado.websitename.org => No record found.
[*] com.websitename.org => No record found.
[*] commerce.websitename.org => No record found.
[*] commerceserver.websitename.org => No record found.
[*] community.websitename.org => No record found.
[*] compaq.websitename.org => No record found.
[*] communigate.websitename.org => No record found.
[*] compras.websitename.org => No record found.
[*] conference.websitename.org => (A) 12.172.123.133
[*] Country: None
[*] Host: conference.websitename.org
[*] Ip_Address: 12.172.123.133
[*] Latitude: None
[*] Longitude: None
[*] Notes: None
[*] Region: None
[*] --------------------------------------------------
[*] con.websitename.org => No record found.
[*] concentrator.websitename.org => No record found.
[*] conf.websitename.org => No record found.
[*] confidential.websitename.org => No record found.
[*] conferencing.websitename.org => No record found.
[*] connect.websitename.org => No record found.
[*] consola.websitename.org => No record found.
[*] connecticut.websitename.org => No record found.
...
-------
SUMMARY
-------
[*] 39 total (35 new) hosts found.

```
Ok that was pretty successful, let's take a look at our bounty:

```
[recon-ng][websitename] > show hosts

  +---------------------------------------------------------------------------------------------------------------------------------+
  | rowid |                host               |    ip_address   | region | country | latitude | longitude | notes |      module     |
  +---------------------------------------------------------------------------------------------------------------------------------+
  | 2     | vps.websitename.org                 | 96.127.170.121  |        |         |          |           |       | reverse_resolve |
  | 3     | vps.websitename.org                 | 96.127.170.252  |        |         |          |           |       | reverse_resolve |
  | 4     | internetinitiatives.websitename.org |                 |        |         |          |           |       | bing_domain_web |
  | 5     | design.websitename.org              |                 |        |         |          |           |       | bing_domain_web |
  | 6     | www.speakupspeakout.websitename.org |                 |        |         |          |           |       | bing_domain_web |
  | 7     | autodiscover.outlook.com          |                 |        |         |          |           |       | brute_hosts     |
  | 8     | autodiscover.websitename.org        |                 |        |         |          |           |       | brute_hosts     |
  | 9     | autod.ha-autod.office.com         |                 |        |         |          |           |       | brute_hosts     |
  | 10    | autod.ms-acdc-autod.office.com    |                 |        |         |          |           |       | brute_hosts     |
  | 11    | autodiscover.websitename.org        | 40.101.19.152   |        |         |          |           |       | brute_hosts     |
  | 12    | autodiscover.websitename.org        | 40.101.121.8    |        |         |          |           |       | brute_hosts     |
  | 13    | autodiscover.websitename.org        | 40.101.80.200   |        |         |          |           |       | brute_hosts     |
  | 14    | autodiscover.websitename.org        | 52.97.144.184   |        |         |          |           |       | brute_hosts     |
  | 15    | bw.websitename.org                  | 70.33.180.230   |        |         |          |           |       | brute_hosts     |
  | 16    | conference.websitename.org          | 12.172.123.133  |        |         |          |           |       | brute_hosts     |
  | 17    | websitename.github.com              |                 |        |         |          |           |       | brute_hosts     |
  | 18    | data.websitename.org                |                 |        |         |          |           |       | brute_hosts     |
  | 19    | github.github.io                  |                 |        |         |          |           |       | brute_hosts     |
  | 20    | data.websitename.org                | 185.199.110.153 |        |         |          |           |       | brute_hosts     |
  | 21    | data.websitename.org                | 185.199.111.153 |        |         |          |           |       | brute_hosts     |
  | 22    | data.websitename.org                | 185.199.109.153 |        |         |          |           |       | brute_hosts     |
  | 23    | data.websitename.org                | 185.199.108.153 |        |         |          |           |       | brute_hosts     |
  | 24    | design.websitename.org              | 108.178.27.2    |        |         |          |           |       | brute_hosts     |
  | 25    | email.websitename.org               | 65.111.246.35   |        |         |          |           |       | brute_hosts     |
  | 26    | erp.websitename.org                 | 70.33.180.228   |        |         |          |           |       | brute_hosts     |
  | 27    | localhost.websitename.org           | 127.0.0.1       |        |         |          |           |       | brute_hosts     |
  | 28    | mail.websitename.org                | 65.111.246.35   |        |         |          |           |       | brute_hosts     |
  | 29    | ns1.websitename.org                 | 71.128.36.8     |        |         |          |           |       | brute_hosts     |
  | 30    | secure.websitename.org              | 198.143.166.46  |        |         |          |           |       | brute_hosts     |
  | 31    | sharepoint.websitename.org          | 70.33.180.236   |        |         |          |           |       | brute_hosts     |
  | 32    | temp.websitename.org                | 184.154.33.5    |        |         |          |           |       | brute_hosts     |
  | 33    | websitename.org                     |                 |        |         |          |           |       | brute_hosts     |
  | 34    | test.websitename.org                |                 |        |         |          |           |       | brute_hosts     |
  | 35    | test.websitename.org                | 192.124.249.154 |        |         |          |           |       | brute_hosts     |
  | 36    | webmail.websitename-mail.org        |                 |        |         |          |           |       | brute_hosts     |
  | 37    | webmail.websitename.org             |                 |        |         |          |           |       | brute_hosts     |
  | 38    | webmail.websitename.org             | 70.33.180.234   |        |         |          |           |       | brute_hosts     |
  | 39    | webmail.websitename.org             | 70.33.180.233   |        |         |          |           |       | brute_hosts     |
  | 40    | www.websitename.org                 |                 |        |         |          |           |       | brute_hosts     |
  | 41    | www.websitename.org                 | 192.124.249.154 |        |         |          |           |       | brute_hosts     |
  +---------------------------------------------------------------------------------------------------------------------------------+

[*] 40 rows returned

```

**Next Steps**

Below are some suggestions for further steps in the reconnaissance phase:

  * Resolve IP addresses.
  * Run port scan data harvesting modules (try recon/hosts-ports/binaryedge using the BinaryEdge API).
  * Run vulnerability harvesting modules.
  * Run contact harvesting modules.
  * Mangle contacts into email addresses.
  * Run modules that convert email addresses into full contacts.
  * Run credential harvesting modules.

Many useful modules require the usage of a 3rd party service's API key.

As you can see recon-ng is very powerful when used efficiently with and understanding of the actions made available by the different modules. By spending time reading through the module descriptions (```marketplace info <modulename>```), utilising the tool, and understanding various API services, you can master the usage of this tool for your reconnaissance work.

**Reporting**

  * Export data for analysis or presentation:

```
[recon-ng][websitename] > marketplace install reporting/csv
[recon-ng][websitename] > modules load reporting/csv
[recon-ng][websitename][csv] >
[recon-ng][websitename][csv] > set TABLE Domains
TABLE => Domains
[recon-ng][websitename][csv] > set FILENAME /home/computer/.recon-ng/workspaces/websitename/Domains.csv
FILENAME => /home/computer/.recon-ng/workspaces/websitename/Domains.csv
[recon-ng][websitename][csv] > run
[*] 5 records added to '/home/computer/.recon-ng/workspaces/websitename/Domains.csv'.
```

**Creating API Keys**

To use modules requiring an API key you will need to sign up for an API key from the specified service. These keys may offer free or paid plans, and functionality may be limited on free plans.

To add a key after you have obtained one (see below), get the recon-ng name for the key by typing ```keys list``` which will tell you the name of keys needed for the modules you have already installed. With your new API key in hand, add them with ```keys add <apiname> <apikey>```, for instance ```keys add bing_api a7b92c729e829f8a7cba4bc```.

  * Bing API Key (bing_api) -
      * Sign up for the free subscription to the Bing Search API here: https://azure.microsoft.com/en-us/try/cognitive-services/?api=search-api-v7
      * Use the free Azure account option
      * The API key will be available under the "Account Keys" page.

  * BuiltWith API Key (builtwith_api) -
      * Sign up for a free account here: https://api.builtwith.com/
      * Sign in to the application at the same link.

  * Google API Key (google_api) -
      * Create an API Project here: https://console.developers.google.com/project/
      * The API key will be available in the project management console
          * Click on the "APIs & auth" Menu
          * Click on the "Credentials" sub-menu
          * Click the "Create new Key" button under "Public API Access"
          * Click "Server Key"
          * Type your current ip-address into the text box.
          * Make sure you delete it after use.

  * IPInfoDB API Key (ipinfodb_api) -
    * REQUIRES A PERMANENT IP ADDRESS LIKE A SERVER FROM WHICH API REQUESTS WILL BE MADE
    * REQUIRES A CUSTOM DOMAIN EMAIL (it rejects "free" accounts like gmail)
    * Create a free account here: http://www.ipinfodb.com/register.php
    * Log in to the application here.
    * The API key will be available on the "Account" tab.

  * Shodan API Key (shodan_api) -
      * Create an account or sign in to Shodan using one of the many options available here: https://www.shodan.io/
      * On the top right side of the screen click "My Account" to obtain an API key
      * An upgraded account is required to access most search features. The current cost of this is $50 for lifetime access. Upgrade your account by signing in at https://www.shodan.io and clicking "Upgrade" in the top-right corner.

  * Twitter App API key (twitter_api) and  (twitter_secret) -
      * Create an application here: https://apps.twitter.com/
      * The Consumer key will be available on the application management page.
      * The Consumer secret  (twitter_secret) will be available on the application management page for the application created above.

  * VirusTotal API Key (virustotal_api)
    * Create a free account by clicking the "Sign up to the VirusTotal community" button here: https://www.virustotal.com/en/documentation/private-api/#
    * Log in to the application and select "My API key" from the user menu.
    * The API key will be visible towards the top of the page.

  * HaveIBeenPwned (hibp_api)
    * Used to check if email addresses, domains, and passwords have been found in past data breaches
    * Sign up at https://haveibeenpwned.com/API/Key. There is currently a $3.50/monthly charge for API access.

  * BinaryEdge (binaryedge_api)
    * Internet scanning resources (IPs, domains, ports, services)
    * Sign up for a free account at https://app.binaryedge.io/sign-up

  * Censys.io (censysio_id) and (censysio_secret)
    * Sign up for a free account at https://censys.io/register

  * Full Contact (fullcontact_api)
    * Sign up at https://www.fullcontact.com/developer-portal/
    * Free key includes 1,000 searches

  * Namechk (namechk_api)
    * Used to check if a given username has accounts on different platforms
    * Sign up at https://namechk.com/access

  * Hashes (hashes_api)
    * Used to check if a password hash has a known plaintext value
    * Sign up at https://www.hashes.org/register.php
    * Obtain your key from https://www.hashes.org/settings.php

  * IPstack (ipstack_api)
    * Used for geo-identifying the location for an IP address
    * Sign up for a free account at https://ipstack.com/product

___

###### Variant: Foca Analyzer

Requirements:

- FOCA executable
- Windows Environment (Virtualized)
- .NET Framework

**Installing FOCA analyzer**

- Download from [FOCA website](https://www.elevenpaths.com/labstools/foca/index.html#)
- Install [.NET Framework](https://www.microsoft.com/net/download/linux)
- Extract FOCA zip file into a folder
- To launch, go to ```foca pro``` then```bin``` and select FOCA application

**Features & Functionality**

FOCA scanner has tons of great features from web searches and DNS searches as examples. To know more of functionalities, visit [FOCA's website](https://www.elevenpaths.com/labstools/foca/index.html)

**Creating Your first Project:**

To create a project in FOCA, click ```Project``` on the tab menu, and select ```New Project```

There are few items to fill in FOCA:

- **Project name:** Name of your project
- **Domain website:** the Website of your target
- **Alternative domains:** for sub-domains, and other domains that your target own
- **Folder where to save documents:** Select any folder or create a folder for your FOCA results
- **Project date:** Date of your project (automatically filled up)
- **Project notes:** Any notes that you have for this particular project

After completing the forms, select the button ```Create```

**Scan and Search:**

After saving your project, it will bring you to the main window. On the upper right hand corner of your screen, you will see the two settings:

- **Search Engines:** search engines you wanted to use (*Google, Bing, Exalead*)
- **Extensions:** Extension refers to file extensions (*doc, docx, xls, xlsx etc*) By selecting an extension, it will be included in the scan/search.

Click the ```Search All``` buttong below the ```Extension``` options to start scan.

Note: FOCA will give you a warning regarding the IP address of the target and it’s netrange owner. This will be added to the alternative domain.

**Analyzing Public Documents:**

The results of FOCA depends on the files/documents uploaded to the website that are "publicly available". There are situations, where an organization may not have any publicly available documents. If that is the case, move next to the Maltego assessment activity.

However, if your scan generates files/documents scanned, you can may analyzing and extract metadata from the identified files/documents.

**Downloading Files:**

After when the search/scan has completed, right-click on any file, (NOTE: you can start downloading files one-by-one, or all at once by using SHIFT+SELECT. you can only extract metadata of files that are already downloaded). If the target website contains a lot of files and documents available, you may want to download all the files all at once.

**Extracting Metadata:**

After selecting a file/s that is/are downloaded, you may ```right-click``` and select ```Download Metadata```
You may start analyzing the files one-by-one of all at once. To do this, first, download all documents. Then, right-click, select ```Extract all Metadata```. After Extracting your metadatas you can now ```right-click``` again, and select: ```analzye metadata```. (There’s a green button that will appear once a file has been downloaded and analyzed. It will show download progress bars for each individual files and the time it takes time to download)

**Analyzing Reports and Findings**

After downloading documents and extracting metadata, you may view the results on the left side pane of your FOCA.
On the left pane, you will see the following options:

  - Network
  - Domains
  - Roles
  - Vulnerabilities
  - Metadata

Under ```Metadata``` you will have two sub-menus, ```Documents``` and ```Metadata Summary```. The ```Documents```, option displays scraped metadata per document/file. However, on ```Metadata Summary``` option, you will have the following options:

  - User
  - Folders
  - Printers
  - Software
  - Emails
  - Operating Systems
  - Passwords
  - Servers

These information can then be added to your records and be used for other attack surface such as social engineering attacks.

___

###### Variant: Maltego

**What is Maltego?**

According to the Maltego's official website, they define maltego as:
"An interactive data mining tool that renders directed graphs for link analysis. The tool is used in online investigations for finding relationships between pieces of information from various sources located on the Internet.

Maltego uses the idea of transforms to automate the process of querying different data sources. This information is then displayed on a node based graph suited for performing link analysis."

Maltego has may different uses:

  - Information Gathering and Data Mining
      - Email addresses, Aliases, domain names, DNS records, IP addresses
      - Document and files
      - Affiliations

  - Investigation and Threat Intelligence
      - Investigating targeted attacks
      - Analyzing malicious files

These are just some of the ways you can use Maltego. However with this guide, we will use Maltego for information gathering and data mining. The information we will find will later on be used in the following stages of audit/vulnerability assessment/penetration testing.

Maltego also has different versions:

  - Maltego XL
  - Maltego Classic
  - Maltego CE (Community Edition)

For this exercise, we will be using the Maltego CE version.

**Registration**

Maltego is available in the latest release of Kali Linux. (See [here](https://www.kali.org/kali-linux-releases))
NOTE: To run Maltego, you first need to have an account. To register, click [here](https://www.paterva.com/web7/community/community.php). Consider carefully the operational security implications of this requirement, in particular if you use one account for multiple different audits.

**Getting Started:**

Before we proceed with this guide, let us first take a look on Maltego's 3 main important concept.

  - Entity

    According to Maltego, "Entity is represented as a node on a graph and can be anything such as a DNS Name, Person, Phone number, etc. The Maltego client comes with about 20 entities targeted for use in online investigations, but you can also make your own custom ones."

  - Transform

    Tranforms is defined as "a piece of code that takes one entity to another. It does this by querying a data source and returning the results as new entities on your graph. The data sources are places like DNS servers, search engines, social networks, WHOIS information, etc."

  - Machines

    In Maltego, a machine can "a chain multiple transforms together to automate common/tedious tasks."

**Running Maltego for the first time**

To initialize Maltego, on your Kali Linux, click ```Applications``` > ```01 - Information Gathering``` > ```Maltego```. This will bring you to the "Home" screen of the Maltego application and will show you a list of available Transforms. Transforms are simply a set of activities that you can run against a specific target. We'll learn more of transforms in the following topics.

**Creating a New Graph**

To create a new graph where we can put our first task, click the Maltego icon on the upper left corner of your window, and click *New*. This will now open a blank screen, with the tab entitled *New Graph*.

**Selecting Pallete Entity**

Pallete is located on the left pane side called "Entity Pallete". This contains all the Entity that you can use depending on the activity that you are going to perform. For our exercise, look for the ```Domain``` entity pallete. Once you find it, drag it and drop it to the blank graph to the right. Now you have an entity on your graph. Try to double click the ```domain``` entity to rename it to your target (for this example, we can use ```paterva.com```)

**Choosing Transforms**

Once you have edited your entity, you can ```right-click``` to open the ```Run Transform(s)``` option. You can see here all the available transforms you can use. (Depending on the transforms that you have installed)

For this exercise, click the ```+``` on the left side of ```PATERVA CTAS CE```. This will give use 4 transforms:

  - DNS from Domain
  - Domain owner detail
  - Email addresses from Domain
  - Files and Documents from Domain

You can run each of this transforms individually, or you can click the ```>>``` icon to run ```All Transforms```.

Once you click it, all Transforms will run on the ```paterva.com``` domain. This graph result will include:

  - Sub-domains
  - Email addresses
  - Files and documents
  - IP addresses
  - Geolocation
  - Domain registrants
  - Telephone numbers
  - etc

You can now then gather these results and use it for your next set of reconnaissance activity.

##### Recommendation
