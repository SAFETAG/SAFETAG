## Summary ##
This component provides resources and recommendations on cracking passwords - both the creation of dictionaries and rules to modify those dictionaries, as well as some basic implementation as well. This is a dangerous (and in many cases, illegal) skill to use, and should be more of a guide to auditors on what password security myths do not work against modern password cracking software, and to use only with permission and only in very specific situations as a demonstration of the power of even a common laptop against weak passwords.

## Description ##
Weak passwords are prevalent - even after hundreds of well-publicized global password breaches, "password" and "12345" remain the most popular passwords. This exercise supports the auditor in building an effective dictionary and using it to attack non-personal and non-disruptive parts of an organization's infrastructure. Weak wifi passwords are specifically a challenge, as wifi signals often are accessible outside of an office's physical limits, but provide full access to the private network.

This skillset, plus demonstration against non-invasive accounts, provides an opening for a discussion with staff on password security. See https://www.level-up.cc/leading-trainings/training-curriculum/secure-passwords for further activities and exercises around passwords.

## Approach ##
 * Download basic word lists
 * Research dictionary needs
 * Create custom word list
 * Build core list(s)
 * Attack a password hash using increasingly more time-consuming methods

## Instructions ##
Primarily for use in the Network Access component, building a password dictionary,  understanding the ways to automatically mutate it, and running it against passwords is a useful skill to have, and to use to explain why simple passwords are insecure. This article (http://arstechnica.com/security/2013/10/how-the-bible-and-youtube-are-fueling-the-next-frontier-of-password-cracking/) provides a good insight into the path to tackle iterative password cracking using a variety of tools to meet different goals.

A good wordlist with a few tweaks tends to break most passwords.  Using a collection of all English words, all words from the language of the organization being audited, plus a combination of all these words, plus relevant keywords, addresses, and years tends to crack most wifi passwords.

//These instructions use a small set of password cracking tools, but many are possible. If there are tools you are more familiar or comfortable with using, these by no means are required. The only constraints are to be respectful and responsible, as well as keeping focused on the overall goals and not getting bogged down.

### Dictionary Research and Creation ###
**Before you arrive on-site** it is important to have your password cracking tools downloaded and relevant dictionaries ready to go, as your main demonstration and use of these tools is to gain access to the organization's network. The effectiveness of this demonstration is drastically reduced if you already have had to ask for the password to connect to the Internet and update your dictionaries, tools, or so on. Some of these  files (especially larger password dictionaries) can be quite large, so downloading them in-country is not recommended.

Many password dictionary sites, such as https://wiki.skullsecurity.org/Passwords , maintain core dictionaries in multiple languages.  If your target language is not available, some quick regular expression work can turn spell-check dictionaries (such as those used by LibreOffice: http://extensions.libreoffice.org/extension-center?getCategories=Dictionary) into useful word lists.  It is generally useful to always test with English in addition to the target language.

https://www.cloudcracker.com/dictionaries.html and http://www.openwall.com/wordlists/ have (for a fee) well-tested password dictionaries.

#### Customizing the dictionary ####

In addition, create a customized dictionary with words related to the subject as revealed in the Remote Assessment research: organization name, street address, phone number, email domain, wireless network name, etc. For the organization "ExampleOrg , which has its offices at 123 Central St., Federal District, Countryzstan , which does human rights and journalism work and was founded in 1992, some context-based dictionary additions would be:

exampleorg
example
exa
mple
org
123
central
federal
district
countryzstan
human
rights
journo
journalism
1992
92

Also add common password fragments: qwerty, 1234/5/6/7/8, and, based on field experience, four-digit dates back to the year 2001 (plus adding in the founding year of the organization). It's quite amazing how often a recent year will be part of a wifi password -- this presentation discusses many common patterns in passwords: https://www.owasp.org/images/a/af/2011-Supercharged-Slides-Redman-OWASP-Feb.pdf

(Optional) Use CeWL (http://digi.ninja/projects/cewl.php), to spider the organization's web properties to generate additional phrases.  This list will need review, as some of the generated content is not very useful, but may be useful if the site is not in a language the auditor reads fluently.


// For passwords other than WPA, specific policies or patterns may help to focus your password dictionary further.  https://github.com/iphelix/PACK "PACK (Password Analysis and Cracking Toolkit) is a collection of utilities developed to aid in analysis of password lists in order to enhance password cracking through pattern detection of masks, rules, character-sets and other password characteristics. The toolkit generates valid input files for Hashcat family of password crackers."  PACK is most useful for large sets of passwords, where it can detect patterns in already-broken passwords to help build new rules.


#### Password List Mutations ####

One quick way to build a more complex password list is to simply double the list up (a "combinator" attack), so that it includes an entry for each pair of these strings:

You can do a 1-way version of this list simply, such as:

 $ for foo in `cat pwdlist.txt`; do for bar in `cat pwdlist.txt`; do printf $foo$bar'\n'; done; done > pwdpairs.txt
 $ cat pwdlist.txt >> pwdpairs.txt

Hashcat can do this in a live attack under its "combinator" mode, and hashcat-utils (hiding in /usr/share/hashcat-utils/combinator.bin) provides this as a standalone tool.  This provides a true combination of the list, so it exponentially increases the list size - use with caution, or use with one larger dictionary and one smaller dictionary.

 - for example, use it on your custom dictionary (combining it with itself, creating combinations from the above list such as example92, journorights, exampleorgrights).

An incremental path is often the most rewarding.

Begin with a simple combination of organizationally relevant keywords (simple scripting or hashcat's combinator attack)
Add in numbers or years (simple scripting, 
Then do a simple english dictionary attack plus the keywords
Add in numbers or years again (scripted or via John)
Add in other mutators (John)
John's incremental modes
Crunch's raw brute-force attack


#### John the Ripper (JtR) ####

JtR (https://github.com/magnumripper/JohnTheRipper/commits/bleeding-jumbo) is a powerful tool you can use in combination of existing wordlists, but it also can add in common substitutions (people using zero for the letter "o").

A great guide is here: http://linuxconfig.org/password-cracking-with-john-the-ripper-on-linux

You can add custom "rules" to aid in these substitutions - a base set is included with JtR, but a much more powerful set is added by KoreLogic (http://contest-2010.korelogic.com/rules.html). KoreLogic also provides a custom character set "chr file" that takes password frequency data from large collections of real-world passwords to speed up JtR's brute force mode (http://www.korelogic.com/tools.html) . This PDF presentation has a good walkthrough of how John and Kore's rules work: https://www.owasp.org/images/a/af/2011-Supercharged-Slides-Redman-OWASP-Feb.pdf

http://backreference.org/2009/10/26/password-recovery-with-john-the-ripper/



JtR can be used to generate a static list of passwords for other programs, or it can be used directly against a password database.

It is a bit weak combining words within a wordlist, so you should apply your customizations and any folding before moving on to JtR.


The best attacks are when you can use a wordlist and some rules to attack a password. The "incremental" mode is essentially an optimized brute force attack, so will take a very long time for anything but the shortest passwords, or passwords where you can limit the search space to a character set: "As of version 1.8.0, pre-defined incremental modes are "ASCII" (all 95 printable ASCII characters), "LM_ASCII" (for use on LM hashes), "Alnum" (all 62 alphanumeric characters), "Alpha" (all 52 letters), "LowerNum" (lowercase letters plus digits, for 36 total), "UpperNum" (uppercase letters plus digits, for 36 total), "LowerSpace" (lowercase letters plus space, for 27 total), "Lower" (lowercase letters), "Upper" (uppercase letters), and "Digits" (digits only). The supplied .chr files include data for lengths up to 13 for all of these modes except for "LM_ASCII" (where password portions input to the LM hash halves are assumed to be truncated at length 7) and "Digits" (where the supplied .chr file and pre-defined incremental mode work for lengths up to 20). Some of the many .chr files needed by these pre-defined incremental modes might not be bundled with every version of John the Ripper, being available as a separate download."

More details here: http://www.win.tue.nl/~aeb/linux/john/john.html , http://www.openwall.com/john/doc/MODES.shtml



For WPA captures, John can either feed in to an aircrack process or attach a capture directly.  For captures, you first have to convert the .cap file (from wireshark, wifite, airodump, etc.) to a format that John likes.  The Jumbo version (https://github.com/magnumripper/JohnTheRipper/commits/bleeding-jumbo) has conversion tools for this available: 

  $wpapcap2john wpa.cap > crackme

  $./john -w:password.lst -fo=wpapsk-cuda crackme 


### Hashcat ###

http://hashcat.net/oclhashcat/ (http://hashcat.net/wiki/doku.php?id=cracking_wpawpa2 , http://www.darkmoreops.com/2014/08/18/cracking-wpa2-wpa-with-hashcat-kali-linux/ )


### Brute force, using crunch ###

As a last resort, you can try a direct brute force attack overnight or post-audit to fill in details on key strength.

Crunch is a very simple but thorough approach. Given enough time it will break a password, but it's not particularly fast, even at simple passwords.

$ /path/to/crunch 8 16 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 | aircrack-ng -a 2 path/to/capture.pcap -b 00:11:22:33:44:55 -w -

This says to try every possible alpha-numeric combination from 8 to 16 characters. This will take a very long time. WPA passwords are a minimum of 8 characters, and can also contain punctuation. 

You can reduce the scope of this attack (and speed it up) if you have a reason to believe the password is all lower-case, all-numeric, or so on.  Some wifi routers will accept punctuation marks as well, but these are generally less used outside of periods and exclamation marks.


## Recommendations ##

The WPA key should be long enough and complex enough to prevent both standard dictionary attacks and “brute-force attacks” in which clusters of powerful computers work in parallel to test every possible character combination. (We recommend 12 or more completely random characters or a passphrase that contains four or five—or more—relatively uncommon words.) The key should not contain common “phrases,” including number sequences, especially if they are related to the organization, its employees or its work. Choosing a strong WPA key is one of the most important steps toward defending an organization’s network perimeter from an adversary with the ability to spend some time in the vicinity of the offices. By extension, mitigating this vulnerability is critical to the protection of employees and partners (and confidential data) from the sort of persistent exposure that eventually brings down even the most well-secured information systems.

Because shared keys inevitably end up being written on whiteboards, given to office visitors and emailed to partners, the WPA key should also be changed periodically. This does not have to happen frequently, but anything less than three or four times per year may be unsafe.
Assets affected by this issue

https://www.schneier.com/blog/archives/2014/03/choosing_secure_1.html


http://zed0.co.uk/crossword/


http://www.instantcheckmate.com/crimewire/is-your-password-really-protecting-you/#lightbox/0/


Note that password cracking systems are rated on the number of password guesses they make per second - desktop computers can test over a hundred million each second, and if using GPU-based tools, that rises to billions of passwords per second. (https://en.wikipedia.org/wiki/Password_cracking).

This website has a good explanation about how improving the complexity of a password affects how easy it is to break: http://www.lockdown.co.uk/?pg=combi , but is using very out of date numbers - consider a basic laptop able to produce "Class E" attacks, and a desktop, "Class F"

http://rumkin.com/tools/password/passchk.php

http://cyber-defense.sans.org/blog/downloads/ has a calculator buried in the zip file "scripts.zip"

http://www.dailymail.co.uk/sciencetech/article-2331984/Think-strong-password-Hackers-crack-16-character-passwords-hour.html

https://www.grc.com/haystack.htm

// TODO: Update Lockdown's charts with modern rates!



## Resources ##

Tools

Cewl http://digi.ninja/projects/cewl.php



References

https://www.owasp.org/images/a/af/2011-Supercharged-Slides-Redman-OWASP-Feb.pdf
