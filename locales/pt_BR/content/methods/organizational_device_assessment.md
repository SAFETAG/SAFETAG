---
title: Avaliação de infraestrutura e serviços em nuvem
position: 71
summary: |
  Esse componente permite que o auditor descubra e faça uma avaliação inicial dos ativos usados na organização, como infraestrutura de rede e nuvem, servidores, bancos de dados e outros aplicativos internos, serviços e aplicativos em nuvem, provedores de e-mail/suíte de escritório, serviços de IA, serviços de domínio ou gerenciamento de terminais, produtos de segurança, ferramentas de comunicação e plataformas de mídia social. Esse componente pode ser considerado como composto por uma fase de descoberta e uma fase de avaliação. A descoberta pode ser feita por meio de entrevistas, OSINT, mapeamento e varredura de rede, pesquisas e discussões em grupo. A avaliação é feita por meio de inspeção, revisão de configuração e listas de verificação. A varredura automatizada ou manual aprofundada de vulnerabilidades é tratada separadamente no método [Varredura e Avaliação de Vulnerabilidades](../vulnerability_scanning/).
short_summary: Descubra e avalie a segurança da infraestrutura e dos serviços em nuvem usados na organização.
the_flow_of_information: "![](/img/org_device_assessment.png)"
guiding_questions: |
  * What are the the key systems and services used by the organization to manage their operations and enable their processes?
  * What work and personal devices do staff use to accomplish their work, store work related files, or engage in work communications?
  * Are there unexpected/unusual devices or services on the network?
  * How do staff communicate internally and externally? What tools do they use?
  * What are the existing in/formal security practices that the participants use to address risks.
  * If they have a physical office, what is the topology of the network? What are the routers and modems managing it?
  * What network assets does an attacker have access to once they have gained access to the internal network?
  * Who has physical access to what? Who has remote access to what? How does the choice of external service providers (local or cloud) affect autonomy and confidentiality for the organization?
  * When are , applicacations, devices, and data not monitored by trusted staff?
  * What is the level and standard of security configuration on this infrastructure? 
  * How could adversaries gain access? (forced entry, theft, social engineering, seizure)
  * Are there mitigation procedures if devices are lost or taken by adversaries? (e.g.: encrypted drives, offsite backups?)
authors:
  - SAFETAG
activities:
  - Device and Behaviour Assessment
  - Auditoria de autenticação para segurança da conta
  - Um dia na Vida
  - Uma Noite na Vida
  - Avaliando o uso dos serviços em nuvem
  - Varredura de Rede
  - Visita Guiada
  - Acesso à Redes
  - Análise do Tráfego de Rede
  - Remote Network and User Device Assessment
  - Ataques Atraves de Roteadores
  - Avaliação de segurança de VoIP
  - Mapeamento do alcance sem fio
  - Monitor Open Wireless Traffic
references:
  - Avaliação de Dispositivo
  - Segurança de Senhas
  - Separação de Privilégios Em Sistemas Operacionais
  - Analisando firewalls em diferentes sistemas operacionais
  - Identificando versões de software
  - Device Encryption By OS
  - Atualizações de Anti-Virus
  - Identificando serviços incomuns/pontuais
  - Avaliação Física
  - Network Mapping Methods
  - Acesso à Redes
  - Network Discovery Methods
  - Nmap Scanning
operational_security: |
  * Treat the information learned/collected with the utmost sensitivity and
  security. Physical notes should be destroyed immediately after use and digital
  notes should be kept in line with overall SAFETAG standards.
  * Clarify timing and seek permission with staff where necessary - some activities can tax the network or cause disruptions.
  * Study outputs for any obviously embarrassing personal information (especially traffic sniffing or personal devices connected to the network) before sharing in a report.
  * Treat captured traffic with the utmost security and empathetic responsibility. They may contain very personal data, passwords, and more. These should not be shared except in specific, intentional samples with anyone, including the organization itself.
info_required: []
outputs: |
  * List of all assets in the organization (including physical, digital, and cloud assets) including technical information such as hostname/address, owner/responsible person or department, service provider, dependencies, and associated notes.
  * A list of hosts, servers, and other network hardware on a LAN or part of cloud infrastructure.
  * Report section overviewing the organizational infrastructure and (idealized) systems of control currently put in place.
  * Notes on documented or undocumented access and security controls measures for physical and virtual assets.
  * List of identified vulnerabilities, misconfigurations, identifiable malware, that the office is vulnerable to.
  * List of malware found by running updated anti-virus on office computers (if anti-virus installed during device inspection.)
  * List of specific unsecured servers, workstations, external hard drives and any other digital resources
  * List of 'Shadow IT' found, e.g. unplanned and unsanctioned uses of IT devices or services found in the organization or among cloud services used.
  * Notes on existing security measures, procedures, for all digital systems
info_provided: []
method_icon: /img/org_device_icon.png
purpose: |
  Organizations rely on systems to support and enable efficient operations, and these assets constitute an attack surface which needs to be well understood by the auditor. Compromised infrastructure risks undermining nearly any other organizational attempt at securing information, safeguarding their team, and achieving their mission. Discovery of both the on-site and remote or cloud-based infrastructure and services used by the organization is a necessary prerequisite to assessing those systems. Many organizations do not have a strong understanding of their own infrastructure nor visibility of all devices/hosts connected to it, and simply presenting to them this architectural overview and how they currently seek to secure it is a helpful output in itself.

  Once discovery is complete (or iteratively begun), individual assets can be inspected for security status. This process will depend on the type of asset inspected and the ability of the auditor to review configurations against best practices/checklists. This process also surfaces important insights on the organization's existing procedures and capacity to maintain awareness of their assets and apply security management and controls to them. 

  The findings of this section will directly contribute to the audit report, presenting both the overview of infrastructure and services used by the organization, and the vulnerabilities found thus far. The same discovery information will be utilized in the next method using automated and manual tools for [Vulnerability Scanning & Assessment](../vulnerability_scanning/), as well as [Data Assessment](../data_assesment).
preparation: |
  The more systems administration and infrastructure/asset security assessment experience you have, the easier it will be for you to understand and review the discvered systems and assets.

  Baseline skills include:

  * Basic systems administration experience for common operating systems
  * Monitoring and analyzing wireless network traffic
  * Skill with using nmap/zenmap and its scripting options
  * Skill with Wireshark or other packet-capturing tool, as well as possibly more advanced traffic interception tools.
---
