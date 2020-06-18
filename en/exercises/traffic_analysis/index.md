---
Approach:
- Technical
Authors:
- SAFETAG
Org_size_under:
- 100
Remote_options:
- with-support
Skills_required:
- Traffic Analysis, Malware Analysis
Time_required_minutes:
- 240
---

#### Network Traffic Analysis

##### Summary

Any content that is sent out over the network without encryption is easy to intercept; this includes email, web passwords, and chat messages.

This attacker could be someone, such as a patron of the Internet cafe where a staff member is working, who just happens to be using the same local network to connect to the Internet. Or, she could work for an organization with privileged access to the relevant network, such as the Internet Service Provider (ISP) of either the sender or receiver and other network-backbone connections made along the way.


##### Overview

* Intercept network traffic
* Review it for security concerns
* Watch for unencrypted email (POP/SMTP/IMAP) connections, unencrypted website logins (for blogs, websites, and webmail in particular)

##### Materials Needed

* Wifi device and drivers supporting "promiscuous mode" (see http://www.aircrack-ng.org/doku.php?id=compatible_cards&DokuWiki=a36042531edb54f9b95a76ff61d77d14)

##### Considerations

* Treat captured network traffic with the utmost security and empathetic
responsibility. They may contain very personal data, passwords, and more. These
should not be shared except in specific, intentional samples with anyone, including
the organization itself.

##### Walkthrough

##### Network Traffic Interception

**Step 1:** The attacker tricks the victim into routing all of their traffic through the attacker’s machine. This involves making a simple request to the victim’s IP address, which is not difficult to do. Computers are rarely configured to ignore such requests.

```
$ sudo sh -c 'echo 1 > /proc/sys/net/ipv4/ip_forward'

$ sudo arpspoof -i wlan0 -t 192.168.1.99 192.168.1.1
```

Sample Output:

```
00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55
00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55
00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55
00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55
...
00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55
```

In the example above, only a single victim (192.168.1.99) is being targeted, but the attack works fine against multiple victims, or even against the entire network. In other words, the attacker does not need to know which IP address (on the office or Internet cafe LAN, for example) belongs to the target. Furthermore, the victim is extremely unlikely to notice any sign that this phase of the attack is taking place.

EtterCap provides a powerful frontend to managing this process with multiple potential targets.  In EtterCap:

* Under the "Sniff" menu, select "Unified sniffing" (for most cases where you are using one interface to both intercept and forward traffic), and select the relevant interface (wlan0)
* Under the Hosts menu, select the systems on the network you will target, or leave blank to target all systems
* Under Mitm, select "arp spoofing" for this example
* Select "Start" under the Sniffing menu

<!-- Ettercap Screenshot -->

**Step 2:** At this point, if the attacker is looking for unencrypted traffic, all the attacker needs to do is launch a packet-sniffer, such as Wireshark, and scan through the intercepted traffic for specific vulnerable information, such as email or website logins, as well as traffic revealing shadow infrastructure usage, such as Dropbox.

Wireshark can also be used to identify malicious traffic.

If you rarely use Wireshark, the output you will see will be a long list of packets, protocols and connections that might be hard to classify. To look into suspicious processes in a clearer way, you can use the "Protocol Hierarchy" option in the Statistics menu A good video to learn how to use this option for this purpose can be found [here](https://www.youtube.com/watch?v=OwQmwbD1uIs).

- If you want to practice with captures of malicious traffic, you can find them in the [Wireshark wiki](https://wiki.wireshark.org/SampleCaptures).

<!-- Wireshark screenshot -->

##### Recommendation

Only use services with ["SSL" encryption](https://securityinabox.org/en/guide/secure-communication) ("HTTPS"), and consider adding [HTTPS Everywhere](https://www.eff.org/https-everywhere) to browsers. This does not itself guarantee protection from all attacks, but it is a good first-step in protecting information (such as passwords or email) in transit from your computer to the service provider.
