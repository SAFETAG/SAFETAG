If the attacker wishes to observe the victim’s email traffic (most likely because they failed to capture an unencrypted password, which would have allowed them to log in as the victim and read their email directly), they may need to carry out a second, slightly more complex attack, which will also likely provide access to the victims password as well as the content of their email.

To capture outgoing (SMTP) messages, the process is nearly identical to the traffic monitoring exercise.

!INCLUDE "../traffic_analysis/instructions.md"

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
