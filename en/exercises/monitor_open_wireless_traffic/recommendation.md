###### Recommendation: Cleanse wifi network connection history

For most devices, deleting networks from the “saved” network list will stop them from being probed. Obviously, this can be an annoyance for networks you regularly connect to, so renaming these networks to non-revealing names would help, as would creating non-name-associated “guest” networks for colleagues connecting to your home network.

On iPhones and iPads, it is not possible to selectively remove historical networks unless you are currently in range of that network. It is however possible to remove all history: go to Settings > General > Reset > Reset Network Settings . When you take this step, it is worth going through this reset multiple times – approximately once per year of device ownership, as the first reset appears to only remove recently-connected networks, and older networks will be broadcast.

###### Recommendation: Use innocuous network names

Organizations may want to choose innocent or generic network names, and/or not broadcast network names. It is worth noting that devices seeking out hidden networks will "beacon" for the actual network name, so this has extremely limited security use and must be combined with other protective measures. See this [Acrylic blog post](https://www.acrylicwifi.com/en/blog/hidden-ssid-wifi-how-to-know-name-of-network-without-ssid/) for further details.

It is worth noting that wifi access points are also tracked to assist in location services, and as such the location of a wireless network can be learned from its name or the MAC address of the access point. [WiGLE](https://wigle.net/) is a community-managed database for such information, but both Google and Microsoft, and likely many others, also track this locational information, so the opt-out information below is only minimally useful.

**Removal options:**
See [wikipedia]( https://en.wikipedia.org/wiki/Wi-Fi_positioning_system#Public_Wi-Fi_location_databases) for public listings. Some opt-out options exist below:

* WiGLE: [WiGLE's FAQ](https://wigle.net/faq): "To have your record removed from our database, or if you have any questions or suggestions, send an email to: WiGLE-admin [at] WiGLE.net […] include the BSSID (Mac Address) of the network in question!"
* Google Location services : https://support.google.com/maps/answer/1725632?hl=en
* Mozilla Location Services: follows the Google standard of adding _nomap to a wifi name.
* Microsoft Location Services: https://support.microsoft.com/en-us/help/20039/opt-out-of-location-services ; See also using _optout and [blocking wifi login information in Windows 10](https://www.wired.com/2015/07/share-not-share-wi-fi-windows-10/)
* Apple: No clear opt out,  more information: https://www.apple.com/newsroom/2011/04/27Apple-Q-A-on-Location-Data/
* Skyhook: http://www.skyhookwireless.com/opt-out-of-skyhook-products
