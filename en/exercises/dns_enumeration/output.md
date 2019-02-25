* A fuller map of the organization's online presence, including additional (potentially forgotten) hosts/services connected with the organization.
  *Domains + IP addresses
  * Subdomains + IP addresses
  * MX Records + IP addresses
  * DNSKeys
  * SOA records, DNS records and registrar
  * Domains hosted within the same IP address
  * DNS history Records
  * Domain Reputation (Web of Trust)
* Some of this information may already give you an idea of how your target's infrastructure setup. For example, you may see if the target domain goes into a CDN (Content Delivery Network) or sometimes DDoS mitigations services by finding out it's NS records. You can also identify if the target's MX records are behind a DLP (Data Leakage Prevention) systems.
* The output of your DNS enumeration might contain "more" information about the client organization (internal DNS records, hostnames, router names, additional IP addresses). This data is sometimes caused by misconfigured DNS or default service configurations, so look for misleading and false-positive results.
