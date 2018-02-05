
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
