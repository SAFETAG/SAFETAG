### Deepening

This section covers accessing networks. We have only included the WPA cracking section in this default curricula. You can find WEP, WPA, and MAC filtered network techniques in the Network Access guide examples. 

#### EXERCISE: Password Dictionary Creation

**The instructions for this section are in the Password Dictionary Example under the Preparation section of the full guide**

 * With a whiteboard or flipchart, ask the trainees to come up with words related to a sample organization
 * Find a locally relevant password dictionary
 * Build a micro-dictionary and start playing with combination attacks

#### EXERCISE: WPA password hacking exercise with router

**The instructions for this section are in the WPA Example under the Network Access section of the full guide**

The purpose of this exercise is to walk participants through attaining access to a WPA protected access point by cracking the WPA password.

(Trainer will log in with credentials, and then share their MAC address for trainees to deauth at will.)

  * Start the wireless interface in monitor mode on the specific AP channel
  * Start airodump-ng on AP channel with filter for bssid to collect authentication handshake
  * Use aireplay-ng to deauthenticate the wireless client
  * Run aircrack-ng to crack the pre-shared key using the authentication handshake
    * Use your earlier generated (See: Audit Preparation) "John the Ripper" password dictionary

