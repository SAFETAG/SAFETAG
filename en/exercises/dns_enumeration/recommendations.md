
DNS is inherently public information, but we can still do a lot of steps to secure any parts of it which are revealing more private information. Fortinet provides a set of good recommendations:

https://blog.fortinet.com/2016/03/10/10-simple-ways-to-mitigate-dns-based-ddos-attacks

If a zone transfer was successful, (most providers automatically limit anonymous zone transfers), you will need to work with their support team to prevent this, or switch to a different DNS provider. If your organization maintains its own DNS servers, the administrator of those servers should check the zone transfer policies to prevent anonymous transfers.
