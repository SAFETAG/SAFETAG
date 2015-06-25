
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
