
Anonymous individuals online can request the full list of the hostnames on the organizations domain. Responding to zone requests from anyone on the Internet is comparable to providing an inventory of office locations, pending projects and service providers to anyone who asks. As such, it is not inherently dangerous, but it does require that the organization not rely on the assumption that unpublicized URLs are in fact secret.

An overly permissive domain name service (DNS) provider allows an attacker to enumerate online services that the organization might think are “hidden” because they have not been (intentionally) published. A zone transfer returns all of the hostnames at a particular domain, or “zone.” So, a request for sample.org may return www.sample.org, webmail.sample.org and ftp.sample.org, along with other less obviously guessable targets, such as wordpress-testing.sample.org.

While any user should be able to use a name server to look up a hostname and convert it to the corresponding IP address, most well-administered name servers allow full “zone transfer” requests only from a specific list of authorized locations (often themselves subsidiary name servers). 
