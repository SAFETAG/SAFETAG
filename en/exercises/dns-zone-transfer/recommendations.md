
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

