---
type: ADIDS
id: audit-external-services-mail-unencrypted-password-instructions-web
...

The attack log below demonstrates the ease with which SampleOrg staff members’ passwords can be stolen as they sign in to Webmail. If the attacker is within the local network, she can target all Webmail users in one go. If not, she can only attack users who are connecting to Webmail from outside the office, and she must have access to the same network as the victim in order to do so. This could be at the victim’s home, an Internet cafe, an airport, etc.

The core vulnerability, here, is the lack of support for encryption during authentication to, or utilization of, the organization’s Webmail service. An attacker would follow the following steps to carry out this attack.

Step 1: As long a she knows the organization’s Webmail address, the attacker can confirm that the vulnerability is present simply by checking that service’s sign in form does not submit to an HTTPS address:

<Browser screenshot: non-HTTPS Webmail sign-in page>

<HTML "source" screenshot: non-HTTPS value of form tag "action=" attribute>

Figure 1: Browser displaying a vulnerable Webmail sign-in page

Step 2: The attacker then tricks the victim into routing all of his traffic through the attacker’s machine. This involves making a simple request to the victim’s IP address, which is not difficult to do. Computers are rarely configured to ignore such requests.

$ sudo sh -c 'echo 1 > /proc/sys/net/ipv4/ip_forward'
$ sudo arpspoof -i wlan0 -t 192.168.1.99 192.168.1.1

00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55
00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55
00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55
00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55
...
00:11:22:33:44:55 aa:bb:cc:dd:ee:ff 0806 42: arp reply 192.168.1.1 is-at 00:11:22:33:44:55

In the example above, only a single victim (192.168.1.99) is being targeted, but the attack works fine against multiple victims, or even against the entire network. In other words, the attacker does not need to know which IP address (on the office or Internet cafe LAN, for example) belongs to her target. Furthermore, the victim is extremely unlikely to notice any sign that this phase of the attack is taking place.

Step 3: At this point, if the attacker is looking for staff email passwords, all she needs to do is launch a packet-sniffer, such as Wireshark, and scan through the HTTP traffic for a password, which will appear as soon as the victim checks his email:

<wireshark screenshot>

Figure 2: Wireshark displaying a victim’s password

The version of this attack for users of Outlook (or other email clients) is nearly identical, though the Wireshark packet capture would look slightly different.
