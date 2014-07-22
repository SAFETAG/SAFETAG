---
type: ADIDS
id: audit-external-services-mail-unencrypted-password-instructions-web
...

The attack log below demonstrates the ease with which <SafetagSubject> staff members’ passwords can be stolen as they sign in to the IMAP or POP3 servers. If the attacker is within the local network, she can target all email users in one go. If not, she can only attack users who are connecting to email from outside the office, and she must have access to the same network as the victim in order to do so. This could be at the victim’s home, an Internet cafe, an airport, etc.

The core vulnerability, here, is the lack of support for encryption during authentication to, or utilization of, the mailservers administered by the organization’s third-party email provider. An attacker would follow the following steps to carry out this attack.
Description

Step 1: The attacker can confirm that the vulnerability is present, using any email client, as long as she knows the organization’s email domain:

<Thunderbird screenshot>

Figure 1: Thunderbird displaying a vulnerable mailserver

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

Step 3: At this point, if the attacker is looking for staff email passwords, all she needs to do is launch a packet-sniffer, such as Wireshark, and scan through the POP3, IMAP or SMTP traffic for a password, which will appear as soon as the victim checks his email (or when Outlook performs an automatic refresh):

<wireshark screenshot>

Figure 2: Wireshark displaying a victim’s password

The Webmail version of this attack is nearly identical, though the Wireshark packet capture would look slightly different.
