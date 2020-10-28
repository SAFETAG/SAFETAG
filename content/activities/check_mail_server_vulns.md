---
title: Insecure Email Connections
approaches:
  - Technical
authors:
  - SAFETAG
remote_options:
  - with-support
skills_required:
  - sslstrip
  - traffic monitoring
skills_trained: []
summary: >+

  A common issue with e-mail services is the lack of proper encryption. Staff
  should only be allowed to connect to the organization’s mail server using SSL
  or TLS encryption. 


  When a staff member sends or receives email an attacker with access to the
  same local network can easily and invisibly read, record, or modify all
  messages in-transit to and from the organization’s mail server.


  Even an informed staff member who attempts to configure his email client to
  require SSL or TLS encryption will be unable to do so because the mail server
  does not support it.


  The adversary could be someone, such as a patron of the Internet cafe where a
  staff member is working, who just happens to be using the same local network
  to connect to the Internet. Or, she could work for an organization with
  privileged access to the relevant network, such as %{organization}’s Internet
  Service Provider (ISP).


  Even an informed staff member who attempts to configure his email client to
  require SSL or TLS encryption will be unable to do so because the mail server
  does not support it. For webmail, a staff member who attempts to enter the
  secure (“https://”;) alternative webmail address when logging in, might be
  unable to do so, because the Webmail application does not support it.

overview: ''
materials_needed: ''
considerations: ''
walk_through: >+
  If the attacker wishes to observe the victim’s email traffic (most likely
  because they failed to capture an unencrypted password, which would have
  allowed them to log in as the victim and read their email directly), they may
  need to carry out a second, slightly more complex attack, which will also
  likely provide access to the victims password as well as the content of their
  email.


  To capture outgoing (SMTP) messages, the process is nearly identical to the
  traffic monitoring exercise.

recommendations: >+

  Mandatory (SSL, TLS or HTTPS) encryption on all authenticated services
  (especially email). This should apply to both direct connections to the email
  server (e.g. via IMAP, MAPI, SMTP) as well as webmail services.


  Those who use Outlook, or some other email client, should only be allowed to
  connect to the organization’s mail server using SSL or TLS encryption.
  Attempts to connected without encryption should fail. All staff mail clients
  should be reconfigured accordingly.

organization_size_under: 1000
time_required_minutes: 30
---

