Breaking into network requires specialized tools as well as a significant amount of time in capturing authentication packets, and replaying those packets back to the wireless access point.

MAC filtering is a common, but easy to bypass security measure.

WEP (Wired Equivalent Privacy) has been found with several vulnerabilities. The RC4 algorithm that it uses to generate the keystream for encryption is subject to [two separate weaknesses](https://pdfs.semanticscholar.org/8aeb/2a27abc2a1d0a8b71047606fbeec0f711e03.pdf).

On the other hand, WPA/WPA2 (Wi-Fi Protected Access) is also found to be vulnerable to attack known as [KRACK](https://www.krackattacks.com/)(Key Reinstallation Attacks) as well as offline (high speed) attacks against the password itself. WPS, a common "feature" that is on by default on WPA networks, has significant vulnerabilities.

[WPA3](https://www.schneier.com/blog/archives/2018/07/wpa3.html), a new standard, is built to disallow offline password attacks, making it significantly harder to break in to that WPA2 networks. As it becomes available and devices support it, it should be a priority upgrade if wifi network security is a concern.

___

###### WEP Cracking
!INCLUDE "variant_wep_cracking.md"

___

###### MAC Filtering Bypass

!INCLUDE "variant_mac_filtering.md"

___

###### WPA Cracking

!INCLUDE "variant_wpa_cracking.md"

___

###### WPS PIN Cracking

!INCLUDE "variant_wps_pin_cracking.md"
