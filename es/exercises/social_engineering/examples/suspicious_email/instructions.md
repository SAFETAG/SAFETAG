
#### Instructions Social Engineering Suspicious email Activity
 
In this exercise participants will examine an email for clues about its authenticity.

##### Materials to Prepare

  * A “malicious” example e-mail. Details below on how to create your own (which will take an hour or so to prepare, though once it is prepared you don't need to do so again).
    * You can identify examples "in the wild" or from news stories to use, although creating your own can provide more utility and practice for training participants throughout a malware training session, since you can ensure it illustrates everything you want to cover.
    * Be sure you have examples of very obvious and general malicious phishing email (that most participants would be suspicous of when paying attention), and a very convincing spearphishing email.
  * Example infected attachment (you may want to use this one, which has the EICAR test virus).
  * (Optional) Example phishing website which should be created using XAMPP and HTTrack. (Approximately 90 minutes to set up for the first time, though once it is prepared you will only need to turn on XAMPP for the demonstration)
  * Flipchart or whiteboard with markers (flipcharts are often preferred so you can keep the notes from the session to refer to later as needed)
  * Projector 

###### Creating the "malicious" example email

  * Send an e-mail to yourself and export it as a .EML file (Mail message file) so that you can edit the source code. You can use Notepad or any other text editor to do so.
    * To export to EML in Outlook, simply select your message and click “Save As”. Then select “Outlook Message Format - Unicode” as your file type.
    * In Thunderbird, right-click on the e-mail message you would like to export and select “Save as”. Leave “All files” as your file type.
    * If you’re using GMail, click the down arrow next to “Reply” in the header area of the e-mail you want to save. Select “Show original” from the menu that comes up. Select all text, copy it and paste it on any plain text editor (such as Notepad) then save the file as “.EML”.  
  * (Optional) When composing the e-mail you will send to yourself, include an attachment, such as this "report" (Right-click and select “Save File As) to download which is infected with the EICAR script.
  * Locate the “From:” header and add a “Reply-to: badguy@example.com” header to show an e-mail can be sent from a spoofed account. For example:

```
From: Legit Sender <legit_sender@example.com>
To: Bad Guy <badguy@example.com>
```

  * Scroll down to the end of the document. You will notice that the body of your message shows up as plain text (under the "Content-Type: text/plain header") and rich text (HTML) under "Content-Type: text/html." This is because most e-mail clients today support HTML formatting. Make sure to edit both sections of your message so changes are reflected in the e-mail when you open it for demonstration.
  * Modify the body of your message to Include typos and grammatical mistakes in it.
  * Include an obfuscated URL linking to a malware test file. For instance, the link http://bit.ly/E0hO8 points to a test file with the EICAR script, but this is hidden by the use of a bit.ly address.
  * On the HTML section of your message body,  create a “fake url” that links to a harmful site (for instance, the email might contain what appears to be a link to “example.com” but the link actually points to “harmfulsite.com”). For example:

```
Content-Type: text/html; charset="utf-8"
MIME-Version: 1.0
Content-Transfer-Encoding: quoted-printable

Remember to visit <a href=’http://www.harmfulsite.com’>http://www.example.com</a> to win our contest!
```

  * Crafting the content of the email. You may choose to create a "stock" email for this exercise, with customized versions for various trainings. Keep in mind that most participants will be familiar with your average general phishing email and may benefit more from an email that is more targeted towards them and their community. Items to include:
    * EiCAR attachment, with a logical title vis-a-vis the content
    * Obfuscated URL link using a shortner (e.g., the bit.ly address above or one of your own devising)
    * A URL lnk that appears to go to an innocuous site but actually goes to a different, malicious-looking URL (e.g., A sentence that says "Please check out our campaign page at "www.facebook.com/OccupyMainStreet," where the URL actually links to a malicious URL that only becomes visible when you either mouse over it or click on the link and are redirected).
    * Link to a customized phishing website (optional per section below).
    * Choose your sender and reciever emails wisely, along with any cc'd emails. These can be used to illustrate how emails can seem trustworthy or valid at first glance and should be examined more closely, as well as the common tactic of cc'ing contacts the recipient may know or are familiar with. Other examples can be addresses that may be secondary accounts for legitimate contacts (e.g., "anna.hrw@gmail.com" as a misleading Human Rights Watch staffer emailing about regional human rights issues if your participants work with HRW).
    * Anything else you can think of, especially any contemporary tactics or tactics that are being employed to target high-risk actors similar to your participants.

###### (Optional) Create your own phishing website

You can also create a website as an example of phishing. This is recommended for trainers with some previous knowledge of HTML editing, Apache server configuration, and name to IP-translation using the HOSTS file.

(**Note:** You don’t have to link to this site in your email. The purpose is simply to show how a hacker might camouflage a fake site with a clever URL - such as “tvvitter.com” - while maintaining the design of the genuine site). 

  * Choose the site you would like to mirror.
    * Use WinHTTrack to create a local copy of the website on your computer.
    * After opening WinHTTrack click “Next” to start a new project.
    * Create a New Project name and leave everything else as is. Click Next.
    * Click on “add URL” and type the URL of the site you want to mirror. Make sure that the address is correct, as some websites redirect the user to other domain names (e.g: at the time of this writing ‘http://www.facebook.com’ was redirecting users to ‘https://www.facebook.com’ - the SSL-enabled Facebook -, meaning that WinHTTrack would not find files to download under http://www.facebook.com). If you get an error the “View Log File” option at the end is very helpful to find out the correct address.
    * Click on “Set options” and make sure that “Maximum mirror depth” under the “Limits” tab is set to 0 or 1 depending on the website complexity (we don’t want to download a full website for the purposes of this training!). Click Next.
    * If you want, you may connect immediately or delay the mirror. Click Next to start the download.
    * Wait until the mirror is finished. Then click Finish.
  * Create a web server in your computer using XAMPP
    * Install XAMPP on your computer. If you extract XAMPP in a top level folder like ```"C:\"``` or ```"D:\"```, you can start most servers like Apache or MySQL directly.
    * Copy your mirrored website (usually under ```“C:\My Websites\projectname”```) to your htdocs folder (usually ```“C:\xampp\htdocs”```) making sure the htdocs folder is now the root directory of the index.htm for your mirrored website.
    * Test if your mirrored website is working. Start Apache under the XAMPP control panel and point your web browser to http://127.0.0.1. You should be able to see a copy of the mirrored website.
    * Edit some elements of the website (directly from opening the index.htm file in your htdocs folder with your favorite HTML editor, or a text editor like Notepad) to alert users that they are visiting a fake website.
    * (Optional) On the HTML source of your mirrored website, you can include a Javascript routine to alert the user that he or she was “infected” by a virus, like this:

```
<body onload=”javascript:alert(‘test’);”>Body of your mirrored website</body>
```

  * Point your website to a fake, yet clever URL (Note: this will only work in your computer).
    * Open your hosts file with your favorite text editor (such as Notepad). Hosts files are documents that aide the network name resolution. When your computer tries to connect to a website, it will first check the hosts file to see if there is any reference to it before using your DNS server to resolve the URL. The location of your hosts file varies according to your operating system. Windows users can find their hosts file under their ```“C:\windows\system32\drivers\etc\hosts"```, while MacOS and Linux users will find their hosts file under “/etc/hosts”. Follow these steps to edit your hosts file based on your operating system.
    * Each line of your hosts file translates a certain name to a specified IP address. The typical syntax consists of three parts, each separated by a space. The first part will be the location to redirect the address to, the second part will be the address that you will want to redirect, and the third part (optional) is for comments. If, for example, you would your fake website (currently hosted in 127.0.0.1) to link to the domain “tvviter.com” then you will need to include the following in your hosts file:

```
127.0.0.1 tvvitter.com #Optional Comment
```

    * Remember that this will only point “tvvitter.com” to your mirrored website. If you would also like the website to be accessible from “www.tvitter.com” you will need to include a separate line, like this:

```
127.0.0.1 tvvitter.com #main url
127.0.0.1 www.tvvitter.com #www
```

    * Save the changes to your host file. Open your browser and go to tvvitter.com. You should be able to see your mirrored page.


##### Running the Activity

This activity directly blends into the discussion that follows, so the division below is somewhat false. You can run this as group activity or with the entire group of particpants.  Or you can display the e-mail in your projector and having people comment on any inconsistencies. Sending particpants the email allows it to be more interactive. 
 
**Option One:** Sharing the e-mail you've prepared with all participants. Ask them to open it using a mail client and see what happens when they click the links or open the attachment. (Note: Since the EICAR file is a known, albeit innocuous test file for malware, it may be directed into spam folders by some of the major email providers, such as Gmail. Because of this, we suggest sharing it with participants via USB.) (This approach also serves as a way to check whether or not they have functioning anti-virus programs that provide real-time protection.) You will also want to have the email available on the projector for the subsequent discussion.
 
**Option Two:** Display the email via projector and engage the participants as a group as you analyze the email and its contents.  *See also the Phishing Quiz example in this section.*

##### Discussion

Once the email is shared, you can lead a discussion as participants explore its content and components. Items to cover as you have participants explore the email:

  * What are participants' initial observations?
  * Show participants how to check the full header of the message. Are participants able to spot some inconsistencies?
  * Hover the cursor over links in the email (without clicking). Are participants able to spot anything suspicious (or phishy)? Explain URL shorteners, what they consist of and why they pose a security threat. Explain how most short URLs can be previewed.
  * Any observations about the sender? The addresses of those cc'd (if any)?
  * What happens when they open the attachment? (After participant input on this, open the EICAR file on your computer being projected and show how your own A/V in prevents the computer from being infected.)
  * On the flipchart, write “'phishing” and “malware” and explain the meaning of these words. 
  * If you mirrored a website, now is a good time to show participants what a phishing website looks like. Note the subtle URL variances between the original website and the “fake” one.
  * Facilitate further discussion among participants: Do they have their own techniques for identifying phishing attacks and avoiding infections through email and websites?
  * What would they do if they spotted an email they suspected as a phishing email? [1. delete/mark as spam; 2. tell co-workers/colleagues/friends if relevant.]
