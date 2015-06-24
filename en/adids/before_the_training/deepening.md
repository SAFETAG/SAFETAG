### Deepening

Below are a selection of homework assignments that can be used, or the trainer can adapt and create new ones.  We recommend steering away from assignments that would gather overly sensitive information before having taken trainees through an operational security session, and strongly advise against any "active" scans such as nmap or OpenVAS.

Trainees should either first go through the Build SAFETAG homework assignment, or be given the relevant cropped section(s) and appendices from the full SAFETAG guide.

#### Homework Assignment: Build SAFETAG ####

To get us started quickly and (more or less) seamlessly at the training itself, please try to download and build the SAFETAG guide ahead of time.  You can do this by going to the [github repository](https://github.com/OpenInternet/SAFETAG) and following the [installation instructions](https://github.com/OpenInternet/SAFETAG/blob/master/docs/INSTALL.md). Please let us know (either via email of by filing an issue) if you encounter any problems.

#### Homework Assignment: Context Research ####

To help ground and focus our SAFETAG training, we’d like to assign some “homework” for you to prepare before the event.

First, select an organization that you are already familiar with as a hypothetical recipient of a SAFETAG audit.  You will not need to share the name or sensitive details of this organization, nor will any of the exercises we will use this in reveal or impact their work.

You will want to set up an encrypted container to save the results of the below work in - TrueCrypt (with caveats) remains a popular choice, but PGP-encrypted folders or minilock containers can also work.  If you are not familiar with any of these tools, please get in touch.

You will also want to perform most of this research over tor or via a similar anonymizing proxy.

With this organization in mind, go through the Context Research section of the SAFETAG guide (attached) and build an initial context report (one that does not mention the specific  organization) on regional threats.  The real meat in this chapter is in the resources section at the end - finding what local and regional digital, legal, and physical threats are relevant is very important to understanding the environment an organization with operating within.  Even if this is a country you are familiar with, refreshing your understanding is key - are large online platforms responding to government information requests?  How many?  Is encryption illegal in any way?  Are digital attacks common?  Are there any current events or recent laws that could affect the organization or your ability to safely carry out the audit?


#### Homework Assignment: Recon-ng Setup ####

 * Setup a VPN (tor won't work for this)
 * Gather API keys for use with recon-ng (See recon-ng appendix)

#### Homework Assignment: Open Source Intel Gathering ####

Finally, explore the remote assessment section.  Do NOT attempt any of the more active steps - OpenVAS and even nmap can break servers, and these have some very serious operational security concerns we want to discuss first.  However, the reference sections on advanced searching with Google and Pastebin to discover possibly unintentionally public information about the organization 

Next, review the (google dorking / OSINT) section and begin exploring their online profile.
