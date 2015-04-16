

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
