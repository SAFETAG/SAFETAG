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
- DNS, OSINT
Time_required_minutes:
- 45
---

#### DNS Enumeration

##### Summary

DNS Stands for Domain Name Service. In a nutshell, what it does is translate hosts/computer's name into it's IP addresses. It provides a way to know the IP address of any given machine on the internet, with the corresponding URL, or domain. You can consider it as telephone directory of the Internet.

DNS enumeration is one of your initial steps in your overall vulnerability assessment and audit. It is one stage where it will allow you to discover more potential targets. Upon completion of this assessment stage, you may find issues such as leaked information caused by default settings and server misconfigurations. Along with these, you can also have a broader scope of targets, such as internal server IP addresses, company netblocks and domain/subdomain names.

DNS Enumeration can be accomplished with different number of tools along with different approaches. This guide will discuss some of the approaches and the tools required to perform each of the activities. You can perform DNS enumeration passively or actively, depending on your operational security needs.

**Passive**, or "indirect" approach refers to the enumeration process that doesn't send any traffic or packets from your machine, directly to your target. This can be done using 3rd tools such as online tools and cloud based scanners.

**Active**, or "direct" approach refers to sending DNS queries and enumeration tests directly to the target. Consider that traffic is send over the target which may leave traces or traffic logs coming from your source IP. Active techniques include Zone Transfer, Reverse Lookup, Domain and Host Brute-Forcing, Standard Record Enumeration (wildcard, SOA, MX, A, TXT etc), Cache snooping, and Zone Walking

##### Overview

* Using a variety of passive and active techniques, uncover as many domains/subdomains linked to the target organization as possible.
* Use these to advance other aspects of your work to discover additional credentials and potential vulnerable or outdated services.

**Expected Outputs**

* A fuller map of the organization's online presence, including additional (potentially forgotten) hosts/services connected with the organization.
  *Domains + IP addresses
  * Subdomains + IP addresses
  * MX Records + IP addresses
  * DNSKeys
  * SOA records, DNS records and registrar
  * Domains hosted within the same IP address
  * DNS history Records
  * Domain Reputation (Web of Trust)
* Some of this information may already give you an idea of how your target's infrastructure setup. For example, you may see if the target domain goes into a CDN (Content Delivery Network) or sometimes DDoS mitigations services by finding out it's NS records. You can also identify if the target's MX records are behind a DLP (Data Leakage Prevention) systems.
* The output of your DNS enumeration might contain "more" information about the client organization (internal DNS records, hostnames, router names, additional IP addresses). This data is sometimes caused by misconfigured DNS or default service configurations, so look for misleading and false-positive results.


##### Materials Needed

* System or VM running [Kali Linux.](https://www.kali.org/downloads/)
* Internet Connection (and possibly a VPN or tor setup)
* Target domain(s)
* Secure notetaking tool

##### Considerations

* These techniques can reveal your interest in the target organization to anyone in your network path, so consider using a VPN or tor to conduct searches.
* When performing "active enumeration" it is always good to ask to whitelisting your IPs whenever you perform assessments. This rules out the idea of attackers having able to avoid shunning. Whitelisting your IPs also removes false positive reports and inaccurate results
* It is important that we verify that we have the correct target domain(s) before proceeding with any of the scans/audits/assessments exercises within SAFETAG Framework. The last thing we wouldn't want to happen is to scan and enumerate target which is out of scope!)

##### Walkthrough
The flexibility of having multiple options in performing a DNS enumeration activity is the key for a successful enumeration. As a practice, comparing results can help in assuring that the information we gather is accurate.


**A note on DDoS Protection Services** Your investigation may be blocked by DDoS protection services which operate at the DNS level such as Deflect or CloudFlare. ["CloudFlair"](https://blog.christophetd.fr/bypassing-cloudflare-using-internet-wide-scan-data/) provides some options in this case, as does tracking DNS and IP history to see if only DNS records changed.

One way to identify if a website is using DDoS service or not is by investigating it's DNS record. Since that we're working with organizations may not have enough funding to subscribe to a DNS mitigation service, lot's of time you will see them not using DDoS protection.

  - [Into DNS](https://intodns.com)

Looking up ```Server Names``` or your ```A Record``` that points to a particular 3rd party CDN DDoS service such as the following examples:

    - brianna.ns.cloudflare.com (Cloudflare)
    - toby.ns.cloudflare.com (Cloudflare)
    - 4k9o.x.incapdns.net (Incapsula)
    - e3396.dscx.akamaiedge.net (Akamai)

If these appears on your result, then there's a high probability that your target is behind DDoS service



**DNS Enumerations Tools:**

| Tools | Description | Type | Technique |
|-------|------------------------------------------------------|------|------|
|[Robtex](https://www.robtex.com/)|Gathers public information about IP numbers, domain names, host names, Autonomous systems, routes etc, then indexes the data in a big database and provide free access to that data | Online | Passive |
|[DNSdumpster](https://dnsdumpster.com/)|Free domain research tool that can discover hosts related to a domain, results with banners for HTTP, FTP, SSH & Telnet |Online | Passive |
|[CentralOps-Domain Dossier](https://centralops.net/co/)|Investigates domains and IP addresses. Gathers registrant information, DNS records, Network and Domain Whois Records, services scans and traceroutes | Online | Passive |
|[DNSSEC Analyzer](http://dnssec-debugger.verisignlabs.com/)| Checks for DNSSEC keys managment and configurations records | Online | Passive |
|[Recon-ng](https://bitbucket.org/LaNMaSteR53/recon-ng)| Automated web reconnaissance framework written in Python. Complete with independent modules, database interaction, built-in convenience functions, interactive help and command completion. | Script | Active |
[IntoDNS](https://intodns.com/) | IntoDNS checks the health and configuration of your DNS and provides report on MX records too. Provides suggestions to fix and improve findings | Online | Passive |
|[YougetSignal](https://www.yougetsignal.com/tools/web-sites-on-web-server/)| Helps you find other sites being hosted on a particular IP address, verifying if the target is using a shared hosting service | Online | Passive |
|[DNSRecon](https://github.com/darkoperator/dnsrecon)|A Python script written by Carlos Perez for conducting DNS reconnaissance. It can enumerate general DNS records, perform zone transfers, perform reverse lookups, and brute-force subdomains among other functions. It will even perform Google scanning, automating the process we discussed in the Using Google to find subdomains section. | Script | Active |
|[DNSenum](https://github.com/fwaeytens/dnsenum)|multithreaded perl script to enumerate DNS information of a domain and to discover non-contiguous ip blocks.|Script|Online|

Specific instructions for selected tools/techniques follows:

###### Variant: Passive: Third Party and Online Tools


Using 3rd party and online tools can help an auditor/tester in avoiding his/her machine to generate logs on the target's end. In cases where the target, or partner organization who requests for an audit/assessment has some security devices in place (IDS/IPS, Firewall etc.) Generating logs from your machine/network may result sometimes in our traffic getting blocked due to "automatic blocking" features in these security devices/appliances.

**Passive** tools include:

  - [Robtex](https://www.robtex.com)
  - [DNSDumpster](https://dnsdumpster.com)
  - [CentralOps Domain Dossier](https://centralops.net/co/DomainDossier.aspx)
  - [DNSSEC analyzer](http://dnssec-debugger.verisignlabs.com)
  - [IntoDNS](https://intodns.com)
  - [YougetSignal Reverse IP Domain Check](https://www.yougetsignal.com/tools/web-sites-on-web-server)

###### Variant: Active: DNSrecon


DNSrecon (available in Kali 2017 Release) is a powerful DNS enumeration script that can help and auditor in gathering information during the recon stage. This tool checks all NS records for Zone transfers, enumerate general DNS records for a given domain (MX, SOA, NS, A, AAAA, SPF and TXT). Performs SRV record enumeration and TLD (Top Level Domain) Expansion to name some.

This exercise will help you in performing some of the DNS enumeration methods using DNSrecon and generate information which you can add to your database to be used for other avenues of testing.

Perform basic DNS enumeration on target:

	 root@kali:~# dnsrecon -d <target domain>

Perform DNS Zone Transfer enumeration:

	 root@kali:~# dnsrecon -d <target.domain> -a
	 root@kali:~# dnsrecon -d <target.domain> -t axfr

Perform Reverse Lookup:

	 root@kali:~# dnrecon -r <start-IP-to-end-IP>

Domain Brute-Force:

	 root@kali:~# dnsrecon -d <target.domain> -D <namelist> -t brt

Cache Snooping:

	 root@kali:~# dnsrecon -t snoop -n Sever -D <Dictionary>

Zone Walking:

	 root@kali:~# dnsrecon -d <target.domain> -t zonewalk

###### Variant: Active: DNSenum


DNSenum, just like DNSrecon, is a tool designed to analyze DNS information of a specific DNS target. From zone transfer, hostname and subdomain dictionary brute force, reverse lookup service record and standard record query and top level domain name expansion, results are almost identical for both assessment tools.

You can use DNSenum from the Kali terminal and MSF Console platform as an auxilliary.

To access DNSenum, simply type the command ```dnsenum```. (You can add ```-h``` for help options.)

 ```root@kali:~# dnsenum```

The table below will help you get started with your DNS enumeration using ```dnsenum``` tool.

| DNS Command | Description |
|-------------|-------------------------------------------------------|
|dnsenum -h|Display ```Help``` options|
|dnsenum ```domain.com```|Performs basic DNS enumeration|
|dnsenum --enum ```domain.com```|Performs fast enumeration ```(equivalent to --threads 5 -s 15 -w)```|
|dnsenum -f ```list.txt``` -r <```domain.com```>|Performing hostname and subdomain directory bruteforce using the ```list.txt``` file|
|dnsenum -f list.txt -s 5 -p 5 ```domain.com```|Enumerate using subdomain list,```(list.txt)``` scrap 5 subdomains ```(-s)```, with 5 Google result pages ```(-p)```|
|dnsenum -f ```list.txt``` -o ```result.xml``` ```internews.org```|Enumerate target with subdomain list ```(list.exe)```, generates output in XML format ```-o``` |

###### Variant: Active: DNS Zone Transfer

Anonymous individuals online can request the full list of the hostnames on the organizations domain. Responding to zone requests from anyone on the Internet is comparable to providing an inventory of office locations, pending projects and service providers to anyone who asks. As such, it is not inherently dangerous, but it does require that the organization not rely on the assumption that unpublicized URLs are in fact secret.

An overly permissive domain name service (DNS) provider allows an attacker to enumerate online services that the organization might think are “hidden” because they have not been (intentionally) published. A zone transfer returns all of the hostnames at a particular domain, or “zone.” So, a request for sample.org may return www.sample.org, webmail.sample.org and ftp.sample.org, along with other less obviously guessable targets, such as wordpress-testing.sample.org.

While any user should be able to use a name server to look up a hostname and convert it to the corresponding IP address, most well-administered name servers allow full “zone transfer” requests only from a specific list of authorized locations (often themselves subsidiary name servers).

Determine the authoritative name server(s) for the organization’s primary domain:

```
$ host -t ns sample.org
sample.org name server ns1.something.net.
sample.org name server ns2.something.net.
```

Attempt a zone transfer on that domain, using that name server:

```
$ host -l sample.org ns1.something.net
Using domain server:
Name: ns1.something.net
Address: 256.0.0.1#53
Aliases:

www.sample.org has address 256.0.0.2
mail.sample.org has address 256.0.0.3
webmail.sample.org has address 256.0.0.4
ftp.sample.org has address 256.0.0.5
foo.sample.org has address 256.0.0.6
bar.sample.org has address 256.0.0.7
```


###### Variant: Active: MX Records

MX, or Mail Exchange, records are required to be public for any domain you wish to receive email through. These records can still reveal sensitive information about an organization's hosting set-up and office software in use through further scanning (see Vulnerability Scanning). MX Records can reveal vulnerable mail servers or information about other services hosted internally. Unless other assessments reveals specific vulnerabilities in e-mail services used, there is no specific action to take. If an orgnization is self-hosting email, it may be advisable to suggest outsourcing that if funds permit. While self-hosted email provides more control and potentially security, managing the security of the server is a complex job. Other mail services can provide some level of protection by being a first-pass check for spam and viruses, and (slightly) reducing the visibility of an organizational mail server.

```
root@bt:~# host -t mx sample.org
sample.org mail is handled by 21 mail.sample.org
```

Determine the IP address of the mail server:

```
root@bt:~# host mail.sample.org
mail.sample.org has address 256.0.0.3
```

##### Recommendation

DNS is inherently public information, but we can still do a lot of steps to secure any parts of it which are revealing more private information. Fortinet provides a set of good recommendations:

https://blog.fortinet.com/2016/03/10/10-simple-ways-to-mitigate-dns-based-ddos-attacks

If the site is not protected from DDoS attacks, there are multiple resources which provide not only DDoS protection but additional security against attacks, such as:

  - [Deflect.ca](https://deflect.ca)
  - [Project Galileo by Cloudflare](https://www.cloudflare.com/galileo)
  - [Project Shield by Google](https://projectshield.withgoogle.com/public)


If a zone transfer was successful, (most providers automatically limit anonymous zone transfers), you will need to work with their support team to prevent this, or switch to a different DNS provider. If your organization maintains its own DNS servers, the administrator of those servers should check the zone transfer policies to prevent anonymous transfers.
