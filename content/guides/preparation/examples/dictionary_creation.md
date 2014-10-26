Basic wordlists

Download language-relevant dictionaries. Many password dictionary sites, such as https://wiki.skullsecurity.org/Passwords , maintain core dictionaries in multiple languages.  If your target language is not available, some cleaning can turn spellcheck dictionaries (such as those usedf by LibreOffice: http://extensions.libreoffice.org/extension-center?getCategories=Dictionary) into useful wordlists.  It is generally useful to always test with English in addition to the target language.

In addition, create a customized dictionary with words related to the subject as revealed in the Remote Assessment research: organization name, street address, phone number, email domain, wireless network name, etc. 

Using CeWL (http://digi.ninja/projects/cewl.php), the auditor can spider the organization's web properties to generate additional phrases.  This list will need review, as some of the generated content is not very useful.

Also add common password fragments: qwerty, 1234/5/6/7/8, asdf and all four-digit dates back to the year 2001.


### Quick password list folding: ###

He may then “fold” his dictionary, so that it includes an entry for each pair of these strings:
$ for foo in `cat pwdlist.txt`; do for bar in `cat pwdlist.txt`; do printf $foo$bar\n; done; done > pwdpairs.txt
$ cat pwdlist.txt >> pwdpairs.txt


### Using a pre-compilex wordlist called pwdpairs.txt ###

A good wordlist with a few tweaks tends to break most passwords.  Using a collection of all english words, all words from the language of the organization being audited, plus a combination of all these words, plus relevant keywords, addresses, and years tends to crack most wifi passwords.

$ aircrack-ng -w pwdpairs.txt -b 1A:2B:3C:4D:5E:6F sampleorg_airodump*.cap

### Using a combination of brute forcing, wordlists and roles with John the Ripper (JtR) ###

JtR is a powerful tool you can use in combination of existing wordlists, but it also can add in common substitutions (people using zero for the letter "o").  You can add custom "rules" to aid in these substitutions - a base set is included with JtR, but a much more powerful set is added by KoreLogic (http://contest-2010.korelogic.com/rules.html).

KoreLogic also provides a custon character set "chr file" that takes password frequency data from large collections of real-world passwords to speed up JtR's brute force mode (http://www.korelogic.com/tools.html) . This PDF presentation has a good walkthrough of how John and Kore's rules work: https://www.owasp.org/images/a/af/2011-Supercharged-Slides-Redman-OWASP-Feb.pdf

### Brute force, using crunch ###

As a last resort, you can try a direct brute force attack overnight or post-audit to fill in details on key strength.

Crunch is a very simple but thorough approach. Given enough time it will break a password, but it's not particularly fast, even at simple passwords. 

$ /path/to/crunch 8 16 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 | aircrack-ng -a 2 path/to/capture.pcap -b 00:11:22:33:44:55 -w -

This says to try every possible alpha-numeric combination from 8 to 16 characters. This will take a very long time. WPA passwords are a minimum of 8 characters, and can also contain punctuation. 

You can reduce the scope of this attack (and speed it up) if you have a reason to believe the password is all lower-case, all-numeric, or so on.  Some wifi routers will accept punctuation marks as well, but these are generally less used outside of periods and exclamation marks.


