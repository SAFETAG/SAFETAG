**DNS reconnaissance using 3rd party applications and Online Tools**

Using 3rd party and online tools can help an auditor/tester in avoiding his/her machine to generate logs on the target's end. In cases where the target, or partner organization who requests for an audit/assessment has some security devices in place (IDS/IPS, Firewall etc.) Generating logs from your machine/network may result sometimes in our traffic getting blocked due to "automatic blocking" features in these security devices/appliances.

**Requirements**
  - Stable internet connection
  - Any browser with the latest update version 
  - Target domain
  - Wordpad/notepad utility or any application for documentation (Keepnote in Kali)
  
Under the ```Approach``` document, you can see a list of DNS recon tools both passive and active. On this guide, we will only focus on the **Passive** tools.

  - [Robtex](https://www.robtex.com)
  - [DNSDumpster](https://dnsdumpster.com)
  - [CentralOps Domain Dossier](https://centralops.net/co/DomainDossier.aspx)
  - [DNSSEC analyzer](http://dnssec-debugger.verisignlabs.com)
  - [IntoDNS](https://intodns.com)
  - [YougetSignal Reverse IP Domain Check](https://www.yougetsignal.com/tools/web-sites-on-web-server)

*(NOTE: It is important that we verify that we have the correct target domain before proceeding with any of the scans/audits/assessments exercises within SAFETAG Framework. The last thing we wouldn't want to happen is to scan and enumerate target which is out of scope!)*

At first, the results maybe overwhelming, specially if you are going to run all these tools against your target. The next question is what are the things that we need to look for? and to take not of?

**Documentation**

Documentation plays a great part in an effective reconnassaince. The better your documentation is, the easier for you to scope your target's infrastructure, and plan your attack effeciently. Kali has a built-in documentation application called "Keepnote". Getting yourself familiar with the application is highly recommended.

**What to Document?**
 
These online tools can generate a huge amount of information:

 - Domains + IP addresses
 - Subdomains + IP addresses
 - MX Records + IP addresses
 - DNSKeys
 - SOA records, DNS records and registrar
 - Domains hosted within the same IP address
 - DNS history Records
 - Domain Reputation (Web of Trust)
 
Some of this information may already give you an idea of how your target's infrastructure setup. For example, you may see if the target domain goes into a CDN (Content Delivery Network) or sometimes DDoS mitigations services by finding out it's NS records. You can also identify if the target's MX records are behind a DLP (Data Leakage Prevention) systems.
