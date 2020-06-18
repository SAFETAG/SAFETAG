---
Approach:
- Technical
Authors:
- SAFETAG
Org_size_under:
- 1000
Remote_options:
- with-support
Skills_required:
- sslstrip, traffic monitoring
Time_required_minutes:
- 30
---

#### Insecure Email Connections

##### Summary

A common issue with e-mail services is the lack of proper encryption. Staff should only be allowed to connect to the organization’s mail server using SSL or TLS encryption. 

When a staff member sends or receives email an attacker with access to the same local network can easily and invisibly read, record, or modify all messages in-transit to and from the organization’s mail server.

Even an informed staff member who attempts to configure his email client to require SSL or TLS encryption will be unable to do so because the mail server does not support it.

The adversary could be someone, such as a patron of the Internet cafe where a staff member is working, who just happens to be using the same local network to connect to the Internet. Or, she could work for an organization with privileged access to the relevant network, such as %{organization}’s Internet Service Provider (ISP).

Even an informed staff member who attempts to configure his email client to require SSL or TLS encryption will be unable to do so because the mail server does not support it. For webmail, a staff member who attempts to enter the secure (“https://”;) alternative webmail address when logging in, might be unable to do so, because the Webmail application does not support it.


##### Overview

##### Materials Needed

##### Considerations

##### Walkthrough
If the attacker wishes to observe the victim’s email traffic (most likely because they failed to capture an unencrypted password, which would have allowed them to log in as the victim and read their email directly), they may need to carry out a second, slightly more complex attack, which will also likely provide access to the victims password as well as the content of their email.

To capture outgoing (SMTP) messages, the process is nearly identical to the traffic monitoring exercise.


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

In order to monitor incoming (POP3 or IMAP) messages, the attacker must use other techniques to ensure that responses to the victim actually pass through their machine before they arrive at their intended recipient. The most straightforward tool for this sort of thing is designed to attack Web traffic, but the same techniques works on POP3 and IMAP traffic. (This tool, SSLStrip, was written to facilitate more advanced testing of Web services that do implement encryption, but that do so incorrectly. In any case, it works fine for our purposes here.)

```
$ sslstrip -a -l 12345 -w sslstrip.log
```

The attacker then uses iptables to route a portion of the victim’s traffic (in this case, IMAP traffic destined for port 143) through the SSLStrip tool, which rewrites headers such that responses come to them first, before continuing along to the victim. The attacker then monitors the tool’s output for email messages:

```
$ iptables -t nat -A PREROUTING -p tcp --destination-port 143 –j REDIRECT --to-port 12345
$ tail -f sslstrip.log
```

(For POP3, the attacker would use port 110 instead of port 143, but the attack is otherwise identical.) At this point, the contents of the sslstrip.log file contains a copy of incoming IMAP traffic, including any email messages the victim might read while being observed.

This same technique, with minor modifications, would work to monitor incoming email messages downloaded through Webmail

##### Recommendation

Mandatory (SSL, TLS or HTTPS) encryption on all authenticated services (especially email). This should apply to both direct connections to the email server (e.g. via IMAP, MAPI, SMTP) as well as webmail services.

Those who use Outlook, or some other email client, should only be allowed to connect to the organization’s mail server using SSL or TLS encryption. Attempts to connected without encryption should fail. All staff mail clients should be reconfigured accordingly.

