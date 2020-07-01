
####Anonymous DNS Zone Transfer

##### Summary

Anonymous individuals online can request the full list of the hostnames on the organizations domain. Responding to zone requests from anyone on the Internet is comparable to providing an inventory of office locations, pending projects and service providers to anyone who asks. As such, it is not inherently dangerous, but it does require that the organization not rely on the assumption that unpublicized URLs are in fact secret.

An overly permissive domain name service (DNS) provider allows an attacker to enumerate online services that the organization might think are “hidden” because they have not been (intentionally) published. A zone transfer returns all of the hostnames at a particular domain, or “zone.” So, a request for sample.org may return www.sample.org, webmail.sample.org and ftp.sample.org, along with other less obviously guessable targets, such as wordpress-testing.sample.org.

While any user should be able to use a name server to look up a hostname and convert it to the corresponding IP address, most well-administered name servers allow full “zone transfer” requests only from a specific list of authorized locations (often themselves subsidiary name servers). 

##### Overview

##### Materials Needed 

##### Considerations

##### Walkthrough

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

##### Recommendation

**Eliminate or limit zone transfer permissions**

The DNS provider for sample.org allows anonymous DNS zone transfers, revealing subdomain information

An anonymous zone transfer request revealed the following subdomains:

```
www.sample.org has address 256.0.0.2
mail.sample.org has address 256.0.0.3
webmail.sample.org has address 256.0.0.4
ftp.sample.org has address 256.0.0.5
foo.sample.org has address 256.0.0.6
```

In most cases, the DNS Zone Transfer policies will be set by your domain name provider; and most providers automatically limit anonymous zone transfers. If yours does not, you will need to work with their support team to prevent this, or switch to a different DNS provider.

If your organization maintains its own DNS servers, the administrator of those servers should check the zone transfer policies to prevent anonymous transfers.

