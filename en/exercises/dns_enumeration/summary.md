
DNS Stands for Domain Name Service. In a nutshell, what it does is translate hosts/computer's name into it's IP addresses. It provides a way to know the IP address of any given machine on the internet, with the corresponding URL, or domain. You can consider it as telephone directory of the Internet.

DNS enumeration is one of your initial steps in your overall vulnerability assessment and audit. It is one stage where it will allow you to discover more potential targets. Upon completion of this assessment stage, you may find issues such as leaked information caused by default settings and server misconfigurations. Along with these, you can also have a broader scope of targets, such as internal server IP addresses, company netblocks and domain/subdomain names.

DNS Enumeration can be accomplished with different number of tools along with different approaches. This guide will discuss some of the approaches and the tools required to perform each of the activities. You can perform DNS enumeration passively or actively, depending on your operational security needs.

**Passive**, or "indirect" approach refers to the enumeration process that doesn't send any traffic or packets from your machine, directly to your target. This can be done using 3rd tools such as online tools and cloud based scanners.

**Active**, or "direct" approach refers to sending DNS queries and enumeration tests directly to the target. Consider that traffic is send over the target which may leave traces or traffic logs coming from your source IP. Active techniques include Zone Transfer, Reverse Lookup, Domain and Host Brute-Forcing, Standard Record Enumeration (wildcard, SOA, MX, A, TXT etc), Cache snooping, and Zone Walking
