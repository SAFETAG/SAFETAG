---
title: DNS Zone Transfer
short_summary: Extract a domain's hostnames
---
Anonymous individuals online can request the full list of the hostnames on the organizations domain. Responding to zone requests from anyone on the Internet is comparable to providing an inventory of office locations, pending projects and service providers to anyone who asks. As such, it is not inherently dangerous, but it does require that the organization not rely on the assumption that unpublicized URLs are in fact secret.

An overly permissive domain name service (DNS) provider allows an attacker to enumerate online services that the organization might think are “hidden” because they have not been (intentionally) published. A zone transfer returns all of the hostnames at a particular domain, or “zone.” So, a request for example.com may return www.example.com, webmail.example.com and ftp.example.com, along with other less obviously guessable targets, such as wordpress-testing.example.com.

While any user should be able to use a name server to look up a hostname and convert it to the corresponding IP address, most well-administered name servers allow full “zone transfer” requests only from a specific list of authorized locations (often themselves subsidiary name servers).

Determine the authoritative name server(s) for the organization’s primary domain:

```
$ host -t ns example.com
example.com name server ns1.something.net.
example.com name server ns2.something.net.
```

Attempt a zone transfer on that domain, using that name server:

```
$ host -l example.com ns1.something.net
Using domain server:
Name: ns1.something.net
Address: 256.0.0.1#53
Aliases:

www.example.com has address 256.0.0.2
mail.example.com has address 256.0.0.3
webmail.example.com has address 256.0.0.4
ftp.example.com has address 256.0.0.5
foo.example.com has address 256.0.0.6
bar.example.com has address 256.0.0.7
```

If the zone transfer is successful, this is a finding to include in your report as well as an associated recommendation to reconfigure their DNS service to now allow public zone transfers. You may also use the information obtained as part of your OSINT work, investigating the assets disclosed.