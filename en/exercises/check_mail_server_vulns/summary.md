
### Vulnerability: Unencryped Email connections

A common issue with e-mail services is the lack of proper encryption. Staff should only be allowed to connect to the organization’s mail server using SSL or TLS encryption. 

When a staff member sends or receives email an attacker with access to the same local network can easily and invisibly read, record, or modify all messages in-transit to and from the organization’s mail server.

Even an informed staff member who attempts to configure his email client to require SSL or TLS encryption will be unable to do so because the mail server does not support it.

The adversary could be someone, such as a patron of the Internet cafe where a staff member is working, who just happens to be using the same local network to connect to the Internet. Or, she could work for an organization with privileged access to the relevant network, such as %{organization}’s Internet Service Provider (ISP).

Even an informed staff member who attempts to configure his email client to require SSL or TLS encryption will be unable to do so because the mail server does not support it. For webmail, a staff member who attempts to enter the secure (“https://”;) alternative webmail address when logging in, might be unable to do so, because the Webmail application does not support it.

