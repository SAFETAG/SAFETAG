#### Walkthrough

The attack log below demonstrates the ease with which staff members’ passwords can be stolen as they sign in to online services such as email. If the attacker is within the local network, she can target all email users in one go. If not, she can only attack users who are connecting to email from outside the office, and she must have access to the same network as the victim in order to do so. This could be at the victim’s home, an Internet cafe, an airport, etc., or via the ISP.

The core vulnerability, here, is the lack of support for encryption during authentication to, or utilization of, the servers administered by the organization’s third-party email/webmail provider. An attacker would follow the following steps to carry out this attack.

Step 1: The attacker can confirm that the vulnerability is present, using any email client, as long as she knows the organization’s email domain:

<Thunderbird screenshot>

Figure 1: Thunderbird displaying a vulnerable mailserver

For webmail services, as long as the attacker knows the organization’s webmail address (often discoverable through domain enumeration tools such as *recon-ng*, the attacker can confirm that the vulnerability is present simply by checking that service’s sign in form does not submit to an HTTPS address:

<Browser screenshot: non-HTTPS Webmail sign-in page>

<HTML "source" screenshot: non-HTTPS value of form tag "action=" attribute>

Figure 1: Browser displaying a vulnerable Webmail sign-in page


!INCLUDE "../traffic_monitoring/instructions.md"

Step 3: At this point, if the attacker is looking for staff email passwords, all she needs to do is launch a packet-sniffer, such as Wireshark, and scan through the POP3, IMAP or SMTP traffic for a password, which will appear as soon as the victim checks his email (or when Outlook performs an automatic refresh):

<wireshark screenshot>

Figure 2: Wireshark displaying a victim’s password

The Webmail version of this attack is nearly identical, though the Wireshark packet capture would look slightly different.
