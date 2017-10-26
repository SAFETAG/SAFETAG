###### DNS Enumeration Summary

DNS Stands for Domain Name Service. In a nutshell, what it does is translate hosts/computer's name into it's IP addresses. It provides a way to know the IP address of any given machine on the internet, consider it as telephone directory of the Internet.

Recursive and Iterative DNS Queries:

In Recursive DNS query, the client needs an answer from the DNS server - either it can answer the query or give an error  message saying it can't find what it's looking for. The queried host/server must do whatever it takes to find the answer - even to query other servers until it gets an information, otherwise it will fail.

In Iterative way, it basically asks the server for an answer IF, the server knows it. If not, it will get a "referral" which is the name of the server that may  have the answer (an authoritative server at a lower level in the hierchical structure. (example image).

DNS enumeration is one of your initial steps in your overall vulnerability assessment and audit. It is one stage where it will allow you to discover more potential targets. Upon completion of this assessment stage, you may find issues such as leaked information caused by default settings and server misconfigurations. Along with these, you can also have a broader scope of targets, such as internal server IP addresses, company netblocks and domain/subdomain names. 





