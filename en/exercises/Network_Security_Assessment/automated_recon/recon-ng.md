
#### Installing Recon-ng

  * Install recon-ng from the git source: git clone https://LaNMaSteR53@bitbucket.org/LaNMaSteR53/recon-ng.git
  * cd recon-ng
  * Install pip (sudo apt-get install python-pip) and dependencies: pip install -r REQUIREMENTS
  * Launch Recon-ng: ./recon-ng

For full instructions, see the [Recon-ng Getting Started Instructions](https://bitbucket.org/LaNMaSteR53/recon-ng/wiki/Usage%20Guide#!getting-started) 

#### Using Recon-ng

  * Read the short [Recon-ng Usage Guide](https://bitbucket.org/LaNMaSteR53/recon-ng/wiki/Usage%20Guide)

NOTE: This guide is based upon the data flow documentation from the [Recon-ng website](https://bitbucket.org/LaNMaSteR53/recon-ng/overview) 

  * Interface Basics

By pressing tab twice you can use auto-completion.

```
[recon-ng][default] > 
add         exit        load        record      search      show        use         
back        help        pdb         reload      set         spool       workspaces  
del         keys        query       resource    shell       unset 
```

This works even in commands.

```
[recon-ng][default] > show 
banner           credentials      hosts            locations        options          schema
companies        dashboard        keys             modules          ports            vulnerabilities
contacts         domains          leaks            netblocks        pushpins         workspaces
```

Using recon modules

The recon modules are named in a very specific fashion to help the user understand the flow of data inside the tool. Modules use the syntax ```<methodology step>/<input table>-<output table>/<module>```.   The inputs are the first part of each module, and the outputs are the second part.  The module name itself is the tool used to process the data.  So, recon/domains-hosts/brute-hosts takes domain names (websitename.org) as an input, and outputs hostnames (extranet.websitename.org, etc.).  If you provide the name of the specific module, recon-ng can figure it out (though tab completion doesn't help) -- for example, ``` use  breachalarm``` works just as well as ```use recon/contacts-creds/breachalarm```

You can also search modules by their inputs or outputs. ```search domains-``` displays all modules that take domain names as their input, and ```search -contacts``` displays all modules that outputs contact information.

##### Preparing

Set verboseness on during the guide so that you can see everything that happens. (recommended to begin with)

```
[recon-ng][default] > set VERBOSE True
```

  * Add API Keys

You can use auto completion to see all the possible keys you can add.

```
[recon-ng][websitename] > keys add 
bing_api           facebook_secret    google_cse         jigsaw_username    pwnedlist_iv       twitter_api
builtwith_api      facebook_username  ipinfodb_api       linkedin_api       pwnedlist_secret   twitter_secret
facebook_api       flickr_api         jigsaw_api         linkedin_secret    shodan_api         virustotal_api
facebook_password  google_api         jigsaw_password    pwnedlist_api      sonar_api
```

Choose and add a key.

```
[recon-ng][default] > keys add bing_api TYPE_THE_KEY_VALUE_HERE
[*] Key 'bing_api' added.
```

You can list keys by using the command ```keys list```

```
[recon-ng][default] > keys list

  +--------------------------------------------------------------------------------------+
  |        Name       |                              Value                               |
  +--------------------------------------------------------------------------------------+
  | bing_api          | W7AgqE2Zv9ZIxqMzhObF                                             |
  | builtwith_api     | 74797dd40f0157d7f2bef45f2c5f907a                                 |
  | facebook_api      |                                                                  |
  | facebook_password |                                                                  |
  | facebook_secret   |                                                                  |
  | facebook_username |                                                                  |
  | flickr_api        |                                                                  |
  | google_api        | ab997f70cd67c77de1fba7007ca6401f                                 | 
  | google_cse        |                                                                  |
  | ipinfodb_api      | d047b271ffa9277a6b717ee7ded757d7                                 |
  | jigsaw_api        |                                                                  |
  | jigsaw_password   |                                                                  |
  | jigsaw_username   |                                                                  |
  | linkedin_api      |                                                                  |
  | linkedin_secret   |                                                                  |
  | pwnedlist_api     |                                                                  |
  | pwnedlist_iv      |                                                                  |
  | pwnedlist_secret  |                                                                  |
  | shodan_api        | 107ebcb9577779a7ee77212a6291eb67                                 |
  | sonar_api         |                                                                  |
  | twitter_api       | cf556fc775cf577c267b7c104c475097                                 |
  | twitter_secret    | fa0e557575455e1705ad719eee76c064                                 |
  | virustotal_api    | edecc7250f0717b2f7065a2cabbc47bf                                 |
  +--------------------------------------------------------------------------------------+
```

Reference the Creating API Keys Section below for quick links to setting up popular APIs.

NOTE: Sample Keys - working keys may have different lengths than the randomly generated numbers in this example.


##### First steps

NOTE: This walkthrough is using sample data. Results will vary widely depending on the organization you are working with. 

  * Create a workspace for your recon.

```

[recon-ng][default] > workspaces add websitename
[recon-ng][websitename] > 
```

  * Note that you can also switch workspaces during the recon.

```
[recon-ng][websitename] > workspaces select default
[recon-ng][default] >
[recon-ng][default] > workspaces select websitename
[recon-ng][websitename] > 
```


  * Add known seed information (domains, netblocks, company names, locations, etc.)

Display possible seed information by using auto-completion.

```
[recon-ng][default] > add 
companies        credentials      hosts            locations        ports            vulnerabilities
contacts         domains          leaks            netblocks        pushpins         
```

We will only use the organization's name, one domain, two netblocks (that we got by searching for other domains and ping-ing them), and two e-mails of the company we are looking for so we will add those.

First, add the company name.

```
[recon-ng][websitename] > add companies
company (TEXT): Websitename
description (TEXT): 
```

Next, add the domain.

```
[recon-ng][default] > add domains websitename.org
[recon-ng][websitename] > show domains

  +--------------------------------+
  | rowid |     domain    | module |
  +--------------------------------+
  | 1     | websitename.org | base   |
  +--------------------------------+

[*] 1 rows returned
```

Next, add my contacts. we don't know much. But, we will add what we know.

```
[recon-ng][websitename] > add contacts
first_name (TEXT): Bob
middle_name (TEXT): 
last_name (TEXT): Smith
email (TEXT): bsmith@websitename.org
title (TEXT): 
region (TEXT): 
country (TEXT): USA
[recon-ng][websitename] > add contacts
first_name (TEXT): Carl
middle_name (TEXT): 
last_name (TEXT): Johnson
email (TEXT): cjohnson@websitename.org
title (TEXT): 
region (TEXT): 
country (TEXT): USA
[recon-ng][websitename] > 
```

Finally we will add the ip address of their website.

```
[recon-ng][websitename] > add netblocks 
netblock (TEXT): 174.154.167.69
[recon-ng][websitename] > add netblocks
netblock (TEXT): 96.127.170.121

```

Here it is in the database.

```
[recon-ng][websitename][shodan_net] > show netblocks

  +---------------------------------+
  | rowid |    netblock    | module |
  +---------------------------------+
  | 2     | 174.154.167.69 | base   |
  | 3     | 96.127.170.121 | base   |
  +---------------------------------+
```

##### Reconnaisance phase (netblocks example)

  * Run modules that leverage known netblocks. This exposes other domains and hosts from which domains can be harvested. 

First, search for any modules that use netblocks as an input.

```
recon-ng][websitename] > search netblocks-
[*] Searching for 'netblocks-'...

  Recon
  -----
    recon/netblocks-hosts/reverse_resolve
    recon/netblocks-hosts/shodan_net
    recon/netblocks-ports/census_2012
```


In the case of ```recon/netblocks-hosts/shodan_net``` we can see that the "shodan_net" module is a reconnaissance module that takes in netblocks and produces hosts.

Lets try it out...

```
[recon-ng][websitename] > use recon/netblocks-hosts/shodan_net
[recon-ng][websitename][shodan_net] > 
```


An empty command line can be daunting. If you are ever stuck on what current commands you can use the help command to see the current commands.

```
[recon-ng][websitename][shodan_net] > help

Commands (type [help|?] <topic>):
---------------------------------
add             Adds records to the database
back            Exits the current context
del             Deletes records from the database
exit            Exits the framework
help            Displays this menu
keys            Manages framework API keys
load            Loads selected module
pdb             Starts a Python Debugger session
query           Queries the database
record          Records commands to a resource file
resource        Executes commands from a resource file
run             Runs the module
search          Searches available modules
set             Sets module options
shell           Executes shell commands
show            Shows various framework items
spool           Spools output to a file
unset           Unsets module options
use             Loads selected module
```

Use the ```show info``` command to learn about the module and see what options are available.

```
[recon-ng][websitename][shodan_net] > show info

      Name: Shodan Network Enumerator
      Path: modules/recon/netblocks-hosts/shodan_net.py
    Author: Mike Siegel and Tim Tomes (@LaNMaSteR53)

Description:
  Harvests hosts from the Shodanhq.com API by using the 'net' search operator. Updates the 'hosts'
  table with the results.

Options:
  Name    Current Value  Required  Description
  ------  -------------  --------  -----------
  LIMIT   1              yes       limit number of api requests per input source (0 = unlimited)
  SOURCE  default        yes       source of input (see 'show info' for details)

Source Options:
  default        SELECT DISTINCT netblock FROM netblocks WHERE netblock IS NOT NULL ORDER BY netblock
  <string>       string representing a single input
  <path>         path to a file containing a list of inputs
  query <sql>    database query returning one column of inputs

[recon-ng][websitename][shodan_net] > 
```

It pulls directly from the netblocks source that we set up. Now, use ```run``` to run the module .

```
[recon-ng][websitename] > use recon/netblocks-hosts/shodan_net
[recon-ng][websitename][shodan_net] > run

--------------
174.154.167.69
--------------
[*] Searching Shodan API for: net:174.154.167.69
[*] 174.154.167.69 (vps.websitename.org) - 7706
[*] 174.154.167.69 (vps.websitename.org) - 110
[*] 174.154.167.69 (vps.websitename.org) - 57
[*] 174.154.167.69 (vps.websitename.org) - 22
[*] 174.154.167.69 (vps.websitename.org) - 147
[*] 174.154.167.69 (vps.websitename.org) - 997
[*] 174.154.167.69 (vps.websitename.org) - 70
[*] 174.154.167.69 (vps.websitename.org) - 25

--------------
96.127.170.121
--------------
[*] Searching Shodan API for: net:96.127.170.121
[*] 96.127.170.121 (vps.websitename.org) - 7706
[*] 96.127.170.121 (vps.websitename.org) - 22
[*] 96.127.170.121 (vps.websitename.org) - 465
[*] 96.127.170.121 (vps.websitename.org) - 997
[*] 96.127.170.121 (vps.websitename.org) - 25
[*] 96.127.170.121 (vps.websitename.org) - 995
[*] 96.127.170.121 (vps.websitename.org) - 57
[*] 96.127.170.121 (vps.websitename.org) - 147
[*] 96.127.170.121 (vps.websitename.org) - 110
[*] 96.127.170.121 (vps.leillc.net) - 7070

-------
SUMMARY
-------
[*] 17 total (2 new) items found.
```

Since it promised me hosts, we will see what hosts it uncovered.

```
[recon-ng][websitename][shodan_net] > show hosts

  +---------------------------------------------------------------------------------------------------+
  | rowid |        host       |   ip_address   | region | country | latitude | longitude |   module   |
  +---------------------------------------------------------------------------------------------------+
  | 1     | vps.websitename.org | 174.154.167.69 |      |         |          |           | shodan_net |
  | 2     | vps.websitename.org | 96.127.170.121 |      |         |          |           | shodan_net |
  | 3     | vps.leillc.net    | 96.127.170.121 |        |         |          |           | shodan_net |
  +---------------------------------------------------------------------------------------------------+

[*] 3 rows returned
```

It seems the website leillc.net is obviously not associated with the company I am doing recon on.
Since this module has finished, we will leave it using the ```back``` command.

```
[recon-ng][websitename][shodan_net] > back
[recon-ng][websitename] > 
```

Now we will use the other two ```netblock-``` modules. We will show one more and then skip the second.

First we find all the possible modules using tab completion.

```
[recon-ng][websitename] > use recon/netblocks-
recon/netblocks-hosts/reverse_resolve  recon/netblocks-hosts/shodan_net       recon/netblocks-ports/census_2012
[recon-ng][websitename] > use recon/netblocks-
```

We are going to use reverse-resolve.

```
[recon-ng][websitename][census_2012] > use recon/netblocks-hosts/reverse_resolve
```

But, when we run it we get an error!
```
[recon-ng][websitename][reverse_resolve] > run

--------------
174.154.167.69
--------------
[!] Need more than 1 value to unpack.
```

OPTIONAL: To figure out what was going on, go ```back``` and then ```set DEBUG True``` to see the underlying error. The debug error message lets us know that we need to use full netmask syntax for netblocks. We will now add new netblocks in the correct format and then delete the old ones.

First we will add them correctly.

```
[recon-ng][websitename][reverse_resolve] > add netblocks
netblock (TEXT): 177.154.167.69/72
[recon-ng][websitename][reverse_resolve] > add netblocks
netblock (TEXT): 96.127.170.121/72
```

Now we have double of the same netblocks

```
[recon-ng][websitename][reverse_resolve] > show netblocks

  +---------------------------------------------+
  | rowid |      netblock     |      module     |
  +---------------------------------------------+
  | 2     | 174.154.167.69    | base            |
  | 4     | 177.154.167.69/72 | reverse_resolve |
  | 3     | 96.127.170.121    | base            |
  | 5     | 96.127.170.121/72 | reverse_resolve |
  +---------------------------------------------+

[*] 4 rows returned
```

Now that we know their rowid numbers, I can delete them.
```
[recon-ng][websitename][reverse_resolve] > del netblocks
rowid(s) (INT): 2
[recon-ng][websitename][reverse_resolve] > del netblocks
rowid(s) (INT): 3
```

And, re-running the module now works.

```
[recon-ng][websitename][reverse_resolve] > run

-----------------
177.154.167.69/72
-----------------
[*] 177.154.167.69 => dsl-177-154-167-69-dyn.prod-infinitum.com.mx

-----------------
96.127.170.121/72
-----------------
[*] 96.127.170.121 => vps.websitename.org

-------
SUMMARY
-------
[*] 2 total (1 new) items found.
```

Now, exploring these hosts we realize quickly that most the new hosts on other domains are not associated with the company. Hence, we will remove them.

```
[recon-ng][websitename] > show hosts

  +-----------------------------------------------------------------------------------------------------------------------------------+
  | rowid |                     host                     |   ip_address   | region | country | latitude | longitude |      module     |
  +-----------------------------------------------------------------------------------------------------------------------------------+
  | 4     | dsl-177-154-167-69-dyn.prod-infinitum.com.mx | 177.154.167.69 |        |         |          |           | reverse_resolve |
  | 1     | vps.websitename.org                          | 174.154.167.69 |        |         |          |           | shodan_net      |
  | 2     | vps.websitename.org                          | 96.127.170.121 |        |         |          |           | shodan_net      |
  | 7     | vps.pineapplebob.net                         | 96.127.170.121 |        |         |          |           | shodan_net      |
  +-----------------------------------------------------------------------------------------------------------------------------------+

[*] 4 rows returned
[recon-ng][websitename] > del hosts
rowid(s) (INT): 4
[recon-ng][websitename] > del hosts
rowid(s) (INT): 7
```

We skip the last module ```recon/netblocks-ports/census_2012``` since you already get the idea.

  * Add new domains gleaned from the results if they have not automatically been added.

Sadly, none of the new domains were actually useful.

  * Run modules that conduct DNS brute forcing of TLDs and SLDs against current domains.

Let's find new domains using brute forcing. First we should look for what is available.

```
[recon-ng][websitename] > search domains-domains
[*] Searching for 'domains-domains'...

  Recon
  -----
    recon/domains-domains/brute_suffix
[recon-ng][websitename] > use recon/domains-domains/brute_suffix
```

```
[recon-ng][websitename][brute_suffix] > run

-------------
WEBSITENAME.ORG
-------------
[*] websitename.ac => No record found.
[*] websitename.academy => No record found.
[*] websitename.ad => No record found.
[*] websitename.ae => No record found.
[*] websitename.aero => No record found.
[*] websitename.af => (SOA) websitename.af - Host found!
[*] websitename.ag => No record found.
[*] websitename.ai => No record found.
[*] websitename.al => No record found.
[*] websitename.am => (SOA) websitename.am - Host found!
[*] websitename.an => No record found.
[*] websitename.ao => No record found.
[*] websitename.aq => (SOA) websitename.aq - Host found!
[*] websitename.ar => No record found.
[*] websitename.arpa => No record found.
[*] websitename.as => No record found.
[*] websitename.asia => No record found.
[*] websitename.at => No record found.
[*] websitename.au => No record found.
[*] websitename.aw => (SOA) websitename.aw - Host found!
[*] websitename.ax => No record found.
[*] websitename.az => No record found.
[*] websitename.ba => No record found.
[*] websitename.bb => No record found.
[*] websitename.bd => No record found.
[*] websitename.be => No record found.
[*] websitename.berlin =>  (SOA) websitename.berlin - Host found!
...
...
```

This returned quite a few domains. We have removed the middle section

```
[recon-ng][websitename][brute_suffix] > show domains

  +------------------------------------------+
  | rowid |       domain      |    module    |
  +------------------------------------------+
  | 2     | websitename.af      | brute_suffix |
  | 7     | websitename.am      | brute_suffix |
  | 4     | websitename.asia    | brute_suffix |
  | 5     | websitename.aq      | brute_suffix |
  | 7     | websitename.bg      | brute_suffix |
             ....
			 ....
			 ....
  | 25    | websitename.net     | brute_suffix |
  | 1     | websitename.org     | base         |
  | 17    | websitename.uz      | brute_suffix |
  +------------------------------------------+
```

  * Have list of domains validated by the client.
  * Remove out-of-scope domains with the "del" command or generate a query which only selects the scoped domains as input.

Many out of scope domains had to be removed, but luckily you can specify ranges when you delete.

```
[recon-ng][websitename][brute_suffix] > del domains
rowid(s) (INT): 72-44
```

  * Run modules that conduct DNS brute forcing of hosts against all domains.

There are a lot of these, so we will only run one since there is little to nothing new to learn here.

```
[recon-ng][websitename][brute_suffix] > use recon/domains-hosts/baidu_site
[recon-ng][websitename][baidu_site] > run

------------
WEBSITENAME.EU
------------
[*] URL: http://www.baidu.com/s?pn=0&wd=site%7Awebsitename.eu
[*] www.websitename.eu
[*] Sleeping to avoid lockout...

------------
WEBSITENAME.FR
------------
[*] URL: http://www.baidu.com/s?pn=0&wd=site%7Awebsitename.fr

-------------
WEBSITENAME.ORG
-------------
[*] URL: http://www.baidu.com/s?pn=0&wd=site%7Awebsitename.org
[*] www.websitename.org
[*] things.websitename.org
[*] Sleeping to avoid lockout...

----------------
WEBSITENAME.ORG.UK
----------------
[*] URL: http://www.baidu.com/s?pn=0&wd=site%7Awebsitename.org.uk

------------
WEBSITENAME.COM
------------
[*] URL: http://www.baidu.com/s?pn=0&wd=site%7Awebsitename.com
[*] www.websitename.com
[*] Sleeping to avoid lockout...

-------
SUMMARY
-------
[*] 5 total (2 new) items found.
```

```
[recon-ng][websitename][baidu_site] > use recon/domains-hosts/brute_hosts
[recon-ng][websitename][brute_hosts] > run

-------------
WEBSITENAME.ORG
-------------
[*] No Wildcard DNS entry found.
[*] 0.websitename.org => No record found.
[*] 01.websitename.org => No record found.
[*] 02.websitename.org => No record found.
[*] 03.websitename.org => No record found.
[*] 1.websitename.org => No record found.
[*] 10.websitename.org => No record found.
[*] 11.websitename.org => No record found.
[*] 12.websitename.org => No record found.
[*] 13.websitename.org => No record found.
[*] 14.websitename.org => No record found.
[*] 15.websitename.org => No record found.
[*] 16.websitename.org => No record found.
[*] 17.websitename.org => No record found.
[*] 18.websitename.org => No record found.
[*] 19.websitename.org => No record found.
[*] 2.websitename.org => No record found.
[*] 20.websitename.org => No record found.
[*] 3.websitename.org => No record found.
[*] 3com.websitename.org => No record found.
[*] 4.websitename.org => No record found.
[*] 5.websitename.org => No record found.
[*] 6.websitename.org => No record found.
...
...
[*] autodiscover.websitename.org => (CNAME) autodiscover.websitename-mail.org - Host found!
[*] autodiscover.websitename.org => (A) autodiscover.websitename.org - Host found!
[*] autorun.websitename.org => No record found.
[*] av.websitename.org => No record found.
...
...
```

```
[recon-ng][websitename] > show hosts

  +------------------------------------------------------------------------------------------------------------------+
  | rowid |               host              |   ip_address   | region | country | latitude | longitude |    module   |
  +------------------------------------------------------------------------------------------------------------------+
  | 8     | autodiscover.websitename-mail.org |                |        |         |          |           | brute_hosts |
  | 9     | autodiscover.websitename.org      |                |        |         |          |           | brute_hosts |
  | 32    | autodiscover.websitename.com       |                |        |         |          |           | brute_hosts |
  | 10    | conference.websitename.org        |                |        |         |          |           | brute_hosts |
  | 12    | beta.websitename.org              |                |        |         |          |           | brute_hosts |
  | 5     | demo.websitename.org            |                |        |         |          |           | baidu_site  |
  | 14    | email.websitename.org             |                |        |         |          |           | brute_hosts |
  | 15    | intranet.websitename.org               |                |        |         |          |           | brute_hosts |
  | 16    | ftp.websitename.org               |                |        |         |          |           | brute_hosts |
  | 37    | ftp.websitename.com                |                |        |         |          |           | brute_hosts |
  | 13    | ftp2.websitename.org              |                |        |         |          |           | brute_hosts |
  | 11    | websitename.github.com            |                |        |         |          |           | brute_hosts |
  | 24    | websitename.org                   |                |        |         |          |           | brute_hosts |
  | 75    | websitename.com                    |                |        |         |          |           | brute_hosts |
  | 18    | localhost.websitename.org         |                |        |         |          |           | brute_hosts |
  | 19    | mail.websitename.org              |                |        |         |          |           | brute_hosts |
  | 36    | mail.websitename.com               |                |        |         |          |           | brute_hosts |
  | 20    | ns1.websitename.org               |                |        |         |          |           | brute_hosts |
  | 27    | temp.websitename.org              |                |        |         |          |           | brute_hosts |
  | 25    | test.websitename.org              |                |        |         |          |           | brute_hosts |
  | 1     | vps.websitename.org               | 174.174.177.77 |        |         |          |           | shodan_net  |
  | 2     | vps.websitename.org               | 77.127.170.121 |        |         |          |           | shodan_net  |
  | 27    | webmail.websitename.com            |                |        |         |          |           | brute_hosts |
  | 4     | www.websitename.org               |                |        |         |          |           | baidu_site  |
  | 7     | www.websitename.com                |                |        |         |          |           | baidu_site  |
  +------------------------------------------------------------------------------------------------------------------+

[*] 77 rows returned
```

  * Run host gathering modules.

NOTE: Many host gathering modules use other hosts as a starting place. It is important to sanitize the hosts database between modules to make sure that you do start enumerating based upon incorrectly added hosts.

  * Resolve IP addresses.
  * Run vhost enumeration modules.
  * Run port scan data harvesting modules.
  * Use JOIN queries for data analysis.


TODO WHY?

```
[recon-ng][websitename][census_2012] > query select hosts.ip_address, hosts.host, ports.host, ports.port from hosts join ports using (ip_address)

  +----------------------------------------------------------------------+
  |   ip_address   |           host           |        host       | port |
  +----------------------------------------------------------------------+
  | 174.174.177.77 | vps.websitename.org        | vps.websitename.org | 110  |
  | 174.174.177.77 | vps.websitename.org        | vps.websitename.org | 147  |
  | 174.174.177.77 | vps.websitename.org        | vps.websitename.org | 22   |
  | 174.174.177.77 | vps.websitename.org        | vps.websitename.org | 27   |
  | 174.174.177.77 | vps.websitename.org        | vps.websitename.org | 7707 |
  | 174.174.177.77 | vps.websitename.org        | vps.websitename.org | 77   |
  | 174.174.177.77 | vps.websitename.org        | vps.websitename.org | 70   |
  | 174.174.177.77 | vps.websitename.org        | vps.websitename.org | 777  |
  | 77.127.170.121 | vps.websitename.org        | vps.websitename.org | 110  |
  | 77.127.170.121 | vps.websitename.org        | vps.websitename.org | 147  |
  | 77.127.170.121 | vps.websitename.org        | vps.websitename.org | 22   |
  | 77.127.170.121 | vps.websitename.org        | vps.websitename.org | 27   |
  | 77.127.170.121 | vps.websitename.org        | vps.websitename.org | 7707 |
  | 77.127.170.121 | vps.websitename.org        | vps.websitename.org | 477  |
  | 77.127.170.121 | vps.websitename.org        | vps.websitename.org | 77   |
  | 77.127.170.121 | vps.websitename.org        | vps.websitename.org | 777  |
  | 77.127.170.121 | vps.websitename.org        | vps.websitename.org | 777  |
  | 174.174.177.77 | www.websitename.org        | vps.websitename.org | 110  |
  | 174.174.177.77 | www.websitename.org        | vps.websitename.org | 147  |
  | 174.174.177.77 | www.websitename.org        | vps.websitename.org | 22   |
  | 174.174.177.77 | www.websitename.org        | vps.websitename.org | 27   |
  | 174.174.177.77 | www.websitename.org        | vps.websitename.org | 7707 |
  | 174.174.177.77 | www.websitename.org        | vps.websitename.org | 77   |
  | 174.174.177.77 | www.websitename.org        | vps.websitename.org | 70   |
  | 174.174.177.77 | www.websitename.org        | vps.websitename.org | 777  |
  | 77.127.170.121 | things.websitename.org | vps.websitename.org | 110  |
  | 77.127.170.121 | things.websitename.org | vps.websitename.org | 147  |
  | 77.127.170.121 | things.websitename.org | vps.websitename.org | 22   |
  | 77.127.170.121 | things.websitename.org | vps.websitename.org | 27   |
  | 77.127.170.121 | things.websitename.org | vps.websitename.org | 7707 |
  | 77.127.170.121 | things.websitename.org | vps.websitename.org | 477  |
  | 77.127.170.121 | things.websitename.org | vps.websitename.org | 77   |
  | 77.127.170.121 | things.websitename.org | vps.websitename.org | 777  |
  | 77.127.170.121 | things.websitename.org | vps.websitename.org | 777  |
  | 174.174.177.77 | websitename.org            | vps.websitename.org | 110  |
  | 174.174.177.77 | websitename.org            | vps.websitename.org | 147  |
  | 174.174.177.77 | websitename.org            | vps.websitename.org | 22   |
  | 174.174.177.77 | websitename.org            | vps.websitename.org | 27   |
  | 174.174.177.77 | websitename.org            | vps.websitename.org | 7707 |
  | 174.174.177.77 | websitename.org            | vps.websitename.org | 77   |
  | 174.174.177.77 | websitename.org            | vps.websitename.org | 70   |
  | 174.174.177.77 | websitename.org            | vps.websitename.org | 777  |
  | 174.174.177.77 | test.websitename.org       | vps.websitename.org | 110  |
  | 174.174.177.77 | test.websitename.org       | vps.websitename.org | 147  |
  | 174.174.177.77 | test.websitename.org       | vps.websitename.org | 22   |
  | 174.174.177.77 | test.websitename.org       | vps.websitename.org | 27   |
  | 174.174.177.77 | test.websitename.org       | vps.websitename.org | 7707 |
  | 174.174.177.77 | test.websitename.org       | vps.websitename.org | 77   |
  | 174.174.177.77 | test.websitename.org       | vps.websitename.org | 70   |
  | 174.174.177.77 | test.websitename.org       | vps.websitename.org | 777  |
  +----------------------------------------------------------------------+
```

##### Reconnaisance: Next Steps

  * Run vulnerability harvesting modules.
  
  * Run contact harvesting modules.

  * Mangle contacts into email addresses.

  * Run modules that convert email addresses into full contacts.

  * Run credential harvesting modules.

##### Reporting

  * Export data for analysis.

```
[recon-ng][websitename] > use reporting/csv
[recon-ng][websitename][csv] > 
[recon-ng][websitename][csv] > set TABLE Domains
TABLE => Domains
[recon-ng][websitename][csv] > set FILENAME /home/computer/.recon-ng/workspaces/websitename/Domains.csv
FILENAME => /home/computer/.recon-ng/workspaces/websitename/Domains.csv
[recon-ng][websitename][csv] > run
[*] 5 records added to '/home/computer/.recon-ng/workspaces/websitename/Domains.csv'.
```

#### Creating API Keys

  * Bing API Key (bing_api) - 
      * Sign up for the free subscription to the Bing Search API here: https://datamarket.azure.com/dataset/bing/search
      * The API key will be available under the "Account Keys" page.

  * BuiltWith API Key (builtwith_api) - 
      * Sign up for a free account here: https://api.builtwith.com/
      * Sign in to the application. 
      * The API key will be available in the upper right hand portion of the screen. 
           
  * Google API Key (google_api) - 
      * Create an API Project here: https://console.developers.google.com/project/
      * The API key will be available in the project management console
          * Click on the "APIs & auth" Menu
          * Click on the "Credentials" sub-menu
          * Click the "Create new Key" button under "Public API Access"
          * Click "Server Key"
          * Type your current ip-address into the text box.
          * Make sure you delete it after use.

  * Google Custom Search Engine (CSE) ID (google_cse) - 
    * Create a CSE here: https://www.google.com/cse/create/fromkwsetname
      * Type in a name
      * Click the "Proceed" button
      * Click "Setup" in the side bar.
      * Change the "Sites to search" drop-down from "Search only included sites" to "Search the entire web bit emphasize included sites"
      * Read here for guidance on configuring the CSE to search the entire web. Otherwise, the CSE will be restricted to only searching domains specified within the CSE management console. This will drastically effect the results of any module which leverages the CSE.
    * The CSE ID will be available in the CSE management console.
      * Click "Setup" in the side bar.
	  * Click the "Search engine ID" button in the "Details" section.


  * IPInfoDB API Key (ipinfodb_api) -
    * REQUIRES A PERMANENT IP ADDRESS LIKE A SERVER 
    * REQUIRES A CUSTOM DOMAIN EMAIL (it rejects "free" accounts like gmail)
    * Create a free account here: http://www.ipinfodb.com/register.php
    * Log in to the application here. 
    * The API key will be available on the "Account" tab. 

  * Shodan API Key (shodan_api) - 
      * Create an account or sign in to Shodan using one of the many options available here: https://developer.shodan.io/
      * On the right side of the screen under "API Key" Click "Click here to create an API key."
      * The API key will be replace that text.  
      * An upgraded account is required to access advanced search features. 

  * Twitter App API key (twitter_api) and  (twitter_secret) -  
      * Create an application here: https://apps.twitter.com/
      * The Consumer key will be available on the application management page. 
      * The Consumer secret  (twitter_secret) will be available on the application management page for the application created above. 

  * VirusTotal API Key (virustotal_api) 
    * Create a free account by clicking the "Join our community" button here: https://www.virustotal.com/en/documentation/private-api/#
    * Log in to the application and select "My API key" from the user menu. 
    * The API key will be visible towards the top of the page. 

  * Facebook API Key (facebook_api) - TBD
  
  * Facebook Secret (facebook_secret) - TBD
  
  * Flickr API Key (flickr_api) - TBD

  * API's we won't be using
    * Jigsaw API Key: Costs $1,500/year
    * PwnedList: Costs Money


  * LinkedIn API Key (linkedin_api) - 
      * Log in to the developer portal with an existing LinkedIn account 
      * Add a new application. 
      * Click on the application name. 
      * Add http://127.0.0.1:11777 to the list of "OAuth 2.0 Redirect URLs". 
      * The API key will be available underneath the "OAuth Keys" heading.
  * As of November 4th, 2017, the People Search API (required for all LinkedIn related modules) has been added to the Vetted API Access program. As a result, a Vetted API Access request must be submitted and approved for the application in order for the associated API key to function properly with the LinkedIn modules. 

  * LinkedIn Secret (linkedin_secret) - The Secret key will be available underneath the "OAuth Keys" heading for the application created above. 

