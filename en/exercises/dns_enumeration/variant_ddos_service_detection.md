DDoS attacks (Distributed Denial of Service) often refers to the attack that uses the target's resources to make it unavailable to legitimate users.

According to [digitalattackmap.com](http://www.digitalattackmap.com), There are four common categories of an attack:

**TCP Connection attacks:**
  - TCP connection attack tries to use up all the available connections to the infrastructure devices such as load-balancers, firewalls and application servers. Even devices capable of maintaining state on millions of connections can be taken down by these attacks.
  
**Volumetric attacks:**
  - Volumetric attacks attempts to consume the bandwidth either within the target network/service, or between the target network/service and the rest of the Internet. These are simply about causing congestion.
  
**Fragmentation attacks:**
  - These sends a flood of TCP or UDP fragments to a victim, overwhelming the victim's ability to re-assemble the streams and severly reducing performance.

**Application attacks:**
  - These attempts to overwhelm a specific aspect of an application or service and can be effective even with very few attacking machines generating a low traffic rate (making them difficult to dtect and migrate)


**Amplification:** Two ways attacks can multiply traffic they can send:

**DNS Reflection:** *Small request, big reply*
  - By forging a victim's IP address, an attacker can send small requests to a DNS servier and ask it to send the victim a large reply. This allows an attacker to have every request from it's botnet amplifixed as much as 70x in size, making it much easier to overwhelm the target.
 
**Chargen Reflection:** *Steady streams of text*
  - Mist computers and internet connected printers support an outdated testing service called Chargen, which allows someone to ask a device to reply with a stream of random characters. Chargen can be used as a means of amplifying attacks similar to DNS attacks above.

While some or I'd say most of the advocacy group's websites don't have DDoS protection yet, it is important to include in your assessment that you have identified whether they are using DDoS mitigation service or not.

One way to identify if a website is using DDoS service or not is by investigating it's DNS record. Since that we're working with organizations may not have enough funding to subscribe to a DNS mitigation service, lot's of time you will see them not using DDoS protection.

  - [Into DNS](https://intodns.com)

Looking up ```Server Names``` or your ```A Record``` that points to a particular 3rd party CDN DDoS service such as the following examples:

    - brianna.ns.cloudflare.com (Cloudflare)
    - toby.ns.cloudflare.com (Cloudflare)
    - 4k9o.x.incapdns.net (Incapsula)
    - e3396.dscx.akamaiedge.net (Akamai)

If these appears on your result, then there's a high probability that your target is behind DDoS service. However if it's not, then it means that they are not using any DDoS protection at that time.

This then should be included in your finding. Recommending them to subscribe to free DDoS mitigation services such as:

  - [Project Galileo by Cloudflare](https://www.cloudflare.com/galileo)
  - [Project Shield by Google](https://projectshield.withgoogle.com/public)
  - [Deflect.ca](https://deflect.ca)

