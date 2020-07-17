---
Authors:
- SAFETAG
Info_provided:
- unknown
Info_required:
- unknown
---

## Network Mapping

### Summary


This component allows the auditor to identify security issues with the host's network and map the devices on a host's network, the services that are being used by those devices, and any protections in place.

### Purpose

Mapping an organization's network exposes the multitude of devices connected to it -- including mostly forgotten servers -- and provides the baseline for later work on device assessment and vulnerability research.

This process also reveals outside service usage (such as google services, dropbox, or others) which serve -- intentionally or not -- as shadow infrastructure for the organization. In combination with beacon research from the *Monitor Open Wireless Traffic* exercise, many devices can be associated with users.

### The Flow Of Information

![Network Mapping Information Flow](images/info_flows/network_mapping.svg)

### Guiding Questions


* What operating systems, and services being hosted or used by an organization? Are any hosts running unusual, custom, or outdated operating systems and services?
* Are there unexpected/unusual devices or services on the network?
* What is the topology of the network? What are the routers and modems 
managing it?
* What services (e.g. dropbox, web-mail, etc.) are running on the network that have not been mentioned by the organizational staff?
* What network assets does an attacker have access to once they have gained access to the internal network?



