---
position: 50
approaches:
  - Técnico
authors:
    - SAFETAG
skills_trained: []
remote_options:
    - with-support
time_required_minutes: 120
organization_size_under: 100
summary: |
  "A varredura de rede é uma técnica usada para coletar informações sobre dispositivos conectados a uma determinada rede. Envolve enumerar portas abertas e serviços em execução para determinar o tipo de dispositivo, o sistema operacional e os aplicativos em execução, e muito mais. Existem muitas ferramentas de código aberto que você pode usar para utilizar essa técnica. Embora possa parecer uma técnica simples e comum, ela pode ser usada para finalidades maliciosas também.
  
  O objetivo deste exercício é identificar, enumerar e categorizar todos os dispositivos conectados à rede. Qualquer dispositivo que tenha um endereço IP é nosso alvo. Isso pode incluir:
  
  * Computadores desktop
  * Computadores portáteis
  * Tablets
  * Celulares
  * Impressoras
  * Roteadores sem fio
  * Dispositivos VoIP
  * Smart TVs e eletrodomésticos
  * Servidores e dispositivos de armazenamento"
short_summary: Reúna informações sobre os dispositivos conectados a uma rede para determinar os tipos de dispositivo, sistemas operacionais, aplicativos em execução e muito mais.
materials_needed: |
  * Laptop ou dispositivo para varredura de rede
  * nmap/zenmap
walk_through: |
  "As redes locais geralmente têm uma variedade de dispositivos conectados a elas - servidores, laptops, impressoras e dispositivos de usuários, como celulares e tablets. A varredura dos dispositivos conectados pode revelar áreas para pesquisas adicionais, como portas abertas sem razão, dispositivos/serviços desatualizados, servidores/serviços esquecidos, etc. Essas informações são, então, revisadas no exercício de pesquisa de vulnerabilidades e, em seguida (se necessário), validadas no exercício de teste de penetração.
  
  
  Usando uma ferramenta de varredura de rede (nmap/zenmap costumam funcionar bem), descubra os dispositivos conectados à rede da organização e explore informações adicionais, como serviços, banners de serviços e sistemas operacionais. Varreduras mais intensas podem ser muito demoradas para serem executadas em toda a rede, portanto, concentre-as em sistemas de maior valor. Como sempre, esteja ciente das varreduras e scripts adicionais que você escolher e concentre sua exploração (no nmap) em scripts categorizados como ”seguros”.
  Processo geral
  
  
  Usando zenmap/nmap, identifique todos os dispositivos atualmente ativos na rede. Vale a pena repetir uma varredura rápida em diferentes horários do dia e em dias diferentes, para obter uma visão mais completa da rede.
  
  * Descubra os dispositivos conectados à rede, incluindo servidores e estações de trabalho, mas também smartphones, impressoras, câmeras de segurança, telefones VoIP e outros dispositivos.
  * Registre a versão e os níveis de patch do software no dispositivo. [2]
    * Para os dispositivos ativos e dentro do escopo, a próxima etapa é reunir detalhes adicionais, incluindo nomes de host, endereços MAC (úteis para rastrear dispositivos ao longo de vários dias, pois seus endereços IP podem mudar), sistema operacional e versões, números de porta e quaisquer serviços em execução, como unidades compartilhadas, serviços de gerenciamento remoto e serviços antigos ou legados. A enumeração de hosts às vezes leva tempo, pois nem todos os dispositivos podem responder às suas varreduras da mesma maneira. Para superar isso, existem várias ferramentas com inúmeras etapas para realizar uma varredura de rede eficiente.
  * Execute as opções de detecção do sistema operacional
  * Verifique se há portas abertas e banners de serviço (nem todas as portas são mapeadas corretamente para os serviços ”esperados”, além de fornecer informações sobre a versão do serviço)
  * Selecione scripts nmap adicionais e uma verificação de portas mais completa, conforme necessário. Use filtros scripts seguros!  * 
  Categorize os dispositivos que você descobrir. Isso torna mais eficiente a execução de varreduras de vulnerabilidade posteriormente, permitindo que você os identifique com eficácia. Para dispositivos que não são facilmente categorizados, consulte a seção IoT abaixo
    * Pesquisa de porta/serviço e como decidir se uma porta aberta é suspeita: Se uma porta estiver aberta em um computador pessoal ou dispositivo móvel, isso deve ser imediatamente considerado suspeito e investigado.
  * Inspecione todos os sistemas que fornecem serviços internos à organização anfitriã.
  * Identifique portas ou serviços vulneráveis disponíveis na configuração atual do firewall do dispositivo. [1]* 
  * Identifique e investigue quaisquer portas abertas que não deveriam estar abertas (por exemplo: quase nenhuma porta deve estar aberta em computadores pessoais, consulte abaixo)
  Identifique todos os serviços estranhos/obscuros/únicos. [3]
    * Usando a lista de versões de software e patches, identifique ataques e, se possível, quais malware já foram identificados nos dispositivos que estão vulneráveis.
  
  ###### Instruções personalizadas por tipo de dispositivo
  
  
  ** Servidores** 
  Uma porta aberta em um servidor ou dispositivo IoT deve ser investigada se não corresponder a um serviço conhecido. Por exemplo, se a porta aberta for 80, 8080 ou 443, ela deve estar aberta para um servidor web, então você pode tentar navegá-la colando o endereço IP na barra de endereços do seu navegador.
  
  Se for para SSH (porta 22), tente fazer login por meio do SSH. Se o serviço SSH não deveria estar em execução no dispositivo identificado, você pode executar uma verificação das portas abertas e solicitar banners de serviço e/ou tentar telnet diretamente para a combinação IP:porta para identificar a que serviço eles estão conectados. Para identificar para que uma porta pode ser usada, consulte a lista completa em IANA.org. Usar os scripts de banner do nmap também revelará como o serviço se identifica (por exemplo, você pode executar o ssh, geralmente na porta 22, na porta 443, geralmente https). Depois de identificar para que serviço essa porta pode ser usada, sempre verifique se esse serviço está realmente em execução na máquina, e se o usuário ou administrador do sistema está ciente disso.
  
  Em geral, estas são as portas que podem estar abertas em um servidor:
  
  | Porta | Serviço |
  | ---- | ------- |
  | 21 | FTP |
  | 22 | SSH |
  | 23 | Telnet |
  | 25 | SMTP |
  | 53 | DNS |
  | 80 | HTTP |
  | 110 | POP |
  | 139 | SMB |
  | 143 | IMAP |
  | 194 | IRC |
  | 443 | HTTPS |
  | 465 | SMTP |
  | 530 | CUPS |
  | 587 | SMTP |
  | 667 | IRC |
  | 993 | IMAP |
  | 995 | POP |
  | 1900 | port authority |
  | 3306 | MySQL |
  | 6881 to 6889 | Torrent |
  | 6969 | Torrent |
  | 8080 | HTTP 
  
  **Dispositivos IoT**
  
  A IoT (Internet das Coisas) está se tornando popular devido à sua facilidade de uso e capacidade de atender a determinadas necessidades (por exemplo, uso de câmeras IP em vez de CFTV). À medida que as classes de dispositivos de rede se tornam comuns, exercícios adicionais (como a avaliação de VOIP) podem ser criados. Para outros, ainda vale a pena realizar uma avaliação básica para determinar quais implicações de segurança os dispositivos conectados à rede podem ter.
  
  Durante a varredura da rede, fique atento a dispositivos sem identificação clara do sistema operacional (a partir do nmap/zenmap) e/ou dispositivos registrados como Linux ou desconhecidos (principalmente se não houver usuários ou servidores Linux) e use pesquisas de nomes de host e endereços MAC no [Wireshark](https://www.wireshark.org/tools/oui-lookup.html) e [MACVendors](https://macvendors.com/)para obter ”pistas”.
  
  Investigue esses dispositivos através de varreduras mais intensas e específicas para identificá-los com certeza e/ou converse com a equipe para ajudar a localizar fisicamente os dispositivos. Alguns dispositivos, como Smart TVs, podem nem ser considerados dispositivos que valham a pena ser considerados, mas se estiverem conectados à rede de trabalho, podem adicionar vulnerabilidades.
  
  Depois que qualquer dispositivo IoT for identificado, prossiga com pesquisas sobre seu nível atual e possível de patch/atualização de software; quais vulnerabilidades ele pode ter, mesmo se estiver totalmente atualizado; e se houve algum ataque conhecido contra a plataforma. Verifique sua configuração para ver se eles são acessíveis pela Internet (diretamente, via UPnP ou por meio de um serviço externo ao qual o dispositivo se conecta). Verifique se as senhas padrão foram atualizadas e se todos os dispositivos conectados ao serviço têm senhas fortes, exclusivas e que não foram violadas anteriormente.
  
  Se houver vulnerabilidades não solucionáveis, considere sugerir a remoção do dispositivo IoT da rede ou a criação de uma rede separada, desconectada dos recursos da organização, para dispositivos não relacionados ao trabalho.
  
  **Windows / SMB Networks**
  
  * SNMP
  * SMB
  * NetBIOS
  * Diretórios Compartilhados
  * RDP
  * Telnet
  * Interceptação de Senhas (_Password Sniffing_)
  
  Você pode usar o smbtree para solicitar uma lista de todos os nomes de dispositivos de rede smb e o nmblookup para conectá-los ao seu endereço IP.
  
  Mensagens de autenticação NTLM não assinadas vulneráveis a ataques Man-in-the-Middle em servidores de arquivos SMB. Isso também permite que um invasor na LAN adicione, remova ou copie arquivos de e para os servidores de arquivos da organização (e estações de trabalho com compartilhamento de arquivos habilitado).
  
  * No Windows, use netstat no prompt de comando como 1administrador: o comando seria netstat -ab - isso mostrará o nome do processo em execução na porta aberta.
  * Para identificar o processo na porta aberta com mais detalhes, execute o [Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer)  oficial da Microsoft (clique com o botão direito do mouse em um processo para ver as Propriedades - a porta estará visível na guia TCP/IP e você encontrará mais informações sobre o caminho do processo na guia ”Imagem”).
  * Você pode investigar o processo no Virustotal diretamente do Process Explorer, clicando com o botão direito do mouse no processo e clicando em ”Verificar no VirusTotal”.
  
  MacOS
  
  * No Mac, inicie o netstat lsof - isso mostrará o caminho do processo em execução na porta aberta.
  
  GNU Linux
  
  * No Linux, siga [estas instruções](https://www.cyberciti.biz/faq/what-process-has-open-linux-port/).
  
  
  
  
  
  
  
  ###### Verificação de rede externa
  
  A varredura selecionada de dispositivos de rede externa (sites, webmail, serviços de extranet) também pode revelar vulnerabilidades ou outras áreas de interesse. No entanto, é importante que você obtenha aprovação ou qualquer documento que comprove por escrito que você tem autoridade para fazer a varredura dos ativos da organização alvo, juntamente com seus recursos e serviços da web.
  
  As varreduras de rede externa são diferentes das varreduras de rede local. Isso ocorre porque você está varrendo dispositivos que estão disponíveis publicamente e isso pode ser feito remotamente, fora das instalações da organização. Se a organização auditada concordou em ter suas máquinas públicas verificadas, lembre-se de que você precisa considerar solicitar à organização auditada opções da lista de permissões para evitar IDS/IPS, firewalls e outros mecanismos de bloqueio durante a verificação. Certifique-se também de ter verificado o escopo do alvo. Isso evita a verificação de alvos fora do escopo, o que pode levar a outros problemas.
  
  A maioria das máquinas que você encontrará em varreduras de rede externa são:
  
  * Servidores web
  * Servidores DNS
  * Servidores de e-mail
  * Dispositivos de gateway
  * Servidores FTP
  * Servidores em nuvem
  
  ###### Usando nmap/zenmap
  
  Usando uma ferramenta de varredura de rede (**nmap/zenmap** funcionam bem), descubra os dispositivos conectados à rede da organização e explore informações adicionais, como serviços, banners de serviços e sistemas operacionais. Varreduras mais intensas podem ser muito demoradas para serem executadas em toda a rede, portanto, concentre-se nos sistemas de maior valor. Como sempre, esteja ciente das varreduras e scripts adicionais que você escolheu e concentre sua exploração (no nmap) em scripts categorizados como seguros ou ”não disruptivos”.
  
  * Descubra dispositivos conectados à rede, incluindo servidores e estações de trabalho, mas também smartphones, telefones VoIP e outros dispositivos.
  * Portas abertas
  * Detecção do sistema operacional
  * Capture banners (nem todas as portas são mapeadas corretamente para seus serviços ”esperados”, além de fornecer informações sobre a versão do serviço)
  * Conforme necessário, utilize scripts adicionais e faça varredura de portas de forma mais profunda (veja as diferentes variantes oferecidas pelas ferramentas)
  
  De acordo com o site do nmap:
  > ”O Nmap (”Network Mapper”) é um utilitário gratuito e de código aberto (licença) para descoberta de redes e auditoria de segurança. Muitos administradores de sistemas e redes também o consideram útil para tarefas como inventário de rede, gerenciamento de agendas de atualização de serviços, e monitoramento do tempo de atividade de hosts ou serviços. O Nmap usa pacotes IP brutos de maneiras inovadoras para determinar quais hosts estão disponíveis na rede, quais serviços (nome e versão do aplicativo) esses servidores estão oferecendo, quais sistemas operacionais (e versões do SO) eles estão executando, que tipo de filtros de pacotes/firewalls estão em uso e dezenas de outras características. Ele foi projetado para varrer rapidamente grandes redes, mas funciona bem contra hosts únicos”. É considerada a ferramenta de mapeamento de rede mais popular disponível.
  .
   Abaixo estão os comandos para realizar a varredura de rede usando o Nmap..
  * **Comandos básicos do Nmap**
  | Comando | Descrição| | ------------------------------- | ------------------------------------------------------------- || nmap `192.168.1.1` | Verificar um único IP/alvo específico | | nmap `www.targetdomain.com` | Verificar um domínio específico | 
  | nmap `172.16.1.1-35` | Verificar o intervalo de IPs de 192.168.1.1 a 192.168.1.35 | 
  | nmap `172.16.1.1/24` | Verificar uma sub-rede |
   | nmap -iL `target-IPs.txt` | Verificar uma lista de IPs do arquivo de lista `target-ip.txt` | 
  | nmap -p 80 `172.16.1.1` | Verificar porta(s) específica(s) em um alvo ou intervalo de IPs ou um arquivo de lista | 
  | nmap -p 21-80 `172.16.1.1` | Verificar alvo, intervalo de IPs ou arquivo de lista com um intervalo de portas específico | 
  | nmap -F `172.16.1.1` | Verificar alvo com as 100 portas mais comuns (RÁPIDO) |
  | nmap -p- `172.16.1.1` | Verificar todas as 65.535 portas em um alvo |
  * *Descoberta avançada de hosts e varredura de portas com o Nmap**
  
  | Opção | Comando | Descriçao |
  | -------- | ----------------------------- | ------------------------------------------------------------ |
  | **\-sT** | nmap **\-sT** `172.16.1.1` | Verificação de porta de conexão TCP (com privilégios de root por padrão) |
  | **\-sS** | nmap **\-sS** `172.16.1.1` | Verificação usando TCP SYN port Scan |
  | **\-sU** | nmap **\-sU** `172.16.1.1` | Verificar portas UDP |
  | **\-sA** | nmap **\-sA** `172.16.1.1` | Verificar usando a verificação de porta TCP ACK |
  | **\-sn** | nmap **\-sn** `172.16.1.1/24` | Verificação de descoberta de host, intervalo de sub-rede IP - verificação de porta desativada |
  | **\-Pn** | nmap **\-Pn** `172.16.1.1/24` | Varredura de portas intervalo de sub-rede IP - descoberta de host desativada |
  | **\-n** | nmap **\-n** `172.16.1.1` | Verificar alvo sem resolução DNS |
  | **\-PR** | nmap **\-PR** `172.16.1.1` | Executar descoberta ARP na rede local |
  
  * **Detecção da versão e enumeração de serviços usando Nmap**
  
  | Option | Command | Description |
  | -------- | -------------------------- | ---------------------------------------------------------------- |
  | **\-sV** | nmap **\-sV** `172.16.1.1` |  
  Executa a detecção da versão dos serviços em execução nas portas |
  | **\-O** | nmap **\-O** `172.16.1.1` | Detecção remota do sistema operacional usando o método de impressão digital da pilha TCP/IP |
  | **\-A** | nmap **\-A** `172.16.1.1` | Ativa detecção do sistema operacional, detecção da versão e traceroute |
  
  * **Detecção da versão e enumeração de serviços com Nmap**
  
  | Opção | Comando | Descrição |
  | -------- | -------------------------- | -------------------------------------------------------------------------------- |
  | **\-T0** | nmap **\-T0** `172.16.1.1` | Varredura do tipo PARANOID (PARANÓICA, em português) - Evita IDS |
  | **\-T1** | nmap **\-T1** `172.16.1.1` | Verificação SNEAKY (SORRATEIRA, em português) - Evita IDS |
  | **\-T2** | nmap **\-T2** `172.16.1.1` | Varredura POLITE (POLIDA, ou EDUCADA, em português) - Varredura lenta para reduzir a largura de banda e usar menos recursos da máquina alvo |
  | **\-T3** | nmap **\-T3** `172.16.1.1` |  
  Varredura NORMAL - Velocidade padrão |
  | **\-T4** | nmap **\-T4** `172.16.1.1` | Varredura AGRESSIVE (AGRESSIVA, em português) - varredura rápida, presumindo que você esteja em uma rede rápida e confiável |
  | **\-T5** | nmap **\-T5** `172.16.1.1` | INSANE scan - Verificação INSANE (INSANA, em português) - Varredura de rede extraordinariamente rápida, mas com perda de precisão |
  
  * **Varredura usando o Nmap Scripting Engine**
  
  | Opção | Comando | Descrição |
  | ------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
  | **\-sV -sC** | nmap **\-sV -sC** `172.16.1.1` | Verifica usando scripts seguros padrão |
  | **\-sV --script=`scriptname`&ast;** | **\-sV --script=smb&ast;** `172.16.1.1` | Verifica o destino com um conjunto de scripts (para este exemplo, scripts smb) |
  | **\--script=`script-name`.nse** | nmap -sV -p 443 **\--script=ssl-heartbleed.nse** `172.16.1.1` | Verifica usando um script específico (para este exemplo, usamos o script `ssl-heartbleed.nse` ) |
  | **\--script=`script1`,`script2`,`script3`** | nmap **\--script=asn-query,whois,ip-geolocation-maxmind** `172.16.1.1` |  Verifica usando vários scripts diferentes combinados |
  
  * **Verificação usando opções de evasão e falsificação de firewall/IDS do Nmap**
  
  | Opção | Comando | Descrição |
  | ---------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------- |
  | **\-f** | nmap **\-f** `172.16.1.1` | Faz varredura usando pequenos pacotes IP fragmentados para evitar a filtragem de pacotes |
  | **\-mtu `value`** | nmap **\-mtu 64** `172.16.1.1` |  
  Faz varredura usando tamanho MTU personalizado |
  | **\-D `IP address to spoof`** | nmap **\-D 172.16.1.200, 172.16.100** `172.16.1.1` | Faz varredura usando endereços os IP falsificados determinados |
  | **\-S `fakesource.com`** | nmap **\-S fakesource.com** `targetdomain.com` |Faz varredura a partir de fakesource.com. (Pode ser necessária uma interface de saída (por exemplo, `eth0`) e a opção `-Pn`) |
  | **\-g `port number`** | nmap **\-g 53** `172.16.1.1` |  
  Faz varredura usando a porta `53` como número da porta de origem (fazendo com que pareça um tráfego DNS normal) |
  | **\-proxies `http://1.2.3.4:8080`,`http://4.3.2.1:8080`** | nmap \*\*-proxies http://123.12.23.10:8080, | |
  | http://211.212.101.22:8080\*\* `172.16.1.1` | O Relay nmap faz varreduras através de proxies HTTP/SOCKS4 | |
  
  * **Resultados da varredura do Nmap**
  
  | Opção | Comando | Descrição |
  | -------------------- | -------------------------------------- | ------------------------------------------------ |
  | **\-oN `name.file`** | nmap `172.16.1.1` **\-oN resultado.file** |  
  Gera os resultados no arquivo `resultado.file`|
  | **\-oX `file.xml`** | nmap `172.16.1.1` **\-oX resultado.xml** | Resultados XML para o arquivo `resultado.xml` |
  | **\-oG `name.file`** | nmap `172.16.1.1` **\-oG resultado.grep** | Resultados ”grepáveis” no arquivo `resultado.grep` |
  | **\-oA `resultados`** | nmap `172.16.1.1` **\-oA results** | Resultados nos três formatos principais de uma vez |
  
  
  **Trabalhando com Interface gráfica usando Zenmap**
  
  Embora o Nmap possa parecer intimidante para alguns, especialmente com todos aqueles comandos e opções, você pode usar um Nmap em interface gráfica chamado Zenmap. Você pode baixar o Zenmap neste link
  
  O Zenmap possui diferentes recursos que ajudam a gerenciar varreduras para importar e exportar resultados.
  
  Ele vem com configurações de varredura predefinidas que você pode escolher. Dependendo do seu ambiente de destino e do seu acordo com o cliente, você pode selecionar entre:
  
  | Opção| Comando |
  | -------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
  | ** Varredura intensa** | `nmap -T4 -A -v` |
  | **Varredura intensa + UDP** | `nmap -sS -sU -T4 -A -v` |
  | **Varredura intensa + todas as portas TCP** | `nmap -p 1-65535 -T4 -A -v` |
  | **Varredura intensa - Sem ping** | `nmap -T4 -A -v -Pn` |
  | **Varredura com ping** | `nmap -sn` |
  | **Varredura rápida** | `nmap -T4 -F` |
  | **Varredura rápida Plus** | `nmap -sV -T4 -O -F --version-light` |
  | **Traceroute rápido** | `nmap -sn --traceroute` |
  | *Verificação padrão** | `nmap` |
  | **Verificação abrangente e lenta** | `nmap -sS -sU -T4 -A -v -PE -PP -PS80,443 -PA3389 -PU40125 -PY -g 53 --script ”default or (discovery and safe)”` |"
considerations: |
  * **Dispositivos dentro do escopo** Lembre-se sempre de que algumas organizações podem não querer que você verifique tudo em sua rede. Para evitar isso, sempre pergunte à organização auditada se há dispositivos específicos que precisam ser excluídos. Essas máquinas podem ser essenciais para o funcionamento deles, ou simplesmente não querem que sejam verificadas. Se a organização quiser exclusões, explique as possíveis consequências de uma máquina não passar pela avaliação de vulnerabilidade. **Ao verificar servidores públicos, verifique se o host do servidor (empresa de web, provedor de nuvem etc.) aprovou a verificação e se a verificação remota é legal na jurisdição** em que você está realizando a verificação e no local do servidor remoto.
  title: Varredura de Rede
skills_required:
    - Mapeamento de Red
overview: |
  "* Confirme quais dispositivos e servidores estão dentro do escopo da auditoria e confirme que todos os provedores de serviços (hosts de sites, hosts em nuvem etc.), assim como pessoas cujos dispositivos podem ser afetados, foram informados e concordaram com a realização de qualquer varredura.
    * EEnumere e categorize todos os dispositivos conectados à rede da organização. Observe que isso pode incluir dispositivos IoT (Internet das Coisas), como câmeras IP usadas para segurança, dispositivos ”smart”, e dispositivos pessoais, como celulares, que podem não estar no escopo.**Discuta o escopo da auditoria no que se aplica aos dispositivos conectados à rede de trabalho e certifique-se de que a equipe compreenda o que você está fazendo.**
    * Em alguns casos, o escopo da auditoria pode incluir dispositivos externos. A varredura nesses casos será muito direcionada. Se a organização auditada concordou em ter suas máquinas públicas verificadas, lembre-se de que você precisa considerar solicitar à organização opções de lista de permissões para evitar IDS/IPS, firewalls e outros mecanismos de bloqueio durante a verificação. Certifique-se, também, de ter verificado o alvo dentro do escopo. Isso evita a verificação de alvos fora do escopo, o que pode levar a outros problemas.
  * Categorize e reúna detalhes adicionais sobre os dispositivos que você descobrir
  * Explore vulnerabilidades potenciais, dispositivos inesperados e portas abertas suspeitas
  "
recommendations: >
  "Embora as redes de escritório sejam frequentemente tratadas como espaços ”confiáveis”, devem ser implementadas medidas para reduzir os danos potenciais de um invasor que obtenha acesso. Além disso, os dispositivos que ”viajam” — como laptops e celulares — devem ter configurações de segurança adequadas (geralmente, firewalls) para protegê-los em outras redes.
  
  A organização deve ter uma política para quando se conecta dispositivos pessoais a redes de trabalho, bem como para quando se conecta dispositivos de trabalho a redes não relacionadas ao trabalho."
---
