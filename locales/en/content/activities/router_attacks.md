---
title: Router Based Attacks
approaches:
  - Technical
authors:
  - SAFETAG
remote_options:
  - with-support
skills_required:
  - Networking
skills_trained: []
summary: >

  Many wireless routers still use the default password listed in [“Router
  Default Password Search”](http://www.routerpasswords.com/), meaning that
  anyone with access to the network could also take complete control of the
  router - adding in remote access tools or setting up other attacks.
overview: |2

    * Find the router(s) (``route`` works well for this)
    * Test using default passwords
    * Check for upgrades / un-patched vulnerabilities and backdoors
    * Investigate potentially valuable data (logs, connected users)
materials_needed: ''
considerations: ''
walk_through: ''
recommendations: >-

  **Change Default Router Passwords**


  Passwords - particularly on core network devices - is very important.  Use a
  password manager to save the new password (or be prepared to reset the router
  to a factory default).


  While nominally "inside the firewall" and protected from remote attacks,
  leaving routers with default passwords, particularly wireless routers whose
  networks are often shared with visitors, is a potentially very high risk for
  an organization.  Anyone who has gained access to the network via legitimate
  or other means could subtly alter the router's configuration to provide remote
  access, or route traffic to an attacker-designated server.  Such changes can
  easily go undetected for long periods of time.


  A common fear is forgetting the new router password.  A password management
  system is an obvious solution, but if the router is in a secure location, even
  a stickie note would be better than the default password.
organization_size_under: 100
time_required_minutes: 15
---

