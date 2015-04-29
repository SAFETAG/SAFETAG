---
type: ADIDS
id: audit-external-services-mail-unencrypted-messages-instructions-web
...

Step 2: At this point, if the attacker is looking for outgoing Webmail, all she needs to do is launch a packet-sniffer, such as Wireshark, and scan through the Web traffic for email messages, which will appear as soon as they are sent:

<wireshark screenshot>

Figure 1: Wireshark displaying a Webmail message sent by the victim

Step 3: In order to monitor incoming Webmail messages, the attacker must use some technique to ensure that responses to the victim actually pass through the attacker’s machine before they arrive. The second option does a better job of preventing others on the network from noticing that something unusual is happening. The most straightforward tool for this sort of thing, SSLStrip, was written to facilitate more advanced testing of Web services that do implement encryption, but that do so incorrectly. In any case, it works fine for our purposes as well.

$ sslstrip -a -l 12345 -w sslstrip.log

Step 4: After the arpspoof step above, the attacker uses iptables to route a portion of the victim’s traffic (in this case, Web traffic destined for port 80) through the SSLStrip tool, which rewrites headers such that responses come to her first, before continuing along to the victim. She then monitors the tool’s output for incoming Webmail messages:

$ iptables -t nat -A PREROUTING -p tcp --destination-port 80 –j REDIRECT --to-port 12345
$ tail -f sslstrip.log

At this point, the contents of the sslstrip.log file contains a copy of incoming Web traffic, including any Webmail messages the victim might read.

<message snippet from sslstrip.log>

Figure 2: Attacker viewing an incoming email message intended for the victim

Again, this same technique, with minor modifications, would work to monitor incoming email messages downloaded through POP3 or IMAP by Microsoft Outlook or some other email client.

