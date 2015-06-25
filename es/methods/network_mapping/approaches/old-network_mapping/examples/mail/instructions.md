
#### Walkthrough 
If the attacker wishes to observe the victim’s email traffic (most likely because she failed to capture an unencrypted password, which would have allowed her to log in as the victim himself and read his email directly), she may need to carry out a second, slightly more complex attack.

To capture outgoing (SMTP) messages, the attack is nearly identical to the password attack described above.

!INCLUDE "../traffic_monitoring/instructions.md"

**Step 3:** In order to monitor incoming (POP3 or IMAP) messages, the attacker must use other technique to ensure that responses to the victim actually pass through her machine before they arrive at their intended recipient. The most straightforward tool for this sort of thing is designed to attack Web traffic, but the same techniques works on POP3 and IMAP traffic. (This tool, SSLStrip, was written to facilitate more advanced testing of Web services that do implement encryption, but that do so incorrectly. In any case, it works fine for our purposes here.)

``$ sslstrip -a -l 12345 -w sslstrip.log

**Step 4:** The attacker then uses iptables to route a portion of the victim’s traffic (in this case, IMAP traffic destined for port 143) through the SSLStrip tool, which rewrites headers such that responses come to her first, before continuing along to the victim. She then monitors the tool’s output for email messages:

``$ iptables -t nat -A PREROUTING -p tcp --destination-port 143 –j REDIRECT --to-port 12345
``$ tail -f sslstrip.log

(For POP3, the attacker would use port 110 instead of port 143, but the attack is otherwise identical.) At this point, the contents of the sslstrip.log file contains a copy of incoming IMAP traffic, including any email messages the victim might read while he is being observed.

This same technique, with minor modifications, would work to monitor incoming email messages downloaded through Webmail
