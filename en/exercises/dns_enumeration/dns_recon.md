DNS enumeration with DNSrecon:

Below are some of the types of DNS Enumeration. Some of these are considered “intrusive” thus requires discussion with your target organization.

Zone Transfer
Reverse Lookup
Domain and Host Brute-Force 
Standard Record Enumeration (wildcard, SOA, MX, A, TXT etc)
Cache snooping
Zone Walking
Google Lookup


DNSrecon

DNSrecon (available in Kali 2017 Release) is a powerful DNS enumeration script that can help and auditor in gathering information during the recon stage. This tool checks all NS records for Zone transfers, enumerate general DNS records for a given domain (MX, SOA, NS, A, AAAA, SPF and TXT). Performs SRV record enumeration and TLD (Top Level Domain) Expansion to name some.

In performing basic DNS enumeration using DNSrecon, follow these simple guides that can help you generate information which you can use in the validation phase (pentesting) of your assessment project.


Perform basic DNS enumeration on target:

	dnsrecon -d <target domain>

Perform DNS Zone Transfer enumeration:
	
	dnsrecon -d <target.domain> -a
	dnsrecon -d <target.domain> -t axfr

Perform Reverse Lookup

	dnrecon -r <start-IP-to-end-IP>

Domain Brute-Force

	dnsrecon -d <target.domain> -D <namelist> -t brt

Cache Snooping

	dnsrecon -t snoop -n Sever -D <Dictionary>

Zone Walking:

	dnsrecon -d <target.domain> -t zonewalk
