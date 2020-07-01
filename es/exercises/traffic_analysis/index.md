####Network Traffic Analysis

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

**Step 1:** The attacker tricks the victim into routing all of his traffic through the attacker’s machine. This involves making a simple request to the victim’s IP address, which is not difficult to do. Computers are rarely configured to ignore such requests.

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

In the example above, only a single victim (192.168.1.99) is being targeted, but the attack works fine against multiple victims, or even against the entire network. In other words, the attacker does not need to know which IP address (on the office or Internet cafe LAN, for example) belongs to her target. Furthermore, the victim is extremely unlikely to notice any sign that this phase of the attack is taking place.

EtterCap provides a powerful frontend to managing this process with multiple potential targets.  In EtterCap:

* Under the "Sniff" menu, select "Unified sniffing" (for most cases where you are using one interface to both intercept and forward traffic), and select the relevant interface (wlan0)
* Under the Hosts menu, select the systems on the network you will target, or leave blank to target all systems
* Under Mitm, select "arp spoofing" for this example
* Select "Start" under the Sniffing menu

<Ettercap Screenshot>

**Step 2:** At this point, if the attacker is looking for unencrypted traffic, all she needs to do is launch a packet-sniffer, such as Wireshark, and scan through the intercepted traffic for specific vulnerable information, such as email or website logins, as well as traffic revealing shadow infrastructure usage, such as Dropbox.

<Wireshark screenshot>

##### Recommendation

