---
Approach:
- Technical
Authors:
- SAFETAG
Org_size_under:
- 1000
Remote_options:
- None
Skills_required:
- password cracking, wireless network monitoring
Time_required_minutes:
- 240
---

#### Network Access

#### Summary
This activity helps auditors to test the strength of defenses the organizations' network has in place to protect their local area network.
This component consists of gaining access to the local area network through a wireless access point and unsecured physical channels (such as an ethernet jack).

#### Overview

  * Determine the security of the wireless access point (WAP).
  * Gain access to the organizations Wireless network access.
  * Test unused ethernet ports for live network connectivity.
  * Find out how guest access is managed

**Expected Outputs**

  * Un-authorized access to the Wireless access point (WAP)
  * List of unused ethernet jacks with network connectivity.


*Note*:
Cracking wireless passwords often take a huge amount of time performing, and the same results for the audit and organizational buy-in can be had simply by showing how password cracking works, and how far outside of the office the wireless network can be seen. Once an organization is using vulnerable authentication method, you can flag it right away as "finding". Given that the recommendations are often the same (move to WPA2 (and WPA3 as available), disable WEP and WPS access, provide a separate guest network, etc.), this should rarely be used during an audit (but is a useful skill to practice and understand how it works). If you do choose to use this during an audit, be aware that many of the stps disrupt network traffic, and success with WPA2 password cracking is by no means guaranteed, so can backfire.

By walking organizations through the vulnerabilities of wireless networks, you have the opportunity to discuss password strength, and the power that having "offline" access to a password means in terms of brute forcing it, as well as the importance of defense in depth even within their trusted work network - reducing the services computers and servers are sharing, setting up local firewalls on computers, and requiring authentication to access files.

Even a few minutes of network "sniffing" by an adversary can enable them to work offline to reveal the network password.  Knowing this password would let someone then access the entire internal network, files shared internally, and even change network settings to enable remote access.  While in an ideal setup, this would give no further access to sensitive documents, it is not uncommon to find shared file folders, or to gain access to the firewall or network routers (often set to the default password, because they're only accessible from inside the network...).



#### Considerations

*Note:* This section is one of the few sections where the SAFETAG audit does go through attack scenarios, from attempting to "break in" to the wireless network to testing exposed ethernet jacks for connectivity.

The reasons for this are threefold.  First, access to an organization's internal network tends to reveal sensitive data and "shadow" infrastructures (such as dropbox usage) that lead to many recommendations to improve access control and discussions of the value of defense in depth.  Second, the specific act of breaking the wifi password allows for a discussion on password security without attacking any specific user's password. Finally, with wireless networks treated as equivalent to wired networks in many offices, reminding the organization that wireless networks extend beyond the physical walls of the office is useful in discussing password rotation and guest network policies.

Once you have access to the network, you need to first document how you managed that and share it with the hosts.  This is a great moment to discuss passwords in many cases.

  * Confirm that all devices you are accessing/scanning belong to the organization.
  * Clarify timing and seek permission with staff - some activities can tax the network or cause disruptions.



#### Walkthrough
Breaking into network requires specialized tools as well as a significant amount of time in capturing authentication packets, and replaying those packets back to the wireless access point.

MAC filtering is a common, but easy to bypass security measure.

WEP (Wired Equivalent Privacy) has been found with several vulnerabilities. The RC4 algorithm that it uses to generate the keystream for encryption is subject to [two separate weaknesses](https://pdfs.semanticscholar.org/8aeb/2a27abc2a1d0a8b71047606fbeec0f711e03.pdf).

On the other hand, WPA/WPA2 (Wi-Fi Protected Access) is also found to be vulnerable to attack known as [KRACK](https://www.krackattacks.com/)(Key Reinstallation Attacks) as well as offline (high speed) attacks against the password itself. WPS, a common "feature" that is on by default on WPA networks, has significant vulnerabilities.

[WPA3](https://www.schneier.com/blog/archives/2018/07/wpa3.html), a new standard, is built to disallow offline password attacks, making it significantly harder to break in to that WPA2 networks. As it becomes available and devices support it, it should be a priority upgrade if wifi network security is a concern.

___

###### Variant: WEP Cracking

The auditor can be guaranteed to access a WEP network with sufficient time by cracking the WEP key.

  * Start the wireless interface in monitor mode on the specific AP channel
  * Use aireplay-ng to do a fake authentication with the access point
  * Start airodump-ng on AP channel with a bssid filter to collect the new unique IVs
  * Start aireplay-ng in ARP request replay mode to inject packets
  * Run aircrack-ng to crack key using the IVs collected

**References**

For educational purposes, if no WEP network is available, you can use [this](http://download.aircrack-ng.org/wiki-files/other/test.ivs) pre-built airodump-ng capture file and skip the airodump-ng and aireplay-ng packet injection steps.

  * *Tutorial:* [“Simple WEP Crack”](http://www.aircrack-ng.org/doku.php?id=simple_wep_crack) (Aircrack-ng Wiki)
  * *Tutorial:* [“Simple Wep Cracking with a flowchart”](http://www.aircrack-ng.org/doku.php?id=flowchart) (Aircrack-ng Wiki)
  * *Documentation:* [“Aircrack-ng”](http://www.aircrack-ng.org/doku.php?id=aircrack-ng)  (Aircrack-ng Wiki)
  * *Documentation:* [“Aireplay-ng”](http://www.aircrack-ng.org/doku.php?id=aireplay-ng) (Aircrack-ng Wiki)
  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)

___

###### Variant: MAC Filtering Bypass


Open and MAC-address-filtered wireless access points are not only open to anyone within range to join and listen in to, but also do not provide protection to those on the network itself, even if they do not "broadcast" their name.  These may seem like great ways to prevent unauthorized users from accessing your network without resorting to passwords, but they are trivial to overcome.

**Auditing MAC address filtered access point**

The auditor can easily gain access to an open or MAC address filtered access point.

  * MAC-Address Spoofing
    * Start the wireless interface in monitor mode
    * Identify MAC addresses that are on the whitelist

```bash
airodump-ng
```
    * Change our MAC address to one that’s on the whitelist

```bash
ifconfig mon0 down
macchanger -m [MAC ADDRESS IDENTIFIED] mon0
ifconfig mon0 up
```

**References**

  * *Tutorial:* [“Bypassing MAC Filters on WiFi Networks”](http://blog.techorganic.com/2010/12/21/bypassing-mac-filters-on-wifi-networks/) (techorganic.com)

___

###### Variant: WPA Cracking


The organization’s wireless Local Area Network (WLAN) protects the network and its users with WPA encryption. This is an important security measure, and a WPA-protected wireless network is much safer than an unencrypted “open” network or a WEP-protected network. (WEP is fundamentally flawed, and extremely simple attacks have been widely known for over a decade.) However, the ease with an attacker could guess the WPA key, or “WiFi password,” is a serious issue, particularly considering its importance as an essential perimeter control. An attacker who gains access to the wireless LAN immediately bypasses many protections that network administrators, and other users of the office network, often take for granted. Put another way, anyone able to guess the WPA key is immediately “inside the firewall.”

Using a laptop and a wireless card with a standard, internal antenna (or using a customized smartphone or other small device), an attacker could easily position themselves close enough to the office to carry out the first phase of this attack, which would only take a few minutes. The second phase, which is supposed to be the difficult part, could take even less time. From the privacy of their own home or office, the attacker could use a minimally customized password dictionary to guess the WPA key .

<!--For reporting, needs time-to-break WPA password -->

**Materials Needed**

* For the (most common) WPA password-based attacks, an already-prepared dictionary of words to use to attack the password will be required. See the Password Strength activity for guidance on dictionary preparation.

**Instructions**

An attacker can crack the office’s WPA key in approximately with a short and minimally customized password dictionary based on open information about the organization and basic word collections.

**Step 1:** The attacker customizes their WiFi password dictionary, adding phrases related to the subject: organization name, street address, phone number, email domain, wireless network name, etc. Common password fragments are included, as well: qwerty, 12345, asdf and all four-digit dates back to the year 2001, for example, among others. The attacker may then add hundreds or thousands of words (in English and/or other relevant languages).

See the Password Strength exercise for details on password dictionary buidling and usage.

**Step 2:** The attacker would then begin recording all (encrypted) wireless traffic associated with the organization’s access point:

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

wifite is also useful for this step, and claims to automatically de-auth (step 3).

**Step 3:** Next, the auditor forces a wireless client, possibly chosen at random, to disconnect and reconnect (an operation that is nearly always invisible to the user).

In the example below, AB:CD:EF:AB:CD:EF is the MAC address of a laptop that was briefly disconnected in this way.

```
$ aireplay-ng -0 1 -a 1A:2B:3C:4D:5E:6F -c AB:CD:EF:AB:CD:EF mon0

 15:54:48  Waiting for beacon frame (BSSID: 1A:2B:3C:4D:5E:6F) on channel -1
 15:54:49  Sending 64 directed DeAuth. STMAC: [AB:CD:EF:AB:CD:EF] [ 5| 3 ACKs]
```

The goal of this step is to capture the cryptographic handshake that occurs when the targeted client reconnects. Try using different clients if the first one doesn't work, or try (physically) moving around.

This handshake does not contain the WPA key itself, but once the the complete handshake process has been seen, the auditor (or a potential attacker) can leave the vicinity and run various password cracking tools to try and discover the password. While a complete password cracking tutorial is out of scope for SAFETAG documentation, below are three strategies:

**Step 4:** The auditor attempts to discover the WPA password.

A good wordlist with a few tweaks tends to break an unforunate number of passwords.  Using a collection of all english words, all words from the language of the organization being audited, plus a combination of all these words, plus relevant keywords, addresses, and years tends to crack most wifi passwords.

```bash
    $ aircrack-ng -w pwdpairs.txt -b 1A:2B:3C:4D:5E:6F sampleorg_airodump*.cap
```

For WPA captures, John can either feed in to an aircrack process or attack a capture directly.  For captures, you first have to convert the .cap file (from wireshark, wifite, airodump, etc.) to a format that John likes.  The Jumbo version we use has conversion tools for this available:

```bash
  $wpapcap2john wpa.cap > crackme
  $./john -w:password.lst -fo=wpapsk-cuda crackme
```

**Results**

Successful password cracking via piping these into aircrack-ng:

```
 Opening sampleorg_airodump-01.cap
 Reading packets, please wait...
                                 Aircrack-ng 1.1
                    [00:00:05] 9123 keys tested (1876.54 k/s)
                           KEY FOUND! [ sample2012 ]

      Master Key     : 2A 7C B1 92 C4 61 A9 F6 7F 98 6B C1 AB 53 7A 0F
                       3C AF D7 9A 0C BD F0 4B A2 44 EE 5B 13 94 12 12

      Transient Key  : A9 C8 AD 47 F9 71 2A C6 55 F8 F0 73 FB 9A E6 1D
                       23 D9 31 25 5D B1 CF EA 99 2C B3 D7 E5 7F 91 2D
                       56 25 D5 9A 1F AD C5 02 E3 2C C9 ED 74 55 BA 94
                       D6 F5 0A D1 3B FB 39 40 19 C9 BA 65 2E 49 3D 14

      EAPOL HMAC     : F1 DF 09 C4 5A 96 0B AD 83 DD F9 07 4E FA 19 74
```

The fourth line of the above output provides some useful information about the effectiveness of a strong WPA key. That rate of approximately 2000 keys per second means that a full-on, brute-force attack against a similar-length key that was truly random (and therefore immune to dictionary-based attacks) would take about 70^9 or 20 trillion seconds, which is well over 600,000 years. Or, for those who favor length and simplicity over brevity and complexity, a key containing four words chosen from among the 10,000 most common English dictionary words would still take approximately 150,000 years to crack (using this method on an average laptop).

It is worth noting that an attacker with the resources and the expertise could increase this rate by a factor of a hundred. Using a computer with powerful graphical processing units (GPUs) or a cloud computing service like Amazon’s EC2, it is possible to test 250,000 or more keys per second. A setup like this would still take several lifetimes to guess a strong password, however.

Regardless, the success of this attack against a wireless network would allow an attacker to bypass all perimeter controls, including the network firewall. Without access to the office LAN, a non-ISP, non-government attacker would have to position themselves on the same network as an external staff member in order to exploit any flaws in the organization’s email or file-sharing services. With access to the local network, however, that attacker could begin carrying out local attacks quite quickly, and from a distance.

See the *Wireless Range Mapping* activity for guidance on mapping the reach of the wifi network.

**References**

  * *Tutorial:* [“How to Crack WPA/WPA2”](http://www.aircrack-ng.org/doku.php?id=cracking_wpa) (Aircrack-ng Wiki)
[“Aircrack-ng”](http://www.aircrack-ng.org/doku.php?id=aircrack-ng) (Aircrack-ng Wiki)
  * *Documentation:* [“Aireplay-ng”](http://www.aircrack-ng.org/doku.php?id=aireplay-ng) (Aircrack-ng Wiki)
  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)

___

###### Variant: WPS PIN Cracking

WPS was built as an addition to WPA to make it easier to add devices without typing in secure passwords, but this ease of use means that a malicious actor can pose as a device and effectively reduce the potentially very difficult passwords WPA allows down to a simple numeric-only 8 character PIN. Further, the WPS system allows an attacker to work on this PIN in two parallel chunks, further reducing its security. This, like WEP, is a &quot;live&quot; attack - you have to stay connected to the network - but also like WEP, it is a guaranteed attack; your brute forcing of the WPS system will eventually (2-10 hours) allow you network access.


**Instructions**

  * Find the BSSID of the target routerr
  * Use Wash to find WPS Routers
  * Start Reaver : estimated time: Between 2 and 10 hours

**References**

  * *Guide:* [“Hacking my own router with Reaver, guide to brute forcing Wifi Protected Setup”](http://nathanheafner.com/home/2013/01/11/hacking-my-own-router-with-reaver-guide-to-brute-forcing-wifi-protected-setup/) (Nathan Heafner)
  * *Guide:* [“WPS – How to install and use Reaver to detect the WPS on your home router”](http://uwnthesis.wordpress.com/2013/07/11/wps-how-to-install-and-use-reaver-to-detect-the-wps-on-your-home-router/) (University of South Wales)
  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)
* *Tutorial:* [“Resetting WPS Lockouts”](https://forums.kali.org/showthread.php?19498-MDK3-Secret-Destruction-Mode) (Kali Linux Forums)

##### Recommendation

###### Recommendations for non-WPA networks
Transitioning to WPA networks with strong passwords, even for guest networks, is recommended.

MAC filtering and WEP provide no effective protection for a wifi network. Most wifi routers offer WPA encryption as an option, and if this is available it should be immediately implemented. Some older routers (and wifi devices) do not support WPA. It is highly recommended to upgrade immediately to hardware that supports WPA and to eliminate all WEP network access. Very few devices still functional do not support WPA2. As WPA3 becomes an option, upgrade to that.

###### Recommendations for WPA networks

WPS Pin entry should be disabled on the wireless router, or only enabled temporarily to add new devices to the network.

Choosing a strong WPA key is one of the most important steps toward defending an organization’s network perimeter from an adversary with the ability to spend some time in the vicinity of the offices. By extension, mitigating this vulnerability is critical to the protection of employees and partners (and confidential data) from the sort of persistent exposure that eventually brings down even the most well-secured information systems.

The WPA password should be long enough and complex enough to prevent both standard dictionary attacks and “brute-force attacks” in which clusters of powerful computers work in parallel to test every possible character combination. (We recommend 12 or more completely random characters or a passphrase that contains four or five—or more—relatively uncommon words.) The password should not contain common words, including number sequences, especially if they are related to the organization, its employees or its work.

A guest network, with no local network access and a distinct (possibly easier to communicate) password should be available if guests are ever given wifi access. Because passwords for guest networks inevitably end up being written on whiteboards, given to office visitors and emailed to partners, the guest password should also be changed periodically. This does not have to happen frequently, but anything less than three or four times per year may be unsafe.
