---
title: MX Records
short_summary: Identify details on organizational e-mail services
---

MX, or Mail Exchange, records are required to be public for any domain you wish to receive email through. These records can still reveal sensitive information about an organization's hosting set-up and office software in use through further scanning (see [Vulnerability Scanning](https://safetag.org/activities/vulnerability_scanning)). MX Records can reveal vulnerable mail servers or information about other services hosted internally. Unless other assessments reveals specific vulnerabilities in e-mail services used, there is no specific action to take. If an orgnization is self-hosting email, it may be advisable to suggest outsourcing that if funds permit. While self-hosted email provides more control and potentially security, managing the security of the server is a complex job. Other mail services can provide some level of protection by being a first-pass check for spam and viruses, and (slightly) reducing the visibility of an organizational mail server.

```
root@bt:~# host -t mx example.com
example.com mail is handled by 21 mail.example.com
```

Determine the IP address of the mail server:

```
root@bt:~# host mail.example.com
mail.example.com has address 256.0.0.3
```

Online tools are also available to lookup MX records, for instance [MX Toolbox](https://mxtoolbox.com/)
