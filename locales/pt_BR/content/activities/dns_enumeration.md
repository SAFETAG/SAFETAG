---
title: Enumeração de DNS
approaches:
  - Técnico
  - Pesquisa
position: 50
authors:
  - SAFETAG
remote_options:
  - Completado
skills_required:
  - DNS
  - Inteligência em fonte aberta (OSINT)
skills_trained: []
summary: |
  DNS significa Serviço de Nomes de Domínio (em inglês _D_omain _N_ame _S_ervice). Em resumo, o que ele faz é traduzir nomes de servidores/computadores em seus respectivos endereços IP. Ele fornece uma maneira de saber o endereço IP de qualquer máquina na Internet, a partir da URL ou domínio correspondente. Você pode considerá-lo como uma lista telefônica da Internet.

  A enumeração DNS é uma das etapas iniciais da avaliação e auditoria geral de vulnerabilidades. É uma etapa que permite descobrir mais alvos potenciais. Após a conclusão dessa etapa de avaliação, você pode encontrar problemas como vazamento de informações causado por configurações padrão ou incorretas de servidores na Internet. Além disso, você também pode ter um escopo mais amplo de alvos, como endereços IP de servidores internos, blocos de redes internas da empresa, e nomes de domínio/subdomínio.

  A enumeração DNS pode ser realizada com diferentes ferramentas e abordagens. Este guia discutirá algumas das abordagens e as ferramentas necessárias para realizar cada uma das atividades. Você pode realizar a enumeração DNS de forma passiva ou ativa, dependendo das suas necessidades de segurança operacional.

  A abordagem **passiva**, ou "indireta", refere-se ao processo de enumeração que não envia nenhum tráfego ou pacotes da sua máquina diretamente para o seu alvo. Isso pode ser feito usando ferramentas de terceiros, como ferramentas online e scanners baseados em nuvem.

  A abordagem **ativa**, ou "direta", refere-se ao envio de consultas DNS e testes de enumeração diretamente para o alvo. Considere que o tráfego é enviado para o alvo, o que pode deixar rastros, como registros de tráfego, provenientes do seu IP de origem. As técnicas ativas incluem transferência de zona, pesquisa reversa, força bruta no domínio e servidor, enumeração de registros padrão (curinga, SOA, MX, A, TXT etc.), espionagem de cache (_cache snooping_) e deslocamento de zona (_zone walking_).
overview: |
  * Using a variety of passive and active techniques, uncover as many
  domains/subdomains linked to the target organization as possible.
  * Use these to advance other aspects of your work to discover additional
  credentials and potential vulnerable or outdated services.

  **Expected Outputs**

  * A fuller map of the organization's online presence, including additional
  (potentially forgotten) hosts/services connected with the organization.
  * Domains + IP addresses
  * Subdomains + IP addresses
  * MX Records + IP addresses
  * DNSKeys
  * SOA records, DNS records and registrar
  * Domains hosted within the same IP address
  * DNS history Records
  * Domain Reputation (Web of Trust)
  * Some of this information may already give you an idea of how your target's
  infrastructure setup. For example, you may see if the target domain goes into
  a CDN (Content Delivery Network) or sometimes DDoS mitigations services by
  finding out it's NS records. You can also identify if the target's MX records
  are behind a DLP (Data Leakage Prevention) systems.
  * The output of your DNS enumeration might contain "more" information about
  the client organization (internal DNS records, hostnames, router names,
  additional IP addresses). This data is sometimes caused by misconfigured DNS
  or default service configurations, so look for misleading and false-positive
  results.
materials_needed: |
  * Computador ou Máquina Virtual com [Kali Linux.](https://www.kali.org/downloads/)
  * Conexão à Internet (e preferencialmente, VPN ou TOR)
  * Domínio(s) alvo(s)
  * Ferramenta Segura para tomar notas
considerations: |
  * Essas técnicas podem revelar seu interesse na organização alvo para qualquer pessoa em seu caminho de rede, portanto, considere o uso de uma VPN ou Tor para realizar pesquisas.
  * Ao realizar uma "enumeração ativa", é sempre bom solicitar a inclusão dos seus IPs na lista de permissões sempre que realizar avaliações. Isso elimina a possibilidade de os invasores conseguirem evitar o bloqueio. A inclusão dos seus IPs na lista de permissões também remove falsos positivos de relatórios e resultados imprecisos.
  * É importante verificar se temos os domínios de destino corretos antes de prosseguir com qualquer exercício de varredura/auditoria/avaliação dentro da metodologia SAFETAG. A última coisa que queremos que aconteça é varrer e enumerar um alvo que está fora do escopo!
walk_through: |
  * A flexibilidade de ter várias opções para realizar uma atividade de enumeração DNS é a chave para uma enumeração bem-sucedida. Na prática, comparar resultados pode ajudar a garantir que as informações coletadas sejam precisas.

  **Uma observação sobre os serviços de proteção contra DDoS**: sua investigação pode ser bloqueada por serviços de proteção contra DDoS que operam no nível do DNS, como Deflect ou CloudFlare. A ferramenta "CloudFlair" oferece algumas opções nesse caso, assim como rastrear o histórico de DNS e IP para ver se apenas os registros DNS foram alterados.

  Uma maneira de identificar se um site está usando um serviço DDoS é investigando seu registro DNS. Como estamos trabalhando com organizações que podem não ter recursos suficientes para assinar um serviço de mitigação de DNS, muitas vezes você verá que elas não usam proteção DDoS.

  [Into DNS](https://intodns.com)

  Procure ```nomes de servidores``` ou seu ```registro tipo A``` que apontam para um serviço DDoS CDN de terceiros específico, como nos exemplos a seguir:

  Looking up ```Server Names``` or your ```A Record``` that points to a particular 3rd party CDN DDoS service such as the following examples:

  - brianna.ns.cloudflare.com (Cloudflare)
  - toby.ns.cloudflare.com (Cloudflare)
  - 4k9o.x.incapdns.net (Incapsula)
  - e3396.dscx.akamaiedge.net (Akamai)

  Se eles aparecerem no seu resultado, é muito provável que o seu alvo esteja protegido por um serviço DDoS


  **Ferramentas de enumeração de DNS:**

  | Ferramenta | Descrição | Tipo | Técnica |
  |-------|------------------------------------------------------|------|------|
  |[Robtex](https://www.robtex.com/)|Reúne informações públicas sobre números IP, nomes de domínio, nomes de host, sistemas autônomos, rotas, etc., depois indexa os dados em um grande banco de dados e fornece acesso gratuito a esses dados. | Online | Passive |
  |[DNSdumpster](https://dnsdumpster.com/)|Ferramenta gratuita de pesquisa de domínios que pode descobrir hosts relacionados a um domínio, resultados com banners para HTTP, FTP, SSH e Telnet. |Online | Passive |
  |[CentralOps-Domain Dossier](https://centralops.net/co/)|Investiga domínios e endereços IP. Reúne informações sobre registrantes, registros DNS, registros Whois de rede e domínio, varreduras de serviços e traceroutes.| Online | Passive |
  |[DNSSEC Analyzer](http://dnssec-debugger.verisignlabs.com/)| Verifica os registros de gerenciamento e configurações de chaves DNSSEC. | Online | Passive |
  |[Recon-ng](https://bitbucket.org/LaNMaSteR53/recon-ng)|Framework automatizado de reconhecimento na web escrito em Python. Tem módulos independentes, interação com banco de dados, funções convenientes integradas, ajuda interativa e preenchimento automático de comandos.| Script | Active |
  [IntoDNS](https://intodns.com/) |O IntoDNS verifica a integridade e a configuração do seu DNS e também fornece relatórios sobre registros MX. Oferece sugestões para corrigir e melhorar as descobertas. | Online | Passive |
  |[YougetSignal](https://www.yougetsignal.com/tools/web-sites-on-web-server/)| Ajuda você a encontrar outros sites hospedados em um endereço IP específico, verificando se o destino está usando um serviço de hospedagem compartilhada. | Online | Passive |
  |[DNSRecon](https://github.com/darkoperator/dnsrecon)|Um script Python escrito por Carlos Perez para realizar reconhecimento DNS. Ele pode enumerar registros DNS gerais, realizar transferências de zona, realizar pesquisas reversas e reconhecimento de subdomínio usando força bruta, entre outras funções. Ele até mesmo realiza varreduras no Google, automatizando o processo que discutimos na seção Usando o Google para encontrar subdomínios.| Script | Active |
  |[DNSenum](https://github.com/fwaeytens/dnsenum)|Script perl multithreaded para enumerar informações DNS de um domínio e descobrir blocos de IP não contíguos.|Script|Online|
  tools:
    - Ferramentas De Terceiros e Online
    - DNSrecon
    - DNSenum
    - DNS Zone Transfer
    - Registros MX
tools:
  - Third Party and Online Tools
  - DNSrecon
  - DNSenum
  - DNS Zone Transfer
  - MX Records
recommendations: |
  O DNS é, por natureza, uma informação pública, mas ainda assim podemos tomar várias medidas para proteger qualquer parte dele que revele informações privadas. A Fortinet fornece um conjunto de recomendações úteis:
  https://blog.fortinet.com/2016/03/10/10-simple-ways-to-mitigate-dns-based-ddos-attacks 

  Se o site não estiver protegido contra ataques DDoS, existem vários recursos que oferecem não apenas proteção contra DDoS, mas também segurança adicional contra ataques, tais como:

  - [Deflect.ca](https://deflect.ca)
  - [Project Galileo by Cloudflare](https://www.cloudflare.com/galileo)
  - [Project Shield by Google](https://projectshield.withgoogle.com/public)

  Se uma transferência de zona foi bem-sucedida (a maioria dos provedores limita automaticamente as transferências de zona anônimas), você precisará entrar em contato com a equipe de suporte para impedir isso ou mudar para um provedor de DNS diferente. Se sua organização mantém seus próprios servidores DNS, o administrador desses servidores deve verificar as políticas de transferência de zona para impedir transferências anônimas.
organization_size_under: 1000
time_required_minutes: 45
---
