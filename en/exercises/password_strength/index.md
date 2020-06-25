---
Approach:
- Technical
Authors:
- SAFETAG
Org_size_under:
- 100
Remote_options:
- Partial
Skills_required:
- Password auditing
Time_required_minutes:
- 120
---


#### Password Strength

##### Summary
This exercise supports the auditor in building an effective dictionary that is customized to an organization.

This dictionary can then be used in a variety of ways:

* By using the examples referenced in the [WPA Password Cracking](#wpa-password-cracking) exercise, the auditor can attack weak wifi passwords, which present a non-personal and non-disruptive way to demonstrate password security problems.  Weak wifi passwords are specifically a challenge, as wifi signals often are accessible outside of an office's physical limits, but provide full access to the private network.
* An Auditor can show or discuss their preferred customization strategy and the tools (like JtR) that automatically "mutate" passwords with numbers, capitals, and so on, to demnonstrate the power of a computer to quickly get around common "tricks"
* An Auditor can also use a password "survey" to get an understanding of password practices within the organization.

##### Overview

* Where relevant, test discovered password files, the wireless network's password strength, or discuss how adversaries attack passwords

##### Materials Needed

* For the (most common) WPA password-based attacks, an **already-prepared** dictionary of words to use to attack the password will be required. 
* The Level Up Activity, [Password Reverse Race](https://www.level-up.cc/leading-trainings/training-curriculum/activity/password-reverse-race) provides a staff activity.

##### Considerations

* Inform yourself of relevant local laws
* Do not attack individuals at an organization using this, focus on shared passwords (such as wifi) 
* Always operate with clear consent based in full understanding


##### Walkthrough
This component provides resources and recommendations on cracking passwords - both the creation of dictionaries and rules to modify those dictionaries, as well as some basic implementation as well. This is a dangerous (and in many cases, illegal) skill to use, and should be more of a guide to auditors on what password security myths do not work against modern password cracking software, and to use only with permission and only in very specific situations as a demonstration of the power of even a common laptop against weak passwords.

 * Download basic word lists
 * Research dictionary needs
 * Create custom word list
 * Build core list(s)
 * Attack a password hash using increasingly more time-consuming methods

This skillset, plus demonstration against non-invasive accounts, provides an opening for a discussion with staff on password security. See [Level Up](https://www.level-up.cc/leading-trainings/training-curriculum/secure-passwords) for further activities and exercises around passwords.

Primarily for use in the Network Access component, building a password dictionary, understanding the ways to automatically mutate it, and running it against passwords is a useful skill to have, and to use to explain why simple passwords are insecure. This [Ars Technica article](http://arstechnica.com/security/2013/10/how-the-bible-and-youtube-are-fueling-the-next-frontier-of-password-cracking/) provides a good insight into the path to tackle iterative password cracking using a variety of tools to meet different goals.

These instructions use a small set of password cracking tools, but many are possible. If there are tools you are more familiar or comfortable with using, these by no means are required. The only constraints are to be respectful and responsible, as well as keeping focused on the overall goals and not getting bogged down.

A good wordlist with a few tweaks tends to break most passwords.  Using a collection of all English words, all words from the language of the organization being audited, plus a combination of all these words, plus relevant keywords, addresses, and years tends to crack most wifi passwords in a reasonable timeframe.

An approach which begins with quick, but often fruitful, attacks to more and more complex (and time consuming) attacks is the most rewarding. However, after an hour or two of password hacking, the in-office time on other activities is more valuable, so admit defeat and move on.  See the Recommendations section for talking points around the levels of password cracking that exist in the world.  You can work on passwords offline/overnight/post-audit for report completeness.

Here is a suggested path to take with suggested tools to help. You might try the first few steps in both the targeted keyword approach and the dictionary approach before moving on to the more complex mutations towards the end of each path.

 * Targeted Keywords
   * Begin with a simple combination of organizationally relevant keywords (using hashcat's combinator attack, combining your org keyword list with itself)
   * Add in numbers/years (simple scripting, hashcat, JtR)
   * Add in other mutators like 1337 replacements, capitalization tricks (John)
 * Language dictionary attack (simple scripting, hashcat)
   * Run a series of dictionary word attacks:
     * A simple language dictionary attack
     * Add in numbers/years (simple scripting, hashcat, JtR)
     * Add in the org keywords (a full combination creates a massive list, recommend starting with 1:1)
     * Try other combinations of the dictionary, keywords, years
     * Add in other mutators like 1337 replacements, capitalization tricks (John)
 * Brute forcing (do not bother with this on-site)
   * John's incremental modes, limited by types
   * Crunch's raw brute-force attack (very, very time intensive - a complete waste of time without GPUs)

**Dictionary Research and Creation**

**Before you arrive on-site** it is important to have your password cracking tools downloaded and relevant dictionaries ready to go, as your main demonstration and use of these tools is to gain access to the organization's network. The effectiveness of this demonstration is drastically reduced if you already have had to ask for the password to connect to the Internet and update your dictionaries, tools, or so on. Some of these  files (especially larger password dictionaries) can be quite large, so downloading them in-country is not recommended.

Many password dictionary sites, such as [SkullSecurity](https://wiki.skullsecurity.org/Passwords) , maintain core dictionaries in multiple languages.  If your target language is not available, some quick regular expression work can turn spell-check dictionaries (such as those used by [LibreOffice](http://extensions.libreoffice.org/extension-center?getCategories=Dictionary) into useful word lists.  It is generally useful to always test with English in addition to the target language.

[CloudCracker](https://www.cloudcracker.com/dictionaries.html) and [OpenWall](http://www.openwall.com/wordlists/) have, for a fee, well-tested password dictionaries.

**Keyword generation** In addition, create a customized dictionary with words related to the subject as revealed in the Remote Assessment research: organization name, street address, phone number, email domain, wireless network name, etc. For the organization "ExampleOrg , which has its offices at 123 Central St., Federal District, Countryzstan , which does human rights and journalism work and was founded in 1992, some context-based dictionary additions would be:

```
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
```

Also add common password fragments: qwerty, 1234/5/6/7/8, and, based on field experience, four-digit dates back to the year 2001 (plus adding in the founding year of the organization). It's also useful to see what calendar system is in use at your organization's location as some cultures [don't use Gregorian years](https://en.wikipedia.org/wiki/Calendar#Calendars_in_use). It's quite amazing how often a recent year will be part of a wifi password -- this presentation discusses many common patterns in passwords: [https://www.owasp.org/images/a/af/2011-Supercharged-Slides-Redman-OWASP-Feb.pdf](https://www.owasp.org/images/a/af/2011-Supercharged-Slides-Redman-OWASP-Feb.pdf)

**Optional Further steps**

**Use [CeWL](http://digi.ninja/projects/cewl.php) to spider the organization's web properties** to generate additional phrases.  This list will need review, as some of the generated content is not very useful, but may be useful if the site is not in a language the auditor reads fluently.

For passwords other than WPA, specific policies or patterns may help to focus your password dictionary further.  [PACK, or Password Analysis and Cracking Toolkit](https://github.com/iphelix/PACK) is a collection of utilities developed to aid in analysis of password lists in order to enhance password cracking through pattern detection of masks, rules, character-sets and other password characteristics. The toolkit generates valid input files for Hashcat family of password crackers."  PACK is most useful for large sets of passwords, where it can detect patterns in already-broken passwords to help build new rules. Both password cracking tools listed here are powerful, and have slightly different abilities.  The auditor should choose the one they prefer and/or the one which has the features they desire for this job.

**Build more complex password lists with scripting and Hashcat** One quick way to build a more complex password list is to simply double the list up (a "combinator" attack), so that it includes an entry for each pair of these strings:

You can do a 1-way version of this list simply, such as:

```
 $ for foo in `cat pwdlist.txt`; do for bar in `cat pwdlist.txt`; do printf $foo$bar'\n'; done; done > pwdpairs.txt
 $ cat pwdlist.txt >> pwdpairs.txt
```

[Hashcat](http://hashcat.net/oclhashcat/) can do this in a live attack under its "combinator" mode, and hashcat-utils (hiding in /usr/share/hashcat-utils/combinator.bin) provides this as a standalone tool.  This provides a true combination of the list, so it exponentially increases the list size - use with caution, or use with one larger dictionary and one smaller dictionary.

For example, use these combination approach on your custom dictionary (combining it with itself, creating combinations from the above list such as example92, journorights, exampleorgrights).


```
$  /usr/share/hashcat-utils/combinator.bin dict.txt dict.txt

```

Hashcat is extremely powerful when you have desktop computer systems to use, but has a few wordlist manipulation tools that are useful regardless.

More References: (http://hashcat.net/wiki/doku.php?id=cracking_wpawpa2 , http://www.darkmoreops.com/2014/08/18/cracking-wpa2-wpa-with-hashcat-kali-linux/ )


**Use word mutation with John the Ripper (JtR)** [JtR](https://github.com/magnumripper/JohnTheRipper/commits/bleeding-jumbo) is a powerful tool you can use in combination of existing wordlists, but it also can add in common substitutions (people using zero for the letter "o"). JtR can be used to generate a static list of passwords for other programs, or it can be used directly against a password database. JtR is a bit weak combining words within a wordlist, so you should apply your customizations and any folding before moving on to JtR.

You can add custom "rules" to aid in these substitutions - a base set is included with JtR, but a much more powerful set is added by [KoreLogic] (http://contest-2010.korelogic.com/rules.html). KoreLogic also provides a custom character set "chr file" that takes password frequency data from large collections of [real-world passwords to speed up JtR's brute force mode](http://www.korelogic.com/tools.html). This PDF presentation has a good [walkthrough of how John and Kore's rules work](https://www.owasp.org/images/a/af/2011-Supercharged-Slides-Redman-OWASP-Feb.pdf). [LinuxConfig](http://linuxconfig.org/password-cracking-with-john-the-ripper-on-linux) Offers another good walkthrough.

The bleeding-edge jumbo version combines both the built-in rules and an optimized version of the [KoreLogic
rules](https://github.com/kost/jtr-stuff/tree/master/rules, and http://openwall.info/wiki/john/rules for a description of the optimizations).  [This list of KoreLogic
Rules](http://contest-2010.korelogic.com/rules.html) provides nice descriptions of what the KoreLogic rules do.  In bleeding-jumbo, you can remove "KoreLogicRules".  [BackReference](http://backreference.org/2009/10/26/password-recovery-with-john-the-ripper/) provides a great example of rules usage.

Some particularly useful ones individual rulesets are:
  * AppendYears (appends years, from 1900 to 2019) and AppendCurrentYearSpecial (appends 2000-2019 with punctuation)
  * AddJustNumbers (adds 1-4 digits to the end of everything)
  * l33t (leet-speek combinations)

There are some build-in combinations of rulesets - for example, just --rules runs john's internal collection of default rules, and --rules:KoreLogic runs a collection of the KoreLogic rules in a thoughtful order, and --rules:all is useful if you hate life.

e.g. :
```
  $ john -w:dictionary.txt --rules:AppendYears --stdout
```

[Building custom rules](http://www.openwall.com/john/doc/RULES.shtml)


**PROTIP** Create a dictionary with just "blah" and run various rules against it to understand how each ruleset or combination works. Note specifically that each rule multiplies the size of the dictionary by the number of permutations it introduces. Running the KoreLogic ruleset combination against a **one word** dictionary creates a list of 6,327,540 permutations on just that word, adding a column output is handy for additional visual impact.

```
JohnTheRipper/run/john -w=blah.txt --rules:all --stdout |column
```

**Brute force, using John and crunch** JtR's "incremental" mode is essentially an optimized brute force attack, so will take a very long time for anything but the shortest passwords, or passwords where you can limit the search space to a character set: "As of version 1.8.0, pre-defined incremental modes are "ASCII" (all 95 printable ASCII characters), "LM_ASCII" (for use on LM hashes), "Alnum" (all 62 alphanumeric characters), "Alpha" (all 52 letters), "LowerNum" (lowercase letters plus digits, for 36 total), "UpperNum" (uppercase letters plus digits, for 36 total), "LowerSpace" (lowercase letters plus space, for 27 total), "Lower" (lowercase letters), "Upper" (uppercase letters), and "Digits" (digits only). The supplied .chr files include data for lengths up to 13 for all of these modes except for "LM_ASCII" (where password portions input to the LM hash halves are assumed to be truncated at length 7) and "Digits" (where the supplied .chr file and pre-defined incremental mode work for lengths up to 20). Some of the many .chr files needed by these pre-defined incremental modes might not be bundled with every version of John the Ripper, being available as a separate download." (http://www.openwall.com/john/doc/MODES.shtml)

As a last resort, you can try a direct brute force attack overnight or post-audit to fill in details on key strength.  Crunch is a very simple but thorough approach. Given enough time it will break a password, but it's not particularly fast, even at simple passwords. You can reduce the scope of this attack (and speed it up) if you have a reason to believe the password is all lower-case, all-numeric, or so on. WPA passwords are a minimum of 8 characters, a maximum of 16, and some wifi routers will accept punctuation, but in practice these are usually just !@#$. — so:

```
$ /path/to/crunch 8 16 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$!@#$. | aircrack-ng -a 2 path/to/capture.pcap -b 00:11:22:33:44:55 -w -
```

This says to try every possible alpha-numeric combination from 8 to 16 characters. This will take a very, very, very long time.


###### Further Resources

**Sample Practice** For practice on any of these methods, you can use the wpa-Induction.pcap file from [Wireshark](http://wiki.wireshark.org/SampleCaptures).

[https://www.schneier.com/blog/archives/2014/03/choosing_secure_1.html](https://www.schneier.com/blog/archives/2014/03/choosing_secure_1.html)

[http://zed0.co.uk/crossword/](http://zed0.co.uk/crossword/)

[http://www.instantcheckmate.com/crimewire/is-your-password-really-protecting-you/#lightbox/0/](http://www.instantcheckmate.com/crimewire/is-your-password-really-protecting-you/#lightbox/0/)

Note that password cracking systems are rated on the number of password guesses they make per second.  Stock laptop computers without high-end graphics cards or any other optimizations can guess 2500 passwords/second. More powerful desktop computers can test over a hundred million each second, and with graphics cards (GPUs) that rises to billions of passwords per second. ([https://en.wikipedia.org/wiki/Password_cracking](https://en.wikipedia.org/wiki/Password_cracking)).

This website has a good explanation about how improving the complexity of a password affects how easy it is to break: [http://www.lockdown.co.uk/?pg=combi](http://www.lockdown.co.uk/?pg=combi), but is using very out of date numbers - consider a basic laptop able to produce "Class E" attacks, and a desktop, "Class F"

[http://rumkin.com/tools/password/passchk.php](http://rumkin.com/tools/password/passchk.php)

[http://cyber-defense.sans.org/blog/downloads/](http://cyber-defense.sans.org/blog/downloads/) has a calculator buried in the zip file "scripts.zip"

[http://www.dailymail.co.uk/sciencetech/article-2331984/Think-strong-password-Hackers-crack-16-character-passwords-hour.html](http://www.dailymail.co.uk/sciencetech/article-2331984/Think-strong-password-Hackers-crack-16-character-passwords-hour.html)

[https://www.grc.com/haystack.htm](https://www.grc.com/haystack.htm)

[https://www.owasp.org/images/a/af/2011-Supercharged-Slides-Redman-OWASP-Feb.pdf](https://www.owasp.org/images/a/af/2011-Supercharged-Slides-Redman-OWASP-Feb.pdf)

[http://www.nytimes.com/2014/11/19/magazine/the-secret-life-of-passwords.html?_r=1](http://www.nytimes.com/2014/11/19/magazine/the-secret-life-of-passwords.html?_r=1)

##### Recommendation

###### Recommendation: Adopt Stronger Passwords

Any important password should be long enough and complex enough to prevent both standard dictionary attacks and “brute-force attacks” in which clusters of powerful computers work in parallel to test every possible character combination. (We recommend 12 or more completely random characters or a passphrase that contains five or more relatively uncommon words.) The key should not contain common “phrases,” expecially from well known literature like Shakespeare or religious texts, but also should not include number sequences or phrases, especially if they are related to the organization, its employees or its work, and to use unique passwords for each account.

Because this becomes logistically difficult, **password managers** such as KeePassX or other systems are recommended.

Specifically for **wireless passwords**, choosing a strong WPA key is one of the most important steps toward defending an organization’s network perimeter from an adversary with the ability to spend some time in the vicinity of the offices. By extension, mitigating this vulnerability is critical to the protection of employees and partners (and confidential data) from the sort of persistent exposure that eventually brings down even the most well-secured information systems.

Because shared keys inevitably end up being written on whiteboards, given to office visitors and emailed to partners, the WPA key should also be changed periodically. This does not have to happen frequently, but anything less than three or four times per year may be unsafe.

As WPA3 becomes more widely adopted, upgrading your network to WPA3 authentication will provide substantial security against wireless password attacks.
