
####Mail Exchange Record Search

##### Summary
MX, or Mail Exchange, records are required to be public for any domain you wish to receive email through. These records can still reveal sensitive information about your hosting set-up.

MX Records can reveal vulnerable mail servers or information about other services hosted internally.

##### Overview

* Determine an organization's email services.
* Explore any potential vulnerabilities.

##### Materials Needed 

##### Considerations

##### Walkthrough


MX Record research reveals self-hosted email server at SampleOrg’s offices:

mail.sample.org has address 256.0.0.3

Determine the authoritative name server(s) for the organization’s 

primary domain:

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

No fix needed

Unless other assessments reveals specific vulnerabilities in e-mail services used, there is no action to take. Unless you have sufficient in-house expertise, it is often recommended to not host email servers. While self-hosted email provides more control and potentially security, managing the security of the server is a complex job. Other mail services, such as MailControl or Postini, also can provide some level of protection by being a first-pass check for spam and viruses, and (slightly) reducing the visibility of your organizational mail server.


